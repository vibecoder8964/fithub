import { fileURLToPath } from "url";
import { dirname, join } from "path";
import pg from "pg";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        const foodsRes = await client.query('SELECT count(*) FROM foods WHERE fdc_id BETWEEN 3001 AND 4000');
        console.log("SEA Foods count:", foodsRes.rows[0].count);

        // Check portions
        const portionsRes = await client.query(`
        SELECT count(*) FROM food_portions fp 
        JOIN foods f ON f.fdc_id = fp.fdc_id 
        WHERE f.fdc_id BETWEEN 3001 AND 4000
    `);
        console.log("SEA Food Portions count:", portionsRes.rows[0].count);

        // Check nutrients
        const nutrientsRes = await client.query(`
        SELECT count(*) FROM food_nutrients fn 
        JOIN foods f ON f.fdc_id = fn.fdc_id 
        WHERE f.fdc_id BETWEEN 3001 AND 4000
    `);
        console.log("SEA Food Nutrients count:", nutrientsRes.rows[0].count);

        // Total foods
        const totalFoodsRes = await client.query('SELECT count(*) FROM foods');
        console.log("Total Foods count:", totalFoodsRes.rows[0].count);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.end();
    }
}
main();
