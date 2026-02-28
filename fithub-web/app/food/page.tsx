"use client";

import React from "react";

export default function FoodPage() {
  return (
    <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
      <main className="px-5 pt-6 pb-8 max-w-4xl mx-auto w-full">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#181510] dark:text-white">
            PlanCalorie
          </h1>
          <p className="mt-1 text-sm text-[#8d7b5e] dark:text-[#a89b85]">
            Log your meals and understand your nutrition. (Detailed food
            scanning and logging will be wired up in the next phase.)
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text:white">
                  Daily Meals
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Breakfast, lunch and dinner logging.
                </p>
              </div>
            </div>
            <div className="h-24 rounded-xl bg-[#f4efe6] dark:bg-[#3a3022] border border-dashed border-[#e6e0d9] dark:border-[#3e3427] flex items-center justify-center text-xs text-[#8d7b5e] dark:text-[#a89b85] text-center px-4">
              When PlanCalorie is connected to the foods database and scanner,
              completed meals here will auto-check meal commitments in Daily
              Goals and award XP and gems.
            </div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined">nutrition</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-[#181510] dark:text-white">
                  Nutrition Insights
                </h2>
                <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
                  Powered by the Supabase food database.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8d7b5e] dark:text-[#a89b85]">
              Food analysis and recommendations will be backed by the foods and
              nutrients tables, keeping all calculations on the server to
              prevent any unsafe execution of user-provided data.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

