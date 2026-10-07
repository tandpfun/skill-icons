export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Push the root footer out of the viewport on the editor page */}
      <style>{`footer { display: none !important; }`}</style>
      {children}
    </>
  );
}