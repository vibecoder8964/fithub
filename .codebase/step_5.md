### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Work Schedule Setup</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff9d00",
                        "secondary-peach": "#FFBE0B",
                        "background-light": "#f8f7f5",
                        "background-dark": "#231b0f",
                        "card-light": "#ffffff",
                        "card-dark": "#2f2519",
                        "text-main": "#181510",
                        "text-muted": "#6b5e4c",
                    },
                    fontFamily: {
                        "display": ["Manrope", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "2xl": "2rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        "soft": "0 4px 20px -2px rgba(24, 21, 16, 0.05)",
                    }
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        body {
            min-height: max(884px, 100dvh);
        }
        .bg-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
        }
        .bg-icon {
            position: absolute;
            color: #ff9d00;
            opacity: 0.08;
        }
        .time-input {
            width: 3.5ch;
            text-align: center;
            background: transparent;
            border: none;
            padding: 0;
            font-family: inherit;
            color: inherit;
            outline: none;
            border-bottom: 2px solid transparent;
            appearance: none;
            -moz-appearance: textfield;
        }
        .time-input:focus {
            border-bottom-color: #ff9d00;
        }
        input[type=number]::-webkit-inner-spin-button, 
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
</head>
<body class="bg-background-light dark:bg-background-dark text-text-main dark:text-background-light font-display antialiased transition-colors duration-200">
<div class="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
<div class="bg-pattern">
<span class="material-symbols-outlined bg-icon" style="top: 10%; left: 5%; font-size: 48px; transform: rotate(-15deg);">calendar_month</span>
<span class="material-symbols-outlined bg-icon" style="top: 25%; right: -5%; font-size: 64px; transform: rotate(20deg);">schedule</span>
<span class="material-symbols-outlined bg-icon" style="bottom: 15%; left: -5%; font-size: 56px; transform: rotate(10deg);">watch_later</span>
<span class="material-symbols-outlined bg-icon" style="bottom: 40%; right: 10%; font-size: 40px; transform: rotate(-25deg);">timer</span>
<span class="material-symbols-outlined bg-icon" style="top: 60%; left: 15%; font-size: 32px; transform: rotate(45deg);">alarm</span>
</div>

<header class="relative z-10 px-6 pt-6 pb-2">
<div class="flex items-center justify-between mb-4">
<button class="flex items-center justify-center h-10 w-10 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-2xl text-text-main dark:text-white">chevron_left</span>
</button>
<span class="absolute left-1/2 -translate-x-1/2 text-[20px] font-extrabold text-text-main dark:text-white">Step 5 of 8</span>
<div class="w-10"></div>
</div>
<div class="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-8">
<div class="h-full bg-primary rounded-full" style="width: 55.5%"></div>
</div>
<h1 class="text-3xl font-extrabold leading-tight text-text-main dark:text-white tracking-tight">
        Select period(s) that you are engaged with work and tasks
    </h1>
<p class="text-text-muted dark:text-gray-400 text-base font-medium leading-relaxed mt-3">
        We'll optimize your motivation prompts around these hours.
    </p>
</header>
<main class="relative z-10 flex-1 px-6 py-6 flex flex-col gap-4 overflow-y-auto" id="blocks-container">
</main>
<div class="relative z-10 px-6 pb-2">
<button class="w-full group relative flex items-center justify-center gap-3 p-5 rounded-xl border-2 border-dashed border-secondary-peach/50 hover:border-secondary-peach bg-secondary-peach/10 hover:bg-secondary-peach/20 transition-all active:scale-[0.99]" id="add-btn">
<div class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-peach text-[#181510] shadow-sm group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[20px] font-bold">add</span>
</div>
<span class="text-base font-bold text-text-main dark:text-white">Add another period</span>
</button>
<p class="hidden text-center text-xs text-red-500 mt-2 font-medium" id="limit-msg">Maximum 3 periods reached</p>
</div>
<div class="relative z-10 w-full p-6 bg-background-light dark:bg-background-dark">
<button class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" onclick="validateAndSubmit()">
<span>Continue</span>
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
<script>
    // Initial state
    let blocks = [
        { id: 1, startH: '09', startM: '00', endH: '13', endM: '00' },
        { id: 2, startH: '14', startM: '00', endH: '17', endM: '00' }
    ];
    const container = document.getElementById('blocks-container');
    const addBtn = document.getElementById('add-btn');
    const limitMsg = document.getElementById('limit-msg');
    // Render Function
    function renderBlocks() {
        container.innerHTML = ''; 
        blocks.forEach((block, index) => {
            const blockNum = index + 1;
            const blockHTML = `
            <div class="group relative p-5 bg-card-light dark:bg-card-dark rounded-xl shadow-soft border border-transparent dark:border-white/5 transition-all">
                <button onclick="removeBlock(${index})" aria-label="Remove time slot" class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors z-20">
                    <span class="material-symbols-outlined text-[20px]">delete</span>
                </button>
                <div class="flex items-center gap-4 w-full">
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-background-light dark:bg-white/5 text-primary flex-shrink-0">
                        <span class="material-symbols-outlined text-[24px]">schedule</span>
                    </div>
                    <div class="flex flex-col w-full pr-8">
                        <span class="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-gray-500 mb-0.5">Block ${blockNum}</span>
                        <div class="flex items-center text-xl font-bold text-text-main dark:text-white font-display">
                            <div class="flex items-center bg-background-light dark:bg-black/20 rounded px-2.5 py-1.5">
                                <input type="number" min="0" max="23" value="${block.startH}" class="time-input" onchange="updateTime(${index}, 'startH', this.value)" placeholder="HH">
                                <span class="mx-0.5 text-text-muted/50">:</span>
                                <input type="number" min="0" max="59" value="${block.startM}" class="time-input" onchange="updateTime(${index}, 'startM', this.value)" placeholder="MM">
                            </div>
                            <span class="text-sm font-medium text-text-muted mx-2">to</span>
                            <div class="flex items-center bg-background-light dark:bg-black/20 rounded px-2.5 py-1.5">
                                <input type="number" min="0" max="23" value="${block.endH}" class="time-input" onchange="updateTime(${index}, 'endH', this.value)" placeholder="HH">
                                <span class="mx-0.5 text-text-muted/50">:</span>
                                <input type="number" min="0" max="59" value="${block.endM}" class="time-input" onchange="updateTime(${index}, 'endM', this.value)" placeholder="MM">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            container.insertAdjacentHTML('beforeend', blockHTML);
        });
        if (blocks.length >= 3) {
            addBtn.style.display = 'none';
            limitMsg.classList.remove('hidden');
        } else {
            addBtn.style.display = 'flex';
            limitMsg.classList.add('hidden');
        }
    }
    addBtn.addEventListener('click', () => {
        if (blocks.length < 3) {
            blocks.push({ id: Date.now(), startH: '18', startM: '00', endH: '19', endM: '00' });
            renderBlocks();
        }
    });
    window.removeBlock = (index) => {
        blocks.splice(index, 1);
        renderBlocks();
    };
    window.updateTime = (index, field, value) => {
        let val = parseInt(value);
        if (isNaN(val)) val = 0;
        if (field.includes('H')) {
            if (val < 0) val = 0;
            if (val > 23) val = 23;
        } else {
            if (val < 0) val = 0;
            if (val > 59) val = 59;
        }
        blocks[index][field] = val.toString().padStart(2, '0');
        // No full render here to prevent losing focus if desired, but for this specific layout it's safer for state management
        renderBlocks();
    };
    window.validateAndSubmit = () => {
        let isValid = true;
        let errorMessage = "";
        blocks.forEach((block, index) => {
            const startTotal = parseInt(block.startH) * 60 + parseInt(block.startM);
            const endTotal = parseInt(block.endH) * 60 + parseInt(block.endM);
            if (startTotal >= endTotal) {
                isValid = false;
                errorMessage = `Block ${index + 1}: End time must be after start time.`;
            }
        });
        if (!isValid) {
            alert(errorMessage);
        } else {
            alert("Schedule saved! Proceeding...");
        }
    };
    renderBlocks();
</script>
</body></html>