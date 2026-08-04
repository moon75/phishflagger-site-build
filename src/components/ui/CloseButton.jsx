import { useNavigate } from "react-router-dom";

export default function CloseButton({ to = "/", force = false }) {
  const navigate = useNavigate();

  function handleClose() {
    if (force) {
      navigate(to, { replace: true });
      return;
    }

    const historyIndex = Number(window.history.state?.idx);

    if (Number.isFinite(historyIndex) && historyIndex > 0) {
      navigate(-1);
      return;
    }

    navigate(to, { replace: true });
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close and return to the previous page"
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
      </button>
    </div>
  );
}
