### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Monthly Health Tournament</title>
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
  </head>
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-white h-screen w-full overflow-hidden flex transition-colors duration-200">
<aside class="w-[72px] h-full flex flex-col items-center justify-between py-6 bg-white dark:bg-[#2c241b] border-r border-[#e6e0d9] dark:border-[#3e3427] shrink-0 z-20 shadow-sm hidden sm:flex">
<button class="p-3 rounded-xl hover:bg-background-light dark:hover:bg-[#3e3427] text-[#181510] dark:text-white transition-colors">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
<div class="flex flex-col gap-6 w-full items-center">
<button class="p-3 rounded-xl hover:bg-background-light dark:hover:bg-[#3e3427] text-[#8d7b5e] dark:text-[#a89b85]">
<span class="material-symbols-outlined text-2xl">home</span>
</button>
<button class="p-3 rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">emoji_events</span>
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
<main class="flex-1 h-full overflow-hidden relative flex flex-col">
<div class="flex-none z-30 bg-white/90 dark:bg-[#231b0f]/90 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-[#e6e0d9] dark:border-[#3e3427]">
<div>
<h1 class="text-xl font-bold tracking-tight text-[#181510] dark:text-white">Monthly Tournament</h1>
<div class="flex items-center gap-1.5 mt-1">
<span class="material-symbols-outlined text-sm text-primary">emoji_events</span>
<p class="text-xs font-semibold uppercase tracking-wide text-[#8d7b5e] dark:text-[#a89b85]">Gold League • 12 Days Left</p>
</div>
</div>
<button class="size-10 rounded-xl hover:bg-stone-100 dark:hover:bg-[#3e3427] text-[#8d7b5e] dark:text-[#a89b85] flex items-center justify-center transition-colors shadow-sm border border-stone-100 dark:border-[#3e3427]">
<span class="material-symbols-outlined">help</span>
</button>
</div>
<div class="flex-none px-6 py-3 flex items-center text-[10px] font-bold text-[#8d7b5e] dark:text-[#a89b85] uppercase tracking-wider bg-background-light dark:bg-background-dark">
<div class="w-8 text-center">Rank</div>
<div class="flex-1 ml-4">User Details</div>
<div class="text-right">Points</div>
</div>
<div class="flex-1 overflow-y-auto no-scrollbar p-5 pt-2 pb-32 flex flex-col gap-3">
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-white dark:from-[#3a2e1d] dark:to-[#231b0f] shadow-sm border border-yellow-200 dark:border-yellow-900/30">
<div class="absolute -left-1.5 -top-1.5 size-7 bg-yellow-400 rounded-full flex items-center justify-center text-[#181510] shadow-md z-10 border-2 border-white dark:border-[#231b0f]">
<span class="material-symbols-outlined text-sm font-bold">emoji_events</span>
</div>
<div class="font-bold text-2xl w-8 text-center text-yellow-500 font-display">1</div>
<div class="relative">
<div class="size-12 rounded-full border-2 border-yellow-400 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-bwHd3C729X-vJDUDbsrj__QSzCtRYNbsjjc7abw8CigZIlfr5OfvgYQH17nuN6UWJaB3pZRSNPFZeJ_n3WGpD0a56m7ZublXfVAzRz7PHKTeDh69wcjFt4sPNGSnucX8Qs8wpJHsxNmo_NweuEQqQIOGXq1y9hBlZuOucTHJHTJdCJHh1PyK8DIseg0iMEvc-YHh78plGHtvzwA9eA3IaD_04gyVeSo10Avaco0Gz24NIbCoPzUHuIVwIu_xIT_aoGcQCKHA7ICO");'></div>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white text-lg truncate">Sarah Connor</h3>
<div class="flex items-center gap-3 text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">
<span class="flex items-center gap-0.5" title="XP"><span class="material-symbols-outlined text-[12px]">bolt</span>12k</span>
<span class="flex items-center gap-0.5" title="Gems"><span class="material-symbols-outlined text-[12px]">diamond</span>450</span>
<span class="flex items-center gap-0.5" title="Streak"><span class="material-symbols-outlined text-[12px]">local_fire_department</span>32</span>
</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-xl text-primary">2,840</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-xl w-8 text-center text-stone-400 dark:text-stone-500 font-display">2</div>
<div class="size-12 rounded-full border-2 border-stone-200 dark:border-stone-600 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwNGrQr0XH79lSoPXkqv8S1D0JoXBiIQ7r-4MKVXZ_4YH8fgEtzxziqJCq-6rpnXoqdxNVLrXa3fxzytkXGugoVdDB5XPgzeELDhzg9TrYNy8obPS1Z0B0AcdcN7KHVSVcvCTa9TwmOKVzMIUrZ6pONnI82s0qEH9_93V9TqUWscae-4dgqPIflVIUgYwrlFz293FgdSALwqfBJfUZbgrwXtfLucRLV4A5I3qANVS1scOXfAitpyLxCeAI9dES6SMDNPkYBknSXwmb");'></div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white text-lg truncate">Michael B.</h3>
<div class="flex items-center gap-3 text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px]">bolt</span>10k</span>
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px]">diamond</span>200</span>
</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-xl text-primary">2,650</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-xl w-8 text-center text-orange-400/70 font-display">3</div>
<div class="size-12 rounded-full border-2 border-orange-200 dark:border-orange-900/50 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9pYTPIlXVBt3jLy2W5pQmvsU5_bixTNJtJy-7uyTKOZ92OZXbCcTcqrmW54Vx7iFhIL_YdVAXxvNWe0Y1E9HS80hfk6wmc_OeSZx6ZYQjRqlq3XwLhjWtI1Fl4tomI40QeN3OBDUvanCL3kIMSai6v7GZs9bOJuPtdvs5WktnBG9PLUV3z_FDiX6RVhgR4200gQJS_GSNC23nxI9yP6ESLy1TOr6g92ciF0lKdwLWPzpZuocHvrQ7RliffBvT_HUu5HVV25XW88EJ");'></div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white text-lg truncate">Jessica W.</h3>
<div class="flex items-center gap-3 text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px]">bolt</span>9.5k</span>
<span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px]">diamond</span>150</span>
</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-xl text-primary">2,420</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-lg w-8 text-center text-[#8d7b5e] dark:text-[#a89b85]">4</div>
<div class="size-12 rounded-full bg-stone-100 dark:bg-stone-800 bg-cover bg-center flex items-center justify-center text-[#8d7b5e]" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeplQr7A-zBTisNNQx6KPnpKAY6l1END6YOb6OCKcTVxJ2sB8vsWGWirbXx3r2gc9eMPvyBKhvK5SuWM8WTGzNZ8y79aIDLXbSxJDMrXnsL-UGCLth1mvgI1TMubb_Vi-QJvOUABxaEtqDLqjTxpQ4eWU9dFqAA7fIOPNuZ6oKGr5OvCBrPh6vtW3L20zRdJ_Bnx4CgFaRr1fTBZxzBG3g-7xCPzGgklLjN8bY1FdPExgz4uUrmvHzQwEOln4LcNsr9UY0aGZj9QkX");'></div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white truncate">David Chen</h3>
<div class="text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">Looking for team</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-[#181510] dark:text-white">2,100</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-lg w-8 text-center text-[#8d7b5e] dark:text-[#a89b85]">5</div>
<div class="size-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
<span class="material-symbols-outlined">face_3</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white truncate">Emma S.</h3>
<div class="text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">Streak Master 🔥</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-[#181510] dark:text-white">1,950</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-lg w-8 text-center text-[#8d7b5e] dark:text-[#a89b85]">6</div>
<div class="size-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-500">
<span class="material-symbols-outlined">face_6</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white truncate">Marcus J.</h3>
<div class="text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">XP Grinder</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-[#181510] dark:text-white">1,820</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-lg w-8 text-center text-[#8d7b5e] dark:text-[#a89b85]">7</div>
<div class="size-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-500">
<span class="material-symbols-outlined">face_2</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white truncate">Lisa Wong</h3>
<div class="text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">Week 3 Streak</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-[#181510] dark:text-white">1,750</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-lg w-8 text-center text-[#8d7b5e] dark:text-[#a89b85]">8</div>
<div class="size-12 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center text-rose-500">
<span class="material-symbols-outlined">face_4</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white truncate">Tom Hardy</h3>
<div class="text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">Just joined</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-[#181510] dark:text-white">1,600</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-lg w-8 text-center text-[#8d7b5e] dark:text-[#a89b85]">9</div>
<div class="size-12 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-500">
<span class="material-symbols-outlined">face_5</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white truncate">Sophie T.</h3>
<div class="text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">Runner 🏃‍♀️</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-[#181510] dark:text-white">1,550</div>
</div>
</div>
<div class="relative flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2c241b] shadow-sm border border-stone-100 dark:border-[#3e3427]">
<div class="font-bold text-lg w-8 text-center text-[#8d7b5e] dark:text-[#a89b85]">10</div>
<div class="size-12 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-500">
<span class="material-symbols-outlined">face</span>
</div>
<div class="flex-1 min-w-0">
<h3 class="font-bold text-[#181510] dark:text-white truncate">Kevin P.</h3>
<div class="text-xs text-[#8d7b5e] dark:text-[#a89b85] mt-0.5">Yoga fan</div>
</div>
<div class="text-right shrink-0">
<div class="font-bold text-lg text-[#181510] dark:text-white">1,480</div>
</div>
</div>
<div class="flex flex-col gap-3 py-4 opacity-50">
<div class="h-16 rounded-2xl bg-stone-100 dark:bg-[#2c241b] animate-pulse"></div>
<div class="h-16 rounded-2xl bg-stone-100 dark:bg-[#2c241b] animate-pulse"></div>
</div>
</div>
<div class="absolute bottom-0 left-0 right-0 z-40">
<div class="h-6 w-full bg-gradient-to-b from-transparent to-white/95 dark:to-[#231b0f]/95"></div>
<div class="bg-white/95 dark:bg-[#231b0f]/95 backdrop-blur-xl border-t border-[#e6e0d9] dark:border-[#3e3427] p-5 pb-8 sm:pb-5">
<div class="flex items-center gap-4 p-3 pr-5 rounded-2xl bg-primary shadow-lg shadow-primary/30 text-[#181510] relative overflow-hidden group cursor-pointer hover:brightness-110 transition-all">
<div class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
<div class="font-bold text-lg w-8 text-center text-white bg-[#181510]/20 rounded-lg py-1 backdrop-blur-sm z-10">42</div>
<div class="relative z-10">
<div class="size-10 rounded-full border-2 border-white/60 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
<div class="absolute -bottom-1 -right-1 bg-white text-primary text-[10px] font-bold px-1 rounded-full border border-primary">YOU</div>
</div>
<div class="flex-1 z-10">
<h3 class="font-bold text-white text-lg leading-tight">Your Rank</h3>
<p class="text-xs text-white/80 font-medium">Top 15% • Keep going!</p>
</div>
<div class="text-right z-10">
<div class="font-bold text-xl text-white">850</div>
<div class="text-[10px] text-white/70 font-bold uppercase tracking-wider">Points</div>
</div>
</div>
</div>
</div>
</main>

</body></html>