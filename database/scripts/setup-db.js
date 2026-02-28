/**
 * setup-db.js
 * Runs schema.sql against Supabase Postgres.
 * Auto-tries multiple connection URL formats to handle different Supabase project configurations.
 *
 * Usage: node scripts/setup-db.js
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

// ── Extract project config from env ────────────────────────────────
const PASSWORD = "KUuxD7JhJgIQlAqS";
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;

// Derive project ref from URL or anon key
function getProjectRef() {
    const url = process.env.SUPABASE_URL || "";
    const match = url.match(/https?:\/\/([^.]+)\.supabase\.co/);
    if (match) return match[1];
    // fallback: parse from SUPABASE_DB_URL
    const dbMatch = (SUPABASE_DB_URL || "").match(/postgres\.([^:@]+)/);
    if (dbMatch) return dbMatch[1];
    return null;
}

const ref = getProjectRef();

// Build candidate connection strings to try in order
function buildCandidates() {
    const candidates = [];

    // 1. Use exact SUPABASE_DB_URL if provided
    if (SUPABASE_DB_URL && !SUPABASE_DB_URL.includes("your-project")) {
        candidates.push({ label: "env SUPABASE_DB_URL", url: SUPABASE_DB_URL });
    }

    if (ref) {
        const pw = encodeURIComponent(PASSWORD);
        // 2. Transaction pooler (port 6543) — ap-southeast-1
        candidates.push({ label: "pooler ap-southeast-1 :6543", url: `postgresql://postgres.${ref}:${pw}@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres` });
        // 3. Session pooler (port 5432 on pooler) — ap-southeast-1
        candidates.push({ label: "pooler ap-southeast-1 :5432", url: `postgresql://postgres.${ref}:${pw}@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres` });
        // 4. Direct connection (port 5432, db.ref.supabase.co)
        candidates.push({ label: "direct db.ref :5432", url: `postgresql://postgres:${pw}@db.${ref}.supabase.co:5432/postgres` });
        // 5. Transaction pooler — us-east-1 (fallback region)
        candidates.push({ label: "pooler us-east-1 :6543", url: `postgresql://postgres.${ref}:${pw}@aws-0-us-east-1.pooler.supabase.com:6543/postgres` });
        // 6. Transaction pooler — eu-west-2 (fallback region)
        candidates.push({ label: "pooler eu-west-2 :6543", url: `postgresql://postgres.${ref}:${pw}@aws-0-eu-west-2.pooler.supabase.com:6543/postgres` });
    }

    return candidates;
}

async function tryConnect(url) {
    const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 8000 });
    await client.connect();
    return client;
}

async function main() {
    const schemaPath = join(__dirname, "..", "db", "schema.sql");
    const schemaSql = readFileSync(schemaPath, "utf-8");

    const candidates = buildCandidates();
    if (candidates.length === 0) {
        console.error("ERROR: No valid connection strings could be built. Check SUPABASE_URL and SUPABASE_DB_URL in .env");
        process.exit(1);
    }

    console.log(`\n🔌 Trying ${candidates.length} Supabase connection format(s)...\n`);

    let connected = false;
    for (const { label, url } of candidates) {
        try {
            console.log(`   Trying: ${label}`);
            // Print sanitized URL (mask password)
            console.log(`   URL:    ${url.replace(/:([^:@]+)@/, ":****@")}`);
            const client = await tryConnect(url);
            console.log(`   ✅ Connected!\n`);

            // Run schema
            await client.query(schemaSql);
            console.log("✅ Schema applied — all tables created successfully.");

            // Show created tables
            const res = await client.query(
                `SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename`
            );
            console.log("\nTables in database:");
            res.rows.forEach((r) => console.log(`   - ${r.tablename}`));

            // Write the working URL back to .env
            const envPath = join(__dirname, "..", "..", ".env");
            let envContent = readFileSync(envPath, "utf-8");
            envContent = envContent.replace(/^SUPABASE_DB_URL=.*/m, `SUPABASE_DB_URL=${url}`);
            import("fs").then(({ writeFileSync }) => writeFileSync(envPath, envContent));
            console.log(`\n💾 Saved working connection URL to .env`);

            await client.end();
            connected = true;
            break;
        } catch (err) {
            console.log(`   ❌ Failed: ${err.message}\n`);
        }
    }

    if (!connected) {
        console.error("\n❌ All connection attempts failed.");
        console.error("Please get the connection string from Supabase Dashboard → Settings → Database → URI");
        console.error("and paste it as SUPABASE_DB_URL in your .env file, then re-run this script.");
        process.exit(1);
    }
}

main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
});
