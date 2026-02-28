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

        console.log("Checking restaurant foods (expecting all to have NULL cook_difficulty):");
        const restCheck = await client.query(`SELECT COUNT(*) as count FROM foods WHERE food_source = 'restaurant' AND cook_difficulty IS NOT NULL;`);
        console.log(`Violations: ${restCheck.rows[0].count}`);

        console.log("\nChecking home foods cook_difficulty distribution:");
        const distCheck = await client.query(`SELECT cook_difficulty, COUNT(*) as count FROM foods WHERE food_source = 'home' GROUP BY cook_difficulty ORDER BY count DESC;`);
        console.table(distCheck.rows);

        console.log("\nChecking home foods with NULL cook_difficulty (expecting 0):");
        const nullCheck = await client.query(`SELECT COUNT(*) as count FROM foods WHERE food_source = 'home' AND cook_difficulty IS NULL;`);
        console.log(`Violations: ${nullCheck.rows[0].count}`);

        // Try to insert a violation to test the constraint
        try {
            console.log("\nTesting constraint: Trying to insert restaurant food with cook_difficulty='EASY'...");
            await client.query(`
                INSERT INTO foods (fdc_id, name, food_source, cook_difficulty) 
                VALUES (99999999, 'Test Restaurant Food', 'restaurant', 'EASY');
            `);
            console.log("FAILED to enforce constraint: Insert succeeded unexpectedly.");
        } catch (e) {
            console.log("Constraint enforced successfully! Insert rejected with: " + e.message);
        }

    } catch (err) {
        console.error("Error verifying db:", err);
    } finally {
        await client.end();
    }
}

main();
