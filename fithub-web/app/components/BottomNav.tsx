"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
    const pathname = usePathname();

    const isAuthRoute = pathname === "/" || pathname.startsWith("/sign_up") || pathname.startsWith("/step_");
    if (isAuthRoute) return null;

    const navItems = [
        { label: "Home", icon: "home", path: "/home" },
        { label: "MotionSense", icon: "fitness_center", path: "/motion" },
        { label: "PlanCalorie", icon: "restaurant", path: "/food" },
        { label: "Smart Nudge", icon: "notifications", path: "/nudge" },
        { label: "CircadianSync", icon: "dark_mode", path: "/sleep" },
        { label: "ZenZone", icon: "self_improvement", path: "/zen" },
    ];

    return (
        <>
            {/* Spacer to prevent content from hiding behind the absolute nav */}
            <div className="h-20 sm:hidden"></div>

            <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#231b0f]/95 backdrop-blur-xl border-t border-[#e6e0d9] dark:border-[#3e3427] flex items-center justify-between py-2 px-2 z-40 shadow-2xl">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.label}
                            href={item.path}
                            className={`flex-1 flex flex-col items-center gap-0.5 ${isActive
                                ? "text-primary nav-glow"
                                : "text-[#8d7b5e] dark:text-[#a89b85]"
                                }`}
                        >
                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            <span className="text-[8px] font-bold">{item.label}</span>
                        </Link>
                    );
                })}
            </div>

            {/* Floating AI Assistant Button - routes to FitLah AI chat */}
            <div className="fixed bottom-24 right-6 sm:bottom-6 z-50">
                <Link
                    href="/chat?room=fitlah-ai"
                    className="flex items-center justify-center size-14 sm:size-16 rounded-full bg-primary shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform"
                >
                    <span className="material-symbols-outlined text-[#181510] text-2xl sm:text-3xl">smart_toy</span>
                </Link>
            </div>
        </>
    );
}
