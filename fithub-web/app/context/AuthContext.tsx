"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabase";

interface UserProfile {
    id: string;
    username: string;
    email: string;
    xp_count: number;
    gems_count: number;
    streak_count: number;
}

interface AuthContextType {
    uuid: string | null;
    setUuid: (id: string | null) => void;
    userProfile: UserProfile | null;
    refreshProfile: () => Promise<void>;
    lockoutTime: number | null;
    triggerLockout: (minutes: number) => void;
    failedAttempts: number;
    incrementFailedAttempts: () => void;
    resetFailedAttempts: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [uuid, setUuidState] = useState<string | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [lockoutTime, setLockoutTime] = useState<number | null>(null);
    const [failedAttempts, setFailedAttempts] = useState(0);

    // Load from local storage initially
    useEffect(() => {
        const cachedUuid = localStorage.getItem("fithub_uuid");
        if (cachedUuid) {
            setUuidState(cachedUuid);
        }
    }, []);

    const setUuid = (id: string | null) => {
        setUuidState(id);
        if (id) {
            localStorage.setItem("fithub_uuid", id);
        } else {
            localStorage.removeItem("fithub_uuid");
            setUserProfile(null);
        }
    };

    const refreshProfile = async () => {
        if (!uuid) return;
        const { data, error } = await supabase
            .from("users")
            .select("id, username, email, xp_count, gems_count, streak_count")
            .eq("id", uuid)
            .single();

        if (data && !error) {
            setUserProfile(data);
        }
    };

    useEffect(() => {
        refreshProfile();
    }, [uuid]);

    // Handle Validation Lockout Tracker
    useEffect(() => {
        if (lockoutTime && lockoutTime > Date.now()) {
            const timer = setInterval(() => {
                if (Date.now() >= lockoutTime) {
                    setLockoutTime(null);
                    setFailedAttempts(0); // Reset after full lockout expiration
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [lockoutTime]);

    const triggerLockout = (minutes: number) => {
        setLockoutTime(Date.now() + minutes * 60 * 1000);
    };

    const incrementFailedAttempts = () => {
        setFailedAttempts((prev) => prev + 1);
    };

    const resetFailedAttempts = () => {
        setFailedAttempts(0);
    };

    return (
        <AuthContext.Provider
            value={{
                uuid,
                setUuid,
                userProfile,
                refreshProfile,
                lockoutTime,
                triggerLockout,
                failedAttempts,
                incrementFailedAttempts,
                resetFailedAttempts,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
