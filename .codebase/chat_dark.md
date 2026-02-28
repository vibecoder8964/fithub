### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fitness Warriors Chat</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "neon-orange": "#ff9d00",
                        "neon-blue": "#00f2ff",
                        "neon-silver": "#e0e0e0",
                        "obsidian": "#050505",
                        "dark-layer": "rgba(20, 20, 20, 0.6)",
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
                    boxShadow: {
                        'neon-orange': '0 0 5px rgba(255, 157, 0, 0.2), 0 0 10px rgba(255, 157, 0, 0.1), inset 0 0 2px rgba(255, 157, 0, 0.1)',
                        'neon-blue': '0 0 5px rgba(0, 242, 255, 0.2), 0 0 10px rgba(0, 242, 255, 0.1), inset 0 0 2px rgba(0, 242, 255, 0.1)',
                        'neon-header': '0 1px 0 rgba(255, 157, 0, 0.3)',
                    }
                },
            },
        }
    </script>
<style>.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }.bg-pattern {
            background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 24px 24px;
        }.glass-dark {
            background: rgba(15, 15, 15, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
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
<body class="font-display bg-obsidian text-gray-100 overflow-hidden h-screen flex flex-col selection:bg-neon-orange selection:text-black">
<header class="flex-none glass-dark px-4 py-3 z-30 flex items-center justify-between border-b border-white/5 shadow-neon-header relative">
<div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-orange/50 to-transparent"></div>
<div class="flex items-center gap-3">
<button class="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-white/10 text-gray-300 transition-colors">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</button>
<div class="flex items-center gap-3">
<div class="relative">
<div class="w-10 h-10 rounded-full bg-cover bg-center border border-neon-orange/50 shadow-[0_0_10px_rgba(255,157,0,0.3)]" data-alt="Fitness instructor leading a group class" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDO_f3w93XzBqtQYbZlAW83vMLaweJ_Jt3WgFvTddNF5M8k5ZvU6vV96JDj-i2A0paPpBKNRMxio7_ayGFeRVXBvSvpjdPJgL9poWOTGP_fNp8Jinp7nNMf1SlSx0YXLoHPagDPL_gi4dDcVNakRSCpvDG4PppbbySImqJouqD0ySyNGYnYN6boAEgDPoNkf5fA__wsQACWCPFkFJXkEa0b22S-oUECu2ODVqN0-Fpbb2HKmwnACWteU0ooVe3zVKznTEsxdUUskeSR');"></div>
<div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-obsidian rounded-full shadow-[0_0_5px_rgba(34,197,94,0.6)]"></div>
</div>
<div>
<h1 class="text-base font-bold leading-tight text-white tracking-wide">Fitness Warriors</h1>
<p class="text-xs text-gray-400 font-medium tracking-wide">1,240 Members • <span class="text-neon-orange">12 Online</span></p>
</div>
</div>
</div>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-300 transition-colors">
<span class="material-symbols-outlined">info</span>
</button>
</header>
<main class="flex-1 overflow-y-auto relative no-scrollbar bg-obsidian">
<div class="absolute inset-0 pointer-events-none bg-pattern w-full h-full z-0 opacity-40"></div>
<div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neon-orange/5 to-transparent z-0 pointer-events-none"></div>
<div class="relative z-10 p-4 pb-24 flex flex-col gap-6">
<div class="flex justify-center my-2">
<span class="bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-gray-400 border border-white/10 shadow-lg">
                Today
            </span>
</div>
<div class="flex items-end gap-3 max-w-[85%] self-start group">
<div class="w-8 h-8 shrink-0 rounded-full bg-cover bg-center border border-neon-blue/30 shadow-[0_0_8px_rgba(0,242,255,0.2)]" data-alt="Portrait of Sarah smiling in sports gear" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCww_OoH_28uKzeV0ThtU9_7N2oypiy6udjpq2kyhLcoJ5l-tByaPOKOHc-LZc--Q8HweUQLE_0p26y9GTYLqgtH68wNMn6pN7JhmVpNsB5EaKcDTb7eR9oC0iCZWPQcin7dGD672wNFZsP54ssiZafQZkVN2nc8CIo1aQJ--Cf-VaEzt8ZoBIEO_WWv41VIa639Qvbzfv5A2H-UWajZNC7xNN5RaOGyeXGlllzG8wRuizz8R5mp0wapl6qMTSgC7EbTr0t5fP0uWCZ');"></div>
<div class="flex flex-col gap-1">
<span class="text-xs font-bold text-neon-blue ml-1 drop-shadow-[0_0_5px_rgba(0,242,255,0.4)]">Sarah</span>
<div class="px-5 py-3.5 bg-black/40 backdrop-blur-sm rounded-2xl rounded-bl-sm border border-neon-blue/40 text-gray-100 text-[15px] leading-relaxed shadow-neon-blue">
                    Just finished my 5k run! Beat my personal best by 2 minutes. 🏃‍♀️💨
                </div>
<span class="text-[10px] text-gray-500 ml-1 font-medium">09:41 AM</span>
</div>
</div>
<div class="flex items-end gap-3 max-w-[85%] self-start group">
<div class="w-8 h-8 shrink-0 rounded-full bg-cover bg-center border border-neon-blue/30 shadow-[0_0_8px_rgba(0,242,255,0.2)]" data-alt="Portrait of Mike in a gym setting" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlJZREhDTKvnyprbCH5HiRLmmwE_559VF2LCPw_Wem3hbcOZeArCFbWJEX6ttrkuHNFSpTAU_UESbw_-6h6iIHrbGRJhFvSOAfoXKWoQh70OEooGEQNGX12oH0dAn1ssND_mnOZn73oHvy43VQxggqARNOSD0_ht7dS-9Xr7RH68Xw77gnVMlNGLYYy9IMA4Pw3hyVZMZix5GQKQyK6BLNfavFH6AQ_AdZ8pr5os9GycagNxNMO07EDaWGmVWbIpapGOdqmd3U9RzE');"></div>
<div class="flex flex-col gap-1">
<span class="text-xs font-bold text-neon-blue ml-1 drop-shadow-[0_0_5px_rgba(0,242,255,0.4)]">Mike</span>
<div class="px-5 py-3.5 bg-black/40 backdrop-blur-sm rounded-2xl rounded-bl-sm border border-neon-blue/40 text-gray-100 text-[15px] leading-relaxed shadow-neon-blue">
                    That's awesome Sarah! Keep pushing! 💪 I'm hitting the weights later.
                </div>
<span class="text-[10px] text-gray-500 ml-1 font-medium">09:43 AM</span>
</div>
</div>
<div class="flex justify-center my-4 w-full">
<div class="flex items-center gap-2 px-5 py-3 bg-black/60 backdrop-blur-md rounded-xl border border-neon-orange shadow-[0_0_15px_rgba(255,157,0,0.15)] w-full max-w-sm justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-neon-orange/5 z-0"></div>
<span class="material-symbols-outlined text-neon-orange text-xl z-10 drop-shadow-[0_0_8px_rgba(255,157,0,0.8)]">local_fire_department</span>
<span class="text-xs font-bold text-neon-orange uppercase tracking-wider z-10 drop-shadow-[0_0_3px_rgba(255,157,0,0.5)]">Daily Challenge: Drink 3L of water started</span>
</div>
</div>
<div class="flex items-end gap-3 max-w-[85%] self-end flex-row-reverse group">
<div class="w-8 h-8 shrink-0 rounded-full bg-cover bg-center border border-neon-orange/50 shadow-[0_0_8px_rgba(255,157,0,0.3)]" data-alt="Portrait of the current user" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSMxs4lbZvudgf7-xvi0rGZCub0UfeGZNJWkKEzCLFu3KqF0kqHO5RG54B0H3tRlaLVj8iFTrCLD1mjQ6TSzjsV84KK3ssO5d1XrrtrMrCFX6U4X9XumXEqZ6XIpgv-L7d0FBsfi-0qni1BUVD0pVlrNG8q-O6NHxKGCuxgnrqy0eiItAJlCoC0Vqg6dulXaAsRyJ0tSl7T0PGI7hjUrMpkFS4VD4DwnIJFtamiey17KeCYFJ55SzBzxkvBJLoDxkLe6fkXWGjYbfS');"></div>
<div class="flex flex-col gap-1 items-end">
<div class="px-5 py-3.5 bg-neon-orange/5 backdrop-blur-sm rounded-2xl rounded-br-sm text-gray-50 text-[15px] leading-relaxed border border-neon-orange shadow-neon-orange relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-neon-orange/10 to-transparent pointer-events-none"></div>
<span class="relative z-10">Great job team! I'm hitting the gym in an hour. 🔥 Anyone joining for the evening session?</span>
</div>
<div class="flex items-center gap-1 mr-1">
<span class="text-[10px] text-gray-500 font-medium">09:45 AM</span>
<span class="material-symbols-outlined text-neon-orange text-[14px] drop-shadow-[0_0_5px_rgba(255,157,0,0.5)]">done_all</span>
</div>
</div>
</div>
<div class="h-2"></div>
</div>
</main>
<footer class="flex-none glass-dark p-4 pb-6 border-t border-white/5 z-20 relative">
<div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div class="flex items-end gap-3 w-full max-w-4xl mx-auto relative z-10">
<button class="flex-none p-3 text-gray-400 hover:text-neon-orange hover:bg-white/5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-neon-orange/50">
<span class="material-symbols-outlined text-2xl">add_circle</span>
</button>
<div class="flex-1 bg-black/40 border border-white/10 rounded-2xl flex items-center px-4 py-3 gap-2 transition-all focus-within:border-neon-orange/50 focus-within:bg-black/60 focus-within:shadow-[0_0_10px_rgba(255,157,0,0.1)]">
<input class="w-full bg-transparent border-none p-0 text-white placeholder-gray-500 focus:ring-0 text-base font-medium leading-relaxed" placeholder="Share your motivation..." type="text"/>
<button class="text-gray-400 hover:text-gray-200 transition-colors">
<span class="material-symbols-outlined">sentiment_satisfied</span>
</button>
<button class="text-gray-400 hover:text-gray-200 ml-1 transition-colors">
<span class="material-symbols-outlined">photo_camera</span>
</button>
</div>
<button class="flex-none w-12 h-12 flex items-center justify-center bg-neon-orange hover:bg-amber-500 text-black rounded-xl shadow-[0_0_15px_rgba(255,157,0,0.5)] transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-neon-orange">
<span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">send</span>
</button>
</div>
</footer>

</body></html>