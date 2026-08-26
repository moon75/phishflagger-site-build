// Cookie-based visit counter for the header's "^0001" badge. Increments
// once per new browser session (tab/window open), not on every page
// navigation within the same session.
//
// Two cookies:
//   pf_visit_count  — persistent (1 year), the cumulative number shown
//   pf_session_seen — session cookie (no max-age = cleared when the
//                     browser closes), marks "already counted this visit"

const COUNT_COOKIE = "pf_visit_count";
const SESSION_COOKIE = "pf_session_seen";
const YEAR_SECONDS = 60 * 60 * 24 * 365;

function readCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name, value, maxAgeSeconds) {
  const maxAge = maxAgeSeconds != null ? `; max-age=${maxAgeSeconds}` : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/${maxAge}; samesite=lax`;
}

// Reads the current visit count, incrementing it (and persisting the
// increment) the first time this runs in a new browser session. Safe to
// call on every mount — subsequent calls in the same session just return
// the already-stored count without incrementing again.
export function getVisitCount() {
  if (typeof document === "undefined") return 1;

  const alreadyCounted = readCookie(SESSION_COOKIE) === "1";
  const stored = Number(readCookie(COUNT_COOKIE));
  let count = Number.isFinite(stored) && stored > 0 ? stored : 0;

  if (!alreadyCounted) {
    count += 1;
    writeCookie(COUNT_COOKIE, String(count), YEAR_SECONDS);
    writeCookie(SESSION_COOKIE, "1"); // no max-age → session cookie
  }

  return count;
}

// "^0001" style formatting — zero-padded to 4 digits, capped at 9999 so
// the badge never overflows its layout.
export function formatVisitCount(count) {
  const capped = Math.min(count, 9999);
  return `^${String(capped).padStart(4, "0")}`;
}
