### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Smart Nudge Settings</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
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
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-gray-100 font-display transition-colors duration-200">
<!-- Mobile Container (Simulating Phone View) -->
<div class="relative flex h-screen w-full max-w-md mx-auto flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
<!-- Header -->
<header class="flex items-center justify-between px-4 py-3 bg-background-light dark:bg-background-dark/95 backdrop-blur-md sticky top-0 z-20 border-b border-transparent dark:border-white/5">
<div class="flex items-center gap-1">
<button class="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[#181510] dark:text-white" style="font-size: 24px;">arrow_back_ios_new</span>
</button>
</div>
<h2 class="text-lg font-bold text-[#181510] dark:text-white tracking-tight">Smart Nudge Settings</h2>
<button class="flex items-center justify-center h-10 px-2 text-primary font-bold text-base hover:text-primary/80 transition-colors">Done</button>
</header>
<!-- Main Content -->
<main class="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-10 px-4">
<!-- Section: Notifications -->
<div class="mt-4">
<h3 class="text-[#181510] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">Notifications</h3>
<div class="flex flex-col gap-3">
<!-- Item: Eat -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5 group">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 shrink-0">
<span class="material-symbols-outlined">restaurant</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-[#181510] dark:text-white">Eat Reminders</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400">Meal &amp; hydration alerts</span>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary shadow-inner"></div>
</label>
</div>
<!-- Item: Sleep -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5 group">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 shrink-0">
<span class="material-symbols-outlined">bed</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-[#181510] dark:text-white">Sleep Schedule</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400">Wind-down prompts</span>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary shadow-inner"></div>
</label>
</div>
<!-- Item: Work -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5 group">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 shrink-0">
<span class="material-symbols-outlined">work</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-[#181510] dark:text-white">Work Focus</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400">Productivity blocks</span>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary shadow-inner"></div>
</label>
</div>
</div>
</div>
<!-- Section: Permissions -->
<div class="mt-8">
<h3 class="text-[#181510] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Permissions</h3>
<div class="flex flex-col gap-3">
<!-- Item: Camera -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 shrink-0">
<span class="material-symbols-outlined">videocam</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-[#181510] dark:text-white">Camera Access</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400">For posture checks</span>
</div>
</div>
<div class="flex items-center">
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary shadow-inner"></div>
</label>
</div>
</div>
<!-- Item: Sound -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-xl bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 shrink-0">
<span class="material-symbols-outlined">volume_up</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-[#181510] dark:text-white">Sound &amp; Haptics</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400">For nudges</span>
</div>
</div>
<div class="flex items-center">
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-[50px] h-[30px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[26px] after:w-[26px] after:transition-all peer-checked:bg-primary shadow-inner"></div>
</label>
</div>
</div>
</div>
</div>
<!-- Section: App Control -->
<div class="mt-8 mb-4">
<div class="flex justify-between items-end mb-3 px-1">
<h3 class="text-[#181510] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">App Control</h3>
<button class="text-primary text-sm font-bold hover:underline">Manage All</button>
</div>
<!-- Search -->
<div class="relative mb-4 group">
<span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined">search</span>
</span>
<input class="w-full py-3.5 pl-11 pr-4 bg-white dark:bg-[#2d2416] border-none rounded-2xl text-sm font-medium text-[#181510] dark:text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-shadow" placeholder="Search apps..." type="text"/>
</div>
<!-- App List -->
<div class="flex flex-col gap-3">
<!-- App: Instagram -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 text-white shadow-md">
<span class="material-symbols-outlined">photo_camera</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-[#181510] dark:text-white truncate">Instagram</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">Social</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-[#f5f3f0] dark:bg-[#3a2e22] text-[#181510] dark:text-gray-200 text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 border-none transition-all hover:bg-gray-100 dark:hover:bg-white/5">
<option>Enabled</option>
<option>Limit 15m</option>
<option>Limit 30m</option>
<option>Blocked</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
<!-- App: YouTube -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-red-600 text-white shadow-md">
<span class="material-symbols-outlined">play_arrow</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-[#181510] dark:text-white truncate">YouTube</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">Entertainment</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 border-none transition-all hover:bg-primary/20">
<option>Limit 30m</option>
<option>Enabled</option>
<option>Blocked</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-primary">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
<!-- App: TikTok -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-black dark:bg-black/80 text-white shadow-md border border-gray-100 dark:border-white/10">
<span class="material-symbols-outlined">music_note</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-[#181510] dark:text-white truncate">TikTok</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">Social</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/50 border-none transition-all hover:bg-red-100 dark:hover:bg-red-900/30">
<option>Blocked</option>
<option>Enabled</option>
<option>Limit 15m</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-red-600 dark:text-red-400">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
<!-- App: X / Twitter -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-[#2d2416] rounded-2xl shadow-sm border border-transparent dark:border-white/5">
<div class="flex items-center gap-4 overflow-hidden">
<div class="flex shrink-0 items-center justify-center size-12 rounded-xl bg-[#1DA1F2] text-white shadow-md">
<span class="material-symbols-outlined">alternate_email</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-base font-bold text-[#181510] dark:text-white truncate">Twitter / X</span>
<span class="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">Social</span>
</div>
</div>
<div class="shrink-0 relative">
<select class="appearance-none bg-[#f5f3f0] dark:bg-[#3a2e22] text-[#181510] dark:text-gray-200 text-xs font-bold py-2.5 pl-3.5 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 border-none transition-all hover:bg-gray-100 dark:hover:bg-white/5">
<option>Enabled</option>
<option>Limit 15m</option>
<option>Blocked</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</body></html>