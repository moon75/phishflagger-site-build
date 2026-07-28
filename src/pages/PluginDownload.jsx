import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function PluginDownload() {
  const [searchParams] = useSearchParams();
  const [accepted, setAccepted] = useState(false);
  const selected = searchParams.get("download") || "";

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[28px] font-semibold leading-tight text-ink sm:text-[36px]">
          You have selected: {selected}
        </h1>

        <h2 className="mt-12 text-[24px] font-semibold text-ink sm:text-[30px]">
          Terms Of Service
        </h2>

        <label className="mt-8 flex cursor-pointer items-center gap-3 text-[16px] text-ink">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="h-5 w-5 accent-brand"
          />
          <span>I accept the terms of Service</span>
        </label>

        <button
          type="button"
          disabled={!accepted}
          data-download={selected}
          className="mt-8 rounded-lg bg-[#585858] px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Continue with Download
        </button>
      </div>
    </section>
  );
}
