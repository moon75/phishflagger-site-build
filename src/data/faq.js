// Single source of truth for FAQ content — every page that renders an FAQ
// section imports this list. Edit here once; it updates everywhere.

export const FAQ_CATEGORIES = [
  {
    name: "General",
    items: [
      {
        q: "Why PhishFlagger?",
        a: "PhishFlagger helps bulk email senders — banks, insurance companies, financial institutions — and friends from falling victim to impersonation by providing authenticated, human compatible numbered communications (The PhishCounter) that assure recipients of message legitimacy.",
      },
      {
        q: "How do outgoing emails get numbered?",
        a: "Numbering happens at the sending domain or from a plug in. When an email leaves the sender's server or Client, PhishFlagger inserts the next sequential number into the message header/subject line before delivery, so every recipient receives a counter-stamped email.\n\nBeyond phishing defense, sequential numbering improves deliverability trust, helps recipients track and audit communications, reduces support load from impersonation incidents.",
      },
      {
        q: "How does PhishFlagger email numbering work?",
        a: "Each outgoing email is tagged with the next number in the sender’s sequence (the PhishCounter) and placed in the subject line. The recipient — or their email client — can confirm the number is in sequence; any out-of-sequence or missing number is automatically flagged as suspicious. Additionally we certify the sending domain or email.",
      },
      {
        q: "How does PhishFlagger help keep my email contacts safe from email phishing and fraud?",
        a: "PhishFlagger was created to protect consumers and help protect form brand destruction by imposters. By sequentially numbering digital communications, recipients can immediately identify legitimate messages and spot fraudulent ones that lack the expected sequence number.",
      },
      {
        q: "Do email recipients need to install anything?",
        a: "For our Domain customers nothing at all. The PhishCounter number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side. For Individuals a Plug-in or compliant Email client is required.",
      },
      {
        q: "Can a phisher just replicate the sequence number to fool the system?",
        a: "Virtually impossible. The PhishCounter number is specific to each individual sender-recipient pair and is only known between the legitimate sender and that particular recipient. A phisher blasting emails to thousands of people cannot know the unique sequence number each individual is expecting — making it effectively impossible to craft a convincing fake at scale.",
      },
      {
        q: "What happens if a recipient forgets their last PhishCounter number?",
        a: "Install our Plug-In, use and Email from an PhishFlagger enabled Domain or manually look back at the most recent legitimate email from that sender to check the last number used. For first communications contact the sender through a trusted channel — by phone or via the company’s official website — to confirm whether the email is genuine. PhishFlagger is an added layer of protection that works alongside existing email safety best practices.",
      },
    ],
  },
  {
    name: "Email - Domain Appliance",
    items: [
      {
        q: "Do I need to change my DNS settings, MX records, or email provider?",
        a: "Yes, DNS or MX changes are required. PhishFlagger numbering is implemented at the application or sending layer — a back-end process that inserts the sequential counter into outgoing subject lines before delivery. Your existing email infrastructure requires minor change, and yes you can keep your provider. Perfect for medium and large companies.",
      },
      {
        q: "Do email recipients need to install anything?",
        a: "For our Domain customers nothing at all. The PhishCounter number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side.",
      },
      {
        q: "How does PhishFlagger™ authenticate corporate email?",
        a: "PhishFlagger™ uses sender and domain information together with the PhishCounter™ to provide additional verification that an email is associated with an authorized sender.",
      },
      {
        q: "Does PhishFlagger™ replace existing email security?",
        a: "No. PhishFlagger™ is designed to complement existing email security and authentication technologies by adding another layer of verification.",
      },
      {
        q: "Can PhishFlagger™ help protect our brand from impersonation?",
        a: "PhishFlagger™ provides an additional method for recipients to distinguish legitimate communications from messages attempting to impersonate your organization.",
      },
      {
        q: "Can PhishFlagger™ work with our existing email infrastructure?",
        a: "PhishFlagger™ is designed to work alongside existing email systems and security technologies. Specific implementation requirements may vary depending on your organization's environment.",
      },
    ],
  },
  {
    name: "Email - Plug-In Pro",
    items: [
      {
        q: "Do I need to change my DNS settings, MX records, or email provider?",
        a: "No DNS or MX changes are required. PhishFlagger numbering is implemented at the application or sending layer — a back-end process that inserts the sequential counter into outgoing subject lines before delivery. Your existing email infrastructure remains unchanged. All you require is the plug-in for your client. Perfect for individuals and small companies.",
      },
      {
        q: "Do email recipients need to install anything?",
        a: "No. The PhishCounter number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side. The sender needs the Plug-In or a compliant email client.",
      },
      {
        q: "What is the difference between the FREE and PRO Plug-In?",
        a: "Nothing, Once you install the Plug-In you can use Free and/or Pro emails.\n\nFREE\nEnable PhishFlagger email protection from the following Domains:\n\ngmail.com\nyahoo.com\noutlook.com\nhotmail.com\nlive.com\naol.com\nSee full list here\n\nPRO\nPurchase PhishFlagger email protection for ANY email address.\n\nExample:\nsally@joespluming.com\njoe@joespluming.com\nray@joespluming.com\nbob@acme.com\nmuhe@acme.com\ninfo@acme.com\n\nYou can enable your Plugin with unlimited* FREE or PRO accounts.\nEach Email requires a key. Get your keys here.",
      },
      {
        q: "How does PhishFlagger™ authenticate corporate email?",
        a: "PhishFlagger™ uses sender and domain information together with the PhishCounter™ to provide additional verification that an email is associated with an authorized sender.",
      },
      {
        q: "Does PhishFlagger™ replace existing email security?",
        a: "No. PhishFlagger™ is designed to complement existing email security and authentication technologies by adding another layer of verification.",
      },
      {
        q: "Can PhishFlagger™ help protect our brand from impersonation?",
        a: "PhishFlagger™ provides an additional method for recipients to distinguish legitimate communications from messages attempting to impersonate your organization.",
      },
      {
        q: "Can PhishFlagger™ work with our existing email infrastructure?",
        a: "PhishFlagger™ is designed to work alongside existing email systems and security technologies. Specific implementation requirements may vary depending on your organization's environment.",
      },
    ],
  },
  {
    name: "Email - Plug-In (Free)",
    items: [
      {
        q: "Do email recipients need to install anything?",
        a: "For our Domain customers nothing at all. The PhishCounter number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side. For Individuals a Plug-in or compliant Email client is required.",
      },
      {
        q: "What is the difference between the FREE and CORPORATE Plug-In?",
        a: "Nothing, Once you install the Plug-In you can use Free and/or Corporate emails.\n\nFREE\nEnable PhishFlagger email protection from the following Domains:\n\ngmail.com\nyahoo.com\noutlook.com\nhotmail.com\nlive.com\naol.com\nSee full list here\n\nCORPORATE\nPurchase PhishFlagger email protection for ANY email address.\n\nExample:\nsally@joespluming.com\njoe@joespluming.com\nray@joespluming.com\nbob@acme.com\nmuhe@acme.com\ninfo@acme.com\n\nYou can enable your Plugin with unlimited* FREE or CORPORATE accounts.\nEach Email requires a key. Get your keys here.",
      },
      {
        q: "How does the plug-in work?",
        a: "The plug-in works with supported email services to provide PhishFlagger™ verification within the user's email experience, helping identify whether a message appears to be from the expected sender.",
      },
      {
        q: "Can I use the plug-in with any email service?",
        a: "Availability depends on the email service and platform being supported by PhishFlagger™. Check the current list of supported platforms before installing.",
      },
      {
        q: "Does the plug-in guarantee that an email is safe?",
        a: "No security solution can guarantee that every fraudulent message will be detected. PhishFlagger™ provides an additional layer of verification to help users make more informed decisions about the messages they receive.",
      },
      {
        q: "Why should I use PhishFlagger™ if my email provider already has spam protection?",
        a: "Spam filters and security systems are important, but PhishFlagger™ approaches the problem from another angle by helping users verify the identity and authenticity of communications.",
      },
    ],
  },
  {
    name: "Email - Marketing",
    items: [
      {
        q: "Does PhishFlagger work with platforms like Mailchimp, Salesforce, or HubSpot?",
        a: "Yes. The numbering process is implemented at the sending domain or by the Plug-In.",
      },
      {
        q: "Why should marketers use PhishFlagger™?",
        a: "PhishFlagger™ can help marketers establish greater trust in their email communications by giving recipients an additional way to recognize legitimate messages from their brand.",
      },
      {
        q: "How does PhishFlagger™ help protect a brand's reputation?",
        a: "When customers can distinguish legitimate communications from fraudulent messages, it becomes more difficult for scammers to successfully impersonate a brand through email.",
      },
      {
        q: "Does PhishFlagger™ work with email marketing campaigns?",
        a: "PhishFlagger™ can be incorporated into supported email marketing communications, allowing organizations to add authentication and verification to customer-facing messages.",
      },
      {
        q: "Will PhishFlagger™ change the way customers receive marketing emails?",
        a: "PhishFlagger™ is designed to add verification without requiring customers to change the fundamental way they communicate with your brand.",
      },
    ],
  },
  {
    name: "Telecom",
    items: [
      {
        q: "When will this be available.",
        a: "It depends on your telecom provider and your country's regulator.\n\nHelp stop phone fraud in your country. Sign our Petition",
      },
      {
        q: "What is PhishFlagger™ for Telecom?",
        a: "PhishFlagger™ for Telecom extends the principles of sender verification beyond traditional email to help establish greater trust in telecommunications and messaging communications.",
      },
      {
        q: "Can PhishFlagger™ be used with SMS and text messages?",
        a: "PhishFlagger™ is designed to support trusted communications across telecom and messaging environments, including supported SMS and text-based communications.",
      },
      {
        q: "Can telecom providers use PhishFlagger™ to protect their customers?",
        a: "Yes. Telecom providers can use PhishFlagger™ as an additional layer of authentication to help establish trusted communications with their subscribers and customers.",
      },
      {
        q: "Can PhishFlagger™ work with messaging platforms?",
        a: "PhishFlagger™ is designed with broader communications in mind and can support authentication across supported messaging and communications platforms.",
      },
    ],
  },
];
