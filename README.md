# Ritesh Kelkar — Portfolio

A premium, cinematic, glassmorphism portfolio for **Ritesh Kelkar** (Website & App Developer).
Built with **React + Vite** and **Framer Motion** — dark theme, liquid glass, parallax orbs,
scroll-triggered animations, tilt-hover project cards, and a live scroll-progress bar.

## ✨ Features
- Dark cinematic aesthetic with animated gradient orbs + parallax
- Glassmorphism / liquid-glass panels throughout
- Framer Motion reveal, marquee, and 3D tilt animations
- Fully responsive + reduced-motion friendly
- 100% data-driven content

## 🛠 Edit your content
All text, projects, skills, and links live in **`src/data/content.js`**.
Change your name, tagline, add projects (with `live` GitHub Pages links + `image`),
update skills and socials — no component edits needed.

## 🚀 Develop
```bash
npm install
npm run dev
```

## 🏗 Build
```bash
npm run build      # outputs to dist/
npm run preview
```

## 🌐 Deploy to GitHub Pages
This repo ships a workflow at `.github/workflows/deploy.yml` that builds and deploys
on every push to `main`.

1. Push to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Site publishes at `https://<username>.github.io/ritesh_portfolio2/`.

> The Vite `base` is set to `/ritesh_portfolio2/` only when `GITHUB_PAGES`
> is set (the workflow does this). For a custom domain or user/root site,
> set `base: '/'` in `vite.config.js`.
