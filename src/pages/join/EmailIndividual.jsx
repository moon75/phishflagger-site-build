import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import emailInboxImg from "../../assets/images/email-inbox v2.png";

export default function EmailIndividual() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-content">
          <PageBrand />

          <h1 className="mt-8 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Individual Email
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-content flex-col items-center">
          <img
            src={emailInboxImg}
            alt="Inbox showing PhishCounter numbered email messages"
            className="h-auto w-full max-w-[520px] rounded-md object-contain"
          />
          <p className="mt-4 text-center text-[14px] italic text-ink-muted sm:text-[15px]">
            Email client view from enabled Domain
          </p>
        </div>
      </section>

    </>
  );
}

function PageBrand() {
  return (
    <div className="text-center">
      <Link
        to="/"
        aria-label="PhishFlagger home"
        className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
      >
        <BrandDisplay />
      </Link>
      <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
        Protecting Communications
      </p>
    </div>
  );
}

function BrandDisplay() {
  return (
    <>
      <em className="italic">
        <span className="font-extrabold text-ink">Phish</span>
        <span className="font-normal text-brand">Flagger</span>
      </em>
      <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
        &trade;
      </span>
    </>
  );
}

function Divider() {
  return <div className="mx-auto h-px w-[94%] max-w-[1120px] bg-gray-300" />;
}

