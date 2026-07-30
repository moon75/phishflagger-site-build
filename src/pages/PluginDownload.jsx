import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function PluginDownload() {
  const [searchParams] = useSearchParams();
  const [accepted, setAccepted] = useState(false);
  const selected = searchParams.get("download") || "";
  const client = searchParams.get("client") || "";
  const selectedDownload = [client, selected].filter(Boolean).join(" ");

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[28px] font-semibold leading-tight text-ink sm:text-[36px]">
          You have selected: {selectedDownload}
        </h1>

        <h2 className="mt-12 text-[24px] font-semibold text-ink sm:text-[30px]">
          Terms Of Service
        </h2>

        <div className="mt-6 min-h-[260px] w-full rounded-lg border-2 border-gray-300 bg-white p-6 text-[16px] leading-[1.6] text-ink">
          Plug-in placeholder text for Terms of Service
        </div>

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
          data-download={selectedDownload}
          className="mt-8 rounded-lg bg-[#585858] px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Continue with Download
        </button>
      </div>
    </section>
  );
}
