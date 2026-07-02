import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

export default function GenericThanks({
  message = "Thank you. Your submission has been received.",
  closeTo = "/",
}) {
  return (
    <>
      <CloseButton to={closeTo} />
      <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
        <div className="text-[52px] text-green-500">✓</div>
        <h1 className="mt-4 max-w-[820px] text-[30px] font-semibold leading-tight text-[#303030] sm:text-[44px]">
          {message}
        </h1>
        <Link
          to="/"
          className="mt-8 text-[14px] font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}
