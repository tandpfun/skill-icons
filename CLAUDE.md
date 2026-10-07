# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A Cloudflare Worker that serves SVG icon sheets for developer skill badges. Live at https://skillicons.dev. Icons are served via `GET /icons?i=js,python,rust` and return a composite SVG.

## Dev environment workaround

The project uses the obsolete `@cloudflare/wrangler` v1 (binary no longer downloadable) and `type = "webpack"` in `wrangler.toml`. Use this instead of `npm run dev`:

```bash
# 1. Build icons.json from the SVG files
node build.js

# 2. Bundle the worker (replaces the old Wrangler/Webpack step)
npx esbuild index.js --bundle --outfile=dist/worker.js --platform=browser --format=iife

# 3. Start local dev server (Miniflare)
./node_modules/.bin/miniflare dist/worker.js --wrangler-config wrangler.dev.toml --no-update-check --port 8787 --upstream https://skillicons.dev
```

`wrangler.dev.toml` uses `type = "javascript"` to prevent Miniflare from trying to invoke the missing Wrangler binary. The `--upstream` flag is required — without it, unmatched routes (`/`) recurse into the worker 16 times and crash.

The app is available at **http://localhost:8787** after step 3.

## Architecture

- **`build.js`** — reads every `.svg` from `./icons/`, lowercases the filenames, and writes `./dist/icons.json` (a `{ name: svgString }` map). Must be run before the worker starts.
- **`index.js`** — the Cloudflare Worker entry point. Handles three routes:
  - `GET /icons?i=<names>` — returns a composite SVG sheet
  - `GET /api/icons` — returns JSON array of all icon names
  - `GET /api/svgs` — returns the full `{ name: svgString }` map
  - All other routes proxy via `fetch(request)` to the upstream (production site)
- **`icons/`** — 402 SVG files. Themed icons come in `-Dark`/`-Light` variants (e.g. `Python-Dark.svg`, `Python-Light.svg`). Non-themed icons have no suffix.

## Adding or updating icons

1. Drop the `.svg` file(s) into `./icons/`. Use `Name.svg` for unthemed icons, `Name-Dark.svg` / `Name-Light.svg` for themed ones.
2. If adding a short-name alias, add it to the `shortNames` object in `index.js`.
3. Re-run `node build.js` to regenerate `dist/icons.json`.
4. Re-bundle and restart Miniflare (steps 2–3 above).

## URL parameters

| Param | Values | Default |
|---|---|---|
| `i` / `icons` | comma-separated icon names or `all` | required |
| `t` / `theme` | `dark`, `light` | `dark` |
| `perline` | 1–50 | 15 |
