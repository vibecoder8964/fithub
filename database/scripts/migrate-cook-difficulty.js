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

        // 1. Add column (allow NULLs)
        console.log("Adding 'cook_difficulty' column to foods...");
        await client.query(`
            ALTER TABLE foods 
            ADD COLUMN IF NOT EXISTS cook_difficulty TEXT CHECK (cook_difficulty IN ('EASY', 'MEDIUM', 'HARD'));
        `);

        // 2. Add constraint
        console.log("Adding constraint chk_restaurant_difficulty...");
        // Drop it first if it exists from a previous run
        await client.query(`ALTER TABLE foods DROP CONSTRAINT IF EXISTS chk_restaurant_difficulty;`);
        await client.query(`
            ALTER TABLE foods
            ADD CONSTRAINT chk_restaurant_difficulty 
            CHECK (food_source != 'restaurant' OR cook_difficulty IS NULL);
        `);

        // 3. Update restaurant foods to NULL (this is default anyway when we added the column, but to be sure)
        console.log("Setting cook_difficulty to NULL for restaurant foods...");
        await client.query(`UPDATE foods SET cook_difficulty = NULL WHERE food_source = 'restaurant';`);

        // 4. Update home foods based on heuristics
        console.log("Updating 'cook_difficulty' for home foods...");

        // HARD
        const hardKeywords = ['curry', 'rendang', 'stew', 'roast', 'dumpling', 'pie', 'lasagna', 'bake', 'cake'];
        const hardCondition = hardKeywords.map(k => `name ILIKE '%${k}%'`).join(' OR ');

        await client.query(`
            UPDATE foods SET cook_difficulty = 'HARD' 
            WHERE food_source = 'home' AND (${hardCondition});
        `);

        // EASY
        const easyKeywords = ['raw', 'salad', 'boiled', 'toast', 'sandwich', 'smoothie', 'fruit', 'drink', 'water', 'clear soup', 'snack', 'plain', 'juice'];
        const easyCondition = easyKeywords.map(k => `name ILIKE '%${k}%' OR food_category ILIKE '%${k}%'`).join(' OR ');

        await client.query(`
            UPDATE foods SET cook_difficulty = 'EASY' 
            WHERE food_source = 'home' AND cook_difficulty IS NULL AND (${easyCondition});
        `);

        // MEDIUM (everything else that is home-cooked)
        await client.query(`
            UPDATE foods SET cook_difficulty = 'MEDIUM' 
            WHERE food_source = 'home' AND cook_difficulty IS NULL;
        `);

        console.log("Migration successful!");
    } catch (err) {
        console.error("Error running migration:", err);
    } finally {
        await client.end();
    }
}

main();
