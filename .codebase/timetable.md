### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Personal Daily Timetable</title>
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
        }.no-scrollbar::-webkit-scrollbar {
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
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col pb-24">
<div class="fixed top-0 right-0 left-0 z-30 bg-white/90 dark:bg-[#231b0f]/90 backdrop-blur-md px-4 py-4 flex items-center border-b border-[#e6e0d9] dark:border-[#3e3427]">
<div class="flex items-center gap-3 w-full">
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pl-1.5 pr-4 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800">
<div class="size-9 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 dark:text-blue-400">
<span class="material-symbols-outlined text-[20px] fill-1">diamond</span>
</div>
<div class="flex flex-col leading-none -mt-0.5">
<span class="text-[9px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">Gems</span>
<span class="text-base font-bold text-[#181510] dark:text-white">150</span>
</div>
</div>
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pl-1.5 pr-4 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800">
<div class="size-9 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[20px] fill-1">local_fire_department</span>
</div>
<div class="flex flex-col leading-none -mt-0.5">
<span class="text-[9px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">Streak</span>
<span class="text-base font-bold text-[#181510] dark:text-white">7</span>
</div>
</div>
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pl-1.5 pr-4 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800">
<div class="size-9 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined text-[20px] fill-1">bolt</span>
</div>
<div class="flex flex-col leading-none -mt-0.5">
<span class="text-[9px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">XP</span>
<span class="text-base font-bold text-[#181510] dark:text-white">1,200</span>
</div>
</div>
</div>
</div>
<div class="p-5 pt-24 pb-32 max-w-3xl mx-auto w-full">
<div class="flex items-center justify-between mb-8">
<div>
<h2 class="text-2xl font-bold text-[#181510] dark:text-white">Today's Schedule</h2>
<p class="text-stone-500 dark:text-stone-400 text-sm font-medium mt-1">Thursday, 24 October</p>
</div>
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#2c241b] rounded-xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] text-sm font-bold text-[#181510] dark:text-white hover:bg-stone-50 dark:hover:bg-[#362d22] transition-colors">
<span class="material-symbols-outlined text-lg">edit_calendar</span>
                Edit
            </button>
</div>
<div class="relative ml-2 pl-8 border-l-2 border-dashed border-[#e6e0d9] dark:border-[#3e3427] space-y-10 py-2">
<div class="relative">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">wb_twilight</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/10 px-2 py-0.5 rounded">Routine</span>
<span class="text-sm font-medium text-stone-500">06:00 AM - 07:00 AM</span>
</div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white leading-tight">Wake Up &amp; Morning Hydration</h3>
<p class="text-stone-500 dark:text-stone-400 text-sm">Drink 500ml water, 10 min stretch.</p>
</div>
</div>
<div class="relative">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">restaurant</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/10 px-2 py-0.5 rounded">Meal</span>
<span class="text-sm font-medium text-stone-500">07:30 AM - 08:00 AM</span>
</div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white leading-tight">Power Breakfast</h3>
<p class="text-stone-500 dark:text-stone-400 text-sm">Oatmeal with berries &amp; nuts, Green Tea.</p>
</div>
</div>
<div class="relative group">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">description</span>
</div>
<div class="bg-white dark:bg-[#2c241b] rounded-2xl p-5 border border-[#e6e0d9] dark:border-[#3e3427] hover:border-red-400 dark:hover:border-red-400 shadow-sm transition-all relative overflow-hidden group-hover:shadow-md">
<div class="absolute top-0 left-0 w-1.5 h-full bg-red-400"></div>
<div class="flex justify-between items-start mb-3">
<div class="flex items-center gap-3">
<span class="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded">Task</span>
<div class="flex items-center gap-1 text-stone-500 dark:text-stone-400">
<span class="material-symbols-outlined text-base">schedule</span>
<input class="bg-transparent border-none p-0 text-sm font-medium text-stone-600 dark:text-stone-300 focus:ring-0 w-24" type="text" value="09:00 - 12:00"/>
</div>
</div>
<button class="text-stone-300 hover:text-red-400 transition-colors">
<span class="material-symbols-outlined text-xl">edit_note</span>
</button>
</div>
<div class="space-y-1">
<input class="w-full bg-transparent border-b border-transparent hover:border-stone-200 focus:border-red-400 text-xl font-bold text-[#181510] dark:text-white placeholder-stone-300 focus:outline-none transition-colors py-1" type="text" value="Project X Development"/>
<input class="w-full bg-transparent border-none p-0 text-stone-500 dark:text-stone-400 text-sm focus:ring-0 placeholder-stone-400" type="text" value="Complete the main dashboard layout"/>
</div>
</div>
</div>
<div class="relative">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">restaurant</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/10 px-2 py-0.5 rounded">Meal</span>
<span class="text-sm font-medium text-stone-500">12:30 PM - 01:30 PM</span>
</div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white leading-tight">Healthy Lunch Break</h3>
<p class="text-stone-500 dark:text-stone-400 text-sm">Grilled Chicken Salad, Apple.</p>
</div>
</div>
<div class="relative group">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">description</span>
</div>
<div class="bg-white dark:bg-[#2c241b] rounded-2xl p-5 border border-[#e6e0d9] dark:border-[#3e3427] hover:border-red-400 dark:hover:border-red-400 shadow-sm transition-all relative overflow-hidden group-hover:shadow-md">
<div class="absolute top-0 left-0 w-1.5 h-full bg-red-400"></div>
<div class="flex justify-between items-start mb-3">
<div class="flex items-center gap-3">
<span class="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded">Task</span>
<div class="flex items-center gap-1 text-stone-500 dark:text-stone-400">
<span class="material-symbols-outlined text-base">schedule</span>
<input class="bg-transparent border-none p-0 text-sm font-medium text-stone-600 dark:text-stone-300 focus:ring-0 w-24" type="text" value="02:00 - 05:00"/>
</div>
</div>
<button class="text-stone-300 hover:text-red-400 transition-colors">
<span class="material-symbols-outlined text-xl">edit_note</span>
</button>
</div>
<div class="space-y-1">
<input class="w-full bg-transparent border-b border-transparent hover:border-stone-200 focus:border-red-400 text-xl font-bold text-[#181510] dark:text-white placeholder-stone-300 focus:outline-none transition-colors py-1" type="text" value="Client Calls &amp; Review"/>
<input class="w-full bg-transparent border-none p-0 text-stone-500 dark:text-stone-400 text-sm focus:ring-0 placeholder-stone-400" type="text" value="Zoom call with Design Team"/>
</div>
</div>
</div>
<div class="relative">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">fitness_center</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 px-2 py-0.5 rounded">Fitness</span>
<span class="text-sm font-medium text-stone-500">06:00 PM - 07:00 PM</span>
</div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white leading-tight">Gym Session</h3>
<p class="text-stone-500 dark:text-stone-400 text-sm">Upper Body Strength Training.</p>
</div>
</div>
<div class="relative">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">restaurant</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/10 px-2 py-0.5 rounded">Meal</span>
<span class="text-sm font-medium text-stone-500">07:30 PM - 08:30 PM</span>
</div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white leading-tight">Healthy Dinner</h3>
<p class="text-stone-500 dark:text-stone-400 text-sm">Balanced meal for recovery</p>
</div>
</div>
<div class="relative">
<div class="absolute -left-[43px] top-0 size-10 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
<span class="material-symbols-outlined text-xl">bed</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/10 px-2 py-0.5 rounded">Sleep</span>
<span class="text-sm font-medium text-stone-500">10:30 PM</span>
</div>
<h3 class="text-lg font-bold text-[#181510] dark:text-white leading-tight">Lights Out</h3>
<p class="text-stone-500 dark:text-stone-400 text-sm">No screens after 10:00 PM.</p>
</div>
</div>
</div>
</div>
<div class="fixed bottom-24 right-6 z-40">
<button class="flex items-center justify-center size-16 rounded-full bg-primary shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform group">
<span class="material-symbols-outlined text-[#181510] text-3xl group-hover:rotate-90 transition-transform">add</span>
</button>
</div>
<div class="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#231b0f] border-t border-[#e6e0d9] dark:border-[#3e3427] flex justify-between items-center px-2 py-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-primary">
<span class="material-symbols-outlined text-2xl fill-1">home</span>
<span class="text-[10px] font-medium leading-none">Home</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
<span class="text-[10px] font-medium leading-none">MotionSense</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">restaurant_menu</span>
<span class="text-[10px] font-medium leading-none">PlanCalorie</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">notifications_active</span>
<span class="text-[10px] font-medium leading-none">Smart Nudge</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">nightlight</span>
<span class="text-[10px] font-medium leading-none">CircadianSync</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">self_improvement</span>
<span class="text-[10px] font-medium leading-none">ZenZone</span>
</button>
</div>
</main>
</body></html>