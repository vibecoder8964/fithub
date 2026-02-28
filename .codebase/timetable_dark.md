### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Futuristic Health App - Timetable</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            obsidian: '#0a0a0a',
            neonCyan: '#00f2ff',
            neonOrange: '#ff8c00',
            neonPurple: '#bc13fe',
            neonMagenta: '#ff00ff',
            neonGreen: '#39ff14',
          },
          boxShadow: {
            'neon-cyan': '0 0 10px #00f2ff, 0 0 5px #00f2ff inset',
            'neon-orange': '0 0 10px #ff8c00, 0 0 5px #ff8c00 inset',
            'neon-purple': '0 0 10px #bc13fe, 0 0 5px #bc13fe inset',
            'neon-magenta': '0 0 10px #ff00ff',
          },
        }
      }
    }
  </script>
<style data-purpose="custom-animations">
    @keyframes pulse-glow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    .animate-pulse-glow {
      animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .glass-nav {
      background: rgba(10, 10, 10, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    /* Custom scrollbar for a cleaner look */
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: #0a0a0a;
    }
    ::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 10px;
    }
  </style>
</head>
<body class="bg-obsidian text-white font-sans min-h-screen flex flex-col pb-24">
<!-- BEGIN: Top Stats Header -->
<header class="p-4 pt-6 flex justify-between items-center gap-2 overflow-x-auto no-scrollbar" data-purpose="top-navigation-stats">
<!-- Gems Capsule -->
<div class="flex items-center gap-2 bg-black/40 border border-neonCyan/50 rounded-full px-4 py-2 shadow-neon-cyan min-w-fit">
<div class="text-neonCyan">
<svg class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L4 7l8 15 8-15-8-5z"></path></svg>
</div>
<div class="text-[10px] uppercase leading-none">
<span class="block text-gray-400">Gems</span>
<span class="font-bold text-sm">150</span>
</div>
</div>
<!-- Streak Capsule -->
<div class="flex items-center gap-2 bg-black/40 border border-neonOrange/50 rounded-full px-4 py-2 shadow-neon-orange min-w-fit">
<div class="text-neonOrange">
<svg class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zM12 11c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1z"></path></svg>
</div>
<div class="text-[10px] uppercase leading-none">
<span class="block text-gray-400">Streak</span>
<span class="font-bold text-sm">7</span>
</div>
</div>
<!-- XP Capsule -->
<div class="flex items-center gap-2 bg-black/40 border border-neonPurple/50 rounded-full px-4 py-2 shadow-neon-purple min-w-fit">
<div class="text-neonPurple">
<svg class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
</div>
<div class="text-[10px] uppercase leading-none">
<span class="block text-gray-400">XP</span>
<span class="font-bold text-sm">1,200</span>
</div>
</div>
</header>
<!-- END: Top Stats Header -->
<!-- BEGIN: Main Content Title -->
<main class="flex-1 px-4 mt-4">
<div class="flex justify-between items-end mb-6">
<div>
<h1 class="text-3xl font-bold tracking-tight">Today's Schedule</h1>
<p class="text-gray-500 text-sm">Thursday, 24 October</p>
</div>
<button class="bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-lg border border-white/20 text-sm flex items-center gap-2 transition-all">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
        Edit
      </button>
</div>
<!-- Timeline Container -->
<div class="relative pl-8 space-y-8" data-purpose="timeline-vertical">
<!-- Vertical Line -->
<div class="absolute left-3 top-2 bottom-0 w-px bg-gradient-to-b from-neonCyan via-neonPurple to-transparent opacity-30"></div>
<!-- BEGIN: Wake Up Routine Card -->
<section class="relative" data-purpose="task-item">
<!-- Timeline Dot -->
<div class="absolute -left-8 top-2 w-6 h-6 rounded-full bg-obsidian border-2 border-neonCyan shadow-neon-cyan flex items-center justify-center z-10">
<svg class="w-3 h-3 text-neonCyan" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
</div>
<div class="bg-white/5 border-l-4 border-neonCyan p-4 rounded-r-xl rounded-l-sm backdrop-blur-sm transition-transform active:scale-[0.98]">
<div class="flex justify-between items-start mb-1">
<span class="text-[10px] font-bold uppercase tracking-widest text-neonCyan">Routine • 06:00 AM - 07:00 AM</span>
</div>
<h3 class="text-lg font-bold">Wake Up &amp; Morning Hydration</h3>
<p class="text-gray-400 text-sm mt-1">Drink 500ml water, 10 min stretch.</p>
</div>
</section>
<!-- END: Wake Up Routine Card -->
<!-- BEGIN: Breakfast Meal Card -->
<section class="relative" data-purpose="task-item">
<div class="absolute -left-8 top-2 w-6 h-6 rounded-full bg-obsidian border-2 border-neonOrange shadow-neon-orange flex items-center justify-center z-10">
<svg class="w-3 h-3 text-neonOrange" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
</div>
<div class="bg-white/5 border-l-4 border-neonOrange p-4 rounded-r-xl rounded-l-sm backdrop-blur-sm transition-transform active:scale-[0.98]">
<div class="flex justify-between items-start mb-1">
<span class="text-[10px] font-bold uppercase tracking-widest text-neonOrange">Meal • 07:30 AM - 08:00 AM</span>
</div>
<h3 class="text-lg font-bold">Power Breakfast</h3>
<p class="text-gray-400 text-sm mt-1">Oatmeal with berries &amp; nuts, Green Tea.</p>
</div>
</section>
<!-- END: Breakfast Meal Card -->
<!-- BEGIN: Project Task Card -->
<section class="relative" data-purpose="task-item">
<div class="absolute -left-8 top-2 w-6 h-6 rounded-full bg-obsidian border-2 border-neonMagenta shadow-neon-magenta flex items-center justify-center z-10">
<svg class="w-3 h-3 text-neonMagenta" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
</div>
<div class="bg-white/5 border-l-4 border-neonMagenta p-4 rounded-r-xl rounded-l-sm backdrop-blur-sm shadow-xl transition-transform active:scale-[0.98]">
<div class="flex justify-between items-start mb-1">
<div class="flex items-center gap-2">
<span class="text-[10px] font-bold uppercase tracking-widest text-neonMagenta">Task</span>
<span class="text-xs text-gray-500 flex items-center gap-1">
<svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                09:00 - 12:00
              </span>
</div>
<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</div>
<h3 class="text-xl font-bold mt-2">Project X Development</h3>
<p class="text-gray-400 text-sm mt-1">Complete the main dashboard layout</p>
</div>
</section>
<!-- END: Project Task Card -->
<!-- BEGIN: Lunch Meal Card -->
<section class="relative" data-purpose="task-item">
<div class="absolute -left-8 top-2 w-6 h-6 rounded-full bg-obsidian border-2 border-neonOrange shadow-neon-orange flex items-center justify-center z-10">
<svg class="w-3 h-3 text-neonOrange" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
</div>
<div class="bg-white/5 border-l-4 border-neonOrange p-4 rounded-r-xl rounded-l-sm backdrop-blur-sm transition-transform active:scale-[0.98]">
<div class="flex justify-between items-start mb-1">
<span class="text-[10px] font-bold uppercase tracking-widest text-neonOrange">Meal • 12:30 PM - 01:30 PM</span>
</div>
<h3 class="text-lg font-bold">Healthy Lunch Break</h3>
<p class="text-gray-400 text-sm mt-1">Grilled Chicken Salad, Apple.</p>
</div>
</section>
<!-- END: Lunch Meal Card -->
<!-- BEGIN: Afternoon Task Card (Partial) -->
<section class="relative opacity-60" data-purpose="task-item">
<div class="absolute -left-8 top-2 w-6 h-6 rounded-full bg-obsidian border-2 border-neonMagenta shadow-neon-magenta flex items-center justify-center z-10">
<svg class="w-3 h-3 text-neonMagenta" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
</div>
<div class="bg-white/5 border-l-4 border-neonMagenta p-4 rounded-r-xl rounded-l-sm backdrop-blur-sm transition-transform active:scale-[0.98]">
<div class="flex items-center gap-2 mb-1">
<span class="text-[10px] font-bold uppercase tracking-widest text-neonMagenta">Task</span>
<span class="text-xs text-gray-500">02:00 - 05:00</span>
</div>
<h3 class="text-lg font-bold">Client Calls &amp; Review</h3>
</div>
</section>
<!-- END: Afternoon Task Card -->
</div>
</main>
<!-- END: Main Content Title -->
<!-- BEGIN: Floating Action Button -->
<div class="fixed bottom-24 right-6 z-50">
<button class="bg-neonOrange p-4 rounded-2xl shadow-[0_0_20px_rgba(255,140,0,0.6)] hover:scale-110 active:scale-90 transition-transform flex items-center justify-center">
<!-- Robot/AI Icon placeholder -->
<svg class="w-8 h-8 text-black" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h1a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1v-1a3 3 0 0 1 3-3h1V5.72c-.6-.34-1-.98-1-1.72a2 2 0 0 1 2-2M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1H8v1z"></path>
</svg>
</button>
</div>
<!-- END: Floating Action Button -->
<!-- BEGIN: Bottom Navigation -->
<nav class="fixed bottom-0 left-0 right-0 glass-nav px-2 py-3 flex justify-around items-center z-50" data-purpose="footer-navigation">
<!-- Home (Active) -->
<a class="flex flex-col items-center gap-1 group" href="#">
<div class="p-1 rounded-lg text-neonOrange drop-shadow-[0_0_8px_rgba(255,140,0,0.8)]">
<svg class="w-6 h-6" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
</div>
<span class="text-[9px] font-bold text-neonOrange uppercase tracking-tighter">Home</span>
</a>
<!-- MotionSense -->
<a class="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity" href="#">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-[9px] font-medium uppercase tracking-tighter">Motion</span>
</a>
<!-- PlanCalorie -->
<a class="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity" href="#">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-[9px] font-medium uppercase tracking-tighter">Calorie</span>
</a>
<!-- Smart Nudge -->
<a class="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity" href="#">
<div class="relative">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<div class="absolute -top-1 -right-1 w-2 h-2 bg-neonCyan rounded-full animate-pulse"></div>
</div>
<span class="text-[9px] font-medium uppercase tracking-tighter">Nudge</span>
</a>
<!-- CircadianSync -->
<a class="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity" href="#">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-[9px] font-medium uppercase tracking-tighter">Sync</span>
</a>
<!-- ZenZone -->
<a class="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity" href="#">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
<span class="text-[9px] font-medium uppercase tracking-tighter">Zen</span>
</a>
</nav>
<!-- END: Bottom Navigation -->
</body></html>