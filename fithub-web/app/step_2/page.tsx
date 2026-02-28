"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

export default function Step2Page() {
    const router = useRouter();
    const { uuid } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [otherText, setOtherText] = useState("");

    const toggleOption = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };

    const handleContinue = async () => {
        if (!uuid) {
            setErrorMsg("Session expired. Please start over.");
            router.push("/");
            return;
        }

        if (selectedOptions.length === 0 && otherText.trim() === "") {
            setErrorMsg("Please select at least one option to continue.");
            return;
        }

        setIsLoading(true);
        setErrorMsg("");

        try {
            // Build appended string
            const selectedSources = [...selectedOptions];
            if (otherText.trim() !== "" && selectedOptions.includes("Others")) {
                // Replace "Others" with the actual text if typed
                const otherIndex = selectedSources.indexOf("Others");
                selectedSources[otherIndex] = `Others: ${otherText}`;
            }

            const newDescriptionText = `Source: ${selectedSources.join(", ")}.`;

            // SQL UPDATE query equivalent mapped to REST
            const { data: user, error: fetchErr } = await supabase
                .from('users')
                .select('description')
                .eq('id', uuid)
                .single();

            if (fetchErr) throw fetchErr;

            const updatedDescription = user.description ? `${user.description}\n${newDescriptionText}` : newDescriptionText;

            const { error: updateErr } = await supabase
                .from("users")
                .update({ description: updatedDescription })
                .eq("id", uuid);

            if (updateErr) throw updateErr;

            router.push("/step_3");

        } catch (err) {
            console.error(err);
            setErrorMsg("Failed to save data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col bg-white dark:bg-[#1a1610] shadow-xl overflow-x-hidden font-display">

            {/* Header */}
            <header className="flex items-center justify-between p-4 pb-2 bg-white dark:bg-[#1a1610]">
                <button
                    onClick={() => router.back()}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#181511] dark:text-white"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
                </button>
                <h2 className="text-[#181511] dark:text-white text-base font-bold leading-tight tracking-tight text-center flex-1 pr-10">
                    Step 2 of 8
                </h2>
            </header>

            {/* Progress Bar */}
            <div className="px-4 pb-6 bg-white dark:bg-[#1a1610]">
                <div className="h-1.5 w-full rounded-full bg-[#e6e2db] dark:bg-gray-700 overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: "22.2%" }}></div>
                </div>
            </div>

            <main className="flex-1 flex flex-col px-6 pb-24 overflow-y-auto w-full max-w-md mx-auto">
                <div className="pb-6">
                    <h1 className="text-[#181511] dark:text-white text-[32px] font-extrabold leading-[1.2] tracking-tight mb-2">
                        How did you hear about us?
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-medium">
                        Select all that apply.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">

                    {/* GitHub option */}
                    <label className="relative cursor-pointer group">
                        <input
                            checked={selectedOptions.includes("GitHub")}
                            onChange={() => toggleOption("GitHub")}
                            className="peer sr-only"
                            type="checkbox"
                        />
                        <div className={`h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-200 
              ${selectedOptions.includes("GitHub") ? 'border-primary bg-primary/5' : 'border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25]'}`}>
                            <div className="size-14 rounded-full bg-white dark:bg-[#362e25] flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform text-gray-800 dark:text-white">
                                <span className="material-symbols-outlined text-[32px]">code</span>
                            </div>
                            <span className="text-[#181511] dark:text-white font-bold text-lg">GitHub</span>
                            <div className={`absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-200 ${selectedOptions.includes("GitHub") ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                            </div>
                        </div>
                    </label>

                    {/* LinkedIn option */}
                    <label className="relative cursor-pointer group">
                        <input
                            checked={selectedOptions.includes("LinkedIn")}
                            onChange={() => toggleOption("LinkedIn")}
                            className="peer sr-only"
                            type="checkbox"
                        />
                        <div className={`h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-200 
              ${selectedOptions.includes("LinkedIn") ? 'border-primary bg-primary/5' : 'border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25]'}`}>
                            <div className="size-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform text-blue-600">
                                <span className="material-symbols-outlined text-[32px]">share_reviews</span>
                            </div>
                            <span className="text-[#181511] dark:text-white font-bold text-lg">LinkedIn</span>
                            <div className={`absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-200 ${selectedOptions.includes("LinkedIn") ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                            </div>
                        </div>
                    </label>

                    {/* YouTube option */}
                    <label className="relative cursor-pointer group">
                        <input
                            checked={selectedOptions.includes("YouTube")}
                            onChange={() => toggleOption("YouTube")}
                            className="peer sr-only"
                            type="checkbox"
                        />
                        <div className={`h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-200 
              ${selectedOptions.includes("YouTube") ? 'border-primary bg-primary/5' : 'border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25]'}`}>
                            <div className="size-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform text-[#FF6B6B]">
                                <span className="material-symbols-outlined text-[32px]">smart_display</span>
                            </div>
                            <span className="text-[#181511] dark:text-white font-bold text-lg">YouTube</span>
                            <div className={`absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-200 ${selectedOptions.includes("YouTube") ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                            </div>
                        </div>
                    </label>

                    {/* Others option */}
                    <label className="relative cursor-pointer group">
                        <input
                            checked={selectedOptions.includes("Others")}
                            onChange={() => toggleOption("Others")}
                            className="peer sr-only"
                            type="checkbox"
                        />
                        <div className={`h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-200 
              ${selectedOptions.includes("Others") ? 'border-primary bg-primary/5' : 'border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25]'}`}>
                            <div className="size-14 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform text-[#FFD500]">
                                <span className="material-symbols-outlined text-[32px]">more_horiz</span>
                            </div>
                            <span className="text-[#181511] dark:text-white font-bold text-lg">Others</span>
                            <div className={`absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-200 ${selectedOptions.includes("Others") ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                            </div>
                        </div>
                    </label>

                </div>

                {selectedOptions.includes("Others") && (
                    <div className="animate-fade-in-up transition-all duration-300 ease-in-out">
                        <label className="block text-sm font-bold text-[#181511] dark:text-white mb-2 ml-1" htmlFor="other-source">
                            Where did you hear about us?
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400">edit</span>
                            </div>
                            <input
                                className="block w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-[#2a241d] text-[#181511] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#362e25] transition-all font-medium text-lg"
                                id="other-source"
                                placeholder="e.g. Podcast, Friend..."
                                type="text"
                                value={otherText}
                                onChange={(e) => setOtherText(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {errorMsg && (
                    <div className="text-red-500 text-sm font-semibold text-center mt-4">
                        {errorMsg}
                    </div>
                )}
            </main>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-[#1a1610] dark:via-[#1a1610] pt-12">
                <button
                    onClick={handleContinue}
                    disabled={isLoading || (selectedOptions.length === 0)}
                    className="w-full max-w-sm mx-auto bg-primary hover:bg-[#e08c05] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {isLoading ? "Saving..." : "Continue"}
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}
