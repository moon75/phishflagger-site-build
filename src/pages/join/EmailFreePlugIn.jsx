import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import emailInboxImg from "../../assets/images/email-inbox v2.png";
import outlookImg from "../../assets/images/outlook image.png";

export default function EmailFreePlugIn() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-12 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Free Plug In
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-8 lg:grid-cols-2">
          <div className="flex w-full flex-col items-center">
            <div className="relative mx-auto w-full max-w-[480px]">
              <img
                src="/assets/images/thunderbird new pick.avif"
                alt="Mozilla Thunderbird email client with PhishFlagger plugin"
                className="h-auto w-full rounded-2xl border-2 border-black object-contain"
              />
              <div className="absolute right-4 top-4 z-10 text-right">
                <span className="block font-sans text-[22px] font-bold leading-tight tracking-tight text-ink sm:text-[26px]">
                  Thunderbird
                </span>
                <span className="block font-sans text-[15px] font-medium leading-tight text-ink-muted sm:text-[17px]">
                  Email Client
                </span>
              </div>
            </div>
            <a
              href="#"
              className="mt-5 cursor-pointer rounded-lg bg-[#585858] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
            >
              Download
            </a>
          </div>

          <div className="flex w-full flex-col items-center">
            <img
              src={outlookImg}
              alt="Microsoft Outlook email client with PhishFlagger plugin"
              className="h-auto w-full max-w-[480px] rounded-2xl border-2 border-black object-contain"
            />
            <a
              href="#"
              className="mt-5 cursor-pointer rounded-lg bg-[#585858] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-content flex-col items-center">
          <img
            src={emailInboxImg}
            alt="Inbox showing PhishCounter numbered email messages"
            className="h-auto w-full max-w-[520px] rounded-lg border-2 border-black object-contain"
          />
          <p className="mt-4 text-center text-[14px] italic text-ink-muted sm:text-[15px]">
            Email client view from enabled Domain
          </p>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px]">
            Outlook Plug-In
          </h2>

          <textarea
            rows={6}
            placeholder="placeholder text"
            className="mt-8 w-full resize-none rounded-lg border-2 border-black bg-transparent p-4 text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
          />

          <div className="mt-10 flex justify-center">
            <Link
              to="/joinfree"
              className="cursor-pointer rounded-lg bg-[#585858] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
            >
              Join Free
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

function Divider() {
  return <div className="mx-auto h-px w-[94%] max-w-[1120px] bg-gray-300" />;
}
