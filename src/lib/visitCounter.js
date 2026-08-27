// "^0001" style formatting — zero-padded to 4 digits, capped at 9999 so
// the badge never overflows its layout.
//
// The badge no longer tracks real visits via a cookie — it's just a fun
// hover gimmick now (see Header.jsx, which increments a local count on
// mouseenter). This helper only handles the display formatting.
export function formatVisitCount(count) {
  const capped = Math.min(count, 9999);
  return `^${String(capped).padStart(4, "0")}`;
}
