"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { buildProdUrl } from "@/lib/api";
import { cn } from "@/lib/utils";

interface SettingsPanelProps {
  selected: string[];
  theme: "dark" | "light";
  perline: number;
  onThemeChange: (t: "dark" | "light") => void;
  onPerlineChange: (n: number) => void;
}

type CopiedKey = "url" | "markdown" | "html" | null;

export function SettingsPanel({
  selected,
  theme,
  perline,
  onThemeChange,
  onPerlineChange,
}: SettingsPanelProps) {
  const [copied, setCopied] = useState<CopiedKey>(null);

  const copy = async (key: CopiedKey, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {}
  };

  const prodUrl = selected.length > 0 ? buildProdUrl(selected, theme, perline) : "";
  const markdown = prodUrl ? `[![My Skills](${prodUrl})](https://skillicons.dev)` : "";
  const html = prodUrl ? `<img src="${prodUrl}" alt="My Skills" />` : "";

  const rows = selected.length > 0 ? Math.ceil(selected.length / perline) : 0;

  return (
    <div className="flex flex-col h-full bg-black border-l border-white/[0.08] overflow-y-auto">

      {/* ── Theme ─────────────────────────────────── */}
      <Section title="Theme">
        <div className="grid grid-cols-2 gap-2">
          {(["dark", "light"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onThemeChange(t)}
              className={cn(
                "group relative flex flex-col gap-2 rounded-xl border p-3 transition-all text-left",
                theme === t
                  ? "border-white/40 bg-white/[0.07]"
                  : "border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]"
              )}
            >
              {/* Swatch preview */}
              <div className={cn(
                "w-full h-8 rounded-lg flex items-center justify-center gap-1.5",
                t === "dark" ? "bg-zinc-900" : "bg-zinc-100"
              )}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5 rounded-full",
                      t === "dark" ? "bg-white/20" : "bg-black/15"
                    )}
                  />
                ))}
              </div>
              <span className={cn(
                "text-sm font-medium capitalize",
                theme === t ? "text-white" : "text-white/40"
              )}>
                {t}
              </span>
              {theme === t && (
                <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Icons per row ─────────────────────────── */}
      <Section title="Icons per row">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-white/50 text-sm flex-1">Columns</span>
          <span className="text-2xl font-bold text-white tabular-nums w-8 text-right">{perline}</span>
        </div>
        <Slider
          min={1}
          max={50}
          step={1}
          value={[perline]}
          onValueChange={(v) => {
            const val = Array.isArray(v) ? v[0] : v;
            if (typeof val === "number") onPerlineChange(val);
          }}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-xs text-white/30 font-mono">
          <span>1</span><span>50</span>
        </div>
      </Section>

      <Divider />

      {/* ── Export ────────────────────────────────── */}
      <Section title="Export">
        {selected.length === 0 ? (
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-5 text-center">
            <p className="text-sm text-white/30">Select icons to generate export links</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <ExportBlock
              label="Direct URL"
              description="Link directly to the SVG"
              value={prodUrl}
              id="url"
              copied={copied}
              onCopy={copy}
            />
            <ExportBlock
              label="Markdown"
              description="Badge for README.md"
              value={markdown}
              id="markdown"
              copied={copied}
              onCopy={copy}
            />
            <ExportBlock
              label="HTML"
              description="Embed in any webpage"
              value={html}
              id="html"
              copied={copied}
              onCopy={copy}
            />
          </div>
        )}
      </Section>

      {/* ── Summary ───────────────────────────────── */}
      {selected.length > 0 && (
        <>
          <Divider />
          <Section title="Summary">
            <div className="grid grid-cols-2 gap-2">
              <StatCard label="Icons" value={selected.length} />
              <StatCard label="Rows" value={rows} />
            </div>
          </Section>
        </>
      )}
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-4 py-5">
      <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">{title}</p>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-white/[0.06] mx-4" />;
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
      <span className="block text-2xl font-bold text-white tabular-nums leading-none">{value}</span>
      <span className="block text-xs text-white/40 mt-1.5 font-medium">{label}</span>
    </div>
  );
}

function ExportBlock({
  label,
  description,
  value,
  id,
  copied,
  onCopy,
}: {
  label: string;
  description: string;
  value: string;
  id: CopiedKey;
  copied: CopiedKey;
  onCopy: (key: CopiedKey, text: string) => void;
}) {
  const isCopied = copied === id;

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
      {/* Header row */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.06]">
        <div>
          <p className="text-sm font-medium text-white">{label}</p>
          <p className="text-xs text-white/35 mt-0.5">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => onCopy(id, value)}
          className={cn(
            "shrink-0 ml-3 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
            isCopied
              ? "bg-white text-black"
              : "bg-white/[0.08] text-white hover:bg-white/[0.15]"
          )}
        >
          {isCopied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L4.5 8.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="4" y="1" width="7" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4.5V10C1 10.5523 1.44772 11 2 11H7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      {/* Value preview */}
      <div className="px-3.5 py-2.5 bg-black/30">
        <p className="truncate font-mono text-xs text-white/35 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
