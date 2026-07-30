import CloseButton from "../components/ui/CloseButton.jsx";
import { Link } from "react-router-dom";
import outlookImg from "../assets/images/outlook image.png";

export default function Download() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
              Download
            </h1>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {/* Thunderbird */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="flex h-40 items-center justify-center bg-[#f4f5f8] p-6">
                <img
                  src="/assets/images/thunderbird new pick.avif"
                  alt="Mozilla Thunderbird"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-center gap-6 px-5 py-5 sm:px-6">
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
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="flex h-40 items-center justify-center bg-[#f4f5f8] p-6">
                <img
                  src={outlookImg}
                  alt="Microsoft Outlook"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex justify-center px-5 py-5 sm:px-6">
                <Link
                  to="/plugin-download?client=Outlook&download=Windows%20Download"
                  className="text-[13px] font-semibold text-[#2a6df4] underline underline-offset-4 sm:text-[14px]"
                >
                  Windows
                </Link>
              </div>
            </div>

            {/* More clients coming soon */}
            <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-[#f4f5f8] px-5 py-10 text-center">
              <p className="text-[15px] font-semibold leading-snug text-ink sm:text-[16px]">
                More Email Clients Available Soon
              </p>
            </div>

            {/* Developers CTA */}
            <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-[#f4f5f8] px-5 py-10 text-center">
              <p className="text-[15px] font-semibold leading-snug text-ink sm:text-[16px]">
                Email Client Developers: Add PhishFlagger protocol to your
                Client free.
              </p>
            </div>

            {/* Empty placeholders */}
            <div className="hidden rounded-xl border border-transparent sm:block" />
            <div className="hidden rounded-xl border border-transparent lg:block" />
          </div>
        </div>
      </section>
    </>
  );
}
