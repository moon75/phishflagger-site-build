import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import contactIcon from "../../telecom Webpage/assets/images/products/OIP-915219841.png";

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
      <CloseButton />
      <section
        className="w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white transition-transform duration-200 hover:scale-110 sm:h-[120px] sm:w-[120px]">
              <img
                src={contactIcon}
                alt="Support representative"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-[40px] font-semibold leading-none tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
              Help
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-relaxed text-ink sm:text-[16px]">
              Get in touch, find answers, or learn how you can support{" "}
              <em className="not-italic font-semibold">PhishFlagger</em>.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[720px] grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6">
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
