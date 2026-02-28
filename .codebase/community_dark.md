### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
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
                        "neon-yellow": "#FFE81F",
                        "neon-orange": "#FF9D00",
                        "neon-purple": "#B026FF",
                        "neon-blue": "#00F0FF",
                        "neon-green": "#39FF14",
                        "obsidian": "#050505",
                        "obsidian-light": "#121212",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    boxShadow: {
                        "neon-yellow": "0 0 5px #FFE81F, 0 0 10px #FFE81F",
                        "neon-orange": "0 0 5px #FF9D00, 0 0 10px #FF9D00",
                        "neon-purple": "0 0 5px #B026FF, 0 0 10px #B026FF",
                        "neon-blue": "0 0 5px #00F0FF, 0 0 10px #00F0FF",
                        "neon-green": "0 0 5px #39FF14, 0 0 10px #39FF14",
                    }
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
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-obsidian text-white h-screen w-full overflow-hidden flex flex-col transition-colors duration-200 selection:bg-neon-orange selection:text-black">
<header class="fixed top-0 inset-x-0 z-30 bg-obsidian/95 backdrop-blur-md px-4 py-3 border-b border-white/10">
<div class="flex flex-col gap-3">
<div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
<div class="flex items-center gap-3 bg-obsidian-light pl-1.5 pr-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(255,232,31,0.3)] border border-neon-yellow/50 shrink-0">
<div class="size-8 rounded-full bg-neon-yellow/10 flex items-center justify-center text-neon-yellow">
<span class="material-symbols-outlined text-[20px] filled" style="font-variation-settings: 'FILL' 1">diamond</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">Gems</span>
<span class="text-base font-bold text-white">150</span>
</div>
</div>
<div class="flex items-center gap-3 bg-obsidian-light pl-1.5 pr-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(255,157,0,0.3)] border border-neon-orange/50 shrink-0">
<div class="size-8 rounded-full bg-neon-orange/10 flex items-center justify-center text-neon-orange">
<span class="material-symbols-outlined text-[20px] filled" style="font-variation-settings: 'FILL' 1">local_fire_department</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">Streak</span>
<span class="text-base font-bold text-white">7</span>
</div>
</div>
<div class="flex items-center gap-3 bg-obsidian-light pl-1.5 pr-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(176,38,255,0.3)] border border-neon-purple/50 shrink-0">
<div class="size-8 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
<span class="material-symbols-outlined text-[20px] filled" style="font-variation-settings: 'FILL' 1">bolt</span>
</div>
<div class="flex flex-col leading-none">
<span class="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">XP</span>
<span class="text-base font-bold text-white">1,200</span>
</div>
</div>
</div>
<div class="flex items-center justify-between mt-1">
<div>
<h1 class="text-xl font-bold tracking-tight text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Community Hub</h1>
<p class="text-xs text-stone-400">Connect, Share, and Support</p>
</div>
<div class="size-9 rounded-full bg-cover bg-center border-2 border-neon-orange shadow-[0_0_8px_rgba(255,157,0,0.6)]" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
</div>
</div>
</header>
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col pt-[128px]">
<div class="p-4 flex flex-col gap-6 max-w-xl mx-auto w-full">
<div class="bg-obsidian-light rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(255,157,0,0.15)] border border-neon-orange/40 flex flex-col group transition-all hover:shadow-[0_0_20px_rgba(255,157,0,0.3)] hover:border-neon-orange/70">
<div class="w-full h-[180px] relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Community support banner" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-bwHd3C729X-vJDUDbsrj__QSzCtRYNbsjjc7abw8CigZIlfr5OfvgYQH17nuN6UWJaB3pZRSNPFZeJ_n3WGpD0a56m7ZublXfVAzRz7PHKTeDh69wcjFt4sPNGSnucX8Qs8wpJHsxNmo_NweuEQqQIOGXq1y9hBlZuOucTHJHTJdCJHh1PyK8DIseg0iMEvc-YHh78plGHtvzwA9eA3IaD_04gyVeSo10Avaco0Gz24NIbCoPzUHuIVwIu_xIT_aoGcQCKHA7ICO");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-obsidian-light to-transparent"></div>
<div class="absolute top-4 left-4">
<span class="bg-red-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(220,38,38,0.5)] border border-red-400 flex items-center gap-1">
<span class="material-symbols-outlined text-xs">favorite</span> Urgent
                         </span>
</div>
</div>
<div class="p-5 flex-1 flex flex-col justify-center">
<div class="flex justify-between items-start mb-2">
<div>
<span class="text-xs font-bold text-neon-orange uppercase tracking-wider mb-1 block drop-shadow-[0_0_2px_rgba(255,157,0,0.8)]">Donation for Surgery</span>
<h2 class="text-xl font-bold text-white leading-tight">Genetic Obesity Medical Fund</h2>
</div>
</div>
<p class="text-stone-300 text-sm mb-5 leading-relaxed">
                        Join our community in supporting Michael's life-changing surgery. Every contribution brings us closer to a healthier future.
                    </p>
<div class="space-y-3">
<div class="flex justify-between text-xs font-bold text-white">
<span class="text-neon-yellow drop-shadow-[0_0_3px_rgba(255,232,31,0.5)]">$12,450 raised</span>
<span class="text-stone-400">Goal: $20,000</span>
</div>
<div class="w-full bg-stone-800 rounded-full h-2.5 overflow-hidden border border-white/10">
<div class="bg-neon-orange h-full rounded-full relative shadow-[0_0_10px_rgba(255,157,0,0.8)]" style="width: 62%">
<div class="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
<div class="flex items-center justify-between mt-1">
<p class="text-xs text-stone-400">245 donors this week</p>
<button class="bg-neon-orange hover:bg-neon-orange/90 text-black font-bold px-4 py-2 rounded-lg text-xs transition-all shadow-[0_0_10px_rgba(255,157,0,0.5)] hover:shadow-[0_0_15px_rgba(255,157,0,0.8)] shrink-0 uppercase tracking-wide">
        Donate Now
    </button>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-4 mb-20">
<div class="flex items-center justify-between px-1">
<h3 class="text-lg font-bold text-white flex items-center gap-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
<span class="material-symbols-outlined text-neon-orange drop-shadow-[0_0_5px_rgba(255,157,0,0.8)]">forum</span>
                        Messages
                    </h3>
<div class="flex gap-2">
<button class="size-8 flex items-center justify-center rounded-full hover:bg-white/10 text-stone-400 transition-colors">
<span class="material-symbols-outlined text-xl">search</span>
</button>
<button class="size-8 flex items-center justify-center rounded-full hover:bg-white/10 text-stone-400 transition-colors">
<span class="material-symbols-outlined text-xl">edit_square</span>
</button>
</div>
</div>
<div class="flex gap-3 overflow-x-auto no-scrollbar pb-1">
<button class="px-5 py-2 rounded-full bg-white text-black text-sm font-bold whitespace-nowrap shadow-[0_0_10px_rgba(255,255,255,0.4)]">All Chats</button>
<button class="px-5 py-2 rounded-full bg-obsidian-light text-stone-400 border border-stone-800 hover:border-white/30 hover:text-white transition-colors text-sm font-bold whitespace-nowrap">Groups</button>
<button class="px-5 py-2 rounded-full bg-obsidian-light text-stone-400 border border-stone-800 hover:border-white/30 hover:text-white transition-colors text-sm font-bold whitespace-nowrap">Mentions</button>
</div>
<div class="flex flex-col gap-4">
<div class="p-4 rounded-2xl bg-obsidian-light border border-neon-purple/40 shadow-[0_0_10px_rgba(176,38,255,0.1)] hover:shadow-[0_0_15px_rgba(176,38,255,0.25)] hover:border-neon-purple/70 transition-all cursor-pointer flex gap-4 items-center group relative overflow-hidden">
<div class="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div class="size-12 rounded-full bg-stone-800 shrink-0 relative overflow-hidden ring-2 ring-neon-purple ring-offset-2 ring-offset-obsidian shadow-[0_0_10px_rgba(176,38,255,0.5)]">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPw8U7a_vtDCpdiwWMrsLHNhjW9SZmvhhu-XTwRB8QMpc_XeziQivxOetF_BpaZBiGG6krfUzAYX_mLyXXh7X5fECi0Dc2KglRz0DZbnwi8cUFCQGk2_BrHIkCGw--RNFBGmPVuw3b8SdtgVsBlqRZ5P7ycnu9LUldcIrbh5n6w95c_M6VS2O531390PEI7DCOFe-gbCzWv7o9YlIdRUGKDSnzQs_Jv2XV7fKbJlPWnJLNab_ByO2dKdpIuPVw-Mh49TdSiwd4jJJG')"></div>
</div>
<div class="flex-1 min-w-0 z-10">
<div class="flex justify-between items-center mb-0.5">
<div class="flex items-center gap-1.5">
<h3 class="font-bold text-white truncate text-base drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">Weight Loss Warriors</h3>
<span class="material-symbols-outlined text-neon-purple text-sm filled drop-shadow-[0_0_5px_rgba(176,38,255,0.8)]" style="font-variation-settings: 'FILL' 1">verified</span>
</div>
<span class="text-xs text-neon-purple font-bold whitespace-nowrap drop-shadow-[0_0_3px_rgba(176,38,255,0.5)]">12:45 PM</span>
</div>
<div class="flex justify-between items-center">
<p class="text-sm text-stone-300 font-medium truncate pr-4 group-hover:text-white transition-colors">
<span class="text-stone-500 font-normal">Sarah:</span> Has anyone tried the new keto recipe?
                                 </p>
<div class="size-5 rounded-full bg-neon-purple text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(176,38,255,0.8)]">5</div>
</div>
</div>
</div>
<div class="p-4 rounded-2xl bg-obsidian-light border border-neon-green/40 shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_15px_rgba(57,255,20,0.25)] hover:border-neon-green/70 transition-all cursor-pointer flex gap-4 items-center group">
<div class="size-12 rounded-full bg-stone-800 shrink-0 relative overflow-hidden border border-neon-green/30">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9pYTPIlXVBt3jLy2W5pQmvsU5_bixTNJtJy-7uyTKOZ92OZXbCcTcqrmW54Vx7iFhIL_YdVAXxvNWe0Y1E9HS80hfk6wmc_OeSZx6ZYQjRqlq3XwLhjWtI1Fl4tomI40QeN3OBDUvanCL3kIMSai6v7GZs9bOJuPtdvs5WktnBG9PLUV3z_FDiX6RVhgR4200gQJS_GSNC23nxI9yP6ESLy1TOr6g92ciF0lKdwLWPzpZuocHvrQ7RliffBvT_HUu5HVV25XW88EJ')"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-white truncate text-base">Nutrition Tips &amp; Tricks</h3>
<span class="text-xs text-stone-500 font-medium whitespace-nowrap">10:30 AM</span>
</div>
<p class="text-sm text-stone-500 truncate group-hover:text-neon-green/90 transition-colors">
                             Shared a photo: <span class="italic">Meal Prep Sunday!</span>
</p>
</div>
</div>
<div class="p-4 rounded-2xl bg-obsidian-light border border-neon-blue/40 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:border-neon-blue/70 transition-all cursor-pointer flex gap-4 items-center group">
<div class="size-12 rounded-full bg-stone-800 shrink-0 relative overflow-hidden border border-neon-blue/30">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwNGrQr0XH79lSoPXkqv8S1D0JoXBiIQ7r-4MKVXZ_4YH8fgEtzxziqJCq-6rpnXoqdxNVLrXa3fxzytkXGugoVdDB5XPgzeELDhzg9TrYNy8obPS1Z0B0AcdcN7KHVSVcvCTa9TwmOKVzMIUrZ6pONnI82s0qEH9_93V9TqUWscae-4dgqPIflVIUgYwrlFz293FgdSALwqfBJfUZbgrwXtfLucRLV4A5I3qANVS1scOXfAitpyLxCeAI9dES6SMDNPkYBknSXwmb')"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-white truncate text-base">Marathon Training</h3>
<span class="text-xs text-stone-500 font-medium whitespace-nowrap">Yesterday</span>
</div>
<p class="text-sm text-stone-500 truncate group-hover:text-neon-blue/90 transition-colors">
                             Coach Mike: Don't forget to stretch after the long run.
                           </p>
</div>
</div>
<div class="p-4 rounded-2xl bg-obsidian-light border border-stone-700 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-stone-900 transition-all cursor-pointer flex gap-4 items-center group">
<div class="size-12 rounded-full bg-stone-800 shrink-0 relative">
<div class="absolute inset-0 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTKUrm3W6_h-dGGpEG6sZRGPB0k1svnX8_XP7tiwIFt4Z8h5RTrTOEiNRywQPHWXy0ugBa5MDlBRjn2YWz6ma5OOZa2l-tFzhqIjv-LRfcQacSes0q4NUAKYigrp__72Pe2kvd9efnC7sYaZLCd9WApe5mR4FdZXGLw3_yBfqP8h0UmN-QFS4apLZrSbDdkgyeVQQOpawjevt7zG8WCNFN-4VRGoOeCqa0HZmRJJ33hINh3aeVQHjq9_acVWMmormTfO39GuXMjsOV')"></div>
<div class="absolute bottom-0 right-0 size-3.5 bg-green-500 rounded-full border-2 border-obsidian shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-white truncate text-base">Alex Johnson</h3>
<span class="text-xs text-stone-500 font-medium whitespace-nowrap">Yesterday</span>
</div>
<p class="text-sm text-stone-500 truncate group-hover:text-stone-300 transition-colors">
                             Thanks for the donation! Really appreciate it.
                           </p>
</div>
</div>
<div class="p-4 rounded-2xl bg-obsidian-light border border-neon-orange/30 shadow-[0_0_10px_rgba(255,157,0,0.1)] hover:bg-stone-900 transition-all cursor-pointer flex gap-4 items-center group relative overflow-hidden">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-neon-orange rounded-l-2xl shadow-[0_0_10px_rgba(255,157,0,0.8)]"></div>
<div class="size-12 rounded-full bg-stone-800 shrink-0 relative">
<div class="absolute inset-0 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeplQr7A-zBTisNNQx6KPnpKAY6l1END6YOb6OCKcTVxJ2sB8vsWGWirbXx3r2gc9eMPvyBKhvK5SuWM8WTGzNZ8y79aIDLXbSxJDMrXnsL-UGCLth1mvgI1TMubb_Vi-QJvOUABxaEtqDLqjTxpQ4eWU9dFqAA7fIOPNuZ6oKGr5OvCBrPh6vtW3L20zRdJ_Bnx4CgFaRr1fTBZxzBG3g-7xCPzGgklLjN8bY1FdPExgz4uUrmvHzQwEOln4LcNsr9UY0aGZj9QkX')"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-center mb-0.5">
<h3 class="font-bold text-white truncate text-base">Dr. Emily Stone</h3>
<span class="text-xs text-neon-orange font-bold whitespace-nowrap drop-shadow-[0_0_3px_rgba(255,157,0,0.6)]">Mon</span>
</div>
<div class="flex justify-between items-center">
<p class="text-sm text-white font-medium truncate">
                                    Your progress charts are looking fantastic!
                                </p>
<div class="size-2 rounded-full bg-neon-orange shrink-0 shadow-[0_0_5px_rgba(255,157,0,0.8)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="fixed bottom-[96px] right-6 z-40">
<button class="flex items-center justify-center size-14 rounded-full bg-neon-orange shadow-[0_0_20px_rgba(255,157,0,0.6)] hover:scale-105 active:scale-95 transition-transform text-black border border-white/20">
<span class="material-symbols-outlined text-2xl">add_comment</span>
</button>
</div>
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-xl border-t border-white/10 pb-safe pt-2 px-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
<div class="flex justify-between items-center max-w-lg mx-auto">
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group relative">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-neon-orange rounded-b-full shadow-[0_0_10px_rgba(255,157,0,0.8)]"></div>
<span class="material-symbols-outlined text-neon-orange text-[26px] filled group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(255,157,0,0.6)]" style="font-variation-settings: 'FILL' 1">home</span>
<span class="text-[10px] font-bold text-neon-orange drop-shadow-[0_0_2px_rgba(255,157,0,0.6)]">Home</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-stone-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">fitness_center</span>
<span class="text-[10px] font-medium whitespace-nowrap">MotionSense</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-stone-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">restaurant</span>
<span class="text-[10px] font-medium whitespace-nowrap">PlanCalorie</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-stone-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">notifications_active</span>
<span class="text-[10px] font-medium whitespace-nowrap">Smart Nudge</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-stone-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">bedtime</span>
<span class="text-[10px] font-medium whitespace-nowrap">CircadianSync</span>
</button>
<button class="flex flex-col items-center justify-center w-full py-2 gap-1 group text-stone-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px] group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">self_improvement</span>
<span class="text-[10px] font-medium whitespace-nowrap">ZenZone</span>
</button>
</div>
</nav>
</main>
</body></html>