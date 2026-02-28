import { fileURLToPath } from "url";
import { dirname, join } from "path";
import pg from "pg";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from parent (database/) and grandparent (FitHub App/)
dotenv.config({ path: join(__dirname, "..", ".env") });
dotenv.config({ path: join(__dirname, "..", "..", ".env") });

const { Client } = pg;

async function main() {
    const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;
    if (!SUPABASE_DB_URL) {
        console.error("Missing DB URL"); return;
    }
    const client = new Client({
        connectionString: SUPABASE_DB_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();

        // Check foods
        const foodsRes = await client.query('SELECT count(*) FROM foods WHERE fdc_id BETWEEN 1001 AND 2500');
        console.log("Malaysian Foods count:", foodsRes.rows[0].count);

        // Check missing portions
        const portionsRes = await client.query(`
        SELECT count(*) FROM food_portions fp 
        JOIN foods f ON f.fdc_id = fp.fdc_id 
        WHERE f.fdc_id BETWEEN 1001 AND 2500
    `);
        console.log("Malaysian Food Portions count:", portionsRes.rows[0].count);

        // Check nutrients
        const nutrientsRes = await client.query(`
        SELECT count(*) FROM food_nutrients fn 
        JOIN foods f ON f.fdc_id = fn.fdc_id 
        WHERE f.fdc_id BETWEEN 1001 AND 2500
    `);
        console.log("Malaysian Food Nutrients count:", nutrientsRes.rows[0].count);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.end();
    }
}
main();
