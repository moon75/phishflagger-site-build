// Single source of truth for primary navigation.
// Header (desktop + mobile) renders from this; routes in App.jsx mirror it.

export const nav = [
  { label: "Home", href: "/" },
  { label: "Video", href: "/about/video1" },
  { label: "Email", href: "/email" },
  { label: "Telecom", href: "/join/telecom" },
  { label: "Help", href: "/help" },
  {
    label: "About",
    children: [
      { label: "Press", href: "/about/press" },
      { label: "Team", href: "/about/team" },
      { label: "Intellectual Property", href: "/about/intellectual-property" },
      { label: "Blog", href: "/about/blog" },
      { label: "Numbering History", href: "/about/numbering-history" },
      { label: "Phishing Ends - Fiction", href: "/about/phishing-ends" },
      { label: "Phishing News", href: "/News" },
    ],
  },
];
