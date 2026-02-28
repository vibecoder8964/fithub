-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('meditation or yoga','cardiovascular','calisthenics','gym')),
  intensity TEXT NOT NULL CHECK (intensity IN ('low','medium','high')),
  calorie_burnt NUMERIC NOT NULL,
  image_link TEXT NOT NULL,
  video_link TEXT,
  source TEXT,
  source_id TEXT,
  time_consumed_in_minutes INTEGER NOT NULL DEFAULT 30,
  reps_no INTEGER,
  equipment TEXT[],
  total_reps INTEGER,
  rest_time_in_minutes NUMERIC,
  suitable_for_injuries BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (source, source_id),
  CONSTRAINT chk_gym_columns CHECK (
    type = 'gym' OR 
    (reps_no IS NULL AND equipment IS NULL AND total_reps IS NULL AND rest_time_in_minutes IS NULL)
  )
);

-- Main food info
CREATE TABLE IF NOT EXISTS foods (
  fdc_id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  food_category TEXT,
  brand_owner TEXT,
  data_type TEXT,
  description TEXT,
  food_source TEXT CHECK (food_source IN ('home','restaurant')),
  cook_difficulty TEXT CHECK (cook_difficulty IN ('EASY', 'MEDIUM', 'HARD')),
  taste TEXT NOT NULL DEFAULT 'medium' CHECK (taste IN ('low','medium','high')),
  created_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT chk_restaurant_difficulty CHECK (food_source != 'restaurant' OR cook_difficulty IS NULL)
);

-- Master nutrient list
CREATE TABLE IF NOT EXISTS nutrients (
  nutrient_id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  unit TEXT NOT NULL
);

-- Food-nutrient junction (actual nutrition values per 100g)
CREATE TABLE IF NOT EXISTS food_nutrients (
  id BIGSERIAL PRIMARY KEY,
  fdc_id BIGINT NOT NULL REFERENCES foods(fdc_id) ON DELETE CASCADE,
  nutrient_id BIGINT NOT NULL REFERENCES nutrients(nutrient_id) ON DELETE CASCADE,
  amount NUMERIC NOT NULL,
  UNIQUE (fdc_id, nutrient_id)
);

-- Serving / portion sizes
CREATE TABLE IF NOT EXISTS food_portions (
  id BIGSERIAL PRIMARY KEY,
  fdc_id BIGINT NOT NULL REFERENCES foods(fdc_id) ON DELETE CASCADE,
  amount NUMERIC,
  unit TEXT,
  gram_weight NUMERIC
);

-- Estimated prices (custom data)
CREATE TABLE IF NOT EXISTS food_prices (
  id BIGSERIAL PRIMARY KEY,
  fdc_id BIGINT NOT NULL REFERENCES foods(fdc_id) ON DELETE CASCADE,
  price NUMERIC,
  currency TEXT DEFAULT 'USD'
);

-- Country availability (custom data)
CREATE TABLE IF NOT EXISTS food_countries (
  id BIGSERIAL PRIMARY KEY,
  fdc_id BIGINT NOT NULL REFERENCES foods(fdc_id) ON DELETE CASCADE,
  country TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  description TEXT NOT NULL,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  condition TEXT NOT NULL,
  age INTEGER NOT NULL,
  height NUMERIC NOT NULL,
  weight NUMERIC NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('male','female')),
  living_country TEXT NOT NULL,
  engage_time_before_1 TIME NOT NULL,
  engage_time_after_1 TIME NOT NULL,
  engage_time_before_2 TIME,
  engage_time_after_2 TIME,
  engage_time_before_3 TIME,
  engage_time_after_3 TIME,
  workout_time_1 TIME NOT NULL,
  workout_time_2 TIME,
  workout_time_3 TIME,
  sleep_time TIME NOT NULL DEFAULT '22:00:00',
  workout_1 UUID NOT NULL REFERENCES exercises(id),
  workout_2 UUID REFERENCES exercises(id),
  workout_3 UUID REFERENCES exercises(id),
  breakfast_time TIME NOT NULL,
  lunch_time TIME NOT NULL,
  dinner_time TIME NOT NULL,
  xp_count INTEGER NOT NULL DEFAULT 0,
  streak_count INTEGER NOT NULL DEFAULT 0,
  gems_count INTEGER NOT NULL DEFAULT 0,
  leaderboard_points INTEGER NOT NULL DEFAULT 0,
  workout_day_count INTEGER NOT NULL DEFAULT 0,
  sleep_day_count INTEGER NOT NULL DEFAULT 0,
  eat_day_count INTEGER NOT NULL DEFAULT 0,
  workout_streak_count INTEGER NOT NULL DEFAULT 0,
  sleep_streak_count INTEGER NOT NULL DEFAULT 0,
  eat_streak_count INTEGER NOT NULL DEFAULT 0,
  recorder_permission BOOLEAN NOT NULL DEFAULT FALSE,
  camera_permission BOOLEAN NOT NULL DEFAULT FALSE,
  notification_permission BOOLEAN NOT NULL DEFAULT FALSE,
  badges_workhaholic BOOLEAN NOT NULL DEFAULT FALSE,
  badges_onTimeEater BOOLEAN NOT NULL DEFAULT FALSE,
  badges_streakMaintainer BOOLEAN NOT NULL DEFAULT FALSE,
  badges_earlyOwl BOOLEAN NOT NULL DEFAULT FALSE,
  badges_taskGrinder BOOLEAN NOT NULL DEFAULT FALSE,
  badges_workoutExpert BOOLEAN NOT NULL DEFAULT FALSE,
  badges_scanner BOOLEAN NOT NULL DEFAULT FALSE,
  badges_voiceOut BOOLEAN NOT NULL DEFAULT FALSE,
  badges_shopper BOOLEAN NOT NULL DEFAULT FALSE,
  badges_topRanker BOOLEAN NOT NULL DEFAULT FALSE,
  badges_topOftheTop BOOLEAN NOT NULL DEFAULT FALSE,
  badges_gamer BOOLEAN NOT NULL DEFAULT FALSE,
  badges_XPGrinder BOOLEAN NOT NULL DEFAULT FALSE,
  badges_assistance BOOLEAN NOT NULL DEFAULT FALSE,
  badges_gemsCollector BOOLEAN NOT NULL DEFAULT FALSE,
  updatedAImodel_held BOOLEAN NOT NULL DEFAULT FALSE,
  "1000xpstreak_held" BOOLEAN NOT NULL DEFAULT FALSE,
  streakprotectionheld BOOLEAN NOT NULL DEFAULT FALSE,
  newAIcharacterheld BOOLEAN NOT NULL DEFAULT FALSE,
  feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Optional: per-user Smart Nudge dark mode preference (used to switch to x_dark UI)
ALTER TABLE users
  ADD COLUMN IF NOT EXISTS smart_nudge_dark_mode BOOLEAN NOT NULL DEFAULT FALSE;

-- Tasks tied to a user's schedule (referenced in timetable and add task flow)
CREATE TABLE IF NOT EXISTS user_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Keep tournament leaderboard_points in sync with streak, gems and XP
CREATE OR REPLACE FUNCTION update_leaderboard_points()
RETURNS TRIGGER AS $$
BEGIN
  NEW.leaderboard_points :=
      (NEW.streak_count * 2)
    + NEW.gems_count
    + FLOOR(NEW.xp_count / 1000.0);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_update_leaderboard_points ON users;
CREATE TRIGGER trg_update_leaderboard_points
BEFORE INSERT OR UPDATE OF xp_count, gems_count, streak_count
ON users
FOR EACH ROW
EXECUTE FUNCTION update_leaderboard_points();

-- Seed a mock user for testing flows (only if not already present)
INSERT INTO users (
  id,
  description,
  username,
  password,
  email,
  phone_number,
  condition,
  age,
  height,
  weight,
  gender,
  living_country,
  engage_time_before_1,
  engage_time_after_1,
  engage_time_before_2,
  engage_time_after_2,
  engage_time_before_3,
  engage_time_after_3,
  workout_time_1,
  workout_time_2,
  workout_time_3,
  workout_1,
  workout_2,
  workout_3,
  breakfast_time,
  lunch_time,
  dinner_time,
  xp_count,
  streak_count,
  gems_count,
  workout_day_count,
  sleep_day_count,
  eat_day_count,
  workout_streak_count,
  sleep_streak_count,
  eat_streak_count,
  recorder_permission,
  camera_permission,
  notification_permission,
  badges_workhaholic,
  badges_onTimeEater,
  badges_streakMaintainer,
  badges_earlyOwl,
  badges_taskGrinder,
  badges_workoutExpert,
  badges_scanner,
  badges_voiceOut,
  badges_shopper,
  badges_topRanker,
  badges_topOftheTop,
  badges_gamer,
  badges_XPGrinder,
  badges_assistance,
  badges_gemsCollector,
  feedback
)
SELECT
  gen_random_uuid() AS id,
  'The user is fat, overweight, and has an injury.' AS description,
  'tantan' AS username,
  '888tws888' AS password,
  'weesheng2007@gmail.com' AS email,
  '012-732 3069' AS phone_number,
  'The user wants to eat healthy food, and commit to workout plans' AS condition,
  21 AS age,
  170 AS height,
  100 AS weight,
  'male' AS gender,
  'Malaysia' AS living_country,
  '09:45:00'::time AS engage_time_before_1,
  '13:45:00'::time AS engage_time_after_1,
  NULL::time AS engage_time_before_2,
  NULL::time AS engage_time_after_2,
  NULL::time AS engage_time_before_3,
  NULL::time AS engage_time_after_3,
  '16:45:00'::time AS workout_time_1,
  NULL::time AS workout_time_2,
  NULL::time AS workout_time_3,
  e.id AS workout_1,
  NULL::uuid AS workout_2,
  NULL::uuid AS workout_3,
  '08:00:00'::time AS breakfast_time,
  '14:00:00'::time AS lunch_time,
  '19:00:00'::time AS dinner_time,
  10000 AS xp_count,
  3 AS streak_count,
  400 AS gems_count,
  2 AS workout_day_count,
  2 AS sleep_day_count,
  2 AS eat_day_count,
  1 AS workout_streak_count,
  2 AS sleep_streak_count,
  2 AS eat_streak_count,
  TRUE AS recorder_permission,
  TRUE AS camera_permission,
  TRUE AS notification_permission,
  FALSE AS badges_workhaholic,
  FALSE AS badges_onTimeEater,
  FALSE AS badges_streakMaintainer,
  FALSE AS badges_earlyOwl,
  FALSE AS badges_taskGrinder,
  FALSE AS badges_workoutExpert,
  FALSE AS badges_scanner,
  FALSE AS badges_voiceOut,
  FALSE AS badges_shopper,
  FALSE AS badges_topRanker,
  FALSE AS badges_topOftheTop,
  FALSE AS badges_gamer,
  FALSE AS badges_XPGrinder,
  FALSE AS badges_assistance,
  FALSE AS badges_gemsCollector,
  'Very good!' AS feedback
FROM exercises e
WHERE NOT EXISTS (
  SELECT 1 FROM users WHERE email = 'weesheng2007@gmail.com'
)
LIMIT 1;