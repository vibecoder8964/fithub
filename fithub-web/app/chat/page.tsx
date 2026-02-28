"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

type Sender = "user" | "system";

interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  createdAt: number;
}

type RoomConfig = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  mode: "ai" | "feedback" | "generic";
};

const ROOMS: RoomConfig[] = [
  {
    id: "fitlah-ai",
    title: "FitLah AI Assistant",
    subtitle: "Ask anything about your fitness journey.",
    icon: "smart_toy",
    mode: "ai",
  },
  {
    id: "feedback",
    title: "Feedback to Team",
    subtitle: "Share your thoughts and help us improve.",
    icon: "feedback",
    mode: "feedback",
  },
  {
    id: "global-chat",
    title: "Global Community",
    subtitle: "Talk with other FitHub members.",
    icon: "groups",
    mode: "generic",
  },
];

export default function ChatPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { uuid } = useAuth();

  const roomId = searchParams.get("room") || "fitlah-ai";
  const room = ROOMS.find((r) => r.id === roomId) ?? ROOMS[0];

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const welcomeText =
      room.mode === "feedback"
        ? "We'd love to hear your feedback. Your comments are encrypted in transit and stored securely."
        : room.mode === "ai"
        ? "Hi! I'm FitLah AI. Ask me about workouts, nutrition, and routines. (This preview uses a local mock reply. In production, replies come from a secure HTTPS AI backend.)"
        : "Welcome to the community space! Be kind, supportive, and stay on topic.";
    return [
      {
        id: "welcome",
        sender: "system",
        text: welcomeText,
        createdAt: Date.now(),
      },
    ];
  });

  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!uuid) {
      setError("Session expired. Please log in again.");
      router.push("/");
      return;
    }

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: input.trim(),
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError("");
    setSending(true);

    try {
      if (room.mode === "feedback") {
        // Append feedback text to users.feedback for this UUID
        const { data, error: fetchErr } = await supabase
          .from("users")
          .select("feedback")
          .eq("id", uuid)
          .single();

        if (fetchErr) {
          throw fetchErr;
        }

        const existing = (data?.feedback as string | null) ?? "";
        const appended =
          existing.trim().length > 0
            ? `${existing.trim()}\n${userMessage.text}`
            : userMessage.text;

        const { error: updateErr } = await supabase
          .from("users")
          .update({ feedback: appended })
          .eq("id", uuid);

        if (updateErr) {
          throw updateErr;
        }

        const reply: ChatMessage = {
          id: `sys-${Date.now()}`,
          sender: "system",
          text:
            "Thank you for your feedback! The team will continuously refine and improve the app!",
          createdAt: Date.now(),
        };
        setMessages((prev) => [...prev, reply]);
      } else if (room.mode === "ai") {
        // Local mock reply only; no remote execution of user input.
        const reply: ChatMessage = {
          id: `sys-${Date.now()}`,
          sender: "system",
          text:
            "This is a preview reply from FitLah AI. In production, your message will be sent over HTTPS to a secure AI API that never executes your input as code.",
          createdAt: Date.now(),
        };
        setMessages((prev) => [...prev, reply]);
      } else {
        // Generic room: echo-style acknowledgement
        const reply: ChatMessage = {
          id: `sys-${Date.now()}`,
          sender: "system",
          text: "Message received! Community chat will be available in a future update.",
          createdAt: Date.now(),
        };
        setMessages((prev) => [...prev, reply]);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex-1 w-full overflow-hidden relative flex flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="flex-none px-4 pt-4 pb-3 flex items-center gap-3 border-b border-[#e6e0d9] dark:border-[#3e3427] bg-white/90 dark:bg-[#231b0f]/90 backdrop-blur-sm">
        <button
          type="button"
          onClick={() => router.back()}
          className="size-10 rounded-full flex items-center justify-center text-[#8d7b5e] dark:text-[#a89b85] hover:bg-stone-100 dark:hover:bg-[#3e3427] transition-colors"
        >
          <span className="material-symbols-outlined text-xl">
            arrow_back_ios_new
          </span>
        </button>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-[#f4efe6] dark:bg-[#3a3022] flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-xl">
              {room.icon}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#181510] dark:text-white">
              {room.title}
            </span>
            <span className="text-[11px] text-[#8d7b5e] dark:text-[#a89b85]">
              {room.subtitle}
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-3 pb-24 max-w-2xl mx-auto w-full">
        <div className="flex flex-col gap-3">
          {messages.map((m) => {
            const isUser = m.sender === "user";
            return (
              <div
                key={m.id}
                className={`flex w-full ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm ${
                    isUser
                      ? "bg-primary text-[#181510] rounded-br-sm"
                      : "bg-white dark:bg-[#2c241b] text-[#181510] dark:text-white rounded-bl-sm border border-[#e6e0d9] dark:border-[#3e3427]"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{m.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="absolute bottom-20 left-0 right-0 flex justify-center px-4">
          <div className="max-w-md w-full bg-red-500 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-md text-center">
            {error}
          </div>
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="flex-none fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#231b0f]/95 border-t border-[#e6e0d9] dark:border-[#3e3427] px-4 py-3"
      >
        <div className="max-w-2xl mx-auto flex items-end gap-2">
          <div className="flex-1 flex items-center bg-[#f4efe6] dark:bg-[#2c241b] rounded-2xl px-3 py-2 border border-[#e6e0d9] dark:border-[#3e3427]">
            <textarea
              className="w-full bg-transparent border-0 outline-none resize-none text-sm text-[#181510] dark:text-white placeholder:text-[#b0a291]"
              rows={1}
              maxLength={500}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            disabled={sending || !input.trim()}
            className="size-10 rounded-full bg-primary text-[#181510] flex items-center justify-center shadow-md hover:brightness-105 active:scale-95 disabled:opacity-50 transition-all"
          >
            <span className="material-symbols-outlined text-xl">
              {sending ? "more_horiz" : "send"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

