"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col pt-2 bg-background-light dark:bg-background-dark">
            <div className="p-5 flex flex-col gap-6 pb-24 max-w-4xl mx-auto w-full">

                {/* Quote of the Day Data */}
                <div className="w-full relative overflow-hidden rounded-2xl shadow-md min-h-[200px] sm:min-h-[240px] flex items-center group">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    <div className="relative z-10 p-6 sm:p-8 max-w-lg">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">format_quote</span>
                            Quote of the day
                        </div>
                        <h2 className="text-xl sm:text-3xl font-bold text-white leading-tight mb-3">
                            "Discipline is doing what needs to be done, even if you don't want to do it."
                        </h2>
                        <p className="text-white/80 text-sm font-medium">— Unknown</p>
                    </div>
                </div>

                {/* Quick Access */}
                <div>
                    <h3 className="text-lg font-bold mb-4 px-1 text-[#181510] dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">grid_view</span>
                        Quick Access
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

                        {/* Daily Goals */}
                        <Link href="/goals" className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">Daily Goals</p>
                                        <p className="text-white/80 text-xs mt-1">Check tasks</p>
                                    </div>
                                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#181510] sm:bg-white/20 sm:backdrop-blur-md sm:text-white sm:group-hover:bg-primary sm:group-hover:text-[#181510] transition-colors">
                                        <span className="material-symbols-outlined text-sm">flag</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Badges */}
                        <Link href="/badges" className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523348837708-15d4a0fc3564?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">Badges</p>
                                        <p className="text-white/80 text-xs mt-1">See achievements</p>
                                    </div>
                                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#181510] sm:bg-white/20 sm:backdrop-blur-md sm:text-white sm:group-hover:bg-primary sm:group-hover:text-[#181510] transition-colors">
                                        <span className="material-symbols-outlined text-sm">military_tech</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Timetable */}
                        <Link href="/timetable" className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">Timetable</p>
                                        <p className="text-white/80 text-xs mt-1">View schedule</p>
                                    </div>
                                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#181510] sm:bg-white/20 sm:backdrop-blur-md sm:text-white sm:group-hover:bg-primary sm:group-hover:text-[#181510] transition-colors">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Community */}
                        <Link href="/community" className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">Community</p>
                                        <p className="text-white/80 text-xs mt-1">Connect & Chat</p>
                                    </div>
                                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#181510] sm:bg-white/20 sm:backdrop-blur-md sm:text-white sm:group-hover:bg-primary sm:group-hover:text-[#181510] transition-colors">
                                        <span className="material-symbols-outlined text-sm">groups</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Shop */}
                        <Link href="/shop" className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">Shop</p>
                                        <p className="text-white/80 text-xs mt-1">Spend Gems</p>
                                    </div>
                                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#181510] sm:bg-white/20 sm:backdrop-blur-md sm:text-white sm:group-hover:bg-primary sm:group-hover:text-[#181510] transition-colors">
                                        <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Tournament */}
                        <Link href="/tournament" className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">Tournament</p>
                                        <p className="text-white/80 text-xs mt-1">Compete</p>
                                    </div>
                                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[#181510] sm:bg-white/20 sm:backdrop-blur-md sm:text-white sm:group-hover:bg-primary sm:group-hover:text-[#181510] transition-colors">
                                        <span className="material-symbols-outlined text-sm">emoji_events</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>

                {/* Floating AI Button (Mocked to route to chat) */}
                <div className="fixed bottom-24 right-6 sm:bottom-6 z-50">
                    <Link href="/chat" className="flex items-center justify-center size-14 sm:size-16 rounded-full bg-primary shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined text-[#181510] text-2xl sm:text-3xl">smart_toy</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
