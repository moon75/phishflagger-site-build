import { useEffect, useRef, useState } from "react";
import CloseButton from "../components/ui/CloseButton.jsx";

const JOIN_FREE_URL = "https://join.phishflagger.com/individual/";

// Cross-origin iframes can't have their content height read directly (the
// browser blocks it), so true auto-resize needs the embedded page itself to
// report its height via postMessage. It doesn't do that today. Once it (or
// whatever backend replaces it) adds a couple of lines like:
//
//   new ResizeObserver(() => {
//     window.parent.postMessage(
//       { source: "phishflagger-join-free", height: document.body.scrollHeight },
//       "*"
//     );
//   }).observe(document.body);
//
// ...this page will pick it up automatically and resize live, no further
// changes needed here. Until then it falls back to a fixed responsive height.
const FALLBACK_HEIGHT = "clamp(650px, 110vh, 1100px)";

export default function JoinFreeIframe() {
  const iframeRef = useRef(null);
  const [liveHeight, setLiveHeight] = useState(null);

  useEffect(() => {
    const onMessage = (event) => {
      const data = event.data;
      if (
        data &&
        data.source === "phishflagger-join-free" &&
        Number.isFinite(data.height) &&
        event.source === iframeRef.current?.contentWindow
      ) {
        setLiveHeight(data.height);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-content">
          <h1 className="mb-8 text-center text-[28px] font-bold leading-tight tracking-tight text-ink sm:text-[34px]">
            Join Free
          </h1>
          <div className="mx-auto w-full max-w-[650px] overflow-hidden rounded-2xl border-2 border-black bg-white">
            <iframe
              ref={iframeRef}
              src={JOIN_FREE_URL}
              title="Join PhishFlagger"
              className="block w-full transition-[height] duration-200 ease-out"
              style={{
                height: liveHeight ? `${liveHeight}px` : FALLBACK_HEIGHT,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
