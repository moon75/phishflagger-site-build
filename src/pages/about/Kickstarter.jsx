import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import supportersImg from "../../assets/images/supporters-cartoon.png";

export default function Kickstarter() {
  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-6 pb-20 sm:px-6 sm:pt-8 sm:pb-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <PageDownButton />
        <div className="mx-auto max-w-[1040px]">
          <div className="text-center">
            <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[44px]">
              Kickstarter
            </h1>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:gap-14">
            <div className="text-center lg:text-left">
              <p className="mx-auto max-w-[520px] text-[16px] leading-relaxed text-ink-muted sm:text-[18px] lg:mx-0">
                Meet the people who believed in us first. Like you, they knew
                the world needed a better way to verify digital
                communication. Their support helped bring PhishFlagger to the
                world. We proudly honor our founding supporters.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={supportersImg}
                alt="Happy PhishFlagger supporters"
                className="mt-8 h-auto w-full max-w-[420px] object-contain"
              />
              <Link
                to="/about/hall-of-fame"
                className="mt-8 flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-[#e63950] duration-200 hover:scale-[1.2]"
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
