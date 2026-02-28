"use client";

import React from "react";

export default function ZenPage() {
  return (
    <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
      <main className="px-5 pt-6 pb-8 max-w-4xl mx-auto w-full">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#181510] dark:text-white">
            ZenZone
          </h1>
          <p className="mt-1 text-sm text-[#8d7b5e] dark:text-[#a89b85]">
            Recover, breathe and reset. (Guided meditation, breathing and focus
            modes will be added in the next phase.)
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                <span className="material-symbols-outlined">
                  self_improvement
                </span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Mindful Breaks
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Short sessions to keep stress low.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              Future ZenZone sessions will be tracked so that completing them
              can award XP and gems without requiring any manual toggling from
              the user.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Calm Environment
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Designed for both light and dark modes.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              All interactions remain purely declarative UI updates; no user
              text or settings are ever executed as code, protecting you from
              XSS and prompt injection at the client level.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

