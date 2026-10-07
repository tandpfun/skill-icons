"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { API_BASE } from "@/lib/api";
import { useState } from "react";

const ROW_1 = ["react","typescript","nodejs","python","rust","go","docker","kubernetes","aws","gcp","nextjs","tailwindcss","postgresql","redis","git","github","vscode","figma","linux","bash"];
const ROW_2 = ["vue","angular","svelte","astro","bun","deno","prisma","graphql","mongodb","firebase","cloudflare","terraform","ansible","elixir","kotlin","swift","cpp","java","dotnet","php"];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center gap-0 px-4 pt-28 pb-0 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
        <div className="pointer-events-none absolute inset-0 hero-glow" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black to-transparent z-10" />

        <div className="relative z-20 flex flex-col items-center gap-6 max-w-4xl">
          <a
            href="https://github.com/tandpfun/skill-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-white/50 hover:border-white/30 hover:text-white/70 transition-all duration-200"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
            Open source on GitHub
            <svg className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </a>

          <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-bold tracking-[-0.04em] text-white leading-[1.0] [text-wrap:balance]">
            Skill badges for<br />your GitHub profile
          </h1>

          <p className="text-base sm:text-lg text-white/40 max-w-lg leading-relaxed [text-wrap:balance]">
            Beautiful SVG badges for every language, framework, and tool.
            Drop a single URL into any README — no tokens, no setup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              href="/editor"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-black hover:bg-white/90 font-semibold h-11 px-7 rounded-full text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.08)]"
              )}
            >
              Open Editor
              <svg className="ml-1.5 h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/docs"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/15 text-white/60 hover:text-white hover:bg-white/[0.06] hover:border-white/25 bg-transparent h-11 px-7 rounded-full text-sm"
              )}
            >
              Documentation
            </Link>
          </div>
        </div>

        {/* ── Marquee strips ── */}
        <div className="relative z-20 w-full mt-16 flex flex-col gap-3 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex w-max animate-marquee gap-3">
            {[...ROW_1, ...ROW_1].map((icon, i) => (
              <IconChip key={`r1-${i}`} icon={icon} theme="dark" />
            ))}
          </div>

          <div className="flex w-max animate-marquee-reverse gap-3">
            {[...ROW_2, ...ROW_2].map((icon, i) => (
              <IconChip key={`r2-${i}`} icon={icon} theme="light" />
            ))}
          </div>
        </div>

        <div className="h-16" />
      </section>

      <Separator className="bg-white/[0.07]" />

      {/* ── Stats ── */}
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-3 divide-x divide-white/[0.07]">
          <Stat value="402" label="SVG Icons" />
          <Stat value="2" label="Themes" />
          <Stat value="1" label="URL" />
        </div>
      </section>

      <Separator className="bg-white/[0.07]" />

      {/* ── Features ── */}
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-24">
        <div className="mb-16 max-w-xl">
          <p className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em] mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white leading-tight">
            Simple by design,<br />powerful by default.
          </h2>
          <p className="mt-4 text-white/40 leading-relaxed text-sm">
            Everything you need to showcase your tech stack — nothing you don&apos;t.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.07] rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<GridIcon />}
            title="402 Icons"
            description="Every major language, framework, tool, and platform. Dark and light themed variants included."
          />
          <FeatureCard
            icon={<LinkIcon />}
            title="One URL"
            description="A single image URL works in any Markdown file, HTML page, or email. Zero dependencies."
          />
          <FeatureCard
            icon={<BrushIcon />}
            title="Visual Editor"
            description="Search, select, and reorder icons interactively. Copy the Markdown, HTML, or raw URL."
          />
          <FeatureCard
            icon={<SunIcon />}
            title="Dark & Light Themes"
            description="Switch between dark and light icon variants with a single query parameter."
          />
          <FeatureCard
            icon={<RowsIcon />}
            title="Flexible Layout"
            description="Control icons per row with ?perline=1–50. Stack them tall or spread them wide."
          />
          <FeatureCard
            icon={<CodeIcon />}
            title="Open Source"
            description="All icons and the Cloudflare Worker API are fully open source. Contributions welcome."
          />
        </div>
      </section>

      <Separator className="bg-white/[0.07]" />

      {/* ── Quick Start ── */}
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em] mb-4">Quick Start</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white leading-tight mb-5">
              One line.<br />Any README.
            </h2>
            <p className="text-white/40 leading-relaxed text-sm mb-8">
              Paste the snippet into your GitHub profile README and swap the icon list for your stack.
              Find all 402 icons in the{" "}
              <Link href="/docs" className="text-white/70 hover:text-white underline underline-offset-4 decoration-white/20 transition-colors">
                docs
              </Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/editor" className={cn(buttonVariants(), "bg-white text-black hover:bg-white/90 font-semibold rounded-full px-6 text-sm")}>
                Build with Editor →
              </Link>
              <Link href="/docs" className={cn(buttonVariants({ variant: "outline" }), "border-white/15 text-white/60 hover:text-white hover:bg-white/[0.06] bg-transparent rounded-full px-6 text-sm")}>
                View Docs
              </Link>
            </div>
          </div>

          <CodeBlock />
        </div>
      </section>

      <Separator className="bg-white/[0.07]" />

      {/* ── CTA ── */}
      <section className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 py-28 flex flex-col items-center text-center gap-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-glow opacity-60" />
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

        <div className="relative flex flex-col items-center gap-6 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-white leading-tight [text-wrap:balance]">
            Show the world<br />what you&apos;re built with
          </h2>
          <p className="text-white/40 text-base leading-relaxed [text-wrap:balance] max-w-md">
            Thousands of developers use Skill Icons to showcase their stack on GitHub profiles, READMEs, and portfolios.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link
              href="/editor"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-black hover:bg-white/90 font-semibold h-11 px-8 rounded-full text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(255,255,255,0.1)]"
              )}
            >
              Open Editor →
            </Link>
            <a
              href="https://github.com/tandpfun/skill-icons"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/15 text-white/60 hover:text-white hover:bg-white/[0.06] bg-transparent h-11 px-8 rounded-full text-sm"
              )}
            >
              <GithubIcon />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Sub-components ──

function IconChip({ icon, theme }: { icon: string; theme: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${API_BASE}/icons?i=${icon}&t=${theme}&perline=1`}
        alt={icon}
        className="h-7 w-7"
      />
      <span className="text-xs text-white/35 font-mono">{icon}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 py-6 px-6">
      <span className="text-4xl font-bold text-white tracking-[-0.04em]">{value}</span>
      <span className="text-[11px] text-white/25 uppercase tracking-[0.15em]">{label}</span>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-black hover:bg-white/[0.025] transition-colors duration-200 p-8 flex flex-col gap-5">
      <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-colors duration-200">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-white text-[15px] tracking-tight">{title}</h3>
        <p className="text-sm text-white/35 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CodeBlock() {
  const [copied, setCopied] = useState(false);
  const snippet = `[![My Skills](https://skillicons.dev/icons?i=js,ts,react,nodejs,python)](https://skillicons.dev)`;

  function copy() {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_48px_rgba(0,0,0,0.6)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]">
        <div className="h-3 w-3 rounded-full bg-white/10" />
        <div className="h-3 w-3 rounded-full bg-white/10" />
        <div className="h-3 w-3 rounded-full bg-white/10" />
        <span className="ml-2 text-xs text-white/25 font-mono">README.md</span>
        <button
          onClick={copy}
          className="ml-auto flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors font-mono"
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5 text-green-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="5" width="9" height="9" rx="1.5" />
                <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="p-5 text-sm font-mono text-white/60 overflow-x-auto leading-relaxed whitespace-pre-wrap break-all">
        <code>{snippet}</code>
      </pre>

      {/* Preview */}
      <div className="border-t border-white/[0.07] px-5 py-4 bg-white/[0.015]">
        <p className="text-[11px] text-white/20 font-mono uppercase tracking-widest mb-3">Preview</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${API_BASE}/icons?i=js,ts,react,nodejs,python&t=dark&perline=5`}
          alt="Preview"
          className="h-10 w-auto opacity-90"
        />
      </div>
    </div>
  );
}

// ── Icons ──
function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  );
}
function BrushIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );
}
function RowsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}
