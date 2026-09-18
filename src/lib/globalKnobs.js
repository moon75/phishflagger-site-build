// Site-wide hover-grow percentages, editable live from /global2 without
// touching code. Each knob is a CSS variable (defined in src/index.css)
// holding a scale factor (1.05 = grow 5% on hover); this file just maps a
// human label to that variable and stores the percentage a person types.
//
// Persistence: localStorage only (this is a static site, no backend) — a
// change made on one device/browser does not appear on another. Whoever
// is tuning values needs to do it in the same browser they're viewing the
// live site in.

export const GLOBAL_KNOBS = [
  {
    key: "picNoLink",
    cssVar: "--pic-no-link-hover-scale",
    label: "Pictures with no link — mouse-over grow",
    defaultPercent: 5,
  },
  {
    key: "imgHoverZoom",
    cssVar: "--img-hover-zoom-scale",
    label: "Pictures that are links/tiles — mouse-over grow",
    defaultPercent: 20,
  },
  {
    key: "mouseOverLink",
    cssVar: "--mouse-over-link-scale",
    label: "Plain text links — mouse-over grow",
    defaultPercent: 10,
  },
  {
    key: "btnHover",
    cssVar: "--btn-hover-scale",
    label: "Buttons — mouse-over grow",
    defaultPercent: 15,
  },
  {
    key: "iconLinkHover",
    cssVar: "--icon-link-hover-scale",
    label: "Square icon links — mouse-over grow",
    defaultPercent: 15,
  },
  {
    key: "homeHeroTrio",
    cssVar: "--home-hero-trio-hover-scale",
    label: "Home page top 3 pictures — mouse-over grow",
    defaultPercent: 3,
  },
];

const STORAGE_KEY = "pf-global-knobs";

export function loadGlobalKnobs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveGlobalKnob(key, percent) {
  const current = loadGlobalKnobs();
  current[key] = percent;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // ignore (private browsing / storage full)
  }
}

// Applies every stored (or default) knob as a CSS variable on <html>, so
// the effect is live site-wide — call once at app startup, and again
// whenever a value changes on /global2.
export function applyGlobalKnobs() {
  const saved = loadGlobalKnobs();
  const root = document.documentElement;
  for (const knob of GLOBAL_KNOBS) {
    const percent = saved[knob.key] ?? knob.defaultPercent;
    root.style.setProperty(knob.cssVar, String(1 + Number(percent) / 100));
  }
}
