import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "..", ".env") });
dotenv.config({ path: join(__dirname, "..", "..", ".env") });

const { Client } = pg;
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;

async function main() {
    if (!SUPABASE_DB_URL) {
        console.error("Missing DB URL");
        return;
    }

    const client = new Client({
        connectionString: SUPABASE_DB_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();

        // 1. Add columns to exercises
        console.log("Adding gym-specific columns to exercises...");
        await client.query(`
            ALTER TABLE exercises 
            ADD COLUMN IF NOT EXISTS reps_no INTEGER,
            ADD COLUMN IF NOT EXISTS equipment TEXT[],
            ADD COLUMN IF NOT EXISTS total_reps INTEGER,
            ADD COLUMN IF NOT EXISTS rest_time_in_minutes NUMERIC,
            ADD COLUMN IF NOT EXISTS suitable_for_injuries BOOLEAN;
        `);

        // 2. Add constraint
        console.log("Adding constraint chk_gym_columns...");
        await client.query(`ALTER TABLE exercises DROP CONSTRAINT IF EXISTS chk_gym_columns;`);
        await client.query(`
            ALTER TABLE exercises
            ADD CONSTRAINT chk_gym_columns 
            CHECK (type = 'gym' OR (reps_no IS NULL AND equipment IS NULL AND total_reps IS NULL AND rest_time_in_minutes IS NULL));
        `);

        console.log("Setting non-gym metrics to NULL (enforcing constraint)...");
        await client.query(`
            UPDATE exercises 
            SET reps_no = NULL, equipment = NULL, total_reps = NULL, rest_time_in_minutes = NULL 
            WHERE type != 'gym';
        `);

        console.log("Updating suitable_for_injuries heuristics...");
        // Set suitable_for_injuries = true for low intensity meditation/yoga, false for others
        await client.query(`UPDATE exercises SET suitable_for_injuries = true WHERE type = 'meditation or yoga' AND intensity = 'low';`);
        await client.query(`UPDATE exercises SET suitable_for_injuries = true WHERE type = 'calisthenics' AND intensity = 'low';`);
        await client.query(`UPDATE exercises SET suitable_for_injuries = false WHERE suitable_for_injuries IS NULL;`);

        console.log("Populating heuristics for gym exercises...");
        // Gym High Intensity
        await client.query(`
            UPDATE exercises 
            SET reps_no = 8, total_reps = 32, rest_time_in_minutes = 2.0, equipment = ARRAY['Barbell', 'Dumbbell']
            WHERE type = 'gym' AND intensity = 'high';
        `);
        // Gym Medium Intensity
        await client.query(`
            UPDATE exercises 
            SET reps_no = 12, total_reps = 36, rest_time_in_minutes = 1.5, equipment = ARRAY['Dumbbell', 'Machine']
            WHERE type = 'gym' AND intensity = 'medium';
        `);
        // Gym Low Intensity
        await client.query(`
            UPDATE exercises 
            SET reps_no = 15, total_reps = 45, rest_time_in_minutes = 1.0, equipment = ARRAY['Machine', 'Band']
            WHERE type = 'gym' AND intensity = 'low';
        `);

        // Just to be slightly more dynamic, if name has "bodyweight", clear equipment
        await client.query(`
            UPDATE exercises 
            SET equipment = ARRAY['Bodyweight']
            WHERE type = 'gym' AND name ILIKE '%bodyweight%';
        `);

        console.log("Migration successful!");
    } catch (err) {
        console.error("Error running migration:", err);
    } finally {
        await client.end();
    }
}

main();
