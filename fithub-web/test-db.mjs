import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rjyavmtafrrfkdiotffg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqeWF2bXRhZnJyZmtkaW90ZmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5MDI4MjUsImV4cCI6MjA4NzQ3ODgyNX0.ExpmHHekTt-WOUfvPSWPU9lt6iYXFQbmaSu0xBz-2u8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function check() {
    console.log("Checking DB...");
    const { data: users, error: uErr } = await supabase.from('users').select('username, email, phone_number, password')
    console.log("Users:", users ? users.length : 0, uErr)
    if (users) console.log(users.slice(0, 2))

    const { data: ex, error: eErr } = await supabase.from('exercises').select('id, name')
    console.log("Exercises:", ex, eErr)

    // simulate the insert
    const { data: dummyEx, error: dummyErr } = await supabase
        .from('exercises')
        .insert({
            name: "Placeholder Workout",
            type: "gym",
            intensity: "medium",
            calorie_burnt: 0,
            image_link: "https://via.placeholder.com/150",
            source: "system",
            source_id: "dummy-" + Date.now()
        })
        .select('id')
        .single();

    console.log("Dummy insert result:", dummyEx, dummyErr)
}
check()
