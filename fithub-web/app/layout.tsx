import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import { TopHeader } from "./components/TopHeader";
import { BottomNav } from "./components/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitHub Dashboard",
  description: "Next-gen AI fitness tracker and community app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark text-obsidian dark:text-white transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <div className="flex-1 h-full overflow-y-auto no-scrollbar relative flex flex-col">
              <TopHeader />
              {children}
              <BottomNav />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
