import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">
        404
      </p>
      <h1 className="mt-2 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-ink-muted">
        We couldn&rsquo;t find what you were looking for.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover"
      >
        Back to home
      </Link>
    </section>
  );
}
