### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light dark" lang="en"><head>
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
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-white h-screen w-full overflow-hidden flex flex-col transition-colors duration-200" style="background-color: #121212;">
<main class="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pb-24">
<div class="sticky top-0 right-0 left-0 z-30 bg-[#121212]/80 backdrop-blur-xl border-b border-white/10">
<div class="px-6 py-4 flex flex-col gap-5">
<div class="grid grid-cols-3 gap-3"><div class="bg-[#1c1c1c] rounded-full p-2 pr-4 shadow-[0_0_10px_rgba(59,130,246,0.3)] border border-blue-500/50 flex items-center gap-3">
<div class="size-9 rounded-full bg-blue-900/30 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-blue-400 text-xl">diamond</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Gems</span>
<span class="text-sm font-extrabold text-white">150</span>
</div>
</div>
<div class="bg-[#1c1c1c] rounded-full p-2 pr-4 shadow-[0_0_10px_rgba(249,115,22,0.3)] border border-orange-500/50 flex items-center gap-3">
<div class="size-9 rounded-full bg-orange-900/30 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-orange-400 text-xl">local_fire_department</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Streak</span>
<span class="text-sm font-extrabold text-white">7</span>
</div>
</div>
<div class="bg-[#1c1c1c] rounded-full p-2 pr-4 shadow-[0_0_10px_rgba(168,85,247,0.3)] border border-purple-500/50 flex items-center gap-3">
<div class="size-9 rounded-full bg-purple-900/30 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-purple-400 text-xl">bolt</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">XP</span>
<span class="text-sm font-extrabold text-white">1,200</span>
</div>
</div></div>
<div class="flex items-center justify-between">
<div>
<h1 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Achievements Hall</h1>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">Your journey to greatness</p>
</div>
<div class="bg-orange-900/20 border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.4)] rounded-full px-4 py-1.5 flex items-center gap-3">
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
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"><!-- Workaholic - Gold Neon -->
<div class="bg-[#1c1c1c] rounded-2xl p-5 shadow-[0_0_20px_rgba(234,179,8,0.2)] border border-yellow-500/40 flex flex-col gap-4 relative overflow-hidden">
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg shadow-amber-500/50 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">fitness_center</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-900/40 px-2.5 py-1 rounded-lg border border-amber-500/30">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-white leading-tight">Workaholic</h3>
<p class="text-sm font-medium text-slate-400 mt-1">Commit workout for 150 days</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-500 uppercase tracking-wide"><span>Rank 3/3</span><span>100%</span></div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 w-full shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
</div>
</div>
</div>
<!-- On-time eater - Silver/Blue Neon -->
<div class="bg-[#1c1c1c] rounded-2xl p-5 shadow-[0_0_20px_rgba(148,163,184,0.15)] border border-slate-500/30 flex flex-col gap-4 relative overflow-hidden">
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-slate-400 to-slate-600 shadow-lg shadow-slate-500/40 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">restaurant</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-500/30">Silver</span>
</div>
<div>
<h3 class="font-bold text-xl text-white leading-tight">On-time eater</h3>
<p class="text-sm font-medium text-slate-400 mt-1">Log lunch at 12pm for 30 days</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-500 uppercase tracking-wide"><span>Rank 2/3</span><span>60%</span></div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-slate-400 to-slate-600 w-[60%] shadow-[0_0_10px_rgba(148,163,184,0.4)]"></div>
</div>
</div>
</div>
<!-- Streak maintainer - Orange/Red Neon -->
<div class="bg-[#1c1c1c] rounded-2xl p-5 shadow-[0_0_20px_rgba(249,115,22,0.2)] border border-orange-500/40 flex flex-col gap-4 relative overflow-hidden">
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-red-500/50 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">local_fire_department</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 bg-orange-900/40 px-2.5 py-1 rounded-lg border border-orange-500/30">Gold</span>
</div>
<div>
<h3 class="font-bold text-xl text-white leading-tight">Streak maintainer</h3>
<p class="text-sm font-medium text-slate-400 mt-1">Achieve 100 days active streak</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-500 uppercase tracking-wide"><span>Rank 3/3</span><span>100%</span></div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-orange-400 to-red-500 w-full shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
</div>
</div>
</div>
<!-- Unique/Purple Badge Example -->
<div class="bg-[#1c1c1c] rounded-2xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.25)] border border-purple-500/40 flex flex-col gap-4 relative overflow-hidden">
<div class="flex justify-between items-start z-10">
<div class="size-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-indigo-500/50 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">sports_esports</span>
</div>
<span class="text-[10px] font-extrabold uppercase tracking-widest text-purple-300 bg-purple-900/40 px-2.5 py-1 rounded-lg border border-purple-500/30">Unique</span>
</div>
<div>
<h3 class="font-bold text-xl text-white leading-tight">Gamer</h3>
<p class="text-sm font-medium text-slate-400 mt-1">Connect a game account</p>
</div>
<div class="mt-auto pt-2">
<div class="flex justify-between text-xs font-bold mb-1.5 text-slate-500 uppercase tracking-wide"><span>Unlocked</span><span>Done</span></div>
<div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-purple-500 to-indigo-600 w-full shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
</div>
</div>
</div></div>
</div>
</main>
<nav class="fixed bottom-0 left-0 right-0 bg-[#121212]/90 backdrop-blur-xl border-t border-white/10 z-50 px-2 pb-safe">
<div class="flex justify-between items-center w-full px-2 py-3"><button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-colors">home</span>
<span class="text-[10px] font-bold text-orange-500 transition-colors">Home</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-slate-500 group-hover:text-primary transition-colors">fitness_center</span>
<span class="text-[10px] font-medium text-slate-500 group-hover:text-primary transition-colors whitespace-nowrap">MotionSense</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-slate-500 group-hover:text-primary transition-colors">restaurant</span>
<span class="text-[10px] font-medium text-slate-500 group-hover:text-primary transition-colors whitespace-nowrap">PlanCalorie</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-slate-500 group-hover:text-primary transition-colors">notifications</span>
<span class="text-[10px] font-medium text-slate-500 group-hover:text-primary transition-colors whitespace-nowrap">Smart Nudge</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-slate-500 group-hover:text-primary transition-colors">bedtime</span>
<span class="text-[10px] font-medium text-slate-500 group-hover:text-primary transition-colors whitespace-nowrap">CircadianSync</span>
</button>
<button class="flex flex-col items-center justify-center gap-1 min-w-[3.5rem] group">
<span class="material-symbols-outlined text-2xl text-slate-500 group-hover:text-primary transition-colors">self_improvement</span>
<span class="text-[10px] font-medium text-slate-500 group-hover:text-primary transition-colors whitespace-nowrap">ZenZone</span>
</button></div>
</nav>
</body></html>