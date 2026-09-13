import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

export default function PluginDownload() {
  const [searchParams] = useSearchParams();
  const [accepted, setAccepted] = useState(false);
  const selected = searchParams.get("download") || "";
  const client = searchParams.get("client") || "";
  const selectedDownload = [client, selected].filter(Boolean).join(" ");

  return (
    <>
      <CloseButton to="/download" />

      <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[28px] font-semibold leading-tight text-ink sm:text-[36px]">
            You have selected: {selectedDownload}
          </h1>

          <h2 className="mt-12 text-[24px] font-semibold text-ink sm:text-[30px]">
            Terms Of Service
          </h2>

          <div className="mt-6 min-h-[260px] w-full rounded-lg border-2 border-gray-300 bg-white p-6 text-[16px] leading-[1.6] text-ink">
            Available Soon.
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

          <div className="relative mt-8 inline-flex">
            <span className="absolute -top-4 -left-6 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white sm:text-[10px]">
              Coming Soon
            </span>
            <button
              type="button"
              disabled
              data-download={selectedDownload}
              className="cursor-not-allowed rounded-lg bg-[#585858] px-7 py-3 text-[14px] font-semibold text-white opacity-45"
            >
              Continue with Download
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
