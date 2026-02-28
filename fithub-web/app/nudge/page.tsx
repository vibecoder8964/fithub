"use client";

import React from "react";

export default function NudgePage() {
  return (
    <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
      <main className="px-5 pt-6 pb-8 max-w-4xl mx-auto w-full">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#181510] dark:text-white">
            SmartNudge
          </h1>
          <p className="mt-1 text-sm text-[#8d7b5e] dark:text-[#a89b85]">
            Intelligent reminders tuned to your schedule and preferences.
            (Detailed nudge rules and dark-mode preferences will be added in the
            next phase.)
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600">
                <span className="material-symbols-outlined">notifications</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Contextual Reminders
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Based on your engage time and workout schedule.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              SmartNudge will use your engage_time and workout_time windows to
              send nudges over HTTPS, respecting your notification permissions
              and never executing message content as code.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-slate-50 dark:bg-slate-900/20 flex items-center justify-center text-slate-700 dark:text-slate-200">
                <span className="material-symbols-outlined">dark_mode</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Smart Dark Mode
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Switch to dark UI when SmartNudge or low-battery mode enables
                  it.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              A user preference flag in the database will control whether
              x_dark.md-styled screens are used, while the app also respects
              OS-level low battery and dark-mode settings.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

