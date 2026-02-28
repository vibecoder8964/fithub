"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type Goal = {
    id: string;
    label: string;
    icon: string;
};

const goals: Goal[] = [
    { id: "healthy", label: "Healthy lifestyle", icon: "ecg_heart" },
    { id: "lose_weight", label: "Lose weight", icon: "monitor_weight" },
    { id: "fit_body", label: "Fit body", icon: "fitness_center" },
    { id: "motivation", label: "Motivation", icon: "bolt" },
    { id: "productive", label: "Productive lifestyle", icon: "schedule" },
    { id: "happy", label: "Happier life", icon: "sentiment_satisfied" },
];

export default function Step3Page() {
    const router = useRouter();
    const { uuid } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

    const toggleGoal = (id: string) => {
        setSelectedGoals((prev) =>
            prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
        );
    };

    const handleContinue = async () => {
        if (!uuid) {
            setErrorMsg("Session expired. Please start over.");
            router.push("/");
            return;
        }

        if (selectedGoals.length === 0) {
            setErrorMsg("Please select at least one goal to continue.");
            return;
        }

        setIsLoading(true);
        setErrorMsg("");

        try {
            // Map IDs to labels for the description string
            const selectedLabels = selectedGoals.map(
                (id) => goals.find((g) => g.id === id)?.label
            );

            const newDescriptionText = `Goals: ${selectedLabels.join(", ")}.`;

            // Fetch existing description to append to it
            const { data: user, error: fetchErr } = await supabase
                .from('users')
                .select('description')
                .eq('id', uuid)
                .single();

            if (fetchErr) throw fetchErr;

            const updatedDescription = user.description
                ? `${user.description}\n${newDescriptionText}`
                : newDescriptionText;

            const { error: updateErr } = await supabase
                .from("users")
                .update({ description: updatedDescription })
                .eq("id", uuid);

            if (updateErr) throw updateErr;

            router.push("/step_4");

        } catch (err) {
            console.error(err);
            setErrorMsg("Failed to save data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark text-[#181511] dark:text-white font-display">

            {/* Header / Progress */}
            <div className="flex w-full flex-col justify-center gap-4 pt-8 pb-4 px-6">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex items-center justify-center relative w-full">
                        <button
                            className="absolute left-0 p-1"
                            onClick={() => router.back()}
                            disabled={isLoading}
                        >
                            <span className="material-symbols-outlined text-[#181511] dark:text-white text-2xl font-bold">chevron_left</span>
                        </button>
                        <span className="text-[#181511] dark:text-white text-base font-bold">Step 3 of 8</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#e6e2db] dark:bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF9E00] rounded-full shadow-[0_0_10px_rgba(255,158,0,0.4)] transition-all duration-500 ease-out" style={{ width: "33.33%" }}></div>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="tracking-tight text-[28px] md:text-[32px] font-extrabold leading-tight">
                        What is your goal of downloading this app?
                    </h1>
                    <p className="text-[#8c7b5f] dark:text-gray-400 text-sm font-medium mt-2">
                        Select all that apply
                    </p>
                </div>
            </div>

            {/* Main Content: Goals Grid */}
            <div className="flex-1 overflow-y-auto px-4 pb-24">
                <div className="grid grid-cols-2 gap-4 py-4">

                    {goals.map((goal) => {
                        const isSelected = selectedGoals.includes(goal.id);
                        return (
                            <div
                                key={goal.id}
                                onClick={() => toggleGoal(goal.id)}
                                className={`group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 active:scale-95 
                  ${isSelected
                                        ? 'border-primary bg-primary/10 hover:bg-primary/15'
                                        : 'border-transparent bg-white dark:bg-[#2e251a] shadow-sm hover:shadow-md'
                                    }`}
                            >
                                {isSelected ? (
                                    <div className="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                                    </div>
                                ) : (
                                    <div className="absolute top-3 right-3 h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent"></div>
                                )}

                                <div className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors 
                  ${isSelected ? 'bg-primary/20 text-primary' : 'bg-[#f4f2f0] dark:bg-white/10 text-[#181511] dark:text-white'}`}
                                >
                                    <span className="material-symbols-outlined text-[28px]">{goal.icon}</span>
                                </div>

                                <div className="text-center">
                                    <p className={`text-base leading-normal ${isSelected ? 'font-bold' : 'font-semibold'}`}>
                                        {goal.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>

                {errorMsg && (
                    <div className="text-red-500 text-sm font-semibold text-center mt-4">
                        {errorMsg}
                    </div>
                )}
            </div>

            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-t border-gray-100 dark:border-white/5">
                <button
                    onClick={handleContinue}
                    disabled={isLoading || selectedGoals.length === 0}
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg hover:bg-primary/90 transition-colors active:scale-[0.98] disabled:opacity-50"
                >
                    <span className="truncate">{isLoading ? "Saving..." : "Continue"}</span>
                </button>
            </div>
        </div>
    );
}
