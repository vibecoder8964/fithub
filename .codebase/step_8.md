### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>App Permissions</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f99c06",
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
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }::-webkit-scrollbar {
            width: 0px;
            background: transparent;
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
<body class="bg-background-light dark:bg-background-dark font-display text-[#181511] dark:text-white antialiased">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
<div class="sticky top-0 z-10 bg-background-light dark:bg-background-dark">
<div class="relative flex items-center justify-between px-4 py-4">
<button class="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors absolute left-4 z-20">
<span class="material-symbols-outlined text-[#181511] dark:text-white" style="font-size: 24px;">arrow_back_ios_new</span>
</button>
<div class="w-full text-center">
<span class="text-sm font-bold text-[#181511] dark:text-white tracking-wide">Step 8 of 8</span>
</div>
<div class="size-10 pointer-events-none opacity-0"></div>
</div>
<div class="w-full h-1 bg-gray-200 dark:bg-white/10">
<div class="h-full w-full bg-primary"></div>
</div>
</div>
<div class="flex-1 flex flex-col items-center w-full max-w-xl mx-auto pb-32">
<div class="w-full px-4 pt-6 pb-6">
<div class="relative w-full overflow-hidden rounded-xl aspect-[16/9] shadow-sm">
<div class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 dark:from-primary/20 dark:to-background-dark"></div>
<div class="absolute inset-0 bg-center bg-cover opacity-90" data-alt="Illustration of a person jogging outdoors at sunrise with orange hues" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaGnfkLvQ2uV16pmjXAkATEsptUNQPVhfzrsI0b82yJhbiz_148sh9vJWlXga2oNYNPHu41AfxYEVOGTfZCWyAYk0A-7Mg6UDLw3PWuX9f_6VbrJNScAVHHwcVQGjqZeqUY-vaVULfYbngYBK0Bn-mUwBFLHdzoe5MLdMrNIsA0VZwsuffBQ40CAHGfsfQ7lc0H9z4TrDl5jXiipFNJTgMRcAgs28ip29OozZ0dq8z0ClG9I1x9Svx_LPXWo0xPs72JQsODlDKz8vi");'>
</div>
</div>
</div>
<div class="px-6 text-center">
<h1 class="text-3xl font-extrabold leading-tight tracking-tight text-[#181511] dark:text-white mb-3">
                Enable full experience
            </h1>
<p class="text-base font-medium text-[#8c7b5f] dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                Unlock the full potential of your health journey. We need a few permissions to help you succeed.
            </p>
</div>
<div class="w-full px-4 py-8">
<div class="flex flex-col gap-4">
<div class="group flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-primary/50">
<div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">notifications_active</span>
</div>
<div class="flex flex-col">
<h2 class="text-base font-bold text-[#181511] dark:text-white">Daily Motivation</h2>
<p class="text-sm text-[#8c7b5f] dark:text-gray-400">Get timely reminders to stay on track.</p>
</div>
<div class="ml-auto">
<span class="material-symbols-outlined text-primary" style="font-size: 20px;">check_circle</span>
</div>
</div>
<div class="group flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-primary/50">
<div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">photo_camera</span>
</div>
<div class="flex flex-col">
<h2 class="text-base font-bold text-[#181511] dark:text-white">Camera Access</h2>
<p class="text-sm text-[#8c7b5f] dark:text-gray-400">Camera is needed for food analysis and other features.</p>
</div>
<div class="ml-auto">
<span class="material-symbols-outlined text-primary" style="font-size: 20px;">check_circle</span>
</div>
</div>
<div class="group flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-primary/50">
<div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">volume_up</span>
</div>
<div class="flex flex-col">
<h2 class="text-base font-bold text-[#181511] dark:text-white">Guided Audio</h2>
<p class="text-sm text-[#8c7b5f] dark:text-gray-400">Hear clear instructions during workouts.</p>
</div>
<div class="ml-auto">
<span class="material-symbols-outlined text-primary" style="font-size: 20px;">check_circle</span>
</div>
</div>
<div class="group flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 transition-all hover:border-primary/50">
<div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">mic</span>
</div>
<div class="flex flex-col">
<h2 class="text-base font-bold text-[#181511] dark:text-white">Recorder Access</h2>
<p class="text-sm text-[#8c7b5f] dark:text-gray-400">Recorder is required to record sound for sleep analysis.</p>
</div>
<div class="ml-auto">
<span class="material-symbols-outlined text-primary" style="font-size: 20px;">check_circle</span>
</div>
</div>
</div>
</div>
<div class="px-6 pb-6 text-center">
<div class="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-white/5 px-3 py-1.5">
<span class="material-symbols-outlined text-gray-500 text-[16px]">lock</span>
<p class="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Your data is encrypted and private.
                </p>
</div>
</div>
</div>
<div class="fixed bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/5 z-20">
<div class="max-w-xl mx-auto flex flex-col gap-3">
<button class="w-full rounded-xl bg-primary px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-[0.98] hover:bg-primary/90">
                Allow notifications &amp; access
            </button>
<button class="w-full rounded-xl border border-gray-200 dark:border-white/10 px-6 py-3.5 text-center text-base font-bold text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
                No, thanks
            </button>
</div>
</div>
</div>

</body></html>