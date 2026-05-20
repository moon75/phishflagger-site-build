# PhishFlagger Website

React + Tailwind v4 single-page app, built with Vite.

## Stack

- **React 18** with **React Router v6** for client-side routing
- **Tailwind CSS v4** (CSS-first config via `@theme` in `src/index.css`)
- **Vite** dev server / bundler
- Plain JavaScript (no TypeScript)

## Structure

```
.
├── index.html                      # Vite entry
├── public/                         # Static assets served at /
├── src/
│   ├── main.jsx                    # React + Router bootstrap
│   ├── App.jsx                     # Route table
│   ├── index.css                   # Tailwind import + design tokens
│   ├── components/
│   │   ├── layout/                 # SiteLayout, Header, Footer
│   │   └── ui/                     # Reusable UI primitives
│   ├── pages/                      # One file per route
│   │   ├── Home.jsx
│   │   ├── PhishFlaggerOrg.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   ├── join/                   # Join sub-pages
│   │   └── about/                  # About sub-pages
│   ├── data/
│   │   └── nav.js                  # Single source of truth for nav
│   ├── lib/
│   │   └── utils.js                # cn() helper
│   └── assets/                     # Images, icons, fonts imported by JS
└── vite.config.js
```

## Conventions

- **Routes mirror the nav** — keep `src/data/nav.js` and `src/App.jsx` in sync.
- **Layout is shared** — every route renders inside `SiteLayout`, which provides Header + Footer.
- **Design tokens** live in `src/index.css` under `@theme` and become Tailwind utilities automatically (`bg-brand`, `text-ink-muted`, etc.).
- **Use `cn()` from `src/lib/utils.js`** when conditionally combining Tailwind classes — handles conflicts via `tailwind-merge`.
- **No CSS modules, no styled-components** — Tailwind utilities only, with `@apply` reserved for unavoidable cases.

## Local development

```
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```
