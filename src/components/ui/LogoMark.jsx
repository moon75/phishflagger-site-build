// GLOBAL STANDARD — the small envelope/flag mark placed next to a heading
// ("put logo" instructions mean: use this, at this size, next to the text).
// Wrap the heading in `flex items-center gap-3` and drop this in before the
// text. Don't hand-roll the <img src="/assets/images/logo-mark.png" ...>
// markup inline anymore — use this component so the mark stays one place to
// tweak site-wide.
export default function LogoMark({ className = "" }) {
  return (
    <img
      src="/assets/images/logo-mark.png"
      alt="PhishFlagger envelope and flag mark"
      className={`h-[26px] w-auto shrink-0 object-contain sm:h-[30px] ${className}`}
    />
  );
}
