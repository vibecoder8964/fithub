"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

export default function GoalsPage() {
    const { uuid } = useAuth();
    const [currentDate, setCurrentDate] = useState("");
    const [workouts, setWorkouts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        setCurrentDate(today.toLocaleDateString('en-US', options));

        async function loadData() {
            if (!uuid) return;

            const { data: user } = await supabase.from("users").select("*, workout_1, workout_2, workout_3").eq("id", uuid).single();

            if (user) {
                // Fetch assigned workouts
                const workoutIds = [user.workout_1, user.workout_2, user.workout_3].filter(Boolean);
                if (workoutIds.length > 0) {
                    const { data: exercises } = await supabase.from("exercises").select("id, name, type, time_consumed_in_minutes").in("id", workoutIds);
                    if (exercises) setWorkouts(exercises);
                }
            }
            setLoading(false);
        }
        loadData();
    }, [uuid]);

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col pb-24 md:pb-0 bg-background-light dark:bg-background-dark">
            <div className="p-5 flex flex-col gap-6 max-w-5xl mx-auto w-full pt-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-[#181510] dark:text-white">Today's Focus</h2>
                        <p className="text-sm text-[#8d7b5e] dark:text-[#a89b85]">Stay consistent to keep your streak alive.</p>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                        {currentDate}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Meal Commitment */}
                    <div className="bg-white dark:bg-[#2c241b] p-6 rounded-2xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                <span className="material-symbols-outlined">restaurant</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#181510] dark:text-white">Meal Commitment</h3>
                                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">Track your main meals</p>
                            </div>
                        </div>
                        <div className="space-y-4 flex-1">
                            <label className="flex items-center justify-between p-3 rounded-xl border border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="size-5 rounded border-stone-300 text-primary focus:ring-primary" disabled />
                                    <span className="font-medium text-[#181510] dark:text-white transition-colors">Breakfast</span>
                                </div>
                                <span className="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">High Protein</span>
                            </label>

                            <label className="flex items-center justify-between p-3 rounded-xl border border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="size-5 rounded border-stone-300 text-primary focus:ring-primary" disabled />
                                    <span className="font-medium text-[#181510] dark:text-white transition-colors">Lunch</span>
                                </div>
                                <span className="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">Balanced</span>
                            </label>

                            <label className="flex items-center justify-between p-3 rounded-xl border border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="size-5 rounded border-stone-300 text-primary focus:ring-primary" disabled />
                                    <span className="font-medium text-[#181510] dark:text-white transition-colors">Dinner</span>
                                </div>
                                <span className="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">Low Carb</span>
                            </label>
                        </div>
                    </div>

                    {/* Workout Commitment */}
                    <div className="bg-white dark:bg-[#2c241b] p-6 rounded-2xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <span className="material-symbols-outlined">fitness_center</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#181510] dark:text-white">Workout Commitment</h3>
                                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">Daily planned activities</p>
                            </div>
                        </div>

                        <div className="space-y-4 flex-1">
                            {workouts.length === 0 ? (
                                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 text-center text-sm text-stone-500">
                                    No workouts scheduled for today.
                                </div>
                            ) : (
                                workouts.map((w, index) => (
                                    <div key={w.id} className="p-4 rounded-xl bg-stone-50 dark:bg-[#231b0f] border border-stone-100 dark:border-stone-800 relative overflow-hidden group">
                                        <div className="flex justify-between items-start">
                                            <div className="flex gap-4">
                                                <div className="size-12 rounded-lg bg-white dark:bg-[#2c241b] flex items-center justify-center shadow-sm">
                                                    <span className="material-symbols-outlined text-blue-500">
                                                        {w.type === "cardiovascular" ? "directions_run" : w.type === "meditation or yoga" ? "self_improvement" : "fitness_center"}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#181510] dark:text-white">{w.name}</h4>
                                                    <p className="text-xs text-stone-500 mt-1 capitalize">{w.time_consumed_in_minutes} Mins • {w.type}</p>
                                                </div>
                                            </div>
                                            <div className="size-6 rounded-full border-2 border-stone-300 dark:border-stone-600"></div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Sleep Commitment */}
                    <div className="bg-white dark:bg-[#2c241b] p-6 rounded-2xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] lg:col-span-2">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <span className="material-symbols-outlined">bedtime</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#181510] dark:text-white">Sleep Commitment</h3>
                                    <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">Goal: 8 Hours</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-5 rounded-xl bg-stone-50 dark:bg-stone-800/30 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-white dark:bg-[#2c241b] rounded-full shadow-sm">
                                    <span className="material-symbols-outlined text-stone-400">auto_awesome</span>
                                </div>
                                <div>
                                    <p className="font-bold text-[#181510] dark:text-white">Sleep Tracker</p>
                                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                                        Awaiting CircadianSync data...
                                    </p>
                                </div>
                            </div>
                            <div className="relative inline-flex h-8 w-14 flex-shrink-0 cursor-not-allowed border-2 border-transparent transition-colors duration-200 ease-in-out bg-stone-300 dark:bg-stone-700 rounded-full">
                                <span className="inline-block size-7 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
