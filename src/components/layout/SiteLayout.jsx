import { useLayoutEffect } from "react";
import {
  Outlet,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const { pathname } = location;
  const scrollKey = `phishflagger-scroll:${location.key}`;
  // Keyed by pathname (not location.key) so a CloseButton "X" navigation —
  // which replaces history rather than going POP — can still find where the
  // user was on a page they're returning to. See restoreScroll below.
  const pathScrollKey = `phishflagger-scroll-path:${pathname}`;

  useLayoutEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(scrollKey, String(window.scrollY));
      sessionStorage.setItem(pathScrollKey, String(window.scrollY));
    };

    // Skip the immediate save when this navigation is a scroll restore —
    // at this point window.scrollY is still wherever the browser happened
    // to leave it pre-restore, and saving it now would clobber the good
    // pathScrollKey value the restore effect below is about to read.
    if (!location.state?.restoreScroll) {
      saveScrollPosition();
    }
    window.addEventListener("scroll", saveScrollPosition, { passive: true });

    // No "final" save here on cleanup: by the time this runs, React has
    // already swapped in the next page's (possibly shorter) DOM, and the
    // browser may have force-clamped window.scrollY to fit it — writing
    // that clamped value now would clobber the correct position the scroll
    // listener above already captured while this page was still on screen.
    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, [scrollKey, pathScrollKey, location.state?.restoreScroll]);

  useLayoutEffect(() => {
    const savedPosition = location.state?.restoreScroll
      ? Number(sessionStorage.getItem(pathScrollKey) || 0)
      : navigationType === "POP"
        ? Number(sessionStorage.getItem(scrollKey) || 0)
        : 0;

    window.scrollTo(0, savedPosition);

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition);
      });
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [navigationType, scrollKey, pathScrollKey, location.state?.restoreScroll]);

  const hideFooter = pathname === "/about/faq";
  const hideHeader = pathname === "/join-free" || pathname === "/join-corporate";

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      {!hideHeader && <Header />}
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
