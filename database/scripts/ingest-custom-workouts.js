import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from grandparent directory (since execution will happen in database/)
dotenv.config({ path: join(__dirname, "..", ".env") });
dotenv.config({ path: join(__dirname, "..", "..", ".env") });

const { Client } = pg;
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL;

const rawSqlRows = `
('Push-up', 'calisthenics', 'medium', 7.0, 'https://commons.wikimedia.org/wiki/File:Performing_pushups.jpg', 'https://www.youtube.com/watch?v=IODxDxX7oi4', 'commons.wikimedia.org', 'File:Performing_pushups.jpg'),
('Squat (Bodyweight)', 'calisthenics', 'medium', 6.0, 'https://commons.wikimedia.org/wiki/File:Bodyweight_Squats.gif', 'https://www.youtube.com/watch?v=aPYCiuiB4PA', 'commons.wikimedia.org', 'File:Bodyweight_Squats.gif'),
('Burpee', 'cardiovascular', 'high', 12.0, 'https://commons.wikimedia.org/wiki/File:Burpee.gif', 'https://www.youtube.com/watch?v=qLBImHhCXSw', 'commons.wikimedia.org', 'File:Burpee.gif'),
('Jumping Jacks', 'cardiovascular', 'medium', 8.0, 'https://commons.wikimedia.org/wiki/File:Jumping_Jack.jpg', 'https://www.youtube.com/watch?v=iSSAk4XCsRA', 'commons.wikimedia.org', 'File:Jumping_Jack.jpg'),
('Plank (Front)', 'calisthenics', 'low', 4.0, 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Plank_exercise.jpg', 'https://www.youtube.com/watch?v=ASdvN_XEl_c', 'upload.wikimedia.org', 'Plank_exercise.jpg'),
('Forward Lunge', 'calisthenics', 'medium', 6.5, 'https://commons.wikimedia.org/wiki/File:Lunge.JPG', 'https://www.youtube.com/watch?v=fydLSJlGx-0', 'commons.wikimedia.org', 'File:Lunge.JPG'),
('Mountain Climbers', 'cardiovascular', 'high', 10.0, 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Mountain_climber_exercise.jpg', 'https://www.youtube.com/watch?v=cnyTQDSE884', 'upload.wikimedia.org', 'Mountain_climber_exercise.jpg'),
('Bench Press (Barbell)', 'gym', 'high', 9.5, 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bench_press_example.jpg', 'https://www.youtube.com/watch?v=rT7DgCr-3pg', 'upload.wikimedia.org', 'Bench_press_example.jpg'),
('Deadlift (Conventional)', 'gym', 'high', 11.0, 'https://upload.wikimedia.org/wikipedia/commons/7/76/Deadlift_form.jpg', 'https://www.youtube.com/watch?v=ntr64W6ZWB0', 'upload.wikimedia.org', 'Deadlift_form.jpg'),
('Dumbbell Bicep Curl', 'gym', 'medium', 5.5, 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Bicep_curl_DB.jpg', 'https://www.youtube.com/watch?v=uO_CNYidOw0', 'upload.wikimedia.org', 'Bicep_curl_DB.jpg'),
('Tricep Bench Dip', 'calisthenics', 'medium', 5.0, 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Triceps_bench_dip.jpg', 'https://www.youtube.com/watch?v=0326dy_-CzM', 'upload.wikimedia.org', 'Triceps_bench_dip.jpg'),
('Pull-up', 'calisthenics', 'high', 9.0, 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Pullup_example.jpg', 'https://www.youtube.com/watch?v=6zyx46Vpato', 'upload.wikimedia.org', 'Pullup_example.jpg'),
('Outdoor Running (steady pace)', 'cardiovascular', 'high', 10.5, 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Running_example.jpg', 'https://www.youtube.com/watch?v=some-running-tutorial', 'upload.wikimedia.org', 'Running_example.jpg'),
('Cycling (moderate)', 'cardiovascular', 'medium', 8.0, 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Cycling_example.jpg', 'https://www.youtube.com/watch?v=some-cycling-training', 'upload.wikimedia.org', 'Cycling_example.jpg'),
('Swimming (freestyle)', 'cardiovascular', 'high', 11.0, 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Swimming_freestyle.jpg', 'https://www.youtube.com/watch?v=some-swim-tutorial', 'upload.wikimedia.org', 'Swimming_freestyle.jpg'),
('Sun Salutation (Surya Namaskar A)', 'meditation or yoga', 'low', 3.5, 'https://commons.wikimedia.org/wiki/File:Sun_Salutation_sequence.jpg', 'https://www.youtube.com/watch?v=1xRX1MuoImw', 'commons.wikimedia.org', 'File:Sun_Salutation_sequence.jpg'),
('Downward Dog (Adho Mukha Svanasana)', 'meditation or yoga', 'low', 2.5, 'https://commons.wikimedia.org/wiki/File:Downward_Dog_Pose_%28Doga%29.jpg', 'https://www.youtube.com/watch?v=some-downward-dog-tutorial', 'commons.wikimedia.org', 'File:Downward_Dog_Pose_(Doga).jpg'),
('Tree Pose (Vrikshasana)', 'meditation or yoga', 'low', 2.0, 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Tree_pose.jpg', 'https://www.youtube.com/watch?v=yVE4XXFFO70', 'upload.wikimedia.org', 'Tree_pose.jpg'),
('Warrior II (Virabhadrasana II)', 'meditation or yoga', 'low', 3.0, 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Warrior_II_pose.jpg', 'https://www.youtube.com/watch?v=4Ejz7IgODlU', 'upload.wikimedia.org', 'Warrior_II_pose.jpg'),
("Child's Pose (Balasana)", 'meditation or yoga', 'low', 1.5, 'https://upload.wikimedia.org/wikipedia/commons/5/52/Childs_pose.jpg', 'https://www.youtube.com/watch?v=some-childs-pose-tutorial', 'upload.wikimedia.org', 'Childs_pose.jpg'),
('Jump Rope (skipping)', 'cardiovascular', 'high', 12.0, 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Jump_rope_example.jpg', 'https://www.youtube.com/watch?v=some-jump-rope-tutorial', 'upload.wikimedia.org', 'Jump_rope_example.jpg'),
('Rowing (machine)', 'cardiovascular', 'high', 9.5, 'https://upload.wikimedia.org/wikipedia/commons/7/73/Rowing_machine.jpg', 'https://www.youtube.com/watch?v=some-rowing-tutorial', 'upload.wikimedia.org', 'Rowing_machine.jpg'),
('Kettlebell Swing', 'gym', 'high', 10.5, 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Kettlebell_swing.jpg', 'https://www.youtube.com/watch?v=some-kettlebell-swing', 'upload.wikimedia.org', 'Kettlebell_swing.jpg'),
('Overhead Press (Barbell)', 'gym', 'high', 7.5, 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Overhead_press.jpg', 'https://www.youtube.com/watch?v=some-overhead-press', 'upload.wikimedia.org', 'Overhead_press.jpg'),
('Russian Twist', 'calisthenics', 'medium', 5.0, 'https://upload.wikimedia.org/wikipedia/commons/4/44/Russian_twist.jpg', 'https://www.youtube.com/watch?v=some-russian-twist', 'upload.wikimedia.org', 'Russian_twist.jpg'),
('Bicycle Crunch', 'calisthenics', 'medium', 6.0, 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Bicycle_crunch.jpg', 'https://www.youtube.com/watch?v=some-bicycle-crunch', 'upload.wikimedia.org', 'Bicycle_crunch.jpg'),
('High Knees (running in place)', 'cardiovascular', 'high', 9.0, 'https://upload.wikimedia.org/wikipedia/commons/1/11/High_knees.jpg', 'https://www.youtube.com/watch?v=some-high-knees', 'upload.wikimedia.org', 'High_knees.jpg'),
('Butt Kicks', 'cardiovascular', 'medium', 7.0, 'https://upload.wikimedia.org/wikipedia/commons/2/23/Butt_kicks.jpg', 'https://www.youtube.com/watch?v=some-butt-kicks', 'upload.wikimedia.org', 'Butt_kicks.jpg'),
('Hip Thrust', 'gym', 'medium', 6.5, 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Hip_thrust.jpg', 'https://www.youtube.com/watch?v=some-hip-thrust', 'upload.wikimedia.org', 'Hip_thrust.jpg'),
('Calf Raise', 'gym', 'low', 3.5, 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Calf_raise.jpg', 'https://www.youtube.com/watch?v=some-calf-raise', 'upload.wikimedia.org', 'Calf_raise.jpg'),
('Hanging Crunches', 'calisthenics', 'medium', 7.5, 'https://commons.wikimedia.org/wiki/File:Hanging_crunches_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Hanging_crunches_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Hanging_crunches_-_exercise_demonstration_video.webm'),
('Bent-over Row', 'gym', 'high', 9.0, 'https://commons.wikimedia.org/wiki/File:Bent-over_row_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Bent-over_row_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Bent-over_row_-_exercise_demonstration_video.webm'),
('Bench Press (Demonstration)', 'gym', 'high', 9.5, 'https://commons.wikimedia.org/wiki/File:Bench_press_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Bench_press_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Bench_press_-_exercise_demonstration_video.webm'),
('Shoulder Press (Demonstration)', 'gym', 'medium', 7.0, 'https://commons.wikimedia.org/wiki/File:Shoulder_press_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Shoulder_press_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Shoulder_press_-_exercise_demonstration_video.webm'),
('Leg Raises', 'calisthenics', 'medium', 7.0, 'https://commons.wikimedia.org/wiki/File:Leg_raises_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Leg_raises_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Leg_raises_-_exercise_demonstration_video.webm'),
('Deadlift (Demo)', 'gym', 'high', 10.5, 'https://commons.wikimedia.org/wiki/File:Deadlift_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Deadlift_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Deadlift_-_exercise_demonstration_video.webm'),
('Pull-ups (Demo)', 'calisthenics', 'high', 9.0, 'https://commons.wikimedia.org/wiki/File:Pull-ups_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Pull-ups_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Pull-ups_-_exercise_demonstration_video.webm'),
('Weighted Squat (Demo)', 'gym', 'high', 10.0, 'https://commons.wikimedia.org/wiki/File:Squat_-_exercise_demonstration_video.webm', 'https://commons.wikimedia.org/wiki/File:Squat_-_exercise_demonstration_video.webm', 'commons.wikimedia.org', 'File:Squat_-_exercise_demonstration_video.webm'),
('Bodyweight Alternating Upper & Lower', 'calisthenics', 'medium', 6.5, 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Alternating_upper_and_lower_extremities.jpg', '', 'upload.wikimedia.org', 'Alternating_upper_and_lower_extremities.jpg'),
('Abdominal Vacuum Exercise', 'calisthenics', 'low', 4.0, 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Abdominal_Vacuum_Exercise.jpg', '', 'upload.wikimedia.org', 'Abdominal_Vacuum_Exercise.jpg')
`;

const exercises = rawSqlRows.split('\n').map(line => line.trim()).filter(line => line.startsWith('(')).map(line => {
    // Basic regex to grab string fields and numerics
    // Format: ('Name', 'type', 'intensity', 7.0, 'image', 'video', 'source', 'source_id')
    const match = line.match(/('([^'\\]|\\.)*'|[^,]+)/g);
    if (!match) return null;
    const cleanStr = (str) => str.replace(/^'|'$/g, '').replace(/''/g, "'"); // Unescape sql quotes

    return {
        name: cleanStr(match[0].trim()),
        type: cleanStr(match[1].trim()),
        intensity: cleanStr(match[2].trim()),
        calorie_burnt: parseFloat(match[3]),
        image_link: cleanStr(match[4].trim()),
        video_link: cleanStr(match[5].trim()),
        source: cleanStr(match[6].trim()),
        source_id: cleanStr(match[7].trim().replace(/\),?$/, ''))
        // Remove trailing ), at end of line
    };
}).filter(Boolean);

const AI_MINUTES = {
    'meditation or yoga': { 'low': 15, 'medium': 30, 'high': 30 },
    'cardiovascular': { 'low': 20, 'medium': 30, 'high': 45 },
    'calisthenics': { 'low': 15, 'medium': 20, 'high': 30 },
    'gym': { 'low': 30, 'medium': 45, 'high': 60 }
};

if (!SUPABASE_DB_URL) {
    console.error("Missing DB URL");
    process.exit(1);
}

const client = new Client({
    connectionString: SUPABASE_DB_URL,
    ssl: { rejectUnauthorized: false }
});

async function main() {
    try {
        await client.connect();
        let inserted = 0;
        let updated = 0;

        for (const ex of exercises) {
            // Apply AI recommendation for time 
            const time_consumed = AI_MINUTES[ex.type.toLowerCase()][ex.intensity.toLowerCase()] || 30;

            const res = await client.query(`
                INSERT INTO exercises (name, type, intensity, calorie_burnt, image_link, video_link, source, source_id, time_consumed_in_minutes)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                ON CONFLICT (source, source_id) DO UPDATE 
                SET name = EXCLUDED.name,
                    type = EXCLUDED.type,
                    intensity = EXCLUDED.intensity,
                    calorie_burnt = EXCLUDED.calorie_burnt,
                    image_link = EXCLUDED.image_link,
                    video_link = EXCLUDED.video_link,
                    time_consumed_in_minutes = EXCLUDED.time_consumed_in_minutes
                RETURNING (xmax = 0) AS inserted;
            `, [
                ex.name, ex.type, ex.intensity, ex.calorie_burnt, ex.image_link,
                ex.video_link || null, ex.source, ex.source_id, time_consumed
            ]);

            if (res.rows[0].inserted) {
                inserted++;
            } else {
                updated++;
            }
        }

        console.log(`✅ Custom workouts processed! Inserted: ${inserted}, Updated: ${updated}`);

    } catch (err) {
        console.error("❌ Error during ingestion:", err);
    } finally {
        await client.end();
    }
}

main();
