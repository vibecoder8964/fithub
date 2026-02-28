### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ZenZone Relaxation Center</title>
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
                        "background-light": "#f8f7f5",
                        "background-dark": "#231b0f",
                        "text-main": "#181510",
                        "text-secondary": "#8d7b5e",
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
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba(0,0,0,0.1);
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
<body class="bg-background-light dark:bg-background-dark font-display flex flex-col h-screen overflow-hidden selection:bg-primary/30">
<header class="flex items-center justify-between px-4 py-3 bg-background-light dark:bg-background-dark z-20 shrink-0">
<button class="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-text-main dark:text-white" style="font-size: 28px;">menu</span>
</button>
<div class="flex items-center gap-2">
<h1 class="text-xl font-extrabold tracking-tight text-text-main dark:text-white">ZenZone</h1>
</div>
<button class="flex items-center justify-center size-10 rounded-full bg-white dark:bg-white/10 shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800">
<span class="material-symbols-outlined text-text-main dark:text-white" style="font-size: 24px;">account_circle</span>
</button>
</header>
<main class="flex-1 overflow-y-auto overflow-x-hidden relative w-full pb-32">
<div class="flex flex-col gap-6 p-4 max-w-lg mx-auto w-full">
<section class="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-black/5 dark:border-white/10">
<div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
<div class="flex flex-col @xl:flex-row items-stretch">
<div class="w-full h-40 bg-center bg-cover" data-alt="Peaceful sunrise over misty mountains" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj_tSyCHNnT858DOD1EHgBV2RIDxChz-oavxrVpYHuCzdcMjs_qk3XHnmtiwKJnDZCbR7uTrzZEhOTrRAOlnotocI8bVVm5mGv9HbtIyg4jhABJnS37CG-lqxReWc6bA4HUorbqAcvO28Nc5tO0Dh0Apj17EFiOTJP7Qz-nD79B6DxFD5TSvnZ_vo3dPFU3SOhIUov3PhXKz4RYOKoRq-nUIYAjbfcIs1TD5yZz_sE8g-G0knmurV_vg9RnnzgN_bXWdy94krPdkm6");'>
</div>
<div class="p-5 flex flex-col justify-center gap-2 relative">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 w-fit">
<span class="material-symbols-outlined text-primary text-[16px]">sunny</span>
<span class="text-xs font-bold text-primary uppercase tracking-wide">Daily Wisdom</span>
</span>
<h2 class="text-xl font-bold text-text-main dark:text-white leading-tight">Focus on the present moment</h2>
<p class="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">Let go of yesterday's worries. Take a deep breath and center yourself right here, right now.</p>
</div>
</div>
</section>
<section class="rounded-2xl bg-white dark:bg-[#2f2515] shadow-[0_4px_20px_-4px_rgba(255,157,0,0.15)] border border-primary/20 overflow-hidden">
<div class="p-5 flex flex-col gap-4">
<div class="flex items-center justify-between">
<h3 class="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">smart_toy</span>
                            AI Companion
                        </h3>
<span class="flex h-2.5 w-2.5 relative">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
</div>
<div class="flex gap-4 items-start">
<div class="relative shrink-0">
<div class="w-16 h-16 rounded-2xl bg-cover bg-center border-2 border-primary shadow-inner" data-alt="Friendly anime style AI avatar portrait" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZ--6NaAp1JMC80aVTWzA7ECE_boa983PC2c3pypWRiP1-NcjCqk3qFfFE84RncHrKWw8EuiG0njIJ1p1h8quS4lSB8eNsuSYYP6OJ5s7zDKjHAxU-uTD1aMLCvYK8gZjaOlL0Zz7sDEtGymHBXI7F_VYOlmMKmcKuMTQv9Kqai9wQGJljxICefkB7BmSOquRyZgLQe07VKd1yOBK7dxI63ry0aV2dpxCGsumUe5Y7K9PGsBZqk52XHDcEYrEKY_etsQTdWjPU-qdF");'>
</div>
</div>
<div class="flex-1 bg-background-light dark:bg-white/5 rounded-xl rounded-tl-none p-3.5 relative">
<p class="text-text-main dark:text-gray-200 text-sm font-medium leading-relaxed">
                                Hi there! <span class="text-xl">👋</span><br/>
                                Feeling a bit overwhelmed? I'm here to listen. Let's talk it out.
                            </p>
</div>
</div>
<button class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white dark:text-[#181510] font-bold py-3.5 rounded-xl transition-all shadow-md shadow-primary/20 active:scale-[0.98]">
<span class="material-symbols-outlined">chat_bubble</span>
                        Start Session
                    </button>
</div>
</section>
<section class="flex flex-col gap-4">
<div class="flex items-center justify-between px-1">
<h3 class="text-lg font-bold text-text-main dark:text-white">Relaxation Zone</h3>
<button class="text-xs font-bold text-primary hover:text-primary/80">View All</button>
</div>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
<div class="group flex flex-col gap-2 p-2 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Colorful abstract fluid art pattern" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOUdPO49ciLm3YLns2ogbwMDf9R_QRjUMWjlrrlWV83l89-HAQA2PBKrTH8-lOjm6YrOrPajg7HAWoa1B-C-JXNcexmA6fNJTaCfjwSUoaP9MjeiSRXdNjtCoUQj30dWWbue8mCkSNYpgjxhIPGCOk4DfWs81mpfvEGePCjwOLH9bt96_SaBuPevLLP-H8tvxvu7pZiALIcxDrKVtZ4W7zgbTaVhGS7zkMtjTZaxzJvFsq3_9K91EBvdVdzg45MG-w3ArX5Fj_8VL4");'>
<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-black">
<span class="material-symbols-outlined text-[16px] block">palette</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-text-main dark:text-white text-sm line-clamp-1">Color Flow</p>
<p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2 leading-tight">Match flowing color patterns</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Raindrops on a window pane" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM__Qr4nKfBBndNFmv-C-FbwFrOpJCd0zuemdPzjq0c6ivGuKgmSB287YuDZk1AUxEnyhadgk7lA6LFCUyTIc0ziYxHuodLDh0-Yv1RiNHIAVeOa1MBNDH_34R0TcImZt9D8MqBg0j9KDtAJkHQWRzQUChASi3WScAGZj08mBfMz0rTBimpVlU_gCvZ_VpnJciln7UOBxz_G48j9GVwVcjiIPC0KYRceozDXF1CrDdzHegRbIW8bCzrmFpoPtQniaAJEX6UAyvowSN");'>
<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-black">
<span class="material-symbols-outlined text-[16px] block">water_drop</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-text-main dark:text-white text-sm line-clamp-1">Rain Listener</p>
<p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2 leading-tight">ASMR rain sounds</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Photorealistic white origami paper boats on calm water" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj_tSyCHNnT858DOD1EHgBV2RIDxChz-oavxrVpYHuCzdcMjs_qk3XHnmtiwKJnDZCbR7uTrzZEhOTrRAOlnotocI8bVVm5mGv9HbtIyg4jhABJnS37CG-lqxReWc6bA4HUorbqAcvO28Nc5tO0Dh0Apj17EFiOTJP7Qz-nD79B6DxFD5TSvnZ_vo3dPFU3SOhIUov3PhXKz4RYOKoRq-nUIYAjbfcIs1TD5yZz_sE8g-G0knmurV_vg9RnnzgN_bXWdy94krPdkm6");'>
<div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-black">
<span class="material-symbols-outlined text-[16px] block">sailing</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-text-main dark:text-white text-sm line-clamp-1">Floating Paper Boats</p>
<p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2 leading-tight">Meditative origami</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Realistic elegant letter with a pen on a wooden desk" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTBmK_THQOkS1JVNmA54-0II4DMSNxn7SDErx7f2RkeMFLhDYvBMlK5Yl0MHo5WyC4X7pRYJ5xyYSpxLB-v4uLpcd4Muib4vZfc6NS1LRtMykmD4A7ySVDjhNoGZF-venkSXx0YkWN1ywCfBRleNCc7mWLiizJ1_MWXDEielFfWcxrQ2GQ1Jv-S1Rl9NF9XCBKIdyNRjCCeTZCd1bXKiQoF0OQbaoeBudO5v-Vq7m9DyIjGQPLJAeCLmkyhBjyTyE8ULrpCXYMVlFP");'>
<div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-black">
<span class="material-symbols-outlined text-[16px] block">edit_note</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-text-main dark:text-white text-sm line-clamp-1">Letters You'll Never Send</p>
<p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2 leading-tight">Expressive writing journal</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Abstract calming patterns for breathing" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOUdPO49ciLm3YLns2ogbwMDf9R_QRjUMWjlrrlWV83l89-HAQA2PBKrTH8-lOjm6YrOrPajg7HAWoa1B-C-JXNcexmA6fNJTaCfjwSUoaP9MjeiSRXdNjtCoUQj30dWWbue8mCkSNYpgjxhIPGCOk4DfWs81mpfvEGePCjwOLH9bt96_SaBuPevLLP-H8tvxvu7pZiALIcxDrKVtZ4W7zgbTaVhGS7zkMtjTZaxzJvFsq3_9K91EBvdVdzg45MG-w3ArX5Fj_8VL4");'>
<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-black">
<span class="material-symbols-outlined text-[16px] block">air</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-text-main dark:text-white text-sm line-clamp-1">Breath Paradise</p>
<p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2 leading-tight">Guided breathing exercises synchronized with calming ASMR sounds.</p>
</div>
</div>
<div class="group flex flex-col gap-2 p-2 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
<div class="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" data-alt="Breathtaking realistic night sky filled with glowing stars and nebulae" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1kL4renRxNE1c8n8cwAZSNY8kwRw7Zx9TtMcGThpzBQT8iFFZklH-e6MomQ-wAY3MQ1Hd0UstEDnivX9eXIK9d3B1wzgv5OhJUKoz59h90FduwIvFv_re3Om5-lyU9fCgKVI7WDZbndLiwTEGbYxzGMwTfsRIwqCnJ4wVHJlN14K3eM8ayJ4acO5LiyPCR8xhTd87CuCFOJjDaU_gJ_EuzH9VLvCB9jR79YuGxdQLEYQLlny5234g91mBxMmNDrHY711CmI6SOliW");'>
<div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-black">
<span class="material-symbols-outlined text-[16px] block">auto_awesome</span>
</div>
</div>
<div class="px-1 pb-1">
<p class="font-bold text-text-main dark:text-white text-sm line-clamp-1">Star Cleaner</p>
<p class="text-xs text-text-secondary dark:text-gray-400 line-clamp-2 leading-tight">Clean constellations</p>
</div>
</div>
</div>
<div class="mt-4 p-5 bg-white dark:bg-white/5 rounded-2xl border border-primary/20 shadow-sm flex flex-col items-center justify-center gap-3">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined">timer</span>
<span class="text-sm font-bold uppercase tracking-wide">Play Time Remaining</span>
</div>
<div class="text-4xl font-extrabold text-text-main dark:text-white tracking-tight tabular-nums">30:00</div>
<div class="w-full h-3 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-full shadow-lg shadow-primary/30"></div>
</div>
<p class="text-xs text-text-secondary dark:text-gray-400 text-center font-medium">Session timer is active</p>
</div>
</section>
</div>
</main>
<div class="fixed bottom-0 left-0 w-full z-30">
<nav class="bg-white dark:bg-[#1a140b] border-t border-gray-100 dark:border-white/5 pb-safe pt-2">
<div class="flex justify-around items-center px-2 pb-2 h-16 max-w-lg mx-auto w-full">
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-primary" href="#">
<span class="material-symbols-outlined filled" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="text-[10px] font-bold">Home</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-text-secondary dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" href="#">
<span class="material-symbols-outlined">grid_view</span>
<span class="text-[10px] font-medium">Games</span>
</a>
<a class="flex flex-col items-center justify-center -mt-8 size-14 rounded-full bg-primary text-[#181510] shadow-lg shadow-primary/40 border-4 border-white dark:border-[#1a140b]" href="#">
<span class="material-symbols-outlined" style="font-size: 28px;">spa</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-text-secondary dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" href="#">
<span class="material-symbols-outlined">chat</span>
<span class="text-[10px] font-medium">Chat</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 min-w-16 rounded-xl text-text-secondary dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium">Profile</span>
</a>
</div>
</nav>
</div>

</body></html>