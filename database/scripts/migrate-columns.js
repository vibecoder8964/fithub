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

        // 1. Add columns
        console.log("Adding 'taste' column to foods...");
        await client.query(`
            ALTER TABLE foods 
            ADD COLUMN IF NOT EXISTS taste TEXT NOT NULL DEFAULT 'medium' 
            CHECK (taste IN ('low','medium','high'));
        `);

        console.log("Adding 'time_consumed_in_minutes' column to exercises...");
        await client.query(`
            ALTER TABLE exercises 
            ADD COLUMN IF NOT EXISTS time_consumed_in_minutes INTEGER NOT NULL DEFAULT 30;
        `);

        // 2. Update foods taste
        console.log("Updating 'taste' for high taste foods...");
        await client.query(`
            UPDATE foods SET taste = 'high' 
            WHERE name ILIKE '%curry%' OR name ILIKE '%sambal%' OR name ILIKE '%spicy%' 
            OR name ILIKE '%sweet%' OR name ILIKE '%cake%' OR name ILIKE '%fried%' 
            OR name ILIKE '%goreng%' OR name ILIKE '%bakar%' OR name ILIKE '%panggang%' 
            OR name ILIKE '%rendang%' OR name ILIKE '%masala%' OR name ILIKE '%tomyam%' 
            OR name ILIKE '%tom yum%' OR name ILIKE '%garlic%' OR name ILIKE '%chili%'
            OR food_category ILIKE '%candy%' OR food_category ILIKE '%dessert%' 
            OR food_category ILIKE '%snack%';
        `);

        console.log("Updating 'taste' for low taste foods...");
        await client.query(`
            UPDATE foods SET taste = 'low' 
            WHERE name ILIKE '%plain%' OR name ILIKE '%boiled%' OR name ILIKE '%steamed%' 
            OR name ILIKE '%water%' OR name ILIKE '%raw%' OR name ILIKE '%clear%' 
            OR name ILIKE '%bening%';
        `);

        // 3. Update exercises time_consumed_in_minutes
        console.log("Updating 'time_consumed_in_minutes' for exercises...");

        // Meditation or Yoga
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 15 WHERE type = 'meditation or yoga' AND intensity = 'low';`);
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 30 WHERE type = 'meditation or yoga' AND intensity IN ('medium', 'high');`);

        // Cardiovascular
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 20 WHERE type = 'cardiovascular' AND intensity = 'low';`);
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 30 WHERE type = 'cardiovascular' AND intensity = 'medium';`);
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 45 WHERE type = 'cardiovascular' AND intensity = 'high';`);

        // Calisthenics
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 15 WHERE type = 'calisthenics' AND intensity = 'low';`);
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 20 WHERE type = 'calisthenics' AND intensity = 'medium';`);
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 30 WHERE type = 'calisthenics' AND intensity = 'high';`);

        // Gym
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 30 WHERE type = 'gym' AND intensity = 'low';`);
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 45 WHERE type = 'gym' AND intensity = 'medium';`);
        await client.query(`UPDATE exercises SET time_consumed_in_minutes = 60 WHERE type = 'gym' AND intensity = 'high';`);

        console.log("Migration successful!");
    } catch (err) {
        console.error("Error running migration:", err);
    } finally {
        await client.end();
    }
}

main();
