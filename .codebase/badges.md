### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Achievements &amp; Badges Hall</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00",
                        "background-light": "#f8f7f5",
                        "background-dark": "#1c1917",
                        "surface-light": "#ffffff",
                        "surface-dark": "#292524",
                        "bronze-light": "#fed7aa",
                        "bronze-dark": "#9a3412",
                        "silver-light": "#e2e8f0",
                        "silver-dark": "#475569",
                        "gold-light": "#fef08a",
                        "gold-dark": "#854d0e",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "2xl": "2rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Manrope', 'Noto Sans', sans-serif;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
        body {
          min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-white h-screen w-full overflow-hidden flex flex-col transition-colors duration-200">
<main class="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24">
<div class="sticky top-0 right-0 left-0 z-30 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-xl border-b border-[#e6e0d9] dark:border-[#3e3427]">
<div class="px-6 py-4 flex flex-col gap-5">
<div class="grid grid-cols-3 gap-3">
<div class="bg-white dark:bg-[#322c24] rounded-full p-2 pr-4 shadow-sm border border-stone-200 dark:border-stone-700/50 flex items-center gap-3">
<div class="size-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-blue-500 text-xl">diamond</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Gems</span>
<span class="text-sm font-extrabold text-slate-900 dark:text-white">150</span>
</div>
</div>
<div class="bg-white dark:bg-[#322c24] rounded-full p-2 pr-4 shadow-sm border border-stone-200 dark:border-stone-700/50 flex items-center gap-3">
<div class="size-9 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-orange-500 text-xl">local_fire_department</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Streak</span>
<span class="text-sm font-extrabold text-slate-900 dark:text-white">7</span>
</div>
</div>
<div class="bg-white dark:bg-[#322c24] rounded-full p-2 pr-4 shadow-sm border border-stone-200 dark:border-stone-700/50 flex items-center gap-3">
<div class="size-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-purple-500 text-xl">bolt</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">XP</span>
<span class="text-sm font-extrabold text-slate-900 dark:text-white">1,200</span>
</div>
</div>
</div>
<div class="flex items-center justify-between">
<div>
<h1 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Achievements Hall</h1>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">Your journey to greatness</p>
</div>
<div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-full px-4 py-1.5 flex items-center gap-3">
<span class="material-symbols-outlined text-orange-500 text-2xl">emoji_events</span>
<div class="flex flex-col items-start leading-none">
<span class="text-[9px] font-bold text-orange-400 uppercase tracking-widest">Badges</span>
<span class="text-sm font-extrabold text-orange-500">12/15</span>
</div>
</div>
</div>
</div>
</div>
<div class="p-6">
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-yellow-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg shadow-amber-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">fitness_center</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/50">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Workaholic</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Commit workout for 150 days</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 3/3</span>
<span>100%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 w-full rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-400/20 via-slate-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-500 shadow-lg shadow-slate-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">restaurant</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">Silver</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">On-time eater</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Log lunch at 12pm for 30 days</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 2/3</span>
<span>60%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-slate-300 to-slate-500 w-[60%] rounded-full shadow-[0_0_10px_rgba(100,116,139,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-400/20 via-orange-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg shadow-red-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">local_fire_department</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/50">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Streak maintainer</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Achieve 100 days active streak</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 3/3</span>
<span>100%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 w-full rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-700/10 via-amber-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg shadow-amber-800/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">sunny</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 bg-amber-100 dark:bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-900">Bronze</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Early owl</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Wake up before 6am 5 times</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 1/3</span>
<span>30%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-amber-600 to-amber-800 w-[30%] rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-400/20 via-slate-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-slate-400 to-slate-600 shadow-lg shadow-slate-600/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">checklist</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">Silver</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Task grinder</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Complete 50 daily tasks</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 2/3</span>
<span>75%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-slate-400 to-slate-600 w-[75%] rounded-full shadow-[0_0_10px_rgba(71,85,105,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-yellow-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg shadow-amber-600/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">sports_martial_arts</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/50">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Workout expert</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Burn 10,000 calories total</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 3/3</span>
<span>100%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 w-full rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-700/10 via-amber-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg shadow-amber-800/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">qr_code_scanner</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 bg-amber-100 dark:bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-900">Bronze</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Scanner</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Scan 10 food items</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 1/3</span>
<span>20%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-amber-600 to-amber-800 w-[20%] rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-400/20 via-slate-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-500 shadow-lg shadow-slate-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">mic</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">Silver</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Voice out</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Leave 5 voice notes</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 2/3</span>
<span>50%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-slate-300 to-slate-500 w-[50%] rounded-full shadow-[0_0_10px_rgba(100,116,139,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-700/10 via-amber-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg shadow-amber-800/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">shopping_cart</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 bg-amber-100 dark:bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-900">Bronze</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Shopper</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Purchase 5 shop items</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 1/3</span>
<span>40%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-amber-600 to-amber-800 w-[40%] rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-yellow-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg shadow-amber-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">leaderboard</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/50">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Top ranker</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Reach top 10 on leaderboard</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 3/3</span>
<span>100%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 w-full rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-yellow-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg shadow-amber-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">crown</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/50">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Top of the top</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Reach #1 on leaderboard</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 3/3</span>
<span>100%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 w-full rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-purple-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-indigo-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">sports_esports</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-indigo-700 bg-indigo-50 dark:bg-indigo-900/40 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800">Unique</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Gamer</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Connect a game account</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Unlocked</span>
<span>Done</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-purple-500 to-indigo-600 w-full rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-purple-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-indigo-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">handshake</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-indigo-700 bg-indigo-50 dark:bg-indigo-900/40 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800">Unique</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Assistantance</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Help a friend achieve goal</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Unlocked</span>
<span>Done</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-purple-500 to-indigo-600 w-full rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-400/20 via-slate-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-500 shadow-lg shadow-slate-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">star</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-700 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">Silver</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">XP grinder</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Earn 5000 XP</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 2/3</span>
<span>80%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-slate-300 to-slate-500 w-[80%] rounded-full shadow-[0_0_10px_rgba(100,116,139,0.5)]"></div>
</div>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none border border-stone-100 dark:border-[#3e3427] flex flex-col gap-4 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300">
<div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-yellow-100/5 to-transparent rounded-bl-full"></div>
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 shadow-lg shadow-amber-500/30 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">diamond</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/50">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-slate-900 dark:text-white leading-tight">Gems collector</h3>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Collect 1000 Gems</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-400 dark:text-slate-500 uppercase tracking-wide">
<span>Rank 3/3</span>
<span>100%</span>
</div>
<div class="h-2.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 w-full rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</main>
<nav class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#1c1917]/95 backdrop-blur-md border-t border-[#e6e0d9] dark:border-[#3e3427] z-50 px-2 pb-safe">
<div class="flex justify-between items-center w-full px-2 py-3">
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-[#8d7b5e] group-hover:text-primary transition-colors">home</span>
<span class="text-[10px] font-medium text-[#8d7b5e] group-hover:text-primary transition-colors">Home</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-[#8d7b5e] group-hover:text-primary transition-colors">fitness_center</span>
<span class="text-[10px] font-medium text-[#8d7b5e] group-hover:text-primary transition-colors whitespace-nowrap">MotionSense</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-[#8d7b5e] group-hover:text-primary transition-colors">restaurant</span>
<span class="text-[10px] font-medium text-[#8d7b5e] group-hover:text-primary transition-colors whitespace-nowrap">PlanCalorie</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-[#8d7b5e] group-hover:text-primary transition-colors">notifications</span>
<span class="text-[10px] font-medium text-[#8d7b5e] group-hover:text-primary transition-colors whitespace-nowrap">Smart Nudge</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-[#8d7b5e] group-hover:text-primary transition-colors">bedtime</span>
<span class="text-[10px] font-medium text-[#8d7b5e] group-hover:text-primary transition-colors whitespace-nowrap">CircadianSync</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-[#8d7b5e] group-hover:text-primary transition-colors">self_improvement</span>
<span class="text-[10px] font-medium text-[#8d7b5e] group-hover:text-primary transition-colors whitespace-nowrap">ZenZone</span>
</button>
</div>
</nav>
</body></html>