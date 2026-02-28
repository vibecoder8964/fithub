### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Smart Nudge Settings</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00",
                        "neon-yellow": "#FFD700",
                        "neon-orange": "#FF8C00",
                        "neon-purple": "#A020F0",
                        "background-dark": "#050505","card-dark": "#121212",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    boxShadow: {
                        'neon-yellow': '0 0 5px theme("colors.neon-yellow"), 0 0 10px theme("colors.neon-yellow")',
                        'neon-orange': '0 0 5px theme("colors.neon-orange"), 0 0 10px theme("colors.neon-orange")',
                        'neon-purple': '0 0 5px theme("colors.neon-purple"), 0 0 10px theme("colors.neon-purple")',
                        'neon-white': '0 0 2px theme("colors.white"), 0 0 5px theme("colors.white")',
                    }
                },
            },
        }
    </script>
<style>.no-scrollbar::-webkit-scrollbar {
            display: none;
        }.no-scrollbar {
            -ms-overflow-style: none;scrollbar-width: none;}
        body {
            background-color: #050505;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark text-white font-display transition-colors duration-200 antialiased selection:bg-primary selection:text-black">
<div class="relative flex h-screen w-full max-w-md mx-auto flex-col overflow-hidden bg-background-dark shadow-2xl border-x border-white/10">
<div class="pt-6 pb-2 px-4 bg-background-dark z-30">
<div class="flex justify-between items-center gap-3">
<div class="flex-1 flex items-center justify-between px-3 py-1.5 rounded-full border border-neon-yellow/50 bg-black/40 shadow-[0_0_8px_rgba(255,215,0,0.3)] backdrop-blur-sm">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-neon-yellow text-sm font-bold">diamond</span>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Gems</span>
</div>
<span class="text-sm font-bold text-white">150</span>
</div>
<div class="flex-1 flex items-center justify-between px-3 py-1.5 rounded-full border border-neon-orange/50 bg-black/40 shadow-[0_0_8px_rgba(255,140,0,0.3)] backdrop-blur-sm">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-neon-orange text-sm font-bold">local_fire_department</span>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Streak</span>
</div>
<span class="text-sm font-bold text-white">7</span>
</div>
<div class="flex-1 flex items-center justify-between px-3 py-1.5 rounded-full border border-neon-purple/50 bg-black/40 shadow-[0_0_8px_rgba(160,32,240,0.3)] backdrop-blur-sm">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-neon-purple text-sm font-bold">bolt</span>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">XP</span>
</div>
<span class="text-sm font-bold text-white">1,200</span>
</div>
</div>
</div>
<header class="flex items-center justify-between px-4 py-3 bg-background-dark sticky top-0 z-20 border-b border-white/10">
<div class="flex items-center gap-1">
<button class="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors group">
<span class="material-symbols-outlined text-white group-hover:text-primary transition-colors" style="font-size: 24px;">arrow_back_ios_new</span>
</button>
</div>
<h2 class="text-lg font-bold text-white tracking-tight drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Smart Nudge Settings</h2>
<button class="flex items-center justify-center h-10 px-2 text-primary font-bold text-base hover:text-primary/80 transition-colors drop-shadow-[0_0_5px_rgba(255,157,0,0.5)]">Done</button>
</header>
<main class="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24 px-4 bg-background-dark">
<div class="mt-4">
<h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-2 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Notifications</h3>
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-neon-orange/50 transition-all duration-300 group hover:shadow-[0_0_10px_rgba(255,140,0,0.1)]">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-orange-500/10 text-orange-400 shrink-0 border border-orange-500/20 group-hover:border-orange-500/50 group-hover:text-orange-300 transition-colors">
<span class="material-symbols-outlined drop-shadow-[0_0_5px_rgba(251,146,60,0.5)]">restaurant</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-white group-hover:text-orange-100 transition-colors">Eat Reminders</span>
<span class="text-xs font-medium text-gray-400">Meal &amp; hydration alerts</span>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.6)]"></div>
</label>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-neon-orange/50 transition-all duration-300 group hover:shadow-[0_0_10px_rgba(255,140,0,0.1)]">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 border border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:text-indigo-300 transition-colors">
<span class="material-symbols-outlined drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]">bed</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-white group-hover:text-indigo-100 transition-colors">Sleep Schedule</span>
<span class="text-xs font-medium text-gray-400">Wind-down prompts</span>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.6)]"></div>
</label>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300 group">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-teal-500/10 text-teal-400 shrink-0 border border-teal-500/20 group-hover:border-teal-500/50 transition-colors">
<span class="material-symbols-outlined drop-shadow-[0_0_5px_rgba(45,212,191,0.5)]">work</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-white group-hover:text-teal-100 transition-colors">Work Focus</span>
<span class="text-xs font-medium text-gray-400">Productivity blocks</span>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-600 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.6)] shadow-inner"></div>
</label>
</div>
</div>
</div>
<div class="mt-8">
<h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Permissions</h3>
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-neon-orange/50 transition-all duration-300 group hover:shadow-[0_0_10px_rgba(255,140,0,0.1)]">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-gray-700/50 text-gray-300 shrink-0 border border-white/10 group-hover:border-white/30 transition-colors">
<span class="material-symbols-outlined">videocam</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-white group-hover:text-gray-100 transition-colors">Camera Access</span>
<span class="text-xs font-medium text-gray-400">For posture checks</span>
</div>
</div>
<div class="flex items-center">
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.6)]"></div>
</label>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300 group">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-gray-700/50 text-gray-300 shrink-0 border border-white/10 group-hover:border-white/30 transition-colors">
<span class="material-symbols-outlined">volume_up</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-white group-hover:text-gray-100 transition-colors">Sound &amp; Haptics</span>
<span class="text-xs font-medium text-gray-400">For nudges</span>
</div>
</div>
<div class="flex items-center">
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-600 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.6)] shadow-inner"></div>
</label>
</div>
</div>
</div>
</div>
<div class="mt-8 mb-4">
<div class="flex justify-between items-end mb-3 px-1">
<h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">App Control</h3>
<button class="text-primary text-sm font-bold hover:underline hover:text-orange-400 transition-colors drop-shadow-[0_0_5px_rgba(255,157,0,0.4)]">Manage All</button>
</div>
<div class="relative mb-4 group">
<span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined">search</span>
</span>
<input class="w-full py-3.5 pl-11 pr-4 bg-black/60 border border-white/10 rounded-2xl text-sm font-medium text-white placeholder-gray-500 shadow-inner focus:ring-1 focus:ring-primary focus:border-primary focus:shadow-[0_0_10px_rgba(255,157,0,0.3)] focus:outline-none transition-all" placeholder="Search apps..." type="text"/>
</div>
<div class="flex flex-col gap-3">
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.15)] transition-all duration-300 group">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 text-white shadow-md border border-white/10">
<span class="material-symbols-outlined drop-shadow-md">photo_camera</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-white group-hover:text-purple-100 transition-colors truncate">Instagram</span>
<span class="text-xs font-medium text-gray-400 truncate">Social</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-white/5 text-gray-200 text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary border border-white/10 transition-all hover:bg-white/10 hover:border-white/20">
<option class="bg-gray-900 text-white">Enabled</option>
<option class="bg-gray-900 text-white">Limit 15m</option>
<option class="bg-gray-900 text-white">Limit 30m</option>
<option class="bg-gray-900 text-white">Blocked</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_10px_rgba(239,68,68,0.15)] transition-all duration-300 group">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-red-600 text-white shadow-md border border-white/10">
<span class="material-symbols-outlined drop-shadow-md">play_arrow</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-white group-hover:text-red-100 transition-colors truncate">YouTube</span>
<span class="text-xs font-medium text-gray-400 truncate">Entertainment</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-primary/20 text-primary-light text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary border border-primary/30 transition-all hover:bg-primary/30 hover:border-primary/50 text-[#ffb03b]">
<option class="bg-gray-900 text-white">Limit 30m</option>
<option class="bg-gray-900 text-white">Enabled</option>
<option class="bg-gray-900 text-white">Blocked</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#ffb03b]">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.15)] transition-all duration-300 group">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-black text-white shadow-md border border-white/20">
<span class="material-symbols-outlined drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">music_note</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-white group-hover:text-gray-100 transition-colors truncate">TikTok</span>
<span class="text-xs font-medium text-gray-400 truncate">Social</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-red-900/30 text-red-400 text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 border border-red-500/30 transition-all hover:bg-red-900/40 hover:border-red-500/50">
<option class="bg-gray-900 text-white">Blocked</option>
<option class="bg-gray-900 text-white">Enabled</option>
<option class="bg-gray-900 text-white">Limit 15m</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-red-400">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:border-blue-400/50 hover:shadow-[0_0_10px_rgba(96,165,250,0.15)] transition-all duration-300 group">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-[#1DA1F2] text-white shadow-md border border-white/10">
<span class="material-symbols-outlined drop-shadow-md">alternate_email</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-white group-hover:text-blue-100 transition-colors truncate">Twitter / X</span>
<span class="text-xs font-medium text-gray-400 truncate">Social</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-white/5 text-gray-200 text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary border border-white/10 transition-all hover:bg-white/10 hover:border-white/20">
<option class="bg-gray-900 text-white">Enabled</option>
<option class="bg-gray-900 text-white">Limit 15m</option>
<option class="bg-gray-900 text-white">Blocked</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
</div>
</div>
</main>
<nav class="absolute bottom-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 z-30 pb-4 pt-2">
<div class="flex justify-around items-center px-2">
<button class="flex flex-col items-center gap-1 p-2 group">
<span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(255,157,0,0.8)]">home</span>
<span class="text-[10px] font-bold text-primary group-hover:text-primary transition-colors">Home</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 group">
<span class="material-symbols-outlined text-gray-500 group-hover:text-gray-300 transition-colors">fitness_center</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-colors uppercase">MotionSense</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 group">
<span class="material-symbols-outlined text-gray-500 group-hover:text-gray-300 transition-colors">restaurant</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-colors uppercase">PlanCalorie</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 group">
<span class="material-symbols-outlined text-gray-500 group-hover:text-gray-300 transition-colors">notifications</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-colors uppercase">SmartNudge</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 group">
<span class="material-symbols-outlined text-gray-500 group-hover:text-gray-300 transition-colors">self_improvement</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-colors uppercase">ZenZone</span>
</button>
</div>
</nav>
</div>

</body></html>