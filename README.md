# TapConnect (Vite + React + Tailwind + Framer Motion) — FIXED

This build fixes JSX and Vercel issues from your logs.

## Fixes
- Replaced `submitted and (` with `submitted && (` in JSX.
- Removed typos like `bg_WHITE/5`, `hover:text_WHITE`.
- Set Node engine to `>=18` (Vite 5 requires Node 18+).

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
- Import this repo in Vercel.
- In Project → Settings → Build & Development → **Install Command**: `npm install`
  (or ensure you commit `package-lock.json` if you want `npm ci`).
- Framework preset: **Other** or **Vite**. Output dir: `dist`.
