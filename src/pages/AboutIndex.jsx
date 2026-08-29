import { Link } from "react-router-dom";
import PageCycleArrows from "../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../components/ui/topNavLoopPages.js";

const LEFT_LINKS = [
  { to: "/about/press", label: "Press" },
  { to: "/about/team", label: "Team" },
  { to: "/about/intellectual-property", label: "Intellectual Property" },
];

const RIGHT_LINKS = [
  { to: "/about/blog", label: "Blog" },
  { to: "/about/numbering-history", label: "Numbering History" },
  { to: "/about/phishing-ends", label: "Phishing Ends - Fiction" },
  { to: "/about/news", label: "Phishing News" },
];

export default function AboutIndex() {
  return (
    <div
      className="relative w-full bg-[#eef0f4] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ===== Pane 1 — About links (2 columns) — roughly half the height of the Home hero pane ===== */}
      <section className="relative flex min-h-[480px] w-full items-center px-4 py-14 sm:min-h-[560px] sm:px-6 sm:py-20">
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={5} center />
        <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
          <ul className="space-y-5 text-center sm:pl-40 sm:text-left lg:pl-56">
            {LEFT_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[20px] font-semibold text-ink transition-colors hover:text-brand sm:text-[24px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-5 text-center sm:text-left">
            {RIGHT_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[20px] font-semibold text-ink transition-colors hover:text-brand sm:text-[24px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
