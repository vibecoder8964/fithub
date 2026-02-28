### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Neon Dark ZenZone Center</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00",
                        "neon-orange": "#ffaa00",
                        "neon-purple": "#b026ff",
                        "neon-green": "#00ff41",
                        "neon-cyan": "#00e5ff",
                        "obsidian": "#050505",
                        "obsidian-light": "#111111",
                        "background-dark": "#050505", 
                        "text-main": "#ffffff",
                        "text-secondary": "#a0a0a0",
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
                        "neon-orange": "0 0 10px rgba(255, 170, 0, 0.5), 0 0 20px rgba(255, 170, 0, 0.3)",
                        "neon-purple": "0 0 10px rgba(176, 38, 255, 0.5), 0 0 20px rgba(176, 38, 255, 0.3)",
                        "neon-green": "0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)",
                        "neon-cyan": "0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(0, 229, 255, 0.3)",
                    }
                },
            },
        }
    </script>
<style>
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
        }
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
<body class="bg-obsidian text-white font-display flex flex-col h-screen overflow-hidden selection:bg-neon-orange/30">
<header class="flex flex-col gap-4 px-4 py-3 bg-obsidian z-20 shrink-0 border-b border-white/5">
<div class="flex items-center justify-between">
<button class="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-white" style="font-size: 28px;">menu</span>
</button>
<div class="flex items-center gap-2">
<h1 class="text-xl font-extrabold tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">ZenZone</h1>
</div>
<button class="flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 shadow-sm overflow-hidden border border-white/10">
<span class="material-symbols-outlined text-white" style="font-size: 24px;">account_circle</span>
</button>
</div>
<div class="flex items-center justify-between gap-3">
<div class="flex-1 rounded-full border border-neon-orange/60 shadow-[0_0_10px_rgba(255,170,0,0.2)] bg-obsidian-light/80 p-1.5 px-3 flex items-center justify-between">
<div class="bg-gradient-to-br from-orange-400 to-yellow-600 rounded-full p-1 shadow-inner">
<span class="material-symbols-outlined text-white text-[14px]">diamond</span>
</div>
<div class="flex flex-col items-end leading-none">
<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Gems</span>
<span class="text-sm font-bold text-white">150</span>
</div>
</div>
<div class="flex-1 rounded-full border border-neon-orange/60 shadow-[0_0_10px_rgba(255,170,0,0.2)] bg-obsidian-light/80 p-1.5 px-3 flex items-center justify-between">
<div class="bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-1 shadow-inner">
<span class="material-symbols-outlined text-white text-[14px]">local_fire_department</span>
</div>
<div class="flex flex-col items-end leading-none">
<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Streak</span>
<span class="text-sm font-bold text-white">7</span>
</div>
</div>
<div class="flex-1 rounded-full border border-neon-purple/60 shadow-[0_0_10px_rgba(176,38,255,0.2)] bg-obsidian-light/80 p-1.5 px-3 flex items-center justify-between">
<div class="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full p-1 shadow-inner">
<span class="material-symbols-outlined text-white text-[14px]">bolt</span>
</div>
<div class="flex flex-col items-end leading-none">
<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">XP</span>
<span class="text-sm font-bold text-white">1,200</span>
</div>
</div>
</div>
</header>
<main class="flex-1 overflow-y-auto overflow-x-hidden relative w-full pb-32 bg-obsidian">
<div class="flex flex-col gap-6 p-4 max-w-lg mx-auto w-full">
<section class="group relative overflow-hidden rounded-2xl bg-obsidian-light/60 backdrop-blur-md shadow-neon-orange border border-neon-orange/50">
<div class="absolute inset-0 bg-gradient-to-b from-neon-orange/5 to-transparent pointer-events-none"></div>
<div class="flex flex-col @xl:flex-row items-stretch">
<div class="w-full h-40 bg-center bg-cover relative" data-alt="Peaceful sunrise over misty mountains" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj_tSyCHNnT858DOD1EHgBV2RIDxChz-oavxrVpYHuCzdcMjs_qk3XHnmtiwKJnDZCbR7uTrzZEhOTrRAOlnotocI8bVVm5mGv9HbtIyg4jhABJnS37CG-lqxReWc6bA4HUorbqAcvO28Nc5tO0Dh0Apj17EFiOTJP7Qz-nD79B6DxFD5TSvnZ_vo3dPFU3SOhIUov3PhXKz4RYOKoRq-nUIYAjbfcIs1TD5yZz_sE8g-G0knmurV_vg9RnnzgN_bXWdy94krPdkm6");'>
<div class="absolute inset-0 bg-gradient-to-t from-obsidian-light via-transparent to-transparent"></div>
</div>
<div class="p-5 flex flex-col justify-center gap-2 relative">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-orange/10 border border-neon-orange/30 w-fit">
<span class="material-symbols-outlined text-neon-orange text-[16px]">sunny</span>
<span class="text-xs font-bold text-neon-orange uppercase tracking-wide drop-shadow-[0_0_5px_rgba(255,170,0,0.5)]">Daily Wisdom</span>
</span>
<h2 class="text-xl font-bold text-white leading-tight drop-shadow-md">Focus on the present moment</h2>
<p class="text-gray-300 text-sm leading-relaxed">Let go of yesterday's worries. Take a deep breath and center yourself right here, right now.</p>
</div>
</div>
</section>
<section class="rounded-2xl bg-obsidian-light/60 backdrop-blur-md shadow-neon-green border border-neon-green/40 overflow-hidden relative">
<div class="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
<div class="p-5 flex flex-col gap-4 relative z-10">
<div class="flex items-center justify-between">
<h3 class="text-lg font-bold text-white flex items-center gap-2">
<span class="material-symbols-outlined text-neon-green drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]">smart_toy</span>
                        AI Companion
                    </h3>
<span class="flex h-2.5 w-2.5 relative">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green shadow-[0_0_8px_#00ff41]"></span>
</span>
</div>
<div class="flex gap-4 items-start">
<div class="relative shrink-0">
<div class="w-16 h-16 rounded-2xl bg-cover bg-center border border-neon-green/50 shadow-[0_0_15px_rgba(0,255,65,0.2)]" data-alt="Friendly anime style AI avatar portrait" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZ--6NaAp1JMC80aVTWzA7ECE_boa983PC2c3pypWRiP1-NcjCqk3qFfFE84RncHrKWw8EuiG0njIJ1p1h8quS4lSB8eNsuSYYP6OJ5s7zDKjHAxU-uTD1aMLCvYK8gZjaOlL0Zz7sDEtGymHBXI7F_VYOlmMKmcKuMTQv9Kqai9wQGJljxICefkB7BmSOquRyZgLQe07VKd1yOBK7dxI63ry0aV2dpxCGsumUe5Y7K9PGsBZqk52XHDcEYrEKY_etsQTdWjPU-qdF");'>
</div>
</div>
<div class="flex-1 bg-white/5 border border-white/5 rounded-xl rounded-tl-none p-3.5 relative">
<p class="text-gray-200 text-sm font-medium leading-relaxed">
                            Hi there! <span class="text-xl">👋</span><br/>
                            Feeling a bit overwhelmed? I'm here to listen. Let's talk it out.
                        </p>
</div>
</div>
<button class="w-full flex items-center justify-center gap-2 bg-neon-orange hover:bg-neon-orange/90 text-obsidian font-extrabold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,170,0,0.6)] border border-neon-orange active:scale-[0.98]">
<span class="material-symbols-outlined">chat_bubble</span>
                    Start Session
                </button>
</div>
</section>
<section class="flex flex-col gap-4">
<div class="flex items-center justify-between px-1">
<h3 class="text-lg font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Relaxation Zone</h3>
<button class="text-xs font-bold text-neon-orange hover:text-white transition-colors uppercase tracking-wider">View All</button>
</div>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
<div class="group flex flex-col gap-2 p-2 bg-obsidian-light/60 rounded-2xl border border-neon-purple/50 shadow-[0_0_10px_rgba(176,38,255,0.15)] hover:shadow-[0_0_15px_rgba(176,38,255,0.4)] transition-all cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Colorful abstract fluid art pattern" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOUdPO49ciLm3YLns2ogbwMDf9R_QRjUMWjlrrlWV83l89-HAQA2PBKrTH8-lOjm6YrOrPajg7HAWoa1B-C-JXNcexmA6fNJTaCfjwSUoaP9MjeiSRXdNjtCoUQj30dWWbue8mCkSNYpgjxhIPGCOk4DfWs81mpfvEGePCjwOLH9bt96_SaBuPevLLP-H8tvxvu7pZiALIcxDrKVtZ4W7zgbTaVhGS7zkMtjTZaxzJvFsq3_9K91EBvdVdzg45MG-w3ArX5Fj_8VL4");'>
<div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white border border-white/20">
<span class="material-symbols-outlined text-[16px] block">palette</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-white text-sm line-clamp-1 drop-shadow-sm">Color Flow</p>
<p class="text-xs text-gray-400 line-clamp-2 leading-tight">Match flowing color patterns</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-obsidian-light/60 rounded-2xl border border-neon-cyan/50 shadow-[0_0_10px_rgba(0,229,255,0.15)] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Raindrops on a window pane" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM__Qr4nKfBBndNFmv-C-FbwFrOpJCd0zuemdPzjq0c6ivGuKgmSB287YuDZk1AUxEnyhadgk7lA6LFCUyTIc0ziYxHuodLDh0-Yv1RiNHIAVeOa1MBNDH_34R0TcImZt9D8MqBg0j9KDtAJkHQWRzQUChASi3WScAGZj08mBfMz0rTBimpVlU_gCvZ_VpnJciln7UOBxz_G48j9GVwVcjiIPC0KYRceozDXF1CrDdzHegRbIW8bCzrmFpoPtQniaAJEX6UAyvowSN");'>
<div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white border border-white/20">
<span class="material-symbols-outlined text-[16px] block">water_drop</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-white text-sm line-clamp-1 drop-shadow-sm">Rain Listener</p>
<p class="text-xs text-gray-400 line-clamp-2 leading-tight">ASMR rain sounds</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-obsidian-light/60 rounded-2xl border border-neon-orange/50 shadow-[0_0_10px_rgba(255,170,0,0.15)] hover:shadow-[0_0_15px_rgba(255,170,0,0.4)] transition-all cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Photorealistic white origami paper boats on calm water" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj_tSyCHNnT858DOD1EHgBV2RIDxChz-oavxrVpYHuCzdcMjs_qk3XHnmtiwKJnDZCbR7uTrzZEhOTrRAOlnotocI8bVVm5mGv9HbtIyg4jhABJnS37CG-lqxReWc6bA4HUorbqAcvO28Nc5tO0Dh0Apj17EFiOTJP7Qz-nD79B6DxFD5TSvnZ_vo3dPFU3SOhIUov3PhXKz4RYOKoRq-nUIYAjbfcIs1TD5yZz_sE8g-G0knmurV_vg9RnnzgN_bXWdy94krPdkm6");'>
<div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white border border-white/20">
<span class="material-symbols-outlined text-[16px] block">sailing</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-white text-sm line-clamp-1 drop-shadow-sm">Floating Paper Boats</p>
<p class="text-xs text-gray-400 line-clamp-2 leading-tight">Meditative origami</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-obsidian-light/60 rounded-2xl border border-neon-green/50 shadow-[0_0_10px_rgba(0,255,65,0.15)] hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Realistic elegant letter with a pen on a wooden desk" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTBmK_THQOkS1JVNmA54-0II4DMSNxn7SDErx7f2RkeMFLhDYvBMlK5Yl0MHo5WyC4X7pRYJ5xyYSpxLB-v4uLpcd4Muib4vZfc6NS1LRtMykmD4A7ySVDjhNoGZF-venkSXx0YkWN1ywCfBRleNCc7mWLiizJ1_MWXDEielFfWcxrQ2GQ1Jv-S1Rl9NF9XCBKIdyNRjCCeTZCd1bXKiQoF0OQbaoeBudO5v-Vq7m9DyIjGQPLJAeCLmkyhBjyTyE8ULrpCXYMVlFP");'>
<div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white border border-white/20">
<span class="material-symbols-outlined text-[16px] block">edit_note</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-white text-sm line-clamp-1 drop-shadow-sm">Letters You'll Never Send</p>
<p class="text-xs text-gray-400 line-clamp-2 leading-tight">Expressive writing journal</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-obsidian-light/60 rounded-2xl border border-neon-purple/50 shadow-[0_0_10px_rgba(176,38,255,0.15)] hover:shadow-[0_0_15px_rgba(176,38,255,0.4)] transition-all cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Abstract calming patterns for breathing" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOUdPO49ciLm3YLns2ogbwMDf9R_QRjUMWjlrrlWV83l89-HAQA2PBKrTH8-lOjm6YrOrPajg7HAWoa1B-C-JXNcexmA6fNJTaCfjwSUoaP9MjeiSRXdNjtCoUQj30dWWbue8mCkSNYpgjxhIPGCOk4DfWs81mpfvEGePCjwOLH9bt96_SaBuPevLLP-H8tvxvu7pZiALIcxDrKVtZ4W7zgbTaVhGS7zkMtjTZaxzJvFsq3_9K91EBvdVdzg45MG-w3ArX5Fj_8VL4");'>
<div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white border border-white/20">
<span class="material-symbols-outlined text-[16px] block">air</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-white text-sm line-clamp-1 drop-shadow-sm">Breath Paradise</p>
<p class="text-xs text-gray-400 line-clamp-2 leading-tight">Guided breathing exercises synchronized with calming ASMR sounds.</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-obsidian-light/60 rounded-2xl border border-neon-cyan/50 shadow-[0_0_10px_rgba(0,229,255,0.15)] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Breathtaking realistic night sky filled with glowing stars and nebulae" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1kL4renRxNE1c8n8cwAZSNY8kwRw7Zx9TtMcGThpzBQT8iFFZklH-e6MomQ-wAY3MQ1Hd0UstEDnivX9eXIK9d3B1wzgv5OhJUKoz59h90FduwIvFv_re3Om5-lyU9fCgKVI7WDZbndLiwTEGbYxzGMwTfsRIwqCnJ4wVHJlN14K3eM8ayJ4acO5LiyPCR8xhTd87CuCFOJjDaU_gJ_EuzH9VLvCB9jR79YuGxdQLEYQLlny5234g91mBxMmNDrHY711CmI6SOliW");'>
<div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white border border-white/20">
<span class="material-symbols-outlined text-[16px] block">auto_awesome</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-white text-sm line-clamp-1 drop-shadow-sm">Star Cleaner</p>
<p class="text-xs text-gray-400 line-clamp-2 leading-tight">Clean constellations</p>
</div>
</div>
</div>
<div class="mt-4 p-5 bg-obsidian-light/60 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg flex flex-col items-center justify-center gap-3">
<div class="flex items-center gap-2 text-neon-orange drop-shadow-[0_0_5px_rgba(255,170,0,0.8)]">
<span class="material-symbols-outlined">timer</span>
<span class="text-sm font-bold uppercase tracking-wide">Play Time Remaining</span>
</div>
<div class="text-4xl font-extrabold text-white tracking-tight tabular-nums drop-shadow-md">30:00</div>
<div class="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
<div class="h-full bg-neon-orange rounded-full w-full shadow-[0_0_10px_rgba(255,170,0,0.5)]"></div>
</div>
<p class="text-xs text-gray-400 text-center font-medium">Session timer is active</p>
</div>
</section>
</div>
</main>
<div class="fixed bottom-0 left-0 w-full z-30">
<nav class="bg-obsidian/80 backdrop-blur-xl border-t border-white/10 pb-safe pt-2">
<div class="flex justify-around items-center px-2 pb-2 h-16 max-w-lg mx-auto w-full">
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-neon-orange drop-shadow-[0_0_5px_rgba(255,170,0,0.5)]" href="#">
<span class="material-symbols-outlined filled" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="text-[10px] font-bold">Home</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-gray-500 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">grid_view</span>
<span class="text-[10px] font-medium">Games</span>
</a>
<a class="flex flex-col items-center justify-center -mt-8 size-14 rounded-full bg-neon-orange text-obsidian shadow-[0_0_20px_rgba(255,170,0,0.6)] border-4 border-obsidian" href="#">
<span class="material-symbols-outlined" style="font-size: 28px;">spa</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-gray-500 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">chat</span>
<span class="text-[10px] font-medium">Chat</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-gray-500 hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium">Profile</span>
</a>
</div>
</nav>
</div>
</body></html>