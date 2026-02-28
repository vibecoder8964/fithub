"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type TimeSlot = {
    id: number;
    hour: string;
    minute: string;
};

export default function Step7Page() {
    const router = useRouter();
    const { uuid } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [workoutSlots, setWorkoutSlots] = useState<TimeSlot[]>([
        { id: Date.now(), hour: "07", minute: "00" }
    ]);
    const [sleepSlot, setSleepSlot] = useState({ hour: "22", minute: "30" });

    const addWorkoutSlot = () => {
        if (workoutSlots.length < 3) {
            setWorkoutSlots([
                ...workoutSlots,
                { id: Date.now(), hour: "18", minute: "30" }
            ]);
        }
    };

    const removeWorkoutSlot = (id: number) => {
        if (workoutSlots.length > 1) {
            setWorkoutSlots(workoutSlots.filter(s => s.id !== id));
        }
    };

    const updateWorkoutSlot = (id: number, field: "hour" | "minute", value: string) => {
        let val = parseInt(value, 10);
        if (isNaN(val)) val = 0;

        if (field === "hour") {
            if (val < 0) val = 0;
            if (val > 23) val = 23;
        } else {
            if (val < 0) val = 0;
            if (val > 59) val = 59;
        }

        setWorkoutSlots(workoutSlots.map(s =>
            s.id === id ? { ...s, [field]: val.toString().padStart(2, '0') } : s
        ));
    };

    const updateSleepSlot = (field: "hour" | "minute", value: string) => {
        let val = parseInt(value, 10);
        if (isNaN(val)) val = 0;

        if (field === "hour") {
            if (val < 0) val = 0;
            if (val > 23) val = 23;
        } else {
            if (val < 0) val = 0;
            if (val > 59) val = 59;
        }

        setSleepSlot({ ...sleepSlot, [field]: val.toString().padStart(2, '0') });
    };

    const handleConfirm = async () => {
        if (!uuid) {
            setErrorMsg("Session expired. Please start over.");
            router.push("/");
            return;
        }

        if (workoutSlots.length === 0 || !sleepSlot.hour || !sleepSlot.minute) {
            setErrorMsg("Please fill in at least one workout time and your sleep time.");
            return;
        }

        setIsLoading(true);
        setErrorMsg("");

        try {
            const payload: any = {
                sleep_time: `${sleepSlot.hour}:${sleepSlot.minute}:00`,
            };

            workoutSlots.forEach((slot, index) => {
                payload[`workout_time_${index + 1}`] = `${slot.hour}:${slot.minute}:00`;
            });

            // Nullify empty slots if there are fewer than 3
            if (workoutSlots.length < 3) payload.workout_time_3 = null;
            if (workoutSlots.length < 2) payload.workout_time_2 = null;

            const { error } = await supabase
                .from("users")
                .update(payload)
                .eq("id", uuid);

            if (error) throw error;

            router.push("/step_8");

        } catch (err: any) {
            console.error(err);
            setErrorMsg(err.message || "Failed to save data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white font-display antialiased text-slate-900 min-h-screen flex flex-col relative overflow-hidden max-w-md mx-auto shadow-2xl">
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='%23FF7F50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.5 6.5h11'/%3E%3Cpath d='M6.5 17.5h11'/%3E%3Cpath d='M6 20v-2a6 6 0 0 1 12 0v2'/%3E%3Cpath d='M6 4v2a6 6 0 0 1 12 0V4'/%3E%3C/svg%3E")`,
                    backgroundPosition: '0 0, 40px 40px',
                    backgroundSize: '160px 160px',
                    backgroundRepeat: 'repeat'
                }}
            ></div>

            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex flex-col">
                <div className="flex items-center p-4 pb-2 justify-between">
                    <button
                        type="button"
                        disabled={isLoading}
                        onClick={() => router.back()}
                        className="text-slate-900 flex size-10 shrink-0 items-center cursor-pointer hover:bg-slate-100 rounded-full justify-center transition-colors"
                    >
                        <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                    </button>
                    <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Step 7 of 8</h2>
                </div>
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-[#FF9E00] rounded-r-full transition-all duration-500" style={{ width: "87.5%" }}></div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-24 relative z-10">
                <section className="flex flex-col">
                    <div className="px-4 pt-6 pb-2">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-[#FF9E00] text-3xl">fitness_center</span>
                            <h2 className="text-slate-900 tracking-tight text-3xl font-extrabold leading-tight">Workout Times</h2>
                        </div>
                        <p className="text-slate-600 text-base font-medium leading-normal mt-2">
                            Select up to 3 slots for your training sessions.
                        </p>
                    </div>

                    <div className="flex flex-col px-4 mt-4 gap-3">
                        <div className="flex flex-col gap-3">
                            {workoutSlots.map((slot, index) => (
                                <div key={slot.id} className="group flex items-center gap-4 bg-[#FFF5EB] p-4 rounded-xl shadow-sm border border-[#FFE0B2] transition-all hover:shadow-md">
                                    <div className="flex items-center justify-center rounded-lg bg-white text-[#FF9E00] shrink-0 size-12 shadow-sm">
                                        <span className="material-symbols-outlined">{index === 0 ? "alarm" : "directions_run"}</span>
                                    </div>
                                    <div className="flex flex-1 items-center gap-2">
                                        <div className="flex items-center bg-white rounded-lg border border-[#FF9E00]/20 shadow-sm px-3 py-1 w-full max-w-[140px] focus-within:ring-2 focus-within:ring-[#FF9E00]">
                                            <input
                                                type="number" max="23" min="0" value={slot.hour}
                                                onChange={(e) => updateWorkoutSlot(slot.id, 'hour', e.target.value)}
                                                className="w-10 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300 outline-none appearance-none"
                                            />
                                            <span className="text-slate-400 font-bold mx-1">:</span>
                                            <input
                                                type="number" max="59" min="0" value={slot.minute}
                                                onChange={(e) => updateWorkoutSlot(slot.id, 'minute', e.target.value)}
                                                className="w-10 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300 outline-none appearance-none"
                                            />
                                        </div>
                                        <p className="text-xs text-slate-600 ml-2 font-bold uppercase tracking-wider">Slot {index + 1}</p>
                                    </div>
                                    {workoutSlots.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeWorkoutSlot(slot.id)}
                                            className="shrink-0 size-8 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-slate-400 hover:text-red-500 transition-colors shadow-sm"
                                        >
                                            <span className="material-symbols-outlined text-xl">close</span>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        {workoutSlots.length < 3 && (
                            <button
                                type="button"
                                onClick={addWorkoutSlot}
                                className="mt-3 flex items-center justify-center gap-2 w-full py-4 border-2 border-dashed border-[#FF9E00]/30 rounded-xl text-[#FF9E00] hover:bg-[#FFF5EB] hover:border-[#FF9E00] transition-colors group bg-white/50"
                            >
                                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
                                <span className="font-bold text-base">Add Time Slot</span>
                            </button>
                        )}
                    </div>
                    <div className="h-8"></div>
                    <div className="h-px bg-gray-200 mx-4"></div>
                </section>

                <section className="flex flex-col mt-6">
                    <div className="px-4 pb-2">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-[#FF7F50] text-3xl">bedtime</span>
                            <h2 className="text-slate-900 tracking-tight text-3xl font-extrabold leading-tight">Sleep Schedule</h2>
                        </div>
                        <p className="text-slate-600 text-base font-medium leading-normal mt-2">
                            Consistent sleep boosts recovery and focus.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-4 px-4">
                        <div className="group flex items-center gap-4 bg-[#FFF5EB] p-4 rounded-xl shadow-sm border border-[#FFE0B2] transition-all hover:shadow-md">
                            <div className="flex items-center justify-center rounded-lg bg-white text-[#FF7F50] shrink-0 size-12 shadow-sm">
                                <span className="material-symbols-outlined">bedtime</span>
                            </div>
                            <div className="flex flex-1 items-center gap-2">
                                <div className="flex items-center bg-white rounded-lg border border-[#FF9E00]/20 shadow-sm px-3 py-1 w-full max-w-[140px] focus-within:ring-2 focus-within:ring-[#FF9E00]">
                                    <input
                                        type="number" max="23" min="0" value={sleepSlot.hour}
                                        onChange={(e) => updateSleepSlot('hour', e.target.value)}
                                        className="w-10 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300 outline-none appearance-none"
                                    />
                                    <span className="text-slate-400 font-bold mx-1">:</span>
                                    <input
                                        type="number" max="59" min="0" value={sleepSlot.minute}
                                        onChange={(e) => updateSleepSlot('minute', e.target.value)}
                                        className="w-10 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300 outline-none appearance-none"
                                    />
                                </div>
                                <p className="text-xs text-slate-600 ml-2 font-bold uppercase tracking-wider">Bedtime</p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-4 mb-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold border border-blue-100 shadow-sm">
                                <span className="material-symbols-outlined text-lg">info</span>
                                Recommended: 8 hours
                            </span>
                        </div>

                        {errorMsg && (
                            <p className="text-center text-sm text-red-500 font-bold mb-4">{errorMsg}</p>
                        )}
                    </div>
                </section>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 z-50 max-w-md mx-auto">
                <button
                    onClick={handleConfirm}
                    disabled={isLoading}
                    className="w-full h-14 bg-[#FF9E00] hover:bg-[#FF9E00]/90 text-white font-bold text-lg rounded-full shadow-lg shadow-[#FF9E00]/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                    {isLoading ? "Saving..." : "Confirm Schedule"}
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                </button>
            </div>
        </div>
    );
}
