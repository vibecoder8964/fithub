import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const { userId } = await req.json();
        if (!userId) return NextResponse.json({ message: "userId required" }, { status: 400 });

        // 1. Fetch user bio
        const { data: user, error: userErr } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();

        if (userErr || !user) throw new Error("Failed to fetch user");

        // Calculate how many workout slots they actually requested
        const numWorkouts = [user.workout_time_1, user.workout_time_2, user.workout_time_3]
            .filter(t => t !== null && t !== undefined).length || 1;

        // 2. Fetch random pool of exercises to send to Gemini as options
        // To respect token limits natively, we select 150 random exercises.
        const { data: exercises, error: exErr } = await supabase
            .from('exercises')
            .select('id, name, type, intensity');

        if (exErr || !exercises) throw new Error("Failed to fetch exercises");

        const shuffled = exercises.sort(() => 0.5 - Math.random()).slice(0, 150);

        const prompt = `Based on the following user profile:
Description: ${user.description || "No specific description"}
Condition: ${user.condition || "No specific condition"}
Age: ${user.age}
Weight: ${user.weight}kg
Height: ${user.height}cm
Gender: ${user.gender}

Choose exactly ${numWorkouts} distinct exercises that best fit this individual's physical profile from the JSON list below.
Reply ONLY with a raw JSON array of string UUIDs for the selected ${numWorkouts} exercises. Do not wrap in markdown tags or explain yourself. Just ["uuid1", "uuid2"].

Exercises:
${JSON.stringify(shuffled)}
`;

        const apiKey = process.env.GEMINI_API_KEY;

        // 3. Optional Fallback if the dev did not put a key yet
        if (!apiKey) {
            console.log("No GEMINI_API_KEY detected. Mocking response and picking random exercises...");
            const selected = shuffled.slice(0, numWorkouts).map(e => e.id);
            await saveWorkouts(userId, selected);
            return NextResponse.json({ success: true, mocked: true });
        }

        // 4. Ping Gemini Vision/Flash API
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        });

        if (!res.ok) {
            throw new Error(`Gemini API Error: ${res.statusText}`);
        }

        const geminiData = await res.json();
        const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
        const cleanText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();

        let selectedUUIDs: string[] = [];
        try {
            selectedUUIDs = JSON.parse(cleanText);
        } catch (e) {
            console.error("Failed to parse Gemini JSON:", cleanText);
            selectedUUIDs = shuffled.slice(0, numWorkouts).map(e => e.id);
        }

        if (!Array.isArray(selectedUUIDs) || selectedUUIDs.length === 0) {
            selectedUUIDs = shuffled.slice(0, numWorkouts).map(e => e.id);
        }

        // 5. Mutate User entity
        await saveWorkouts(userId, selectedUUIDs);
        return NextResponse.json({ success: true });

    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

async function saveWorkouts(userId: string, uuids: string[]) {
    const [w1, w2, w3] = uuids;

    // Must ensure at least w1 is provided per schema requirement
    const payload: any = {};
    if (w1) payload.workout_1 = w1;
    if (w2) payload.workout_2 = w2;
    if (w3) payload.workout_3 = w3;

    const { error } = await supabase.from('users').update(payload).eq('id', userId);
    if (error) {
        console.error("Supabase Save Error:", error);
        throw new Error("Could not update workout IDs in database");
    }
}
