### PROMPT
This is the codebase for this specific page. Follow 100% the UI and functionalities. However, if #workflow  AND user prompt
overwrites this codebase, follow thw workflow and user prompt instead.

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FitHub Login</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        body {
            min-height: max(884px, 100dvh);
        }#password[type="text"] + button .eye-open { display: block; }
        #password[type="text"] + button .eye-closed { display: none; }
        #password[type="password"] + button .eye-open { display: none; }
        #password[type="password"] + button .eye-closed { display: block; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-[#181510] dark:text-white overflow-x-hidden relative">
<div class="fixed inset-0 pointer-events-none z-0 opacity-[0.15] overflow-hidden text-primary">
<div class="absolute top-10 left-8 transform rotate-12">
<span class="material-symbols-outlined text-7xl">favorite</span>
</div>
<div class="absolute top-48 right-6 transform -rotate-12">
<span class="material-symbols-outlined text-7xl">fitness_center</span>
</div>
<div class="absolute bottom-1/4 left-12 transform rotate-45">
<span class="material-symbols-outlined text-7xl">nutrition</span>
</div>
<div class="absolute top-1/2 right-1/4 transform rotate-6">
<span class="material-symbols-outlined text-7xl">fitness_center</span>
</div>
<div class="absolute bottom-20 right-8 transform -rotate-12">
<span class="material-symbols-outlined text-7xl">favorite</span>
</div>
<div class="absolute top-20 left-1/2 transform rotate-180">
<span class="material-symbols-outlined text-7xl">nutrition</span>
</div>
<div class="absolute bottom-1/2 left-4 transform -rotate-6">
<span class="material-symbols-outlined text-6xl">favorite</span>
</div>
</div>
<div class="relative flex flex-col min-h-screen w-full z-10">
<div class="relative w-full h-[40vh] min-h-[300px] z-0">
<div class="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-100" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcTDFD0cdSeRpnA-iDfdQFloLSQFMkVWxyvF4IKsO4WDw-UTcZ7FiFwo1aH-J7FRHoEeY5CRSqOw_vvGA51YRFk6OolgPSLUXcPQ909w_e4RgGuDRnA3ED-cBwrkgZ5qeQKfitWYocJK3cS0wIEOt7BQHsOwnEivhdhjwAiWN2SG3HtEzQuuRZBplgKJhkxsUozf0bKiyaoyrkKw489-rgMxClZAiwzlJgGmkDJ6_C1-KbCV-j0_j2hRiAilIxnFlQYq0PiNgdJnZ4"); -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%); mask-image: radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%);'>
<div class="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent opacity-40"></div>
</div>
<div class="absolute top-6 left-6 flex items-center gap-2 z-20">
<div class="flex items-center justify-center w-10 h-10 bg-primary rounded-xl text-white shadow-lg">
<span class="material-symbols-outlined">bolt</span>
</div>
<span class="text-black font-bold text-xl drop-shadow-sm">FitHub</span>
</div>
</div>
<div class="flex-1 -mt-10 px-4 pb-8 flex flex-col justify-start items-center relative z-10">
<div class="w-full max-w-md bg-white dark:bg-[#2a2215] rounded-xl shadow-xl p-6 md:p-8 border border-[#e7e2da] dark:border-[#3d3223]">
<div class="flex flex-col gap-2 mb-6 text-center">
<h1 class="text-[#181510] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight">Welcome Back!</h1>
<p class="text-[#8d7b5e] dark:text-[#bcb09e] text-base font-normal leading-normal">Log in to continue your journey.</p>
</div>
<form class="flex flex-col gap-4">
<div class="flex flex-col gap-1">
<label class="sr-only" for="username">Username or Phone Number</label>
<div class="relative group">
<span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7b5e] group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined">person</span>
</span>
<input class="form-input flex w-full rounded-xl text-[#181510] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e7e2da] dark:border-[#4a3e2f] bg-background-light dark:bg-[#322a1e] focus:border-primary h-14 placeholder:text-[#8d7b5e] pl-12 pr-4 text-base font-normal leading-normal transition-all duration-200" id="username" placeholder="Username or Phone Number" type="text" value=""/>
</div>
</div>
<div class="flex flex-col gap-1">
<label class="sr-only" for="password">Password</label>
<div class="relative group">
<span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7b5e] group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined">lock</span>
</span>
<input class="form-input flex w-full rounded-xl text-[#181510] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e7e2da] dark:border-[#4a3e2f] bg-background-light dark:bg-[#322a1e] focus:border-primary h-14 placeholder:text-[#8d7b5e] pl-12 pr-12 text-base font-normal leading-normal transition-all duration-200" id="password" placeholder="Password" type="text" value="password123"/>
<button class="absolute right-4 top-1/2 -translate-y-1/2 text-[#8d7b5e] hover:text-primary transition-colors focus:outline-none" onclick="togglePasswordVisibility()" type="button">
<span class="material-symbols-outlined text-[24px] eye-open">visibility</span>
<span class="material-symbols-outlined text-[24px] eye-closed hidden">visibility_off</span>
</button>
</div>
</div>
<div class="flex justify-end">
<a class="text-sm font-medium text-[#8d7b5e] hover:text-primary transition-colors" href="#">Forgot Password?</a>
</div>
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-md active:scale-[0.98]" type="submit">
<span class="truncate">Log In</span>
</button>
<div class="relative flex py-2 items-center">
<div class="flex-grow border-t border-[#e7e2da] dark:border-[#4a3e2f]"></div>
<span class="flex-shrink mx-4 text-sm text-[#8d7b5e]">Or continue with</span>
<div class="flex-grow border-t border-[#e7e2da] dark:border-[#4a3e2f]"></div>
</div>
<button class="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-14 border border-[#e7e2da] dark:border-[#4a3e2f] bg-white dark:bg-[#322a1e] text-[#181510] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-[#3a3123] transition-colors active:scale-[0.98]" type="button">
<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.7662 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
<path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"></path>
<path d="M5.50253 14.3003C5.00236 12.8199 5.00236 11.1799 5.50253 9.69951V6.60861H1.51649C-0.18551 10.0056 -0.18551 13.9945 1.51649 17.3915L5.50253 14.3003Z" fill="#FBBC05"></path>
<path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.60861L5.50264 9.69951C6.45064 6.86154 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"></path>
</svg>
<span class="truncate">Continue with Google</span>
</button>
</form>
<div class="mt-8 text-center">
<p class="text-sm text-[#8d7b5e] dark:text-[#bcb09e]">
                    Don't have an account? 
                    <a class="font-bold text-primary hover:text-opacity-80 transition-colors" href="#">Sign up now!</a>
</p>
</div>
</div>
<div class="h-10"></div>
</div>
</div>
<script>
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const eyeOpen = document.querySelector('.eye-open');
        const eyeClosed = document.querySelector('.eye-closed');
        // If currently text (visible), switch to password (masked)
        if (passwordInput.type === 'text') {
            passwordInput.type = 'password';
            eyeOpen.classList.add('hidden');
            eyeClosed.classList.remove('hidden');
        } else {
            // If currently password (masked), switch to text (visible)
            passwordInput.type = 'text';
            eyeOpen.classList.remove('hidden');
            eyeClosed.classList.add('hidden');
        }
    }
</script>

</body></html>