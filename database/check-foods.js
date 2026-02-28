import pg from "pg";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, ".env") });
dotenv.config({ path: join(__dirname, "..", ".env") });

const { Client } = pg;
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;

async function check() {
    const client = new Client({ connectionString: SUPABASE_DB_URL, ssl: { rejectUnauthorized: false } });
    await client.connect();
    const res = await client.query("SELECT COUNT(*) FROM foods");
    console.log("Total foods:", res.rows[0].count);
    await client.end();
}
check().catch(console.error);
