"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

const COUNTRIES = [
    { flag: "🇺🇸", name: "United States" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇬🇧", name: "United Kingdom" },
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇮🇳", name: "India" },
    { flag: "🇯🇵", name: "Japan" },
    { flag: "🇧🇷", name: "Brazil" },
    { flag: "🇮🇹", name: "Italy" },
    { flag: "🇲🇽", name: "Mexico" },
    { flag: "🇳🇱", name: "Netherlands" },
    { flag: "🇪🇸", name: "Spain" },
    { flag: "🇨🇭", name: "Switzerland" },
];

export default function Step4Page() {
    const router = useRouter();
    const { uuid } = useAuth();

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const filteredCountries = COUNTRIES.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        const val = e.target.value.replace(/[^0-9]/g, "");
        setter(val);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!uuid) {
            setErrorMsg("Session expired. Please start over.");
            router.push("/");
            return;
        }

        if (!username || !age || !weight || !height) {
            setErrorMsg("Please fill out all fields.");
            return;
        }

        setIsLoading(true);
        setErrorMsg("");

        try {
            const { error } = await supabase
                .from("users")
                .update({
                    username,
                    age: parseInt(age, 10),
                    weight: parseInt(weight, 10),
                    height: parseInt(height, 10),
                    living_country: selectedCountry.name,
                })
                .eq("id", uuid);

            if (error) {
                if (error.code === '23505') {
                    setErrorMsg("Username is already taken.");
                } else {
                    throw error;
                }
                setIsLoading(false);
                return;
            }

            router.push("/step_5");

        } catch (err) {
            console.error(err);
            setErrorMsg("Failed to save data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-200 bg-background-light dark:bg-background-dark font-display">

            {/* Sticky Top Progress */}
            <div className="sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md pt-8 pb-4">
                <div className="relative flex items-center justify-center px-6 mb-3">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        disabled={isLoading}
                        className="absolute left-6 text-[#181510] dark:text-white flex items-center justify-center transition-colors p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                    >
                        <span className="material-symbols-outlined font-bold text-2xl">chevron_left</span>
                    </button>
                    <span className="text-[#181510] dark:text-white font-bold tracking-wide text-base">Step 4 of 8</span>
                </div>
                <div className="px-6">
                    <div className="h-1 w-full rounded-full bg-[#e6e4de] dark:bg-stone-800 overflow-hidden">
                        <div className="h-full bg-[#ff9d00] rounded-full transition-all duration-500" style={{ width: "44.4%" }}></div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col px-6 pb-32 max-w-md mx-auto w-full pt-4">

                <h1 className="text-[#181510] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight text-left pb-2 pt-0">
                    Let us know more <br /> about you!
                </h1>

                <div className="flex items-start gap-2 pb-8">
                    <span className="material-symbols-outlined text-[#FF6B6B] text-[20px] mt-0.5">verified_user</span>
                    <p className="text-[#8d7b5e] dark:text-stone-400 text-sm font-medium leading-normal">
                        Your data is private & secure. We use this to personalize your motivation plan.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Username */}
                    <label className="flex flex-col w-full">
                        <p className="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Username</p>
                        <div className="flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
                            <input
                                className="flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:outline-none focus:ring-0 h-14 p-[15px] text-base font-normal"
                                placeholder="e.g. Runner123"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px]">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                        </div>
                    </label>

                    {/* Age */}
                    <label className="flex flex-col w-full relative">
                        <p className="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Age</p>
                        <div className="relative flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
                            <input
                                className="flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:outline-none focus:ring-0 h-14 p-[15px] text-base font-normal"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder="25"
                                required
                                type="text"
                                value={age}
                                onChange={(e) => handleNumericInput(e, setAge)}
                            />
                            <div className="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px]">
                                <span className="material-symbols-outlined">cake</span>
                            </div>
                        </div>
                    </label>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Weight */}
                        <label className="flex flex-col w-full relative">
                            <p className="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Weight</p>
                            <div className="relative flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
                                <input
                                    className="flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:outline-none focus:ring-0 h-14 p-[15px] text-base font-normal"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="70"
                                    required
                                    type="text"
                                    value={weight}
                                    onChange={(e) => handleNumericInput(e, setWeight)}
                                />
                                <div className="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px] font-medium text-xs">
                                    kg
                                </div>
                            </div>
                        </label>

                        {/* Height */}
                        <label className="flex flex-col w-full relative">
                            <p className="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Height</p>
                            <div className="relative flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
                                <input
                                    className="flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:outline-none focus:ring-0 h-14 p-[15px] text-base font-normal"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="175"
                                    required
                                    type="text"
                                    value={height}
                                    onChange={(e) => handleNumericInput(e, setHeight)}
                                />
                                <div className="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px] font-medium text-xs">
                                    cm
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Country Selection */}
                    <div className="flex flex-col w-full">
                        <p className="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Living Country</p>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="relative flex w-full items-stretch rounded-xl shadow-sm transition-all border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800 h-14 overflow-hidden group"
                        >
                            <div className="flex items-center justify-center pl-4 pr-2">
                                <span className="text-xl">{selectedCountry.flag}</span>
                            </div>
                            <div className="flex flex-1 items-center px-2">
                                <span className="text-[#181510] dark:text-white text-base font-normal">{selectedCountry.name}</span>
                            </div>
                            <div className="flex items-center px-4 text-[#8d7b5e] dark:text-stone-400">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </button>
                    </div>
                </div>

                {errorMsg && (
                    <div className="text-red-500 text-sm font-semibold text-center mt-6">
                        {errorMsg}
                    </div>
                )}

                <div className="fixed bottom-0 left-0 w-full p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-transparent dark:border-white/5 z-20">
                    <div className="max-w-md mx-auto">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
                        >
                            <span className="truncate">{isLoading ? "Saving..." : "Continue"}</span>
                        </button>
                    </div>
                </div>
            </form>

            {/* Country Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-200">
                    <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-md bg-white dark:bg-stone-900 rounded-t-3xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
                        <div className="p-4 border-b border-[#e7e2da] dark:border-stone-800 flex items-center justify-between">
                            <h3 className="text-[#181510] dark:text-white text-xl font-bold">Select Country</h3>
                            <button type="button" onClick={() => setIsModalOpen(false)} className="text-[#8d7b5e] dark:text-stone-400 p-2">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="relative flex items-center bg-[#f0eee9] dark:bg-stone-800 rounded-xl px-4 h-12">
                                <span className="material-symbols-outlined text-[#8d7b5e] mr-2">search</span>
                                <input
                                    className="bg-transparent border-0 focus:outline-none focus:ring-0 w-full text-sm text-[#181510] dark:text-white placeholder:text-[#8d7b5e]"
                                    placeholder="Search for your country..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-2 pb-8">
                            <div className="flex flex-col gap-1">
                                {filteredCountries.map((c) => (
                                    <button
                                        key={c.name}
                                        type="button"
                                        onClick={() => {
                                            setSelectedCountry(c);
                                            setIsModalOpen(false);
                                        }}
                                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors w-full text-left"
                                    >
                                        <span className="text-2xl">{c.flag}</span>
                                        <span className="text-[#181510] dark:text-white font-medium flex-1">{c.name}</span>
                                    </button>
                                ))}
                                {filteredCountries.length === 0 && (
                                    <div className="text-center text-gray-500 mt-4">No countries found</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
