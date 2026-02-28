/**
 * ingest-foods.js
 *
 * ETL pipeline:
 *   1. Fetches food data from USDA FoodData Central API
 *   2. Inserts into foods, nutrients, food_nutrients, food_portions
 *   3. Adds estimated prices to food_prices
 *   4. Adds country availability to food_countries
 *   5. Backfills missing core nutrients from general knowledge
 *
 * All queries use parameterized $N placeholders — ZERO string concatenation.
 *
 * Usage: node scripts/ingest-foods.js
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

const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;
const USDA_API_KEY = process.env.USDA_API_KEY || "DEMO_KEY";

if (!SUPABASE_DB_URL) {
    console.error("ERROR: Set SUPABASE_DB_URL in .env");
    process.exit(1);
}

// ── Food categories to search (broad coverage) ─────────────────────
const FOOD_QUERIES = [
    "apple", "banana", "orange", "grape", "strawberry", "mango", "watermelon", "pineapple",
    "broccoli", "spinach", "carrot", "tomato", "potato", "onion", "garlic", "lettuce", "cucumber", "bell pepper",
    "chicken breast", "beef", "pork", "salmon", "tuna", "shrimp", "egg", "turkey",
    "rice", "bread", "pasta", "oatmeal", "cereal", "tortilla", "noodles",
    "milk", "cheese", "yogurt", "butter", "cream",
    "almond", "peanut", "walnut", "cashew",
    "olive oil", "coconut oil", "soy sauce",
    "sugar", "honey", "chocolate", "ice cream", "cookie",
    "coffee", "tea", "orange juice", "soda", "water",
    "tofu", "lentil", "chickpea", "black bean", "kidney bean",
    "avocado", "sweet potato", "corn", "mushroom", "eggplant",
    "salmon fillet", "ground beef", "chicken thigh",
    "pizza", "burger", "french fries", "hot dog", "sandwich",
    "salad", "soup", "sushi",
];

// ── Core nutrient IDs we always want ────────────────────────────────
const CORE_NUTRIENT_IDS = new Set([
    1003, // Protein (g)
    1004, // Total Fat (g)
    1005, // Carbohydrate (g)
    1008, // Energy (kcal)
    1079, // Fiber (g)
    2000, // Total Sugars (g)
    1087, // Calcium (mg)
    1089, // Iron (mg)
    1092, // Potassium (mg)
    1093, // Sodium (mg)
    1104, // Vitamin A (IU)
    1162, // Vitamin C (mg)
    1253, // Cholesterol (mg)
    1258, // Saturated Fat (g)
]);

// ── Estimated prices (USD) by category — general knowledge ──────────
const PRICE_ESTIMATES = {
    "Fruits": { price: 2.50, currency: "USD" },
    "Vegetables": { price: 2.00, currency: "USD" },
    "Frozen Vegetables": { price: 2.50, currency: "USD" },
    "Frozen Fruits": { price: 3.50, currency: "USD" },
    "Poultry": { price: 5.00, currency: "USD" },
    "Beef": { price: 8.00, currency: "USD" },
    "Pork": { price: 6.00, currency: "USD" },
    "Finfish and Shellfish": { price: 9.00, currency: "USD" },
    "Fish": { price: 9.00, currency: "USD" },
    "Dairy and Egg": { price: 3.50, currency: "USD" },
    "Cheese": { price: 5.00, currency: "USD" },
    "Milk": { price: 3.00, currency: "USD" },
    "Eggs": { price: 3.50, currency: "USD" },
    "Cereals": { price: 3.00, currency: "USD" },
    "Grains and Pasta": { price: 2.00, currency: "USD" },
    "Breads": { price: 3.00, currency: "USD" },
    "Baked Goods": { price: 4.00, currency: "USD" },
    "Snacks": { price: 3.50, currency: "USD" },
    "Sweets": { price: 4.00, currency: "USD" },
    "Candy": { price: 3.00, currency: "USD" },
    "Beverages": { price: 2.00, currency: "USD" },
    "Coffee and Tea": { price: 5.00, currency: "USD" },
    "Fats and Oils": { price: 4.00, currency: "USD" },
    "Nuts and Seeds": { price: 7.00, currency: "USD" },
    "Legumes": { price: 2.50, currency: "USD" },
    "Soups": { price: 2.50, currency: "USD" },
    "Baby Foods": { price: 3.00, currency: "USD" },
    "Condiments and Sauces": { price: 3.00, currency: "USD" },
    "Spices and Herbs": { price: 4.00, currency: "USD" },
    "Meals": { price: 6.00, currency: "USD" },
    "Fast Foods": { price: 5.00, currency: "USD" },
    "Restaurant Foods": { price: 10.00, currency: "USD" },
};

// ── Countries — typical availability by food category ───────────────
const COUNTRY_MAP = {
    "Fruits": ["United States", "Mexico", "Brazil", "India", "China", "Spain", "Thailand", "Malaysia", "Indonesia", "Philippines"],
    "Vegetables": ["United States", "China", "India", "Mexico", "Spain", "Italy", "Japan", "South Korea", "Malaysia", "Thailand"],
    "Poultry": ["United States", "Brazil", "China", "India", "Thailand", "Malaysia", "Indonesia", "United Kingdom", "France", "Germany"],
    "Beef": ["United States", "Brazil", "Argentina", "Australia", "Canada", "United Kingdom", "France", "Germany", "Japan", "South Korea"],
    "Pork": ["United States", "China", "Germany", "Spain", "Brazil", "Vietnam", "France", "Poland", "Canada", "Japan"],
    "Finfish and Shellfish": ["United States", "Japan", "Norway", "China", "Thailand", "Indonesia", "Vietnam", "Chile", "India", "United Kingdom"],
    "Fish": ["United States", "Japan", "Norway", "China", "Thailand", "Indonesia", "Vietnam", "Chile", "India", "United Kingdom"],
    "Dairy and Egg": ["United States", "India", "Germany", "France", "New Zealand", "Australia", "Netherlands", "United Kingdom", "Brazil", "Italy"],
    "Cheese": ["United States", "France", "Italy", "Germany", "Netherlands", "Switzerland", "United Kingdom", "Denmark", "Spain", "Australia"],
    "Milk": ["United States", "India", "China", "Germany", "France", "Brazil", "New Zealand", "United Kingdom", "Australia", "Netherlands"],
    "Cereals": ["United States", "China", "India", "Russia", "Canada", "France", "Australia", "Germany", "United Kingdom", "Brazil"],
    "Grains and Pasta": ["United States", "Italy", "China", "India", "Turkey", "Brazil", "Russia", "France", "Canada", "Mexico"],
    "Nuts and Seeds": ["United States", "India", "China", "Iran", "Turkey", "Brazil", "Spain", "Vietnam", "Indonesia", "Australia"],
    "Beverages": ["United States", "China", "Brazil", "Germany", "Japan", "United Kingdom", "Mexico", "France", "India", "South Korea"],
    "Snacks": ["United States", "Japan", "United Kingdom", "Germany", "China", "India", "Brazil", "France", "South Korea", "Mexico"],
    "Legumes": ["United States", "India", "Brazil", "China", "Myanmar", "Canada", "Mexico", "Nigeria", "Turkey", "Australia"],
    "Fast Foods": ["United States", "United Kingdom", "Japan", "China", "Germany", "Canada", "Australia", "France", "Brazil", "South Korea"],
};
const DEFAULT_COUNTRIES = ["United States", "United Kingdom", "Canada", "Australia", "Malaysia", "Singapore", "India", "China", "Japan", "Germany"];

// ── Fallback nutrients (per 100g) for common foods — general knowledge
const FALLBACK_NUTRIENTS = {
    "apple": { 1008: 52, 1003: 0.3, 1004: 0.2, 1005: 14, 1079: 2.4, 2000: 10.4 },
    "banana": { 1008: 89, 1003: 1.1, 1004: 0.3, 1005: 23, 1079: 2.6, 2000: 12.2 },
    "orange": { 1008: 47, 1003: 0.9, 1004: 0.1, 1005: 12, 1079: 2.4, 2000: 9.4 },
    "broccoli": { 1008: 34, 1003: 2.8, 1004: 0.4, 1005: 7, 1079: 2.6, 2000: 1.7 },
    "chicken breast": { 1008: 165, 1003: 31, 1004: 3.6, 1005: 0, 1079: 0, 2000: 0 },
    "rice": { 1008: 130, 1003: 2.7, 1004: 0.3, 1005: 28, 1079: 0.4, 2000: 0 },
    "egg": { 1008: 155, 1003: 13, 1004: 11, 1005: 1.1, 1079: 0, 2000: 1.1 },
    "milk": { 1008: 42, 1003: 3.4, 1004: 1, 1005: 5, 1079: 0, 2000: 5 },
    "salmon": { 1008: 208, 1003: 20, 1004: 13, 1005: 0, 1079: 0, 2000: 0 },
    "bread": { 1008: 265, 1003: 9, 1004: 3.2, 1005: 49, 1079: 2.7, 2000: 5 },
    "potato": { 1008: 77, 1003: 2, 1004: 0.1, 1005: 17, 1079: 2.2, 2000: 0.8 },
    "cheese": { 1008: 402, 1003: 25, 1004: 33, 1005: 1.3, 1079: 0, 2000: 0.5 },
    "pasta": { 1008: 131, 1003: 5, 1004: 1.1, 1005: 25, 1079: 1.8, 2000: 0.6 },
    "tofu": { 1008: 76, 1003: 8, 1004: 4.8, 1005: 1.9, 1079: 0.3, 2000: 0.6 },
    "avocado": { 1008: 160, 1003: 2, 1004: 15, 1005: 9, 1079: 6.7, 2000: 0.7 },
    "yogurt": { 1008: 59, 1003: 10, 1004: 0.7, 1005: 3.6, 1079: 0, 2000: 3.2 },
    "peanut": { 1008: 567, 1003: 26, 1004: 49, 1005: 16, 1079: 8.5, 2000: 4 },
    "almond": { 1008: 579, 1003: 21, 1004: 50, 1005: 22, 1079: 12.5, 2000: 4.4 },
    "honey": { 1008: 304, 1003: 0.3, 1004: 0, 1005: 82, 1079: 0.2, 2000: 82 },
    "sugar": { 1008: 387, 1003: 0, 1004: 0, 1005: 100, 1079: 0, 2000: 100 },
    "olive oil": { 1008: 884, 1003: 0, 1004: 100, 1005: 0, 1079: 0, 2000: 0 },
    "coffee": { 1008: 2, 1003: 0.3, 1004: 0, 1005: 0, 1079: 0, 2000: 0 },
    "tea": { 1008: 1, 1003: 0, 1004: 0, 1005: 0.3, 1079: 0, 2000: 0 },
};

// ── Master nutrient list (will be seeded once) ──────────────────────
const MASTER_NUTRIENTS = [
    { nutrient_id: 1003, name: "Protein", unit: "g" },
    { nutrient_id: 1004, name: "Total lipid (fat)", unit: "g" },
    { nutrient_id: 1005, name: "Carbohydrate, by difference", unit: "g" },
    { nutrient_id: 1008, name: "Energy", unit: "kcal" },
    { nutrient_id: 1079, name: "Fiber, total dietary", unit: "g" },
    { nutrient_id: 2000, name: "Total Sugars", unit: "g" },
    { nutrient_id: 1087, name: "Calcium, Ca", unit: "mg" },
    { nutrient_id: 1089, name: "Iron, Fe", unit: "mg" },
    { nutrient_id: 1092, name: "Potassium, K", unit: "mg" },
    { nutrient_id: 1093, name: "Sodium, Na", unit: "mg" },
    { nutrient_id: 1104, name: "Vitamin A, IU", unit: "IU" },
    { nutrient_id: 1162, name: "Vitamin C, total ascorbic acid", unit: "mg" },
    { nutrient_id: 1253, name: "Cholesterol", unit: "mg" },
    { nutrient_id: 1258, name: "Fatty acids, total saturated", unit: "g" },
];

// ── Helpers ─────────────────────────────────────────────────────────

async function seedNutrients(client) {
    for (const n of MASTER_NUTRIENTS) {
        await client.query(
            `INSERT INTO nutrients (nutrient_id, name, unit)
       VALUES ($1, $2, $3)
       ON CONFLICT (nutrient_id) DO NOTHING`,
            [n.nutrient_id, n.name, n.unit]
        );
    }
    console.log("   ✅ Seeded master nutrient list");
}

async function upsertFood(client, food) {
    await client.query(
        `INSERT INTO foods (fdc_id, name, food_category, brand_owner, data_type, description, food_source)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     ON CONFLICT (fdc_id) DO UPDATE
       SET name          = EXCLUDED.name,
           food_category = EXCLUDED.food_category,
           brand_owner   = EXCLUDED.brand_owner,
           data_type     = EXCLUDED.data_type,
           description   = EXCLUDED.description,
           food_source   = EXCLUDED.food_source`,
        [food.fdc_id, food.name, food.food_category, food.brand_owner, food.data_type, food.description, food.food_source]
    );
}

async function upsertFoodNutrient(client, fdcId, nutrientId, amount) {
    // Only insert nutrients we track
    if (!CORE_NUTRIENT_IDS.has(nutrientId)) return;
    await client.query(
        `INSERT INTO food_nutrients (fdc_id, nutrient_id, amount)
     VALUES ($1, $2, $3)
     ON CONFLICT (fdc_id, nutrient_id) DO UPDATE SET amount = EXCLUDED.amount`,
        [fdcId, nutrientId, amount]
    );
}

async function upsertPortion(client, fdcId, amount, unit, gramWeight) {
    await client.query(
        `INSERT INTO food_portions (fdc_id, amount, unit, gram_weight)
     VALUES ($1, $2, $3, $4)`,
        [fdcId, amount, unit, gramWeight]
    );
}

async function upsertPrice(client, fdcId, price, currency) {
    // check if already exists
    const exist = await client.query(
        `SELECT 1 FROM food_prices WHERE fdc_id = $1 LIMIT 1`, [fdcId]
    );
    if (exist.rows.length === 0) {
        await client.query(
            `INSERT INTO food_prices (fdc_id, price, currency) VALUES ($1, $2, $3)`,
            [fdcId, price, currency]
        );
    }
}

async function upsertCountry(client, fdcId, country) {
    const exist = await client.query(
        `SELECT 1 FROM food_countries WHERE fdc_id = $1 AND country = $2 LIMIT 1`, [fdcId, country]
    );
    if (exist.rows.length === 0) {
        await client.query(
            `INSERT INTO food_countries (fdc_id, country) VALUES ($1, $2)`,
            [fdcId, country]
        );
    }
}

function matchPriceCategory(foodCategory) {
    if (!foodCategory) return { price: 3.00, currency: "USD" };
    for (const [key, val] of Object.entries(PRICE_ESTIMATES)) {
        if (foodCategory.toLowerCase().includes(key.toLowerCase())) return val;
    }
    return { price: 3.00, currency: "USD" };
}

function matchCountries(foodCategory) {
    if (!foodCategory) return DEFAULT_COUNTRIES;
    for (const [key, countries] of Object.entries(COUNTRY_MAP)) {
        if (foodCategory.toLowerCase().includes(key.toLowerCase())) return countries;
    }
    return DEFAULT_COUNTRIES;
}

function classifyFoodSource(dataType, brandOwner) {
    if (dataType === "Branded" || brandOwner) return "home";
    return "home"; // default; user can refine later
}

// ── Fetch USDA for a single query ───────────────────────────────────
async function fetchUSDA(query, pageSize = 25) {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search`;
    const params = {
        query,
        pageSize,
        api_key: USDA_API_KEY,
        dataType: "Foundation,SR Legacy,Survey (FNDDS),Branded",
    };
    const res = await axios.get(url, { params, timeout: 30000 });
    return res.data && Array.isArray(res.data.foods) ? res.data.foods : [];
}

// ── Backfill missing core nutrients ─────────────────────────────────
async function backfillNutrients(client) {
    console.log("\n🔧 Backfilling missing nutrients...");
    // For each food, check if it has Energy (1008). If not, try to match by name.
    const rows = await client.query(`
    SELECT f.fdc_id, f.name
    FROM foods f
    WHERE NOT EXISTS (
      SELECT 1 FROM food_nutrients fn WHERE fn.fdc_id = f.fdc_id AND fn.nutrient_id = 1008
    )
  `);

    let backfilled = 0;
    for (const row of rows.rows) {
        const foodName = row.name.toLowerCase();
        // Try to find a matching fallback
        for (const [key, nutrients] of Object.entries(FALLBACK_NUTRIENTS)) {
            if (foodName.includes(key)) {
                for (const [nid, amount] of Object.entries(nutrients)) {
                    await upsertFoodNutrient(client, row.fdc_id, parseInt(nid), amount);
                }
                backfilled++;
                break;
            }
        }
    }
    console.log(`   ✅ Backfilled nutrients for ${backfilled} foods`);
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
    const client = new Client({ connectionString: SUPABASE_DB_URL, ssl: { rejectUnauthorized: false } });
    await client.connect();
    console.log("✅ Connected to Supabase Postgres");

    // Seed master nutrient list
    await seedNutrients(client);

    const seenFdcIds = new Set();
    let totalFoods = 0;
    let totalNutrients = 0;

    // Fetch for each query category
    for (const query of FOOD_QUERIES) {
        try {
            console.log(`\n📥 Searching USDA: "${query}"...`);
            const foods = await fetchUSDA(query, 25);
            console.log(`   Found ${foods.length} results`);

            for (const food of foods) {
                const fdcId = food.fdcId;
                if (!fdcId || seenFdcIds.has(fdcId)) continue;
                seenFdcIds.add(fdcId);

                // 1) Insert food
                const foodSource = classifyFoodSource(food.dataType, food.brandOwner);
                await upsertFood(client, {
                    fdc_id: fdcId,
                    name: food.description || food.lowercaseDescription || "Unknown",
                    food_category: food.foodCategory || null,
                    brand_owner: food.brandOwner || null,
                    data_type: food.dataType || null,
                    description: food.additionalDescriptions || food.description || null,
                    food_source: foodSource,
                });
                totalFoods++;

                // 2) Insert nutrients
                if (Array.isArray(food.foodNutrients)) {
                    for (const fn of food.foodNutrients) {
                        if (fn.nutrientId && fn.value !== undefined && fn.value !== null) {
                            // Seed nutrient if not in master list
                            if (!CORE_NUTRIENT_IDS.has(fn.nutrientId)) continue;
                            await upsertFoodNutrient(client, fdcId, fn.nutrientId, fn.value);
                            totalNutrients++;
                        }
                    }
                }

                // 3) Insert portions (if available)
                if (food.servingSize && food.servingSizeUnit) {
                    await upsertPortion(client, fdcId, food.servingSize, food.servingSizeUnit || food.householdServingFullText || "serving", food.servingSize);
                }
                if (food.householdServingFullText) {
                    await upsertPortion(client, fdcId, 1, food.householdServingFullText, food.servingSize || 100);
                }

                // 4) Insert estimated price
                const priceInfo = matchPriceCategory(food.foodCategory);
                await upsertPrice(client, fdcId, priceInfo.price, priceInfo.currency);

                // 5) Insert country availability
                const countries = matchCountries(food.foodCategory);
                for (const country of countries) {
                    await upsertCountry(client, fdcId, country);
                }
            }

            // throttle to respect USDA rate limits
            await new Promise((r) => setTimeout(r, 1000));
        } catch (err) {
            console.warn(`   ⚠ Failed for "${query}":`, err.message);
            // If rate limited, wait longer
            if (err.response && err.response.status === 429) {
                console.log("   ⏳ Rate limited, waiting 60s...");
                await new Promise((r) => setTimeout(r, 60000));
            }
        }
    }

    // Backfill missing nutrients
    await backfillNutrients(client);

    // Summary
    const foodCount = await client.query("SELECT COUNT(*) AS cnt FROM foods");
    const nutrientCount = await client.query("SELECT COUNT(*) AS cnt FROM food_nutrients");
    console.log(`\n🏁 Food ingestion complete:`);
    console.log(`   Foods:     ${foodCount.rows[0].cnt}`);
    console.log(`   Nutrients: ${nutrientCount.rows[0].cnt}`);

    await client.end();
}

main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
});
