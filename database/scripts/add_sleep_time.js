require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.SUPABASE_DB_URL,
});

async function run() {
    try {
        await client.connect();

        // Add sleep_time column
        await client.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS sleep_time TIME;
    `);

        // Also rename workout_time_01 to workout_time_1 to match prompt if we didn't before. Look at schema.sql line 209 it says workout_time_01, but line 102 says workout_time_1

        console.log("Migration finished.");
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
    }
}
run();
