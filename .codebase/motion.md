### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>MotionSense Workout Options</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Google Fonts: Manrope -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
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
                        "text-dark": "#181510",
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
        /* Smooth transition for hover effects */
        .transition-transform {
            transition-property: transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
        
        .active-scale:active {
            transform: scale(0.98);
        }

        /* Hide scrollbar for cleaner look */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Simulate Sidebar Drawer mechanics (visual only for this static file) */
        #drawer-checkbox:checked ~ .drawer-content {
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
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-text-dark dark:text-white transition-colors duration-200">
<!-- Hidden Checkbox for Drawer Logic -->
<input class="hidden" id="drawer-checkbox" type="checkbox"/>
<!-- Main Content Wrapper -->
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top App Bar -->
<header class="sticky top-0 z-30 flex items-center justify-between bg-white/90 dark:bg-[#1a1610]/90 backdrop-blur-md px-4 py-3 shadow-sm">
<div class="flex items-center gap-4">
<label class="cursor-pointer p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" for="drawer-checkbox">
<span class="material-symbols-outlined text-text-dark dark:text-white text-[28px]">menu</span>
</label>
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">M</div>
<h1 class="text-lg font-extrabold tracking-tight text-text-dark dark:text-white">MotionSense</h1>
</div>
</div>
<div class="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-primary/20">
<img alt="User profile avatar" class="size-full object-cover" data-alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0resAtJuKuWaIjGwRcEuDGt4ZCHt42ghfcI6qaLNoNDuF3fcJh6WSxXqnsPlnPj8GvLpBV_rTnF-fS1VyADdFexJ3PfFPaWJh5vIGnxAd_UA-pv226cH80_7xTAeqBwuH_0e2aNpaL3opmHF4hWH4-eMiCxTkhwVtESO4o0_78NVeXidr6FwaUYy1B-M4y_9HZxyoh77wSumM8oFcKh2oggr7ysouNIUFR7j8aGoL87555v5KbiJkVabzgcOoAGR8j3dpRZtqVGhy"/>
</div>
</header>
<!-- Main Scrollable Area -->
<main class="flex-1 flex flex-col p-4 gap-6 max-w-3xl mx-auto w-full">
<!-- Hero / Daily Quote Card -->
<section class="w-full">
<div class="relative overflow-hidden rounded-xl bg-gray-900 shadow-lg group active-scale transition-transform cursor-pointer">
<!-- Background Image with Overlay -->
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Energetic gym workout background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfTVArFB_bANRj8RAT5DxqIN0neFILIp7yzerBd5Of3qt93k9SICombH-YIW1ex2SiXaXmDBn2Is8pi6BRtvKg3EBdkbFhgmjhI0B10RQvDCWrUEnDTx_DzacTNkBXjCVkY-cz8ZVpmHpUeD6jjBtMah6i6u182ad3Pr4xi7J7thEcSR2f75HewQ3wIgAPWoLi0An79I_4SPosMRJB5QH5b6iHOwEab5SKSVbSHfevdepgWfLphub-nAdsU4th5IT5gulzWdmGTOCn');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
<!-- Content -->
<div class="relative z-10 p-6 flex flex-col justify-end min-h-[220px]">
<div class="mb-2 inline-flex items-center gap-2 self-start rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm">
<span class="material-symbols-outlined text-[16px]">format_quote</span>
                            Daily Inspiration
                        </div>
<p class="text-2xl font-bold leading-tight text-white mb-2">"The only bad workout is the one that didn't happen."</p>
<p class="text-sm font-medium text-gray-300">Keep pushing forward, Alex.</p>
</div>
</div>
</section>
<!-- Headline Text -->
<section class="py-2">
<h2 class="text-2xl md:text-3xl font-extrabold text-center text-text-dark dark:text-white leading-tight">
                    It's time to move!<br/>
<span class="text-primary">What's the plan today?</span>
</h2>
</section>
<!-- Workout Options Grid -->
<section class="grid grid-cols-1 gap-4 pb-20">
<!-- Option 1: Meditation (Low Intensity) -->
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-[#E0F2F1] dark:bg-[#1a3835] p-1 shadow-sm transition-all hover:shadow-md active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-[#00695C] dark:text-[#4DB6AC]">self_improvement</span>
<span class="text-xs font-bold uppercase tracking-wide text-[#00695C] dark:text-[#4DB6AC]">Low Intensity</span>
</div>
<h3 class="text-xl font-bold text-[#004D40] dark:text-[#E0F2F1]">Meditation</h3>
<p class="text-sm text-[#00695C]/80 dark:text-[#80CBC4]">Mindfulness &amp; Breathing</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Person meditating in nature" class="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500 mask-image-linear-to-l" data-alt="Person meditating in nature" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPtBtGESohmK94mTF4mQiJHAisVYJTMWiumD5bCcZby1tR4LNSbuMTY0JJviCPR0znVFNm2IT4nLobyMp_Q4NrNw6dTVC32zcJC6HSstIFuTy4_r9dBVMUxfNAb7HbXQNS-3UkbuotCDi67nV7oUov4Y7ZyKho5859peXcuKhdsTZQpuHAQ9cqVdOaeqMU5_Vmo1x3k2lKKC3awEFiB1uGQYU6nVGIT38MMbDLWYG2TzO-gzOt4TNsmSSmZqHBf_qqNQOQ3TBHDxCP" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-white/50 dark:bg-black/20 p-2">
<span class="material-symbols-outlined text-[#004D40] dark:text-[#E0F2F1]">arrow_forward</span>
</div>
</div>
<!-- Option 2: Cardio (Medium Intensity) -->
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-[#FFF9C4] dark:bg-[#4a4208] p-1 shadow-sm transition-all hover:shadow-md active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-[#8c7b00] dark:text-[#FFF59D]">directions_run</span>
<span class="text-xs font-bold uppercase tracking-wide text-[#8c7b00] dark:text-[#FFF59D]">Medium Intensity</span>
</div>
<h3 class="text-xl font-bold text-[#5e4b06] dark:text-[#FFF9C4]">Cardio</h3>
<p class="text-sm text-[#8c7b00] dark:text-[#FFF59D]/80">Running &amp; Cycling</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Person running on a track" class="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" data-alt="Person running on a track" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiHwu4rVazy0_60gaQkAKVTVlkp1Ka8UhAC_RkiRQNourrPzNN4haTQS_HVvcj1HkQXyNyOR_7B8f3cyMlKJ9gtg81vxIWXpZTVDKIdhyb6-l0AQSjwI_T7xVW7JN_GrxpM7arpmtHWQG6B6z9GYw99aj1p2LrdublVWKwNd3vscrBqqbkFaG3BHqfrULrpaIebToaVsmu-TtgZzuHq-UPEPXBozyvKJZpfTZ-9g2bIhZDgiqHClfmAap_0iPuXqEMdO8bhbaC2W2r" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-white/50 dark:bg-black/20 p-2">
<span class="material-symbols-outlined text-[#5e4b06] dark:text-[#FFF9C4]">arrow_forward</span>
</div>
</div>
<!-- Option 3: Calisthenics (Med-High Intensity) -->
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-primary dark:bg-[#b36e00] p-1 shadow-sm transition-all hover:shadow-md active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-white">fitness_center</span>
<span class="text-xs font-bold uppercase tracking-wide text-white/90">Med-High Intensity</span>
</div>
<h3 class="text-xl font-bold text-white">Calisthenics</h3>
<p class="text-sm text-white/90">Bodyweight Strength</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Man doing pullups" class="h-full w-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-500" data-alt="Man doing pullups" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBTi99savL9w45aYt0douYm3RZJtl9K9DZl0xF09TvZk1v1cYqWOB04ePNfuo0J4TB3LG8I1HC_0iuAoC5ON3Q_8FvfvGQivbXlDtX79QbrLLiLeAzEEJyPFLhAYAZzG1Bh9V5p-VEZ1IFApvuZEmgvE0ongzViqKLw3OaxHVNKt_rZqdoPy3UdHdAnXDoQI9i-Cl-48cdBifynFP8iMqQj2_-SR25JHKH-CEUAHp_vw-5wci80BCvZqhayA2v-jvleui_kpgS8Yc" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-white/20 p-2">
<span class="material-symbols-outlined text-white">arrow_forward</span>
</div>
</div>
<!-- Option 4: Gym (High Intensity) -->
<div class="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-[#FF6F61] dark:bg-[#9e2a1f] p-1 shadow-sm transition-all hover:shadow-md active-scale cursor-pointer">
<div class="flex flex-1 flex-col gap-1 p-5 z-10">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-white">monitor_weight</span>
<span class="text-xs font-bold uppercase tracking-wide text-white/90">High Intensity</span>
</div>
<h3 class="text-xl font-bold text-white">Gym</h3>
<p class="text-sm text-white/90">Heavy Lifting &amp; Machines</p>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4">
<img alt="Dumbbells and weights in gym" class="h-full w-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-500" data-alt="Dumbbells and weights in gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0rJ2Hjx99WPMQEktWXIUofpdzgNEEd42wmSP-9zrNu52H8gisujFpIbImHU9tO-yiN6xrzQfqFPD8CBbV9GfJRjIRoavCpybPL0V2hGR91q0cBdX5Jg9n-piUdNWinI-hZgpYekg3CxZFqqnRt8lPrDbjh2CUmMwcEp28-gF-uiNUTmMzCBvr-IgQiWq50-LHR4MP8J3Ee0gZxQp-f_mmB3aVljfEMcA32oyNdRegrsOgkW1X0ajMWcve_Git3GIzdPcTOZiS-GMm" style="mask-image: linear-gradient(to right, transparent, black 20%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%);"/>
</div>
<div class="z-10 mr-4 rounded-full bg-white/20 p-2">
<span class="material-symbols-outlined text-white">arrow_forward</span>
</div>
</div>
</section>
</main>
<!-- Navigation Drawer Overlay -->
<label class="drawer-overlay fixed inset-0 z-40 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300" for="drawer-checkbox"></label>
<!-- Navigation Drawer Content -->
<aside class="drawer-content fixed left-0 top-0 z-50 h-screen w-4/5 max-w-[300px] -translate-x-full bg-white dark:bg-[#141414] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col">
<!-- Drawer Header -->
<div class="p-6 pb-2">
<div class="flex items-center justify-between mb-6">
<h2 class="text-2xl font-bold text-text-dark dark:text-white">Menu</h2>
<label class="cursor-pointer rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800" for="drawer-checkbox">
<span class="material-symbols-outlined text-text-dark dark:text-white">close</span>
</label>
</div>
<!-- Profile Snippet -->
<div class="flex items-center gap-3 rounded-xl bg-background-light dark:bg-[#1f1f1f] p-3 mb-4">
<img alt="User" class="size-10 rounded-full object-cover" data-alt="User profile avatar small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs9F4oJE0lhpUaDzw6KSbPx-s7zCsSURGPUQiZpci8m4eTRkDb7n4QVnd3N6Uyw5YjtlQFKDCAoBpsbPz8iN_dS9sse9CV5TvoHEXAo9j9su6Gc-qtWDBDD0XFPpUgla-mhSSDmFKOm2WIrK7-sq-Q3rEh3U9Yzuob4tSYrrI-XrxYskN0T2_TAtpiv00snRCV2w3zkRGwh2VlRAwtEOfJ3Hdgvsd0njb5DUzR3BNby2siiGz0l7Hth8IecL5hzlZCTsl2_p8d3623"/>
<div>
<p class="text-sm font-bold text-text-dark dark:text-white">Alex Johnson</p>
<p class="text-xs text-gray-500 dark:text-gray-400">Pro Member</p>
</div>
</div>
</div>
<!-- Drawer Links -->
<nav class="flex-1 overflow-y-auto px-4">
<ul class="flex flex-col gap-2">
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-colors" href="#">
<span class="material-symbols-outlined">home</span>
<span class="text-base font-semibold">Home</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 bg-primary/10 text-primary font-bold" href="#">
<span class="material-symbols-outlined fill-current">fitness_center</span>
<span class="text-base">Workouts</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-colors" href="#">
<span class="material-symbols-outlined">history</span>
<span class="text-base font-semibold">History</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-colors" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-base font-semibold">Stats</span>
</a>
</li>
<li>
<a class="flex h-12 items-center gap-4 rounded-xl px-4 text-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-base font-semibold">Settings</span>
</a>
</li>
</ul>
</nav>
<!-- Drawer Footer -->
<div class="p-6 border-t border-gray-100 dark:border-gray-800">
<button class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
<span class="material-symbols-outlined">logout</span>
<span class="font-bold">Log Out</span>
</button>
</div>
</aside>
</div>
</body></html>