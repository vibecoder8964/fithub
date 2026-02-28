"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type BadgeData = {
    id: string;
    title: string;
    description: string;
    icon: string;
    tier: "Bronze" | "Silver" | "Gold" | "Unique";
    dbKey: string;
};

const BADGES: BadgeData[] = [
    { id: "1", title: "Workaholic", description: "Commit workout for 150 days", icon: "fitness_center", tier: "Gold", dbKey: "badges_workhaholic" },
    { id: "2", title: "On-time eater", description: "Log lunch at 12pm for 30 days", icon: "restaurant", tier: "Silver", dbKey: "badges_onTimeEater" },
    { id: "3", title: "Streak maintainer", description: "Achieve 100 days active streak", icon: "local_fire_department", tier: "Gold", dbKey: "badges_streakMaintainer" },
    { id: "4", title: "Early owl", description: "Wake up before 6am 5 times", icon: "sunny", tier: "Bronze", dbKey: "badges_earlyOwl" },
    { id: "5", title: "Task grinder", description: "Complete 50 daily tasks", icon: "checklist", tier: "Silver", dbKey: "badges_taskGrinder" },
    { id: "6", title: "Workout expert", description: "Burn 10,000 calories total", icon: "sports_martial_arts", tier: "Gold", dbKey: "badges_workoutExpert" },
    { id: "7", title: "Scanner", description: "Scan 10 food items", icon: "qr_code_scanner", tier: "Bronze", dbKey: "badges_scanner" },
    { id: "8", title: "Voice out", description: "Leave 5 voice notes", icon: "mic", tier: "Silver", dbKey: "badges_voiceOut" },
    { id: "9", title: "Shopper", description: "Purchase 5 shop items", icon: "shopping_cart", tier: "Bronze", dbKey: "badges_shopper" },
    { id: "10", title: "Top ranker", description: "Reach top 10 on leaderboard", icon: "leaderboard", tier: "Gold", dbKey: "badges_topRanker" },
    { id: "11", title: "Top of the top", description: "Reach #1 on leaderboard", icon: "crown", tier: "Gold", dbKey: "badges_topOftheTop" },
    { id: "12", title: "Gamer", description: "Connect a game account", icon: "sports_esports", tier: "Unique", dbKey: "badges_gamer" },
    { id: "13", title: "Assistance", description: "Help a friend achieve goal", icon: "handshake", tier: "Unique", dbKey: "badges_assistance" },
    { id: "14", title: "XP grinder", description: "Earn 5000 XP", icon: "star", tier: "Silver", dbKey: "badges_XPGrinder" },
    { id: "15", title: "Gems collector", description: "Collect 1000 Gems", icon: "diamond", tier: "Gold", dbKey: "badges_gemsCollector" },
];

export default function BadgesPage() {
    const { uuid } = useAuth();
    const [userBadges, setUserBadges] = useState<any>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBadges() {
            if (!uuid) return;
            const { data } = await supabase.from("users").select("*").eq("id", uuid).single();
            if (data) setUserBadges(data);
            setLoading(false);
        }
        fetchBadges();
    }, [uuid]);

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
            </div>
        );
    }

    const unlockedCount = BADGES.filter(b => userBadges[b.dbKey] === true).length;

    return (
        <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
            <div className="p-6 max-w-6xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Achievements Hall</h1>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">Your journey to greatness</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-full px-4 py-1.5 flex items-center gap-3 shadow-sm">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">emoji_events</span>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest">Badges</span>
                            <span className="text-sm font-extrabold text-orange-500">{unlockedCount}/{BADGES.length}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {BADGES.map((badge) => {
                        const isUnlocked = userBadges[badge.dbKey] === true;

                        // Dynamic theme maps
                        let badgeBg = "";
                        let badgeGradient = "";
                        let innerIcon = "";
                        let tagColor = "";
                        let pbColor = "";

                        if (badge.tier === "Gold") {
                            badgeBg = "from-yellow-400/20 via-yellow-100/5 to-transparent";
                            badgeGradient = "from-yellow-300 to-amber-500";
                            innerIcon = "text-white";
                            tagColor = "text-amber-700 bg-amber-100 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800/50";
                            pbColor = "from-yellow-400 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]";
                        } else if (badge.tier === "Silver") {
                            badgeBg = "from-slate-400/20 via-slate-100/5 to-transparent";
                            badgeGradient = "from-slate-300 to-slate-500";
                            innerIcon = "text-white";
                            tagColor = "text-slate-700 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
                            pbColor = "from-slate-300 to-slate-500 shadow-[0_0_10px_rgba(100,116,139,0.5)]";
                        } else if (badge.tier === "Bronze") {
                            badgeBg = "from-amber-700/10 via-amber-100/5 to-transparent";
                            badgeGradient = "from-amber-600 to-amber-800";
                            innerIcon = "text-white";
                            tagColor = "text-amber-900 bg-amber-100 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900";
                            pbColor = "from-amber-600 to-amber-800 shadow-[0_0_10px_rgba(180,83,9,0.5)]";
                        } else {
                            // Unique
                            badgeBg = "from-purple-400/20 via-purple-100/5 to-transparent";
                            badgeGradient = "from-purple-500 to-indigo-600";
                            innerIcon = "text-white";
                            tagColor = "text-indigo-700 bg-indigo-50 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-800";
                            pbColor = "from-purple-500 to-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.5)]";
                        }

                        return (
                            <div
                                key={badge.id}
                                className={`bg-white dark:bg-[#1f1a14] rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group transition-all duration-300 ${!isUnlocked ? 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100' : 'hover:-translate-y-1'}`}
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${badgeBg} rounded-bl-full`}></div>
                                <div className="flex justify-between items-start z-10">
                                    <div className={`size-14 rounded-2xl bg-gradient-to-br ${badgeGradient} shadow-lg flex items-center justify-center ${innerIcon}`}>
                                        <span className="material-symbols-outlined text-3xl">{badge.icon}</span>
                                    </div>
                                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg border ${tagColor}`}>
                                        {badge.tier}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-tight">{badge.title}</h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{badge.description}</p>
                                </div>
                                <div className="mt-auto pt-2">
                                    <div className="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                                        <span>{isUnlocked ? "Unlocked" : "Locked"}</span>
                                        <span>{isUnlocked ? "100%" : "0%"}</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                                        <div className={`h-full bg-gradient-to-r ${pbColor} rounded-full transition-all duration-1000`} style={{ width: isUnlocked ? "100%" : "0%" }}></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
