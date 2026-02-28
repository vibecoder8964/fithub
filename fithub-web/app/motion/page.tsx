"use client";

import React from "react";

export default function MotionPage() {
  return (
    <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
      <main className="px-5 pt-6 pb-8 max-w-4xl mx-auto w-full">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#181510] dark:text-white">
            MotionSense
          </h1>
          <p className="mt-1 text-sm text-[#8d7b5e] dark:text-[#a89b85]">
            Track your workouts and movement. (Detailed functionality will be
            added in the next phase.)
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">fitness_center</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Daily Activity
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Summary of your movement and workouts.
                </p>
              </div>
            </div>
            <div className="h-24 rounded-xl bg-[#f4efe6] dark:bg-[#3a3022] border border-dashed border-[#e6e0d9] dark:border-[#3e3427] flex items-center justify-center text-xs text-[#8d7b5e] dark:text-[#a89b85] text-center px-4">
              Data will appear here once MotionSense sensors and logs are
              connected.
            </div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Progress Overview
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Your streaks, gems and XP influence tournament standings.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              Completing workouts here will automatically contribute to your
              XP, gems, and streak counts according to the global rules.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

