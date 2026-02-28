### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SnapCalorie Meal Planner</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "2xl": "2rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .icon-filled {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Hide scrollbar for clean UI */
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-[#181510] dark:text-white overflow-x-hidden antialiased selection:bg-primary/30">
<div class="relative flex h-full min-h-screen w-full flex-col pb-24">
<!-- Header -->
<header class="sticky top-0 z-20 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 px-4 py-3 backdrop-blur-md">
<div class="flex items-center gap-3">
<div class="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
<img alt="User profile portrait of a smiling woman" class="h-full w-full object-cover" data-alt="User profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALzoPCypH0p6BbZ6nigpthGNUvfknFoyc6CCm-S_L4lJTjrTyReWGc_wbqZ77izindpxNWl_pN6N0ivDv48Nmm6ToykbQPlCNtEL-9WuXejvz-NdL6V7hwgmN46UN9Ffiz8RlORlVKje7a8Bhal-qQOu3cijb5jd_lEYgBV9yBQes6gZLlPylKz1CI1pewM6pUgwKc7wXl9-6OT3vUnhziZja5cl_hJOoOvbrARvwx9Tchcoaa96nNVmLf1xvF23FzeG86Efw_nPL0"/>
</div>
<h1 class="text-lg font-bold leading-tight tracking-tight">SnapCalorie</h1>
</div>
<button class="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#32281a] shadow-sm hover:bg-gray-50 dark:hover:bg-[#3d3122] transition-colors">
<span class="material-symbols-outlined text-[#181510] dark:text-white">notifications</span>
</button>
</header>
<!-- Main Scrollable Content -->
<main class="flex-1 px-4 pt-2">
<!-- Headline -->
<div class="mb-6">
<h2 class="text-3xl font-extrabold leading-tight tracking-tight text-[#181510] dark:text-white">
                    What's the <span class="text-primary">plan?</span>
</h2>
<p class="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">Track your calories and stay healthy.</p>
</div>
<!-- Section 1: Meal Source -->
<section class="mb-8">
<div class="mb-3 flex items-center justify-between">
<h3 class="text-base font-bold text-[#181510] dark:text-white">Source</h3>
</div>
<div class="grid grid-cols-2 gap-4">
<!-- Home Cook -->
<label class="group relative cursor-pointer">
<input checked="" class="peer sr-only" name="source" type="radio" value="home"/>
<div class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white dark:bg-[#2d2418] p-5 shadow-sm ring-2 ring-transparent transition-all duration-200 peer-checked:bg-primary/10 peer-checked:ring-primary">
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-[#3d3122] text-gray-500 dark:text-gray-400 transition-colors group-hover:bg-primary/20 group-hover:text-primary peer-checked:bg-primary peer-checked:text-white">
<span class="material-symbols-outlined icon-filled">skillet</span>
</div>
<span class="text-sm font-bold text-gray-700 dark:text-gray-200 peer-checked:text-primary">Home Cook</span>
</div>
</label>
<!-- Buy Outside -->
<label class="group relative cursor-pointer">
<input class="peer sr-only" name="source" type="radio" value="outside"/>
<div class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white dark:bg-[#2d2418] p-5 shadow-sm ring-2 ring-transparent transition-all duration-200 peer-checked:bg-primary/10 peer-checked:ring-primary">
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-[#3d3122] text-gray-500 dark:text-gray-400 transition-colors group-hover:bg-primary/20 group-hover:text-primary peer-checked:bg-primary peer-checked:text-white">
<span class="material-symbols-outlined icon-filled">storefront</span>
</div>
<span class="text-sm font-bold text-gray-700 dark:text-gray-200 peer-checked:text-primary">Buy Outside</span>
</div>
</label>
</div>
</section>
<!-- Section 2: Budget -->
<section class="mb-8">
<div class="mb-3 flex items-center justify-between">
<h3 class="text-base font-bold text-[#181510] dark:text-white">Budget</h3>
</div>
<div class="flex gap-3">
<!-- Currency Dropdown -->
<div class="relative shrink-0">
<select class="appearance-none h-12 rounded-xl bg-white dark:bg-[#2d2418] pl-4 pr-10 text-sm font-bold text-[#181510] dark:text-white shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
<option>USD</option>
<option>EUR</option>
<option>GBP</option>
<option>JPY</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<span class="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<!-- Price Tiers -->
<div class="flex flex-1 rounded-xl bg-gray-200/50 dark:bg-[#2d2418] p-1 shadow-inner">
<label class="flex-1 cursor-pointer">
<input class="peer sr-only" name="budget" type="radio" value="1"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-500 transition-all peer-checked:bg-white peer-checked:text-[#181510] peer-checked:shadow-sm dark:text-gray-400 dark:peer-checked:bg-[#3d3122] dark:peer-checked:text-white">$</span>
</label>
<label class="flex-1 cursor-pointer">
<input checked="" class="peer sr-only" name="budget" type="radio" value="2"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-500 transition-all peer-checked:bg-white peer-checked:text-[#181510] peer-checked:shadow-sm dark:text-gray-400 dark:peer-checked:bg-[#3d3122] dark:peer-checked:text-white">$$</span>
</label>
<label class="flex-1 cursor-pointer">
<input class="peer sr-only" name="budget" type="radio" value="3"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-500 transition-all peer-checked:bg-white peer-checked:text-[#181510] peer-checked:shadow-sm dark:text-gray-400 dark:peer-checked:bg-[#3d3122] dark:peer-checked:text-white">$$$</span>
</label>
<label class="flex-1 cursor-pointer">
<input class="peer sr-only" name="budget" type="radio" value="4"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-500 transition-all peer-checked:bg-white peer-checked:text-[#181510] peer-checked:shadow-sm dark:text-gray-400 dark:peer-checked:bg-[#3d3122] dark:peer-checked:text-white">$$$$</span>
</label>
</div>
</div>
</section>
<!-- Section 3: Meal Preference -->
<section class="mb-4">
<div class="mb-3 flex items-center justify-between">
<h3 class="text-base font-bold text-[#181510] dark:text-white">Preference</h3>
</div>
<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
<!-- Heavy -->
<label class="cursor-pointer">
<input class="peer sr-only" name="pref" type="checkbox" value="heavy"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-white dark:bg-[#2d2418] p-4 shadow-sm ring-2 ring-transparent transition-all peer-checked:ring-primary peer-checked:bg-primary/5">
<span class="material-symbols-outlined text-2xl text-gray-400 dark:text-gray-500 peer-checked:text-primary">lunch_dining</span>
<span class="text-sm font-bold text-gray-700 dark:text-gray-200">Heavy</span>
</div>
</label>
<!-- Western -->
<label class="cursor-pointer">
<input checked="" class="peer sr-only" name="pref" type="checkbox" value="western"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-white dark:bg-[#2d2418] p-4 shadow-sm ring-2 ring-transparent transition-all peer-checked:ring-primary peer-checked:bg-primary/5">
<span class="material-symbols-outlined text-2xl text-gray-400 dark:text-gray-500 peer-checked:text-primary">local_pizza</span>
<span class="text-sm font-bold text-gray-700 dark:text-gray-200">Western</span>
</div>
</label>
<!-- Light -->
<label class="cursor-pointer">
<input class="peer sr-only" name="pref" type="checkbox" value="light"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-white dark:bg-[#2d2418] p-4 shadow-sm ring-2 ring-transparent transition-all peer-checked:ring-primary peer-checked:bg-primary/5">
<span class="material-symbols-outlined text-2xl text-gray-400 dark:text-gray-500 peer-checked:text-primary">eco</span>
<span class="text-sm font-bold text-gray-700 dark:text-gray-200">Light</span>
</div>
</label>
<!-- Medium -->
<label class="cursor-pointer">
<input class="peer sr-only" name="pref" type="checkbox" value="medium"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-white dark:bg-[#2d2418] p-4 shadow-sm ring-2 ring-transparent transition-all peer-checked:ring-primary peer-checked:bg-primary/5">
<span class="material-symbols-outlined text-2xl text-gray-400 dark:text-gray-500 peer-checked:text-primary">rice_bowl</span>
<span class="text-sm font-bold text-gray-700 dark:text-gray-200">Medium</span>
</div>
</label>
</div>
</section>
</main>
<!-- Floating Action Area -->
<div class="sticky bottom-20 z-10 px-4 pb-4">
<div class="flex items-stretch gap-3">
<button class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform">
<span>Plan Meal</span>
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<button class="flex aspect-square h-14 w-14 items-center justify-center rounded-2xl bg-[#181510] text-white shadow-lg shadow-black/10 active:scale-[0.95] transition-transform dark:bg-white dark:text-[#181510]">
<span class="material-symbols-outlined">photo_camera</span>
</button>
</div>
</div>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-gray-100 bg-white/95 backdrop-blur-sm pb-safe pt-3 dark:border-gray-800 dark:bg-[#231b0f]/95" style="padding-bottom: env(safe-area-inset-bottom, 20px);">
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined icon-filled text-2xl text-primary transition-colors">home</span>
<span class="text-[10px] font-bold text-primary">Home</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined text-2xl text-gray-400 transition-colors group-hover:text-primary dark:text-gray-500">search</span>
<span class="text-[10px] font-medium text-gray-400 group-hover:text-primary dark:text-gray-500">Explore</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined text-2xl text-gray-400 transition-colors group-hover:text-primary dark:text-gray-500">bar_chart</span>
<span class="text-[10px] font-medium text-gray-400 group-hover:text-primary dark:text-gray-500">Stats</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined text-2xl text-gray-400 transition-colors group-hover:text-primary dark:text-gray-500">person</span>
<span class="text-[10px] font-medium text-gray-400 group-hover:text-primary dark:text-gray-500">Profile</span>
</a>
</nav>
</div>
</body></html>