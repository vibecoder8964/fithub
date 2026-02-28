### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Neon Dark Circadian Sync View</title>
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
                        "neon-orange": "#FF9E00",
                        "neon-yellow": "#FFE600",
                        "neon-purple": "#D900FF",
                        "obsidian": "#050505",
                        "card-dark": "#121212",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    boxShadow: {
                        "neon-orange": "0 0 10px rgba(255, 158, 0, 0.5), 0 0 20px rgba(255, 158, 0, 0.3)",
                        "neon-yellow": "0 0 8px rgba(255, 230, 0, 0.5)",
                        "neon-purple": "0 0 8px rgba(217, 0, 255, 0.5)",
                        "neon-white": "0 0 8px rgba(255, 255, 255, 0.3)",
                        "halo": "0 0 25px rgba(255, 158, 0, 0.6), 0 0 50px rgba(255, 158, 0, 0.2)",
                    },
                    borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
                },
            },
        }
    </script>
<style>
        body {
            min-height: max(884px, 100dvh);
            background-color: #050505;
        }::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #050505;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 3px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-obsidian font-display text-white antialiased">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-hidden pb-24">
<header class="flex flex-col gap-4 px-6 pt-6 pb-2 bg-obsidian z-10 sticky top-0 border-b border-white/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]">
<div class="flex items-center justify-between">
<div class="w-10"></div>
<h1 class="text-xl font-bold tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Circadian Sync</h1>
<button class="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark border border-white/10 shadow-neon-white hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-white" style="font-size: 24px;">settings</span>
</button>
</div>
<div class="flex items-center justify-between gap-2 w-full mt-1">
<div class="flex-1 flex items-center justify-between px-3 py-1.5 rounded-full bg-[#1A1A10] border border-neon-yellow shadow-neon-yellow">
<span class="material-symbols-outlined text-neon-yellow filled" style="font-size: 16px;">diamond</span>
<div class="flex flex-col items-end leading-none">
<span class="text-[8px] text-stone-400 font-bold">GEMS</span>
<span class="text-xs font-bold text-white">150</span>
</div>
</div>
<div class="flex-1 flex items-center justify-between px-3 py-1.5 rounded-full bg-[#1A1510] border border-neon-orange shadow-neon-orange">
<span class="material-symbols-outlined text-neon-orange filled" style="font-size: 16px;">local_fire_department</span>
<div class="flex flex-col items-end leading-none">
<span class="text-[8px] text-stone-400 font-bold">STREAK</span>
<span class="text-xs font-bold text-white">7</span>
</div>
</div>
<div class="flex-1 flex items-center justify-between px-3 py-1.5 rounded-full bg-[#15101A] border border-neon-purple shadow-neon-purple">
<span class="material-symbols-outlined text-neon-purple filled" style="font-size: 16px;">bolt</span>
<div class="flex flex-col items-end leading-none">
<span class="text-[8px] text-stone-400 font-bold">XP</span>
<span class="text-xs font-bold text-white">1,200</span>
</div>
</div>
</div>
</header>
<main class="flex-1 overflow-y-auto px-4 sm:px-6 space-y-6 pt-6">
<section class="rounded-2xl bg-card-dark/80 backdrop-blur-sm p-5 border border-neon-orange shadow-neon-orange">
<div class="flex items-center justify-between mb-2">
<h2 class="text-lg font-bold text-white flex items-center gap-2 drop-shadow-md">
<span class="material-symbols-outlined text-neon-orange filled">bedtime</span>
                        Target Bedtime
                    </h2>
<span class="px-3 py-1 rounded-full bg-neon-orange/20 text-neon-orange text-sm font-bold shadow-[0_0_10px_rgba(255,158,0,0.3)] border border-neon-orange/30">10:30 PM</span>
</div>
<p class="text-stone-400 text-sm font-medium leading-normal pb-6">
                    Sync your rhythm: Aim for before 12:00 AM.
                </p>
<div class="relative w-full pb-2">
<div class="flex justify-between text-xs text-stone-500 font-medium mb-2 px-1">
<span>8 PM</span>
<span>10 PM</span>
<span>12 AM</span>
<span>2 AM</span>
</div>
<div class="relative h-6 w-full rounded-full bg-[#2a2a2a]">
<div class="absolute left-0 top-0 h-full w-[60%] rounded-l-full bg-emerald-500/10 border-r border-dashed border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>
<div class="absolute left-0 top-0 h-full w-[45%] rounded-full bg-neon-orange shadow-[0_0_15px_rgba(255,158,0,0.6)]"></div>
<div class="absolute top-1/2 -translate-y-1/2 left-[45%] -ml-3 h-8 w-8 rounded-full bg-[#1a1a1a] shadow-[0_0_15px_rgba(255,158,0,0.5)] border-2 border-neon-orange flex items-center justify-center cursor-pointer z-10 transition-transform hover:scale-110">
<span class="material-symbols-outlined text-neon-orange" style="font-size: 16px;">drag_indicator</span>
</div>
</div>
<p class="text-center text-xs text-emerald-400 font-bold mt-3 flex items-center justify-center gap-1 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">
<span class="material-symbols-outlined filled" style="font-size: 14px;">check_circle</span>
                        Optimal Window
                    </p>
</div>
</section>
<section>
<h3 class="text-white text-lg font-bold mb-4 px-1 flex items-center gap-2">
<span class="w-1 h-5 bg-neon-orange rounded-full shadow-[0_0_8px_rgba(255,158,0,0.8)]"></span>
                    Upcoming Alarms
                </h3>
<div class="flex flex-col gap-3">
<div class="group relative overflow-hidden rounded-2xl bg-card-dark p-4 border border-white/10 hover:border-neon-orange/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-[0.99]">
<div class="flex items-center justify-between">
<div class="flex flex-col gap-1">
<div class="flex items-baseline gap-2">
<span class="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">06:30</span>
<span class="text-sm font-bold text-stone-400">AM</span>
</div>
<div class="flex items-center gap-2 text-sm text-stone-400 font-medium">
<span class="material-symbols-outlined text-neon-orange" style="font-size: 16px;">music_note</span>
                                    Gentle Bells
                                </div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-14 h-8 bg-[#2a2a2a] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all border-gray-600 peer-checked:bg-neon-orange peer-checked:shadow-neon-orange"></div>
</label>
</div>
<div class="mt-4 flex gap-2">
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-neon-orange text-[10px] font-bold text-black shadow-neon-orange">M</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-neon-orange text-[10px] font-bold text-black shadow-neon-orange">T</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-neon-orange text-[10px] font-bold text-black shadow-neon-orange">W</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-neon-orange text-[10px] font-bold text-black shadow-neon-orange">T</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-neon-orange text-[10px] font-bold text-black shadow-neon-orange">F</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#2a2a2a] text-[10px] font-bold text-stone-500 border border-white/5">S</span>
<span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#2a2a2a] text-[10px] font-bold text-stone-500 border border-white/5">S</span>
</div>
</div>
</div>
<button class="mt-4 w-full py-3 rounded-xl border-2 border-dashed border-stone-700 text-stone-400 font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/5 hover:text-white hover:border-white/30 hover:shadow-neon-white transition-all duration-300">
<span class="material-symbols-outlined">add_circle</span>
                    Add New Alarm
                </button>
</section>
<div class="pt-2 pb-10 space-y-4">
<button class="w-full bg-card-dark text-white rounded-2xl h-16 flex items-center justify-between px-6 border border-white/10 hover:border-white/30 hover:bg-[#1a1a1a] transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<div class="flex flex-col items-start">
<span class="text-base font-bold">Have a Rest?</span>
<span class="text-xs text-stone-500 font-medium">Dims screen for wind down</span>
</div>
<div class="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-stone-300">nights_stay</span>
</div>
</button>
<button class="w-full bg-neon-orange text-black rounded-2xl p-5 shadow-halo hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col gap-3 relative overflow-hidden group border border-neon-orange/50">
<div class="absolute -right-4 -top-4 opacity-20 group-hover:scale-125 transition-transform text-black mix-blend-overlay">
<span class="material-symbols-outlined filled" style="font-size: 120px;">shutter_speed</span>
</div>
<div class="flex items-center justify-between relative z-10 w-full">
<div class="flex items-center gap-3">
<div class="h-12 w-12 rounded-xl bg-black/20 flex items-center justify-center backdrop-blur-md border border-black/10">
<span class="material-symbols-outlined text-white drop-shadow-md" style="font-size: 32px;">power_settings_new</span>
</div>
<div class="flex flex-col items-start">
<span class="text-xl font-extrabold tracking-tight text-white drop-shadow-md">Sleep Now</span>
<span class="text-xs font-bold text-black/70 uppercase tracking-widest">Activate Focus Mode</span>
</div>
</div>
<span class="material-symbols-outlined font-bold text-white/80">arrow_forward_ios</span>
</div>
<div class="flex flex-wrap gap-2 relative z-10">
<div class="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">
<span class="material-symbols-outlined" style="font-size: 14px;">battery_saver</span>
                            LOW POWER
                        </div>
<div class="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">
<span class="material-symbols-outlined" style="font-size: 14px;">mic_external_on</span>
                            RECORDING
                        </div>
<div class="flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">
<span class="material-symbols-outlined" style="font-size: 14px;">do_not_disturb_on</span>
                            RESTRICTED
                        </div>
</div>
</button>
</div>
</main>
<nav class="fixed bottom-0 left-0 right-0 bg-obsidian border-t border-white/10 px-0 pb-6 pt-2 z-50 shadow-[0_-5px_20px_rgba(0,0,0,1)]">
<div class="flex justify-between items-end px-4">
<a class="flex flex-col items-center gap-1 px-2 py-1 group" href="#">
<span class="material-symbols-outlined text-neon-orange filled drop-shadow-neon-orange group-hover:scale-110 transition-transform">home</span>
<span class="text-[9px] font-bold text-neon-orange tracking-wide">Home</span>
</a>
<a class="flex flex-col items-center gap-1 px-2 py-1 group" href="#">
<span class="material-symbols-outlined text-stone-500 group-hover:text-stone-300 transition-colors">fitness_center</span>
<span class="text-[9px] font-bold text-stone-500 group-hover:text-stone-300 uppercase tracking-wide">MotionSense</span>
</a>
<a class="flex flex-col items-center gap-1 px-2 py-1 group" href="#">
<span class="material-symbols-outlined text-stone-500 group-hover:text-stone-300 transition-colors">restaurant</span>
<span class="text-[9px] font-bold text-stone-500 group-hover:text-stone-300 uppercase tracking-wide">PlanCalorie</span>
</a>
<a class="flex flex-col items-center gap-1 px-2 py-1 group" href="#">
<span class="material-symbols-outlined text-stone-500 group-hover:text-stone-300 transition-colors">notifications_active</span>
<span class="text-[9px] font-bold text-stone-500 group-hover:text-stone-300 uppercase tracking-wide">Smart Nudge</span>
</a>
<a class="flex flex-col items-center gap-1 px-2 py-1 group relative" href="#">
<div class="absolute -top-3 w-8 h-8 rounded-full bg-neon-orange/10 blur-lg"></div>
<span class="material-symbols-outlined text-white group-hover:text-white transition-colors" style="font-variation-settings: 'FILL' 1;">bedtime</span>
<span class="text-[9px] font-bold text-white uppercase tracking-wide">CircadianSync</span>
</a>
<a class="flex flex-col items-center gap-1 px-2 py-1 group" href="#">
<span class="material-symbols-outlined text-stone-500 group-hover:text-stone-300 transition-colors">self_improvement</span>
<span class="text-[9px] font-bold text-stone-500 group-hover:text-stone-300 uppercase tracking-wide">ZenZone</span>
</a>
</div>
</nav>
</div>

</body></html>