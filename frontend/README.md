# Skill Icons — Frontend

A modern Next.js website for [skillicons.dev](https://skillicons.dev). Browse 326+ developer skill icons, configure your badge visually, and copy a single URL to embed anywhere.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui** (Base UI components)
- **Cloudflare Workers** API at `https://skillicons.dev`

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, features, quick-start |
| `/docs` | API reference — parameters, themes, aliases, full icon list |
| `/editor` | Visual badge builder — search icons, configure, copy badge |

## Editor features

- **Search** — filter all 326 icons by name in real time
- **Theme toggle** — dark / light icon variants
- **Per-row slider** — control how many icons appear per line (1–50)
- **Live preview** — see your badge update instantly
- **One-click export** — copy as URL, Markdown badge, or HTML `<img>`
- **Inline remove** — hover any icon in the preview to reveal a remove button

## Development

The frontend talks to the Cloudflare Worker running locally on port 8787. Start both:

```bash
# 1. Start the icon API worker (from repo root)
node build.js
npx esbuild index.js --bundle --outfile=dist/worker.js --platform=browser --format=iife
./node_modules/.bin/miniflare dist/worker.js --wrangler-config wrangler.dev.toml --no-update-check --port 8787 --upstream https://skillicons.dev

# 2. Start the Next.js dev server (from /frontend)
cd frontend
npm install
npm run dev
```

Frontend: **http://localhost:3000** · API: **http://localhost:8787**

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_API_BASE` | `http://localhost:8787` | Icon API base URL. Set to `https://skillicons.dev` in production. |

## Deploy to Vercel

1. Import the repo on [vercel.com/new](https://vercel.com/new)
2. Set **Root Directory** to `frontend`
3. Add env var: `NEXT_PUBLIC_API_BASE=https://skillicons.dev`
4. Deploy