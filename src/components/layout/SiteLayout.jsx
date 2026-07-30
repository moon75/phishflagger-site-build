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

  useLayoutEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(scrollKey, String(window.scrollY));
    };

    saveScrollPosition();
    window.addEventListener("scroll", saveScrollPosition, { passive: true });

    return () => {
      saveScrollPosition();
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, [scrollKey]);

  useLayoutEffect(() => {
    const savedPosition =
      navigationType === "POP"
        ? Number(sessionStorage.getItem(scrollKey) || 0)
        : 0;

    window.scrollTo(0, savedPosition);

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition);
      });
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [navigationType, scrollKey]);

  const hideFooter = pathname === "/about/faq";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
