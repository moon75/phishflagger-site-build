import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { brandify } from "../../components/Brand.jsx";

const TELECOM_SUPPORTERS = [
  {
    id: 1,
    name: "Supporter One",
    role: "Telecom Partner",
    description: "Bio coming soon.",
  },
  {
    id: 2,
    name: "Supporter Two",
    role: "Telecom Partner",
    description: "Bio coming soon.",
  },
  {
    id: 3,
    name: "Supporter Three",
    role: "Telecom Partner",
    description: "Bio coming soon.",
  },
];

export default function TelecomSupporters() {
  return (
    <>
      <CloseButton to="/help/telecom-endorse-us" />

      {/* Header */}
      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-[920px] text-center">
          <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
            Telecom Supporters
          </h1>
        </div>
      </section>

      {/* Telecom supporters */}
      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TELECOM_SUPPORTERS.map((s) => (
              <TelecomSupporterCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Endorse Us CTA */}
      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-[980px] justify-center">
          <Link
            to="/help/telecom-endorse-us"
            className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
          >
            Endorse Us
          </Link>
        </div>
      </section>
    </>
  );
}

function TelecomSupporterCard({ name, role, description }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2a6df4] to-[#1a52c9] text-[24px] font-bold text-white ring-4 ring-[#eef0f4]">
        {initials}
      </div>
      <h3 className="mt-4 text-[17px] font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-[12px] font-medium text-ink-muted">{role}</p>
      <p className="mt-4 text-[13px] leading-[1.7] text-ink-muted">
        {brandify(description)}
      </p>
    </div>
  );
}
