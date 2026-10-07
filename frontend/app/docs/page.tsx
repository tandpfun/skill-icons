import { fetchIconNames, API_BASE } from "@/lib/api";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SHORT_NAMES: [string, string][] = [
  ["js", "javascript"], ["ts", "typescript"], ["py", "python"],
  ["tailwind", "tailwindcss"], ["vue", "vuejs"], ["nuxt", "nuxtjs"],
  ["go", "golang"], ["cf", "cloudflare"], ["wasm", "webassembly"],
  ["postgres", "postgresql"], ["k8s", "kubernetes"], ["next", "nextjs"],
  ["mongo", "mongodb"], ["md", "markdown"], ["ps", "photoshop"],
  ["ai", "illustrator"], ["pr", "premiere"], ["ae", "aftereffects"],
  ["scss", "sass"], ["sc", "scala"], ["net", "dotnet"],
  ["gatsbyjs", "gatsby"], ["gql", "graphql"], ["vlang", "v"],
  ["amazonwebservices", "aws"], ["bots", "discordbots"], ["express", "expressjs"],
  ["googlecloud", "gcp"], ["mui", "materialui"], ["windi", "windicss"],
  ["unreal", "unrealengine"], ["nest", "nestjs"], ["ktorio", "ktor"],
  ["pwsh", "powershell"], ["au", "audition"], ["rollup", "rollupjs"],
  ["rxjs", "reactivex"], ["rxjava", "reactivex"], ["ghactions", "githubactions"],
  ["sklearn", "scikitlearn"],
];

const NAV = [
  { id: "usage", label: "Usage" },
  { id: "theme", label: "Themes" },
  { id: "perline", label: "Per Line" },
  { id: "aliases", label: "Aliases" },
  { id: "icons-list", label: "All Icons" },
];

export default async function DocsPage() {
  const icons = await fetchIconNames().catch(() => [] as string[]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Badge variant="outline" className="border-white/20 text-white/40 bg-transparent text-xs font-mono mb-4">
          Documentation
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
          API Reference
        </h1>
        <p className="text-white/40 text-lg max-w-xl">
          A single HTTP endpoint that returns SVG icon sheets for embedding anywhere.
        </p>
      </div>

      <div className="flex gap-12">
        {/* Sidebar TOC */}
        <aside className="hidden lg:flex flex-col gap-1 w-44 shrink-0 sticky top-20 self-start">
          <p className="text-xs font-mono text-white/20 uppercase tracking-widest mb-2">On this page</p>
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-white/40 hover:text-white py-1 transition-colors"
            >
              {label}
            </a>
          ))}
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-16">
          {/* Base URL */}
          <section>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-white/10">
                <span className="text-xs font-mono text-white/30">Base URL</span>
              </div>
              <pre className="px-4 py-3 font-mono text-sm text-white/60">
                <code>https://skillicons.dev</code>
              </pre>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Usage */}
          <section id="usage">
            <DocHeading>Usage</DocHeading>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              Pass a comma-separated list of icon names to the <Mono>i</Mono> parameter.
            </p>
            <CodeBlock label="Request">{`GET /icons?i=js,html,css,wasm`}</CodeBlock>
            <div className="mt-4 p-4 rounded-lg border border-white/10 bg-zinc-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${API_BASE}/icons?i=js,html,css,wasm&t=dark&perline=15`}
                alt="Example"
                className="h-12"
              />
            </div>
            <div className="mt-4 rounded-lg border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="px-4 py-3 text-left text-xs font-mono text-white/30">Param</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-white/30">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-white/30">Required</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-white/30">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: "i", type: "string", required: true, description: "Comma-separated icon names, or \"all\"" },
                    { param: "t", type: "dark | light", required: false, description: "Icon theme. Default: dark" },
                    { param: "perline", type: "number", required: false, description: "Icons per row, 1–50. Default: 15" },
                  ].map((row, i) => (
                    <tr key={row.param} className={i % 2 === 0 ? "bg-white/[0.01]" : ""}>
                      <td className="px-4 py-2.5 font-mono text-xs text-white/70">{row.param}</td>
                      <td className="px-4 py-2.5 font-mono text-xs text-white/40">{row.type}</td>
                      <td className="px-4 py-2.5 text-xs text-white/40">{row.required ? "Yes" : "No"}</td>
                      <td className="px-4 py-2.5 text-xs text-white/40">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Theme */}
          <section id="theme">
            <DocHeading>Themes</DocHeading>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              Use <Mono>t=dark</Mono> or <Mono>t=light</Mono>. Unthemed icons ignore this parameter.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 overflow-hidden">
                <div className="px-4 py-2.5 border-b border-white/10 flex items-center gap-2 bg-white/[0.03]">
                  <span className="text-xs font-mono text-white/30">t=dark</span>
                </div>
                <div className="p-4 bg-zinc-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${API_BASE}/icons?i=react,ts,python&t=dark&perline=15`} alt="Dark" className="h-12" />
                </div>
              </div>
              <div className="rounded-lg border border-white/10 overflow-hidden">
                <div className="px-4 py-2.5 border-b border-white/10 flex items-center gap-2 bg-white/[0.03]">
                  <span className="text-xs font-mono text-white/30">t=light</span>
                </div>
                <div className="p-4 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${API_BASE}/icons?i=react,ts,python&t=light&perline=15`} alt="Light" className="h-12" />
                </div>
              </div>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Per line */}
          <section id="perline">
            <DocHeading>Icons Per Line</DocHeading>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              Control the grid width with <Mono>perline</Mono>. Accepted range: 1–50. Default: 15.
            </p>
            <CodeBlock label="Example">{`GET /icons?i=aws,gcp,azure,react,vue,flutter&perline=3`}</CodeBlock>
            <div className="mt-4 p-4 rounded-lg border border-white/10 bg-zinc-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${API_BASE}/icons?i=aws,gcp,azure,react,vue,flutter&t=dark&perline=3`} alt="perline=3" className="h-auto" />
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Aliases */}
          <section id="aliases">
            <DocHeading>Short-name Aliases</DocHeading>
            <p className="text-white/40 mb-4 text-sm leading-relaxed">
              Common shorthands are accepted — e.g. <Mono>ts</Mono> resolves to <Mono>typescript</Mono>.
            </p>
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="px-4 py-3 text-left text-xs font-mono text-white/30">Alias</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-white/30">Resolves to</th>
                  </tr>
                </thead>
                <tbody>
                  {SHORT_NAMES.map(([alias, target], i) => (
                    <tr key={alias} className={i % 2 === 0 ? "bg-white/[0.01]" : ""}>
                      <td className="px-4 py-2.5 font-mono text-xs text-white/70">{alias}</td>
                      <td className="px-4 py-2.5 font-mono text-xs text-white/40">{target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* All icons */}
          <section id="icons-list">
            <DocHeading>
              All Icons{" "}
              <span className="text-white/30 font-normal text-xl">({icons.length})</span>
            </DocHeading>
            <p className="text-white/40 mb-6 text-sm">
              Use any of these names in the <Mono>i</Mono> parameter.
            </p>
            {icons.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {icons.map((name) => (
                  <code
                    key={name}
                    className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-white/50 font-mono hover:text-white/80 hover:border-white/20 transition-colors cursor-default"
                  >
                    {name}
                  </code>
                ))}
              </div>
            ) : (
              <p className="text-white/30 text-sm">
                Worker not running — start it on port 8787 to load icon names.
              </p>
            )}
            <div className="mt-8">
              <Link href="/editor" className={cn(buttonVariants(), "bg-white text-black hover:bg-white/90 font-medium")}>
                Browse visually in the Editor →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function DocHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-white mb-4">{children}</h2>;
}

function Mono({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded text-white/70">
      {children}
    </code>
  );
}

function CodeBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 overflow-hidden">
      <div className="px-4 py-2 border-b border-white/10 bg-white/[0.03]">
        <span className="text-xs font-mono text-white/30">{label}</span>
      </div>
      <pre className="px-4 py-3 font-mono text-sm text-white/60 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}
