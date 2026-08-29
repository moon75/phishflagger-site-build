// Hidden, unlinked audit page — not in nav.js, not in any sitemap column.
// Read-only snapshot of the site's actual current values (font sizes,
// hover-scale percentages, etc.) so inconsistencies are visible in one
// place before picking a single standard for each. Nothing here changes
// the live site — it's documentation, kept next to the code it describes
// so it can be updated by hand as things change.
//
// Owner's running list of standards (verbatim, keep this in sync):
//   Text-size-ex-title-home-page-others      5
//   Text-size-ex-telecom-bullets-text-others 5
//   text-size-on-telecom-page                5   (DONE — .telecom-body-text in index.css)
//   title-size-on-telecom-page               5   (DONE — .telecom-title in index.css)
//   percent-increase-SQUARE-ICON-LINKS       10%
//   percent-increase-BUTTONS                 10%
//   percent-increase-FOOTER-PICTURES/gif     10%
//   percent-increase-HOME-TOP-PICTURES/gif   10%
//   pane-vertical-spacing                    py-14 → sm:py-20 (the standard)
//   pane-spacing-scale-down                  1 → .8 (Home Human/Digital gap — DONE)

function Section({ title, id, children }) {
  return (
    <section id={id} className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <h2 className="text-[20px] font-bold tracking-tight text-ink sm:text-[24px]">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Row({ where, value, note }) {
  return (
    <tr className="border-b border-line last:border-b-0">
      <td className="py-2.5 pr-4 align-top text-[13px] text-ink-muted sm:text-[14px]">
        {where}
      </td>
      <td className="py-2.5 pr-4 align-top font-mono text-[13px] font-semibold text-ink sm:text-[14px]">
        {value}
      </td>
      <td className="py-2.5 align-top text-[13px] text-ink-muted sm:text-[14px]">
        {note}
      </td>
    </tr>
  );
}

function Table({ children }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-line bg-[#f7f8fa] text-left">
            <th className="py-2.5 pr-4 pl-3 text-[12px] font-bold uppercase tracking-wide text-ink-muted">
              Where
            </th>
            <th className="py-2.5 pr-4 text-[12px] font-bold uppercase tracking-wide text-ink-muted">
              Value
            </th>
            <th className="py-2.5 pr-3 text-[12px] font-bold uppercase tracking-wide text-ink-muted">
              Note
            </th>
          </tr>
        </thead>
        <tbody className="px-3">{children}</tbody>
      </table>
    </div>
  );
}

function Flag({ children }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-[#fff1e0] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#a15c00]">
      {children}
    </span>
  );
}

export default function GlobalSettings() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-[12px] font-bold uppercase tracking-wide text-brand">
        Internal — not linked anywhere
      </p>
      <h1 className="mt-2 text-[32px] font-bold tracking-tight text-ink sm:text-[40px]">
        Global Settings Audit
      </h1>
      <p className="mt-3 max-w-[640px] text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
        A snapshot of what the site actually does right now for each of the
        standards you're tracking — grouped by category, one row per place
        it shows up. Read-only: editing this page's copy doesn't change the
        live site. Rows marked <Flag>inconsistent</Flag> are places where the
        same kind of element uses different values on different pages.
      </p>

      {/* Owner's target numbers — the single source of truth for what each
          standard below should be set to. Keep this in sync with the
          "Owner's running list of standards" comment at the top of the
          file. */}
      <div className="mt-8 rounded-lg border border-line">
        <div className="border-b border-line bg-[#f7f8fa] px-4 py-2.5 text-[12px] font-bold uppercase tracking-wide text-ink-muted">
          Target numbers
        </div>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">Text-size-ex-title-home-page-others</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">5</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">Text-size-ex-telecom-bullets-text-others</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">5</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">text-size-on-telecom-page</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">5</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">title-size-on-telecom-page</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">5</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">percent-increase-SQUARE-ICON-LINKS</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">10%</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">percent-increase-BUTTONS</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">10%</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">percent-increase-FOOTER-PICTURES/gif</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">10%</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">percent-increase-HOME-TOP-PICTURES/gif</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">10%</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">pane-vertical-spacing</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">py-14 → sm:py-20</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4 pl-3 text-[13px] text-ink sm:text-[14px]">pane-spacing-scale-down</td>
              <td className="py-2.5 pr-3 text-right font-mono text-[13px] font-bold text-ink sm:text-[14px]">1 → .8</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 rounded-lg bg-[#f7f8fa] px-4 py-3 text-[13px]">
        <a href="#titles" className="text-brand hover:underline">Titles</a>
        <a href="#bullets" className="text-brand hover:underline">Bullet text</a>
        <a href="#icon-links" className="text-brand hover:underline">Square icon links</a>
        <a href="#buttons" className="text-brand hover:underline">Buttons</a>
        <a href="#footer-pics" className="text-brand hover:underline">Footer pictures/gifs</a>
        <a href="#home-top-pics" className="text-brand hover:underline">Home top pictures/gifs</a>
        <a href="#pane-spacing" className="text-brand hover:underline">Pane spacing</a>
        <a href="#colors" className="text-brand hover:underline">Colors</a>
        <a href="#body-text" className="text-brand hover:underline">Other body text</a>
      </nav>

      <Section id="titles" title="Text-size-ex-title-home-page-others">
        <p className="mb-4 text-[13px] leading-[1.6] text-ink-muted sm:text-[14px]">
          "Title" = the big heading paired with the logo mark or leading a
          section. The 28/34/40px scale is the most common — a few pages
          settled on smaller (24/30) or bigger (34/46) sizes instead.
        </p>
        <Table>
          <Row where="Home — most section titles (Email, Email Marketing, Caller ID, …)" value="28px → sm:34px → lg:40px" note="Most common — treat as the standard" />
          <Row where="Home — Human/Digital verification block" value="24px → sm:28px" note={<>Smaller <Flag>inconsistent</Flag></>} />
          <Row where="Join — Email Solutions" value="28px → sm:34px → lg:40px" note="Matches standard" />
          <Row where="EmailDomain / DomainAppliance — PhishFlagger PRO/Domain Appliance hero" value="34px → sm:46px" note={<>Bigger <Flag>inconsistent</Flag></>} />
          <Row where="EmailDomain / DomainAppliance — Protect your Brand / Network" value="24px → sm:30px" note={<>Smaller <Flag>inconsistent</Flag></>} />
          <Row where="Most standalone page heroes (Contact, Download, Demo, Community, JoinFree, …)" value="40px → sm:52–56px → lg:64px" note="A different, bigger family for full-page heroes vs. in-page section titles" />
          <Row where="FAQ / EndorseUs / Kickstarter heroes" value="34px → sm:44px" note="Mid-size hero family" />
        </Table>
      </Section>

      <Section id="bullets" title="Text-size-ex-telecom-bullets-text-others">
        <p className="mb-4 text-[13px] leading-[1.6] text-ink-muted sm:text-[14px]">
          Bulleted list copy. Fixed on /telecom (Telecom.jsx): every
          paragraph/bullet-list on that page now uses the shared
          <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">.telecom-body-text</code>
          class (16px → sm:19px, defined once in <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">src/index.css</code>)
          instead of the 9 different hand-typed sizes (15–24px) it had
          before. Titles on that same page use
          <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">.telecom-title</code>
          (same 28/34/40px scale as <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">.section-title</code>).
          Other pages still vary below.
        </p>
        <Table>
          <Row where="Telecom — all body/bullet text (Human-compatible list, footer benefits, SMS/Message placeholders, …)" value=".telecom-body-text — 16px → sm:19px" note="Fixed — one constant for the whole page" />
          <Row where="Telecom — all in-page titles" value=".telecom-title — 28px → sm:34px → lg:40px" note="Fixed — matches site .section-title" />
          <Row where="EmailDomain / DomainAppliance — Advanced Email Authentication" value="15px → sm:18px" note="" />
          <Row where="EmailDomain / DomainAppliance — Protect your Brand/Network" value="14px → sm:15px" note="Most common size for body/bullet copy" />
          <Row where="Join — Email Solutions paragraph (boxed)" value="15px → sm:16px" note="" />
        </Table>
      </Section>

      <Section id="icon-links" title="percent-increase-SQUARE-ICON-LINKS — target 10%">
        <p className="mb-4 text-[13px] leading-[1.6] text-ink-muted sm:text-[14px]">
          The square icon buttons (Contact / Subscribe / Endorse Us / FAQ /
          Sign Petition rows). Current hover growth is bigger than the 10%
          target you've set.
        </p>
        <Table>
          <Row where="ActionCard (Join, Telecom, Help icon rows)" value="scale 0.75 → 0.9 on hover" note={<>Effective +20% relative to its own resting size <Flag>inconsistent</Flag></>} />
          <Row where="Join — Domain Appliance / Plug-In-Pro image tiles" value="hover:scale-110" note="+10% — already matches target" />
          <Row where="Join — Free/Marketing image tiles" value="hover:scale-110" note="+10% — already matches target" />
        </Table>
      </Section>

      <Section id="buttons" title="percent-increase-BUTTONS — target 10%">
        <p className="mb-4 text-[13px] leading-[1.6] text-ink-muted sm:text-[14px]">
          Every CTA button (Join Free / Join Pro / Marketing / Endorse Us /
          etc.). The huge majority currently use +20%, not the 10% target.
        </p>
        <Table>
          <Row where="Gray CTA buttons site-wide (Join Free, Join Pro, Join Domain, Marketing, Endorse Us, Subscribe, …)" value="hover:scale-[1.2]  (79 occurrences)" note={<>+20% — the de-facto standard today, not 10% <Flag>inconsistent</Flag></>} />
          <Row where="Video category / page-number pills" value="hover:scale-120  (10 occurrences)" note="+20%, same family as above" />
          <Row where="A few one-off buttons" value="hover:scale-110 / 130 / [1.03] / [1.1]" note={<>Scattered exceptions <Flag>inconsistent</Flag></>} />
        </Table>
      </Section>

      <Section id="footer-pics" title="percent-increase-FOOTER-PICTURES/gif">
        <Table>
          <Row where="Footer — product screenshots row (Protecting Communications)" value="hover:scale-130" note="+30% — only place this exact value is used" />
        </Table>
      </Section>

      <Section id="home-top-pics" title="percent-increase-HOME-TOP-PICTURES/gif">
        <Table>
          <Row where="Home hero — hero v1 / v2 / v3 images" value="none" note={<>No hover-scale at all today <Flag>inconsistent</Flag></>} />
          <Row where="Home hero — phone screens (Email/Messages/Text/Caller ID row)" value="hover:scale-[1.35] (via PhonePlaceholder)" note="Separate component, different value again" />
        </Table>
      </Section>

      <Section id="pane-spacing" title="Pane vertical spacing (section top/bottom padding)">
        <p className="mb-4 text-[13px] leading-[1.6] text-ink-muted sm:text-[14px]">
          The <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">pt-*</code>/
          <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">pb-*</code> (or
          combined <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">py-*</code>)
          padding on each page's top-level <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">&lt;section&gt;</code>
          — controls the gap above/below a pane, including the gap around the
          page-down/up chevron pair. <code className="mx-1 rounded bg-[#f7f8fa] px-1 py-0.5 font-mono text-[12px]">py-14 → sm:py-20</code> is
          the most common value (47 occurrences); everything else below is a
          one-off or small cluster.
        </p>
        <Table>
          <Row where="Site-wide standard section padding" value="py-14 → sm:py-20" note="47 occurrences — treat as the standard" />
          <Row where="Home — Human/Digital verification block, bottom gap before #pane-0002" value="pb-16 → sm:pb-24 scaled to pb-[3.2rem] → sm:pb-[4.8rem]" note="DONE — scaled ×0.8 per owner note" />
          <Row where="Hero/standalone-page pattern (JoinFree, JoinFreeRegister, JoinFreeTerms, RequestDomain, MessagingAppRequest, EmailMarketingQuote, Press, SupportDesk, Rock, …)" value="pt-14 → pb-16" note={<>12 occurrences <Flag>inconsistent</Flag></>} />
          <Row where="News, EndorseUs, VictimTestimonials, Petition" value="pb-16 → pt-10" note={<>5 occurrences <Flag>inconsistent</Flag></>} />
          <Row where="FAQ, IP, Team, TestStripe(pt-12)" value="pt-14 → pb-20" note={<>4 occurrences <Flag>inconsistent</Flag></>} />
          <Row where="Supporters, HallOfFame, TelecomSupporters(pb-12), Blog" value="pt-14 → pb-12" note={<>4 occurrences <Flag>inconsistent</Flag></>} />
          <Row where="EmailFreePlugIn, JoinFreeIframe, JoinCorporateIframe, Home — pane-0002" value="pb-14 → pt-6" note={<>4 occurrences <Flag>inconsistent</Flag></>} />
          <Row where="EndorseUs (2nd block), Blog (2nd block), VictimTestimonials(2nd)" value="pb-12 → pt-14" note={<>3 occurrences <Flag>inconsistent</Flag></>} />
          <Row where="Long tail — Kick, Join, PhishFlaggerOrg, and ~18 more, each used once" value="pt-9/pb-9, pt-6/pb-8, pt-6/pb-20, pt-2/pb-8, pt-14/pb-4, pt-12/pb-6, pb-8/pt-24, pb-6/pt-7, pb-5/pt-5, pb-4/pt-2, …" note={<>24 one-off values — biggest source of inconsistency <Flag>inconsistent</Flag></>} />
        </Table>
      </Section>

      <Section id="colors" title="Color tokens already standardized (src/index.css)">
        <Table>
          <Row where="--color-brand" value="#ff0033" note="Vivid red — nav active state, brand name, some accents" />
          <Row where="--color-brand-hover" value="#d6002b" note="Defined but rarely referenced directly" />
          <Row where="Muted/soft red used site-wide for hover" value="#e63950" note="Not a CSS variable yet — hand-typed as hover:text-btn-hover-red wherever used" />
          <Row where="--color-ink / --color-ink-muted" value="#0c2217 / #4a4a4a" note="Body text colors" />
          <Row where="Dark gray CTA fill" value="#4a4a4a → hover #2b2b2b / #3f3f3f (varies)" note={<>Hover-dark shade isn't consistent <Flag>inconsistent</Flag></>} />
        </Table>
      </Section>

      <Section id="body-text" title="Other body text sizes in common use">
        <Table>
          <Row where="Standard paragraph copy" value="14px → sm:15px" note="Most common across Join/EmailDomain/DomainAppliance" />
          <Row where="Larger paragraph copy (Home sections, boxed callouts)" value="15px → sm:16px" note="" />
          <Row where="Nav links" value="15px" note="" />
          <Row where="^0001-style section counters" value="17px → sm:19px" note="" />
        </Table>
      </Section>

      <p className="mt-10 text-[12px] text-ink-muted">
        Generated by hand from a codebase grep on {new Date().toISOString().slice(0, 10)} —
        not auto-synced. If you change a value on a live page, update the
        matching row here too.
      </p>
    </div>
  );
}
