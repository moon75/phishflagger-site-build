import { useNavigate } from "react-router-dom";
import { isVideo1Unlocked } from "../../lib/videoAccess.js";

// Only visible in "007 mode" (isVideo1Unlocked) — lets a dev jump between the
// real public /video page and the two Oracle-backed demo libraries (/video1,
// /video2) without going back through the /login access code. "Public"
// passes skipRedirect so VideoShowcase's auto-redirect-to-/video1-while-
// unlocked doesn't immediately bounce back.
const MODES = [
  { key: "public", label: "Public", path: "/video", state: { skipRedirect: true } },
  { key: "development", label: "Development 1", path: "/video1" },
  { key: "development2", label: "Development 2", path: "/video2" },
];

export default function VideoModeToggle({ active }) {
  const navigate = useNavigate();

  if (!isVideo1Unlocked()) return null;

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5">
      {MODES.map((mode) => (
        <button
          key={mode.key}
          type="button"
          onClick={() => navigate(mode.path, mode.state ? { state: mode.state } : undefined)}
          className={`cursor-pointer rounded-md border border-black px-2.5 py-1 text-[13px] font-medium transition-transform duration-200 hover:scale-[1.15] hover:text-brand ${
            active === mode.key ? "bg-gray-200 text-brand" : "bg-white text-ink"
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
