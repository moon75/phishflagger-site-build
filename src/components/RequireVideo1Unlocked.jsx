import { Navigate, useLocation } from "react-router-dom";
import { isVideo1Unlocked } from "../lib/videoAccess.js";

// Guards every "007 mode" dev/demo page (kick, kick2, edit, internal
// global-settings, /video1, /video2) so typing the URL directly can't
// reach them without the 007 access code having been entered on /login —
// mirrors the isVideo1Unlocked() check the nav links already use to decide
// whether to show these pages at all.
export default function RequireVideo1Unlocked({ children }) {
  const location = useLocation();

  if (!isVideo1Unlocked()) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
