import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import supportersImg from "../../assets/images/supporters-cartoon.png";
import kickstarterPdf from "../../assets/Pdf/Kickstarter Campaign.pdf";

export default function Kickstarter() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-6 pb-20 sm:px-6 sm:pt-8 sm:pb-28">
        <div className="mx-auto max-w-[1040px]">
          <div className="text-center">
            <Link
              to="/"
              aria-label="PhishFlagger home"
              className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
            >
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
              <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                ™
              </span>
            </Link>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:gap-14">
            <div className="text-center lg:text-left">
              <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
                Kickstarter
              </h1>

              <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-relaxed text-ink-muted sm:text-[18px] lg:mx-0">
                Coming soon.
              </p>
              <a
                href={kickstarterPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                View Kickstarter Campaign
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Link
                to="/about/hall-of-fame"
                className="text-[30px] font-semibold leading-tight tracking-tight text-[#303030] transition-opacity hover:opacity-80 sm:text-[42px]"
              >
                Hall of Fame
              </Link>
              <img
                src={supportersImg}
                alt="Happy PhishFlagger supporters"
                className="mt-8 h-auto w-full max-w-[420px] object-contain"
              />
              <Link
                to="/about/hall-of-fame"
                className="mt-8 flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Hall of Fame
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
