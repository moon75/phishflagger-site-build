// Small shared cookie helpers (path=/, 1-year default) used by the country
// selection and elsewhere.

export const YEAR_SECONDS = 60 * 60 * 24 * 365;

export function readCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function writeCookie(name, value, maxAgeSeconds = YEAR_SECONDS) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
}
