// Single source of truth for FAQ content — every page that renders an FAQ
// section imports this list. Edit here once; it updates everywhere.

export const FAQ_CATEGORIES = [
  {
    name: "PhishFlagger General",
    items: [
      {
        q: "Why PhishFlagger™?",
        a: "PhishFlagger™ helps bulk email senders — banks, insurance companies, financial institutions — and friends from falling victim to impersonation by providing authenticated, human compatible numbered communications (The PhishCounter™) that assure recipients of message legitimacy.",
      },
      {
        q: "What is PhishFlagger™ email numbering?",
        a: "PhishFlagger™ email numbering is a patented protocol that assigns a unique sequential number to each outgoing email from a sender domain, making every legitimate message individually identifiable to the recipient. We also will offer Plug In’s for Individual use.",
      },
      {
        q: "What does PhishFlagger™ do for me?",
        a: "PhishFlagger™ plug-in or appliance assigns numbers to outgoing emails and verifies incoming numbers, for your security.",
      },
      {
        q: "How does PhishFlagger™ email numbering work?",
        a: "Each outgoing email is tagged with the next number in the sender’s sequence (the PhishCounter™) and placed in the subject line. The recipient — or their email client — can confirm the number is in sequence; any out-of-sequence or missing number is automatically flagged as suspicious. Additionally we certify the sending domain or email.",
      },
      {
        q: "How do outgoing emails get numbered?",
        a: "Numbering happens at the sending domain or from a plug in. When an email leaves the sender's server or Client, PhishFlagger™ inserts the next sequential number into the message header/subject line before delivery, so every recipient receives a counter-stamped email.",
      },
      {
        q: "What are some other benefits of PhishFlagger™ email numbering?",
        a: "Beyond phishing defense, sequential numbering improves deliverability trust, helps recipients track and audit communications, reduces support load from impersonation incidents.",
      },
      {
        q: "How does PhishFlagger™ help keep my email contacts safe from email phishing and fraud?",
        a: "PhishFlagger™ was created to protect consumers and help protect form brand destruction by imposters. By sequentially numbering digital communications, recipients can immediately identify legitimate messages and spot fraudulent ones that lack the expected sequence number.",
      },
      {
        q: "Do email recipients need to install anything?",
        a: "For our Domain customers nothing at all. The PhishCounter™ number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side. For Individuals a Plug-in or compliant Email client is required.",
      },
      {
        q: "Can a phisher just replicate the sequence number to fool the system?",
        a: "Virtually impossible. The PhishCounter™ number is specific to each individual sender-recipient pair and is only known between the legitimate sender and that particular recipient. A phisher blasting emails to thousands of people cannot know the unique sequence number each individual is expecting — making it effectively impossible to craft a convincing fake at scale.",
      },
      {
        q: "Is PhishFlagger™ email numbering patented?",
        a: "The PhishFlagger™ email numbering method is a patented process.",
      },
      {
        q: "How do I get a license, and how much does it cost?",
        a: "Licensing options depend on the size and type of your organization. PhishFlagger™ offers plans for individual users, businesses licensing a domain, and email marketing organizations. Visit our Join page or contact us directly to discuss the right plan for your needs.",
      },
      {
        q: "What happens if a recipient forgets their last PhishCounter™ number?",
        a: "Install our Plug-In, use and Email from an PhishFlagger enabled Domain or manually look back at the most recent legitimate email from that sender to check the last number used. For first communications contact the sender through a trusted channel — by phone or via the company’s official website — to confirm whether the email is genuine. PhishFlagger™ is an added layer of protection that works alongside existing email safety best practices.",
      },
    ],
  },
  {
    name: "PhishFlagger Email - Domain",
    items: [
      {
        q: "Do I need to change my DNS settings, MX records, or email provider?",
        a: "Plug-in: No DNS or MX changes are required. PhishFlagger™ numbering is implemented at the application or sending layer — a back-end process that inserts the sequential counter into outgoing subject lines before delivery. Your existing email infrastructure remains unchanged. All you require is plug-in for your client. Perfect for individual and small companies.\n\nDomain: Yes DNS or MX changes are required. PhishFlagger™ numbering is implemented at the application or sending layer — a back-end process that inserts the sequential counter into outgoing subject lines before delivery. Your existing email infrastructure requires minor change, and yes you can keep your provider. Perfect for medium and large companies.",
      },
      {
        q: "Do email recipients need to install anything?",
        a: "For our Domain customers nothing at all. The PhishCounter™ number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side. For Individuals a Plug-in or compliant Email client is required.",
      },
    ],
  },
  {
    name: "PhishFlagger Email - Plug-In",
    items: [
      {
        q: "Do email recipients need to install anything?",
        a: "For our Domain customers nothing at all. The PhishCounter™ number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side. For Individuals a Plug-in or compliant Email client is required.",
      },
    ],
  },
  {
    name: "PhishFlagger Email - Marketing",
    items: [
      {
        q: "Does PhishFlagger™ work with platforms like Mailchimp, Salesforce, or HubSpot?",
        a: "Yes. The numbering process is implemented at the sending domain or by the Plug-In.",
      },
    ],
  },
  {
    name: "PhishFlagger Telecom",
    items: [],
  },
];
