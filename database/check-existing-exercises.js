import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "..", ".env") });
dotenv.config({ path: join(__dirname, ".env") });

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

        const countQuery = await client.query('SELECT source, COUNT(*) FROM exercises GROUP BY source;');
        console.log("Existing exercise counts by source:");
        console.table(countQuery.rows);

        const nullCheckQuery = await client.query(`
            SELECT COUNT(*) 
            FROM exercises 
            WHERE name IS NULL OR type IS NULL OR intensity IS NULL OR calorie_burnt IS NULL 
            OR image_link IS NULL OR source IS NULL OR source_id IS NULL;
        `);
        console.log(`Number of exercises with null values in required columns: ${nullCheckQuery.rows[0].count}`);

    } catch (err) {
        console.error("Error analyzing db:", err);
    } finally {
        await client.end();
    }
}

main();
