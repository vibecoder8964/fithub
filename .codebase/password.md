### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Password Entry - Health App</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>.fitness-pattern {
            background-image: radial-gradient(#d1d5db 1px, transparent 1px);
            background-size: 20px 20px;
        }
    </style>
<style>
        body {
            min-height: max(600px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
<div class="absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-[0.05] z-0 overflow-hidden flex flex-wrap content-center justify-center gap-12 p-10 rotate-12 scale-150">
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">fitness_center</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">favorite</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">directions_run</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">monitor_heart</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">water_drop</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">local_fire_department</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">self_improvement</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">timer</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">bolt</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">pedal_bike</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">hiking</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">sports_gymnastics</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">fitness_center</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">favorite</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">directions_run</span>
<span class="material-symbols-outlined text-9xl text-gray-300 dark:text-gray-700">monitor_heart</span>
</div>
<main class="relative z-10 w-full max-w-md bg-white dark:bg-[#1e1e1e] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none overflow-hidden">
<div class="pt-10 pb-2 px-6 text-center">
<div class="flex justify-center mb-6">
<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-4xl">lock</span>
</div>
</div>
<h1 class="text-[#181510] dark:text-white text-3xl font-bold tracking-tight mb-2">Enter Password</h1>
<p class="text-gray-500 dark:text-gray-400 text-base font-medium">Please enter your password to continue.</p>
</div>
<div class="px-6 py-8 space-y-6">
<label class="block group">
<span class="text-[#181510] dark:text-gray-200 text-sm font-semibold mb-1.5 block">Set Password</span>
<div class="relative">
<input class="w-full h-14 pl-12 pr-12 rounded-lg bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 text-[#181510] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base" placeholder="Enter your password" type="password"/>
<div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
<span class="material-symbols-outlined">lock</span>
</div>
<button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
</label>
<button class="w-full h-14 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
<span>Continue</span>
<span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<div class="text-center pt-2">
<a class="text-sm font-medium text-gray-500 hover:text-primary transition-colors" href="#">Forgot Password?</a>
</div>
</div>

</main>
<div class="h-8"></div>
</body></html>