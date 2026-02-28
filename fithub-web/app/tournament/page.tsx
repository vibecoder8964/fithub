"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type LeaderboardUser = {
    id: string;
    username: string;
    xp_count: number;
    gems_count: number;
    streak_count: number;
    leaderboard_points: number;
};

export default function TournamentPage() {
    const { uuid } = useAuth();
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
    const [currentUser, setCurrentUser] = useState<LeaderboardUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLeaderboard() {
            // 1. Fetch top 50 users globally
            const { data: topUsers, error } = await supabase
                .from("users")
                .select("id, username, xp_count, gems_count, streak_count, leaderboard_points")
                .order("leaderboard_points", { ascending: false })
                .limit(50);

            if (topUsers) {
                setLeaderboard(topUsers);

                // Find current user's placement if they are in the top 50
                const me = topUsers.find(u => u.id === uuid);
                if (me) {
                    setCurrentUser(me);
                } else if (uuid) {
                    // Fallback: Just fetch their specific stats if they aren't top 50
                    const { data: myData } = await supabase
                        .from("users")
                        .select("id, username, xp_count, gems_count, streak_count, leaderboard_points")
                        .eq("id", uuid)
                        .single();

                    if (myData) setCurrentUser(myData);
                }
            }
            setLoading(false);
        }
        loadLeaderboard();
    }, [uuid]);

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
            </div>
        );
    }

    // Calculate user's effective rank
    const myRank = leaderboard.findIndex(u => u.id === uuid) + 1;
    const displayRank = myRank > 0 ? myRank : "50+";

    return (
        <div className="flex-1 h-full overflow-hidden relative flex flex-col pt-16 bg-background-light dark:bg-background-dark pb-24">
            {/* Title Header */}
            <div className="flex-none z-30 bg-white/90 dark:bg-[#231b0f]/90 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-[#e6e0d9] dark:border-[#3e3427]">
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-[#181510] dark:text-white">Monthly Tournament</h1>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="material-symbols-outlined text-sm text-primary">emoji_events</span>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#8d7b5e] dark:text-[#a89b85]">Gold League • 12 Days Left</p>
                    </div>
                </div>
                <button className="size-10 rounded-xl hover:bg-stone-100 dark:hover:bg-[#3e3427] text-[#8d7b5e] dark:text-[#a89b85] flex items-center justify-center transition-colors shadow-sm border border-stone-100 dark:border-[#3e3427]">
                    <span className="material-symbols-outlined">help</span>
                </button>
            </div>

            {/* Table Headers */}
            <div className="flex-none px-6 py-3 flex items-center text-[10px] font-bold text-[#8d7b5e] dark:text-[#a89b85] uppercase tracking-wider">
                <div className="w-8 text-center">Rank</div>
                <div className="flex-1 ml-4">User Details</div>
                <div className="text-right">Points</div>
            </div>

            {/* Leaderboard List */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-2 pb-32 flex flex-col gap-3">
                {leaderboard.map((user, index) => {
                    const rank = index + 1;
                    const isTop3 = rank <= 3;
                    let rankColor = "text-stone-400 dark:text-stone-500";

                    if (rank === 1) rankColor = "text-yellow-500";
                    else if (rank === 2) rankColor = "text-stone-400";
                    else if (rank === 3) rankColor = "text-orange-400";

                    return (
                        <div
                            key={user.id}
                            className={`relative flex items-center gap-4 p-4 rounded-2xl shadow-sm border ${rank === 1
                                    ? "bg-gradient-to-r from-yellow-50 to-white dark:from-[#3a2e1d] dark:to-[#231b0f] border-yellow-200 dark:border-yellow-900/30"
                                    : "bg-white dark:bg-[#2c241b] border-stone-100 dark:border-[#3e3427]"
                                }`}
                        >
                            {rank === 1 && (
                                <div className="absolute -left-1.5 -top-1.5 size-7 bg-yellow-400 rounded-full flex items-center justify-center text-[#181510] shadow-md z-10 border-2 border-white dark:border-[#231b0f]">
                                    <span className="material-symbols-outlined text-sm font-bold">emoji_events</span>
                                </div>
                            )}
                            <div className={`font-bold text-xl w-8 text-center font-display ${rankColor}`}>{rank}</div>

                            <div className="relative">
                                <div className={`size-12 rounded-full border-2 bg-stone-200 dark:bg-stone-800 flex items-center justify-center ${rank === 1 ? 'border-yellow-400' : rank === 2 ? 'border-stone-400' : rank === 3 ? 'border-orange-400' : 'border-transparent'
                                    }`}>
                                    <span className="material-symbols-outlined text-stone-500">face</span>
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-[#181510] dark:text-white text-lg truncate">
                                    {user.username} {user.id === uuid ? "(You)" : ""}
                                </h3>
                                <div className="flex items-center gap-3 text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">
                                    <span className="flex items-center gap-0.5" title="XP"><span className="material-symbols-outlined text-[12px]">bolt</span>{(user.xp_count / 1000).toFixed(1)}k</span>
                                    <span className="flex items-center gap-0.5" title="Gems"><span class="material-symbols-outlined text-[12px]">diamond</span>{user.gems_count}</span>
                                    <span className="flex items-center gap-0.5" title="Streak"><span class="material-symbols-outlined text-[12px]">local_fire_department</span>{user.streak_count}</span>
                                </div>
                            </div>

                            <div className="text-right shrink-0">
                                <div className={`font-bold text-xl ${isTop3 ? 'text-primary' : 'text-[#181510] dark:text-white'}`}>
                                    {user.leaderboard_points.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    );
                })}

                {leaderboard.length === 0 && (
                    <div className="p-8 text-center text-stone-500 font-bold">
                        No players found on the leaderboard yet.
                    </div>
                )}
            </div>

            {/* Sticky Bottom Current User Strip */}
            {currentUser && (
                <div className="absolute bottom-0 left-0 right-0 z-40">
                    <div className="h-6 w-full bg-gradient-to-b from-transparent to-white/95 dark:to-[#231b0f]/95"></div>
                    <div className="bg-white/95 dark:bg-[#231b0f]/95 backdrop-blur-xl border-t border-[#e6e0d9] dark:border-[#3e3427] p-5 pb-8 sm:pb-5">
                        <div className="flex items-center gap-4 p-3 pr-5 rounded-2xl bg-primary shadow-lg shadow-primary/30 text-[#181510] relative overflow-hidden group cursor-pointer hover:brightness-110 transition-all">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                            <div className="font-bold text-lg w-8 text-center text-white bg-[#181510]/20 rounded-lg py-1 backdrop-blur-sm z-10">{displayRank}</div>
                            <div className="relative z-10">
                                <div className="size-10 rounded-full border-2 border-white/60 bg-stone-200 flex items-center justify-center">
                                    <span className="material-symbols-outlined">face</span>
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-white text-primary text-[10px] font-bold px-1 rounded-full border border-primary">YOU</div>
                            </div>
                            <div className="flex-1 z-10">
                                <h3 className="font-bold text-white text-lg leading-tight">Your Rank</h3>
                                <p className="text-xs text-white/80 font-medium">Keep going!</p>
                            </div>
                            <div className="text-right z-10">
                                <div className="font-bold text-xl text-white">{currentUser.leaderboard_points.toLocaleString()}</div>
                                <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Points</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
