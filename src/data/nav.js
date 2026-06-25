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
  { label: "PhishFlagger.org", href: "/phishflagger-org" },
  {
    label: "About",
    children: [
      { label: "Kickstarter", href: "/about/kickstarter" },
      { label: "Team", href: "/about/team" },
      { label: "Press", href: "/about/press" },
      { label: "Video", href: "/about/video" },
      { label: "IP", href: "/about/ip" },
      { label: "FAQ", href: "/about/faq" },
      { label: "Blog", href: "/about/blog" },
      { label: "News", href: "/about/news" },
      { label: "Fiction Fund Reading", href: "/about/fiction" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
