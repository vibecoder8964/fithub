### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Validated Profile Setup Screen</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
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
                        "error": "#FF6B6B",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"],
                        "body": ["Noto Sans", "sans-serif"],
                    },
                    borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type=number] {
            -moz-appearance: textfield;
        }
        input:invalid {
            border-color: #FF6B6B !important;
        }
        .validation-hint {
            display: none;
        }
        input:invalid ~ .validation-hint {
            display: block;
        }
        #country-modal:target {
            display: flex;
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
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-200">
<div class="sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md pt-8 pb-4">
<div class="relative flex items-center justify-center px-6 mb-3">
<button class="absolute left-6 text-[#181510] dark:text-white flex items-center justify-center transition-colors p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10" data-action="jump_to_previous_page">
<span class="material-symbols-outlined font-bold text-2xl">chevron_left</span>
</button>
<span class="text-[#181510] dark:text-white font-bold tracking-wide text-base">Step 4 of 8</span>
</div>
<div class="px-6">
<div class="h-1 w-full rounded-full bg-[#e6e4de] dark:bg-stone-800 overflow-hidden">
<div class="h-full bg-[#ff9d00] rounded-full" style="width: 44.4%"></div>
</div>
</div>
</div>
<form class="flex flex-col px-6 pb-32 max-w-md mx-auto w-full pt-4">
<h1 class="text-[#181510] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight text-left pb-2 pt-0">
                Let us know more <br/> about you!
            </h1>
<div class="flex items-start gap-2 pb-8">
<span class="material-symbols-outlined text-[#FF6B6B] text-[20px] mt-0.5">verified_user</span>
<p class="text-[#8d7b5e] dark:text-stone-400 text-sm font-medium leading-normal">
                    Your data is private &amp; secure. We use this to personalize your motivation plan.
                </p>
</div>
<div class="flex flex-col gap-6">
<label class="flex flex-col w-full">
<p class="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Username</p>
<div class="flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
<input class="form-input flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:ring-0 h-14 p-[15px] text-base font-normal" placeholder="e.g. Runner123" required="" type="text"/>
<div class="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px]">
<span class="material-symbols-outlined">person</span>
</div>
</div>
</label>
<label class="flex flex-col w-full">
<p class="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Age</p>
<div class="relative flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
<input class="form-input flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:ring-0 h-14 p-[15px] text-base font-normal" inputmode="numeric" max="120" min="1" onkeypress="return (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57)" pattern="[0-9]*" placeholder="25" required="" type="text"/>
<div class="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px]">
<span class="material-symbols-outlined">cake</span>
</div>
<p class="validation-hint absolute -bottom-5 left-0 text-[10px] text-error font-bold">Please enter a valid whole number</p>
</div>
</label>
<div class="grid grid-cols-2 gap-4">
<label class="flex flex-col w-full">
<p class="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Weight</p>
<div class="relative flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
<input class="form-input flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:ring-0 h-14 p-[15px] text-base font-normal" inputmode="numeric" max="500" min="1" onkeypress="return (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57)" pattern="[0-9]*" placeholder="70" required="" type="text"/>
<div class="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px] font-medium text-xs">
                                kg
                            </div>
<p class="validation-hint absolute -bottom-5 left-0 text-[10px] text-error font-bold whitespace-nowrap">Whole number only</p>
</div>
</label>
<label class="flex flex-col w-full">
<p class="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Height</p>
<div class="relative flex w-full items-stretch rounded-xl shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/50 overflow-hidden border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800">
<input class="form-input flex w-full min-w-0 flex-1 border-0 bg-transparent text-[#181510] dark:text-white focus:ring-0 h-14 p-[15px] text-base font-normal" inputmode="numeric" max="300" min="1" onkeypress="return (event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57)" pattern="[0-9]*" placeholder="175" required="" type="text"/>
<div class="text-[#8d7b5e] dark:text-stone-400 flex items-center justify-center pr-[15px] font-medium text-xs">
                                cm
                            </div>
<p class="validation-hint absolute -bottom-5 left-0 text-[10px] text-error font-bold whitespace-nowrap">Whole number only</p>
</div>
</label>
</div>
<div class="flex flex-col w-full">
<p class="text-[#181510] dark:text-gray-200 text-base font-bold leading-normal pb-2">Living Country</p>
<a class="relative flex w-full items-stretch rounded-xl shadow-sm transition-all border border-[#e7e2da] dark:border-stone-700 bg-white dark:bg-stone-800 h-14 overflow-hidden group" href="#country-modal">
<div class="flex items-center justify-center pl-4 pr-2">
<span class="text-xl" id="selected-flag">🇺🇸</span>
</div>
<div class="flex flex-1 items-center px-2">
<span class="text-[#181510] dark:text-white text-base font-normal" id="selected-country-name">United States</span>
<input id="country-input" name="country" type="hidden" value="United States"/>
</div>
<div class="flex items-center px-4 text-[#8d7b5e] dark:text-stone-400">
<span class="material-symbols-outlined">expand_more</span>
</div>
</a>
</div>
</div>
<div class="fixed bottom-0 left-0 w-full p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-transparent dark:border-white/5 z-20">
<div class="max-w-md mx-auto">
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20" type="submit">
<span class="truncate">Continue</span>
</button>
</div>
</div>
</form>
<div class="hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm items-end justify-center" id="country-modal">
<a class="absolute inset-0 cursor-default" href="#"></a>
<div class="relative w-full max-w-md bg-white dark:bg-stone-900 rounded-t-3xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
<div class="p-4 border-b border-[#e7e2da] dark:border-stone-800 flex items-center justify-between">
<h3 class="text-[#181510] dark:text-white text-xl font-bold">Select Country</h3>
<a class="text-[#8d7b5e] dark:text-stone-400 p-2" href="#">
<span class="material-symbols-outlined">close</span>
</a>
</div>
<div class="p-4">
<div class="relative flex items-center bg-[#f0eee9] dark:bg-stone-800 rounded-xl px-4 h-12">
<span class="material-symbols-outlined text-[#8d7b5e] mr-2">search</span>
<input class="bg-transparent border-0 focus:ring-0 w-full text-sm text-[#181510] dark:text-white placeholder:text-[#8d7b5e]" placeholder="Search for your country..." type="text"/>
</div>
</div>
<div class="flex-1 overflow-y-auto px-2 pb-8">
<div class="flex flex-col gap-1">
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors group" onclick="selectCountry('🇺🇸', 'United States')" type="button">
<span class="text-2xl">🇺🇸</span>
<span class="text-[#181510] dark:text-white font-medium">United States</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇨🇦', 'Canada')" type="button">
<span class="text-2xl">🇨🇦</span>
<span class="text-[#181510] dark:text-white font-medium">Canada</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇬🇧', 'United Kingdom')" type="button">
<span class="text-2xl">🇬🇧</span>
<span class="text-[#181510] dark:text-white font-medium">United Kingdom</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇦🇺', 'Australia')" type="button">
<span class="text-2xl">🇦🇺</span>
<span class="text-[#181510] dark:text-white font-medium">Australia</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇩🇪', 'Germany')" type="button">
<span class="text-2xl">🇩🇪</span>
<span class="text-[#181510] dark:text-white font-medium">Germany</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇫🇷', 'France')" type="button">
<span class="text-2xl">🇫🇷</span>
<span class="text-[#181510] dark:text-white font-medium">France</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇮🇳', 'India')" type="button">
<span class="text-2xl">🇮🇳</span>
<span class="text-[#181510] dark:text-white font-medium">India</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇯🇵', 'Japan')" type="button">
<span class="text-2xl">🇯🇵</span>
<span class="text-[#181510] dark:text-white font-medium">Japan</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇧🇷', 'Brazil')" type="button">
<span class="text-2xl">🇧🇷</span>
<span class="text-[#181510] dark:text-white font-medium">Brazil</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇮🇹', 'Italy')" type="button">
<span class="text-2xl">🇮🇹</span>
<span class="text-[#181510] dark:text-white font-medium">Italy</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇲🇽', 'Mexico')" type="button">
<span class="text-2xl">🇲🇽</span>
<span class="text-[#181510] dark:text-white font-medium">Mexico</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇳🇱', 'Netherlands')" type="button">
<span class="text-2xl">🇳🇱</span>
<span class="text-[#181510] dark:text-white font-medium">Netherlands</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇪🇸', 'Spain')" type="button">
<span class="text-2xl">🇪🇸</span>
<span class="text-[#181510] dark:text-white font-medium">Spain</span>
</button>
<button class="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f0eee9] dark:hover:bg-stone-800 transition-colors" onclick="selectCountry('🇨🇭', 'Switzerland')" type="button">
<span class="text-2xl">🇨🇭</span>
<span class="text-[#181510] dark:text-white font-medium">Switzerland</span>
</button>
</div>
</div>
</div>
</div>
</div>
<script>
    function selectCountry(flag, name) {
        document.getElementById('selected-flag').textContent = flag;
        document.getElementById('selected-country-name').textContent = name;
        document.getElementById('country-input').value = name;
        window.location.hash = ''; // Close modal
    }
    // Prevents non-numeric input for all designated fields via keydown/keypress
    // and also cleans any pasted content.
    const numericInputs = document.querySelectorAll('input[inputmode="numeric"]');
    numericInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        // Strict prevention for keyboard entry
        input.addEventListener('keypress', function(e) {
            if (e.which < 48 || e.which > 57) {
                e.preventDefault();
            }
        });
    });
</script>
</body></html>