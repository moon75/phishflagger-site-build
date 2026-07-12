// Single source of truth for primary navigation.
// Header (desktop + mobile) renders from this; routes in App.jsx mirror it.

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Join",
    children: [
      { label: "Email - Domain", href: "/join/email-domain" },
      { label: "Email - Plug-In", href: "/join/email-individual" },
      { label: "Email - Marketing", href: "/join/email-marketing" },
      { label: "Telecom", href: "/join/telecom" },
    ],
  },
  {
    label: "Help",
    children: [
      { label: "PhishFlagger.org", href: "/phishflagger-org" },
      { label: "Kickstarter", href: "/about/kickstarter" },
      { label: "Endorse Us", href: "/help/endorse-us" },
      { label: "Telecom - Endorse Us", href: "/endorse-us" },
      { label: "Telecom - Sign Petition", href: "/petition" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Phishing News", href: "/News" },
      { label: "Video", href: "/about/video" },
      { label: "Press", href: "/about/press" },
      { label: "Team", href: "/about/team" },
      { label: "IP", href: "/about/ip" },
      { label: "FAQ", href: "/about/faq" },
      { label: "Blog", href: "/about/blog" },
      { label: "Numbering History", href: "/about/numbering-history" },
      { label: "Fiction", href: "/about/fiction" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
