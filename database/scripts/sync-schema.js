import pg from 'pg';
const { Client } = pg;
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });

async function syncSchema() {
    const client = new Client({
        connectionString: process.env.SUPABASE_DB_URL,
    });

    try {
        await client.connect();
        console.log('Connected to database.');

        // 1. Drop users table to ensure fresh schema
        console.log('Dropping existing users table...');
        await client.query('DROP TABLE IF EXISTS users CASCADE;');

        // 2. Read and execute the full schema.sql
        console.log('Applying schema.sql...');
        const schemaPath = path.join(__dirname, '../db/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');
        await client.query(schemaSql);
        console.log('Schema applied successfully.');

        // 3. Fetch 3 valid exercises IDs to use for the mock user
        console.log('Fetching exercise UUIDs for the mock user...');
        const result = await client.query('SELECT id FROM exercises LIMIT 3');
        const exercises = result.rows;
        if (exercises.length < 3) {
            console.warn('Less than 3 exercises found! Mock user may fail foreign key constraints if enough exercises are not present.');
        }
        const workout_1 = exercises[0] ? exercises[0].id : null;
        const workout_2 = exercises[1] ? exercises[1].id : null;
        const workout_3 = exercises[2] ? exercises[2].id : null;

        if (!workout_1) throw new Error("At least one exercise is required in the DB to create the mock user.");

        // 4. Insert mock user
        console.log('Inserting mock user "tantan"...');
        const insertMockUserQuery = `
      INSERT INTO users (
        description, username, password, email, phone_number, condition,
        age, height, weight, gender, living_country,
        engage_time_before_1, engage_time_after_1,
        workout_time_1,
        workout_1, workout_2, workout_3,
        breakfast_time, lunch_time, dinner_time,
        xp_count, streak_count, gems_count, leaderboard_points,
        workout_day_count, sleep_day_count, eat_day_count,
        workout_streak_count, sleep_streak_count, eat_streak_count,
        recorder_permission, camera_permission, notification_permission,
        feedback
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11,
        $12, $13,
        $14,
        $15, $16, $17,
        $18, $19, $20,
        $21, $22, $23, $24,
        $25, $26, $27,
        $28, $29, $30,
        $31, $32, $33,
        $34
      ) ON CONFLICT DO NOTHING;
    `;

        const mockUserValues = [
            'The user is fat, overweight, and has an injury.', // description
            'tantan', // username
            '888tws888', // password
            'weesheng2007@gmail.com', // email
            '012-732 3069', // phone_number
            'The user wants to eat healthy food, and commit to workout plans', // condition
            21, // age
            170, // height
            100, // weight
            'male', // gender
            'Malaysia', // living_country
            '09:45:00', // engage_time_before_1
            '13:45:00', // engage_time_after_1
            '04:45:00', // workout_time_1
            workout_1, // workout_1 UUID
            workout_2, // workout_2 UUID 
            workout_3, // workout_3 UUID
            '08:00:00', // breakfast_time
            '14:00:00', // lunch_time
            '19:00:00', // dinner_time
            10000, // xp_count
            3, // streak_count
            400, // gems_count
            9000, // leaderboard_points
            2, // workout_day_count
            2, // sleep_day_count
            2, // eat_day_count
            1, // workout_streak_count
            2, // sleep_streak_count
            2, // eat_streak_count
            true, // recorder_permission
            true, // camera_permission
            true, // notification_permission
            'Very good!' // feedback
        ];

        await client.query(insertMockUserQuery, mockUserValues);
        console.log('Mock user inserted successfully!');

    } catch (err) {
        console.error('Error syncing database:', err);
    } finally {
        await client.end();
    }
}

syncSchema();
