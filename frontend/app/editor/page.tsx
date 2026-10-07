import { fetchIconNames } from "@/lib/api";
import { EditorShell } from "@/components/editor/EditorShell";

export const metadata = {
  title: "Editor — Skill Icons",
  description: "Build your skill badge visually. Search, select and configure 326+ icons.",
};

export default async function EditorPage() {
  const icons = await fetchIconNames().catch(() => [] as string[]);

  return (
    // Takes the full remaining viewport height (100dvh minus the 56px navbar)
    <div className="flex flex-col" style={{ height: "calc(100dvh - 56px)" }}>
      <EditorShell icons={icons} />
    </div>
  );
}
