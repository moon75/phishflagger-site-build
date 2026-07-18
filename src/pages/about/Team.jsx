import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import williamImg from "../../assets/images/william.avif";
import mikeImg from "../../assets/images/mike.avif";
import toddImg from "../../assets/images/todd.avif";
import robertImg from "../../assets/images/dr robert.avif";
import danImg from "../../assets/images/dan.avif";
import jimImg from "../../assets/images/jim riches.avif";
import shawnImg from "../../assets/images/shawn.avif";
import { brandify } from "../../components/Brand.jsx";

const TEAM = [
  {
    name: "William Pearce",
    role: "CEO, Founder",
    bio: "William is an Entrepreneur and Inventor of web based Auto Fill and Auto Complete, his patent has been cited in intellectual property developed by Microsoft, IBM, Google, Oracle, and others. A visionary, William applied for and was granted the patents that have laid the foundation for PhishFlagger.",
    photo: williamImg,
  },
  {
    name: "Mike Boland",
    role: "President, Founder",
    bio: "Mike holds a BA in Economics from McMaster University and is President of PhishFlagger Inc. He has been an active and passive investor in many start-ups within the technology, mining, health care and oil and gas industries. Mike brings executive-level marketing, finance and operational skills to the company.",
    photo: mikeImg,
  },
  {
    name: "Dr. Robert Cooper",
    role: "COO, Director",
    bio: "Dr. Robert Cooper is a graduate of Osgoode Hall Law School, a graduate of the University of Toronto School of Medicine, a member of the Law Society of Upper Canada and a member of the Governing Council of the University of Toronto. As a Director he bring extensive legal and entrepreneurial experience to PhishFlagger Management.",
    photo: robertImg,
  },
  {
    name: "Dan Grozdanovski",
    role: "CTO",
    bio: "Dan brings over 30 years of experience in management and technology across various sectors, including aerospace industry, photonics, lasers, automation, and AI.",
    photo: danImg,
  },
  {
    name: "Todd Sturgeon",
    role: "CIPO",
    bio: "Todd holds a Master's in Technology Management from Memorial University. He brings 30+ years of experience in information systems management across cybersecurity, government, education, manufacturing and other sectors. He spearheads technology initiatives and advances intellectual property development. Todd has successfully led innovative email security solutions and advised governments on technology integration in education.",
    photo: toddImg,
  },
  {
    name: "Jim Riches",
    role: "Security Advocate",
    bio: "Jim began his business career establishing a licensed apparel company. His ongoing active investor roles in many start ups, allowed him to realize the importance and necessity of the PhishFlagger solution in the marketplace. Jim will be heading the sales and licensing of the company as it moves into market.",
    photo: jimImg,
  },
  {
    name: "Shawn Pearce",
    role: "Cybersecurity Analyst",
    bio: "Shawn has over 25 years experience working for a \"top 3\" worldwide electronic component distribution company. He has extensive experience in marketing, and is responsible for keeping the PhishFlagger community up to date on the latest cybersecurity threats and initiatives.",
    photo: shawnImg,
  },
  {
    name: "Recognition To Our Team",
    role: "",
    bio: "Joe Heir\nAlex Tichy\nDavid M?\nJoe Andre?\nJohn Grant\nRukhsar Hussain\nJE?EB?PG?NG?",
  },
];

export default function Team() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
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

            <h1 className="mt-8 text-[32px] font-semibold leading-[1.15] tracking-tight text-ink sm:mt-10 sm:text-[44px] lg:text-[52px]">
              Meet the Team
            </h1>
          </div>

          {/* Team grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {TEAM.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TeamCard({ name, role, bio, photo }) {
  const initials = name
    .split(" ")
    .filter((p) => !p.endsWith("."))
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  const onImgError = (e) => {
    e.currentTarget.style.display = "none";
    const fallback = e.currentTarget.nextElementSibling;
    if (fallback) fallback.style.display = "flex";
  };

  return (
    <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)] transition hover:shadow-[0_4px_18px_rgba(15,23,42,0.08)] sm:p-6">
      {photo && (
        <div className="relative h-[260px] w-full overflow-hidden rounded-xl bg-gray-50 sm:h-[280px]">
          <img
            src={photo}
            alt={name}
            onError={onImgError}
            className="h-full w-full object-cover object-top"
          />
          <div
            className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#2a6df4] to-[#1a52c9] text-[48px] font-bold text-white"
            aria-hidden
          >
            {initials}
          </div>
        </div>
      )}

      <h3 className="mt-5 text-[17px] font-semibold text-ink sm:text-[18px]">
        {name}
      </h3>
      <p className="mt-1 text-[14px] font-bold text-ink sm:text-[14.5px]">
        {role}
      </p>
      <p className="mt-4 whitespace-pre-line text-[13.5px] leading-[1.65] text-ink sm:text-[14px]">
        {brandify(bio)}
      </p>
    </article>
  );
}
