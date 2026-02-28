"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

export default function Step8Page() {
    const router = useRouter();
    const { uuid } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [loadingText, setLoadingText] = useState("Allow notifications & access");

    const savePermissionsAndGenerate = async (allow: boolean) => {
        if (!uuid) {
            setErrorMsg("Session expired. Please start over.");
            router.push("/login");
            return;
        }

        setIsLoading(true);
        setErrorMsg("");
        setLoadingText(allow ? "Enabling..." : "Skipping...");

        try {
            // 1. Update permissions
            const { error: permError } = await supabase
                .from("users")
                .update({
                    camera_permission: allow,
                    recorder_permission: allow,
                    notification_permission: allow,
                })
                .eq("id", uuid);

            if (permError) throw permError;

            // 2. Trigger AI Generation
            setLoadingText("Generating personalized workouts with AI...");

            const res = await fetch("/api/generate-workouts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: uuid }),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Failed to generate workouts");
            }

            router.push("/home");

        } catch (error: any) {
            console.error(error);
            setErrorMsg(error.message || "An error occurred. Please try again.");
            setIsLoading(false);
            setLoadingText("Allow notifications & access");
        }
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-[#f8f7f5] dark:bg-[#231b0f] font-display text-[#181511] dark:text-white antialiased transition-colors">
            <div className="sticky top-0 z-10 bg-[#f8f7f5] dark:bg-[#231b0f]">
                <div className="relative flex items-center justify-between px-4 py-4">
                    <button
                        disabled={isLoading}
                        onClick={() => router.back()}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors absolute left-4 z-20"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
                    </button>
                    <div className="w-full text-center">
                        <span className="text-sm font-bold tracking-wide">Step 8 of 8</span>
                    </div>
                    <div className="size-10 pointer-events-none opacity-0"></div>
                </div>
                <div className="w-full h-1 bg-gray-200 dark:bg-white/10">
                    <div className="h-full w-full bg-[#f99c06] transition-all duration-500 delay-100"></div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center w-full max-w-xl mx-auto pb-32">
                <div className="w-full px-4 pt-6 pb-6">
                    <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9] shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#f99c06]/10 to-[#f99c06]/5 dark:from-[#f99c06]/20 dark:to-[#231b0f]"></div>
                        <div className="absolute inset-0 bg-center bg-cover opacity-90" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")` }}>
                        </div>
                    </div>
                </div>

                <div className="px-6 text-center">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tight mb-3">
                        Enable full experience
                    </h1>
                    <p className="text-base font-medium text-[#8c7b5f] dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                        Unlock the full potential of your health journey. We need a few permissions to help you succeed.
                    </p>
                </div>

                <div className="w-full px-4 py-8">
                    <div className="flex flex-col gap-4">
                        <div className="group flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-[#f99c06]/50">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f99c06]/10 text-[#f99c06] group-hover:bg-[#f99c06] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">notifications_active</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-base font-bold">Daily Motivation</h2>
                                <p className="text-sm text-[#8c7b5f] dark:text-gray-400">Get timely reminders to stay on track.</p>
                            </div>
                            <div className="ml-auto">
                                <span className="material-symbols-outlined text-[#f99c06] text-[20px]">check_circle</span>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-[#f99c06]/50">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f99c06]/10 text-[#f99c06] group-hover:bg-[#f99c06] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-base font-bold">Camera Access</h2>
                                <p className="text-sm text-[#8c7b5f] dark:text-gray-400">Needed for food analysis and other features.</p>
                            </div>
                            <div className="ml-auto">
                                <span className="material-symbols-outlined text-[#f99c06] text-[20px]">check_circle</span>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-[#f99c06]/50">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f99c06]/10 text-[#f99c06] group-hover:bg-[#f99c06] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">mic</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-base font-bold">Recorder Access</h2>
                                <p className="text-sm text-[#8c7b5f] dark:text-gray-400">Required to record sound for sleep analysis.</p>
                            </div>
                            <div className="ml-auto">
                                <span className="material-symbols-outlined text-[#f99c06] text-[20px]">check_circle</span>
                            </div>
                        </div>
                    </div>
                </div>

                {errorMsg && (
                    <p className="px-6 pb-6 text-center text-red-500 font-bold">{errorMsg}</p>
                )}

                <div className="px-6 pb-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-white/5 px-3 py-1.5">
                        <span className="material-symbols-outlined text-gray-500 text-[16px]">lock</span>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            Your data is encrypted and private.
                        </p>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#f8f7f5] dark:bg-[#231b0f] border-t border-black/5 dark:border-white/5 z-20">
                <div className="max-w-xl mx-auto flex flex-col gap-3">
                    <button
                        disabled={isLoading}
                        onClick={() => savePermissionsAndGenerate(true)}
                        className="w-full flex items-center justify-center rounded-xl bg-[#f99c06] px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-[#f99c06]/20 transition-transform active:scale-[0.98] hover:bg-[#f99c06]/90 disabled:opacity-50"
                    >
                        {isLoading ? (
                            <>
                                <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                                {loadingText}
                            </>
                        ) : "Allow notifications & access"}
                    </button>

                    <button
                        disabled={isLoading}
                        onClick={() => savePermissionsAndGenerate(false)}
                        className="w-full rounded-xl border border-gray-200 dark:border-white/10 px-6 py-3.5 text-center text-base font-bold text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50"
                    >
                        No, thanks
                    </button>
                </div>
            </div>
        </div>
    );
}
