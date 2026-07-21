import CloseButton from "../../components/ui/CloseButton.jsx";
import emailInboxImg from "../../assets/images/email-inbox v2.png";

export default function EmailIndividual() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-12 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Corporate
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.05fr]">
          {/* Left — install list */}
          <div>
            <h3 className="text-[18px] font-semibold text-ink sm:text-[20px]">
              Install Plug-In:
            </h3>
            <ul className="mt-6 space-y-3 text-[15px] text-ink sm:mt-8 sm:space-y-4 sm:text-[16px]">
              <li>Thunderbird</li>
              <li>Outlook</li>
            </ul>
          </div>

          {/* Right — inbox image */}
          <div className="flex flex-col items-center">
            <img
              src={emailInboxImg}
              alt="Inbox showing PhishCounter numbered email messages"
              className="h-auto w-full max-w-[520px] rounded-lg border-2 border-black object-contain"
            />
            <p className="mt-4 text-center text-[14px] italic text-ink-muted sm:text-[15px]">
              Email client view from enabled Domain
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px]">
            Purchase Keys
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

