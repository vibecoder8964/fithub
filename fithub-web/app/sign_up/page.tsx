"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function SignUpPage() {
    const router = useRouter();
    const { setUuid } = useAuth();

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Validation Rules
    const isValidLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const isPasswordValid = isValidLength && hasNumber && hasUpperCase;

    // Gmail / Phone Rules
    const isGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(identifier);
    const isPhone = /^\+?[0-9\s\-]{7,15}$/.test(identifier); // Basic phone regex

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isPasswordValid) return;

        if (!isGmail && !isPhone) {
            setErrorMsg("Not a valid Google Mail or Phone Number!");
            return;
        }

        setErrorMsg("");
        setIsLoading(true);

        try {
            // Prompt Rule: INSERT INTO users ... Store the UUID as X in cache for the whole sign in process.
            // Because our DB has NOT NULL constraints on other fields, we must insert dummy values
            // to satisfy Postgres, which will be overwritten in /step_X pages.

            // Step 1: Fetch a valid exercise UUID for `workout_1` constraint
            const { data: exercises, error: exError } = await supabase
                .from('exercises')
                .select('id')
                .limit(1);

            let exerciseId;

            if (exError || !exercises || exercises.length === 0) {
                // Fallback: Create a dummy exercise to satisfy the FK constraint
                const { data: dummyEx, error: dummyErr } = await supabase
                    .from('exercises')
                    .insert({
                        name: "Placeholder Workout",
                        type: "gym",
                        intensity: "medium",
                        calorie_burnt: 0,
                        image_link: "https://via.placeholder.com/150",
                        source: "system",
                        source_id: "dummy-1"
                    })
                    .select('id')
                    .single();

                if (dummyErr || !dummyEx) {
                    setErrorMsg("Database missing exercises for foreign key constraints.");
                    setIsLoading(false);
                    return;
                }
                exerciseId = dummyEx.id;
            } else {
                exerciseId = exercises[0].id;
            }

            const newUuid = uuidv4();
            const payload: any = {
                id: newUuid,
                password: password,
                username: "user_" + newUuid.split("-")[0],
                description: "",
                condition: "",
                gender: "male",
                age: 18,
                height: 170,
                weight: 70,
                living_country: "Unknown",
                engage_time_before_1: "00:00:00",
                engage_time_after_1: "00:00:00",
                workout_time_1: "00:00:00",
                workout_1: exerciseId,
                breakfast_time: "08:00:00",
                lunch_time: "12:00:00",
                dinner_time: "18:00:00",
                xp_count: 0,
                gems_count: 0,
                streak_count: 0
            };

            if (isGmail) {
                payload.email = identifier;
                payload.phone_number = "Unknown";
            } else {
                payload.phone_number = identifier;
                payload.email = "placeholder@gmail.com";
            }

            const { error } = await supabase.from("users").insert([payload]);

            if (error) {
                if (error.code === '23505') {
                    setErrorMsg("Email or Phone number is already registered.");
                } else {
                    setErrorMsg("Database error during registration.");
                    console.error(error);
                }
                return;
            }

            // Success
            setUuid(newUuid);
            router.push("/step_2");

        } catch (err) {
            setErrorMsg("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden text-[#181510] dark:text-white">
            {/* Background Icons Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0 overflow-hidden flex flex-wrap content-center justify-center gap-12 p-10 rotate-12 scale-150">
                <span className="material-symbols-outlined text-9xl">fitness_center</span>
                <span className="material-symbols-outlined text-9xl">favorite</span>
                <span className="material-symbols-outlined text-9xl">directions_run</span>
                <span className="material-symbols-outlined text-9xl">monitor_heart</span>
            </div>

            <main className="relative z-10 w-full max-w-md bg-white dark:bg-[#1e1e1e] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none overflow-hidden">

                <div className="pt-8 pb-2 px-6 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">bolt</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Create Account</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-medium">Start your fitness journey today.</p>
                </div>

                <form className="px-6 py-6 space-y-5" onSubmit={handleSignUp}>
                    <label className="block">
                        <span className="text-[#181510] dark:text-gray-200 text-sm font-semibold mb-1.5 block">Phone or Google Mail</span>
                        <div className="relative">
                            <input
                                className="w-full h-14 pl-12 pr-4 rounded-lg bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base"
                                placeholder="Enter your phone or gmail"
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                disabled={isLoading}
                                required
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                        </div>
                    </label>

                    <label className="block group">
                        <span className="text-[#181510] dark:text-gray-200 text-sm font-semibold mb-1.5 block">Set Password</span>
                        <div className="relative">
                            <input
                                className="w-full h-14 pl-12 pr-12 rounded-lg bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base"
                                placeholder="Create a strong password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                                required
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <span className="material-symbols-outlined">lock</span>
                            </div>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <span className="material-symbols-outlined">
                                    {showPassword ? "visibility" : "visibility_off"}
                                </span>
                            </button>
                        </div>

                        <div className="mt-3 space-y-1.5">
                            <div className={`flex items-center gap-2 text-xs font-medium ${isValidLength ? 'text-green-500' : 'text-red-500'}`}>
                                <span className="material-symbols-outlined text-[16px]">{isValidLength ? 'check_circle' : 'cancel'}</span>
                                <span>Must be at least 8 characters</span>
                            </div>
                            <div className={`flex items-center gap-2 text-xs font-medium ${hasNumber ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`}>
                                <span className="material-symbols-outlined text-[16px]">{hasNumber ? 'check_circle' : 'circle'}</span>
                                <span>Contains a number</span>
                            </div>
                            <div className={`flex items-center gap-2 text-xs font-medium ${hasUpperCase ? 'text-green-500' : 'text-gray-400 dark:text-gray-500'}`}>
                                <span className="material-symbols-outlined text-[16px]">{hasUpperCase ? 'check_circle' : 'circle'}</span>
                                <span>Contains an uppercase letter</span>
                            </div>
                        </div>
                    </label>

                    {errorMsg && (
                        <div className="text-red-500 text-sm font-semibold text-center mt-2 px-2 py-1 bg-red-100 dark:bg-red-900/40 rounded">
                            {errorMsg}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full h-14 mt-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100"
                        disabled={!isPasswordValid || isLoading}
                    >
                        <span>{isLoading ? "Signing Up..." : "Sign Up"}</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </form>

                <div className="p-6 pt-2 text-center bg-gray-50 dark:bg-[#252525] border-t border-gray-100 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?
                        <Link href="/login" className="font-bold text-primary hover:text-orange-600 transition-colors ml-1">Log In</Link>
                    </p>
                </div>
            </main>

            <div className="h-8"></div>
        </div>
    );
}
