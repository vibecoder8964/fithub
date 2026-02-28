### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Goal Selection Onboarding</title>
<!-- Google Fonts: Manrope -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f99c06",
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
        /* Custom scrollbar hiding for cleaner mobile look if needed */
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
</head>
<body class="bg-background-light dark:bg-background-dark text-[#181511] dark:text-white font-display">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
<!-- Header / Progress -->
<div class="flex w-full flex-col justify-center gap-4 pt-8 pb-4 px-6">
<!-- Page Indicators -->
<div class="w-full flex flex-col gap-4">
<div class="flex items-center justify-center relative w-full">
<button class="absolute left-0 p-1" onclick="window.history.back()">
<span class="material-symbols-outlined text-[#181511] dark:text-white text-2xl font-bold">chevron_left</span>
</button>
<span class="text-[#181511] dark:text-white text-base font-bold">Step 3 of 8</span>
</div>
<div class="w-full h-1.5 bg-[#e6e2db] dark:bg-white/20 rounded-full overflow-hidden">
<div class="h-full bg-[#FF9E00] rounded-full shadow-[0_0_10px_rgba(255,158,0,0.4)]" style="width: 33.33%;"></div>
</div>
</div>
<!-- Headline -->
<div class="text-center">
<h1 class="text-[#181511] dark:text-white tracking-tight text-[28px] md:text-[32px] font-extrabold leading-tight">
                    What is your goal of downloading this app?
                </h1>
<p class="text-[#8c7b5f] dark:text-gray-400 text-sm font-medium mt-2">
                    Select all that apply
                </p>
</div>
</div>
<!-- Main Content: Goals Grid -->
<div class="flex-1 overflow-y-auto px-4 pb-24">
<div class="grid grid-cols-2 gap-4 py-4">
<!-- Card 1: Healthy lifestyle (Selected State) -->
<div class="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 border-primary bg-primary/10 cursor-pointer transition-all duration-200 active:scale-95 hover:bg-primary/15">
<div class="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-white text-[14px] font-bold">check</span>
</div>
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined text-[28px]">ecg_heart</span>
</div>
<div class="text-center">
<p class="text-[#181511] dark:text-white text-base font-bold leading-normal">Healthy lifestyle</p>
</div>
</div>
<!-- Card 2: Lose weight -->
<div class="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 border-transparent bg-white dark:bg-[#2e251a] shadow-sm cursor-pointer transition-all duration-200 active:scale-95 hover:shadow-md">
<div class="absolute top-3 right-3 h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent"></div>
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f2f0] dark:bg-white/10 text-[#181511] dark:text-white">
<span class="material-symbols-outlined text-[28px]">monitor_weight</span>
</div>
<div class="text-center">
<p class="text-[#181511] dark:text-white text-base font-semibold leading-normal">Lose weight</p>
</div>
</div>
<!-- Card 3: Fit body -->
<div class="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 border-transparent bg-white dark:bg-[#2e251a] shadow-sm cursor-pointer transition-all duration-200 active:scale-95 hover:shadow-md">
<div class="absolute top-3 right-3 h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent"></div>
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f2f0] dark:bg-white/10 text-[#181511] dark:text-white">
<span class="material-symbols-outlined text-[28px]">fitness_center</span>
</div>
<div class="text-center">
<p class="text-[#181511] dark:text-white text-base font-semibold leading-normal">Fit body</p>
</div>
</div>
<!-- Card 4: Motivation (Selected State) -->
<div class="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 border-primary bg-primary/10 cursor-pointer transition-all duration-200 active:scale-95 hover:bg-primary/15">
<div class="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-white text-[14px] font-bold">check</span>
</div>
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
<span class="material-symbols-outlined text-[28px]">bolt</span>
</div>
<div class="text-center">
<p class="text-[#181511] dark:text-white text-base font-bold leading-normal">Motivation</p>
</div>
</div>
<!-- Card 5: Productive lifestyle -->
<div class="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 border-transparent bg-white dark:bg-[#2e251a] shadow-sm cursor-pointer transition-all duration-200 active:scale-95 hover:shadow-md">
<div class="absolute top-3 right-3 h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent"></div>
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f2f0] dark:bg-white/10 text-[#181511] dark:text-white">
<span class="material-symbols-outlined text-[28px]">schedule</span>
</div>
<div class="text-center">
<p class="text-[#181511] dark:text-white text-base font-semibold leading-normal">Productive lifestyle</p>
</div>
</div>
<!-- Card 6: Happier life -->
<div class="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 border-transparent bg-white dark:bg-[#2e251a] shadow-sm cursor-pointer transition-all duration-200 active:scale-95 hover:shadow-md">
<div class="absolute top-3 right-3 h-5 w-5 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent"></div>
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f2f0] dark:bg-white/10 text-[#181511] dark:text-white">
<span class="material-symbols-outlined text-[28px]">sentiment_satisfied</span>
</div>
<div class="text-center">
<p class="text-[#181511] dark:text-white text-base font-semibold leading-normal">Happier life</p>
</div>
</div>
</div>
</div>
<!-- Sticky Footer -->
<div class="absolute bottom-0 left-0 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-t border-gray-100 dark:border-white/5">
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg hover:bg-primary/90 transition-colors active:scale-[0.98]">
<span class="truncate">Continue</span>
</button>
</div>
</div>
</body></html>