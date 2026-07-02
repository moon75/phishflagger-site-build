import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

export default function PetitionThanks() {
  return (
    <>
      <CloseButton to="/join/telecom" />
      <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
        <div className="text-[52px] text-green-500">✓</div>
        <h2 className="mt-4 text-[28px] font-semibold text-[#303030]">
          Thank you for signing!
        </h2>
        <p className="mt-3 text-[16px] text-[#666]">
          Your signature has been received.
        </p>
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
