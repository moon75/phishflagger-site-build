// Single source of truth for primary navigation.
// Header (desktop + mobile) renders from this; routes in App.jsx mirror it.

export const nav = [
  { label: "Home", href: "/" },
  { label: "Join", href: "/join" },
  {
    label: "Help",
    children: [
      { label: "Support", href: "/contact" },
      { label: "PhishFlagger.org", href: "/phishflagger-org" },
      { label: "Kickstarter", href: "/help/kickstarter" },
      { label: "Email - Endorse Us", href: "/help/endorse-us" },
      { label: "Telecom - Endorse Us", href: "/help/telecom-endorse-us" },
      { label: "Telecom - Sign Petition", href: "/petition" },
      { label: "FAQ", href: "/about/faq" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Video", href: "/about/video" },
      { label: "Press", href: "/about/press" },
      { label: "Phishing News", href: "/News" },
      { label: "Team", href: "/about/team" },
      { label: "Intellectual Property", href: "/about/intellectual-property" },
      { label: "Blog", href: "/about/blog" },
      { label: "Numbering History", href: "/about/numbering-history" },
      { label: "Phishing Ends", href: "/about/phishing-ends" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
