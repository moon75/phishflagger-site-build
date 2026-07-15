// Shared PhishFlagger™ / PhishCounter™ brand styling.
// Phish -> bold black, Flagger/Counter -> brand red, italic, with ™ superscript.

export function BrandInline({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-extrabold text-ink">Phish</span>
      <span className="font-normal text-brand">{trail}</span>
    </em>
  );
}

const BRAND_RE = /Phish(Flagger|Counter)(™|&trade;)?/g;

// Turns any string containing "PhishFlagger"/"PhishCounter" (optionally
// followed by ™) into an array of strings/JSX nodes with brand styling.
// Non-string input is returned unchanged so it's safe to wrap freely.
export function brandify(text) {
  if (typeof text !== "string") return text;

  const parts = [];
  let lastIndex = 0;
  let match;
  let i = 0;
  BRAND_RE.lastIndex = 0;

  while ((match = BRAND_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span key={`brand-${i++}`} className="whitespace-nowrap">
        <BrandInline trail={match[1]} />
        {match[2] && <span className="font-normal not-italic">™</span>}
      </span>,
    );
    lastIndex = BRAND_RE.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
