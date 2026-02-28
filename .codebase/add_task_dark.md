### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Add New Task</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Manrope', 'Noto Sans', sans-serif;
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }.wheel-container {
            mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
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
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-white h-screen w-full overflow-hidden flex flex-col transition-colors duration-200" style="background-color: #1b1611; min-height: max(884px, 100dvh);">
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col pb-24">
<div class="fixed top-0 right-0 left-0 z-30 bg-white/90 dark:bg-[#231b0f]/90 backdrop-blur-md px-4 py-4 flex items-center border-b border-[#e6e0d9] dark:border-[#3e3427]">
<div class="flex items-center gap-2 w-full overflow-x-auto no-scrollbar justify-start">
<div class="flex items-center gap-2 bg-white dark:bg-[#2c241b] pl-1.5 pr-3 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.4)]">
<div class="size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 dark:text-blue-400">
<span class="material-symbols-outlined text-[18px] fill-1">diamond</span>
</div>
<div class="flex flex-col leading-none -mt-0.5">
<span class="text-[8px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">Gems</span>
<span class="text-sm font-bold text-[#181510] dark:text-white">150</span>
</div>
</div>
<div class="flex items-center gap-2 bg-white dark:bg-[#2c241b] pl-1.5 pr-3 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800 flex-shrink-0 shadow-[0_0_10px_rgba(255,157,0,0.4)]">
<div class="size-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[18px] fill-1">local_fire_department</span>
</div>
<div class="flex flex-col leading-none -mt-0.5">
<span class="text-[8px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">Streak</span>
<span class="text-sm font-bold text-[#181510] dark:text-white">7</span>
</div>
</div>
<div class="flex items-center gap-2 bg-white dark:bg-[#2c241b] pl-1.5 pr-3 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800 flex-shrink-0 shadow-[0_0_10px_rgba(147,51,234,0.4)]">
<div class="size-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined text-[18px] fill-1">bolt</span>
</div>
<div class="flex flex-col leading-none -mt-0.5">
<span class="text-[8px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">XP</span>
<span class="text-sm font-bold text-[#181510] dark:text-white">1,200</span>
</div>
</div>
</div>
<button class="ml-auto flex-shrink-0 size-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-500 hover:text-stone-800 dark:hover:text-stone-300">
<span class="material-symbols-outlined text-xl">close</span>
</button>
</div>
<div class="p-5 pt-24 pb-32 max-w-3xl mx-auto w-full flex flex-col h-full">
<h1 class="text-2xl font-bold text-[#181510] dark:text-white mb-6 text-center">Add New Task</h1>
<form class="space-y-6">
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 ml-1">Task Name</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
<span class="material-symbols-outlined text-xl">edit</span>
</div>
<input class="block w-full pl-11 pr-4 py-3 bg-white dark:bg-[#2c241b] border-none rounded-xl text-[#181510] dark:text-white placeholder-stone-400 focus:ring-2 focus:ring-primary shadow-sm shadow-[0_0_10px_rgba(168,155,133,0.1)]" placeholder="e.g., Project X Development" required="" type="text"/>
</div>
</div>
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 ml-1">Time Range</label>
<div class="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 bg-white dark:bg-[#2c241b] rounded-xl shadow-sm shadow-[0_0_15px_rgba(255,157,0,0.1)]">
<div class="flex flex-col items-center">
<span class="text-[10px] text-stone-400 uppercase font-bold mb-1">Start</span>
<div class="flex items-center gap-1">
<div class="flex flex-col items-center">
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.nextElementSibling.stepUp(); this.nextElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_up</span>
</button>
<input class="w-12 text-center bg-stone-50 dark:bg-[#231b0f] border-none rounded-lg text-lg font-mono font-bold text-[#181510] dark:text-white focus:ring-1 focus:ring-primary p-1" max="23" min="0" oninput="if(this.value.length === 1) this.value = '0' + this.value; if(parseInt(this.value) &gt; 23) this.value = '23'; if(parseInt(this.value) &lt; 0) this.value = '00';" readonly="" tabindex="-1" type="number" value="09"/>
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.previousElementSibling.stepDown(); this.previousElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_down</span>
</button>
</div>
<span class="text-lg font-bold text-stone-300 pb-1">:</span>
<div class="flex flex-col items-center">
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.nextElementSibling.stepUp(); this.nextElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_up</span>
</button>
<input class="w-12 text-center bg-stone-50 dark:bg-[#231b0f] border-none rounded-lg text-lg font-mono font-bold text-[#181510] dark:text-white focus:ring-1 focus:ring-primary p-1" max="59" min="0" oninput="if(this.value.length === 1) this.value = '0' + this.value; if(parseInt(this.value) &gt; 59) this.value = '59'; if(parseInt(this.value) &lt; 0) this.value = '00';" readonly="" tabindex="-1" type="number" value="00"/>
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.previousElementSibling.stepDown(); this.previousElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_down</span>
</button>
</div>
</div>
</div>
<span class="text-sm font-medium text-stone-400 px-2 mt-4 sm:mt-0">to</span>
<div class="flex flex-col items-center">
<span class="text-[10px] text-stone-400 uppercase font-bold mb-1">End</span>
<div class="flex items-center gap-1">
<div class="flex flex-col items-center">
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.nextElementSibling.stepUp(); this.nextElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_up</span>
</button>
<input class="w-12 text-center bg-stone-50 dark:bg-[#231b0f] border-none rounded-lg text-lg font-mono font-bold text-[#181510] dark:text-white focus:ring-1 focus:ring-primary p-1" max="23" min="0" oninput="if(this.value.length === 1) this.value = '0' + this.value; if(parseInt(this.value) &gt; 23) this.value = '23'; if(parseInt(this.value) &lt; 0) this.value = '00';" readonly="" tabindex="-1" type="number" value="10"/>
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.previousElementSibling.stepDown(); this.previousElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_down</span>
</button>
</div>
<span class="text-lg font-bold text-stone-300 pb-1">:</span>
<div class="flex flex-col items-center">
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.nextElementSibling.stepUp(); this.nextElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_up</span>
</button>
<input class="w-12 text-center bg-stone-50 dark:bg-[#231b0f] border-none rounded-lg text-lg font-mono font-bold text-[#181510] dark:text-white focus:ring-1 focus:ring-primary p-1" max="59" min="0" oninput="if(this.value.length === 1) this.value = '0' + this.value; if(parseInt(this.value) &gt; 59) this.value = '59'; if(parseInt(this.value) &lt; 0) this.value = '00';" readonly="" tabindex="-1" type="number" value="30"/>
<button class="text-stone-400 hover:text-primary transition-colors p-1" onclick="this.previousElementSibling.stepDown(); this.previousElementSibling.dispatchEvent(new Event('input'))" type="button">
<span class="material-symbols-outlined text-sm drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]">keyboard_arrow_down</span>
</button>
</div>
</div>
</div>
</div>
</div>
<div class="space-y-2">
<label class="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 ml-1">Description</label>
<div class="relative">
<div class="absolute top-3 left-0 pl-4 flex items-start pointer-events-none text-stone-400">
<span class="material-symbols-outlined text-xl drop-shadow-[0_0_5px_rgba(239,68,68,0.8)] text-red-400">description</span>
</div>
<textarea class="block w-full pl-11 pr-4 py-3 bg-white dark:bg-[#2c241b] border-none rounded-xl text-[#181510] dark:text-white placeholder-stone-400 focus:ring-2 focus:ring-primary shadow-sm resize-none shadow-[0_0_10px_rgba(168,155,133,0.1)]" placeholder="Add details about your task..." rows="3"></textarea>
</div>
</div>
<button class="w-full mt-4 bg-primary hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,157,0,0.5)]" type="submit">
<span class="material-symbols-outlined">add_circle</span>
                Add to Schedule
            </button>
</form>
</div>
<div class="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#231b0f] border-t border-[#e6e0d9] dark:border-[#3e3427] flex justify-between items-center px-2 py-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">home</span>
<span class="text-[10px] font-medium leading-none">Home</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
<span class="text-[10px] font-medium leading-none">MotionSense</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">restaurant_menu</span>
<span class="text-[10px] font-medium leading-none">PlanCalorie</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">notifications_active</span>
<span class="text-[10px] font-medium leading-none">Smart Nudge</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">nightlight</span>
<span class="text-[10px] font-medium leading-none">CircadianSync</span>
</button>
<button class="flex flex-1 flex-col items-center justify-center py-2 gap-1 text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#5e513d] dark:hover:text-[#ccc3b3] transition-colors">
<span class="material-symbols-outlined text-2xl">self_improvement</span>
<span class="text-[10px] font-medium leading-none">ZenZone</span>
</button>
</div>
</main>
</body></html>