export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8787";

export const PROD_BASE = "https://skillicons.dev";

export async function fetchIconNames(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/api/icons`, {
    next: { revalidate: process.env.NODE_ENV === "development" ? 0 : 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch icon names");
  return res.json();
}

export function buildIconUrl(
  icons: string[],
  theme: "dark" | "light",
  perline: number,
  base = API_BASE
): string {
  if (icons.length === 0) return "";
  const params = new URLSearchParams({
    i: icons.join(","),
    t: theme,
    perline: String(perline),
  });
  return `${base}/icons?${params}`;
}

export function buildProdUrl(
  icons: string[],
  theme: "dark" | "light",
  perline: number
): string {
  return buildIconUrl(icons, theme, perline, PROD_BASE);
}