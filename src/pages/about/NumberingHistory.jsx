import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import LogoMark from "../../components/ui/LogoMark.jsx";
import history1Img from "../../assets/images/7 1st.avif";
import history2Img from "../../assets/images/7  2nd.avif";
import history3Img from "../../assets/images/7 3rd.avif";

export default function NumberingHistory() {
  return (
    <>
      <CloseButton to="/about" />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-content text-center">
          <p className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[22px] leading-[1.5] text-ink sm:whitespace-nowrap sm:text-[28px] sm:leading-[1.45]">
            <LogoMark />
            Numbering has been revolutionary in creating order and reducing
            fraud.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 text-left sm:mt-12 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            <HistoryCard
              to="/about/numbering-history/books"
              img={history1Img}
              imgAlt="Numbered book pages"
            />
            <HistoryCard
              to="/about/numbering-history/documents"
              img={history2Img}
              imgAlt="Mechanical numbering stamp"
            />
            <HistoryCard
              to="/about/numbering-history/communications"
              img={history3Img}
              imgAlt="PhishFlagger email numbering"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function HistoryCard({ to, img, imgAlt }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center rounded-2xl border-2 border-black p-0.5 text-center transition-transform duration-200 hover:z-10 hover:scale-105"
    >
      <img
        src={img}
        alt={imgAlt}
        className="h-auto w-full rounded-2xl object-contain"
      />
    </Link>
  );
}
