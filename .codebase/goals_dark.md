### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Daily Goals Tracker</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00",
                        "obsidian": "#0a0a0a",
                        "obsidian-light": "#141414",
                        "neon-yellow": "#facc15",
                        "neon-orange": "#fb923c",
                        "neon-purple": "#a855f7",
                        "neon-blue": "#3b82f6",
                        "neon-green": "#22c55e",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        "neon-yellow": "0 0 10px rgba(250, 204, 21, 0.5), inset 0 0 5px rgba(250, 204, 21, 0.2)",
                        "neon-orange": "0 0 10px rgba(251, 146, 60, 0.5), inset 0 0 5px rgba(251, 146, 60, 0.2)",
                        "neon-purple": "0 0 10px rgba(168, 85, 247, 0.5), inset 0 0 5px rgba(168, 85, 247, 0.2)",
                        "neon-blue": "0 0 15px rgba(59, 130, 246, 0.4), inset 0 0 5px rgba(59, 130, 246, 0.2)",
                        "neon-green": "0 0 15px rgba(34, 197, 94, 0.4), inset 0 0 5px rgba(34, 197, 94, 0.2)",
                    }
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
<body class="bg-obsidian text-white h-screen w-full overflow-hidden flex transition-colors duration-200 selection:bg-neon-orange selection:text-black">
<aside class="hidden md:flex w-[72px] h-full flex-col items-center justify-between py-6 bg-obsidian-light border-r border-gray-800 shrink-0 z-40 shadow-sm">
<button class="p-3 rounded-xl hover:bg-gray-800 text-white transition-colors">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
<div class="flex flex-col gap-6 w-full items-center">
<button class="p-3 rounded-xl bg-primary/20 text-primary shadow-[0_0_15px_rgba(255,157,0,0.4)]">
<span class="material-symbols-outlined text-2xl">flag</span>
</button>
<button class="p-3 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
</button>
<button class="p-3 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">pie_chart</span>
</button>
</div>
<div class="flex flex-col gap-5 items-center w-full">
<button class="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white">
<span class="material-symbols-outlined text-2xl">dark_mode</span>
</button>
<div class="size-10 rounded-full bg-cover bg-center border-2 border-primary shadow-[0_0_10px_rgba(255,157,0,0.5)]" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
<button class="p-2 rounded-xl hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-2xl">logout</span>
</button>
</div>
</aside>
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 md:pb-0">
<div class="sticky top-0 z-30 w-full bg-obsidian/90 backdrop-blur-md border-b border-gray-800 px-4 py-4">
<div class="max-w-5xl mx-auto w-full flex items-center justify-between">
<div class="flex items-center justify-between w-full gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
<div class="flex-1 flex items-center gap-3 bg-obsidian-light pr-4 pl-2 py-2 rounded-full border border-yellow-500/50 shadow-neon-yellow min-w-[100px]">
<div class="size-8 rounded-full bg-yellow-900/40 flex items-center justify-center text-yellow-400 shrink-0">
<span class="material-symbols-outlined text-lg fill-1">diamond</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Gems</span>
<span class="text-lg font-bold text-white tracking-wide">150</span>
</div>
</div>
<div class="flex-1 flex items-center gap-3 bg-obsidian-light pr-4 pl-2 py-2 rounded-full border border-orange-500/50 shadow-neon-orange min-w-[100px]">
<div class="size-8 rounded-full bg-orange-900/40 flex items-center justify-center text-orange-400 shrink-0">
<span class="material-symbols-outlined text-lg fill-1">local_fire_department</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Streak</span>
<span class="text-lg font-bold text-white tracking-wide">7</span>
</div>
</div>
<div class="flex-1 flex items-center gap-3 bg-obsidian-light pr-4 pl-2 py-2 rounded-full border border-purple-500/50 shadow-neon-purple min-w-[100px]">
<div class="size-8 rounded-full bg-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
<span class="material-symbols-outlined text-lg fill-1">bolt</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">XP</span>
<span class="text-lg font-bold text-white tracking-wide">1,200</span>
</div>
</div>
</div>
</div>
</div>
<div class="p-5 flex flex-col gap-6 max-w-5xl mx-auto w-full">
<div class="flex items-center justify-between">
<div>
<h2 class="text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Today's Focus</h2>
<p class="text-sm text-gray-400">Stay consistent to keep your streak alive.</p>
</div>
<div class="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg text-sm font-bold flex items-center gap-1 shadow-lg">
<span class="material-symbols-outlined text-lg text-primary">calendar_month</span>
                    Oct 24
                </div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div class="bg-obsidian-light p-6 rounded-2xl shadow-neon-orange border border-orange-500/30 flex flex-col relative overflow-hidden group">
<div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div class="flex items-center gap-3 mb-6 relative z-10">
<div class="size-10 rounded-full bg-orange-900/30 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.3)]">
<span class="material-symbols-outlined">restaurant</span>
</div>
<div>
<h3 class="text-lg font-bold text-white">Meal Commitment</h3>
<p class="text-xs text-gray-400">Track your main meals</p>
</div>
</div>
<div class="space-y-4 flex-1 relative z-10">
<label class="flex items-center justify-between p-3 rounded-xl border border-gray-800 bg-black/40 hover:bg-gray-800/80 hover:border-orange-500/30 cursor-pointer transition-all duration-300 group">
<div class="flex items-center gap-3">
<div class="relative flex items-center">
<input class="peer appearance-none size-5 rounded border-gray-600 bg-gray-900 checked:bg-orange-500 checked:border-orange-500 focus:ring-0 focus:ring-offset-0 transition-colors" type="checkbox"/>
<span class="material-symbols-outlined absolute text-black text-sm pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5">check</span>
</div>
<span class="font-medium text-white group-hover:text-orange-400 transition-colors">Breakfast</span>
</div>
<span class="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-2 py-1 rounded">High Protein</span>
</label>
<label class="flex items-center justify-between p-3 rounded-xl border border-gray-800 bg-black/40 hover:bg-gray-800/80 cursor-pointer transition-colors group opacity-70">
<div class="flex items-center gap-3">
<div class="relative flex items-center">
<input checked="" class="peer appearance-none size-5 rounded border-gray-600 bg-gray-900 checked:bg-orange-500 checked:border-orange-500 focus:ring-0 focus:ring-offset-0 transition-colors" type="checkbox"/>
<span class="material-symbols-outlined absolute text-black text-sm pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5">check</span>
</div>
<span class="font-medium text-gray-400 line-through">Lunch</span>
</div>
<span class="text-xs text-green-400 bg-green-900/20 border border-green-900/50 px-2 py-1 rounded font-medium shadow-[0_0_5px_rgba(34,197,94,0.2)]">Logged</span>
</label>
<label class="flex items-center justify-between p-3 rounded-xl border border-gray-800 bg-black/40 hover:bg-gray-800/80 hover:border-orange-500/30 cursor-pointer transition-all duration-300 group">
<div class="flex items-center gap-3">
<div class="relative flex items-center">
<input class="peer appearance-none size-5 rounded border-gray-600 bg-gray-900 checked:bg-orange-500 checked:border-orange-500 focus:ring-0 focus:ring-offset-0 transition-colors" type="checkbox"/>
<span class="material-symbols-outlined absolute text-black text-sm pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5">check</span>
</div>
<span class="font-medium text-white group-hover:text-orange-400 transition-colors">Dinner</span>
</div>
<span class="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-2 py-1 rounded">Low Carb</span>
</label>
</div>
</div>
<div class="bg-obsidian-light p-6 rounded-2xl shadow-neon-blue border border-blue-500/30 flex flex-col relative overflow-hidden group">
<div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div class="flex items-center gap-3 mb-6 relative z-10">
<div class="size-10 rounded-full bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<div>
<h3 class="text-lg font-bold text-white">Workout Commitment</h3>
<p class="text-xs text-gray-400">Daily planned activities</p>
</div>
</div>
<div class="space-y-4 flex-1 relative z-10">
<div class="p-4 rounded-xl bg-black/40 border border-gray-800 relative overflow-hidden group hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.15)] transition-all duration-300">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="size-12 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center shadow-sm">
<span class="material-symbols-outlined text-blue-500">directions_run</span>
</div>
<div>
<h4 class="font-bold text-white group-hover:text-blue-400 transition-colors">Morning Cardio</h4>
<p class="text-xs text-gray-500 mt-1">30 Mins • Zone 2</p>
</div>
</div>
<div class="size-6 rounded-full border-2 border-gray-600 group-hover:border-blue-400 transition-colors"></div>
</div>
</div>
<div class="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 relative overflow-hidden">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="size-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center shadow-sm text-primary">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<div>
<h4 class="font-bold text-white">Strength Training</h4>
<p class="text-xs text-orange-400 mt-1 shadow-[0_0_5px_rgba(251,146,60,0.2)]">45 Mins • Upper Body</p>
</div>
</div>
<div class="size-6 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_10px_rgba(255,157,0,0.6)]">
<span class="material-symbols-outlined text-sm font-bold">check</span>
</div>
</div>
</div>
</div>
</div>
<div class="bg-obsidian-light p-6 rounded-2xl shadow-neon-green border border-green-500/30 lg:col-span-2 relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div class="flex items-center justify-between mb-2 relative z-10">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-green-900/30 border border-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
<span class="material-symbols-outlined">bedtime</span>
</div>
<div>
<h3 class="text-lg font-bold text-white">Sleep Commitment</h3>
<p class="text-xs text-gray-400">Goal: 8 Hours</p>
</div>
</div>
</div>
<div class="mt-4 p-5 rounded-xl bg-green-900/10 border border-green-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
<div class="flex items-center gap-4">
<div class="p-2 bg-black border border-green-900 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.2)]">
<span class="material-symbols-outlined text-green-400">auto_awesome</span>
</div>
<div>
<p class="font-bold text-white">Slept on Time</p>
<p class="text-xs text-green-400 font-medium flex items-center gap-1 mt-0.5">
<span class="size-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span>
                                    Auto-completed from Health Data
                                </p>
</div>
</div>
<div aria-checked="true" class="relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-green-600 shadow-[0_0_10px_rgba(34,197,94,0.4)]" role="switch">
<span class="sr-only">Use setting</span>
<span aria-hidden="true" class="pointer-events-none inline-block size-7 translate-x-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center">
<span class="material-symbols-outlined text-green-600 text-[16px] font-bold">check</span>
</span>
</div>
</div>
</div>
</div>
</div>
</main>
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-obsidian-light border-t border-gray-800 z-50 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
<div class="grid grid-cols-6 h-16 items-center px-1">
<a class="flex flex-col items-center justify-center gap-1 text-neon-orange drop-shadow-[0_0_5px_rgba(251,146,60,0.6)]" href="#">
<span class="material-symbols-outlined text-2xl fill-1">home</span>
<span class="text-[9px] font-medium">Home</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-300 transition-colors" href="#">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
<span class="text-[9px] font-medium">MotionSense</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-300 transition-colors" href="#">
<span class="material-symbols-outlined text-2xl">restaurant</span>
<span class="text-[9px] font-medium">PlanCalorie</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-300 transition-colors" href="#">
<span class="material-symbols-outlined text-2xl">notifications</span>
<span class="text-[9px] font-medium">Smart Nudge</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-300 transition-colors" href="#">
<span class="material-symbols-outlined text-2xl">bedtime</span>
<span class="text-[9px] font-medium">CircadianSync</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-300 transition-colors" href="#">
<span class="material-symbols-outlined text-2xl">self_improvement</span>
<span class="text-[9px] font-medium">ZenZone</span>
</a>
</div>
<div class="h-safe-area bg-obsidian-light"></div>
</nav>
</body></html>