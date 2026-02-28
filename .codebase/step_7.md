### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Workout &amp; Sleep Schedule</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#FF9E00","secondary-accent": "#FF7F50","tertiary-accent": "#FFD700","background-light": "#FFFFFF","card-peach": "#FFF5EB","card-border": "#FFE0B2",
                        "surface-dark": "#1f2937",},
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>.no-scrollbar::-webkit-scrollbar {
    display: none
    }
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none
    }
body {
    min-height: max(884px, 100dvh)
    }.bg-pattern {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCmPt6-oOluWsYVN7YRj5CKJNzg5Xq-yVGnnc--RqnvQ_0AbrcdkZGMIRc-MkFE2uQPick-Np2Qw566Ic70VaERmBuS8VQ0ne_cIX7ihubxOlHc5CZxNTVZoIFeE_ilKZxUmCNhYouO9FJbIWAqaiDOKRFqxkucp0WzjW61-8oZj7CUU8GK9WkFIiDoK7-ovHuTHdqX8ZQ2bbsgMBm9nWAQUvnbkaYnnG8BCK-yvPKuTrRvF8MDzSigp8aNTEkSwIMK-Y8pU6-UClkJ), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='%23FF7F50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.5 6.5h11'/%3E%3Cpath d='M6.5 17.5h11'/%3E%3Cpath d='M6 20v-2a6 6 0 0 1 12 0v2'/%3E%3Cpath d='M6 4v2a6 6 0 0 1 12 0V4'/%3E%3C/svg%3E");
    background-position: 0 0, 40px 40px;
    background-size: 160px 160px;
    background-repeat: repeat
    }input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
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
<body class="bg-background-light font-display antialiased text-slate-900 min-h-screen flex flex-col relative overflow-hidden">
<div class="absolute inset-0 z-0 bg-pattern opacity-[0.03] pointer-events-none"></div>
<div class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex flex-col">
<div class="flex items-center p-4 pb-2 justify-between">
<div class="text-slate-900 flex size-10 shrink-0 items-center cursor-pointer hover:bg-slate-100 rounded-full justify-center transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
</div>
<h2 class="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Step 7 of 8</h2>
</div>
<div class="w-full h-1 bg-gray-100">
<div class="h-full bg-primary rounded-r-full" style="width: 87.5%"></div>
</div>
</div>
<div class="flex-1 overflow-y-auto pb-24 relative z-10">
<section class="flex flex-col">
<div class="px-4 pt-6 pb-2">
<div class="flex items-center gap-3 mb-1">
<span class="material-symbols-outlined text-primary text-2xl">fitness_center</span>
<h2 class="text-slate-900 tracking-tight text-2xl font-bold leading-tight">Workout Times</h2>
</div>
<p class="text-slate-600 text-sm font-normal leading-normal">
                    Select up to 3 slots for your training sessions.
                </p>
</div>
<div class="flex flex-col px-4 mt-4 gap-3">
<div class="flex flex-col gap-3" id="workout-slots-container">
<div class="workout-slot group flex items-center gap-4 bg-card-peach p-4 rounded-xl shadow-sm border border-card-border transition-all hover:shadow-md">
<div class="flex items-center justify-center rounded-lg bg-white text-primary shrink-0 size-12 shadow-sm">
<span class="material-symbols-outlined">alarm</span>
</div>
<div class="flex flex-1 items-center gap-2">
<div class="flex items-center bg-white rounded-lg border border-primary/20 shadow-sm px-3 py-1 w-full max-w-[140px]">
<input class="w-8 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300" max="23" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,''); if(this.value &gt; 23) this.value = 23;" placeholder="HH" type="number" value="07"/>
<span class="text-slate-400 font-bold mx-1">:</span>
<input class="w-8 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300" max="59" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,''); if(this.value &gt; 59) this.value = 59;" placeholder="MM" type="number" value="00"/>
</div>
<p class="slot-label text-xs text-slate-600 ml-2 font-medium">Slot 1</p>
</div>
<button class="remove-btn shrink-0 size-8 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-slate-400 hover:text-red-500 transition-colors shadow-sm" onclick="removeSlot(this)">
<span class="material-symbols-outlined text-xl">close</span>
</button>
</div>
<div class="workout-slot group flex items-center gap-4 bg-card-peach p-4 rounded-xl shadow-sm border border-card-border transition-all hover:shadow-md">
<div class="flex items-center justify-center rounded-lg bg-white text-primary shrink-0 size-12 shadow-sm">
<span class="material-symbols-outlined">directions_run</span>
</div>
<div class="flex flex-1 items-center gap-2">
<div class="flex items-center bg-white rounded-lg border border-primary/20 shadow-sm px-3 py-1 w-full max-w-[140px]">
<input class="w-8 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300" max="23" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,''); if(this.value &gt; 23) this.value = 23;" placeholder="HH" type="number" value="18"/>
<span class="text-slate-400 font-bold mx-1">:</span>
<input class="w-8 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300" max="59" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,''); if(this.value &gt; 59) this.value = 59;" placeholder="MM" type="number" value="30"/>
</div>
<p class="slot-label text-xs text-slate-600 ml-2 font-medium">Slot 2</p>
</div>
<button class="remove-btn shrink-0 size-8 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-slate-400 hover:text-red-500 transition-colors shadow-sm" onclick="removeSlot(this)">
<span class="material-symbols-outlined text-xl">close</span>
</button>
</div>
</div>
<button class="mt-3 flex items-center justify-center gap-2 w-full py-4 border-2 border-dashed border-primary/30 rounded-xl text-primary/80 hover:bg-card-peach hover:border-primary hover:text-primary transition-colors group bg-white/50" id="add-slot-btn" onclick="addSlot()">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
<span class="font-semibold text-sm">Add Time Slot</span>
</button>
</div>
<div class="h-8"></div>
<div class="h-px bg-gray-200 mx-4"></div>
</section>
<section class="flex flex-col mt-6">
<div class="px-4 pb-2">
<div class="flex items-center gap-3 mb-1">
<span class="material-symbols-outlined text-secondary-accent text-2xl">bedtime</span>
<h2 class="text-slate-900 tracking-tight text-2xl font-bold leading-tight">Sleep Schedule</h2>
</div>
<p class="text-slate-600 text-sm font-normal leading-normal">
                    Consistent sleep boosts recovery and focus.
                </p>
</div>
<div class="flex flex-col gap-3 mt-4 px-4">
<div class="sleep-slot group flex items-center gap-4 bg-card-peach p-4 rounded-xl shadow-sm border border-card-border transition-all hover:shadow-md">
<div class="flex items-center justify-center rounded-lg bg-white text-secondary-accent shrink-0 size-12 shadow-sm">
<span class="material-symbols-outlined">bedtime</span>
</div>
<div class="flex flex-1 items-center gap-2">
<div class="flex items-center bg-white rounded-lg border border-primary/20 shadow-sm px-3 py-1 w-full max-w-[180px]">
<input class="w-8 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300" oninput="const valid = ['08', '09', '10', '11', '00']; if(this.value.length &gt;= 2) { if(!valid.includes(this.value.padStart(2, '0'))) { this.value = '10'; } else { this.value = this.value.padStart(2, '0'); } }" placeholder="HH" type="number" value="10"/>
<span class="text-slate-400 font-bold mx-1">:</span>
<input class="w-8 p-0 text-center text-lg font-bold text-slate-900 border-none focus:ring-0 bg-transparent placeholder-slate-300" max="59" min="0" oninput="this.value=this.value.replace(/[^0-9]/g,''); if(this.value &gt; 59) this.value = 59;" placeholder="MM" type="number" value="30"/>
<span class="text-slate-400 font-bold mx-2 text-sm">PM</span>
</div>
<p class="text-xs text-slate-600 ml-2 font-medium">Bedtime</p>
</div>
</div><div class="flex justify-center mt-4">
<span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium border border-blue-100 shadow-sm">
<span class="material-symbols-outlined text-sm">info</span>
        Recommended: 8 hours
    </span>
</div>
</div>

</section>
<div class="h-8"></div>
</div>
<div class="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-100 z-50">
<button class="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-full shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
    Confirm Schedule
    <span class="material-symbols-outlined text-2xl">check_circle</span>
</button>
</div>
<script>
    function updateSlotLabels() {
        const slots = document.querySelectorAll('.workout-slot');
        slots.forEach((slot, index) => {
            slot.querySelector('.slot-label').innerText = 'Slot ' + (index + 1);
        });
        
        const addBtn = document.getElementById('add-slot-btn');
        if (slots.length >= 3) {
            addBtn.style.display = 'none';
        } else {
            addBtn.style.display = 'flex';
        }

        // Hide remove button if only one slot
        const removeBtns = document.querySelectorAll('.remove-btn');
        removeBtns.forEach(btn => {
            btn.style.visibility = slots.length <= 1 ? 'hidden' : 'visible';
        });
    }

    function addSlot() {
        const container = document.getElementById('workout-slots-container');
        const slots = document.querySelectorAll('.workout-slot');
        if (slots.length < 3) {
            const newSlot = slots[0].cloneNode(true);
            // Reset values
            const inputs = newSlot.querySelectorAll('input');
            inputs[0].value = '08';
            inputs[1].value = '00';
            container.appendChild(newSlot);
            updateSlotLabels();
        }
    }

    function removeSlot(btn) {
        const slots = document.querySelectorAll('.workout-slot');
        if (slots.length > 1) {
            btn.closest('.workout-slot').remove();
            updateSlotLabels();
        }
    }

    // Initial setup
    updateSlotLabels();
</script></body></html>