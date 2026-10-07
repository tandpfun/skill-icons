"use client";

import { API_BASE } from "@/lib/api";

interface CanvasPanelProps {
  selected: string[];
  theme: "dark" | "light";
  perline: number;
  onRemove: (name: string) => void;
}

export function CanvasPanel({ selected, theme, perline, onRemove }: CanvasPanelProps) {
  const cols = selected.length > 0 ? Math.min(perline, selected.length) : 0;
  const rows = selected.length > 0 ? Math.ceil(selected.length / perline) : 0;

  return (
    <div className="flex flex-col h-full bg-[#080808]">
      {/* Toolbar */}
      <div className="shrink-0 flex items-center justify-between px-4 h-9 border-b border-white/[0.08]">
        <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">Preview</span>
        {selected.length > 0 && (
          <span className="text-[10px] font-mono text-white/20 tabular-nums">
            {selected.length} icons · {cols}×{rows}
          </span>
        )}
      </div>

      {/* Canvas area */}
      <div className="flex-1 flex items-center justify-center p-10 overflow-auto">
        {selected.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center gap-4 select-none">
            <div className="w-16 h-16 rounded-2xl border border-dashed border-white/[0.12] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/20">
                <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-xs text-white/25 font-medium">No icons selected</p>
              <p className="text-[11px] text-white/15 mt-1">Click icons in the library to add them</p>
            </div>
          </div>
        ) : (
          /* Icon grid — hover each cell to reveal remove button */
          <div
            className={`rounded-xl p-5 ${
              theme === "light"
                ? "bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5)]"
                : "bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.8)]"
            }`}
          >
            <div
              className="grid"
              style={{ gridTemplateColumns: `repeat(${perline}, minmax(0, 1fr))` }}
            >
              {selected.map((name) => (
                <IconCell
                  key={name}
                  name={name}
                  theme={theme}
                  onRemove={onRemove}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function IconCell({
  name,
  theme,
  onRemove,
}: {
  name: string;
  theme: "dark" | "light";
  onRemove: (name: string) => void;
}) {
  return (
    <div className="group relative flex items-center justify-center p-1.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${API_BASE}/icons?i=${name}&t=${theme}&perline=1`}
        alt={name}
        className="w-12 h-12 block"
      />
      {/* Remove button — visible on hover */}
      <button
        type="button"
        onClick={() => onRemove(name)}
        title={`Remove ${name}`}
        className="absolute top-0 right-0 w-5 h-5 rounded-full bg-black border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white hover:text-black"
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}
