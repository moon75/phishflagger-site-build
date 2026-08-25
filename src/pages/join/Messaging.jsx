import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import messagesImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";
import messagingIconsImg from "../../assets/images/Icons-5.png";

export default function Messaging() {
  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "url('/assets/images/nice%20background%20shade.png')",
        }}
      >
        <PageDownButton />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <h1 className="mb-6 text-left text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
              Messaging
            </h1>
            <p className="rounded-lg bg-[#FFFF00] px-4 py-3 text-ink">
              Placeholder text goes here. Replace this paragraph with the
              final copy for this section.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:flex-nowrap lg:justify-end lg:gap-20">
            <img
              src={messagingIconsImg}
              alt="Grid of popular messaging app icons"
              className="h-auto w-[45%] max-w-[300px] object-contain transition-transform duration-200 hover:scale-[1.2] sm:w-[58%]"
            />
            <img
              src={messagesImg}
              alt="Phone showing PhishFlagger numbered messages"
              className="h-auto w-[28%] max-w-[190px] object-contain transition-transform duration-200 hover:scale-[1.2] sm:w-[36%]"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-content flex-wrap items-center justify-center gap-4 text-center sm:mt-14">
          <Link
            to="/join/messaging/request"
            className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
          >
            Want to see PhishFlagger in your Message App?
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-black bg-white px-5 py-3 text-[13px] font-bold text-ink transition hover:bg-gray-100 duration-200 hover:scale-[1.2]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
