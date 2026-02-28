/**
 * ingest-exercises.js
 *
 * Fetches ALL exercises from:
 *   1. ExerciseDB (via RapidAPI) — ~1300+ exercises
 *   2. wger (open API)           — ~800+ exercises
 *
 * Normalizes each record and upserts into Supabase Postgres.
 * All queries use parameterized $N placeholders — ZERO string concatenation.
 *
 * Usage: node scripts/ingest-exercises.js
 */

import axios from "axios";
import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "..", ".env") });
dotenv.config({ path: join(__dirname, "..", "..", ".env") });

const { Client } = pg;

// ── Config ──────────────────────────────────────────────────────────
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST || "exercisedb.p.rapidapi.com";
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;
const PLACEHOLDER_IMAGE = process.env.PLACEHOLDER_IMAGE || "https://via.placeholder.com/640x360.png?text=No+Image";

if (!SUPABASE_DB_URL) {
    console.error("ERROR: Set SUPABASE_DB_URL in .env");
    process.exit(1);
}

// ── Calorie estimation ─────────────────────────────────────────────
// MET × weight_kg × (duration_min / 60)  →  kcal for 30 min at 70 kg
function estimateCalories(intensity, weightKg = 70, durationMin = 30) {
    const MET = { low: 3, medium: 6, high: 8 }[intensity] ?? 5;
    return +(MET * weightKg * (durationMin / 60)).toFixed(1);
}

// ── Heuristic: map exercise → type ──────────────────────────────────
function mapType(rec) {
    const name = (rec.name || "").toLowerCase();
    const equipment = (rec.equipment || "").toLowerCase();
    const category = (rec.category || "").toLowerCase();

    if (/yoga|meditation|pilates/.test(name) || /yoga/.test(category))
        return "meditation or yoga";

    if (/run|jog|sprint|bike|swim|rowing|elliptical|cardio|jump rope|jumping|cycling|treadmill|stair/.test(name) || /cardio/.test(category))
        return "cardiovascular";

    const bodyweight = /push[- ]?up|pull[- ]?up|dip|plank|burpee|squat|lunge|bodyweight|handstand|jumping jack|sit[- ]?up|crunch|mountain climber/;
    if (bodyweight.test(name) || equipment === "body weight" || equipment === "bodyweight" || equipment === "none")
        return "calisthenics";

    if (/dumbbell|barbell|machine|kettlebell|cable|smith|bench|leg press|plate|ez bar|hammer|trap bar/.test(equipment + " " + name))
        return "gym";

    return "calisthenics"; // fallback
}

// ── Heuristic: map exercise → intensity ─────────────────────────────
function mapIntensity(rec) {
    const diff = (rec.difficulty || rec.level || "").toString().toLowerCase();
    if (["beginner", "easy", "novice"].some((x) => diff.includes(x))) return "low";
    if (["intermediate", "medium", "moderate"].some((x) => diff.includes(x))) return "medium";
    if (["advanced", "hard", "expert"].some((x) => diff.includes(x))) return "high";

    const name = (rec.name || "").toLowerCase();
    if (/sprint|burpee|plyometric|hiit|metcon|explosive|power clean|snatch/.test(name)) return "high";
    if (/walk|stretch|yoga|mobility|pilates|light|seated/.test(name)) return "low";
    return "medium";
}

// ── Normalize: ExerciseDB record → our schema ──────────────────────
function normalizeFromExerciseDB(e) {
    const name = e.name || "Unknown exercise";
    const intensity = mapIntensity({ difficulty: e.difficulty, name });
    return {
        name,
        type: mapType({ name, equipment: e.equipment || "", category: e.bodyPart || "" }),
        intensity,
        calorie_burnt: estimateCalories(intensity),
        image_link: e.gifUrl || PLACEHOLDER_IMAGE,
        video_link: null,
        source: "exerciseDB",
        source_id: String(e.id ?? ""),
    };
}

// ── Normalize: wger record → our schema ────────────────────────────
function normalizeFromWger(e) {
    const name = e.name || "Unknown exercise";
    let img = PLACEHOLDER_IMAGE;
    if (Array.isArray(e.images) && e.images.length) {
        img = e.images[0].image || img;
    }
    const equipmentStr = Array.isArray(e.equipment) ? e.equipment.map((x) => x.name || "").join(" ") : "";
    const categoryStr = e.category ? e.category.name || "" : "";
    const intensity = mapIntensity({ difficulty: e.difficulty, name });

    return {
        name,
        type: mapType({ name, equipment: equipmentStr, category: categoryStr }),
        intensity,
        calorie_burnt: estimateCalories(intensity),
        image_link: img,
        video_link: null,
        source: "wger",
        source_id: String(e.id ?? ""),
    };
}

// ── Upsert into Postgres (parameterized — no string concat) ────────
async function upsertExercise(client, ex) {
    const sql = `
    INSERT INTO exercises (name, type, intensity, calorie_burnt, image_link, video_link, source, source_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    ON CONFLICT (source, source_id) DO UPDATE
      SET name          = EXCLUDED.name,
          type          = EXCLUDED.type,
          intensity     = EXCLUDED.intensity,
          calorie_burnt = EXCLUDED.calorie_burnt,
          image_link    = EXCLUDED.image_link,
          video_link    = EXCLUDED.video_link,
          created_at    = now();
  `;
    const params = [ex.name, ex.type, ex.intensity, ex.calorie_burnt, ex.image_link, ex.video_link, ex.source, ex.source_id];
    await client.query(sql, params);
}

// ── Fetch ExerciseDB (RapidAPI) ────────────────────────────────────
async function fetchExerciseDBAll() {
    if (!RAPIDAPI_KEY) {
        console.warn("⚠  RAPIDAPI_KEY not set — skipping ExerciseDB");
        return [];
    }
    console.log("📥 Fetching ExerciseDB (RapidAPI)...");
    const url = `https://${RAPIDAPI_HOST}/exercises?limit=2000&offset=0`;
    const headers = {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
    };
    const res = await axios.get(url, { headers, timeout: 60000 });
    return Array.isArray(res.data) ? res.data : [];
}

// ── Fetch wger (open API, paginated) ───────────────────────────────
async function fetchWgerAll() {
    console.log("📥 Fetching wger...");
    const results = [];
    let url = "https://wger.de/api/v2/exerciseinfo/?language=2&limit=100&format=json";
    while (url) {
        const res = await axios.get(url, { timeout: 30000 });
        const data = res.data;
        if (data && Array.isArray(data.results)) {
            results.push(...data.results);
            url = data.next || null;
            // polite throttle
            await new Promise((r) => setTimeout(r, 400));
        } else {
            break;
        }
    }
    return results;
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
    const client = new Client({ connectionString: SUPABASE_DB_URL, ssl: { rejectUnauthorized: false } });
    await client.connect();
    console.log("✅ Connected to Supabase Postgres");

    let totalInserted = 0;

    // 1) ExerciseDB
    try {
        const exdb = await fetchExerciseDBAll();
        console.log(`   ExerciseDB returned ${exdb.length} records`);
        for (const rec of exdb) {
            const norm = normalizeFromExerciseDB(rec);
            await upsertExercise(client, norm);
            totalInserted++;
        }
        console.log(`   ✅ ExerciseDB: ${exdb.length} upserted`);
    } catch (err) {
        console.warn("   ⚠ ExerciseDB fetch failed:", err.message);
    }

    // 2) wger
    try {
        const wgerAll = await fetchWgerAll();
        console.log(`   wger returned ${wgerAll.length} records`);
        for (const rec of wgerAll) {
            const norm = normalizeFromWger(rec);
            await upsertExercise(client, norm);
            totalInserted++;
        }
        console.log(`   ✅ wger: ${wgerAll.length} upserted`);
    } catch (err) {
        console.warn("   ⚠ wger fetch failed:", err.message);
    }

    // Summary
    const countRes = await client.query("SELECT COUNT(*) AS cnt FROM exercises");
    console.log(`\n🏁 Ingestion complete — ${countRes.rows[0].cnt} total exercises in DB`);

    await client.end();
}

main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
});
