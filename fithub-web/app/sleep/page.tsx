"use client";

import React from "react";

export default function SleepPage() {
  return (
    <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
      <main className="px-5 pt-6 pb-8 max-w-4xl mx-auto w-full">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#181510] dark:text-white">
            CircadianSync
          </h1>
          <p className="mt-1 text-sm text-[#8d7b5e] dark:text-[#a89b85]">
            Align your sleep with your body clock. (Detailed sleep tracking and
            sound analysis will be added in the next phase.)
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600">
                <span className="material-symbols-outlined">bedtime</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Sleep Schedule
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Guided by your configured sleep_time.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              CircadianSync will rely on your saved workout and sleep times to
              compute whether you met sleep commitments and to update streaks,
              XP and gems securely from the server.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center text-sky-600">
                <span className="material-symbols-outlined">graphic_eq</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Night Sound Insights
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Uses recorder permission without executing any audio content.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              Any future audio processing will happen in secure backend
              services, with recordings transmitted via HTTPS only and never
              interpreted as executable instructions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

