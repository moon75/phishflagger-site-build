import CloseButton from "../components/ui/CloseButton.jsx";

// Placeholder for the official Kickstarter page — real content still to be
// built here. Was previously a bare test page (no body content, just to
// check header/footer chrome in isolation); now holds a visible marker so
// it's clear this route is reserved/in-progress rather than empty by
// mistake.
export default function Kick2() {
  return (
    <>
      <CloseButton />

      <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center gap-3 bg-white px-4 py-20 text-center">
        <span className="text-[13px] font-bold uppercase tracking-wide text-brand">
          Placeholder
        </span>
        <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
          Official Kick Page
        </h1>
        <p className="max-w-[420px] text-[15px] leading-relaxed text-ink-muted">
          This will be the official Kickstarter page — not built yet.
        </p>
      </section>
    </>
  );
}
