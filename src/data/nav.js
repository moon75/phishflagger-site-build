// Single source of truth for primary navigation.
// Header (desktop + mobile) renders from this; routes in App.jsx mirror it.

export const nav = [
  { label: "Home", href: "/" },
  { label: "Email", href: "/email" },
  { label: "Telecom", href: "/join/telecom" },
  {
    label: "Help",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Support Desk", href: "/help/support-desk" },
      { label: "PhishFlagger.org", href: "/phishflagger-org" },
      { label: "Kickstarter", href: "/help/kickstarter" },
      { label: "FAQ", href: "/about/faq" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Video", href: "/about/video1" },
      { label: "Press", href: "/about/press" },
      { label: "Phishing News", href: "/News" },
      { label: "Team", href: "/about/team" },
      { label: "Intellectual Property", href: "/about/intellectual-property" },
      { label: "Blog", href: "/about/blog" },
      { label: "Numbering History", href: "/about/numbering-history" },
      { label: "Phishing Ends", href: "/about/phishing-ends" },
    ],
  },
];
