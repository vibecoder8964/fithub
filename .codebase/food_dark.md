### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Neon Dark SnapCalorie Planner</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00", // Keep primary orange
                        "neon-orange": "#ffaa00",
                        "neon-purple": "#a855f7",
                        "neon-blue": "#3b82f6",
                        "background-dark": "#050505", // Deep obsidian black
                        "surface-dark": "#121212",
                        "surface-light": "rgba(255, 255, 255, 0.08)",
                        "border-glow": "rgba(255, 157, 0, 0.5)",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    boxShadow: {
                        'neon': '0 0 10px rgba(255, 157, 0, 0.3), inset 0 0 5px rgba(255, 157, 0, 0.1)',
                        'neon-purple': '0 0 10px rgba(168, 85, 247, 0.3), inset 0 0 5px rgba(168, 85, 247, 0.1)',
                        'neon-blue': '0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 5px rgba(59, 130, 246, 0.1)',
                        'card-glow': '0 0 15px rgba(0,0,0,0.8)',
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
        }::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
        body {
            min-height: max(884px, 100dvh);
            background-color: #050505;}
        .text-glow {
            text-shadow: 0 0 10px rgba(255, 157, 0, 0.6);
        }
        .text-glow-white {
             text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }.neon-border-selected {
            box-shadow: 0 0 15px rgba(255, 157, 0, 0.4), inset 0 0 10px rgba(255, 157, 0, 0.1);
            border: 1px solid rgba(255, 157, 0, 0.8);
        }
        .neon-border-unselected {
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display text-white overflow-x-hidden antialiased selection:bg-primary/30">
<div class="relative flex h-full min-h-screen w-full flex-col pb-24">
<div class="sticky top-0 z-30 flex w-full justify-between items-center gap-2 px-4 pt-4 pb-2 bg-background-dark/95 backdrop-blur-md">
<div class="flex flex-1 flex-col items-center justify-center rounded-full bg-surface-dark border border-yellow-500/50 shadow-neon py-1 px-2">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-yellow-500 text-xs icon-filled">diamond</span>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Gems</span>
</div>
<span class="text-sm font-bold text-white leading-none">150</span>
</div>
<div class="flex flex-1 flex-col items-center justify-center rounded-full bg-surface-dark border border-orange-500/50 shadow-neon py-1 px-2">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-orange-500 text-xs icon-filled">local_fire_department</span>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Streak</span>
</div>
<span class="text-sm font-bold text-white leading-none">7</span>
</div>
<div class="flex flex-1 flex-col items-center justify-center rounded-full bg-surface-dark border border-purple-500/50 shadow-neon-purple py-1 px-2">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-purple-500 text-xs icon-filled">bolt</span>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">XP</span>
</div>
<span class="text-sm font-bold text-white leading-none">1,200</span>
</div>
</div>
<header class="flex items-center justify-between px-4 py-3 z-20">
<div class="flex items-center gap-3">
<div class="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-700 shadow-card-glow">
<img alt="User profile portrait of a smiling woman" class="h-full w-full object-cover" data-alt="User profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALzoPCypH0p6BbZ6nigpthGNUvfknFoyc6CCm-S_L4lJTjrTyReWGc_wbqZ77izindpxNWl_pN6N0ivDv48Nmm6ToykbQPlCNtEL-9WuXejvz-NdL6V7hwgmN46UN9Ffiz8RlORlVKje7a8Bhal-qQOu3cijb5jd_lEYgBV9yBQes6gZLlPylKz1CI1pewM6pUgwKc7wXl9-6OT3vUnhziZja5cl_hJOoOvbrARvwx9Tchcoaa96nNVmLf1xvF23FzeG86Efw_nPL0"/>
</div>
<h1 class="text-lg font-bold leading-tight tracking-tight text-white">SnapCalorie</h1>
</div>
<button class="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light hover:bg-white/10 transition-colors border border-white/10">
<span class="material-symbols-outlined text-white">notifications</span>
</button>
</header>
<main class="flex-1 px-4 pt-2">
<div class="mb-6">
<h2 class="text-3xl font-extrabold leading-tight tracking-tight text-white text-glow-white">
                    What's the <span class="text-primary text-glow">plan?</span>
</h2>
<p class="mt-1 text-sm font-medium text-gray-400">Track your calories and stay healthy.</p>
</div>
<section class="mb-8">
<div class="mb-3 flex items-center justify-between">
<h3 class="text-base font-bold text-white">Source</h3>
</div>
<div class="grid grid-cols-2 gap-4">
<label class="group relative cursor-pointer">
<input checked="" class="peer sr-only" name="source" type="radio" value="home"/>
<div class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface-dark p-5 transition-all duration-300 peer-checked:bg-surface-dark peer-checked:neon-border-selected neon-border-unselected">
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors group-hover:bg-primary/20 group-hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-[0_0_15px_rgba(255,157,0,0.6)]">
<span class="material-symbols-outlined icon-filled">skillet</span>
</div>
<span class="text-sm font-bold text-gray-400 peer-checked:text-primary peer-checked:text-glow">Home Cook</span>
</div>
</label>
<label class="group relative cursor-pointer">
<input class="peer sr-only" name="source" type="radio" value="outside"/>
<div class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface-dark p-5 transition-all duration-300 peer-checked:bg-surface-dark peer-checked:neon-border-selected neon-border-unselected">
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors group-hover:bg-primary/20 group-hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-[0_0_15px_rgba(255,157,0,0.6)]">
<span class="material-symbols-outlined icon-filled">storefront</span>
</div>
<span class="text-sm font-bold text-gray-400 peer-checked:text-primary peer-checked:text-glow">Buy Outside</span>
</div>
</label>
</div>
</section>
<section class="mb-8">
<div class="mb-3 flex items-center justify-between">
<h3 class="text-base font-bold text-white">Budget</h3>
</div>
<div class="flex gap-3">
<div class="relative shrink-0">
<select class="appearance-none h-12 rounded-xl bg-surface-dark pl-4 pr-10 text-sm font-bold text-white border border-white/10 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(255,157,0,0.4)] transition-all">
<option>USD</option>
<option>EUR</option>
<option>GBP</option>
<option>JPY</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
<span class="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<div class="flex flex-1 rounded-xl bg-surface-dark p-1 border border-white/10">
<label class="flex-1 cursor-pointer">
<input class="peer sr-only" name="budget" type="radio" value="1"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-400 transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.4)] hover:text-white">$</span>
</label>
<label class="flex-1 cursor-pointer">
<input checked="" class="peer sr-only" name="budget" type="radio" value="2"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-400 transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.4)] hover:text-white">$$</span>
</label>
<label class="flex-1 cursor-pointer">
<input class="peer sr-only" name="budget" type="radio" value="3"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-400 transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.4)] hover:text-white">$$$</span>
</label>
<label class="flex-1 cursor-pointer">
<input class="peer sr-only" name="budget" type="radio" value="4"/>
<span class="flex h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-gray-400 transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-[0_0_10px_rgba(255,157,0,0.4)] hover:text-white">$$$$</span>
</label>
</div>
</div>
</section>
<section class="mb-4">
<div class="mb-3 flex items-center justify-between">
<h3 class="text-base font-bold text-white">Preference</h3>
</div>
<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
<label class="cursor-pointer">
<input class="peer sr-only" name="pref" type="checkbox" value="heavy"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-surface-dark p-4 transition-all neon-border-unselected peer-checked:neon-border-selected peer-checked:bg-surface-dark">
<span class="material-symbols-outlined text-2xl text-gray-500 peer-checked:text-primary peer-checked:drop-shadow-[0_0_5px_rgba(255,157,0,0.8)]">lunch_dining</span>
<span class="text-sm font-bold text-gray-400 peer-checked:text-white">Heavy</span>
</div>
</label>
<label class="cursor-pointer">
<input checked="" class="peer sr-only" name="pref" type="checkbox" value="western"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-surface-dark p-4 transition-all neon-border-unselected peer-checked:neon-border-selected peer-checked:bg-surface-dark">
<span class="material-symbols-outlined text-2xl text-gray-500 peer-checked:text-primary peer-checked:drop-shadow-[0_0_5px_rgba(255,157,0,0.8)]">local_pizza</span>
<span class="text-sm font-bold text-gray-400 peer-checked:text-white">Western</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="pref" type="checkbox" value="light"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-surface-dark p-4 transition-all neon-border-unselected peer-checked:neon-border-selected peer-checked:bg-surface-dark">
<span class="material-symbols-outlined text-2xl text-gray-500 peer-checked:text-primary peer-checked:drop-shadow-[0_0_5px_rgba(255,157,0,0.8)]">eco</span>
<span class="text-sm font-bold text-gray-400 peer-checked:text-white">Light</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="pref" type="checkbox" value="medium"/>
<div class="flex flex-col items-start gap-2 rounded-xl bg-surface-dark p-4 transition-all neon-border-unselected peer-checked:neon-border-selected peer-checked:bg-surface-dark">
<span class="material-symbols-outlined text-2xl text-gray-500 peer-checked:text-primary peer-checked:drop-shadow-[0_0_5px_rgba(255,157,0,0.8)]">rice_bowl</span>
<span class="text-sm font-bold text-gray-400 peer-checked:text-white">Medium</span>
</div>
</label>
</div>
</section>
</main>
<div class="sticky bottom-20 z-10 px-4 pb-4">
<div class="flex items-stretch gap-3">
<button class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(255,157,0,0.5)] active:scale-[0.98] transition-all hover:shadow-[0_0_30px_rgba(255,157,0,0.7)] border border-yellow-400/30">
<span>Plan Meal</span>
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<button class="flex aspect-square h-14 w-14 items-center justify-center rounded-2xl bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] active:scale-[0.95] transition-transform">
<span class="material-symbols-outlined">photo_camera</span>
</button>
</div>
</div>
<nav class="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-white/10 bg-background-dark/95 backdrop-blur-md pb-safe pt-3" style="padding-bottom: env(safe-area-inset-bottom, 20px);">
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined icon-filled text-2xl text-primary drop-shadow-[0_0_8px_rgba(255,157,0,0.8)] transition-colors">home</span>
<span class="text-[10px] font-bold text-primary">Home</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined text-2xl text-gray-500 transition-colors group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,157,0,0.8)]">fitness_center</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-primary uppercase">MotionSense</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined text-2xl text-gray-500 transition-colors group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,157,0,0.8)]">restaurant_menu</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-primary uppercase">PlanCalorie</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined text-2xl text-gray-500 transition-colors group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,157,0,0.8)]">notifications_active</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-primary uppercase">Smart Nudge</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2" href="#">
<span class="material-symbols-outlined text-2xl text-gray-500 transition-colors group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,157,0,0.8)]">bedtime</span>
<span class="text-[10px] font-medium text-gray-500 group-hover:text-primary uppercase">CircadianSync</span>
</a>
</nav>
</div>

</body></html>