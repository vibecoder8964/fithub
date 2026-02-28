### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light" lang="en"><head>
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
                        "background-light": "#f8f7f5",
                        "background-dark": "#231b0f",
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
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-white h-screen w-full overflow-hidden flex transition-colors duration-200">
<div class="fixed inset-0 bg-black/50 z-50 hidden transition-opacity opacity-0 pointer-events-none" id="mobile-menu-overlay">
<div class="absolute left-0 top-0 bottom-0 w-64 bg-white dark:bg-[#2c241b] shadow-xl transform -translate-x-full transition-transform duration-300 flex flex-col p-6">
<div class="flex items-center justify-between mb-8">
<h2 class="text-xl font-bold">Menu</h2>
<button class="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<nav class="flex flex-col gap-4">
<a class="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<a class="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors" href="#">
<span class="material-symbols-outlined">person</span>
<span>Profile</span>
</a>
<a class="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors" href="#">
<span class="material-symbols-outlined">help</span>
<span>Help &amp; Support</span>
</a>
</nav>
</div>
</div>
<aside class="hidden md:flex w-[72px] h-full flex-col items-center justify-between py-6 bg-white dark:bg-[#2c241b] border-r border-[#e6e0d9] dark:border-[#3e3427] shrink-0 z-40 shadow-sm">
<button class="p-3 rounded-xl hover:bg-background-light dark:hover:bg-[#3e3427] text-[#181510] dark:text-white transition-colors">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
<div class="flex flex-col gap-6 w-full items-center">
<button class="p-3 rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">flag</span>
</button>
<button class="p-3 rounded-xl hover:bg-background-light dark:hover:bg-[#3e3427] text-[#8d7b5e] dark:text-[#a89b85]">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
</button>
<button class="p-3 rounded-xl hover:bg-background-light dark:hover:bg-[#3e3427] text-[#8d7b5e] dark:text-[#a89b85]">
<span class="material-symbols-outlined text-2xl">pie_chart</span>
</button>
</div>
<div class="flex flex-col gap-5 items-center w-full">
<button class="p-2 rounded-full hover:bg-background-light dark:hover:bg-[#3e3427] text-[#8d7b5e] dark:text-[#a89b85]">
<span class="material-symbols-outlined text-2xl">light_mode</span>
</button>
<div class="size-10 rounded-full bg-cover bg-center border-2 border-primary" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
<button class="p-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-[#8d7b5e] hover:text-red-500 dark:text-[#a89b85] transition-colors">
<span class="material-symbols-outlined text-2xl">logout</span>
</button>
</div>
</aside>
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 md:pb-0">
<div class="sticky top-0 z-30 w-full bg-white/90 dark:bg-[#231b0f]/90 backdrop-blur-md border-b border-[#e6e0d9] dark:border-[#3e3427] px-4 py-3">
<div class="max-w-5xl mx-auto w-full flex items-center justify-between">


<div class="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pr-4 pl-2 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 shadow-sm min-w-[100px]">
<div class="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
<span class="material-symbols-outlined text-lg">diamond</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] font-bold text-[#8d7b5e] dark:text-[#a89b85] uppercase tracking-wide">Gems</span>
<span class="text-base font-bold text-[#181510] dark:text-white">150</span>
</div>
</div>
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pr-4 pl-2 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 shadow-sm min-w-[100px]">
<div class="size-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-lg">local_fire_department</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] font-bold text-[#8d7b5e] dark:text-[#a89b85] uppercase tracking-wide">Streak</span>
<span class="text-base font-bold text-[#181510] dark:text-white">7</span>
</div>
</div>
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pr-4 pl-2 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 shadow-sm min-w-[100px]">
<div class="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
<span class="material-symbols-outlined text-lg">bolt</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] font-bold text-[#8d7b5e] dark:text-[#a89b85] uppercase tracking-wide">XP</span>
<span class="text-base font-bold text-[#181510] dark:text-white">1,200</span>
</div>
</div>
</div>
</div>
</div>
<div class="p-5 flex flex-col gap-6 max-w-5xl mx-auto w-full">
<div class="flex items-center justify-between">
<div>
<h2 class="text-2xl font-bold text-[#181510] dark:text-white">Today's Focus</h2>
<p class="text-sm text-[#8d7b5e] dark:text-[#a89b85]">Stay consistent to keep your streak alive.</p>
</div>
<div class="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-lg">calendar_month</span>
                    Oct 24
                </div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div class="bg-white dark:bg-[#2c241b] p-6 rounded-2xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] flex flex-col">
<div class="flex items-center gap-3 mb-6">
<div class="size-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
<span class="material-symbols-outlined">restaurant</span>
</div>
<div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white">Meal Commitment</h3>
<p class="text-xs text-[#8d7b5e] dark:text-[#a89b85]">Track your main meals</p>
</div>
</div>
<div class="space-y-4 flex-1">
<label class="flex items-center justify-between p-3 rounded-xl border border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 cursor-pointer transition-colors group">
<div class="flex items-center gap-3">
<input class="size-5 rounded border-stone-300 text-primary focus:ring-primary" type="checkbox"/>
<span class="font-medium text-[#181510] dark:text-white group-hover:text-primary transition-colors">Breakfast</span>
</div>
<span class="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">High Protein</span>
</label>
<label class="flex items-center justify-between p-3 rounded-xl border border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 cursor-pointer transition-colors group">
<div class="flex items-center gap-3">
<input checked="" class="size-5 rounded border-stone-300 text-primary focus:ring-primary" type="checkbox"/>
<span class="font-medium text-[#181510] dark:text-white line-through opacity-60">Lunch</span>
</div>
<span class="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded font-medium">Logged</span>
</label>
<label class="flex items-center justify-between p-3 rounded-xl border border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 cursor-pointer transition-colors group">
<div class="flex items-center gap-3">
<input class="size-5 rounded border-stone-300 text-primary focus:ring-primary" type="checkbox"/>
<span class="font-medium text-[#181510] dark:text-white group-hover:text-primary transition-colors">Dinner</span>
</div>
<span class="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">Low Carb</span>
</label>
</div>
</div>
<div class="bg-white dark:bg-[#2c241b] p-6 rounded-2xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] flex flex-col">
<div class="flex items-center gap-3 mb-6">
<div class="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white">Workout Commitment</h3>
<p class="text-xs text-[#8d7b5e] dark:text-[#a89b85]">Daily planned activities</p>
</div>
</div>
<div class="space-y-4 flex-1">
<div class="p-4 rounded-xl bg-stone-50 dark:bg-[#231b0f] border border-stone-100 dark:border-stone-800 relative overflow-hidden group hover:border-blue-200 transition-colors">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="size-12 rounded-lg bg-white dark:bg-[#2c241b] flex items-center justify-center shadow-sm">
<span class="material-symbols-outlined text-blue-500">directions_run</span>
</div>
<div>
<h4 class="font-bold text-[#181510] dark:text-white">Morning Cardio</h4>
<p class="text-xs text-stone-500 mt-1">30 Mins • Zone 2</p>
</div>
</div>
<div class="size-6 rounded-full border-2 border-stone-300 dark:border-stone-600 group-hover:border-blue-400 transition-colors"></div>
</div>
</div>
<div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 relative overflow-hidden">
<div class="flex justify-between items-start">
<div class="flex gap-4">
<div class="size-12 rounded-lg bg-white dark:bg-[#2c241b] flex items-center justify-center shadow-sm text-primary">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<div>
<h4 class="font-bold text-[#181510] dark:text-white">Strength Training</h4>
<p class="text-xs text-orange-600/70 dark:text-orange-400 mt-1">45 Mins • Upper Body</p>
</div>
</div>
<div class="size-6 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-orange-500/20">
<span class="material-symbols-outlined text-sm">check</span>
</div>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-[#2c241b] p-6 rounded-2xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] lg:col-span-2">
<div class="flex items-center justify-between mb-2">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
<span class="material-symbols-outlined">bedtime</span>
</div>
<div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white">Sleep Commitment</h3>
<p class="text-xs text-[#8d7b5e] dark:text-[#a89b85]">Goal: 8 Hours</p>
</div>
</div>
</div>
<div class="mt-4 p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div class="flex items-center gap-4">
<div class="p-2 bg-white dark:bg-[#2c241b] rounded-full shadow-sm">
<span class="material-symbols-outlined text-green-600 dark:text-green-400">auto_awesome</span>
</div>
<div>
<p class="font-bold text-[#181510] dark:text-white">Slept on Time</p>
<p class="text-xs text-green-700 dark:text-green-400 font-medium flex items-center gap-1 mt-0.5">
<span class="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Auto-completed from Health Data
                                </p>
</div>
</div>
<div aria-checked="true" class="relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-green-500 shadow-inner" role="switch">
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
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#2c241b] border-t border-[#e6e0d9] dark:border-[#3e3427] z-50 pb-safe">
<div class="grid grid-cols-6 h-16 items-center px-1">
<a class="flex flex-col items-center justify-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined text-2xl fill-1">home</span>
<span class="text-[9px] font-medium">Home</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-[#8d7b5e] dark:text-[#a89b85]" href="#">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
<span class="text-[9px] font-medium">MotionSense</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-[#8d7b5e] dark:text-[#a89b85]" href="#">
<span class="material-symbols-outlined text-2xl">restaurant</span>
<span class="text-[9px] font-medium">PlanCalorie</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-[#8d7b5e] dark:text-[#a89b85]" href="#">
<span class="material-symbols-outlined text-2xl">notifications</span>
<span class="text-[9px] font-medium">Smart Nudge</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-[#8d7b5e] dark:text-[#a89b85]" href="#">
<span class="material-symbols-outlined text-2xl">bedtime</span>
<span class="text-[9px] font-medium">CircadianSync</span>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-[#8d7b5e] dark:text-[#a89b85]" href="#">
<span class="material-symbols-outlined text-2xl">self_improvement</span>
<span class="text-[9px] font-medium">ZenZone</span>
</a>
</div>
<div class="h-safe-area bg-white dark:bg-[#2c241b]"></div>
</nav>
</body></html>