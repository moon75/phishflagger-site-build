// Persists whether the "007" access code has been entered on /login, so the
// unlock survives reloads/new visits (localStorage) until explicitly turned
// off. See Login.jsx (sets it) and VideoShowcase.jsx (reads it to redirect
// /video straight to the full /video1 library while unlocked).
const KEY = "pf_video1_unlocked";

export function isVideo1Unlocked() {
  try {
    return localStorage.getItem(KEY) === "true";
  } catch {
    return false;
  }
}

export function setVideo1Unlocked(unlocked) {
  try {
    if (unlocked) {
      localStorage.setItem(KEY, "true");
    } else {
      localStorage.removeItem(KEY);
    }
  } catch {
    // Ignore storage errors (private browsing, disabled storage, etc.) —
    // the unlock just won't persist across reloads in that case.
  }
}
