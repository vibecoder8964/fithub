### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Neon Dark Tournament Leaderboard</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "obsidian": "#050505",
                        "obsidian-light": "#0f0f12",
                        "neon-orange": "#ff9d00",
                        "neon-gold": "#ffd700",
                        "neon-purple": "#b026ff",
                        "neon-cyan": "#00f0ff",
                        "glass-dark": "rgba(20, 20, 25, 0.7)",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    boxShadow: {
                        "neon-orange": "0 0 10px rgba(255, 157, 0, 0.5), 0 0 20px rgba(255, 157, 0, 0.3)",
                        "neon-gold": "0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.2)",
                        "neon-white": "0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.1)",
                    }
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Manrope', 'Noto Sans', sans-serif;
            background-color: #050505;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .neon-text-glow {
            text-shadow: 0 0 10px rgba(255, 157, 0, 0.5);
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
<body class="bg-obsidian text-white h-screen w-full overflow-hidden flex flex-col">
<div class="flex-none z-30 bg-obsidian/90 backdrop-blur-xl px-4 py-4 border-b border-white/10">
<div class="flex items-center justify-between gap-2 mb-4 w-full overflow-x-auto no-scrollbar">
<div class="flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.2)] min-w-max">
<div class="size-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
<span class="material-symbols-outlined text-sm">diamond</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-yellow-500 font-bold tracking-wider uppercase">Gems</span>
<span class="text-sm font-bold text-white">150</span>
</div>
</div>
<div class="flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.2)] min-w-max">
<div class="size-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
<span class="material-symbols-outlined text-sm">local_fire_department</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-orange-500 font-bold tracking-wider uppercase">Streak</span>
<span class="text-sm font-bold text-white">7</span>
</div>
</div>
<div class="flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.2)] min-w-max">
<div class="size-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<span class="material-symbols-outlined text-sm">bolt</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[9px] text-purple-500 font-bold tracking-wider uppercase">XP</span>
<span class="text-sm font-bold text-white">1,200</span>
</div>
</div>
</div>
<div class="flex items-center justify-between mt-2">
<div>
<h1 class="text-xl font-bold tracking-tight text-white drop-shadow-md">Monthly Tournament</h1>
<div class="flex items-center gap-1.5 mt-1">
<span class="material-symbols-outlined text-sm text-neon-orange" style="text-shadow: 0 0 8px rgba(255,157,0,0.6);">emoji_events</span>
<p class="text-xs font-bold uppercase tracking-wide text-gray-400">Gold League • <span class="text-white">12 Days Left</span></p>
</div>
</div>
<button class="size-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 flex items-center justify-center transition-colors border border-white/10">
<span class="material-symbols-outlined">help</span>
</button>
</div>
</div>
<div class="flex-none px-6 py-3 flex items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-obsidian border-b border-white/5">
<div class="w-8 text-center">Rank</div>
<div class="flex-1 ml-4">User Details</div>
<div class="text-right">Points</div>
</div>
<div class="flex-1 overflow-y-auto no-scrollbar p-5 pt-2 pb-32 flex flex-col gap-3 bg-obsidian">
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-900/20 to-obsidian border border-yellow-500/40 shadow-neon-gold backdrop-blur-sm">
<div class="absolute -left-1.5 -top-1.5 size-7 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-[0_0_10px_rgba(234,179,8,0.8)] z-10 border border-yellow-200">
<span class="material-symbols-outlined text-sm font-bold">emoji_events</span>
</div>
<div class="font-bold text-2xl w-8 text-center text-yellow-400 font-display drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">1</div>
<div class="relative">
<div class="size-12 rounded-full border-2 border-yellow-400/80 shadow-[0_0_10px_rgba(250,204,21,0.3)] bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-bwHd3C729X-vJDUDbsrj__QSzCtRYNbsjjc7abw8CigZIlfr5OfvgYQH17nuN6UWJaB3pZRSNPFZeJ_n3WGpD0a56m7ZublXfVAzRz7PHKTeDh69wcjFt4sPNGSnucX8Qs8wpJHsxNmo_NweuEQqQIOGXq1y9hBlZuOucTHJHTJdCJHh1PyK8DIseg0iMEvc-YHh78plGHtvzwA9eA3IaD_04gyVeSo10Avaco0Gz24NIbCoPzUHuIVwIu_xIT_aoGcQCKHA7ICO");'></div>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white text-lg truncate drop-shadow-md">Sarah Connor</h3>
<div class="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px] text-purple-400">bolt</span>12k</span>
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px] text-yellow-400">diamond</span>450</span>
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px] text-orange-400">local_fire_department</span>32</span>
</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-xl text-neon-orange neon-text-glow">2,840</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-xl w-8 text-center text-gray-400 font-display">2</div>
<div class="size-12 rounded-full border-2 border-gray-600 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwNGrQr0XH79lSoPXkqv8S1D0JoXBiIQ7r-4MKVXZ_4YH8fgEtzxziqJCq-6rpnXoqdxNVLrXa3fxzytkXGugoVdDB5XPgzeELDhzg9TrYNy8obPS1Z0B0AcdcN7KHVSVcvCTa9TwmOKVzMIUrZ6pONnI82s0qEH9_93V9TqUWscae-4dgqPIflVIUgYwrlFz293FgdSALwqfBJfUZbgrwXtfLucRLV4A5I3qANVS1scOXfAitpyLxCeAI9dES6SMDNPkYBknSXwmb");'></div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white text-lg truncate">Michael B.</h3>
<div class="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px] text-purple-400">bolt</span>10k</span>
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px] text-yellow-400">diamond</span>200</span>
</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-xl text-neon-orange/90">2,650</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-xl w-8 text-center text-orange-400/70 font-display">3</div>
<div class="size-12 rounded-full border-2 border-orange-900/50 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9pYTPIlXVBt3jLy2W5pQmvsU5_bixTNJtJy-7uyTKOZ92OZXbCcTcqrmW54Vx7iFhIL_YdVAXxvNWe0Y1E9HS80hfk6wmc_OeSZx6ZYQjRqlq3XwLhjWtI1Fl4tomI40QeN3OBDUvanCL3kIMSai6v7GZs9bOJuPtdvs5WktnBG9PLUV3z_FDiX6RVhgR4200gQJS_GSNC23nxI9yP6ESLy1TOr6g92ciF0lKdwLWPzpZuocHvrQ7RliffBvT_HUu5HVV25XW88EJ");'></div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white text-lg truncate">Jessica W.</h3>
<div class="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px] text-purple-400">bolt</span>9.5k</span>
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px] text-yellow-400">diamond</span>150</span>
</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-xl text-neon-orange/90">2,420</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-lg w-8 text-center text-gray-500">4</div>
<div class="size-12 rounded-full bg-stone-800 bg-cover bg-center flex items-center justify-center text-gray-500 border border-white/5" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeplQr7A-zBTisNNQx6KPnpKAY6l1END6YOb6OCKcTVxJ2sB8vsWGWirbXx3r2gc9eMPvyBKhvK5SuWM8WTGzNZ8y79aIDLXbSxJDMrXnsL-UGCLth1mvgI1TMubb_Vi-QJvOUABxaEtqDLqjTxpQ4eWU9dFqAA7fIOPNuZ6oKGr5OvCBrPh6vtW3L20zRdJ_Bnx4CgFaRr1fTBZxzBG3g-7xCPzGgklLjN8bY1FdPExgz4uUrmvHzQwEOln4LcNsr9UY0aGZj9QkX");'></div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white truncate">David Chen</h3>
<div class="text-xs text-gray-500 mt-0.5">Looking for team</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-white">2,100</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-lg w-8 text-center text-gray-500">5</div>
<div class="size-12 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
<span class="material-symbols-outlined">face_3</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white truncate">Emma S.</h3>
<div class="text-xs text-gray-500 mt-0.5 flex items-center gap-1">Streak Master <span class="material-symbols-outlined text-[14px] text-orange-500">local_fire_department</span></div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-white">1,950</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-lg w-8 text-center text-gray-500">6</div>
<div class="size-12 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
<span class="material-symbols-outlined">face_6</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white truncate">Marcus J.</h3>
<div class="text-xs text-gray-500 mt-0.5">XP Grinder</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-white">1,820</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-lg w-8 text-center text-gray-500">7</div>
<div class="size-12 rounded-full bg-green-900/20 border border-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
<span class="material-symbols-outlined">face_2</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white truncate">Lisa Wong</h3>
<div class="text-xs text-gray-500 mt-0.5">Week 3 Streak</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-white">1,750</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-lg w-8 text-center text-gray-500">8</div>
<div class="size-12 rounded-full bg-rose-900/20 border border-rose-500/20 flex items-center justify-center text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.1)]">
<span class="material-symbols-outlined">face_4</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white truncate">Tom Hardy</h3>
<div class="text-xs text-gray-500 mt-0.5">Just joined</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-white">1,600</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-lg w-8 text-center text-gray-500">9</div>
<div class="size-12 rounded-full bg-indigo-900/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
<span class="material-symbols-outlined">face_5</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white truncate">Sophie T.</h3>
<div class="text-xs text-gray-500 mt-0.5">Runner 🏃‍♀️</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-white">1,550</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm">
<div class="font-bold text-lg w-8 text-center text-gray-500">10</div>
<div class="size-12 rounded-full bg-teal-900/20 border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.1)]">
<span class="material-symbols-outlined">face</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-white truncate">Kevin P.</h3>
<div class="text-xs text-gray-500 mt-0.5">Yoga fan</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-white">1,480</div>
</div>
</div>
<div class="flex flex-col gap-3 py-4 opacity-50">
<div class="h-16 rounded-2xl bg-white/5 animate-pulse"></div>
<div class="h-16 rounded-2xl bg-white/5 animate-pulse"></div>
</div>
</div>
<div class="absolute bottom-0 left-0 right-0 z-40">
<div class="h-8 w-full bg-gradient-to-b from-transparent to-obsidian"></div>
<div class="bg-obsidian/95 backdrop-blur-xl border-t border-white/10 p-5 pb-8 sm:pb-5">
<div class="flex items-center gap-4 p-3 pr-5 mb-6 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 shadow-neon-orange text-white relative overflow-hidden group cursor-pointer hover:brightness-110 transition-all border border-orange-400/50">
<div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
<div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
<div class="font-bold text-lg w-8 text-center text-white bg-black/30 rounded-lg py-1 backdrop-blur-sm z-10 border border-white/10">42</div>
<div class="relative z-10">
<div class="size-10 rounded-full border-2 border-white/80 bg-cover bg-center shadow-[0_0_10px_rgba(255,255,255,0.4)]" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
<div class="absolute -bottom-1 -right-1 bg-white text-orange-600 text-[10px] font-bold px-1 rounded-full border border-orange-500 shadow-sm">YOU</div>
</div>
<div class="flex-1 z-10">
<h3 class="font-bold text-white text-lg leading-tight drop-shadow-md">Your Rank</h3>
<p class="text-xs text-white/90 font-medium">Top 15% • Keep going!</p>
</div>
<div class="text-right z-10">
<div class="font-bold text-xl text-white drop-shadow-md">850</div>
<div class="text-[10px] text-white/80 font-bold uppercase tracking-wider">Points</div>
</div>
</div>
<div class="flex items-center justify-between px-2">
<button class="flex flex-col items-center gap-1 text-neon-orange drop-shadow-[0_0_5px_rgba(255,157,0,0.5)]">
<span class="material-symbols-outlined text-2xl">home</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Home</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Train</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">restaurant</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Diet</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">notifications</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Alerts</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">person</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Profile</span>
</button>
</div>
</div>
</div>
</body></html>