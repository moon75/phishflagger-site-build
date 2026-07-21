// Single source of truth for primary navigation.
// Header (desktop + mobile) renders from this; routes in App.jsx mirror it.

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Join",
    children: [
      { label: "Email - Free Plug-In", href: "/join/email-free-plug-in" },
      { label: "Email - Corporate Plug-In", href: "/join/email-plug-in" },
      { label: "Email - Corporate Domain", href: "/join/email-domain" },
      { label: "Email - Marketing", href: "/join/email-marketing" },
      { label: "Telecom", href: "/join/telecom" },
    ],
  },
  {
    label: "Help",
    children: [
      { label: "PhishFlagger.org", href: "/phishflagger-org" },
      { label: "Kickstarter", href: "/help/kickstarter" },
      { label: "Email - Endorse Us", href: "/help/endorse-us" },
      { label: "Telecom - Supporters", href: "/help/telecom-supporters" },
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
      { label: "IP", href: "/about/ip" },
      { label: "Blog", href: "/about/blog" },
      { label: "Numbering History", href: "/about/numbering-history" },
      { label: "Fiction", href: "/about/fiction" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
