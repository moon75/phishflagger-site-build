import { useState } from "react";
import CloseButton from "../components/ui/CloseButton.jsx";
import {
  GLOBAL_KNOBS,
  loadGlobalKnobs,
  saveGlobalKnob,
} from "../lib/globalKnobs.js";

// Hidden, unlinked live-editing page. One text box per hover-grow setting —
// type a number (5 means 5%), it applies to the live site immediately (via
// a CSS variable on <html>) and is remembered in this browser for next
// time. No save button, no page reload needed.
export default function Global2() {
  const saved = loadGlobalKnobs();
  const [values, setValues] = useState(() =>
    Object.fromEntries(
      GLOBAL_KNOBS.map((k) => [k.key, saved[k.key] ?? k.defaultPercent]),
    ),
  );

  function handleChange(knob, raw) {
    setValues((prev) => ({ ...prev, [knob.key]: raw }));

    const percent = Number(raw);
    if (raw === "" || Number.isNaN(percent)) return;

    document.documentElement.style.setProperty(
      knob.cssVar,
      String(1 + percent / 100),
    );
    saveGlobalKnob(knob.key, percent);
  }

  return (
    <>
      <CloseButton />
      <div className="mx-auto max-w-[640px] px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
          Global 2
        </h1>
        <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">
          Type a number (5 means 5%). Changes apply to the live site right
          away, in this browser.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          {GLOBAL_KNOBS.map((knob) => (
            <label key={knob.key} className="flex flex-col gap-1.5">
              <span className="text-[14px] font-semibold text-ink">
                {knob.label}
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  inputMode="decimal"
                  value={values[knob.key]}
                  onChange={(e) => handleChange(knob, e.target.value)}
                  className="w-24 rounded-lg border border-line px-3 py-2 text-[15px] text-ink focus:border-brand focus:outline-none"
                />
                <span className="text-[14px] text-ink-muted">%</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
