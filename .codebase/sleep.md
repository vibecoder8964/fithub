### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Circadian Sync &amp; Alarms</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#FF9E00",
                        "background-light": "#f8f7f5",
                        "background-dark": "#231b0f",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
                },
            },
        }
    </script>
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
<body class="bg-background-light dark:bg-background-dark font-display text-[#181510] dark:text-white antialiased">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-hidden pb-24">
<header class="flex items-center justify-between px-6 py-4 bg-background-light dark:bg-background-dark z-10 sticky top-0">
<div class="w-10">
</div>
<h1 class="text-xl font-bold tracking-tight text-[#181510] dark:text-white">Circadian Sync</h1>
<button class="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#2d2418] shadow-sm hover:bg-gray-50 transition-colors">
<span class="material-symbols-outlined text-[#181510] dark:text-white" style="font-size: 24px;">settings</span>
</button>
</header>
<main class="flex-1 overflow-y-auto px-4 sm:px-6 space-y-6">
<section class="rounded-2xl bg-white dark:bg-[#2d2418] p-5 shadow-sm border border-stone-100 dark:border-stone-800">
<div class="flex items-center justify-between mb-2">
<h2 class="text-lg font-bold text-[#181510] dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">bedtime</span>
                        Target Bedtime
                    </h2>
<span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">10:30 PM</span>
</div>
<p class="text-stone-500 dark:text-stone-400 text-sm font-medium leading-normal pb-6">
                    Sync your rhythm: Aim for before 12:00 AM.
                </p>
<div class="relative w-full pb-2">
<div class="flex justify-between text-xs text-stone-400 font-medium mb-2 px-1">
<span>8 PM</span>
<span>10 PM</span>
<span>12 AM</span>
<span>2 AM</span>
</div>
<div class="relative h-6 w-full rounded-full bg-[#f0eee9] dark:bg-[#3d3224]">
<div class="absolute left-0 top-0 h-full w-[60%] rounded-l-full bg-green-500/10 border-r border-dashed border-green-500/30"></div>
<div class="absolute left-0 top-0 h-full w-[45%] rounded-full bg-primary"></div>
<div class="absolute top-1/2 -translate-y-1/2 left-[45%] -ml-3 h-8 w-8 rounded-full bg-white shadow-md border-2 border-primary flex items-center justify-center cursor-pointer z-10 transition-transform hover:scale-110">
<span class="material-symbols-outlined text-primary" style="font-size: 16px;">drag_indicator</span>
</div>
</div>
<p class="text-center text-xs text-green-600 dark:text-green-400 font-bold mt-3 flex items-center justify-center gap-1">
<span class="material-symbols-outlined" style="font-size: 14px;">check_circle</span>
                        Optimal Window
                    </p>
</div>
</section>
<section>
<h3 class="text-[#181510] dark:text-white text-lg font-bold mb-4 px-1">Upcoming Alarms</h3>
<div class="flex flex-col gap-3">
<div class="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#2d2418] p-4 shadow-sm border border-stone-100 dark:border-stone-800 transition-all active:scale-[0.99]">
<div class="flex items-center justify-between">
<div class="flex flex-col gap-1">
<div class="flex items-baseline gap-2">
<span class="text-3xl font-extrabold text-[#181510] dark:text-white tracking-tight">06:30</span>
<span class="text-sm font-bold text-stone-500 dark:text-stone-400">AM</span>
</div>
<div class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 font-medium">
<span class="material-symbols-outlined text-primary" style="font-size: 16px;">music_note</span>
                                    Gentle Bells
                                </div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-14 h-8 bg-stone-200 peer-focus:outline-none rounded-full peer dark:bg-[#3d3224] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
<div class="mt-4 flex gap-2">
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">M</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">T</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">W</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">T</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">F</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-700 text-[10px] font-bold text-stone-400">S</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-700 text-[10px] font-bold text-stone-400">S</span>
</div>
</div>
</div>
<button class="mt-4 w-full py-3 rounded-xl border-2 border-dashed border-stone-300 dark:border-stone-700 text-stone-400 dark:text-stone-500 font-bold text-sm flex items-center justify-center gap-2 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
<span class="material-symbols-outlined">add_circle</span>
                    Add New Alarm
                </button>
</section>
<div class="pt-2 pb-10 space-y-4">
<button class="w-full bg-stone-100 dark:bg-[#2d2418] text-[#181510] dark:text-white rounded-2xl h-16 flex items-center justify-between px-6 border border-stone-200 dark:border-stone-800 hover:bg-stone-200 dark:hover:bg-[#3d3224] transition-all">
<div class="flex flex-col items-start">
<span class="text-base font-bold">Have a Rest?</span>
<span class="text-xs text-stone-500 font-medium">Dims screen for wind down</span>
</div>
<div class="h-10 w-10 rounded-full bg-white/50 dark:bg-white/10 flex items-center justify-center">
<span class="material-symbols-outlined">nights_stay</span>
</div>
</button>
<button class="w-full bg-primary text-white rounded-2xl p-5 shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col gap-3 relative overflow-hidden group">
<div class="absolute -right-4 -top-4 opacity-10 group-hover:scale-125 transition-transform">
<span class="material-symbols-outlined" style="font-size: 120px;">shutter_speed</span>
</div>
<div class="flex items-center justify-between relative z-10 w-full">
<div class="flex items-center gap-3">
<div class="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
<span class="material-symbols-outlined" style="font-size: 32px;">power_settings_new</span>
</div>
<div class="flex flex-col items-start">
<span class="text-xl font-extrabold tracking-tight">Sleep Now</span>
<span class="text-xs font-bold opacity-90 uppercase tracking-widest">Activate Focus Mode</span>
</div>
</div>
<span class="material-symbols-outlined font-bold">arrow_forward_ios</span>
</div>
<div class="flex flex-wrap gap-2 relative z-10">
<div class="flex items-center gap-1.5 bg-black/10 px-2.5 py-1 rounded-full text-[10px] font-bold">
<span class="material-symbols-outlined" style="font-size: 14px;">battery_saver</span>
                            LOW POWER
                        </div>
<div class="flex items-center gap-1.5 bg-black/10 px-2.5 py-1 rounded-full text-[10px] font-bold">
<span class="material-symbols-outlined" style="font-size: 14px;">mic_external_on</span>
                            RECORDING
                        </div>
<div class="flex items-center gap-1.5 bg-black/10 px-2.5 py-1 rounded-full text-[10px] font-bold">
<span class="material-symbols-outlined" style="font-size: 14px;">do_not_disturb_on</span>
                            RESTRICTED
                        </div>
</div>
</button>
</div>
</main>
<nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#2d2418] border-t border-stone-100 dark:border-stone-800 px-6 pb-6 pt-3 z-50">
<div class="flex justify-between items-center">
<a class="flex flex-col items-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined filled">home</span>
<span class="text-[10px] font-bold">Home</span>
</a>
<a class="flex flex-col items-center gap-1 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-[10px] font-bold">Stats</span>
</a>
<div class="relative -top-6">
<button class="h-14 w-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-110 transition-transform">
<span class="material-symbols-outlined" style="font-size: 28px;">alarm_add</span>
</button>
</div>
<a class="flex flex-col items-center gap-1 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors" href="#">
<span class="material-symbols-outlined">library_music</span>
<span class="text-[10px] font-bold">Sounds</span>
</a>
<a class="flex flex-col items-center gap-1 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-bold">Profile</span>
</a>
</div>
</nav>
</div>

</body></html>