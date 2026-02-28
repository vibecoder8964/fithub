"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type TimelineEvent = {
    id: string;
    type: "Routine" | "Meal" | "Task" | "Fitness" | "Sleep";
    title: string;
    description: string;
    startTime: string;
    endTime?: string;
    timeSlot: string; // The raw 24h string for sorting, e.g. "06:00:00"
};

export default function TimetablePage() {
    const { uuid } = useAuth();
    const [events, setEvents] = useState<TimelineEvent[]>([]);
    const [loading, setLoading] = useState(true);

    const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

    useEffect(() => {
        async function loadData() {
            if (!uuid) return;
            const { data: user } = await supabase.from("users").select("*").eq("id", uuid).single();

            if (!user) {
                setLoading(false);
                return;
            }

            const builtEvents: TimelineEvent[] = [];
            let nextId = 1;

            // Routine
            builtEvents.push({
                id: `evt-${nextId++}`, type: "Routine", title: "Wake Up", description: "Start the day right.",
                startTime: "06:00:00", timeSlot: "06:00:00"
            });

            if (user.breakfast_time) builtEvents.push({ id: `evt-${nextId++}`, type: "Meal", title: "Breakfast", description: "First meal of the day.", startTime: user.breakfast_time, timeSlot: user.breakfast_time });
            if (user.lunch_time) builtEvents.push({ id: `evt-${nextId++}`, type: "Meal", title: "Lunch", description: "Midday refuel.", startTime: user.lunch_time, timeSlot: user.lunch_time });
            if (user.dinner_time) builtEvents.push({ id: `evt-${nextId++}`, type: "Meal", title: "Dinner", description: "Evening recovery meal.", startTime: user.dinner_time, timeSlot: user.dinner_time });

            if (user.engage_time_before_1 && user.engage_time_after_1) builtEvents.push({ id: `evt-${nextId++}`, type: "Task", title: "Task Engagement block 1", description: "Deep work phase", startTime: user.engage_time_after_1, endTime: user.engage_time_before_1, timeSlot: user.engage_time_after_1 });
            if (user.engage_time_before_2 && user.engage_time_after_2) builtEvents.push({ id: `evt-${nextId++}`, type: "Task", title: "Task Engagement block 2", description: "Deep work phase", startTime: user.engage_time_after_2, endTime: user.engage_time_before_2, timeSlot: user.engage_time_after_2 });
            if (user.engage_time_before_3 && user.engage_time_after_3) builtEvents.push({ id: `evt-${nextId++}`, type: "Task", title: "Task Engagement block 3", description: "Deep work phase", startTime: user.engage_time_after_3, endTime: user.engage_time_before_3, timeSlot: user.engage_time_after_3 });

            if (user.sleep_time) builtEvents.push({ id: `evt-${nextId++}`, type: "Sleep", title: "Lights Out", description: "Time to rest.", startTime: user.sleep_time, timeSlot: user.sleep_time });

            // Build Workouts
            const workoutIds = [user.workout_1, user.workout_2, user.workout_3];
            const workoutTimes = [user.workout_time_1, user.workout_time_2, user.workout_time_3];

            try {
                const { data: exercises } = await supabase.from("exercises").select("*").in("id", workoutIds.filter(Boolean));
                if (exercises) {
                    workoutIds.forEach((wid, idx) => {
                        if (!wid || !workoutTimes[idx]) return;
                        const ex = exercises.find(e => e.id === wid);
                        if (ex) {
                            builtEvents.push({
                                id: `evt-${nextId++}`,
                                type: "Fitness",
                                title: ex.name,
                                description: `${ex.type} • ${ex.time_consumed_in_minutes} mins`,
                                startTime: workoutTimes[idx],
                                timeSlot: workoutTimes[idx]
                            });
                        }
                    });
                }
            } catch (err) {
                console.error("Failed fetching exercises", err);
            }

            // Sort chronological
            builtEvents.sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));

            setEvents(builtEvents);
            setLoading(false);
        }

        loadData();
    }, [uuid]);

    const formatDisplayTime = (tStr: string) => {
        try {
            const [h, m] = tStr.split(":");
            let hour = parseInt(h, 10);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            hour = hour % 12 || 12;
            return `${hour}:${m} ${ampm}`;
        } catch {
            return tStr;
        }
    };

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
            </div>
        );
    }

    return (
        <div className="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col pb-24 bg-background-light dark:bg-background-dark">
            <div className="p-5 pt-6 pb-32 max-w-3xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-[#181510] dark:text-white">Today's Schedule</h2>
                        <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mt-1">{todayStr}</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#2c241b] rounded-xl shadow-sm border border-[#e6e0d9] dark:border-[#3e3427] text-sm font-bold text-[#181510] dark:text-white hover:bg-stone-50 transition-colors pointer-events-none opacity-50">
                        <span className="material-symbols-outlined text-lg">edit_calendar</span>
                        Edit
                    </button>
                </div>

                <div className="relative ml-2 pl-8 border-l-2 border-dashed border-[#e6e0d9] dark:border-[#3e3427] space-y-10 py-2">
                    {events.map((evt) => {
                        const timeStr = evt.endTime
                            ? `${formatDisplayTime(evt.startTime)} - ${formatDisplayTime(evt.endTime)}`
                            : formatDisplayTime(evt.startTime);

                        if (evt.type === 'Task') {
                            return (
                                <div key={evt.id} className="relative group">
                                    <div className="absolute -left-[43px] top-0 size-10 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm">
                                        <span className="material-symbols-outlined text-xl">description</span>
                                    </div>
                                    <div className="bg-white dark:bg-[#2c241b] rounded-2xl p-5 border border-[#e6e0d9] dark:border-[#3e3427] shadow-sm relative overflow-hidden group-hover:shadow-md transition-all">
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400"></div>
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded">Task</span>
                                                <div className="flex items-center gap-1 text-stone-500 dark:text-stone-400">
                                                    <span className="material-symbols-outlined text-base">schedule</span>
                                                    <span className="text-sm font-medium">{timeStr}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold text-[#181510] dark:text-white py-1">{evt.title}</h3>
                                            <p className="text-stone-500 dark:text-stone-400 text-sm">{evt.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // Normal timeline dot
                        let bgRing = "";
                        let bgTag = "";
                        let textTag = "";
                        let icon = "";

                        if (evt.type === "Routine") { bgRing = "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600"; bgTag = "bg-indigo-50 text-indigo-600"; icon = "wb_twilight"; }
                        else if (evt.type === "Meal") { bgRing = "bg-orange-100 dark:bg-orange-900/20 text-orange-600"; bgTag = "bg-orange-50 text-orange-600"; icon = "restaurant"; }
                        else if (evt.type === "Fitness") { bgRing = "bg-green-100 dark:bg-green-900/20 text-green-600"; bgTag = "bg-green-50 text-green-600"; icon = "fitness_center"; }
                        else if (evt.type === "Sleep") { bgRing = "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600"; bgTag = "bg-indigo-50 text-indigo-600"; icon = "bed"; }

                        return (
                            <div key={evt.id} className="relative">
                                <div className={`absolute -left-[43px] top-0 size-10 rounded-full ${bgRing} flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark z-10 shadow-sm`}>
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${bgTag}`}>{evt.type}</span>
                                        <span className="text-sm font-medium text-stone-500">{timeStr}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#181510] dark:text-white leading-tight mt-1">{evt.title}</h3>
                                    {evt.description && <p className="text-stone-500 dark:text-stone-400 text-sm">{evt.description}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
