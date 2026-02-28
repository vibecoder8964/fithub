"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type TimeBlock = {
    id: number;
    startH: string;
    startM: string;
    endH: string;
    endM: string;
};

export default function Step5Page() {
    const router = useRouter();
    const { uuid } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [blocks, setBlocks] = useState<TimeBlock[]>([
        { id: 1, startH: '09', startM: '00', endH: '13', endM: '00' }
    ]);

    const addBlock = () => {
        if (blocks.length < 3) {
            setBlocks([
                ...blocks,
                { id: Date.now(), startH: '14', startM: '00', endH: '18', endM: '00' }
            ]);
        }
    };

    const removeBlock = (index: number) => {
        setBlocks(blocks.filter((_, i) => i !== index));
    };

    const updateTime = (index: number, field: keyof TimeBlock, value: string) => {
        let val = parseInt(value, 10);
        if (isNaN(val)) val = 0;

        if (field.includes('H')) {
            if (val < 0) val = 0;
            if (val > 23) val = 23;
        } else {
            if (val < 0) val = 0;
            if (val > 59) val = 59;
        }

        const paddedVal = val.toString().padStart(2, '0');

        setBlocks(blocks.map((b, i) => i === index ? { ...b, [field]: paddedVal } : b));
    };

    const handleContinue = async () => {
        if (!uuid) {
            setErrorMsg("Session expired. Please start over.");
            router.push("/");
            return;
        }

        // Validate logic locally
        let isValid = true;
        for (const [index, block] of blocks.entries()) {
            const startTotal = parseInt(block.startH) * 60 + parseInt(block.startM);
            const endTotal = parseInt(block.endH) * 60 + parseInt(block.endM);
            if (startTotal >= endTotal) {
                isValid = false;
                setErrorMsg(`Block ${index + 1}: End time must be after start time.`);
                return;
            }
        }

        setIsLoading(true);
        setErrorMsg("");

        try {
            const payload: any = {};

            blocks.forEach((block, index) => {
                const slot = index + 1; // 1, 2, 3
                payload[`engage_time_before_${slot}`] = `${block.startH}:${block.startM}:00`;
                payload[`engage_time_after_${slot}`] = `${block.endH}:${block.endM}:00`;
            });

            // If a block is removed later, nullify it to clean up
            if (blocks.length < 3) {
                payload.engage_time_before_3 = null;
                payload.engage_time_after_3 = null;
            }
            if (blocks.length < 2) {
                payload.engage_time_before_2 = null;
                payload.engage_time_after_2 = null;
            }

            const { error } = await supabase
                .from("users")
                .update(payload)
                .eq("id", uuid);

            if (error) throw error;

            router.push("/step_6");

        } catch (err) {
            console.error(err);
            setErrorMsg("Failed to save data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark text-[#181510] dark:text-white font-display">

            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 overflow-hidden">
                <span className="material-symbols-outlined absolute text-[#ff9d00] opacity-[0.08]" style={{ top: '10%', left: '5%', fontSize: '48px', transform: 'rotate(-15deg)' }}>calendar_month</span>
                <span className="material-symbols-outlined absolute text-[#ff9d00] opacity-[0.08]" style={{ top: '25%', right: '-5%', fontSize: '64px', transform: 'rotate(20deg)' }}>schedule</span>
                <span className="material-symbols-outlined absolute text-[#ff9d00] opacity-[0.08]" style={{ bottom: '15%', left: '-5%', fontSize: '56px', transform: 'rotate(10deg)' }}>watch_later</span>
                <span className="material-symbols-outlined absolute text-[#ff9d00] opacity-[0.08]" style={{ bottom: '40%', right: '10%', fontSize: '40px', transform: 'rotate(-25deg)' }}>timer</span>
            </div>

            <header className="relative z-10 px-6 pt-6 pb-2">
                <div className="flex items-center justify-between mb-4">
                    <button
                        disabled={isLoading}
                        onClick={() => router.back()}
                        className="flex items-center justify-center h-10 w-10 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        <span className="material-symbols-outlined text-2xl">chevron_left</span>
                    </button>
                    <span className="absolute left-1/2 -translate-x-1/2 text-[20px] font-extrabold text-[#181510] dark:text-white">Step 5 of 8</span>
                    <div className="w-10"></div>
                </div>

                <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-8">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: "55.5%" }}></div>
                </div>

                <h1 className="text-3xl font-extrabold leading-tight tracking-tight">
                    Select period(s) that you are engaged with work and tasks
                </h1>
                <p className="text-[#6b5e4c] dark:text-gray-400 text-base font-medium leading-relaxed mt-3">
                    We'll optimize your motivation prompts around these hours.
                </p>
            </header>

            <main className="relative z-10 flex-1 px-6 py-6 flex flex-col gap-4 overflow-y-auto">
                {blocks.map((block, index) => (
                    <div key={block.id} className="group relative p-5 bg-white dark:bg-[#2f2519] rounded-xl shadow-[0_4px_20px_-2px_rgba(24,21,16,0.05)] border border-transparent dark:border-white/5 transition-all">
                        {blocks.length > 1 && (
                            <button
                                onClick={() => removeBlock(index)}
                                aria-label="Remove time slot"
                                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors z-20"
                            >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                        )}
                        <div className="flex items-center gap-4 w-full">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-light dark:bg-white/5 text-primary flex-shrink-0">
                                <span className="material-symbols-outlined text-[24px]">schedule</span>
                            </div>
                            <div className="flex flex-col w-full pr-8">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#6b5e4c] dark:text-gray-500 mb-0.5">Block {index + 1}</span>
                                <div className="flex items-center text-xl font-bold font-display">
                                    <div className="flex items-center bg-background-light dark:bg-black/20 rounded px-2.5 py-1.5 focus-within:border-b-2 focus-within:border-primary">
                                        <input
                                            type="number" min="0" max="23" value={block.startH}
                                            onChange={(e) => updateTime(index, 'startH', e.target.value)}
                                            className="w-[3.5ch] text-center bg-transparent border-none p-0 outline-none text-inherit focus:ring-0 appearance-none m-0"
                                        />
                                        <span className="mx-0.5 text-[#6b5e4c]/50">:</span>
                                        <input
                                            type="number" min="0" max="59" value={block.startM}
                                            onChange={(e) => updateTime(index, 'startM', e.target.value)}
                                            className="w-[3.5ch] text-center bg-transparent border-none p-0 outline-none text-inherit focus:ring-0 appearance-none m-0"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-[#6b5e4c] mx-2">to</span>
                                    <div className="flex items-center bg-background-light dark:bg-black/20 rounded px-2.5 py-1.5 focus-within:border-b-2 focus-within:border-primary">
                                        <input
                                            type="number" min="0" max="23" value={block.endH}
                                            onChange={(e) => updateTime(index, 'endH', e.target.value)}
                                            className="w-[3.5ch] text-center bg-transparent border-none p-0 outline-none text-inherit focus:ring-0 appearance-none m-0"
                                        />
                                        <span className="mx-0.5 text-[#6b5e4c]/50">:</span>
                                        <input
                                            type="number" min="0" max="59" value={block.endM}
                                            onChange={(e) => updateTime(index, 'endM', e.target.value)}
                                            className="w-[3.5ch] text-center bg-transparent border-none p-0 outline-none text-inherit focus:ring-0 appearance-none m-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {blocks.length < 3 && (
                    <button
                        onClick={addBlock}
                        className="w-full group relative flex items-center justify-center gap-3 p-5 rounded-xl border-2 border-dashed border-[#FFBE0B]/50 hover:border-[#FFBE0B] bg-[#FFBE0B]/10 hover:bg-[#FFBE0B]/20 transition-all active:scale-[0.99]"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFBE0B] text-[#181510] shadow-sm group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[20px] font-bold">add</span>
                        </div>
                        <span className="text-base font-bold text-[#181510] dark:text-white">Add another period</span>
                    </button>
                )}

                {blocks.length >= 3 && (
                    <p className="text-center text-xs text-red-500 mt-2 font-medium">Maximum 3 periods reached</p>
                )}

                {errorMsg && (
                    <p className="text-center text-sm text-red-500 mt-4 font-bold">{errorMsg}</p>
                )}
            </main>

            <div className="relative z-10 w-full p-6 bg-background-light dark:bg-background-dark">
                <button
                    onClick={handleContinue}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                    <span>{isLoading ? "Saving..." : "Continue"}</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}
