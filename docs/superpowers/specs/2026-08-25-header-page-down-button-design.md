# Header-attached Page Down button

## Problem

The current "Page Down" affordance (`src/components/ui/PageDownButton.jsx`) is a
plain flat-gray circle placed at the top of each `<section>`. It's visually
unremarkable, and every page hand-wires one `<PageDownButton targetSelector="#pane-000X" />`
per section (~29 files), each pointing at the next section's id by hand.

## Goal

Replace the per-section buttons with a single button attached to the sticky
header, present identically on every page, styled as a small tab built into
the header's bottom edge (per user sketch: a chevron tab hanging off the nav
bar, not a floating circle over page content).

## Visual design

- A small rounded tab, roughly 44px wide × 26px tall, centered horizontally
  under the header.
- Flush against the header's bottom edge — rounded only on the bottom two
  corners (e.g. `rounded-b-2xl`), so it reads as part of the header shape,
  not a separate floating element.
- Background `#4a4a4a` (matches `CloseButton.jsx`'s neutral gray — no brand-red
  swap).
- White chevron icon (`viewBox="0 0 24 24"`, path `M6 9l6 6 6-6"`), turning
  brand red (`#FF0033`) on hover via the existing `group-hover:text-[#FF0033]`
  pattern, with a stroke-width bump on hover like the current button.
- `hover:bg-[#2b2b2b]` on the tab background, matching `CloseButton`/current
  `PageDownButton` hover treatment.
- Sits above section content (inherits the header's `z-40` stacking context
  or higher).

## Behavior

- **Single instance:** rendered once, inside `Header.jsx` (or a new small
  component, e.g. `HeaderPageDownTab.jsx`, imported into `Header.jsx` — kept
  separate for isolation/clarity). No longer instantiated per page/section.
- **Click:** find all `<section>` elements in the document (or within `#main`
  to stay scoped to routed content); pick the first one whose top edge is
  below the current scroll position (i.e. below the sticky header's bottom
  edge, with a small tolerance so the section the user is already at isn't
  re-targeted); `scrollIntoView({ behavior: "smooth", block: "start" })`.
- **Visibility:** a passive, rAF-batched scroll listener recomputes whether a
  qualifying "next section" exists below the viewport.
  - If yes → button visible.
  - If no (already at/past the last section, or the page has no `<section>`
    elements at all — forms, FAQ, etc.) → button hidden (not just visually
    faded; not clickable).
- **Route changes:** recompute visibility immediately on navigation (via
  `useLocation` from `react-router-dom`, matching the pattern already used in
  `SiteLayout.jsx`), since different pages have different numbers of
  sections and the scroll position resets.
- Respects the existing `hideHeader` pages (`/join-free`, `/join-corporate`)
  automatically, since the button lives inside `Header.jsx` and those pages
  already don't render the header.

## Removed

- All 29 call sites of `<PageDownButton targetSelector="..." />` /
  `<PageDownButton />` across `src/pages/**` and their now-unused
  `PageDownButton` imports.
- `src/components/ui/PageDownButton.jsx` itself, superseded by the new
  header-based component.

## Not changing

- `CloseButton.jsx` is referenced for styling consistency only — not modified.
- No change to section markup/ids (`#pane-000X`) — the new logic finds
  sections generically by tag rather than by id, so no per-page id wiring is
  needed going forward.

## Out of scope

- No animation/motion treatment beyond the existing hover color/stroke change.
- No mobile-specific layout changes — the tab sits under the header on all
  breakpoints, same as today's header height.
