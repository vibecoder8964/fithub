/**
 * ingest-sea-foods.js
 * Ingests the southeast_asia_healthy_foods_1000.sql file into the Supabase Postgres database.
 */

import { readFileSync } from "fs";
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
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;

async function main() {
    if (!SUPABASE_DB_URL) {
        console.error("Missing SUPABASE_DB_URL in .env");
        process.exit(1);
    }

    const client = new Client({
        connectionString: SUPABASE_DB_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        console.log("🔌 Connecting to Supabase...");
        await client.connect();
        console.log("✅ Connected.");

        const sqlPath = join(__dirname, "..", "..", "southeast_asia_healthy_foods_1000.sql");
        console.log(`📄 Reading SQL file from ${sqlPath}...`);
        const sqlData = readFileSync(sqlPath, "utf-8");

        console.log("⏳ Executing SQL... This might take a few seconds.");
        await client.query(sqlData);
        console.log("✅ Successfully ingested Southeast Asia Healthy Foods!");

    } catch (err) {
        if (err.code === '23505') {
            console.log("⚠️ Data already exists (Unique constraint violation). It seems the data has already been ingested.");
        } else {
            console.error("❌ Error during ingestion:", err);
        }
    } finally {
        await client.end();
    }
}

main();
