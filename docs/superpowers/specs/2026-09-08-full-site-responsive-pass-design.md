# Full-Site Responsive Hardening Pass — Design

**Date:** 2026-09-08
**Status:** Approved (design), pending spec review

## Goal

Make every route in the PhishFlagger site render correctly on phones, tablets,
laptops, and large desktops — with **zero visual change** at the widths the site
already handles today. This is a gap-fill and hardening pass, not a redesign.

The site is already ~80% responsive: full mobile menu, `scrollbar-gutter: stable`,
heavy `sm:` (983 uses) and `lg:` (248 uses) coverage. The work is closing the
remaining gaps and eliminating horizontal-overflow / cramping bugs at the small
and very-large ends.

## Non-goals

- No redesign, no copy changes, no color/token changes, no animation changes.
- No new breakpoints or design system. Use the existing Tailwind v4 defaults
  (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536) and the existing CSS
  custom-property "knobs" in `src/index.css`.
- No refactor of working layout structure. Changes are additive/limited to the
  widths where something currently breaks.

## Support matrix

Test ladder (CSS px width): **320 · 375 · 414 · 768 · 1024 · 1280 · 1440 · 1920**.

- **320px** is the hard floor (iPhone SE, smallest realistic device).
- Existing `lg:` and up layouts must render byte-identical to `main` — verified
  by reviewing that no diff hunk changes behavior at `>= 1024px`.

## Fix catalogue (what "responsive" means here, concretely)

1. **Horizontal overflow (priority 1)** — no route may produce a horizontal
   scrollbar at any width >= 320px.
   - Fixed `w-[Npx]` on content blocks -> `w-full max-w-[Npx]`.
   - Flex/grid children that clip -> add `min-w-0`.
   - Rows that don't fit -> `flex-wrap` or stack below a breakpoint.
   - Wide tables / preformatted / code -> wrap in `overflow-x-auto`.
2. **Media** — every `<img>`, `<iframe>`, video, and Stripe embed constrained
   with `max-w-full` and `h-auto` (or an aspect-ratio box for embeds).
3. **Text** — long unbroken strings / URLs / emails get `break-words`
   (`overflow-wrap: anywhere` where needed); confirm no body copy below 14px on
   mobile; clamp oversized hero H1s so they don't overflow at 320px.
4. **Tap targets** — interactive controls reach >= 44x44 CSS px on touch widths
   (nav toggles, close buttons, arrow pills, icon links, form controls).
5. **Safe-area / notch** — fixed or sticky header, footer, and full-screen
   overlays respect `env(safe-area-inset-*)`.
6. **Layout reflow** — multi-column grids collapse to one column below `sm`/`md`
   following the page's existing token pattern; side-by-side hero splits stack.
7. **Viewport plumbing** — confirm `<meta name="viewport">` is present and
   correct; no element uses `100vw` in a way that reintroduces the scrollbar
   shift that `scrollbar-gutter: stable` fixes.

## Highest-risk targets (audit first)

The 12 files with **no** responsive prefix at all:

```
pages/about/history/Blockchain.jsx
pages/about/history/Books.jsx
pages/about/history/Communications.jsx
pages/about/history/Documents.jsx
pages/about/Video.jsx
pages/HumanVsDigital.jsx
pages/join/EmailSubscribe.jsx
pages/join/Other.jsx
pages/join/TelecomContact.jsx
pages/join/TelecomSubscribe.jsx
pages/NotFound.jsx
pages/PetitionThanks.jsx
```

Plus the shared shell: `Header.jsx`, `Footer.jsx`, `SiteLayout.jsx`,
`MobileMenu.jsx`, `PageDownButton` / `PageUpButton` / `PageCycleArrows`,
`JoinPagesNav.jsx`.

## Method

1. **Static audit** — grep + read every `.jsx` under `src/pages` and
   `src/components` for the fix-catalogue patterns; apply fixes.
2. **Browser verification** — `npm run dev`, then drive Chrome across the full
   width ladder on one representative route per cluster:
   - Home (`/`)
   - a marketing page (`/email` or `/telecom`)
   - a `/join` flow page (multi-step form)
   - an `/about` history detail page
   - a standalone form (`/contact` or `/register`)
   - `/404`
   Fix anything that overflows, clips, or cramps; re-test.
3. **Regression check** — confirm each diff hunk is inert at `>= 1024px`.

## Delivery

- Branch: `responsive-pass` off `main`.
- Commits grouped by cluster:
  1. layout / nav shell
  2. Home + marketing pages
  3. `/join` pages + forms
  4. `/about` (incl. history)
  5. standalone pages + `/404` + misc
- Final: user reviews the complete diff before merge to `main`.

## Success criteria

- No horizontal scrollbar on any route from 320px upward.
- No clipped, overlapping, or off-screen content at any tested width.
- `npm run build` succeeds.
- Spot-checked desktop screenshots match `main` at 1280 and 1440.
