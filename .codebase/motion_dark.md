### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>MotionSense Workout Options</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00",
                        "obsidian": "#050505",
                        "card-dark": "#121212",
                        "neon-green": "#00ff9d",
                        "neon-yellow": "#ffeb3b",
                        "neon-orange": "#ff5722",
                        "neon-coral": "#ff2d55",
                        "neon-purple": "#d500f9",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                    boxShadow: {
                        'neon-green': '0 0 5px #00ff9d, 0 0 10px #00ff9d, inset 0 0 5px #00ff9d',
                        'neon-yellow': '0 0 5px #ffeb3b, 0 0 10px #ffeb3b, inset 0 0 5px #ffeb3b',
                        'neon-orange': '0 0 5px #ff5722, 0 0 10px #ff5722, inset 0 0 5px #ff5722',
                        'neon-coral': '0 0 5px #ff2d55, 0 0 10px #ff2d55, inset 0 0 5px #ff2d55',
                        'neon-purple': '0 0 5px #d500f9, 0 0 10px #d500f9',
                        'glow-border-yellow': '0 0 8px rgba(255, 215, 0, 0.6), inset 0 0 4px rgba(255, 215, 0, 0.4)',
                        'glow-border-orange': '0 0 8px rgba(255, 140, 0, 0.6), inset 0 0 4px rgba(255, 140, 0, 0.4)',
                        'glow-border-purple': '0 0 8px rgba(180, 0, 255, 0.6), inset 0 0 4px rgba(180, 0, 255, 0.4)',
                    }
                },
            },
        }
    </script>
<style>.transition-transform {
            transition-property: transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
        .active-scale:active {
            transform: scale(0.98);
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }#drawer-checkbox:checked ~ .drawer-content {
            transform: translateX(0);
        }
        #drawer-checkbox:checked ~ .drawer-overlay {
            opacity: 1;
            pointer-events: auto;
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
<body class="bg-obsidian font-display text-white transition-colors duration-200">
<input class="hidden" id="drawer-checkbox" type="checkbox"/>
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
<div class="w-full bg-obsidian/95 backdrop-blur-md sticky top-0 z-40 px-4 pt-4 pb-2 border-b border-white/5">
<div class="flex items-center justify-between gap-2 max-w-3xl mx-auto mb-3">
<div class="flex-1 flex flex-col items-center justify-center bg-black/40 border border-yellow-500/50 shadow-glow-border-yellow rounded-full py-1 px-2">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-yellow-400 text-sm fill-1">diamond</span>
<div class="flex flex-col items-start leading-none">
<span class="text-[9px] text-gray-400 uppercase font-bold">Gems</span>
<span class="text-xs font-bold text-white">150</span>
</div>
</div>
</div>
<div class="flex-1 flex flex-col items-center justify-center bg-black/40 border border-orange-500/50 shadow-glow-border-orange rounded-full py-1 px-2">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-orange-500 text-sm fill-1">local_fire_department</span>
<div class="flex flex-col items-start leading-none">
<span class="text-[9px] text-gray-400 uppercase font-bold">Streak</span>
<span class="text-xs font-bold text-white">7</span>
</div>
</div>
</div>
<div class="flex-1 flex flex-col items-center justify-center bg-black/40 border border-purple-500/50 shadow-glow-border-purple rounded-full py-1 px-2">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-purple-500 text-sm fill-1">bolt</span>
<div class="flex flex-col items-start leading-none">
<span class="text-[9px] text-gray-400 uppercase font-bold">XP</span>
<span class="text-xs font-bold text-white">1,200</span>
</div>
</div>
</div>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-4">
<label class="cursor-pointer p-1 rounded-full hover:bg-white/10 transition-colors" for="drawer-checkbox">
<span class="material-symbols-outlined text-white text-[28px]">menu</span>
</label>
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-[0_0_10px_var(--tw-shadow-color)] shadow-primary">M</div>
<h1 class="text-lg font-extrabold tracking-tight text-white drop-shadow-md">MotionSense</h1>
</div>
</div>
<div class="size-10 rounded-full bg-gray-800 overflow-hidden border-2 border-primary/50 shadow-[0_0_8px_var(--tw-shadow-color)] shadow-primary/30">
<img alt="User profile avatar" class="size-full object-cover" data-alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0resAtJuKuWaIjGwRcEuDGt4ZCHt42ghfcI6qaLNoNDuF3fcJh6WSxXqnsPlnPj8GvLpBV_rTnF-fS1VyADdFexJ3PfFPaWJh5vIGnxAd_UA-pv226cH80_7xTAeqBwuH_0e2aNpaL3opmHF4hWH4-eMiCxTkhwVtESO4o0_78NVeXidr6FwaUYy1B-M4y_9HZxyoh77wSumM8oFcKh2oggr7ysouNIUFR7j8aGoL87555v5KbiJkVabzgcOoAGR8j3dpRZtqVGhy"/>
</div>
</div>
</div>
<main class="flex-1 flex flex-col p-4 gap-6 max-w-3xl mx-auto w-full">
<section class="w-full">
<div class="relative overflow-hidden rounded-xl bg-gray-900 border border-white/10 shadow-lg group active-scale transition-transform cursor-pointer">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60" data-alt="Energetic gym workout background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfTVArFB_bANRj8RAT5DxqIN0neFILIp7yzerBd5Of3qt93k9SICombH-YIW1ex2SiXaXmDBn2Is8pi6BRtvKg3EBdkbFhgmjhI0B10RQvDCWrUEnDTx_DzacTNkBXjCVkY-cz8ZVpmHpUeD6jjBtMah6i6u182ad3Pr4xi7J7thEcSR2f75HewQ3wIgAPWoLi0An79I_4SPosMRJB5QH5b6iHOwEab5SKSVbSHfevdepgWfLphub-nAdsU4th5IT5gulzWdmGTOCn');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div class="relative z-10 p-6 flex flex-col justify-end min-h-[220px]">
<div class="mb-2 inline-flex items-center gap-2 self-start rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md">
<span class="material-symbols-outlined text-[16px]">format_quote</span>
                            Daily Inspiration
                        </div>
<p class="text-2xl font-bold leading-tight text-white mb-2 drop-shadow-lg">"The only bad workout is the one that didn't happen."</p>
<p class="text-sm font-medium text-gray-300">Keep pushing forward, Alex.</p>
</div>
</div>
</section>
<section class="py-2">
<h2 class="text-2xl md:text-3xl font-extrabold text-center text-white leading-tight drop-shadow-md">
                    It's time to move!<br/>
<span class="text-primary drop-shadow-[0_0_8px_rgba(255,157,0,0.6)]">What's the plan today?</span>
</h2>
</section>
<section class="grid grid-cols-1 gap-4">
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-black border border-neon-green/50 p-1 shadow-[0_0_15px_-3px_rgba(0,255,157,0.3)] transition-all hover:shadow-[0_0_20px_rgba(0,255,157,0.5)] active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-neon-green drop-shadow-[0_0_5px_rgba(0,255,157,0.8)]">self_improvement</span>
<span class="text-xs font-bold uppercase tracking-wide text-neon-green drop-shadow-[0_0_5px_rgba(0,255,157,0.8)]">Low Intensity</span>
</div>
<h3 class="text-xl font-bold text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Meditation</h3>
<p class="text-sm text-neon-green/80">Mindfulness &amp; Breathing</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Person meditating in nature" class="h-full w-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500 mask-image-linear-to-l mix-blend-luminosity" data-alt="Person meditating in nature" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPtBtGESohmK94mTF4mQiJHAisVYJTMWiumD5bCcZby1tR4LNSbuMTY0JJviCPR0znVFNm2IT4nLobyMp_Q4NrNw6dTVC32zcJC6HSstIFuTy4_r9dBVMUxfNAb7HbXQNS-3UkbuotCDi67nV7oUov4Y7ZyKho5859peXcuKhdsTZQpuHAQ9cqVdOaeqMU5_Vmo1x3k2lKKC3awEFiB1uGQYU6nVGIT38MMbDLWYG2TzO-gzOt4TNsmSSmZqHBf_qqNQOQ3TBHDxCP" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-neon-green/10 border border-neon-green/30 p-2 group-hover:bg-neon-green/20 transition-colors">
<span class="material-symbols-outlined text-neon-green">arrow_forward</span>
</div>
</div>
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-black border border-neon-yellow/50 p-1 shadow-[0_0_15px_-3px_rgba(255,235,59,0.3)] transition-all hover:shadow-[0_0_20px_rgba(255,235,59,0.5)] active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-neon-yellow drop-shadow-[0_0_5px_rgba(255,235,59,0.8)]">directions_run</span>
<span class="text-xs font-bold uppercase tracking-wide text-neon-yellow drop-shadow-[0_0_5px_rgba(255,235,59,0.8)]">Medium Intensity</span>
</div>
<h3 class="text-xl font-bold text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Cardio</h3>
<p class="text-sm text-neon-yellow/80">Running &amp; Cycling</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Person running on a track" class="h-full w-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500 mix-blend-luminosity" data-alt="Person running on a track" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiHwu4rVazy0_60gaQkAKVTVlkp1Ka8UhAC_RkiRQNourrPzNN4haTQS_HVvcj1HkQXyNyOR_7B8f3cyMlKJ9gtg81vxIWXpZTVDKIdhyb6-l0AQSjwI_T7xVW7JN_GrxpM7arpmtHWQG6B6z9GYw99aj1p2LrdublVWKwNd3vscrBqqbkFaG3BHqfrULrpaIebToaVsmu-TtgZzuHq-UPEPXBozyvKJZpfTZ-9g2bIhZDgiqHClfmAap_0iPuXqEMdO8bhbaC2W2r" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-neon-yellow/10 border border-neon-yellow/30 p-2 group-hover:bg-neon-yellow/20 transition-colors">
<span class="material-symbols-outlined text-neon-yellow">arrow_forward</span>
</div>
</div>
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-black border border-neon-orange/50 p-1 shadow-[0_0_15px_-3px_rgba(255,87,34,0.3)] transition-all hover:shadow-[0_0_20px_rgba(255,87,34,0.5)] active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-neon-orange drop-shadow-[0_0_5px_rgba(255,87,34,0.8)]">fitness_center</span>
<span class="text-xs font-bold uppercase tracking-wide text-neon-orange drop-shadow-[0_0_5px_rgba(255,87,34,0.8)]">Med-High Intensity</span>
</div>
<h3 class="text-xl font-bold text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Calisthenics</h3>
<p class="text-sm text-neon-orange/80">Bodyweight Strength</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Man doing pullups" class="h-full w-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500 mix-blend-luminosity" data-alt="Man doing pullups" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBTi99savL9w45aYt0douYm3RZJtl9K9DZl0xF09TvZk1v1cYqWOB04ePNfuo0J4TB3LG8I1HC_0iuAoC5ON3Q_8FvfvGQivbXlDtX79QbrLLiLeAzEEJyPFLhAYAZzG1Bh9V5p-VEZ1IFApvuZEmgvE0ongzViqKLw3OaxHVNKt_rZqdoPy3UdHdAnXDoQI9i-Cl-48cdBifynFP8iMqQj2_-SR25JHKH-CEUAHp_vw-5wci80BCvZqhayA2v-jvleui_kpgS8Yc" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-neon-orange/10 border border-neon-orange/30 p-2 group-hover:bg-neon-orange/20 transition-colors">
<span class="material-symbols-outlined text-neon-orange">arrow_forward</span>
</div>
</div>
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-black border border-neon-coral/50 p-1 shadow-[0_0_15px_-3px_rgba(255,45,85,0.3)] transition-all hover:shadow-[0_0_20px_rgba(255,45,85,0.5)] active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-neon-coral drop-shadow-[0_0_5px_rgba(255,45,85,0.8)]">monitor_weight</span>
<span class="text-xs font-bold uppercase tracking-wide text-neon-coral drop-shadow-[0_0_5px_rgba(255,45,85,0.8)]">High Intensity</span>
</div>
<h3 class="text-xl font-bold text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Gym</h3>
<p class="text-sm text-neon-coral/80">Heavy Lifting &amp; Machines</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Dumbbells and weights in gym" class="h-full w-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500 mix-blend-luminosity" data-alt="Dumbbells and weights in gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0rJ2Hjx99WPMQEktWXIUofpdzgNEEd42wmSP-9zrNu52H8gisujFpIbImHU9tO-yiN6xrzQfqFPD8CBbV9GfJRjIRoavCpybPL0V2hGR91q0cBdX5Jg9n-piUdNWinI-hZgpYekg3CxZFqqnRt8lPrDbjh2CUmMwcEp28-gF-uiNUTmMzCBvr-IgQiWq50-LHR4MP8J3Ee0gZxQp-f_mmB3aVljfEMcA32oyNdRegrsOgkW1X0ajMWcve_Git3GIzdPcTOZiS-GMm" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-neon-coral/10 border border-neon-coral/30 p-2 group-hover:bg-neon-coral/20 transition-colors">
<span class="material-symbols-outlined text-neon-coral">arrow_forward</span>
</div>
</div>
</section>
</main>
<div class="fixed bottom-0 left-0 right-0 bg-obsidian border-t border-white/10 px-6 py-3 flex justify-between items-center z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-primary text-[28px] drop-shadow-[0_0_8px_rgba(255,157,0,0.6)]">home</span>
<span class="text-[10px] font-bold text-primary tracking-wide">Home</span>
</a>
<a class="flex flex-col items-center gap-1 group opacity-60 hover:opacity-100 transition-opacity" href="#">
<span class="material-symbols-outlined text-gray-400 text-[26px]">fitness_center</span>
<span class="text-[10px] font-medium text-gray-400">MotionSense</span>
</a>
<a class="flex flex-col items-center gap-1 group opacity-60 hover:opacity-100 transition-opacity" href="#">
<span class="material-symbols-outlined text-gray-400 text-[26px]">restaurant</span>
<span class="text-[10px] font-medium text-gray-400">PlanCalorie</span>
</a>
<a class="flex flex-col items-center gap-1 group opacity-60 hover:opacity-100 transition-opacity" href="#">
<span class="material-symbols-outlined text-gray-400 text-[26px]">notifications</span>
<span class="text-[10px] font-medium text-gray-400">Nudge</span>
</a>
<a class="flex flex-col items-center gap-1 group opacity-60 hover:opacity-100 transition-opacity" href="#">
<span class="material-symbols-outlined text-gray-400 text-[26px]">bedtime</span>
<span class="text-[10px] font-medium text-gray-400">ZenZone</span>
</a>
</div>
<label class="drawer-overlay fixed inset-0 z-50 bg-black/80 opacity-0 pointer-events-none transition-opacity duration-300 backdrop-blur-sm" for="drawer-checkbox"></label>
<aside class="drawer-content fixed left-0 top-0 z-[60] h-screen w-4/5 max-w-[300px] -translate-x-full bg-[#0a0a0a] border-r border-white/10 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col">
<div class="p-6 pb-2">
<div class="flex items-center justify-between mb-6">
<h2 class="text-2xl font-bold text-white">Menu</h2>
<label class="cursor-pointer rounded-full p-1 hover:bg-white/10" for="drawer-checkbox">
<span class="material-symbols-outlined text-white">close</span>
</label>
</div>
<div class="flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 p-3 mb-4">
<img alt="User" class="size-10 rounded-full object-cover" data-alt="User profile avatar small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs9F4oJE0lhpUaDzw6KSbPx-s7zCsSURGPUQiZpci8m4eTRkDb7n4QVnd3N6Uyw5YjtlQFKDCAoBpsbPz8iN_dS9sse9CV5TvoHEXAo9j9su6Gc-qtWDBDD0XFPpUgla-mhSSDmFKOm2WIrK7-sq-Q3rEh3U9Yzuob4tSYrrI-XrxYskN0T2_TAtpiv00snRCV2w3zkRGwh2VlRAwtEOfJ3Hdgvsd0njb5DUzR3BNby2siiGz0l7Hth8IecL5hzlZCTsl2_p8d3623"/>
<div>
<p class="text-sm font-bold text-white">Alex Johnson</p>
<p class="text-xs text-gray-400">Pro Member</p>
</div>
</div>
</div>
<nav class="flex-1 overflow-y-auto px-4">
<ul class="flex flex-col gap-2">
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-gray-300 hover:bg-white/5 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">home</span>
<span class="text-base font-semibold">Home</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 bg-primary/10 text-primary border border-primary/20 font-bold shadow-[0_0_10px_rgba(255,157,0,0.15)]" href="#">
<span class="material-symbols-outlined fill-current">fitness_center</span>
<span class="text-base">Workouts</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-gray-300 hover:bg-white/5 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">history</span>
<span class="text-base font-semibold">History</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-gray-300 hover:bg-white/5 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-base font-semibold">Stats</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-gray-300 hover:bg-white/5 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-base font-semibold">Settings</span>
</a>
</li>
</ul>
</nav>
<div class="p-6 border-t border-white/10">
<button class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 hover:bg-red-900/10 transition-colors">
<span class="material-symbols-outlined">logout</span>
<span class="font-bold">Log Out</span>
</button>
</div>
</aside>
</div>

</body></html>