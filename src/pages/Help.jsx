import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

const LINKS = [
  { to: "/contact", label: "Contact" },
  { to: "/help/support-desk", label: "Support Desk" },
  { to: "/phishflagger-org", label: "PhishFlagger.org" },
  { to: "/help/kickstarter", label: "Kickstarter" },
  { to: "/about/faq", label: "FAQ" },
];

export default function Help() {
  return (
    <>
      <CloseButton force />
      <section
        className="w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-content">
          <div className="mx-auto grid max-w-[720px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-black bg-white px-4 py-8 text-center transition-transform duration-200 hover:scale-105"
              >
                <span className="text-[15px] font-semibold text-ink sm:text-[16px]">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
