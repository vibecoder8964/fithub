### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Community Hub &amp; Initiatives</title>
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
    }main {
        padding-bottom: 80px; 
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
<body class="bg-background-light dark:bg-background-dark text-[#181510] dark:text-white h-screen w-full overflow-hidden flex flex-col transition-colors duration-200">
<header class="fixed top-0 inset-x-0 z-30 bg-white/95 dark:bg-[#231b0f]/95 backdrop-blur-md px-4 py-3 border-b border-[#e6e0d9] dark:border-[#3e3427]">
<div class="flex flex-col gap-3">
<div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pl-1.5 pr-4 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800 shrink-0">
<div class="size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
<span class="material-symbols-outlined text-[20px] filled" style="font-variation-settings: 'FILL' 1">diamond</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">Gems</span>
<span class="text-base font-bold text-[#181510] dark:text-white">150</span>
</div>
</div>
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pl-1.5 pr-4 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800 shrink-0">
<div class="size-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
<span class="material-symbols-outlined text-[20px] filled" style="font-variation-settings: 'FILL' 1">local_fire_department</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">Streak</span>
<span class="text-base font-bold text-[#181510] dark:text-white">7</span>
</div>
</div>
<div class="flex items-center gap-3 bg-white dark:bg-[#2c241b] pl-1.5 pr-4 py-1.5 rounded-full shadow-sm border border-stone-200 dark:border-stone-800 shrink-0">
<div class="size-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500">
<span class="material-symbols-outlined text-[20px] filled" style="font-variation-settings: 'FILL' 1">bolt</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] text-[#8d7b5e] dark:text-[#a89b85] font-bold uppercase tracking-wider mb-0.5">XP</span>
<span class="text-base font-bold text-[#181510] dark:text-white">1,200</span>
</div>
</div>
</div>
<div class="flex items-center justify-between">
<div>
<h1 class="text-xl font-bold tracking-tight text-[#181510] dark:text-white">Community Hub</h1>
<p class="text-xs text-[#8d7b5e]">Connect, Share, and Support</p>
</div>
<div class="size-9 rounded-full bg-cover bg-center border-2 border-primary" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
</div>
</div>
</header>
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col pt-[124px]">
<div class="p-4 flex flex-col gap-6 max-w-xl mx-auto w-full">
<div class="bg-white dark:bg-[#2c241b] rounded-2xl overflow-hidden shadow-md border border-[#e6e0d9] dark:border-[#3e3427] flex flex-col group transition-all hover:shadow-lg">
<div class="w-full h-[180px] relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Community support banner" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-bwHd3C729X-vJDUDbsrj__QSzCtRYNbsjjc7abw8CigZIlfr5OfvgYQH17nuN6UWJaB3pZRSNPFZeJ_n3WGpD0a56m7ZublXfVAzRz7PHKTeDh69wcjFt4sPNGSnucX8Qs8wpJHsxNmo_NweuEQqQIOGXq1y9hBlZuOucTHJHTJdCJHh1PyK8DIseg0iMEvc-YHh78plGHtvzwA9eA3IaD_04gyVeSo10Avaco0Gz24NIbCoPzUHuIVwIu_xIT_aoGcQCKHA7ICO");'></div>
<div class="absolute inset-0 bg-black/10"></div>
<div class="absolute top-4 left-4">
<span class="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
<span class="material-symbols-outlined text-xs">favorite</span> Urgent
                         </span>
</div>
</div>
<div class="p-5 flex-1 flex flex-col justify-center">
<div class="flex justify-between items-start mb-2">
<div>
<span class="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">Donation for Surgery</span>
<h2 class="text-xl font-bold text-[#181510] dark:text-white leading-tight">Genetic Obesity Medical Fund</h2>
</div>
</div>
<p class="text-[#8d7b5e] dark:text-[#a89b85] text-sm mb-5 leading-relaxed">
                        Join our community in supporting Michael's life-changing surgery. Every contribution brings us closer to a healthier future.
                    </p>
<div class="space-y-3">
<div class="flex justify-between text-xs font-bold text-[#181510] dark:text-white">
<span>$12,450 raised</span>
<span class="text-[#8d7b5e] dark:text-[#a89b85]">Goal: $20,000</span>
</div>
<div class="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2.5 overflow-hidden">
<div class="bg-primary h-full rounded-full relative" style="width: 62%">
<div class="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
<div class="flex items-center justify-between mt-1">
<p class="text-xs text-[#8d7b5e]">245 donors this week</p>
<button class="bg-primary hover:bg-primary/90 text-[#181510] font-bold px-4 py-2 rounded-lg text-xs transition-colors shadow-sm shadow-primary/20 shrink-0 uppercase tracking-wide">
        Donate Now
    </button>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-4 mb-20">
<div class="flex items-center justify-between px-1">
<h3 class="text-lg font-bold text-[#181510] dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">forum</span>
                        Messages
                    </h3>
<div class="flex gap-2">
<button class="size-8 flex items-center justify-center rounded-full hover:bg-background-light dark:hover:bg-[#3e3427] text-[#8d7b5e] transition-colors">
<span class="material-symbols-outlined text-xl">search</span>
</button>
<button class="size-8 flex items-center justify-center rounded-full hover:bg-background-light dark:hover:bg-[#3e3427] text-[#8d7b5e] transition-colors">
<span class="material-symbols-outlined text-xl">edit_square</span>
</button>
</div>
</div>
<div class="flex gap-3 overflow-x-auto no-scrollbar pb-1">
<button class="px-5 py-2 rounded-full bg-[#181510] dark:bg-white text-white dark:text-[#181510] text-sm font-bold whitespace-nowrap shadow-sm">All Chats</button>
<button class="px-5 py-2 rounded-full bg-white dark:bg-[#2c241b] text-[#8d7b5e] dark:text-[#a89b85] border border-[#e6e0d9] dark:border-[#3e3427] hover:bg-stone-50 dark:hover:bg-[#322a21] transition-colors text-sm font-bold whitespace-nowrap">Groups</button>
<button class="px-5 py-2 rounded-full bg-white dark:bg-[#2c241b] text-[#8d7b5e] dark:text-[#a89b85] border border-[#e6e0d9] dark:border-[#3e3427] hover:bg-stone-50 dark:hover:bg-[#322a21] transition-colors text-sm font-bold whitespace-nowrap">Mentions</button>
</div>
<div class="flex flex-col gap-3">
<div class="p-4 rounded-2xl bg-white dark:bg-[#2c241b] border-l-4 border-primary shadow-sm hover:shadow-md transition-all cursor-pointer flex gap-4 items-center group relative overflow-hidden">
<div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="size-12 rounded-full bg-stone-200 shrink-0 relative overflow-hidden ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-[#2c241b]">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPw8U7a_vtDCpdiwWMrsLHNhjW9SZmvhhu-XTwRB8QMpc_XeziQivxOetF_BpaZBiGG6krfUzAYX_mLyXXh7X5fECi0Dc2KglRz0DZbnwi8cUFCQGk2_BrHIkCGw--RNFBGmPVuw3b8SdtgVsBlqRZ5P7ycnu9LUldcIrbh5n6w95c_M6VS2O531390PEI7DCOFe-gbCzWv7o9YlIdRUGKDSnzQs_Jv2XV7fKbJlPWnJLNab_ByO2dKdpIuPVw-Mh49TdSiwd4jJJG')"></div>
</div>
<div class="flex-1 min-w-0 z-10">
<div class="flex justify-between items-center mb-0.5">
<div class="flex items-center gap-1.5">
<h3 class="font-bold text-[#181510] dark:text-white truncate text-base">Weight Loss Warriors</h3>
<span class="material-symbols-outlined text-primary text-sm filled" style="font-variation-settings: 'FILL' 1">verified</span>
</div>
<span class="text-xs text-primary font-bold whitespace-nowrap">12:45 PM</span>
</div>
<div class="flex justify-between items-center">
<p class="text-sm text-[#181510] dark:text-white font-medium truncate pr-4">
<span class="text-[#8d7b5e] font-normal">Sarah:</span> Has anyone tried the new keto recipe?
                                 </p>
<div class="size-5 rounded-full bg-primary text-[#181510] text-[10px] font-bold flex items-center justify-center shrink-0">5</div>
</div>
</div>
</div>
<div class="p-4 rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] shadow-sm hover:bg-stone-50 dark:hover:bg-[#322a21] transition-all cursor-pointer flex gap-4 items-center group">
<div class="size-12 rounded-full bg-stone-200 shrink-0 relative overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9pYTPIlXVBt3jLy2W5pQmvsU5_bixTNJtJy-7uyTKOZ92OZXbCcTcqrmW54Vx7iFhIL_YdVAXxvNWe0Y1E9HS80hfk6wmc_OeSZx6ZYQjRqlq3XwLhjWtI1Fl4tomI40QeN3OBDUvanCL3kIMSai6v7GZs9bOJuPtdvs5WktnBG9PLUV3z_FDiX6RVhgR4200gQJS_GSNC23nxI9yP6ESLy1TOr6g92ciF0lKdwLWPzpZuocHvrQ7RliffBvT_HUu5HVV25XW88EJ')"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-[#181510] dark:text-white truncate text-base">Nutrition Tips &amp; Tricks</h3>
<span class="text-xs text-[#8d7b5e] font-medium whitespace-nowrap">10:30 AM</span>
</div>
<p class="text-sm text-[#8d7b5e] dark:text-stone-400 truncate group-hover:text-[#181510] dark:group-hover:text-white transition-colors">
                             Shared a photo: <span class="italic">Meal Prep Sunday!</span>
</p>
</div>
</div>
<div class="p-4 rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] shadow-sm hover:bg-stone-50 dark:hover:bg-[#322a21] transition-all cursor-pointer flex gap-4 items-center group">
<div class="size-12 rounded-full bg-stone-200 shrink-0 relative overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwNGrQr0XH79lSoPXkqv8S1D0JoXBiIQ7r-4MKVXZ_4YH8fgEtzxziqJCq-6rpnXoqdxNVLrXa3fxzytkXGugoVdDB5XPgzeELDhzg9TrYNy8obPS1Z0B0AcdcN7KHVSVcvCTa9TwmOKVzMIUrZ6pONnI82s0qEH9_93V9TqUWscae-4dgqPIflVIUgYwrlFz293FgdSALwqfBJfUZbgrwXtfLucRLV4A5I3qANVS1scOXfAitpyLxCeAI9dES6SMDNPkYBknSXwmb')"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-[#181510] dark:text-white truncate text-base">Marathon Training</h3>
<span class="text-xs text-[#8d7b5e] font-medium whitespace-nowrap">Yesterday</span>
</div>
<p class="text-sm text-[#8d7b5e] dark:text-stone-400 truncate group-hover:text-[#181510] dark:group-hover:text-white transition-colors">
                             Coach Mike: Don't forget to stretch after the long run.
                           </p>
</div>
</div>
<div class="p-4 rounded-2xl bg-white dark:bg-[#2c241b] border border-[#e6e0d9] dark:border-[#3e3427] shadow-sm hover:bg-stone-50 dark:hover:bg-[#322a21] transition-all cursor-pointer flex gap-4 items-center group">
<div class="size-12 rounded-full bg-stone-200 shrink-0 relative">
<div class="absolute inset-0 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTKUrm3W6_h-dGGpEG6sZRGPB0k1svnX8_XP7tiwIFt4Z8h5RTrTOEiNRywQPHWXy0ugBa5MDlBRjn2YWz6ma5OOZa2l-tFzhqIjv-LRfcQacSes0q4NUAKYigrp__72Pe2kvd9efnC7sYaZLCd9WApe5mR4FdZXGLw3_yBfqP8h0UmN-QFS4apLZrSbDdkgyeVQQOpawjevt7zG8WCNFN-4VRGoOeCqa0HZmRJJ33hINh3aeVQHjq9_acVWMmormTfO39GuXMjsOV')"></div>
<div class="absolute bottom-0 right-0 size-3.5 bg-green-500 rounded-full border-2 border-white dark:border-[#2c241b]"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-[#181510] dark:text-white truncate text-base">Alex Johnson</h3>
<span class="text-xs text-[#8d7b5e] font-medium whitespace-nowrap">Yesterday</span>
</div>
<p class="text-sm text-[#8d7b5e] dark:text-stone-400 truncate group-hover:text-[#181510] dark:group-hover:text-white transition-colors">
                             Thanks for the donation! Really appreciate it.
                           </p>
</div>
</div>
<div class="p-4 rounded-2xl bg-white dark:bg-[#2c241b] border border-primary/20 dark:border-primary/20 shadow-sm hover:bg-stone-50 dark:hover:bg-[#322a21] transition-all cursor-pointer flex gap-4 items-center group relative overflow-hidden">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"></div>
<div class="size-12 rounded-full bg-stone-200 shrink-0 relative">
<div class="absolute inset-0 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeplQr7A-zBTisNNQx6KPnpKAY6l1END6YOb6OCKcTVxJ2sB8vsWGWirbXx3r2gc9eMPvyBKhvK5SuWM8WTGzNZ8y79aIDLXbSxJDMrXnsL-UGCLth1mvgI1TMubb_Vi-QJvOUABxaEtqDLqjTxpQ4eWU9dFqAA7fIOPNuZ6oKGr5OvCBrPh6vtW3L20zRdJ_Bnx4CgFaRr1fTBZxzBG3g-7xCPzGgklLjN8bY1FdPExgz4uUrmvHzQwEOln4LcNsr9UY0aGZj9QkX')"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-[#181510] dark:text-white truncate text-base">Dr. Emily Stone</h3>
<span class="text-xs text-primary font-bold whitespace-nowrap">Mon</span>
</div>
<div class="flex justify-between items-center">
<p class="text-sm text-[#181510] dark:text-white font-medium truncate">
                                    Your progress charts are looking fantastic!
                                </p>
<div class="size-2 rounded-full bg-primary shrink-0"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="fixed bottom-[96px] right-6 z-40">
<button class="flex items-center justify-center size-14 rounded-full bg-primary shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform text-[#181510]">
<span class="material-symbols-outlined text-2xl">add_comment</span>
</button>
</div>
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#231b0f]/95 backdrop-blur-md border-t border-[#e6e0d9] dark:border-[#3e3427] pb-safe pt-2 px-2">
<div class="flex justify-between items-center max-w-lg mx-auto">
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group">
<span class="material-symbols-outlined text-primary text-[26px] filled group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 1">home</span>
<span class="text-[10px] font-bold text-primary">Home</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#181510] dark:hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">fitness_center</span>
<span class="text-[10px] font-medium whitespace-nowrap">MotionSense</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#181510] dark:hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">restaurant</span>
<span class="text-[10px] font-medium whitespace-nowrap">PlanCalorie</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#181510] dark:hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">notifications_active</span>
<span class="text-[10px] font-medium whitespace-nowrap">Smart Nudge</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#181510] dark:hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">bedtime</span>
<span class="text-[10px] font-medium whitespace-nowrap">CircadianSync</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-[#8d7b5e] dark:text-[#a89b85] hover:text-[#181510] dark:hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">self_improvement</span>
<span class="text-[10px] font-medium whitespace-nowrap">ZenZone</span>
</button>
</div>
</nav>
</main>
</body></html>