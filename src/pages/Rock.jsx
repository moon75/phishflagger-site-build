import { useState } from "react";
import CloseButton from "../components/ui/CloseButton.jsx";

const FORMSPARK_ENDPOINT = "https://submit-form.com/HnXtQNLRA";

// TODO: move this behind a real password page — this is just a cheap
// speed-bump for now, not real security. Anyone reading the client bundle
// can see it.
const SECRET_PASSCODE = "007";

// Formspark can't accept file attachments, so pictures upload straight to
// Uploadcare and only the resulting CDN URL is sent to Formspark as text.
const UPLOADCARE_PUBLIC_KEY = "1c944c79dccda460f80e";

async function uploadToUploadcare(file) {
  const data = new FormData();
  data.append("UPLOADCARE_PUB_KEY", UPLOADCARE_PUBLIC_KEY);
  data.append("UPLOADCARE_STORE", "1");
  data.append("file", file);

  const res = await fetch("https://upload.uploadcare.com/base/", {
    method: "POST",
    body: data,
  });
  if (!res.ok) throw new Error("Uploadcare upload failed");
  const json = await res.json();
  return `https://ucarecdn.com/${json.file}/`;
}

export default function Rock() {
  const [images, setImages] = useState([null, null, null]);
  const [imageUrls, setImageUrls] = useState([null, null, null]);
  const [imageUploading, setImageUploading] = useState([false, false, false]);
  const [user, setUser] = useState("");
  const [passcode, setPasscode] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [other, setOther] = useState("");
  const [status, setStatus] = useState("idle");

  const setAt = (setter) => (idx, value) =>
    setter((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  const setImageAtIdx = setAt(setImages);
  const setImageUrlAtIdx = setAt(setImageUrls);
  const setImageUploadingAtIdx = setAt(setImageUploading);

  const setImageAt = (idx, file) => {
    setImageAtIdx(idx, file);
    setImageUrlAtIdx(idx, null);
    if (!file) return;

    setImageUploadingAtIdx(idx, true);
    uploadToUploadcare(file)
      .then((url) => setImageUrlAtIdx(idx, url))
      .catch(() => setImageUrlAtIdx(idx, null))
      .finally(() => setImageUploadingAtIdx(idx, false));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPARK_ENDPOINT || imageUploading.some(Boolean)) return;

    if (passcode !== SECRET_PASSCODE) {
      setStatus("decoy");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          image1: imageUrls[0] ?? "",
          image2: imageUrls[1] ?? "",
          image3: imageUrls[2] ?? "",
          user,
          passcode,
          from,
          to,
          other,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <CloseButton />
      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          <form onSubmit={onSubmit} className="space-y-8 sm:space-y-10">
            {/* Picture boxes — .5x size */}
            <div className="mx-auto grid max-w-[50%] grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
              {images.map((file, idx) => (
                <PictureBox
                  key={idx}
                  file={file}
                  uploading={imageUploading[idx]}
                  onFile={(f) => setImageAt(idx, f)}
                />
              ))}
            </div>

            {/* User + passcode */}
            <div className="mx-auto grid max-w-[420px] grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-2 block text-[14px] font-semibold text-ink">
                  User
                </span>
                <input
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="w-full rounded-md bg-[#f4f5f8] px-3 py-2 text-[15px] text-ink focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[14px] font-semibold text-ink">
                  Passcode
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="\d{6}"
                  maxLength={6}
                  value={passcode}
                  onChange={(e) =>
                    setPasscode(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  className="w-full rounded-md bg-[#f4f5f8] px-3 py-2 text-[15px] text-ink focus:outline-none"
                />
              </label>
            </div>

            {/* Big text boxes */}
            <div className="space-y-6">
              <BigTextBox label="from" value={from} onChange={setFrom} />
              <BigTextBox label="to" value={to} onChange={setTo} />
              <BigTextBox label="other" value={other} onChange={setOther} />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={
                  status === "submitting" || imageUploading.some(Boolean)
                }
                className="cursor-pointer rounded-lg bg-[#3d3d3d] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#2b2b2b] disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Sending..."
                  : imageUploading.some(Boolean)
                    ? "Uploading pictures..."
                    : "Send"}
              </button>
            </div>
            {status === "error" && (
              <p className="text-center text-[14px] font-medium text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
            {status === "success" && (
              <p className="text-center text-[14px] font-medium text-green-600">
                Sent.
              </p>
            )}
            {status === "decoy" && (
              <p className="text-center text-[14px] font-medium text-ink">
                Thank you.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function PictureBox({ file, uploading, onFile }) {
  const [dragOver, setDragOver] = useState(false);
  const previewUrl = file ? URL.createObjectURL(file) : null;
  const inputId = useState(
    () => `pic-${Math.random().toString(36).slice(2)}`
  )[0];

  return (
    <div className="relative">
      <label
        htmlFor={inputId}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          onFile(e.dataTransfer.files?.[0] ?? null);
        }}
        className={`flex aspect-square w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-colors ${
          dragOver
            ? "border-[#2a6df4] bg-blue-50"
            : "border-gray-300 bg-[#f4f5f8] hover:border-gray-400"
        }`}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Uploaded"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="px-4 text-center text-[13px] text-ink-muted">
            Drag a picture here or click to upload
          </span>
        )}
        <input
          id={inputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onFile(e.target.files?.[0] ?? null)}
        />
      </label>
      {uploading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40 text-[13px] font-medium text-white">
          Uploading...
        </div>
      )}
      {previewUrl && !uploading && (
        <button
          type="button"
          onClick={() => onFile(null)}
          aria-label="Remove picture"
          className="absolute right-2 top-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="h-3.5 w-3.5"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      )}
    </div>
  );
}

function BigTextBox({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[15px] font-semibold capitalize text-ink">
        {label}
      </span>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-md bg-[#f4f5f8] px-4 py-3 text-[15px] text-ink focus:outline-none"
      />
    </label>
  );
}
