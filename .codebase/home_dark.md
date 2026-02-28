### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Futuristic Neon Mobile Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00",
                        "obsidian": "#080808",
                        "neon-orange": "#ff9d00",
                        "neon-gold": "#ffd700",
                        "neon-purple": "#bc13fe",
                        "neon-cyan": "#00ffff",
                        "neon-green": "#39ff14",
                        "neon-coral": "#ff7f50",
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
            background-color: #080808;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .neon-border-orange {
            border: 1px solid rgba(255, 157, 0, 0.8);
            box-shadow: 0 0 15px rgba(255, 157, 0, 0.5), inset 0 0 5px rgba(255, 157, 0, 0.2);
        }
        .neon-border-gold {
            border: 1px solid rgba(255, 215, 0, 0.8);
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.5), inset 0 0 5px rgba(255, 215, 0, 0.2);
        }
        .neon-border-purple {
            border: 1px solid rgba(188, 19, 254, 0.8);
            box-shadow: 0 0 15px rgba(188, 19, 254, 0.5), inset 0 0 5px rgba(188, 19, 254, 0.2);
        }
        .neon-border-cyan {
            border: 1px solid rgba(0, 255, 255, 0.8);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.5), inset 0 0 5px rgba(0, 255, 255, 0.2);
        }
        .neon-border-green {
            border: 1px solid rgba(57, 255, 20, 0.8);
            box-shadow: 0 0 15px rgba(57, 255, 20, 0.5), inset 0 0 5px rgba(57, 255, 20, 0.2);
        }
        .neon-border-coral {
            border: 1px solid rgba(255, 127, 80, 0.8);
            box-shadow: 0 0 15px rgba(255, 127, 80, 0.5), inset 0 0 5px rgba(255, 127, 80, 0.2);
        }
        .neon-border-white {
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.3), inset 0 0 5px rgba(255, 255, 255, 0.1);
        }
        .nav-glow {
            border-top: 2px solid #ff9d00;
            box-shadow: 0 -4px 15px rgba(255, 157, 0, 0.4);
        }
        @media (max-width: 640px) {
            .card-indicator-icon {
                @apply size-8 rounded-full bg-primary flex items-center justify-center text-[#080808] !important;
            }
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
<body class="bg-obsidian text-white h-screen w-full overflow-hidden flex transition-colors duration-200">
<aside class="hidden sm:flex w-[72px] h-full flex-col items-center justify-between py-6 bg-obsidian border-r border-white/10 shrink-0 z-20 shadow-sm">
<button class="p-3 rounded-xl hover:bg-white/10 text-white transition-colors">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
<div class="flex flex-col gap-5 items-center w-full">
<button class="p-2 rounded-full hover:bg-white/10 text-white/60">
<span class="material-symbols-outlined text-2xl">light_mode</span>
</button>
<div class="size-10 rounded-full bg-cover bg-center border-2 border-primary neon-border-orange" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnXQ7dssyymiRCuCoyf4zPjK3ycXOzky7N82bQJiZj4pmNvDeBCp4MQ51rHvCiEZCOP4Tr-SpaeYrGVEQERrwEYIlPOlX9-clZ86tQRViWy7eIP8jsjat6fAq54sEgZag5sfVyb8XWhY3t1alOOqZzQExgvJJT96kPcEyrXpSFwyOhWdZvyskJLXQ6RazhKARLhh44VRvdP4bgFwshitk3GssfRb2LfRchMxcaxHx7nLRVVbpE2OXNRnK3G8mgYHwNWBae6Voh4hsU");'></div>
<button class="p-2 rounded-xl hover:bg-red-900/20 text-white/60 hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-2xl">logout</span>
</button>
</div>
</aside>
<main class="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col bg-obsidian">
<div class="sticky top-0 right-0 left-0 z-30 bg-obsidian/80 backdrop-blur-md px-4 py-3 border-b border-white/5">
<div class="flex w-full items-center justify-between gap-3 max-w-2xl mx-auto">
<div class="flex-1 flex items-center gap-2 bg-white/5 p-2 rounded-xl neon-border-gold justify-center min-w-0">
<div class="size-8 rounded-lg bg-orange-900/20 flex items-center justify-center text-neon-gold shrink-0">
<span class="material-symbols-outlined text-xl">diamond</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-[10px] text-white/40 font-bold uppercase tracking-tight truncate leading-tight">Gems</span>
<span class="text-base font-black text-white leading-none">150</span>
</div>
</div>
<div class="flex-1 flex items-center gap-2 bg-white/5 p-2 rounded-xl neon-border-orange justify-center min-w-0">
<div class="size-8 rounded-lg bg-orange-900/20 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-xl">local_fire_department</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-[10px] text-white/40 font-bold uppercase tracking-tight truncate leading-tight">Streak</span>
<span class="text-base font-black text-white leading-none">7</span>
</div>
</div>
<div class="flex-1 flex items-center gap-2 bg-white/5 p-2 rounded-xl neon-border-purple justify-center min-w-0">
<div class="size-8 rounded-lg bg-purple-900/20 flex items-center justify-center text-neon-purple shrink-0">
<span class="material-symbols-outlined text-xl">bolt</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-[10px] text-white/40 font-bold uppercase tracking-tight truncate leading-tight">XP</span>
<span class="text-base font-black text-white leading-none">1,200</span>
</div>
</div>
</div>
</div>
<div class="p-5 flex flex-col gap-6 pb-32">
<div class="w-full relative overflow-hidden rounded-2xl shadow-md min-h-[200px] sm:min-h-[240px] flex items-center group neon-border-white">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXjtOq_oF80SjH4vsgEgpZ3HM03T9Zm0S_IgPHkXD-5hk0hT45PbdAyxD-NWzjSOOr319TGxJBU80uVwfeXAMYnJFhGjk4p3hyk4ULc9k4IrtWi5f2vjtOyw8Jr7IX_R-UjrhHMxIqqxRTP5vFFtZ8LpIjXDgjUY6nfgtg8zebLOveHEpyAY72rn6fY2gEOAnANrFA393e7NNIcEdB9dZTwf8aFVaW-Ol5e5OSQsDQKwJpOUogRlI6aEIGY8uB0tf0SbQrBvS7KMTS");'></div>
<div class="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
<div class="relative z-10 p-6 sm:p-8 max-w-lg">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4">
<span class="material-symbols-outlined text-sm">format_quote</span>
                        Quote of the day
                    </div>
<h2 class="text-xl sm:text-3xl font-bold text-white leading-tight mb-3">
                        "Discipline is doing what needs to be done, even if you don't want to do it."
                    </h2>
<p class="text-white/60 text-sm font-medium">— Unknown</p>
</div>
</div>
<div>
<h3 class="text-lg font-bold mb-4 px-1 text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">grid_view</span>
                    Quick Access
                </h3>
<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all neon-border-orange">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPw8U7a_vtDCpdiwWMrsLHNhjW9SZmvhhu-XTwRB8QMpc_XeziQivxOetF_BpaZBiGG6krfUzAYX_mLyXXh7X5fECi0Dc2KglRz0DZbnwi8cUFCQGk2_BrHIkCGw--RNFBGmPVuw3b8SdtgVsBlqRZ5P7ycnu9LUldcIrbh5n6w95c_M6VS2O531390PEI7DCOFe-gbCzWv7o9YlIdRUGKDSnzQs_Jv2XV7fKbJlPWnJLNab_ByO2dKdpIuPVw-Mh49TdSiwd4jJJG");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Daily Goals</p>
<p class="text-white/60 text-xs mt-1">3/5 Completed</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-primary flex items-center justify-center text-[#080808]">
<span class="material-symbols-outlined text-sm">flag</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all neon-border-gold">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTKUrm3W6_h-dGGpEG6sZRGPB0k1svnX8_XP7tiwIFt4Z8h5RTrTOEiNRywQPHWXy0ugBa5MDlBRjn2YWz6ma5OOZa2l-tFzhqIjv-LRfcQacSes0q4NUAKYigrp__72Pe2kvd9efnC7sYaZLCd9WApe5mR4FdZXGLw3_yBfqP8h0UmN-QFS4apLZrSbDdkgyeVQQOpawjevt7zG8WCNFN-4VRGoOeCqa0HZmRJJ33hINh3aeVQHjq9_acVWMmormTfO39GuXMjsOV");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Badges</p>
<p class="text-white/60 text-xs mt-1">12 Earned</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
<span class="material-symbols-outlined text-sm">military_tech</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all neon-border-purple">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeplQr7A-zBTisNNQx6KPnpKAY6l1END6YOb6OCKcTVxJ2sB8vsWGWirbXx3r2gc9eMPvyBKhvK5SuWM8WTGzNZ8y79aIDLXbSxJDMrXnsL-UGCLth1mvgI1TMubb_Vi-QJvOUABxaEtqDLqjTxpQ4eWU9dFqAA7fIOPNuZ6oKGr5OvCBrPh6vtW3L20zRdJ_Bnx4CgFaRr1fTBZxzBG3g-7xCPzGgklLjN8bY1FdPExgz4uUrmvHzQwEOln4LcNsr9UY0aGZj9QkX");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Timetable</p>
<p class="text-white/60 text-xs mt-1">Next: Yoga 5PM</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
<span class="material-symbols-outlined text-sm">calendar_today</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all neon-border-cyan">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-bwHd3C729X-vJDUDbsrj__QSzCtRYNbsjjc7abw8CigZIlfr5OfvgYQH17nuN6UWJaB3pZRSNPFZeJ_n3WGpD0a56m7ZublXfVAzRz7PHKTeDh69wcjFt4sPNGSnucX8Qs8wpJHsxNmo_NweuEQqQIOGXq1y9hBlZuOucTHJHTJdCJHh1PyK8DIseg0iMEvc-YHh78plGHtvzwA9eA3IaD_04gyVeSo10Avaco0Gz24NIbCoPzUHuIVwIu_xIT_aoGcQCKHA7ICO");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Community</p>
<p class="text-white/60 text-xs mt-1">3 Friends Active</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
<span class="material-symbols-outlined text-sm">groups</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all neon-border-green">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9pYTPIlXVBt3jLy2W5pQmvsU5_bixTNJtJy-7uyTKOZ92OZXbCcTcqrmW54Vx7iFhIL_YdVAXxvNWe0Y1E9HS80hfk6wmc_OeSZx6ZYQjRqlq3XwLhjWtI1Fl4tomI40QeN3OBDUvanCL3kIMSai6v7GZs9bOJuPtdvs5WktnBG9PLUV3z_FDiX6RVhgR4200gQJS_GSNC23nxI9yP6ESLy1TOr6g92ciF0lKdwLWPzpZuocHvrQ7RliffBvT_HUu5HVV25XW88EJ");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Shop</p>
<p class="text-white/60 text-xs mt-1">New Arrivals</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
<span class="material-symbols-outlined text-sm">shopping_bag</span>
</div>
</div>
</div>
</div>
<div class="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all neon-border-coral">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwNGrQr0XH79lSoPXkqv8S1D0JoXBiIQ7r-4MKVXZ_4YH8fgEtzxziqJCq-6rpnXoqdxNVLrXa3fxzytkXGugoVdDB5XPgzeELDhzg9TrYNy8obPS1Z0B0AcdcN7KHVSVcvCTa9TwmOKVzMIUrZ6pONnI82s0qEH9_93V9TqUWscae-4dgqPIflVIUgYwrlFz293FgdSALwqfBJfUZbgrwXtfLucRLV4A5I3qANVS1scOXfAitpyLxCeAI9dES6SMDNPkYBknSXwmb");'></div>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-4 w-full">
<div class="flex justify-between items-end">
<div>
<p class="text-white font-bold text-lg leading-tight">Tournament</p>
<p class="text-white/60 text-xs mt-1">Gold League</p>
</div>
<div class="card-indicator-icon size-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
<span class="material-symbols-outlined text-sm">emoji_events</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="sm:hidden fixed bottom-0 left-0 right-0 bg-obsidian/90 backdrop-blur-xl flex items-center justify-between py-2 px-2 z-40 nav-glow">
<button class="flex-1 text-primary flex flex-col items-center gap-0.5">
<span class="material-symbols-outlined text-2xl">home</span>
<span class="text-[8px] font-bold">Home</span>
</button>
<button class="flex-1 text-white/40 flex flex-col items-center gap-0.5 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">fitness_center</span>
<span class="text-[8px] font-bold uppercase tracking-tighter">MotionSense</span>
</button>
<button class="flex-1 text-white/40 flex flex-col items-center gap-0.5 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">restaurant</span>
<span class="text-[8px] font-bold uppercase tracking-tighter">PlanCalorie</span>
</button>
<button class="flex-1 text-white/40 flex flex-col items-center gap-0.5 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">notifications</span>
<span class="text-[8px] font-bold uppercase tracking-tighter">Smart Nudge</span>
</button>
<button class="flex-1 text-white/40 flex flex-col items-center gap-0.5 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">brightness_3</span>
<span class="text-[8px] font-bold uppercase tracking-tighter">CircadianSync</span>
</button>
<button class="flex-1 text-white/40 flex flex-col items-center gap-0.5 hover:text-white transition-colors">
<span class="material-symbols-outlined text-2xl">self_improvement</span>
<span class="text-[8px] font-bold uppercase tracking-tighter">ZenZone</span>
</button>
</div>
<div class="fixed bottom-24 right-6 sm:bottom-6 z-50">
<button class="flex items-center justify-center size-14 sm:size-16 rounded-full bg-primary neon-border-orange shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[#080808] text-2xl sm:text-3xl">smart_toy</span>
</button>
</div>
</main>

</body></html>