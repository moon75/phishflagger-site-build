import { Link } from "react-router-dom";

export default function CloseButton({ to = "/" }) {
  return (
    <div className="relative">
      <Link
        to={to}
        aria-label="Close and return home"
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#4a4a4a] text-white shadow-md transition hover:bg-[#2b2b2b] sm:right-6 sm:top-6 sm:h-14 sm:w-14"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          className="h-5 w-5 sm:h-6 sm:w-6"
          aria-hidden
        >
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </Link>
    </div>
  );
}
