"use client";

import { useAuth } from "../context/AuthContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function TopHeader() {
    const { userProfile } = useAuth();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const xp = userProfile?.xp_count || 0;
    const streak = userProfile?.streak_count || 0;
    const gems = userProfile?.gems_count || 0;

    const isAuthRoute = pathname === "/" || pathname.startsWith("/sign_up") || pathname.startsWith("/step_");

    if (isAuthRoute) return null;

    return (
        <div className="sticky top-0 right-0 left-0 z-30 bg-white/80 dark:bg-[#231b0f]/80 backdrop-blur-md px-4 py-3 border-b border-[#e6e0d9] dark:border-[#3e3427]">
            <div className="flex w-full items-center justify-between gap-3 max-w-2xl mx-auto">

                {/* Gems */}
                <div className="flex-1 flex items-center gap-2 bg-white/50 dark:bg-[#2c241b]/50 p-2 rounded-xl border border-stone-200 dark:border-stone-800 justify-center min-w-0">
                    <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0">
                        <span className="material-symbols-outlined text-xl">diamond</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-tight truncate leading-tight">Gems</span>
                        <span className="text-base font-black text-[#181510] dark:text-white leading-none">{gems.toLocaleString()}</span>
                    </div>
                </div>

                {/* Streak */}
                <div className="flex-1 flex items-center gap-2 bg-white/50 dark:bg-[#2c241b]/50 p-2 rounded-xl border border-stone-200 dark:border-stone-800 justify-center min-w-0">
                    <div className="size-8 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-xl">local_fire_department</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-tight truncate leading-tight">Streak</span>
                        <span className="text-base font-black text-[#181510] dark:text-white leading-none">{streak.toLocaleString()}</span>
                    </div>
                </div>

                {/* XP */}
                <div className="flex-1 flex items-center gap-2 bg-white/50 dark:bg-[#2c241b]/50 p-2 rounded-xl border border-stone-200 dark:border-stone-800 justify-center min-w-0">
                    <div className="size-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 shrink-0">
                        <span className="material-symbols-outlined text-xl">bolt</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-tight truncate leading-tight">XP</span>
                        <span className="text-base font-black text-[#181510] dark:text-white leading-none">{xp.toLocaleString()}</span>
                    </div>
                </div>

                {/* Theme Toggle Button aligned next to stats */}
                {mounted && (
                    <button
                        onClick={toggleTheme}
                        className="p-2 ml-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-[#8d7b5e] dark:text-[#a89b85] transition-colors"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                )}

            </div>
        </div>
    );
}
