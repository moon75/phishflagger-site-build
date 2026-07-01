// Single source of truth for primary navigation.
// Header (desktop + mobile) renders from this; routes in App.jsx mirror it.

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Join",
    children: [
      { label: "Email - Domain", href: "/join/email-domain" },
      { label: "Email - Individual", href: "/join/email-individual" },
      { label: "Email - Marketing", href: "/join/email-marketing" },
      { label: "Telecom", href: "/join/telecom" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Video", href: "/about/video" },
      { label: "Press", href: "/about/press" },
      { label: "Team", href: "/about/team" },
      { label: "IP", href: "/about/ip" },
      { label: "FAQ", href: "/about/faq" },
      { label: "Blog", href: "/about/blog" },
      { label: "Fiction", href: "/about/fiction" },
    ],
  },
  {
    label: "Help",
    children: [
      { label: "PhishFlagger.org", href: "/phishflagger-org" },
      { label: "Kickstarter", href: "/about/kickstarter" },
      { label: "Endorse Us", href: "/about/endorse-us" },
      { label: "Telecom - Endorse Us", href: "/endorse-us" },
      { label: "Telecom - Sign Petition", href: "/petition" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
