/**
 * server.js — FitHub Backend API
 *
 * Endpoints:
 *   GET /api/exercises?q=...&limit=N      (rate-limited: 5/hr, min 3 max 10 results)
 *   GET /api/exercises/:id                (rate-limited: 5/hr)
 *   GET /api/foods?q=...&limit=N          (rate-limited: 5/hr, min 3 max 6 results)
 *   GET /api/foods/:fdc_id                (rate-limited: 5/hr, single + nutrients)
 *   GET /api/foods/:fdc_id/nutrition      (rate-limited: 5/hr, nutrition analytics)
 *
 * All queries use parameterized $N placeholders — ZERO string concatenation.
 * SQL injection prevention: input validation + parameterized queries + rate limiting.
 *
 * Usage: node server.js
 */

import express from "express";
import rateLimit from "express-rate-limit";
import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, ".env") });
dotenv.config({ path: join(__dirname, "..", ".env") });

const { Pool } = pg;
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;

if (!SUPABASE_DB_URL) {
    console.error("ERROR: Set SUPABASE_DB_URL in .env");
    process.exit(1);
}

const pool = new Pool({ connectionString: SUPABASE_DB_URL, ssl: { rejectUnauthorized: false } });

// ── Rate limiters (5 calls per hour per IP) ─────────────────────────
const exerciseRateLimit = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Rate limit exceeded. Maximum 5 exercise API calls per hour." },
    keyGenerator: (req) => req.ip,
});

const foodRateLimit = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Rate limit exceeded. Maximum 5 food API calls per hour." },
    keyGenerator: (req) => req.ip,
});

// ── Input validation helpers ────────────────────────────────────────
function sanitizeString(str) {
    if (typeof str !== "string") return "";
    return str.trim().slice(0, 200); // cap length
}

function clampInt(val, min, max, defaultVal) {
    const n = parseInt(val, 10);
    if (isNaN(n)) return defaultVal;
    return Math.max(min, Math.min(max, n));
}

// =================================================================
// EXERCISE ENDPOINTS
// =================================================================

// GET /api/exercises?q=push&limit=5&type=gym&intensity=high
app.get("/api/exercises", exerciseRateLimit, async (req, res) => {
    try {
        const q = sanitizeString(req.query.q || "");
        const limit = clampInt(req.query.limit, 3, 10, 10); // min 3, max 10
        const type = sanitizeString(req.query.type || "");
        const intensity = sanitizeString(req.query.intensity || "");

        let sql = "SELECT * FROM exercises WHERE 1=1";
        const params = [];
        let idx = 1;

        if (q) {
            sql += ` AND name ILIKE $${idx}`;
            params.push(`%${q}%`);
            idx++;
        }
        if (type && ["meditation or yoga", "cardiovascular", "calisthenics", "gym"].includes(type)) {
            sql += ` AND type = $${idx}`;
            params.push(type);
            idx++;
        }
        if (intensity && ["low", "medium", "high"].includes(intensity)) {
            sql += ` AND intensity = $${idx}`;
            params.push(intensity);
            idx++;
        }

        sql += ` ORDER BY name ASC LIMIT $${idx}`;
        params.push(limit);

        const result = await pool.query(sql, params);

        // Enforce minimum 3 results — if fewer found, pad with random
        if (result.rows.length < 3 && result.rows.length > 0) {
            const extraNeeded = 3 - result.rows.length;
            const existingIds = result.rows.map((r) => r.id);
            const placeholders = existingIds.map((_, i) => `$${i + 1}`).join(",");
            const extraSql = `SELECT * FROM exercises WHERE id NOT IN (${placeholders}) ORDER BY RANDOM() LIMIT $${existingIds.length + 1}`;
            const extraResult = await pool.query(extraSql, [...existingIds, extraNeeded]);
            result.rows.push(...extraResult.rows);
        }

        res.json({ count: result.rows.length, data: result.rows });
    } catch (err) {
        console.error("Exercise search error:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET /api/exercises/:id
app.get("/api/exercises/:id", exerciseRateLimit, async (req, res) => {
    try {
        const id = sanitizeString(req.params.id);
        // Validate UUID format
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
            return res.status(400).json({ error: "Invalid exercise ID format" });
        }
        const result = await pool.query("SELECT * FROM exercises WHERE id = $1", [id]);
        if (result.rows.length === 0) return res.status(404).json({ error: "Exercise not found" });
        res.json({ data: result.rows[0] });
    } catch (err) {
        console.error("Exercise detail error:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// =================================================================
// FOOD ENDPOINTS
// =================================================================

// GET /api/foods?q=broccoli&limit=5
app.get("/api/foods", foodRateLimit, async (req, res) => {
    try {
        const q = sanitizeString(req.query.q || "");
        const limit = clampInt(req.query.limit, 3, 6, 6); // min 3, max 6

        let sql = "SELECT * FROM foods WHERE 1=1";
        const params = [];
        let idx = 1;

        if (q) {
            sql += ` AND name ILIKE $${idx}`;
            params.push(`%${q}%`);
            idx++;
        }

        sql += ` ORDER BY name ASC LIMIT $${idx}`;
        params.push(limit);

        const result = await pool.query(sql, params);

        // Enforce minimum 3 results
        if (result.rows.length < 3 && result.rows.length > 0) {
            const extraNeeded = 3 - result.rows.length;
            const existingIds = result.rows.map((r) => r.fdc_id);
            const placeholders = existingIds.map((_, i) => `$${i + 1}`).join(",");
            const extraSql = `SELECT * FROM foods WHERE fdc_id NOT IN (${placeholders}) ORDER BY RANDOM() LIMIT $${existingIds.length + 1}`;
            const extraResult = await pool.query(extraSql, [...existingIds, extraNeeded]);
            result.rows.push(...extraResult.rows);
        }

        res.json({ count: result.rows.length, data: result.rows });
    } catch (err) {
        console.error("Food search error:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET /api/foods/:fdc_id  — single food with full nutrients
app.get("/api/foods/:fdc_id", foodRateLimit, async (req, res) => {
    try {
        const fdcId = parseInt(req.params.fdc_id, 10);
        if (isNaN(fdcId)) return res.status(400).json({ error: "Invalid fdc_id" });

        const foodRes = await pool.query("SELECT * FROM foods WHERE fdc_id = $1", [fdcId]);
        if (foodRes.rows.length === 0) return res.status(404).json({ error: "Food not found" });

        const nutrientsRes = await pool.query(
            `SELECT fn.amount, n.name, n.unit
       FROM food_nutrients fn
       JOIN nutrients n ON fn.nutrient_id = n.nutrient_id
       WHERE fn.fdc_id = $1
       ORDER BY n.name`,
            [fdcId]
        );

        const portionsRes = await pool.query(
            "SELECT amount, unit, gram_weight FROM food_portions WHERE fdc_id = $1",
            [fdcId]
        );

        const pricesRes = await pool.query(
            "SELECT price, currency FROM food_prices WHERE fdc_id = $1",
            [fdcId]
        );

        const countriesRes = await pool.query(
            "SELECT country FROM food_countries WHERE fdc_id = $1 ORDER BY country",
            [fdcId]
        );

        res.json({
            data: {
                ...foodRes.rows[0],
                nutrients: nutrientsRes.rows,
                portions: portionsRes.rows,
                prices: pricesRes.rows,
                countries: countriesRes.rows.map((r) => r.country),
            },
        });
    } catch (err) {
        console.error("Food detail error:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET /api/foods/:fdc_id/nutrition — analytics (calories, protein, fat, carbs)
app.get("/api/foods/:fdc_id/nutrition", foodRateLimit, async (req, res) => {
    try {
        const fdcId = parseInt(req.params.fdc_id, 10);
        if (isNaN(fdcId)) return res.status(400).json({ error: "Invalid fdc_id" });

        const result = await pool.query(
            `SELECT
         f.name,
         MAX(CASE WHEN n.name = 'Energy' THEN fn.amount END) AS calories_kcal,
         MAX(CASE WHEN n.name = 'Protein' THEN fn.amount END) AS protein_g,
         MAX(CASE WHEN n.name ILIKE '%fat%' AND n.nutrient_id = 1004 THEN fn.amount END) AS fat_g,
         MAX(CASE WHEN n.name ILIKE '%carbohydrate%' THEN fn.amount END) AS carbs_g,
         MAX(CASE WHEN n.name ILIKE '%fiber%' THEN fn.amount END) AS fiber_g,
         MAX(CASE WHEN n.name ILIKE '%sugar%' THEN fn.amount END) AS sugar_g
       FROM foods f
       JOIN food_nutrients fn ON f.fdc_id = fn.fdc_id
       JOIN nutrients n ON fn.nutrient_id = n.nutrient_id
       WHERE f.fdc_id = $1
       GROUP BY f.name`,
            [fdcId]
        );

        if (result.rows.length === 0) return res.status(404).json({ error: "Nutrition data not found" });
        res.json({ data: result.rows[0] });
    } catch (err) {
        console.error("Nutrition analytics error:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// =================================================================
// HEALTH CHECK
// =================================================================
app.get("/api/health", async (_req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({ status: "ok", database: "connected" });
    } catch {
        res.status(500).json({ status: "error", database: "disconnected" });
    }
});

// ── Start ───────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`🚀 FitHub API running at http://localhost:${PORT}`);
    console.log(`   Exercises: GET /api/exercises?q=...&limit=N  (5/hr, 3–10 results)`);
    console.log(`   Foods:     GET /api/foods?q=...&limit=N      (5/hr, 3–6 results)`);
});
