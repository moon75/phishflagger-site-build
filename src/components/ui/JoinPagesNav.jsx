import PageCycleArrows from "./PageCycleArrows.jsx";

// The 4 related "Join" plan pages, in gallery order. `current` (passed by
// each page) is this page's index here.
const JOIN_PAGES = [
  { label: "Plug-In Free", to: "/join/email-free-plug-in" },
  { label: "Plug-In Pro", to: "/join/pro" },
  { label: "Domain", to: "/join/domain" },
  { label: "Marketing", to: "/join/email-marketing" },
];

// Left/right arrows that flip between the 4 Join plan pages like a
// gallery, wrapping around at either end. Sits just below CloseButton.
export default function JoinPagesNav({ current }) {
  return <PageCycleArrows pages={JOIN_PAGES} current={current} />;
}
