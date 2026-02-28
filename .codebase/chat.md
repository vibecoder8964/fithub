### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fitness Warriors Chat</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
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
        /* Custom scrollbar for cleaner look */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        /* Subtle texture pattern */
        .bg-pattern {
            background-image: radial-gradient(#ff9d00 0.5px, transparent 0.5px), radial-gradient(#ff9d00 0.5px, #f8f7f5 0.5px);
            background-size: 20px 20px;
            background-position: 0 0, 10px 10px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display bg-background-light dark:bg-background-dark text-[#181510] dark:text-gray-100 overflow-hidden h-screen flex flex-col">
<!-- Header -->
<header class="flex-none bg-white dark:bg-[#1e1912] px-4 py-3 shadow-sm z-20 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
<div class="flex items-center gap-3">
<button class="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</button>
<div class="flex items-center gap-3">
<div class="relative">
<div class="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm" data-alt="Fitness instructor leading a group class" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDO_f3w93XzBqtQYbZlAW83vMLaweJ_Jt3WgFvTddNF5M8k5ZvU6vV96JDj-i2A0paPpBKNRMxio7_ayGFeRVXBvSvpjdPJgL9poWOTGP_fNp8Jinp7nNMf1SlSx0YXLoHPagDPL_gi4dDcVNakRSCpvDG4PppbbySImqJouqD0ySyNGYnYN6boAEgDPoNkf5fA__wsQACWCPFkFJXkEa0b22S-oUECu2ODVqN0-Fpbb2HKmwnACWteU0ooVe3zVKznTEsxdUUskeSR');"></div>
<div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#1e1912] rounded-full"></div>
</div>
<div>
<h1 class="text-base font-bold leading-tight text-[#181510] dark:text-white">Fitness Warriors</h1>
<p class="text-xs text-gray-500 dark:text-gray-400 font-medium">1,240 Members • 12 Online</p>
</div>
</div>
</div>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
<span class="material-symbols-outlined">info</span>
</button>
</header>
<!-- Chat Area -->
<main class="flex-1 overflow-y-auto relative no-scrollbar bg-background-light dark:bg-background-dark">
<!-- Subtle Pattern Background Overlay -->
<div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-pattern w-full h-full z-0"></div>
<div class="relative z-10 p-4 pb-24 flex flex-col gap-6">
<!-- Date Divider -->
<div class="flex justify-center my-2">
<span class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 shadow-sm">
                    Today
                </span>
</div>
<!-- Message: Sarah -->
<div class="flex items-end gap-3 max-w-[85%] self-start group">
<div class="w-8 h-8 shrink-0 rounded-full bg-cover bg-center shadow-sm" data-alt="Portrait of Sarah smiling in sports gear" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCww_OoH_28uKzeV0ThtU9_7N2oypiy6udjpq2kyhLcoJ5l-tByaPOKOHc-LZc--Q8HweUQLE_0p26y9GTYLqgtH68wNMn6pN7JhmVpNsB5EaKcDTb7eR9oC0iCZWPQcin7dGD672wNFZsP54ssiZafQZkVN2nc8CIo1aQJ--Cf-VaEzt8ZoBIEO_WWv41VIa639Qvbzfv5A2H-UWajZNC7xNN5RaOGyeXGlllzG8wRuizz8R5mp0wapl6qMTSgC7EbTr0t5fP0uWCZ');"></div>
<div class="flex flex-col gap-1">
<span class="text-xs font-bold text-primary dark:text-primary ml-1">Sarah</span>
<div class="px-5 py-3.5 bg-white dark:bg-[#2a241c] rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-800 text-[#181510] dark:text-gray-200 text-[15px] leading-relaxed">
                        Just finished my 5k run! Beat my personal best by 2 minutes. 🏃‍♀️💨
                    </div>
<span class="text-[10px] text-gray-400 ml-1">09:41 AM</span>
</div>
</div>
<!-- Message: Mike -->
<div class="flex items-end gap-3 max-w-[85%] self-start group">
<div class="w-8 h-8 shrink-0 rounded-full bg-cover bg-center shadow-sm" data-alt="Portrait of Mike in a gym setting" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlJZREhDTKvnyprbCH5HiRLmmwE_559VF2LCPw_Wem3hbcOZeArCFbWJEX6ttrkuHNFSpTAU_UESbw_-6h6iIHrbGRJhFvSOAfoXKWoQh70OEooGEQNGX12oH0dAn1ssND_mnOZn73oHvy43VQxggqARNOSD0_ht7dS-9Xr7RH68Xw77gnVMlNGLYYy9IMA4Pw3hyVZMZix5GQKQyK6BLNfavFH6AQ_AdZ8pr5os9GycagNxNMO07EDaWGmVWbIpapGOdqmd3U9RzE');"></div>
<div class="flex flex-col gap-1">
<span class="text-xs font-bold text-blue-500 ml-1">Mike</span>
<div class="px-5 py-3.5 bg-white dark:bg-[#2a241c] rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-800 text-[#181510] dark:text-gray-200 text-[15px] leading-relaxed">
                        That's awesome Sarah! Keep pushing! 💪 I'm hitting the weights later.
                    </div>
<span class="text-[10px] text-gray-400 ml-1">09:43 AM</span>
</div>
</div>
<!-- System Message -->
<div class="flex justify-center my-4">
<div class="flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/5 rounded-xl border border-primary/20">
<span class="material-symbols-outlined text-primary text-lg">local_fire_department</span>
<span class="text-xs font-bold text-primary dark:text-orange-400">Daily Challenge: Drink 3L of water started</span>
</div>
</div>
<!-- Message: User (Me) -->
<div class="flex items-end gap-3 max-w-[85%] self-end flex-row-reverse group">
<!-- Optional: User Avatar for self, usually omitted in mobile chat but can be nice for community feel -->
<div class="w-8 h-8 shrink-0 rounded-full bg-cover bg-center shadow-sm" data-alt="Portrait of the current user" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSMxs4lbZvudgf7-xvi0rGZCub0UfeGZNJWkKEzCLFu3KqF0kqHO5RG54B0H3tRlaLVj8iFTrCLD1mjQ6TSzjsV84KK3ssO5d1XrrtrMrCFX6U4X9XumXEqZ6XIpgv-L7d0FBsfi-0qni1BUVD0pVlrNG8q-O6NHxKGCuxgnrqy0eiItAJlCoC0Vqg6dulXaAsRyJ0tSl7T0PGI7hjUrMpkFS4VD4DwnIJFtamiey17KeCYFJ55SzBzxkvBJLoDxkLe6fkXWGjYbfS');"></div>
<div class="flex flex-col gap-1 items-end">
<div class="px-5 py-3.5 bg-primary/10 dark:bg-primary/20 rounded-2xl rounded-br-sm text-[#181510] dark:text-gray-100 text-[15px] leading-relaxed border border-primary/5">
                        Great job team! I'm hitting the gym in an hour. 🔥 Anyone joining for the evening session?
                    </div>
<div class="flex items-center gap-1 mr-1">
<span class="text-[10px] text-gray-400">09:45 AM</span>
<span class="material-symbols-outlined text-primary text-[14px]">done_all</span>
</div>
</div>
</div>
<!-- Spacer for scroll -->
<div class="h-2"></div>
</div>
</main>
<!-- Input Bar -->
<footer class="flex-none bg-white dark:bg-[#1e1912] p-4 pb-6 border-t border-gray-100 dark:border-gray-800 z-20 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
<div class="flex items-end gap-3 w-full max-w-4xl mx-auto">
<button class="flex-none p-3 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20">
<span class="material-symbols-outlined text-2xl">add_circle</span>
</button>
<div class="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center px-4 py-3 gap-2 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-white dark:focus-within:bg-[#2a241c] focus-within:shadow-sm">
<input class="w-full bg-transparent border-none p-0 text-[#181510] dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 text-base font-medium leading-relaxed" placeholder="Share your motivation..." type="text"/>
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
<span class="material-symbols-outlined">sentiment_satisfied</span>
</button>
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-1">
<span class="material-symbols-outlined">photo_camera</span>
</button>
</div>
<button class="flex-none w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
<span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">send</span>
</button>
</div>
</footer>
</body></html>