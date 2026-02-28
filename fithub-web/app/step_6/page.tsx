"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type MealTime = {
    hour: string;
    minute: string;
};

export default function Step6Page() {
    const router = useRouter();
    const { uuid } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [breakfast, setBreakfast] = useState<MealTime>({ hour: "08", minute: "30" });
    const [lunch, setLunch] = useState<MealTime>({ hour: "13", minute: "00" });
    const [dinner, setDinner] = useState<MealTime>({ hour: "19", minute: "30" });

    const updateTime = (
        setter: React.Dispatch<React.SetStateAction<MealTime>>,
        field: keyof MealTime,
        value: string
    ) => {
        let val = parseInt(value, 10);
        if (isNaN(val)) val = 0;

        if (field === "hour") {
            if (val < 0) val = 0;
            if (val > 23) val = 23;
        } else {
            if (val < 0) val = 0;
            if (val > 59) val = 59;
        }

        setter((prev) => ({ ...prev, [field]: val.toString().padStart(2, '0') }));
    };

    const handleContinue = async () => {
        if (!uuid) {
            setErrorMsg("Session expired. Please start over.");
            router.push("/");
            return;
        }

        setIsLoading(true);
        setErrorMsg("");

        try {
            const payload = {
                breakfast_time: `${breakfast.hour}:${breakfast.minute}:00`,
                lunch_time: `${lunch.hour}:${lunch.minute}:00`,
                dinner_time: `${dinner.hour}:${dinner.minute}:00`,
            };

            const { error } = await supabase
                .from("users")
                .update(payload)
                .eq("id", uuid);

            if (error) throw error;

            router.push("/step_7");

        } catch (err) {
            console.error(err);
            setErrorMsg("Failed to save data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark font-display text-[#181610] dark:text-white transition-colors duration-200">

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <span className="material-symbols-outlined absolute top-[10%] left-[5%] text-9xl text-[#ffbe0a] opacity-[0.08] rotate-12">calendar_month</span>
                <span className="material-symbols-outlined absolute top-[15%] right-[-5%] text-9xl text-[#ffbe0a] opacity-[0.08] -rotate-12">schedule</span>
                <span className="material-symbols-outlined absolute top-[40%] left-[-10%] text-[10rem] text-[#ffbe0a] opacity-[0.08] rotate-45">restaurant</span>
                <span className="material-symbols-outlined absolute bottom-[20%] right-[5%] text-8xl text-[#ffbe0a] opacity-[0.08] -rotate-6">local_dining</span>
                <span className="material-symbols-outlined absolute bottom-[5%] left-[10%] text-9xl text-[#ffbe0a] opacity-[0.08] rotate-12">timer</span>
            </div>

            <div className="relative z-10 flex flex-col pt-6 pb-2 px-6 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm sticky top-0">
                <div className="flex items-center justify-center mb-6 pt-2 relative">
                    <button
                        disabled={isLoading}
                        onClick={() => router.back()}
                        className="absolute left-0 flex items-center justify-center transition-colors hover:bg-black/5 dark:hover:bg-white/5 rounded-full p-2"
                    >
                        <span className="material-symbols-outlined text-lg font-bold">chevron_left</span>
                    </button>
                    <span className="text-[17px] font-bold">Step 6 of 8</span>
                </div>
                <div className="w-full h-[3px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-[#ff9100] w-[66.6%] rounded-full transition-all duration-500"></div>
                </div>
            </div>

            <div className="relative z-10 flex-1 px-6 pb-24 overflow-y-auto no-scrollbar">
                <div className="mb-8 mt-2">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tight mb-3">
                        Select preferred<br />meal time
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                        Setting a routine helps boost your metabolism and energy levels.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    {/* Breakfast */}
                    <div className="bg-white dark:bg-[#2c2615] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">bakery_dining</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold">Breakfast</h3>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">First meal of the day</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-3 bg-gray-50 dark:bg-[#231e0f] p-4 rounded-xl border border-gray-100 dark:border-white/5 focus-within:ring-2 focus-within:ring-[#ffbe0a] transition-all duration-200">
                                <div className="flex-1 text-center">
                                    <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Hour</label>
                                    <input
                                        type="number" max="23" min="0" value={breakfast.hour}
                                        onChange={(e) => updateTime(setBreakfast, 'hour', e.target.value)}
                                        className="w-full bg-transparent text-center text-2xl font-bold border-none focus:ring-0 p-0 outline-none appearance-none"
                                    />
                                </div>
                                <span className="text-2xl font-bold text-gray-300 dark:text-gray-600 mb-[-1.2rem]">:</span>
                                <div className="flex-1 text-center">
                                    <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Min</label>
                                    <input
                                        type="number" max="59" min="0" value={breakfast.minute}
                                        onChange={(e) => updateTime(setBreakfast, 'minute', e.target.value)}
                                        className="w-full bg-transparent text-center text-2xl font-bold border-none focus:ring-0 p-0 outline-none appearance-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lunch */}
                    <div className="bg-white dark:bg-[#2c2615] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">lunch_dining</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold">Lunch</h3>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">Mid-day refuel</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-3 bg-gray-50 dark:bg-[#231e0f] p-4 rounded-xl border border-gray-100 dark:border-white/5 focus-within:ring-2 focus-within:ring-[#ffbe0a] transition-all duration-200">
                                <div className="flex-1 text-center">
                                    <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Hour</label>
                                    <input
                                        type="number" max="23" min="0" value={lunch.hour}
                                        onChange={(e) => updateTime(setLunch, 'hour', e.target.value)}
                                        className="w-full bg-transparent text-center text-2xl font-bold border-none focus:ring-0 p-0 outline-none appearance-none"
                                    />
                                </div>
                                <span className="text-2xl font-bold text-gray-300 dark:text-gray-600 mb-[-1.2rem]">:</span>
                                <div className="flex-1 text-center">
                                    <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Min</label>
                                    <input
                                        type="number" max="59" min="0" value={lunch.minute}
                                        onChange={(e) => updateTime(setLunch, 'minute', e.target.value)}
                                        className="w-full bg-transparent text-center text-2xl font-bold border-none focus:ring-0 p-0 outline-none appearance-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dinner */}
                    <div className="bg-white dark:bg-[#2c2615] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">dinner_dining</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold">Dinner</h3>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">Evening meal</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-3 bg-gray-50 dark:bg-[#231e0f] p-4 rounded-xl border border-gray-100 dark:border-white/5 focus-within:ring-2 focus-within:ring-[#ffbe0a] transition-all duration-200">
                                <div className="flex-1 text-center">
                                    <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Hour</label>
                                    <input
                                        type="number" max="23" min="0" value={dinner.hour}
                                        onChange={(e) => updateTime(setDinner, 'hour', e.target.value)}
                                        className="w-full bg-transparent text-center text-2xl font-bold border-none focus:ring-0 p-0 outline-none appearance-none"
                                    />
                                </div>
                                <span className="text-2xl font-bold text-gray-300 dark:text-gray-600 mb-[-1.2rem]">:</span>
                                <div className="flex-1 text-center">
                                    <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Min</label>
                                    <input
                                        type="number" max="59" min="0" value={dinner.minute}
                                        onChange={(e) => updateTime(setDinner, 'minute', e.target.value)}
                                        className="w-full bg-transparent text-center text-2xl font-bold border-none focus:ring-0 p-0 outline-none appearance-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {errorMsg && (
                    <p className="text-center text-sm text-red-500 mt-6 font-bold">{errorMsg}</p>
                )}
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-20 max-w-md mx-auto">
                <div className="h-12 w-full bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
                <div className="bg-background-light dark:bg-background-dark px-6 pb-8 pt-2">
                    <button
                        disabled={isLoading}
                        onClick={handleContinue}
                        className="w-full flex items-center justify-center gap-1 bg-primary hover:brightness-105 text-white font-bold text-[17px] py-4 rounded-full shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                        <span>{isLoading ? "Saving..." : "Continue"}</span>
                        <span className="material-symbols-outlined text-sm font-bold stroke-2">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
