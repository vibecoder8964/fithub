"use client";

import React from "react";
import Link from "next/link";

type CommunityRoom = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const ROOMS: CommunityRoom[] = [
  {
    id: "fitlah-ai",
    title: "FitLah AI Assistant",
    description: "Chat with your smart fitness companion.",
    icon: "smart_toy",
  },
  {
    id: "feedback",
    title: "Feedback to Team",
    description: "Share ideas to improve FitHub.",
    icon: "feedback",
  },
  {
    id: "global-chat",
    title: "Global Community",
    description: "Connect with other FitHub users.",
    icon: "groups",
  },
];

export default function CommunityPage() {
  return (
    <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
      <div className="px-5 pt-6 pb-4 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#181510] dark:text-white">
              Community
            </h1>
            <p className="text-sm text-[#8d7b5e] dark:text-[#a89b85] font-medium mt-1">
              Join conversations or talk to FitLah AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {ROOMS.map((room) => (
            <Link
              key={room.id}
              href={`/chat?room=${encodeURIComponent(room.id)}`}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="size-12 rounded-2xl bg-[#f4efe6] dark:bg-[#3a3022] flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  {room.icon}
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-base font-bold text-[#181510] dark:text-white truncate">
                    {room.title}
                  </h2>
                  <span className="material-symbols-outlined text-[#8d7b5e] dark:text-[#a89b85] text-base group-hover:translate-x-0.5 transition-transform">
                    arrow_forward_ios
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#8d7b5e] dark:text-[#a89b85] line-clamp-2">
                  {room.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

