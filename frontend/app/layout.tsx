import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skill Icons",
  description:
    "Showcase your skills on your GitHub profile or resumé with beautiful, consistent SVG icons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <TooltipProvider delay={400}>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
        </TooltipProvider>
        <footer className="border-t border-white/[0.07] py-8">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="shrink-0 opacity-50">
                <path d="M10 1.5L17.794 5.75V14.25L10 18.5L2.206 14.25V5.75L10 1.5Z" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M10 5L14.33 7.5V12.5L10 15L5.67 12.5V7.5L10 5Z" fill="white" fillOpacity="0.9" />
              </svg>
              <span>© {new Date().getFullYear()} Skill Icons</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/tandpfun/skill-icons"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/50 transition-colors"
              >
                GitHub
              </a>
              <span>·</span>
              <span>Powered by Cloudflare Workers</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
