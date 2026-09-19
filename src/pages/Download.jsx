import CloseButton from "../components/ui/CloseButton.jsx";
import { Link } from "react-router-dom";
import outlookImg from "../assets/images/outlook image 90.png";
import cloudServerImg from "../assets/images/digital-domain-diagram-v6-no-connector.png";
import { publicPath } from "../lib/publicPath.js";

export default function Download() {
  return (
    <>
      <CloseButton />

      <section className="relative w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <h1 className="page-title">
              Download
            </h1>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {/* Thunderbird */}
            <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border-2 border-black">
              <div className="flex h-48 shrink-0 items-center justify-center overflow-hidden bg-[#f4f5f8]">
                <img
                  src={publicPath("/assets/images/thunderbird new pick.avif")}
                  alt="Mozilla Thunderbird"
                  className="h-full w-full object-cover pic-with-no-link-mouse-over-increase"
                />
              </div>
              <div className="flex flex-1 items-center justify-center gap-6 px-5 sm:px-6">
                <Link
                  to="/plugin-download?client=Thunderbird&download=Windows%20Download"
                  className="text-[13px] font-semibold text-[#2a6df4] underline underline-offset-4 sm:text-[14px]"
                >
                  Windows
                </Link>
                <Link
                  to="/plugin-download?client=Thunderbird&download=Linux%20Download"
                  className="text-[13px] font-semibold text-[#2a6df4] underline underline-offset-4 sm:text-[14px]"
                >
                  Linux
                </Link>
              </div>
            </div>

            {/* Outlook */}
            <div className="relative flex h-[340px] flex-col rounded-2xl border-2 border-black">
              <span className="absolute -top-2 -left-2 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white sm:text-[10px]">
                Coming Soon
              </span>
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl">
                <div className="flex h-48 shrink-0 items-center justify-center overflow-hidden bg-[#f4f5f8]">
                  <img
                    src={outlookImg}
                    alt="Microsoft Outlook"
                    className="h-full w-full scale-[1.2] object-cover pic-with-no-link-mouse-over-increase"
                  />
                </div>
                <div className="flex flex-1 items-center justify-center px-5 sm:px-6">
                  <Link
                    to="/plugin-download?client=Outlook&download=Windows%20Download"
                    className="text-[13px] font-semibold text-[#2a6df4] underline underline-offset-4 sm:text-[14px]"
                  >
                    Windows
                  </Link>
                </div>
              </div>
            </div>

            {/* More clients coming soon */}
            <div className="flex h-[340px] flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-[#f4f5f8] px-5 text-center">
              <p className="text-[15px] font-semibold leading-snug text-ink sm:text-[16px]">
                More Email Clients Available Soon
              </p>
            </div>

            {/* Developers CTA */}
            <div className="flex h-[340px] flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border-2 border-black bg-[#f4f5f8] px-5 py-8 text-center sm:px-6">
              <p className="flex flex-1 items-center text-[15px] font-semibold leading-snug text-ink sm:text-[16px]">
                Email Client Developers: Add PhishFlagger protocol to your
                Client free.
              </p>
              <Link
                to="/contact"
                state={{ from: "/download" }}
                className="inline-flex items-center justify-center rounded-md whitespace-nowrap bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
              >
                Contact Us
              </Link>
            </div>

            {/* Domain Appliance */}
            <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border-2 border-black">
              <div className="flex h-48 shrink-0 items-center justify-center overflow-hidden bg-[#f4f5f8]">
                <img
                  src={cloudServerImg}
                  alt="Cloud and server appliance"
                  className="h-full w-full object-cover pic-with-no-link-mouse-over-increase"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 sm:px-6">
                <span className="text-[15px] font-semibold leading-snug text-ink sm:text-[16px]">
                  Domain Appliance
                </span>
                <Link
                  to="/contact"
                  state={{ from: "/download" }}
                  className="inline-flex items-center justify-center rounded-md whitespace-nowrap bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Empty placeholder */}
            <div className="hidden rounded-xl border border-transparent lg:block" />
          </div>
        </div>
      </section>
    </>
  );
}
