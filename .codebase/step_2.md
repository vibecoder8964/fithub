### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Hear About Us Survey</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f99c06",
                        "primary-hover": "#e08c05",
                        "background-light": "#f8f7f5",
                        "background-dark": "#231b0f",
                        "accent-yellow": "#FFD500",
                        "accent-coral": "#FF6B6B",
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
        /* Custom checkbox styles to hide default and style custom cards */
        .option-checkbox:checked + .option-card {
            border-color: #f99c06;
            background-color: rgba(249, 156, 6, 0.05);
        }
        .option-checkbox:checked + .option-card .check-icon {
            opacity: 1;
            transform: scale(1);
        }
        
        /* Smooth fade for the input field */
        .other-input-container {
            transition: all 0.3s ease-in-out;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-[#181511] antialiased">
<!-- Main Mobile Container -->
<div class="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col bg-white dark:bg-[#1a1610] shadow-xl overflow-x-hidden">
<!-- Header -->
<header class="flex items-center justify-between p-4 pb-2 bg-white dark:bg-[#1a1610]">
<button class="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#181511] dark:text-white">
<span class="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
</button>
<h2 class="text-[#181511] dark:text-white text-base font-bold leading-tight tracking-tight text-center flex-1 pr-10">
                Step 2 of 8
            </h2>
</header>
<!-- Progress Bar -->
<div class="px-4 pb-6 bg-white dark:bg-[#1a1610]">
<div class="h-1.5 w-full rounded-full bg-[#e6e2db] dark:bg-gray-700 overflow-hidden">
<div class="h-full bg-primary rounded-full transition-all duration-500 ease-out" style="width: 22.2%;"></div>
</div>
</div>
<!-- Scrollable Content -->
<main class="flex-1 flex flex-col px-6 pb-24 overflow-y-auto">
<!-- Headline -->
<div class="pb-6">
<h1 class="text-[#181511] dark:text-white text-[32px] font-extrabold leading-[1.2] tracking-tight mb-2">
                    How did you hear about us?
                </h1>
<p class="text-gray-500 dark:text-gray-400 text-base font-medium">
                    Select all that apply.
                </p>
</div>
<!-- Options Grid -->
<div class="grid grid-cols-2 gap-4 mb-6">
<!-- Option: GitHub -->
<label class="relative cursor-pointer group">
<input class="option-checkbox peer sr-only" type="checkbox"/>
<div class="option-card h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25] transition-all duration-200">
<div class="size-14 rounded-full bg-white dark:bg-[#362e25] flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
<!-- GitHub Icon placeholder style -->
<span class="material-symbols-outlined text-[32px] text-gray-800 dark:text-white">code</span>
</div>
<span class="text-[#181511] dark:text-white font-bold text-lg">GitHub</span>
<div class="check-icon absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white opacity-0 transform scale-75 transition-all duration-200">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</div>
</label>
<!-- Option: Reddit -->
<label class="relative cursor-pointer group">
<input class="option-checkbox peer sr-only" type="checkbox"/>
<div class="option-card h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25] transition-all duration-200">
<div class="size-14 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform bg-blue-50 dark:bg-blue-900/20"><span class="material-symbols-outlined text-[32px] text-blue-600">share_reviews</span></div>
<span class="text-[#181511] dark:text-white font-bold text-lg">LinkedIn</span>
<div class="check-icon absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white opacity-0 transform scale-75 transition-all duration-200">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</div>
</label>
<!-- Option: YouTube -->
<label class="relative cursor-pointer group">
<input class="option-checkbox peer sr-only" type="checkbox"/>
<div class="option-card h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25] transition-all duration-200">
<div class="size-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[32px] text-accent-coral">smart_display</span>
</div>
<span class="text-[#181511] dark:text-white font-bold text-lg">YouTube</span>
<div class="check-icon absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white opacity-0 transform scale-75 transition-all duration-200">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</div>
</label>
<!-- Option: Others (Pre-selected for demo) -->
<label class="relative cursor-pointer group">
<input checked="" class="option-checkbox peer sr-only" type="checkbox"/>
<div class="option-card h-full flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-transparent bg-background-light dark:bg-[#2a241d] hover:bg-gray-100 dark:hover:bg-[#362e25] transition-all duration-200">
<div class="size-14 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[32px] text-accent-yellow">more_horiz</span>
</div>
<span class="text-[#181511] dark:text-white font-bold text-lg">Others</span>
<div class="check-icon absolute top-3 right-3 size-6 bg-primary rounded-full flex items-center justify-center text-white opacity-0 transform scale-75 transition-all duration-200">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</div>
</label>
</div>
<!-- Dynamic Input Field (Revealed because 'Others' is checked) -->
<div class="other-input-container animate-fade-in-up">
<label class="block text-sm font-bold text-[#181511] dark:text-white mb-2 ml-1" for="other-source">
                    Where did you hear about us?
                </label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-gray-400">edit</span>
</div>
<input class="block w-full pl-11 pr-4 py-4 rounded-xl border-none bg-background-light dark:bg-[#2a241d] text-[#181511] dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#362e25] transition-all font-medium text-lg" id="other-source" placeholder="e.g. Podcast, Friend..." type="text"/>
</div>
</div>
</main>
<!-- Sticky Footer Action -->
<div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-[#1a1610] dark:via-[#1a1610] pt-12">
<button class="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Continue
                <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
</body></html>