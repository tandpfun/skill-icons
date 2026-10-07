"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-black/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold text-white hover:opacity-80 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
            <path
              d="M10 1.5L17.794 5.75V14.25L10 18.5L2.206 14.25V5.75L10 1.5Z"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M10 5L14.33 7.5V12.5L10 15L5.67 12.5V7.5L10 5Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
          <span className="tracking-tight">Skill Icons</span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-0.5 text-sm">
          <NavLink href="/docs" active={pathname === "/docs"}>
            Docs
          </NavLink>
          <NavLink href="/editor" active={pathname === "/editor"}>
            Editor
          </NavLink>

          <div className="ml-3 flex items-center gap-2">
            <a
              href="https://github.com/tandpfun/skill-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </a>

            <Link
              href="/editor"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black hover:bg-white/90 transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
            >
              Open Editor
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-1.5 rounded-md transition-colors",
        active
          ? "text-white bg-white/[0.07]"
          : "text-white/45 hover:text-white hover:bg-white/[0.05]"
      )}
    >
      {children}
    </Link>
  );
}
