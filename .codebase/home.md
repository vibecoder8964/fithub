### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Main Home Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries">
    const menu = document.getElementById('general-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-menu');

    function toggleMenu() {
        menu.classList.toggle('-translate-x-full');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    const backdrop = document.getElementById('menu-backdrop');
    menuToggle.addEventListener('click', () => {
        backdrop.classList.toggle('hidden');
        setTimeout(() => backdrop.classList.toggle('opacity-100'), 10);
    });
    closeBtn.addEventListener('click', () => {
        backdrop.classList.remove('opacity-100');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    });
    backdrop.addEventListener('click', () => {
        toggleMenu();
        backdrop.classList.remove('opacity-100');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    });
</script>
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
<style type="text/tailwindcss">
        body {
            font-family: 'Manrope', 'Noto Sans', sans-serif;
            min-height: max(884px, 100dvh);
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @media (max-width: 640px) {
            .card-indicator-icon {
                @apply size-8 rounded-full bg-primary flex items-center justify-center text-[#181510] !important;
            }
            .card-indicator-icon span {
                @apply text-sm !important;
            }
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-white h-screen w-full overflow-hidden flex transition-colors duration-200">
<aside class="hidden sm:flex w-[72px] h-full flex-col items-center justify-between py-6 bg-white dark:bg-[#2c241b] border-r border-[#e6e0d9] dark:border-[#3e3427] shrink-0 z-20 shadow-sm">
<button class="p-3 rounded-xl hover:bg-background-light dark:hover:bg-[#3e3427] text-[#181510] dark:text-white transition-colors" id="menu-toggle">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
<div class="flex flex-col gap-5 items-center w-full">
<button class="p-2 rounded-full hover:bg-background-light dark:hover:bg-[#3e3427] text-[#8d7b5e] dark:text-[#a89b85]" id="menu-toggle">
<span class="material-symbols-outlined text-2xl">light_mode</span>
</button>
<div class="size-10 rounded-full bg-cover bg-center border-2 border-primary" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
<button class="p-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-[#8d7b5e] hover:text-red-500 dark:text-[#a89b85] transition-colors">
<span class="material-symbols-outlined text-2xl">logout</span>
</button>
</div>
</aside>
<div class="fixed inset-y-0 left-0 w-[80%] sm:w-[30%] bg-white dark:bg-[#2c241b] border-r border-[#e6e0d9] dark:border-[#3e3427] z-[60] transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col p-6" id="general-menu"><div class="flex items-center justify-between mb-8">
<h2 class="text-xl font-bold text-primary flex items-center gap-2">
<span class="material-symbols-outlined">grid_view</span> Menu
</h2>
<button class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800" id="close-menu">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<nav class="flex flex-col gap-4">
<a class="flex items-center gap-4 p-3 rounded-xl bg-primary/10 text-primary font-bold" href="#"><span class="material-symbols-outlined">home</span>Home</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-[#8d7b5e] dark:text-[#a89b85] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" href="#"><span class="material-symbols-outlined">fitness_center</span>MotionSense</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-[#8d7b5e] dark:text-[#a89b85] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" href="#"><span class="material-symbols-outlined">restaurant</span>PlanCalorie</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-[#8d7b5e] dark:text-[#a89b85] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" href="#"><span class="material-symbols-outlined">notifications</span>Smart Nudge</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-[#8d7b5e] dark:text-[#a89b85] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" href="#"><span class="material-symbols-outlined">dark_mode</span>CircadianSync</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-[#8d7b5e] dark:text-[#a89b85] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" href="#"><span class="material-symbols-outlined">self_improvement</span>ZenZone</a>
</nav></div><div class="fixed inset-0 bg-black/50 z-50 hidden opacity-0 transition-opacity duration-300" id="menu-backdrop"></div>
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col">
<div class="sticky top-0 right-0 left-0 z-30 bg-white/80 dark:bg-[#231b0f]/80 backdrop-blur-md px-4 py-3 border-b border-[#e6e0d9] dark:border-[#3e3427]">
<div class="flex w-full items-center justify-between gap-3 max-w-2xl mx-auto">
<div class="flex-1 flex items-center gap-2 bg-white/50 dark:bg-[#2c241b]/50 p-2 rounded-xl border border-stone-200 dark:border-stone-800 justify-center min-w-0">
<div class="size-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0">
<span class="material-symbols-outlined text-xl">diamond</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-tight truncate leading-tight">Gems</span>
<span class="text-base font-black text-[#181510] dark:text-white leading-none">150</span>
</div>
</div>
<div class="flex-1 flex items-center gap-2 bg-white/50 dark:bg-[#2c241b]/50 p-2 rounded-xl border border-stone-200 dark:border-stone-800 justify-center min-w-0">
<div class="size-8 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-xl">local_fire_department</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-tight truncate leading-tight">Streak</span>
<span class="text-base font-black text-[#181510] dark:text-white leading-none">7</span>
</div>
</div>
<div class="flex-1 flex items-center gap-2 bg-white/50 dark:bg-[#2c241b]/50 p-2 rounded-xl border border-stone-200 dark:border-stone-800 justify-center min-w-0">
<div class="size-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 shrink-0">
<span class="material-symbols-outlined text-xl">bolt</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-tight truncate leading-tight">XP</span>
<span class="text-base font-black text-[#181510] dark:text-white leading-none">1,200</span>
</div>
</div>
</div>
</div>
<div class="p-5 flex flex-col gap-6 pb-24">
<div class="w-full relative overflow-hidden rounded-2xl shadow-md min-h-[200px] sm:min-h-[240px] flex items-center group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXjtOq_oF80SjH4vsgEgpZ3HM03T9Zm0S_IgPHkXD-5hk0hT45PbdAyxD-NWzjSOOr319TGxJBU80uVwfeXAMYnJFhGjk4p3hyk4ULc9k4IrtWi5f2vjtOyw8Jr7IX_R-UjrhHMxIqqxRTP5vFFtZ8LpIjXDgjUY6nfgtg8zebLOveHEpyAY72rn6fY2gEOAnANrFA393e7NNIcEdB9dZTwf8aFVaW-Ol5e5OSQsDQKwJpOUogRlI6aEIGY8uB0tf0SbQrBvS7KMTS");'></div>
<div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
<div class="relative z-10 p-6 sm:p-8 max-w-lg">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4">
<span class="material-symbols-outlined text-sm">format_quote</span>
                    Quote of the day
                </div>
<h2 class="text-xl sm:text-3xl font-bold text-white leading-tight mb-3">
                    "Discipline is doing what needs to be done, even if you don't want to do it."
                </h2>
<p class="text-white/80 text-sm font-medium">— Unknown</p>
</div>
</div>
<div>
<h3 class="text-lg font-bold mb-4 px-1 text-[#181510] dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">grid_view</span>
                Quick Access
            </h3>
<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPw8U7a_vtDCpdiwWMrsLHNhjW9SZmvhhu-XTwRB8QMpc_XeziQivxOetF_BpaZBiGG6krfUzAYX_mLyXXh7X5fECi0Dc2KglRz0DZbnwi8cUFCQGk2_BrHIkCGw--RNFBGmPVuw3b8SdtgVsBlqRZ5P7ycnu9LUldcIrbh5n6w95c_M6VS2O531390PEI7DCOFe-gbCzWv7o9YlIdRUGKDSnzQs_Jv2XV7fKbJlPWnJLNab_ByO2dKdpIuPVw-Mh49TdSiwd4jJJG");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Daily Goals</p>
<p class="text-white/80 text-xs mt-1">3/5 Completed</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-primary flex items-center justify-center text-[#181510]">
<span class="material-symbols-outlined text-sm">flag</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTKUrm3W6_h-dGGpEG6sZRGPB0k1svnX8_XP7tiwIFt4Z8h5RTrTOEiNRywQPHWXy0ugBa5MDlBRjn2YWz6ma5OOZa2l-tFzhqIjv-LRfcQacSes0q4NUAKYigrp__72Pe2kvd9efnC7sYaZLCd9WApe5mR4FdZXGLw3_yBfqP8h0UmN-QFS4apLZrSbDdkgyeVQQOpawjevt7zG8WCNFN-4VRGoOeCqa0HZmRJJ33hINh3aeVQHjq9_acVWMmormTfO39GuXMjsOV");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Badges</p>
<p class="text-white/80 text-xs mt-1">12 Earned</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm">military_tech</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeplQr7A-zBTisNNQx6KPnpKAY6l1END6YOb6OCKcTVxJ2sB8vsWGWirbXx3r2gc9eMPvyBKhvK5SuWM8WTGzNZ8y79aIDLXbSxJDMrXnsL-UGCLth1mvgI1TMubb_Vi-QJvOUABxaEtqDLqjTxpQ4eWU9dFqAA7fIOPNuZ6oKGr5OvCBrPh6vtW3L20zRdJ_Bnx4CgFaRr1fTBZxzBG3g-7xCPzGgklLjN8bY1FdPExgz4uUrmvHzQwEOln4LcNsr9UY0aGZj9QkX");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Timetable</p>
<p class="text-white/80 text-xs mt-1">Next: Yoga 5PM</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm">calendar_today</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-bwHd3C729X-vJDUDbsrj__QSzCtRYNbsjjc7abw8CigZIlfr5OfvgYQH17nuN6UWJaB3pZRSNPFZeJ_n3WGpD0a56m7ZublXfVAzRz7PHKTeDh69wcjFt4sPNGSnucX8Qs8wpJHsxNmo_NweuEQqQIOGXq1y9hBlZuOucTHJHTJdCJHh1PyK8DIseg0iMEvc-YHh78plGHtvzwA9eA3IaD_04gyVeSo10Avaco0Gz24NIbCoPzUHuIVwIu_xIT_aoGcQCKHA7ICO");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Community</p>
<p class="text-white/80 text-xs mt-1">3 Friends Active</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm">groups</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9pYTPIlXVBt3jLy2W5pQmvsU5_bixTNJtJy-7uyTKOZ92OZXbCcTcqrmW54Vx7iFhIL_YdVAXxvNWe0Y1E9HS80hfk6wmc_OeSZx6ZYQjRqlq3XwLhjWtI1Fl4tomI40QeN3OBDUvanCL3kIMSai6v7GZs9bOJuPtdvs5WktnBG9PLUV3z_FDiX6RVhgR4200gQJS_GSNC23nxI9yP6ESLy1TOr6g92ciF0lKdwLWPzpZuocHvrQ7RliffBvT_HUu5HVV25XW88EJ");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Shop</p>
<p class="text-white/80 text-xs mt-1">New Arrivals</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm">shopping_bag</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwNGrQr0XH79lSoPXkqv8S1D0JoXBiIQ7r-4MKVXZ_4YH8fgEtzxziqJCq-6rpnXoqdxNVLrXa3fxzytkXGugoVdDB5XPgzeELDhzg9TrYNy8obPS1Z0B0AcdcN7KHVSVcvCTa9TwmOKVzMIUrZ6pONnI82s0qEH9_93V9TqUWscae-4dgqPIflVIUgYwrlFz293FgdSALwqfBJfUZbgrwXtfLucRLV4A5I3qANVS1scOXfAitpyLxCeAI9dES6SMDNPkYBknSXwmb");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Tournament</p>
<p class="text-white/80 text-xs mt-1">Gold League</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm">emoji_events</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="h-10"></div>
</div>
<div class="sm:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#231b0f]/95 backdrop-blur-xl border-t border-[#e6e0d9] dark:border-[#3e3427] flex items-center justify-between py-2 px-2 z-40 shadow-2xl">
<button class="flex-1 text-primary flex flex-col items-center gap-0.5">
<span class="material-symbols-outlined text-2xl">home</span>
<span class="text-[8px] font-bold">Home</span>
</button>
<button class="flex-1 text-[#8d7b5e] dark:text-[#a89b85] flex flex-col items-center gap-0.5">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
<span class="text-[8px] font-bold">MotionSense</span>
</button>
<button class="flex-1 text-[#8d7b5e] dark:text-[#a89b85] flex flex-col items-center gap-0.5">
<span class="material-symbols-outlined text-2xl">restaurant</span>
<span class="text-[8px] font-bold">PlanCalorie</span>
</button>
<div class="flex-1 flex items-center justify-center gap-1"><button class="text-[#8d7b5e] dark:text-[#a89b85] flex flex-col items-center gap-0.5">
<span class="material-symbols-outlined text-2xl">notifications</span>
<span class="text-[8px] font-bold">Smart Nudge</span>
</button></div>
<button class="flex-1 text-[#8d7b5e] dark:text-[#a89b85] flex flex-col items-center gap-0.5">
<span class="material-symbols-outlined text-2xl">dark_mode</span>
<span class="text-[8px] font-bold">CircadianSync</span>
</button>
<button class="flex-1 text-[#8d7b5e] dark:text-[#a89b85] flex flex-col items-center gap-0.5">
<span class="material-symbols-outlined text-2xl">self_improvement</span>
<span class="text-[8px] font-bold">ZenZone</span>
</button>
</div>
<div class="fixed bottom-24 right-6 sm:bottom-6 z-50">
<button class="flex items-center justify-center size-14 sm:size-16 rounded-full bg-primary shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[#181510] text-2xl sm:text-3xl">smart_toy</span>
</button>
</div>
</main>
<script>
    const menu = document.getElementById('general-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-menu');

    function toggleMenu() {
        menu.classList.toggle('-translate-x-full');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    const backdrop = document.getElementById('menu-backdrop');
    menuToggle.addEventListener('click', () => {
        backdrop.classList.toggle('hidden');
        setTimeout(() => backdrop.classList.toggle('opacity-100'), 10);
    });
    closeBtn.addEventListener('click', () => {
        backdrop.classList.remove('opacity-100');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    });
    backdrop.addEventListener('click', () => {
        toggleMenu();
        backdrop.classList.remove('opacity-100');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    });
</script>
</body></html>

