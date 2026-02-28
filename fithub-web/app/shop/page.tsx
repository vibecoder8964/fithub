"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type ShopItemInfo = {
    id: string;
    title: string;
    price: number;
    dbKey: string;
    description: string;
    icon: string;
};

const SHOP_ITEMS: ShopItemInfo[] = [
    { id: "1", title: "Update AI Model", description: "Enhance your AI assistant's reasoning", price: 8000, dbKey: "updatedAImodel_held", icon: "robot_2" },
    { id: "2", title: "1000XP Streak", description: "Instantly claim 1000 XP towards rankings", price: 12000, dbKey: "1000xpstreak_held", icon: "bolt" },
    { id: "3", title: "Streak Protection", description: "Protect your streak if you miss a day", price: 15600, dbKey: "streakprotectionheld", icon: "shield" },
    { id: "4", title: "New AI Character", description: "Unlock a brand new personality", price: 25000, dbKey: "newAIcharacterheld", icon: "face_retouching_natural" },
];

export default function ShopPage() {
    const { uuid } = useAuth();
    const [userState, setUserState] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [flashMsg, setFlashMsg] = useState<{ text: string, type: "error" | "success" } | null>(null);

    useEffect(() => {
        fetchUser();
    }, [uuid]);

    async function fetchUser() {
        if (!uuid) return;
        const { data } = await supabase.from("users").select("*").eq("id", uuid).single();
        if (data) setUserState(data);
        setLoading(false);
    }

    const buyItem = async (item: ShopItemInfo) => {
        if (!userState) return;

        if (userState[item.dbKey] === true) {
            setFlashMsg({ text: `You already own ${item.title}!`, type: "error" });
            setTimeout(() => setFlashMsg(null), 3000);
            return;
        }

        if (userState.gems_count < item.price) {
            setFlashMsg({ text: "You don't have enough gems!", type: "error" });
            setTimeout(() => setFlashMsg(null), 3000);
            return;
        }

        // Process Deduction
        const newGems = userState.gems_count - item.price;
        const { error } = await supabase
            .from("users")
            .update({
                gems_count: newGems,
                [item.dbKey]: true
            })
            .eq("id", uuid);

        if (error) {
            setFlashMsg({ text: "Transaction failed network error.", type: "error" });
            return;
        }

        setFlashMsg({ text: `Successfully purchased ${item.title}!`, type: "success" });
        setUserState({ ...userState, gems_count: newGems, [item.dbKey]: true });

        setTimeout(() => setFlashMsg(null), 3000);
    };

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
            </div>
        );
    }

    return (
        <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
            {/* Flash Message */}
            {flashMsg && (
                <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-10
          ${flashMsg.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                >
                    <span className="material-symbols-outlined">{flashMsg.type === 'error' ? 'error' : 'check_circle'}</span>
                    {flashMsg.text}
                </div>
            )}

            <div className="p-6 max-w-5xl mx-auto w-full">
                {/* Header Hero Section */}
                <div className="w-full relative overflow-hidden rounded-3xl shadow-lg mb-8 aspect-[21/9] flex items-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

                    <div className="relative z-10 p-8 flex flex-col items-start text-white">
                        <span className="bg-primary px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-3 text-black">
                            Store
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Item Shop</h1>
                        <p className="text-white/80 max-w-sm text-sm font-medium">Use your hard-earned gems to unlock exclusive capabilities and boosters.</p>
                    </div>
                </div>

                {/* Current Balance */}
                <div className="flex items-center justify-between mb-6 bg-white dark:bg-[#2c241b] rounded-2xl p-5 shadow-sm border border-stone-200 dark:border-stone-800">
                    <div className="flex flex-col">
                        <h2 className="text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider text-xs">Your Balance</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-3xl font-black text-slate-900 dark:text-white leading-none">{userState.gems_count}</span>
                            <span className="text-lg text-stone-400 leading-none">Gems</span>
                        </div>
                    </div>
                    <div className="size-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border-2 border-blue-100 dark:border-blue-800/50 shadow-inner">
                        <span className="material-symbols-outlined text-blue-500 text-3xl">diamond</span>
                    </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {SHOP_ITEMS.map((item) => {
                        const isOwned = userState[item.dbKey] === true;

                        return (
                            <div key={item.id} className={`flex flex-col sm:flex-row gap-5 p-5 bg-white dark:bg-[#1f1a14] rounded-2xl border border-stone-200 dark:border-stone-800/60 shadow-sm transition-all hover:shadow-md ${isOwned ? "opacity-70" : ""}`}>
                                <div className="size-20 rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 flex items-center justify-center shrink-0 border border-stone-300 dark:border-stone-700">
                                    <span className="material-symbols-outlined text-4xl text-stone-500 dark:text-stone-400">{item.icon}</span>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                                        {isOwned && (
                                            <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-md">Owned</span>
                                        )}
                                    </div>
                                    <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-4">{item.description}</p>

                                    <div className="mt-auto">
                                        <button
                                            onClick={() => buyItem(item)}
                                            disabled={isOwned || userState.gems_count < item.price}
                                            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all
                        ${isOwned
                                                    ? 'bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500 cursor-not-allowed'
                                                    : userState.gems_count >= item.price
                                                        ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 border border-blue-200 dark:border-blue-800/50 shadow-sm'
                                                        : 'bg-stone-50 text-stone-400 dark:bg-stone-900/50 dark:text-stone-600 border border-stone-200 dark:border-stone-800/50 cursor-not-allowed'
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-sm">diamond</span>
                                            {item.price.toLocaleString()} Gems
                                        </button>
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
