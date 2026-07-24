import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const hideFooter = pathname === "/about/faq" || pathname === "/joinfree";
  const hideHeader = pathname === "/joinfree";

  return (
    <div className="flex min-h-screen flex-col">
      {!hideHeader && <Header />}
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
