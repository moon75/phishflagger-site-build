import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

const YOUTUBE_VIDEO_ID = "kqtO0Mq3f-s";

export default function Video() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Wordmark + tagline */}
          <div className="text-center">
            <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
              <Link to="/" className="inline-block hover:opacity-80">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                  ™
                </span>
              </Link>
            </div>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>

            <h1 className="mx-auto mt-10 max-w-[720px] text-[28px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[36px] lg:text-[42px]">
              How{" "}
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
              <span className="font-normal not-italic">™</span> and human
              validation protects against phishing and Impersonation.
            </h1>
          </div>

          {/* Video player */}
          <div className="mx-auto mt-10 w-full max-w-[900px] overflow-hidden rounded-xl bg-black shadow-lg sm:mt-14">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                title="PhishFlagger video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
