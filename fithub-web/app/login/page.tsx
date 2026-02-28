"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const {
    setUuid,
    triggerLockout,
    lockoutTime,
    failedAttempts,
    incrementFailedAttempts,
    resetFailedAttempts
  } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isLockedOut = lockoutTime && lockoutTime > Date.now();
  const lockoutMinutesRemaining = lockoutTime
    ? Math.ceil((lockoutTime - Date.now()) / 60000)
    : 0;

  useEffect(() => {
    if (isLockedOut) {
      setErrorMsg(`Too many failed attempts. Try again in ${lockoutMinutesRemaining} minute(s).`);
    } else {
      setErrorMsg("");
    }
  }, [isLockedOut, lockoutMinutesRemaining]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLockedOut) return;

    setErrorMsg("");
    setIsLoading(true);

    try {
      // Validate against Database manually (must support username OR phone_number as per prompt)
      const { data: users, error } = await supabase
        .from("users")
        .select("id, password")
        .or(`username.eq.${identifier},phone_number.eq.${identifier},email.eq.${identifier}`);

      if (error || !users || users.length === 0) {
        handleFailedAttempt("Invalid username/phone or password.");
        return;
      }

      const user = users[0];
      if (user.password !== password) {
        handleFailedAttempt("Invalid username/phone or password.");
        return;
      }

      // VALIDATING() PASSED
      resetFailedAttempts();
      setUuid(user.id);
      router.push("/"); // Trigger MAIN_ROADMAP()

    } catch (err) {
      setErrorMsg("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFailedAttempt = (msg: string) => {
    incrementFailedAttempts();
    const newFails = failedAttempts + 1;

    if (newFails >= 5) {
      // time increases 5 minutes per 5 wrong attempts
      // 5 fails = 1 min, 10 fails = 6 mins, 15 fails = 11 mins
      const scale = Math.floor(newFails / 5);
      const penaltyMinutes = 1 + ((scale - 1) * 5);
      triggerLockout(penaltyMinutes);
      setErrorMsg(`Too many failed attempts. Try again in ${penaltyMinutes} minute(s).`);
    } else {
      setErrorMsg(`${msg} (${5 - (newFails % 5)} attempts left before lockout)`);
    }
  };

  const handleGoogleLogin = () => {
    // Note: Simulated for now. In real Supabase, we'd use supabase.auth.signInWithOAuth()
    alert("Google OAuth is simulated in this UI step per requirements. Redirecting to Password check...");
    // Future expansion: user clicks google, queries email from DB -> redirects to Password page
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full z-10 font-display bg-background-light dark:bg-background-dark text-[#181510] dark:text-white pb-8">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.15] overflow-hidden text-primary">
        <div className="absolute top-10 left-8 transform rotate-12"><span className="material-symbols-outlined text-7xl">favorite</span></div>
        <div className="absolute top-48 right-6 transform -rotate-12"><span className="material-symbols-outlined text-7xl">fitness_center</span></div>
        <div className="absolute bottom-1/4 left-12 transform rotate-45"><span className="material-symbols-outlined text-7xl">nutrition</span></div>
        <div className="absolute top-1/2 right-1/4 transform rotate-6"><span className="material-symbols-outlined text-7xl">fitness_center</span></div>
        <div className="absolute bottom-20 right-8 transform -rotate-12"><span className="material-symbols-outlined text-7xl">favorite</span></div>
      </div>

      <div className="relative w-full h-[40vh] min-h-[300px] z-0">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-100"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcTDFD0cdSeRpnA-iDfdQFloLSQFMkVWxyvF4IKsO4WDw-UTcZ7FiFwo1aH-J7FRHoEeY5CRSqOw_vvGA51YRFk6OolgPSLUXcPQ909w_e4RgGuDRnA3ED-cBwrkgZ5qeQKfitWYocJK3cS0wIEOt7BQHsOwnEivhdhjwAiWN2SG3HtEzQuuRZBplgKJhkxsUozf0bKiyaoyrkKw489-rgMxClZAiwzlJgGmkDJ6_C1-KbCV-j0_j2hRiAilIxnFlQYq0PiNgdJnZ4")',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent opacity-40"></div>
        </div>
        <div className="absolute top-6 left-6 flex items-center gap-2 z-20">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-xl text-white shadow-lg">
            <span className="material-symbols-outlined">bolt</span>
          </div>
          <span className="text-black font-bold text-xl drop-shadow-sm">FitHub</span>
        </div>
      </div>

      <div className="flex-1 -mt-10 px-4 flex flex-col justify-start items-center relative z-10 w-full mb-10">
        <div className="w-full max-w-md bg-white dark:bg-[#2a2215] rounded-xl shadow-xl p-6 md:p-8 border border-[#e7e2da] dark:border-[#3d3223]">

          <div className="flex flex-col gap-2 mb-6 text-center">
            <h1 className="text-[#181510] dark:text-white tracking-tight text-[32px] font-extrabold leading-tight">Welcome Back!</h1>
            <p className="text-[#8d7b5e] dark:text-[#bcb09e] text-base font-normal leading-normal">Log in to continue your journey.</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1">
              <label className="sr-only" htmlFor="username">Username or Phone Number</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7b5e] group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">person</span>
                </span>
                <input
                  className="form-input flex w-full rounded-xl text-[#181510] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e7e2da] dark:border-[#4a3e2f] bg-background-light dark:bg-[#322a1e] focus:border-primary h-14 placeholder:text-[#8d7b5e] pl-12 pr-4 text-base transition-all duration-200"
                  id="username"
                  placeholder="Username or Phone Number"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  disabled={isLockedOut || isLoading}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d7b5e] group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">lock</span>
                </span>
                <input
                  className="form-input flex w-full rounded-xl text-[#181510] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e7e2da] dark:border-[#4a3e2f] bg-background-light dark:bg-[#322a1e] focus:border-primary h-14 placeholder:text-[#8d7b5e] pl-12 pr-12 text-base transition-all duration-200"
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLockedOut || isLoading}
                  required
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8d7b5e] hover:text-primary transition-colors focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </div>

            {errorMsg && (
              <div className="text-red-500 text-sm font-semibold text-center mt-2">
                {errorMsg}
              </div>
            )}

            <div className="flex justify-end">
              <span className="text-sm font-medium text-[#8d7b5e] hover:text-primary transition-colors cursor-pointer">Forgot Password?</span>
            </div>

            <button
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
              type="submit"
              disabled={isLockedOut || isLoading}
            >
              <span className="truncate">{isLoading ? "Verifying..." : "Log In"}</span>
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-[#e7e2da] dark:border-[#4a3e2f]"></div>
              <span className="flex-shrink mx-4 text-sm text-[#8d7b5e]">Or continue with</span>
              <div className="flex-grow border-t border-[#e7e2da] dark:border-[#4a3e2f]"></div>
            </div>

            <button
              className="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-14 border border-[#e7e2da] dark:border-[#4a3e2f] bg-white dark:bg-[#322a1e] text-[#181510] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-[#3a3123] transition-colors active:scale-[0.98]"
              type="button"
              onClick={handleGoogleLogin}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.7662 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"></path>
                <path d="M5.50253 14.3003C5.00236 12.8199 5.00236 11.1799 5.50253 9.69951V6.60861H1.51649C-0.18551 10.0056 -0.18551 13.9945 1.51649 17.3915L5.50253 14.3003Z" fill="#FBBC05"></path>
                <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.60861L5.50264 9.69951C6.45064 6.86154 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"></path>
              </svg>
              <span className="truncate">Continue with Google</span>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#8d7b5e] dark:text-[#bcb09e]">
              Don't have an account?
              <Link href="/sign_up" className="font-bold text-primary hover:text-opacity-80 transition-colors ml-1">Sign up now!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
