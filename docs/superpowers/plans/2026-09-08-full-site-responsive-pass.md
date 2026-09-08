# Full-Site Responsive Hardening Pass — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Every route renders with no horizontal scroll and no clipped/overlapping content from 320px width upward, with zero visual change at >=1024px.

**Architecture:** Additive Tailwind-utility fixes only. Each task audits a cluster of files against a fixed transformation catalogue, applies the fixes, verifies with `npm run build` plus a Chrome pass across the width ladder, and commits. No structural rewrites, no new dependencies, no design-token changes.

**Tech Stack:** React 18, react-router-dom 6, Vite 5, Tailwind CSS v4 (`@tailwindcss/vite`). Breakpoints are Tailwind defaults: `sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280 / `2xl` 1536. Browser verification uses the `claude-in-chrome` MCP tools against `npm run dev` (default `http://localhost:5173`).

## Global Constraints

- **Support floor:** 320px CSS width. Test ladder: 320 · 375 · 414 · 768 · 1024 · 1280 · 1440 · 1920.
- **Zero desktop regression:** no diff hunk may change rendered output at `>= 1024px`. Achieve this by only adding classes that are overridden at `lg:` (or by scoping new classes to `max-lg:` / below-`lg` breakpoints, or by changes that are provably inert at `lg` such as `min-w-0` on a flex child that was already full-width there).
- **No changes to:** copy text, colors, `src/index.css` `@theme` tokens and `:root` knob values, `@keyframes` blocks, animation classes, routing, component APIs.
- **Reuse existing conventions:** `.section-title`, `.page-title`, `.max-w-content`, `LogoMark`, `.img-hover-zoom`, `.pic-with-no-link-mouse-over-increase`, the `--*-scale` / `--hero-pane-*` knobs. Do not hand-roll replacements.
- **Asset rule (from repo memory):** never `git add` an image file with "old" in its name.
- **Commit trailer** on every commit:
  ```
  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Vc1dveR5ZtY3YWEhrmkqd7
  ```
- **Branch:** all work on `responsive-pass` off `main`. No merge to `main` until the user reviews the full diff.

---

## Standard Transformations (the "how" — referenced by every task)

Apply these exact patterns wherever the audit greps below hit. Each is written to be inert at `lg` unless noted.

### T1 — Fixed-width content block overflows at 320px
A non-icon block with `w-[Npx]` where `N >= 300` and no `max-w`/responsive override.
```diff
- <div className="w-[500px] ...">
+ <div className="w-full max-w-[500px] ...">
```
Icon tiles (`h-[90px] w-[90px]`, etc., `N <= 280`) are left alone — they fit at 320px. Only add `w-full max-w-[..]` when `N` alone would exceed `viewport - container padding` (~288px at 320).

### T2 — Flex/grid child clips or forces overflow
A `flex`/`grid` item containing text or an image that won't shrink.
```diff
- <div className="flex-1 ...">
+ <div className="flex-1 min-w-0 ...">
```
`min-w-0` on a child that was already free to fill its track at `lg` is inert there.

### T3 — Horizontal row of items doesn't fit narrow screens
A `flex` row (icon-link groups, button rows, logo rows) with 2+ fixed-width children and no wrap.
```diff
- <div className="flex items-center gap-6 ...">
+ <div className="flex flex-wrap items-center justify-center gap-6 ... lg:flex-nowrap">
```
Add `lg:flex-nowrap` (and keep any existing `lg:` justify) so the desktop row is unchanged. If the row already fits at `lg` without wrapping, `flex-wrap` + `lg:flex-nowrap` is a no-op there.

### T4 — Rigid multi-column grid on narrow screens
`grid-cols-{2..N}` with no responsive prefix.
```diff
- <div className="grid grid-cols-2 gap-x-6 ...">
+ <div className="grid grid-cols-1 gap-x-6 ... sm:grid-cols-2">
```
Pick the breakpoint where the columns currently stop fitting (usually `sm`; use `md`/`lg` for 3–4 col). Keep the original column count at that breakpoint and up.
Exception: a `grid-cols-2` that is purely decorative/absolute-positioned and already fits at 320px (e.g. `Home.jsx:223` corner markers) — leave it.

### T5 — Unbounded media
`<img>` / `<iframe>` / video without width constraint.
```diff
- <img src={x} className="rounded-xl" />
+ <img src={x} className="max-w-full h-auto rounded-xl" />
```
For embeds (Stripe iframe, YouTube, `<video>`): wrap in an aspect box.
```diff
- <iframe src={x} width="640" height="480" />
+ <div className="relative w-full max-w-[640px] aspect-[4/3]">
+   <iframe src={x} className="absolute inset-0 h-full w-full" />
+ </div>
```

### T6 — Long unbreakable string (URL, email, token, code)
Text that can't wrap (`whitespace-nowrap` on long content, or long literal URLs/emails).
```diff
- <span className="whitespace-nowrap">verylong@example.com / https://...</span>
+ <span className="break-words">verylong@example.com / https://...</span>
```
Keep `whitespace-nowrap` only on genuinely short labels (buttons, nav items, badges, table headers). For `<pre>`/code: wrap in `<div className="overflow-x-auto">`.

### T7 — Wide table
Any `<table>`.
```diff
- <table className="w-full ...">
+ <div className="overflow-x-auto">
+   <table className="w-full min-w-[640px] ...">
+ </div>
```

### T8 — Oversized hero heading overflows at 320px
An `h1`/`h2` with a fixed large size (`text-[40px]`+) and no small-screen step-down, not already using `.page-title`/`.section-title`.
- If it is a page hero: replace the size classes with `page-title`.
- If it is a section heading: replace with `section-title`.
- If neither fits: add a smaller base and keep the large size at `sm:`/`lg:` — `text-[28px] sm:text-[40px]`.

### T9 — Tap target below 44px on touch
Interactive control (`<button>`, `<a>`, `<Link>`) whose box is `< 44px` in either axis at below-`lg` widths and isn't a large tile.
```diff
- <button className="h-8 w-8 ...">
+ <button className="h-11 w-11 ... lg:h-8 lg:w-8">
```
Only when the current desktop size is `< 44`; if it's already `>= 44`, skip.

### T10 — Fixed / sticky chrome ignores the notch
`src/index.css` only. Add once, in `@layer base`, without changing existing rules:
```css
@supports (padding: max(0px)) {
  header.relative { padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right); }
}
```
Adjust selector to the real sticky header/footer/overlay elements found in Task 1. Skip if no element is `position: fixed`/`sticky` (audit confirms).

### Regression self-check (run mentally on every hunk)
"At 1024px+, does this class do anything?" If yes and it wasn't already there → add an `lg:` override restoring the old value, or scope the new class below `lg`.

---

## File Structure

No files created except the two spec/plan docs (already done) and the branch. All edits are in-place to existing files. Cluster → files:

- **Task 1 — layout shell:** `src/index.css`, `src/components/layout/Header.jsx`, `src/components/layout/Footer.jsx`, `src/components/layout/SiteLayout.jsx`, `src/components/layout/MobileMenu.jsx`, `src/components/Brand.jsx`
- **Task 2 — shared nav/arrows:** `src/components/layout/NavDropdown.jsx`, `src/components/layout/HeaderTopPageDownTab.jsx`, `src/components/ui/PageDownButton.jsx`, `src/components/ui/PageUpButton.jsx`, `src/components/ui/PageCycleArrows.jsx`, `src/components/ui/JoinPagesNav.jsx`, `src/components/ui/CloseButton.jsx`, `src/components/ui/LogoMark.jsx`, `src/components/faq/FaqTabs.jsx`
- **Task 3 — home + content pages:** `src/pages/Home.jsx`, `Video.jsx`, `Demo.jsx`, `Community.jsx`, `DigitalIno.jsx`, `HumanCompatible.jsx`, `HumanVsDigital.jsx`, `PhishFlaggerOrg.jsx`, `Kick.jsx`, `Rock.jsx`, `WhitePaper.jsx`, `VictimTestimonials.jsx`, `Petition.jsx`, `PetitionThanks.jsx`, `EndorseUs.jsx`, `EndorseThanks.jsx`, `GenericThanks.jsx`, `CountrySelect.jsx`
- **Task 4 — /join cluster:** everything in `src/pages/join/` (24 files) plus `src/pages/JoinFreeIframe.jsx`, `JoinCorporateIframe.jsx`
- **Task 5 — /about cluster:** everything in `src/pages/about/` (18 files incl. `history/`) plus `src/pages/AboutIndex.jsx`
- **Task 6 — standalone + utility + final sweep:** `src/pages/Contact.jsx`, `Register.jsx`, `Login.jsx`, `Download.jsx`, `PluginDownload.jsx`, `Help.jsx`, `SupportDesk.jsx`, `GlobalSettings.jsx`, `NotFound.jsx`, `TestStripe.jsx`, `Video.jsx` (about/) — then a full-repo grep sweep to catch stragglers.

---

### Task 1: Layout shell + global safety net

**Files:**
- Modify: `src/index.css` (add to `@layer base` / `@layer utilities` only)
- Modify: `src/components/layout/Header.jsx`
- Modify: `src/components/layout/Footer.jsx`
- Modify: `src/components/layout/SiteLayout.jsx`
- Modify: `src/components/layout/MobileMenu.jsx`
- Modify: `src/components/Brand.jsx`

**Interfaces:**
- Consumes: nothing (first task).
- Produces: a hardened shell. Later tasks assume the header/footer never cause page-level horizontal overflow, so any overflow they find is page content, not chrome.

- [ ] **Step 1: Create the branch**
  ```bash
  git checkout -b responsive-pass
  ```

- [ ] **Step 2: Audit the shell files**
  Run each and read every hit:
  ```bash
  cd src
  grep -nE "w-\[[0-9]{3,}px\]|100vw|min-w-\[|whitespace-nowrap|position:\s*(fixed|sticky)|fixed |sticky |grid-cols-[2-9]|overflow-x|flex[^-]" components/layout/Header.jsx components/layout/Footer.jsx components/layout/SiteLayout.jsx components/layout/MobileMenu.jsx components/Brand.jsx
  ```
  Note every element that is `position: fixed`/`sticky` (for T10) and every flex row that could exceed 320px.

- [ ] **Step 3: Apply transformations**
  - `Header.jsx:231` — `w-[80%]` container: at 320px, 80% = 256px, leaving 32px gutters. Fine, leave it. But confirm the mobile logo (`w-[190px] sm:w-[220px]`, line 241) + hamburger (`h-10 w-10`) fit inside 256px: 190+40+gap(28) = 258 > 256 → **overflow risk**. Fix: on the flex container line 231 change `w-[80%]` to `w-[90%] lg:w-[80%]`, OR reduce the mobile logo to `w-[160px] sm:w-[220px]`. Prefer the container width bump (`w-[90%] lg:w-[80%]`) — inert at `lg`.
  - `Header.jsx:262` — `w-[120px] sm:w-[132px]` gap anchor is inside the `lg:flex`-only desktop nav, so it never renders below `lg`. Leave.
  - `Footer.jsx` — apply T2 (`min-w-0`) to any flex column holding text; apply T3 to the footer link/tag rows if they don't wrap at 320px; apply T5 to the footer logo img (line ~294 already has `h-auto w-[220px] sm:w-[260px]` — add `max-w-full`).
  - `MobileMenu.jsx` — this is the full-screen overlay. Ensure the panel is `w-full` / `max-w-full`, its scroll area is `overflow-y-auto overscroll-contain`, and long items use T6. Add safe-area padding to the panel: `pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]` (additive, inert on non-notched).
  - `SiteLayout.jsx` — add `overflow-x-clip` to the outer `<div className="flex min-h-screen flex-col">` → `className="flex min-h-screen flex-col overflow-x-clip"`. This is the global safety net: `overflow-x-clip` (not `hidden`) contains rogue overflow without creating a scroll container or breaking `position: sticky`. Inert when nothing overflows.
  - `index.css` — in `@layer base`, add:
    ```css
    :where(img, svg, video, iframe, canvas) { max-width: 100%; }
    ```
    (defensive; `img` already covered by reset — this widens it to the other embeds). Add T10 safe-area rule for the real sticky element identified in Step 2 (if none, skip and note it).
  - `Brand.jsx` — audit only; apply T5 to its logo/mark img if unconstrained.

- [ ] **Step 4: Build**
  Run: `npm run build`
  Expected: succeeds, no new warnings.

- [ ] **Step 5: Browser-verify the shell**
  Start `npm run dev`. With `claude-in-chrome`, open `http://localhost:5173/` and at each of 320, 375, 768, 1024, 1440:
  - resize the window, reload, confirm `document.documentElement.scrollWidth <= window.innerWidth` (no horizontal scrollbar) via `javascript_tool`.
  - open the mobile menu at 320 and 375 — panel fills screen, scrolls, closes; no clipped items.
  - at 1024 and 1440 the header/footer look identical to a screenshot from `main` (checkout `main` in a second worktree or compare against a pre-branch screenshot).
  Expected: no horizontal scroll at any width; desktop unchanged.

- [ ] **Step 6: Commit**
  ```bash
  git add src/index.css src/components/layout/Header.jsx src/components/layout/Footer.jsx src/components/layout/SiteLayout.jsx src/components/layout/MobileMenu.jsx src/components/Brand.jsx
  git commit -m "Responsive shell: global overflow-x-clip guard, header/footer/menu fits at 320px

  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Vc1dveR5ZtY3YWEhrmkqd7"
  ```

---

### Task 2: Shared nav & arrow components

**Files:**
- Modify: `src/components/layout/NavDropdown.jsx`, `src/components/layout/HeaderTopPageDownTab.jsx`
- Modify: `src/components/ui/PageDownButton.jsx`, `src/components/ui/PageUpButton.jsx`, `src/components/ui/PageCycleArrows.jsx`, `src/components/ui/JoinPagesNav.jsx`, `src/components/ui/CloseButton.jsx`, `src/components/ui/LogoMark.jsx`
- Modify: `src/components/faq/FaqTabs.jsx`

**Interfaces:**
- Consumes: hardened shell from Task 1.
- Produces: nav/arrow controls that meet the 44px touch target (T9) and never overflow. Tasks 3–6 reuse these on nearly every page and assume they're already correct — do not re-fix them per page.

- [ ] **Step 1: Audit**
  ```bash
  cd src
  grep -nE "h-\[?[0-9]|w-\[?[0-9]|whitespace-nowrap|flex[^-]|absolute|translate" components/ui/PageDownButton.jsx components/ui/PageUpButton.jsx components/ui/PageCycleArrows.jsx components/ui/JoinPagesNav.jsx components/ui/CloseButton.jsx components/ui/LogoMark.jsx components/layout/NavDropdown.jsx components/layout/HeaderTopPageDownTab.jsx components/faq/FaqTabs.jsx
  ```

- [ ] **Step 2: Apply transformations**
  - `PageDownButton.jsx` / `PageUpButton.jsx` — per repo memory the pill is transparent/wireframe; **do not change its fill**. Only ensure the clickable area is `>= 44px` tall on touch (T9, `lg:` restore to current size) and that an absolutely-positioned pill can't push page width (add `max-w-full` / keep it centered).
  - `PageCycleArrows.jsx` — `‹ ›` arrows: T9 on each arrow button; ensure the row is centered and wraps or shrinks under 320px (T3).
  - `JoinPagesNav.jsx` — this is a horizontal step nav; apply T3 (`flex-wrap ... lg:flex-nowrap`) and T6 on step labels; T9 on each step link.
  - `CloseButton.jsx` — T9 (recent commit already touched close-button targets — verify it's `>= 44px` on touch, leave if so).
  - `NavDropdown.jsx` — dropdown panel: `max-w-[calc(100vw-2rem)]` so a wide menu never overflows; it renders only at `lg`, so guard with nothing needed if it's `lg:`-only — confirm in audit.
  - `HeaderTopPageDownTab.jsx` — absolute-positioned center tab; ensure `max-w-full` and that it's hidden or safely centered below `lg` (it's tied to `navTabMode === "gap"` which is desktop-nav-only — confirm it doesn't render in the mobile layout).
  - `FaqTabs.jsx` — tab strip: T3 (`flex-wrap`) + T9 on tabs + T7 if it renders any table.
  - `LogoMark.jsx` — audit only; T5 on the mark if unconstrained.

- [ ] **Step 3: Build** — `npm run build`, expect success.

- [ ] **Step 4: Browser-verify**
  Pages that exercise these: `/` (arrows, page-down), `/about` (PageCycleArrows + link pane), `/join/pro` (JoinPagesNav + CloseButton), `/about/faq` (FaqTabs).
  At 320 / 375 / 768 / 1024 / 1440: no horizontal scroll; every arrow/close/tab is comfortably tappable at 320; identical to `main` at 1024+.

- [ ] **Step 5: Commit**
  ```bash
  git add src/components/ui src/components/layout/NavDropdown.jsx src/components/layout/HeaderTopPageDownTab.jsx src/components/faq/FaqTabs.jsx
  git commit -m "Responsive shared controls: 44px touch targets, wrapping step/tab/arrow rows

  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Vc1dveR5ZtY3YWEhrmkqd7"
  ```

---

### Task 3: Home + content/marketing pages

**Files (Modify):** `src/pages/Home.jsx`, `Video.jsx`, `Demo.jsx`, `Community.jsx`, `DigitalIno.jsx`, `HumanCompatible.jsx`, `HumanVsDigital.jsx`, `PhishFlaggerOrg.jsx`, `Kick.jsx`, `Rock.jsx`, `WhitePaper.jsx`, `VictimTestimonials.jsx`, `Petition.jsx`, `PetitionThanks.jsx`, `EndorseUs.jsx`, `EndorseThanks.jsx`, `GenericThanks.jsx`, `CountrySelect.jsx`

**Interfaces:**
- Consumes: Tasks 1–2. Shell and shared controls are already correct.
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Audit every file in the list**
  ```bash
  cd src
  for f in pages/Home.jsx pages/Video.jsx pages/Demo.jsx pages/Community.jsx pages/DigitalIno.jsx pages/HumanCompatible.jsx pages/HumanVsDigital.jsx pages/PhishFlaggerOrg.jsx pages/Kick.jsx pages/Rock.jsx pages/WhitePaper.jsx pages/VictimTestimonials.jsx pages/Petition.jsx pages/PetitionThanks.jsx pages/EndorseUs.jsx pages/EndorseThanks.jsx pages/GenericThanks.jsx pages/CountrySelect.jsx; do
    echo "=== $f ==="
    grep -nE "w-\[[0-9]{3,}px\]|grid-cols-[2-9]|flex[^-]|whitespace-nowrap|<img|<iframe|<video|<table|text-\[[4-9][0-9]px\]|100vw|min-w-\[" "$f"
  done
  ```
  Read each hit in context.

- [ ] **Step 2: Apply the Standard Transformations**
  Walk the audit output and apply T1–T9 as matched. Known specifics from the pre-scan:
  - `Home.jsx:251/275/320` — `w-[170px]/w-[200px]/w-[260px]` icon-link columns in a row. All fit 320px individually; the concern is the **row** — apply T3 to their parent flex container (`flex-wrap justify-center ... lg:flex-nowrap`).
  - `Home.jsx:223` — decorative `grid grid-cols-2` corner markers, absolute: leave (T4 exception).
  - `DigitalIno.jsx:87/135` — `grid grid-cols-2` text lists: apply T4 → `grid-cols-1 sm:grid-cols-2`.
  - `Rock.jsx:118` — `grid max-w-[420px] grid-cols-2`: at 320 the container is `max-w-[420px]` so it's ~288px wide, two columns ~130px each — usually fine; verify in browser, apply T4 only if it clips.
  - `Video.jsx` — has a gif/video hover-play area (see recent commit `fc9ef71`): apply T5 aspect-box if the embed has fixed `width`/`height`.
  - Any hero `h1` not on `.page-title` → T8.

- [ ] **Step 3: Build** — `npm run build`, expect success.

- [ ] **Step 4: Browser-verify**
  Load each of these routes at 320 / 375 / 768 / 1024 / 1440 (script the loop with `claude-in-chrome` + `javascript_tool` checking `scrollWidth <= innerWidth`):
  `/`, `/video`, `/demo`, `/community`, `/digital-innovation` (confirm real path from `src/App.jsx`), `/human-compatible`, `/human-vs-digital`, `/phishflagger-org`, `/kick`, `/rock`, `/whitepaper`, `/victim-testimonials`, `/petition`, `/petition-thanks`, `/endorse-us`, `/country`.
  For any width that reports horizontal scroll: screenshot, find the offending element (`javascript_tool`: walk elements where `el.scrollWidth > document.documentElement.clientWidth`), fix, re-test.
  Confirm 1024/1440 match `main`.

- [ ] **Step 5: Commit**
  ```bash
  git add src/pages/Home.jsx src/pages/Video.jsx src/pages/Demo.jsx src/pages/Community.jsx src/pages/DigitalIno.jsx src/pages/HumanCompatible.jsx src/pages/HumanVsDigital.jsx src/pages/PhishFlaggerOrg.jsx src/pages/Kick.jsx src/pages/Rock.jsx src/pages/WhitePaper.jsx src/pages/VictimTestimonials.jsx src/pages/Petition.jsx src/pages/PetitionThanks.jsx src/pages/EndorseUs.jsx src/pages/EndorseThanks.jsx src/pages/GenericThanks.jsx src/pages/CountrySelect.jsx
  git commit -m "Responsive pass: Home + content/marketing pages fit 320px, grids stack on mobile

  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Vc1dveR5ZtY3YWEhrmkqd7"
  ```

---

### Task 4: /join cluster

**Files (Modify):** all of `src/pages/join/*.jsx` (`DomainAppliance`, `EmailDomain`, `EmailFreePlugIn`, `EmailMarketing`, `EmailMarketingQuote`, `EmailSubscribe`, `Join`, `JoinFree`, `JoinFreeRegister`, `JoinFreeTerms`, `Messaging`, `MessagingAppRequest`, `Other`, `RequestDomain`, `Telecom`, `TelecomContact`, `TelecomFormPage`, `TelecomSubscribe`, `TelecomSupporters`, `TelecomThanks`), plus `src/pages/JoinFreeIframe.jsx`, `src/pages/JoinCorporateIframe.jsx`

**Interfaces:**
- Consumes: Tasks 1–2 (JoinPagesNav, CloseButton already responsive).
- Produces: nothing consumed later.

- [ ] **Step 1: Audit**
  ```bash
  cd src
  for f in pages/join/*.jsx pages/JoinFreeIframe.jsx pages/JoinCorporateIframe.jsx; do
    echo "=== $f ==="
    grep -nE "w-\[[0-9]{3,}px\]|grid-cols-[2-9]|flex[^-]|whitespace-nowrap|<img|<iframe|<video|<table|<input|<select|<textarea|text-\[[4-9][0-9]px\]|100vw|min-w-\[" "$f"
  done
  ```

- [ ] **Step 2: Apply transformations**
  Known specifics:
  - `Join.jsx:63` — `flex justify-center lg:block lg:w-[500px]`: `lg:w-[500px]` is `lg`-only → inert below. Leave.
  - `Join.jsx:84/118/152/181` — `h-[150px] w-[150px] sm:h-[180px] sm:w-[180px]` tiles: fit 320px. Check the **row** wrapping them (T3).
  - `Join.jsx:233` `imageSize` prop, `Join.jsx:347` `w-[112px] sm:w-[160px] lg:w-[190px]`, `Join.jsx:356` tile — all responsive already. Verify row wrap only.
  - `DomainAppliance.jsx:58/65` — `h-[217px] w-[217px]` (no responsive step): 217 < 288 so fits 320px, but tight. If two sit side by side, T3 the row.
  - `DomainAppliance.jsx:93`, `EmailDomain.jsx:108` — `grid grid-cols-2` benefit lists: apply T4 → `grid-cols-1 sm:grid-cols-2`.
  - `EmailFreePlugIn.jsx` — 7 `whitespace-nowrap`: check each; apply T6 to any that is a long phrase/URL, keep on short labels.
  - **Forms** (`TelecomFormPage`, `EmailMarketingQuote`, `JoinFreeRegister`, `MessagingAppRequest`, `RequestDomain`, `TelecomContact`, `Register`-style): every `<input>/<select>/<textarea>` gets `w-full`; multi-field rows use T4 (`grid-cols-1 sm:grid-cols-2`); submit buttons `w-full sm:w-auto`. Font-size on inputs must be `>= 16px` (`text-base`) to stop iOS auto-zoom — add `text-base` if smaller.
  - **Iframe pages** (`JoinFreeIframe`, `JoinCorporateIframe`, and the `<iframe>` inside join pages): T5 aspect box, or `className="w-full min-h-[...] "` with `h-auto` removed and an explicit responsive min-height. These two routes hide the header (`SiteLayout.jsx:48`) — ensure the iframe fills `100%` width and there's no fixed pixel width.
  - `Telecom.jsx:501/508` — `w-[170px] scale-[0.75] sm:w-[200px]` + `h-[100px] w-[100px]` tile: fits. Row wrap check (T3).

- [ ] **Step 3: Build** — `npm run build`, expect success.

- [ ] **Step 4: Browser-verify**
  Routes (confirm exact paths in `src/App.jsx`): `/join`, `/join-free`, `/join/pro`, `/join/domain`, `/join/domain-appliance`, `/join/email-marketing`, `/join/email-marketing-quote`, `/join/email-subscribe`, `/join/messaging`, `/join/messaging-app-request`, `/join/other`, `/join/request-domain`, `/telecom` sub-routes, `/join-free` + `/join-corporate` (iframe, header hidden).
  At 320 / 375 / 768 / 1024 / 1440: no horizontal scroll; every form field is full-width and reachable; tapping a field does not zoom on a simulated mobile viewport; iframes fill width without their own horizontal scrollbar on the page.
  Confirm 1024/1440 match `main`.

- [ ] **Step 5: Commit**
  ```bash
  git add src/pages/join src/pages/JoinFreeIframe.jsx src/pages/JoinCorporateIframe.jsx
  git commit -m "Responsive pass: /join flows — full-width form fields, stacking grids, fluid iframes

  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Vc1dveR5ZtY3YWEhrmkqd7"
  ```

---

### Task 5: /about cluster (incl. history)

**Files (Modify):** all of `src/pages/about/*.jsx` and `src/pages/about/history/*.jsx` (`Blog`, `EndorseUs`, `FAQ`, `Fiction`, `HallOfFame`, `IP`, `Kickstarter`, `News`, `NumberingHistory`, `Press`, `Supporters`, `Team`, `Video`, `history/Blockchain`, `history/Books`, `history/Communications`, `history/Documents`, `history/HistoryDetailPage`), plus `src/pages/AboutIndex.jsx`

**Interfaces:**
- Consumes: Tasks 1–2 (FaqTabs, PageCycleArrows already responsive).
- Produces: nothing consumed later.

- [ ] **Step 1: Audit**
  ```bash
  cd src
  for f in pages/about/*.jsx pages/about/history/*.jsx pages/AboutIndex.jsx; do
    echo "=== $f ==="
    grep -nE "w-\[[0-9]{3,}px\]|grid-cols-[2-9]|flex[^-]|whitespace-nowrap|<img|<iframe|<video|<table|text-\[[4-9][0-9]px\]|100vw|min-w-\[" "$f"
  done
  ```
  Pay special attention to the 5 zero-responsive-prefix files here: `about/Video.jsx`, `about/history/Blockchain.jsx`, `Books.jsx`, `Communications.jsx`, `Documents.jsx` (these share `HistoryDetailPage.jsx` — fixing that component likely fixes all four).

- [ ] **Step 2: Apply transformations**
  - `HistoryDetailPage.jsx` — the shared template for the four history detail pages. Audit its layout: any two-column `flex`/`grid` (text + image) → stack below `md` (`flex-col md:flex-row`); image → T5; headings → T8; body copy → ensure `>= 14px`. Fixing this one file is the bulk of the history work.
  - `Blog.jsx` (601 lines) — likely a post list/grid: T4 on the grid, T5 on thumbnails, T6 on any long author/URL strings.
  - `about/Video.jsx` — no responsive prefixes: T5 on the embed (aspect box), T8 on the heading, stack any side-by-side.
  - `Team.jsx` / `HallOfFame.jsx` / `Supporters.jsx` / `Press.jsx` / `News.jsx` — people/logo grids: T4 (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-4` style, dropping to `grid-cols-1` or `grid-cols-2` at base), T5 on avatars/logos, T3 on any logo row.
  - `NumberingHistory.jsx` — has `whitespace-nowrap`: T6 / T7 if tabular.
  - `FAQ.jsx` — pairs with `FaqTabs` (Task 2); audit page wrapper only.

- [ ] **Step 3: Build** — `npm run build`, expect success.

- [ ] **Step 4: Browser-verify**
  Routes: `/about`, `/about/blog`, `/about/team`, `/about/press`, `/about/news`, `/about/hall-of-fame`, `/about/supporters`, `/about/ip`, `/about/fiction`, `/about/kickstarter`, `/about/endorse-us`, `/about/numbering-history`, `/about/video`, and all four history detail routes, `/about/faq`.
  At 320 / 375 / 768 / 1024 / 1440: no horizontal scroll; grids reflow; images bounded. Confirm 1024/1440 match `main`.

- [ ] **Step 5: Commit**
  ```bash
  git add src/pages/about src/pages/AboutIndex.jsx
  git commit -m "Responsive pass: /about + history — HistoryDetailPage stacks, people/logo grids reflow

  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Vc1dveR5ZtY3YWEhrmkqd7"
  ```

---

### Task 6: Standalone + utility pages, then whole-site sweep

**Files (Modify):** `src/pages/Contact.jsx`, `Register.jsx`, `Login.jsx`, `Download.jsx`, `PluginDownload.jsx`, `Help.jsx`, `SupportDesk.jsx`, `GlobalSettings.jsx`, `NotFound.jsx`, `TestStripe.jsx` — plus any stragglers the final sweep finds anywhere in `src/`.

**Interfaces:**
- Consumes: Tasks 1–5.
- Produces: the finished, fully-audited site.

- [ ] **Step 1: Audit the standalone list**
  ```bash
  cd src
  for f in pages/Contact.jsx pages/Register.jsx pages/Login.jsx pages/Download.jsx pages/PluginDownload.jsx pages/Help.jsx pages/SupportDesk.jsx pages/GlobalSettings.jsx pages/NotFound.jsx pages/TestStripe.jsx; do
    echo "=== $f ==="
    grep -nE "w-\[[0-9]{3,}px\]|grid-cols-[2-9]|flex[^-]|whitespace-nowrap|<img|<iframe|<video|<table|<input|<select|<textarea|text-\[[4-9][0-9]px\]|100vw|min-w-\[" "$f"
  done
  ```

- [ ] **Step 2: Apply transformations**
  - `Contact.jsx` / `Register.jsx` / `Login.jsx` / `SupportDesk.jsx` — forms: same form rules as Task 4 Step 2 (`w-full` fields, `text-base` to prevent iOS zoom, `grid-cols-1 sm:grid-cols-2` field rows, `w-full sm:w-auto` submit).
  - `Help.jsx:75/80` — `w-[130px]` icon-link + `h-[90px] w-[90px] sm:h-[100px]` tile: fits 320px; T3 the parent row so the tile grid wraps.
  - `TestStripe.jsx` — Stripe Elements iframe: T5, ensure card element container is `w-full max-w-[480px]`.
  - `GlobalSettings.jsx` (internal settings page) — audit tables/rows: T7 on any table, T4 on setting rows.
  - `NotFound.jsx` — no responsive prefixes: T8 on the big "404" heading, center content, `px-4`.
  - `Download.jsx` / `PluginDownload.jsx` — button rows: T3; badges: T6.

- [ ] **Step 3: Whole-site straggler sweep**
  ```bash
  cd src
  # any fixed width >=320 with no max-w and no responsive step nearby
  grep -rnE "w-\[(3[2-9][0-9]|[4-9][0-9]{2}|[0-9]{4,})px\]" --include=*.jsx pages components | grep -v "max-w" | grep -vE "(sm|md|lg):"
  # rigid multi-col grids
  grep -rnE "grid-cols-[2-9]" --include=*.jsx pages components | grep -vE "(sm|md|lg):grid-cols|grid-cols-[2-9][^\"') ]"
  # viewport-unit widths
  grep -rn "100vw" --include=*.jsx pages components
  # tables not wrapped
  grep -rn "<table" --include=*.jsx pages components
  ```
  Resolve every remaining hit with T1/T4/T7, or record why it's safe (icon tile < 288px, `lg:`-only, decorative-absolute).

- [ ] **Step 4: Build** — `npm run build`, expect success.

- [ ] **Step 5: Full-site browser verification**
  With `npm run dev` + `claude-in-chrome`, script a loop over **every route in `src/App.jsx`**. For each route at widths 320, 360, 375, 414, 768, 1024, 1280, 1440:
  ```js
  // via javascript_tool after navigate + resize
  ({ w: window.innerWidth,
     overflow: document.documentElement.scrollWidth - window.innerWidth,
     culprits: [...document.querySelectorAll('*')]
       .filter(e => e.getBoundingClientRect().right > window.innerWidth + 1)
       .slice(0,5).map(e => e.className) })
  ```
  Any route reporting `overflow > 0` at any width → fix, re-run for that route.
  Record a pass/fail table (route × width) in the PR description.

- [ ] **Step 6: Desktop regression check**
  For 8 representative routes (`/`, `/email`, `/telecom`, `/join`, `/join/pro`, `/about`, `/about/blog`, `/contact`) capture screenshots at 1280 and 1440 on the branch and on `main` (second worktree). Diff visually — they must be identical.

- [ ] **Step 7: Commit**
  ```bash
  git add -A src/
  git commit -m "Responsive pass: standalone/utility pages + whole-site sweep; full route×width audit clean

  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Vc1dveR5ZtY3YWEhrmkqd7"
  ```

- [ ] **Step 8: Hand off for review**
  Push the branch. Summarize for the user: the route×width pass/fail table, the desktop-regression screenshot comparison result, and `npm run build` output. Do **not** merge to `main` — the user reviews the full diff first (spec delivery gate).

---

## Self-Review

**1. Spec coverage:**
- 320px floor + width ladder → Global Constraints; verified per task Step "browser-verify" and Task 6 Step 5.
- Zero desktop regression → Global Constraints + T-catalogue "inert at lg" notes + Task 1 Step 5, Task 6 Step 6.
- Fix catalogue items 1–7 (overflow, media, text, tap targets, safe-area, reflow, viewport) → T1–T10 mapped: overflow=T1/T2/T3, media=T5, text=T6/T8, tap targets=T9, safe-area=T10, reflow=T3/T4, viewport plumbing=Task 1 Step 3 (`overflow-x-clip`, `index.css`) + `index.html` already has correct meta (noted, no change needed).
- 12 zero-prefix high-risk files → Task 3 (`HumanVsDigital`, `PetitionThanks`), Task 4 (`join/EmailSubscribe`, `join/Other`, `join/TelecomContact`, `join/TelecomSubscribe`), Task 5 (`about/Video`, 4× `about/history/*`), Task 6 (`NotFound`).
- Shared shell list → Task 1 + Task 2.
- Branch `responsive-pass`, 6 grouped commits, review-before-merge → task commit steps + Task 6 Step 8.
- `npm run build` succeeds → every task Step "Build".
- Desktop screenshots match `main` → Task 6 Step 6.

**2. Placeholder scan:** No "TBD/TODO". Every transformation shows before/after code. Form rules are spelled out (w-full, text-base, grid-cols-1 sm:grid-cols-2, w-full sm:w-auto). Verification steps give the exact `javascript_tool` snippet.

**3. Type consistency:** N/A (no new functions/types). Class-name conventions referenced (`.page-title`, `.section-title`, `.max-w-content`, `overflow-x-clip`) are used consistently across tasks and match `src/index.css`.

**Note for executor:** route paths in verification steps are best-effort — confirm each against `src/App.jsx` before scripting the browser loop; the file list per task is authoritative, the URL list is a guide.
