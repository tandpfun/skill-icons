"use client";

import { useState, useCallback } from "react";
import { LibraryPanel } from "./LibraryPanel";
import { CanvasPanel } from "./CanvasPanel";
import { SettingsPanel } from "./SettingsPanel";

interface EditorShellProps {
  icons: string[];
}

export function EditorShell({ icons }: EditorShellProps) {
  const [selectedArr, setSelectedArr] = useState<string[]>([]);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [perline, setPerline] = useState(15);

  // Keep a Set for O(1) lookup in the library grid
  const selectedSet = new Set(selectedArr);

  const toggle = useCallback((name: string) => {
    setSelectedArr((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }, []);

  const remove = useCallback((name: string) => {
    setSelectedArr((prev) => prev.filter((n) => n !== name));
  }, []);

  return (
    // Full remaining viewport height
    <div className="flex h-full overflow-hidden">
      {/* ── Left: Library ─────────────────────────── */}
      <div className="w-72 shrink-0 flex flex-col overflow-hidden">
        <LibraryPanel
          icons={icons}
          selected={selectedSet}
          theme={theme}
          onToggle={toggle}
        />
      </div>

      {/* ── Center: Canvas ────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <CanvasPanel selected={selectedArr} theme={theme} perline={perline} onRemove={remove} />
      </div>

      {/* ── Right: Settings ───────────────────────── */}
      <div className="w-56 shrink-0 flex flex-col overflow-hidden">
        <SettingsPanel
          selected={selectedArr}
          theme={theme}
          perline={perline}
          onThemeChange={setTheme}
          onPerlineChange={setPerline}
        />
      </div>
    </div>
  );
}
