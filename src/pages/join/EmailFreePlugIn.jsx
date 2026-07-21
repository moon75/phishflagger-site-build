import CloseButton from "../../components/ui/CloseButton.jsx";
import emailInboxImg from "../../assets/images/email-inbox v2.png";

export default function EmailFreePlugIn() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-12 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-content">
          <p className="text-center text-[15px] font-semibold uppercase tracking-wide text-brand sm:text-[16px]">
            Free PhishFlagger
          </p>
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Thunderbird Plug-In
          </h1>
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
        </div>
      </section>

    </>
  );
}

function Divider() {
  return <div className="mx-auto h-px w-[94%] max-w-[1120px] bg-gray-300" />;
}
