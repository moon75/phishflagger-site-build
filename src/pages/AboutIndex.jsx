import { Link } from "react-router-dom";
import PageCycleArrows from "../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../components/ui/topNavLoopPages.js";
import PageDownButton from "../components/ui/PageDownButton.jsx";
import { BrandInline } from "../components/Brand.jsx";

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
      {/* ===== Pane 1 — About links (2 columns) — no counter number ===== */}
      <section id="about-pane-0001" className="relative flex min-h-[400px] w-full items-center px-4 py-12 sm:min-h-[460px] sm:px-6 sm:py-16">
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={5} center topClass="top-0 sm:top-2" />
        <PageDownButton targetSelector="#about-pane-0002" />
        <div className="mx-auto flex w-full max-w-content flex-col items-center gap-y-10 sm:flex-row sm:items-stretch sm:justify-center sm:gap-x-16">
          <ul className="space-y-5 text-center sm:text-left">
            {LEFT_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[16px] font-semibold text-ink transition-colors hover:text-brand sm:text-[18px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden self-stretch border-l-2 border-black sm:block" aria-hidden />
          <ul className="space-y-5 text-center sm:text-left">
            {RIGHT_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[16px] font-semibold text-ink transition-colors hover:text-brand sm:text-[18px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden self-stretch border-l-2 border-black sm:block" aria-hidden />
          <div className="flex flex-col items-center gap-5 sm:items-start">
            <Link
              to="/demo"
              className="text-[16px] font-semibold text-ink transition-colors hover:text-brand sm:text-[18px]"
            >
              Demo
            </Link>
            <Link
              to="/join/messaging"
              className="text-[16px] font-semibold text-ink transition-colors hover:text-brand sm:text-[18px]"
            >
              Messaging
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Pane 2 — Numbering history gallery (white) — moved here from Home pane-0006 ===== */}
      <section id="about-pane-0002" className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0001" />
        <PageDownButton targetSelector="#site-footer" forceTopOnUp />
        <div className="mx-auto max-w-content">
          <p className="mx-auto max-w-[1100px] text-center text-[22px] leading-[1.5] text-ink sm:whitespace-nowrap sm:text-[28px] sm:leading-[1.45]">
            Numbering has been revolutionary in creating order and reducing
            fraud.
          </p>

          <div className="relative mt-14 sm:mt-16">
            {/* Timeline connector */}
            <div className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-[26px] hidden h-[2px] bg-ink/15 sm:block" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6 lg:gap-10">
              <div className="flex flex-col items-center">
                <span className="relative z-10 mb-6 bg-white px-3 text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">
                  1470
                </span>
                <Link
                  to="/about/numbering-history"
                  className="flex aspect-[1448/1017] w-full max-w-[240px] items-center justify-center gap-3 rounded-2xl border-2 border-black bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.2]"
                >
                  <img
                    src="/assets/images/History%20Pane%20Images/4%20papers%20first%20image.png"
                    alt="Numbered papers"
                    className="h-[85%] w-auto object-contain"
                  />
                  <img
                    src="/assets/images/History%20Pane%20Images/bundle%20of%20books%20second%20image.png"
                    alt="Bundle of numbered books"
                    className="h-[85%] w-auto object-contain"
                  />
                </Link>
                <p className="mt-4 max-w-[240px] text-center text-[21px] leading-[1.5] text-ink-muted sm:text-[22.5px]">
                  Sequential page numbering brings order.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="relative z-10 mb-6 bg-white px-3 text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">
                  1892
                </span>
                <Link
                  to="/about/numbering-history"
                  className="flex aspect-[1448/1017] w-full max-w-[240px] items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.2]"
                >
                  <img
                    src="/assets/images/History%20Pane%20Images/stamp%20third%20image.png"
                    alt="Numbering stamp"
                    className="h-full w-auto scale-[1.2] object-contain"
                  />
                </Link>
                <p className="mt-4 max-w-[240px] text-center text-[21px] leading-[1.5] text-ink-muted sm:text-[22.5px]">
                  Mechanical numbering stops paper fraud.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="relative z-10 mb-6 bg-white px-3 text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">
                  1991
                </span>
                <Link
                  to="/about/numbering-history"
                  className="flex aspect-[1448/1017] w-full max-w-[240px] items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.2]"
                >
                  <img
                    src="/assets/images/blockchain.png"
                    alt="Blockchain ledger"
                    className="h-full w-auto object-contain"
                  />
                </Link>
                <p className="mt-4 max-w-[240px] text-center text-[21px] leading-[1.5] text-ink-muted sm:text-[22.5px]">
                  Blockchain solved tamper-proof sequence.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="relative z-10 mb-6 bg-white px-3 text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">
                  2026
                </span>
                <Link
                  to="/about/numbering-history"
                  className="flex aspect-[1448/1017] w-full max-w-[240px] items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-white p-1 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.2]"
                >
                  <img
                    src="/assets/images/footer%20history%20pic%203rd.png"
                    alt="PhishFlagger inbox demonstration"
                    className="h-full w-full object-contain"
                  />
                </Link>
                <p className="mt-4 max-w-[260px] text-center text-[19px] leading-[1.5] text-ink-muted sm:text-[20px]">
                  <BrandInline /> brings back Human Validation, Order, Proof of
                  delivery and helps stop fraud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}
