import CloseButton from "../../components/ui/CloseButton.jsx";
import messagesImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";

export default function Messaging() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Messaging
          </h1>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <p>
              Placeholder text goes here. Replace this paragraph with the
              final copy for this section.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={messagesImg}
              alt="Phone showing PhishFlagger numbered messages"
              className="h-auto w-1/2 max-w-[190px] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
