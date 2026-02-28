### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Meal Time Configuration</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ffbe0a",
                        "primary-dark": "#d9a200",
                        "background-light": "#f8f8f5",
                        "background-dark": "#231e0f",
                        "card-light": "#ffffff",
                        "card-dark": "#2c2615",
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "sans-serif"]
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }
        input[type=number] {
            -moz-appearance: textfield;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<script>
    // Simple script to enforce validation logic as requested without external dependencies
    document.addEventListener('DOMContentLoaded', () => {
        const hourInputs = document.querySelectorAll('input[name="hour"]');
        const minInputs = document.querySelectorAll('input[name="minute"]');
        function enforceConstraints(input, min, max) {
            input.addEventListener('input', (e) => {
                let value = e.target.value;
                // Remove any non-digit characters immediately
                value = value.replace(/[^0-9]/g, '');
                // Parse as integer to check range
                let intVal = parseInt(value, 10);
                if (value === '') {
                    // Allow empty string for typing
                    e.target.value = '';
                    return;
                }
                if (isNaN(intVal)) {
                    e.target.value = '';
                } else {
                    if (intVal > max) {
                        e.target.value = max;
                    } else if (intVal < min) {
                         // Usually we don't clamp min while typing because '1' is < '10'
                         // but since min is 0, we are safe. 
                         // However, just keeping the value as is if valid number
                         e.target.value = value;
                    } else {
                        e.target.value = value;
                    }
                }
            });
            input.addEventListener('blur', (e) => {
                let value = e.target.value;
                let intVal = parseInt(value, 10);
                if (value === '' || isNaN(intVal)) {
                    // Default to min or previously valid value if needed, or leave blank? 
                    // Let's pad with 0 if it's single digit
                    if(!isNaN(intVal)) {
                         e.target.value = intVal.toString().padStart(2, '0');
                    }
                    return;
                }
                // Final clamp on blur just in case
                if (intVal > max) intVal = max;
                if (intVal < min) intVal = min;
                e.target.value = intVal.toString().padStart(2, '0');
            });
            // Prevent decimal point input
            input.addEventListener('keydown', (e) => {
                if (e.key === '.' || e.key === ',' || e.key === 'e' || e.key === '-' || e.key === '+') {
                    e.preventDefault();
                }
            });
        }
        hourInputs.forEach(input => enforceConstraints(input, 0, 23));
        minInputs.forEach(input => enforceConstraints(input, 0, 59));
    });
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
<body class="bg-background-light dark:bg-background-dark font-display text-[#181610] dark:text-white transition-colors duration-200">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<span class="material-symbols-outlined absolute top-[10%] left-[5%] text-9xl text-primary opacity-[0.08] rotate-12">calendar_month</span>
<span class="material-symbols-outlined absolute top-[15%] right-[-5%] text-9xl text-primary opacity-[0.08] -rotate-12">schedule</span>
<span class="material-symbols-outlined absolute top-[40%] left-[-10%] text-[10rem] text-primary opacity-[0.08] rotate-45">restaurant</span>
<span class="material-symbols-outlined absolute bottom-[20%] right-[5%] text-8xl text-primary opacity-[0.08] -rotate-6">local_dining</span>
<span class="material-symbols-outlined absolute bottom-[5%] left-[10%] text-9xl text-primary opacity-[0.08] rotate-12">timer</span>
</div>
<div class="relative z-10 flex flex-col pt-6 pb-2 px-6 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm sticky top-0">
<div class="flex items-center justify-center mb-6 pt-2 relative">
<button class="absolute left-0 flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[#181610] dark:text-white text-lg font-bold">chevron_left</span>
</button>
<span class="text-[17px] font-bold text-[#181610] dark:text-white">Step 6 of 8</span>
</div>
<div class="w-full h-[3px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-4">
<div class="h-full bg-[#ff9100] w-[66.6%] rounded-full"></div>
</div>
</div>
<div class="relative z-10 flex-1 px-6 pb-24 overflow-y-auto no-scrollbar">
<div class="mb-8 mt-2">
<h1 class="text-[#181610] dark:text-white text-3xl font-extrabold leading-tight tracking-tight mb-3">
                    Select preferred<br/>meal time
                </h1>
<p class="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                    Setting a routine helps boost your metabolism and energy levels.
                </p>
</div>
<div class="flex flex-col gap-5">
<div class="bg-card-light dark:bg-card-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
<div class="flex flex-col gap-4">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 shrink-0">
<span class="material-symbols-outlined text-2xl">bakery_dining</span>
</div>
<div class="flex-1">
<h3 class="text-lg font-bold text-[#181610] dark:text-white">Breakfast</h3>
<p class="text-xs text-gray-400 dark:text-gray-500">First meal of the day</p>
</div>
</div>
<div class="flex items-center justify-between gap-3 bg-gray-50 dark:bg-[#231e0f] p-4 rounded-xl border border-gray-100 dark:border-white/5 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all duration-200">
<div class="flex-1">
<label class="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider text-center">Hour</label>
<input class="w-full bg-transparent text-center text-2xl font-bold text-[#181610] dark:text-white border-none focus:ring-0 p-0 placeholder-gray-300 dark:placeholder-gray-700 outline-none" max="23" min="0" name="hour" pattern="[0-9]*" placeholder="08" step="1" type="number" value="08"/>
</div>
<span class="text-2xl font-bold text-gray-300 dark:text-gray-600 mb-[-1.2rem]">:</span>
<div class="flex-1">
<label class="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider text-center">Min</label>
<input class="w-full bg-transparent text-center text-2xl font-bold text-[#181610] dark:text-white border-none focus:ring-0 p-0 placeholder-gray-300 dark:placeholder-gray-700 outline-none" max="59" min="0" name="minute" pattern="[0-9]*" placeholder="00" step="1" type="number" value="30"/>
</div>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
<div class="flex flex-col gap-4">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 shrink-0">
<span class="material-symbols-outlined text-2xl">lunch_dining</span>
</div>
<div class="flex-1">
<h3 class="text-lg font-bold text-[#181610] dark:text-white">Lunch</h3>
<p class="text-xs text-gray-400 dark:text-gray-500">Mid-day refuel</p>
</div>
</div>
<div class="flex items-center justify-between gap-3 bg-gray-50 dark:bg-[#231e0f] p-4 rounded-xl border border-gray-100 dark:border-white/5 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all duration-200">
<div class="flex-1">
<label class="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider text-center">Hour</label>
<input class="w-full bg-transparent text-center text-2xl font-bold text-[#181610] dark:text-white border-none focus:ring-0 p-0 placeholder-gray-300 dark:placeholder-gray-700 outline-none" max="23" min="0" name="hour" pattern="[0-9]*" placeholder="12" step="1" type="number" value="13"/>
</div>
<span class="text-2xl font-bold text-gray-300 dark:text-gray-600 mb-[-1.2rem]">:</span>
<div class="flex-1">
<label class="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider text-center">Min</label>
<input class="w-full bg-transparent text-center text-2xl font-bold text-[#181610] dark:text-white border-none focus:ring-0 p-0 placeholder-gray-300 dark:placeholder-gray-700 outline-none" max="59" min="0" name="minute" pattern="[0-9]*" placeholder="00" step="1" type="number" value="00"/>
</div>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden group">
<div class="flex flex-col gap-4">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400 shrink-0">
<span class="material-symbols-outlined text-2xl">dinner_dining</span>
</div>
<div class="flex-1">
<h3 class="text-lg font-bold text-[#181610] dark:text-white">Dinner</h3>
<p class="text-xs text-gray-400 dark:text-gray-500">Evening meal</p>
</div>
</div>
<div class="flex items-center justify-between gap-3 bg-gray-50 dark:bg-[#231e0f] p-4 rounded-xl border border-gray-100 dark:border-white/5 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all duration-200">
<div class="flex-1">
<label class="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider text-center">Hour</label>
<input class="w-full bg-transparent text-center text-2xl font-bold text-[#181610] dark:text-white border-none focus:ring-0 p-0 placeholder-gray-300 dark:placeholder-gray-700 outline-none" max="23" min="0" name="hour" pattern="[0-9]*" placeholder="18" step="1" type="number" value="19"/>
</div>
<span class="text-2xl font-bold text-gray-300 dark:text-gray-600 mb-[-1.2rem]">:</span>
<div class="flex-1">
<label class="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider text-center">Min</label>
<input class="w-full bg-transparent text-center text-2xl font-bold text-[#181610] dark:text-white border-none focus:ring-0 p-0 placeholder-gray-300 dark:placeholder-gray-700 outline-none" max="59" min="0" name="minute" pattern="[0-9]*" placeholder="00" step="1" type="number" value="30"/>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="fixed bottom-0 left-0 right-0 z-20 max-w-md mx-auto">
<div class="h-12 w-full bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
<div class="bg-background-light dark:bg-background-dark px-6 pb-8 pt-2">
<button class="w-full flex items-center justify-center gap-1 bg-[#ff9d00] hover:brightness-105 text-white font-bold text-[17px] py-4 rounded-full shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98]">
<span>Continue</span>
<span class="material-symbols-outlined text-sm font-bold stroke-2">arrow_forward</span>
</button>
</div>
</div>
</div>
</body></html>