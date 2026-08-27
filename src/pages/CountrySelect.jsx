import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import { writeCookie } from "../lib/cookies.js";

const REGIONS = [
  {
    region: "North America",
    countries: [
      { name: "United States", langs: ["English"] },
      { name: "Canada", langs: ["English", "Français"] },
      { name: "Mexico", langs: ["Español"] },
    ],
  },
  {
    region: "South America",
    countries: [
      { name: "Brazil", langs: ["Português"] },
      { name: "Argentina", langs: ["Español"] },
      { name: "Chile", langs: ["Español"] },
    ],
  },
  {
    region: "Asia Pacific",
    countries: [
      { name: "Australia", langs: ["English"] },
      { name: "New Zealand", langs: ["English"] },
      { name: "Japan", langs: ["日本語"] },
      { name: "Singapore", langs: ["English"] },
      { name: "India", langs: ["English"] },
      { name: "South Korea", langs: ["한국어"] },
    ],
  },
  {
    region: "Europe",
    countries: [
      { name: "United Kingdom", langs: ["English"] },
      { name: "Ireland", langs: ["English"] },
      { name: "Germany", langs: ["Deutsch"] },
      { name: "France", langs: ["Français"] },
      { name: "Spain", langs: ["Español"] },
      { name: "Italy", langs: ["Italiano"] },
      { name: "Netherlands", langs: ["Nederlands"] },
      { name: "Sweden", langs: ["Svenska"] },
      { name: "Norway", langs: ["Norsk"] },
    ],
  },
  {
    region: "Middle East",
    countries: [
      { name: "United Arab Emirates", langs: ["English"] },
      { name: "Saudi Arabia", langs: ["العربية"] },
    ],
  },
  {
    region: "Africa",
    countries: [{ name: "South Africa", langs: ["English"] }],
  },
];

// Transition duration (ms) — kept in sync with the CSS transition-duration
// below so the navigate() fires right as the fade/scale finishes.
const LEAVE_MS = 260;

export default function CountrySelect() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);
  const [picked, setPicked] = useState(null);

  function selectCountry(country) {
    if (leaving) return;
    setPicked(country);
    setLeaving(true);
    try {
      window.localStorage.setItem("pf-country", country);
    } catch {
      /* localStorage unavailable — selection just won't persist */
    }
    // Also remember it via cookie — the header's globe icon reads this to
    // show the saved country in a tooltip on hover.
    writeCookie("pf_country", country);
    setTimeout(() => navigate("/"), LEAVE_MS);
  }

  return (
    <>
      <CloseButton />

      <section
        className={`relative w-full bg-white px-6 pb-20 pt-14 transition-all duration-[260ms] ease-out sm:px-10 sm:pt-16 ${
          leaving ? "translate-y-2 scale-[0.99] opacity-0" : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-[1300px] columns-2 gap-x-10 sm:columns-3 lg:columns-4">
          {REGIONS.map((group) => (
            <div key={group.region} className="mb-12 break-inside-avoid">
              <p className="mb-4 text-[15px] font-semibold text-ink">
                {group.region}
              </p>
              <ul className="space-y-5 list-none p-0">
                {group.countries.map((country) => (
                  <li key={country.name}>
                    <button
                      type="button"
                      onClick={() => selectCountry(country.name)}
                      className={`block w-full rounded-md px-1.5 py-1 text-left transition duration-150 ease-out hover:bg-gray-100 hover:scale-[1.03] active:scale-[0.97] ${
                        picked === country.name ? "scale-[0.97] bg-gray-100" : ""
                      }`}
                    >
                      <span className="block text-[15px] font-medium text-ink">
                        {country.name}
                      </span>
                      <span className="mt-0.5 block text-[12px] text-ink-muted">
                        {country.langs.join("   ")}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
