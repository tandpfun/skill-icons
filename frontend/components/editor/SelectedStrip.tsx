"use client";

import { API_BASE } from "@/lib/api";

interface SelectedStripProps {
  selected: string[];
  theme: "dark" | "light";
  onRemove: (name: string) => void;
}

export function SelectedStrip({ selected, theme, onRemove }: SelectedStripProps) {
  return (
    <div className="shrink-0 h-[68px] border-t border-white/[0.08] bg-black flex flex-col">
      {/* Strip header */}
      <div className="px-3 h-7 flex items-center border-b border-white/[0.05]">
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
          Selected{selected.length > 0 ? ` · ${selected.length}` : ""}
        </span>
      </div>

      {/* Chips row — single line horizontal scroll */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden px-2 flex items-center gap-1.5 min-w-0">
        {selected.length === 0 ? (
          <p className="text-[10px] text-white/15 whitespace-nowrap px-1">
            Click icons in the library to build your badge
          </p>
        ) : (
          selected.map((name) => (
            <div
              key={name}
              className="shrink-0 flex items-center gap-1 rounded border border-white/[0.08] bg-white/[0.04] pl-1.5 pr-1 py-0.5 hover:border-white/[0.15] transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${API_BASE}/icons?i=${name}&t=${theme}&perline=1`}
                alt={name}
                className="w-4 h-4 shrink-0"
              />
              <span className="text-[9px] font-mono text-white/40 max-w-[52px] truncate">{name}</span>
              <button
                type="button"
                onClick={() => onRemove(name)}
                className="shrink-0 w-3.5 h-3.5 flex items-center justify-center text-white/20 hover:text-white/60 transition-colors rounded text-[10px] leading-none"
                aria-label={`Remove ${name}`}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
