import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PageCycleArrows from "../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../components/ui/topNavLoopPages.js";
import PageDownButton from "../components/ui/PageDownButton.jsx";
import LogoMark from "../components/ui/LogoMark.jsx";
import { brandify } from "../components/Brand.jsx";
import messagesPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";
import messagesPhoneGif from "../../telecom Webpage/assets/images/products/PhishFlagger-Messages v7 animated transparent.gif";
import emailPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Email v6.png";
import infoBoxImg from "../assets/images/email-inbox-v4-gray-header.png";
import heroInfoBoxImg from "../assets/images/email-inbox-v7-gray-header-ordered.png";
import heroInfoBoxGif from "../assets/images/email-inbox-v6-gray-header-5004-animated.gif";
import whoCanUseImg from "../assets/images/email-marketing-verified-v9.png";
import outlookThunderbirdImg from "../assets/images/outlook and thunderbird.png";
import callerIdDesktopImg from "../../telecom Webpage/assets/images/products/desktop-phone-v3-verified.png";
import callerIdHandsetImg from "../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import callerIdHandsetGif from "../../telecom Webpage/assets/images/products/phishflagger-callerid-v6-animated-transparent.gif";
import threePhoneImg from "../../telecom Webpage/assets/images/products/3phone.png";
import history1Img from "../assets/images/7 1st.avif";
import history2Img from "../assets/images/7  2nd.avif";
import history3Img from "../assets/images/7 3rd.avif";
import textPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Text v6.png";
import textPhoneGif from "../../telecom Webpage/assets/images/products/PhishFlagger-Text v6 animated transparent.gif";
import cloudServerImg from "../assets/images/digital-domain-diagram-v6-no-connector.png";
import pane0004MessageCardImg from "../assets/images/home-pane-0004-message-card.png";

const SCREENS = [
  { label: "Email Inbox", src: heroInfoBoxImg, hoverSrc: heroInfoBoxGif },
  { label: "Email", src: emailPhoneImg, hoverSrc: "/assets/images/PhishFlagger%20Email%20Gif%20v2.gif" },
  { label: "Messages", src: messagesPhoneImg, hoverSrc: messagesPhoneGif },
  { label: "Text/SMS", src: textPhoneImg, hoverSrc: textPhoneGif },
  { label: "Caller ID", src: callerIdHandsetImg, hoverSrc: callerIdHandsetGif },
];


export default function Home() {
  return (
    <>
    {/* ===== Sections 1–3 share one continuous, non-repeating background ===== */}
    <div
      className="relative w-full bg-[#eef0f4] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    {/* ===== Section 1 — Hero (gray) ===== */}
    <section id="pane-0001" className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 px-4 pt-2 sm:px-6 sm:pt-3">
      <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={0} center topClass="top-0 sm:top-2" />
      <div className="mx-auto max-w-content">
      <div className="mx-auto mt-3 flex w-full max-w-[1400px] flex-col items-stretch justify-center gap-3 sm:mt-4 lg:flex-row lg:items-center lg:gap-12">
        <div className="min-w-0 lg:flex-1">
          <img
            src="/assets/images/hero%20v1.png"
            alt="See the difference. Trust the messages."
            className="h-auto w-full -translate-y-6 object-contain pic-with-no-link-mouse-over-increase"
          />
        </div>
        <div className="min-w-0 lg:flex-1">
          <img
            src="/assets/images/hero%20v2.png"
            alt="PhishCounter sequence verification on ABC Bank messages"
            className="mx-auto h-auto w-[100%] max-w-none -translate-x-4 -translate-y-[3.25rem] scale-[0.8] object-contain pic-with-no-link-mouse-over-increase"
          />
        </div>
        <div className="min-w-0 lg:flex-1">
          <img
            src="/assets/images/hero%20v3%20need%20logo%20up.png"
            alt="Woman using PhishFlagger-protected email"
            className="relative left-1/2 top-7 h-auto w-[120%] max-w-none -translate-x-1/2 origin-bottom object-contain pic-with-no-link-mouse-over-increase"
          />
        </div>
      </div>

      {/* Phones row — flex so phones sit tight together regardless of container width */}
      <div className="mt-12 flex flex-wrap items-stretch justify-center gap-x-12 gap-y-10 sm:mt-16 sm:gap-y-12 lg:flex-nowrap lg:gap-x-[30px]">
        <div className="flex flex-col items-stretch">
          {/* Shared label row — mirrors the phone-row layout below exactly
              (flex-1 slot for the large phone + a fixed-width slot matching
              the wide phone's own width classes) so "Email - Domain" is
              guaranteed to land centered over the wide "Email" phone at
              every breakpoint, instead of a hand-tuned margin that only
              lined up at one viewport width. */}
          <div className="mb-3 flex items-stretch gap-x-12 sm:mb-4 lg:gap-x-[30px]">
            <div className="flex flex-1 items-center justify-center gap-8">
              <Link
                to="/join/email-free-plug-in"
                className="whitespace-nowrap text-[14px] font-semibold text-ink transition-colors hover:text-red-600 sm:text-base"
              >
                Email - Free
              </Link>
              <Link
                to="/join/pro"
                state={{ from: "/" }}
                className="whitespace-nowrap text-[14px] font-semibold text-ink transition-colors hover:text-red-600 sm:text-base"
              >
                Email - PRO
              </Link>
            </div>
            <div className="flex w-[146px] items-center justify-center sm:w-[188px] lg:w-[177px]">
              <Link
                to="/join/domain"
                className="whitespace-nowrap text-[14px] font-semibold text-ink transition-colors hover:text-red-600 sm:text-base"
              >
                Email - Domain
              </Link>
            </div>
          </div>
          <div className="flex items-stretch gap-x-12 lg:gap-x-[30px]">
            <div className="flex flex-1 items-center">
              <PhonePlaceholder
                src={SCREENS[0].src}
                hoverSrc={SCREENS[0].hoverSrc}
                alt={`${SCREENS[0].label} screen`}
                large
              />
            </div>
            <div className="-translate-y-[1px]">
              <PhonePlaceholder src={SCREENS[1].src} hoverSrc={SCREENS[1].hoverSrc} alt={`${SCREENS[1].label} screen`} wide />
            </div>
          </div>
        </div>

        {SCREENS.slice(2).map((s, i) => (
          <div key={i + 2} className="flex flex-col items-center">
            <Link
              to={s.label === "Messages" ? "/join/messaging" : "/telecom"}
              className="mb-3 text-[14px] font-semibold text-ink transition-colors hover:text-red-600 sm:mb-4 sm:text-base"
            >
              {s.label}
            </Link>
            <PhonePlaceholder src={s.src} hoverSrc={s.hoverSrc} alt={`${s.label} screen`} wide />
          </div>
        ))}
      </div>

      </div>

      {/* ===== Human / Digital verification (was: email-auth / digital-verification diagrams, moved to /kick and /digital-ino) =====
          Kept inside the pane-0001 <section> (not its own <section>) so the
          global page-down tab's "next <section>" lookup skips straight to
          #pane-0002 instead of stopping here. ===== */}
      <div className="mx-auto grid w-[85%] max-w-[1360px] grid-cols-1 gap-10 pt-9 pb-[calc(3.2rem*var(--pane-gap-scale))] sm:gap-16 sm:pt-12 sm:pb-[calc(4.8rem*var(--pane-gap-scale))] lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="text-[13px] font-bold uppercase tracking-wide text-ink-muted sm:text-[14px]">
            {brandify("PhishFlagger")} / Human
          </span>
          <h2 className="mt-2 text-[24px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[28px]">
            Put Verification in the Hands of People
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
            {brandify("PhishFlagger")} gives people a simple way to
            recognize trusted communications. Every outgoing email receives
            a unique, sequential {brandify("PhishCounter")} in the subject
            line. Recipients can compare the number with the previous
            message from that sender. If the sequence is missing or
            doesn't match, it's a clear signal to stop and take a closer
            look.
          </p>
          <div className="flex justify-center">
            <Link
              to="/human-compatible"
              state={{ from: "/" }}
              className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
            >
              Human Compatible
            </Link>
          </div>
        </div>
        <div>
          <span className="text-[13px] font-bold uppercase tracking-wide text-ink-muted sm:text-[14px]">
            {brandify("PhishFlagger")} / Digital
          </span>
          <h2 className="mt-2 text-[24px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[28px]">
            Authenticate Communications
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
            {brandify("PhishFlagger")} adds a digital layer of protection
            by helping verify that communications originate from
            authorized senders and domains. Working alongside existing
            email security and authentication technologies,{" "}
            {brandify("PhishFlagger")} helps identify communications that
            may be impersonating a trusted organization or sender.
          </p>
          <div className="flex justify-center">
            <Link
              to="/digital-verification"
              className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
            >
              Domain Verification
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>

    {/* ===== Section 5 — Individual protection: Free Plug-In (white) ===== */}
    <section id="pane-0002" className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-white px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
      <SectionCounter value="^0001" />
      <PageDownButton targetSelector="#pane-0003" forceTopOnUp />
      <div className="mx-auto max-w-content">
        <h2 className="section-title mt-6 mb-10 flex items-center justify-center gap-3 text-center sm:mt-10 sm:mb-14">
          <LogoMark />
          Email
        </h2>
        <div className="mx-auto mt-6 flex flex-col items-center justify-center gap-10 px-4 sm:mt-8 lg:flex-row lg:flex-nowrap lg:items-start lg:gap-[84px]">
          <div className="flex w-auto flex-col items-center">
            <span className="mb-5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
              Client Plug-In
            </span>
            <div className="group relative w-full max-w-[380px]">
              <Link
                to="/kick"
                className="absolute top-2 -left-2 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white transition group-hover:scale-120 hover:scale-120 sm:text-[10px]"
              >
                <span>Coming Soon</span>
              </Link>
              <div className="relative flex aspect-[46/30] w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-[#EAECF3] transition-transform duration-200 hover:scale-[1.1]">
                <img
                  src={outlookThunderbirdImg}
                  alt="Microsoft Outlook and Mozilla Thunderbird"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-[11px] left-0 right-0 grid grid-cols-2">
                  <div />
                  <div className="flex justify-center pl-0 sm:pl-[4px]">
                    <Link
                      to="/download"
                      className="whitespace-nowrap text-[10px] font-semibold text-white underline underline-offset-4 hover:text-white/80 sm:text-[11px]"
                    >
                      More Clients Coming Soon
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/kick"
              className="mt-4 flex w-full max-w-[380px] flex-col items-center justify-center gap-1 rounded-2xl border-2 border-black bg-red-50 px-6 py-4 text-center transition duration-200 hover:scale-[1.5] hover:bg-red-100"
            >
              <span className="text-[13px] font-bold uppercase tracking-wide text-ink sm:text-[14px]">
                Help Us Stop Phishing
              </span>
              <span className="text-[20px] font-semibold text-ink sm:text-[22px]">
                Beta our Plug-In Now!
              </span>
              <span className="text-[16px] font-medium text-brand sm:text-[18px]">
                Support us on Kickstarter
              </span>
            </Link>
            <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4">
              <div className="flex w-[170px] flex-col items-center gap-3">
                <span className="text-[28px] font-extrabold uppercase tracking-wide text-ink">
                  Free
                </span>
                <span className="flex flex-1 items-center text-center text-[20px] italic leading-snug text-ink-muted">
                  Works with
                  <br />
                  Gmail, Outlook, Yahoo, Etc.
                </span>
                <div className="relative mt-3">
                  <Link
                    to="/kick"
                    className="absolute -top-4 -left-6 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white transition hover:scale-105 sm:text-[10px]"
                  >
                    <span>Coming Soon</span>
                  </Link>
                  <Link
                    to="/join/email-free-plug-in"
                    className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
                  >
                    Join Free
                  </Link>
                </div>
              </div>
              <div className="flex w-[200px] flex-col items-center gap-3">
                <span className="text-[28px] font-extrabold uppercase tracking-wide text-ink">
                  Pro
                </span>
                <span className="flex flex-1 items-center text-center text-[20px] italic leading-snug text-ink-muted">
                  Enable one or multiple Email Addresses (works with
                  any email)
                </span>
                <Link
                  to="/join/pro"
                  state={{ from: "/" }}
                  className="mt-3 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
                >
                  Join Pro
                </Link>
              </div>
            </div>
          </div>

          <div className="flex w-auto flex-col items-center">
            <div className="flex items-center justify-center py-2 lg:h-[300px] lg:py-0">
              <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-white text-[20px] font-bold uppercase tracking-wide text-ink sm:h-[76px] sm:w-[76px] sm:text-[23px]">
                Or
              </span>
            </div>
          </div>

          <div className="flex w-auto flex-col items-center">
            <span className="mb-5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
              Domain Appliance
            </span>
            <Link to="/join/domain" className="relative w-full max-w-[380px]">
              <div className="aspect-[46/30] w-full overflow-hidden rounded-2xl border-2 border-black transition-transform duration-200 hover:scale-[1.1]">
                <img
                  src={cloudServerImg}
                  alt="Cloud and server appliance"
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
            <p className="mt-4 flex w-full max-w-[300px] items-center justify-center py-6 text-center text-[22px] leading-[1.6] text-ink sm:max-w-[460px] sm:py-8 sm:text-[22px]">
              Our Appliance will enable the protocol across your entire
              Domain. No Install or Downloads required by users.
            </p>
            <div className="-mt-3 flex flex-wrap items-start justify-center gap-6">
              <div className="flex w-[260px] flex-col items-center gap-3">
                <span className="whitespace-nowrap text-[28px] font-extrabold uppercase tracking-wide text-ink">
                  Domain
                </span>
                <span className="flex items-center text-center text-[20px] italic leading-snug text-ink-muted">
                  Join your Domain
                </span>
                <Link
                  to="/join/domain"
                  className="-mt-[6px] inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
                >
                  Join Domain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 7 — Caller ID (gray/tower) ===== */}
    <section
      id="pane-0003"
      className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0002" />
      <PageDownButton targetSelector="#pane-0004" bg="white" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-8">
          <img
            src={whoCanUseImg}
            alt="PhishFlagger Email Marketing"
            className="h-auto w-full max-w-[286px] -translate-x-3 object-contain img-hover-zoom lg:-translate-x-8"
          />
          <img
            src="/assets/images/Marketing%20Email.png"
            alt="PhishFlagger email inbox showing numbered messages"
            className="h-auto w-full max-w-[200px] object-contain img-hover-zoom"
          />
        </div>
        <div>
          <h2 className="section-title flex items-center gap-3">
            <LogoMark />
            Email Marketing
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Build greater trust with every campaign. <BrandInline /> helps
            marketers authenticate their email communications, giving
            recipients greater confidence that messages are legitimate and
            protecting your brand from phishing and impersonation. When
            customers know an email is genuine, they are more likely to
            open, read, and engage with it.
          </p>
          <Link
            to="/join/email-marketing"
            className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
          >
            Marketing
          </Link>
        </div>
      </div>
    </section>

    {/* ===== Section 7c — Telecom / Caller ID (white) ===== */}
    <section id="pane-0004" className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0003" />
      <PageDownButton targetSelector="#pane-0005" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left — heading + text */}
        <div>
          <h2 className="section-title flex items-center gap-3">
            <LogoMark />
            Telecom / Caller ID / CLI
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Fake phone calls can be prevented now.
            <br />
            The Sequence Number known only by valid carrier and callee prevents
            impersonation. As the existing Caller ID rail is fully interoperable
            between carriers globally, a &lsquo;sequence number&rsquo; implemented
            by telecoms worldwide would end fake calls.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-8">
            <Link
              to="/telecom"
              className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
            >
              Telecom
            </Link>
            <div className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
              <p>Help stop phone fraud in your country.</p>
              <div className="mt-0.5 flex flex-wrap items-center gap-1">
                <Link
                  to="/petition"
                  className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
                >
                  Sign our Petition
                </Link>
                <span>and</span>
                <Link
                  to="/help/telecom-endorse-us"
                  className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
                >
                  Endorse Safe Calls
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right — 3 phones in a row */}
        <div className="flex flex-wrap items-end justify-center gap-4 sm:flex-nowrap sm:gap-6 lg:justify-end">
          <div className="relative flex min-w-0 items-end pt-2">
            <img
              src={callerIdDesktopImg}
              alt="Desktop corded phone with PhishFlagger Caller ID"
              className="h-auto w-full max-w-[130px] object-contain img-hover-zoom sm:max-w-[200px]"
            />
          </div>
          <img
            src={threePhoneImg}
            alt="PhishFlagger Caller ID phones"
            className="h-auto w-1/3 min-w-0 max-w-[90px] object-contain img-hover-zoom sm:max-w-[135px]"
          />
          <img
            src={callerIdHandsetImg}
            alt="Cordless handset with PhishFlagger Caller ID"
            className="h-auto w-1/3 min-w-0 max-w-[105px] object-contain img-hover-zoom sm:max-w-[160px]"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 7b — Telecom / Text (gray/tower) ===== */}
    <section
      id="pane-0005"
      className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0004" />
      <PageDownButton bg="white" />
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap items-stretch justify-center gap-12 lg:flex-nowrap">
          <div className="flex flex-col items-center">
            <span className="section-title mb-4 flex items-center justify-center gap-3 whitespace-nowrap text-center">
              <LogoMark />
              SMS
            </span>
            <div className="flex flex-1 flex-col items-center justify-between sm:min-h-[340px]">
              <img
                src="/assets/images/sms-phone-and-text.png"
                alt="Phone displaying PhishFlagger text messages"
                className="h-[260px] w-auto max-w-full object-contain img-hover-zoom sm:h-[300px]"
              />
              <Link
                to="/telecom"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Telecom
              </Link>
            </div>
          </div>

          <img
            src={pane0004MessageCardImg}
            alt="Phishing doesn't stop at email. PhishFlagger for SMS and Messages adds an additional layer of verification to SMS and mobile messaging, helping protect customers from text-based scams and impersonation."
            className="mx-6 mt-2 h-auto w-[calc(100%-3rem)] max-w-[360px] shrink-0 self-center object-contain img-hover-zoom"
          />

          <div className="flex flex-col items-center">
            <span className="section-title mb-4 flex items-center justify-center gap-3 whitespace-nowrap text-center">
              <LogoMark />
              Message
            </span>
            <div className="flex flex-1 flex-col items-center justify-between sm:min-h-[340px]">
              <img
                src="/assets/images/messaging-icons-and-phone-animated.gif"
                alt="Phone displaying PhishFlagger messages alongside popular messaging apps"
                className="h-[260px] w-auto max-w-full object-contain img-hover-zoom sm:h-[300px]"
              />
              <Link
                to="/join/messaging"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Messaging
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 8 — Numbering history (white) — HIDDEN, superseded by Section 9 gallery below ===== */}
    {false && (
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0011" />
      <div className="mx-auto max-w-content">
        <p className="mx-auto max-w-[820px] text-center text-[24px] leading-[1.5] text-ink sm:text-[30px] sm:leading-[1.45]">
          Numbering has been revolutionary in creating identifiable order to
          records and documents, thereby reducing fraud.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:gap-10 md:grid-cols-3">
          <HistoryCard
            year="1470"
            topic="Pagination"
            patent="Printing Press 1440"
            attribution="Johannes Gutenberg"
            heading="Numbering Book Pages"
            img={history1Img}
            imgAlt="Numbered book pages"
          />
          <HistoryCard
            year="1892"
            topic="Consecutive Stamp"
            patent="US Patent 484391A"
            attribution="Edwin G. Bates"
            heading="Numbering Machine"
            img={history2Img}
            imgAlt="Mechanical numbering stamp"
          />
          <HistoryCard
            year="2026"
            topic="Phishing Protection"
            patent="US Patent 11,601,449 B2"
            attribution="William Pearce"
            heading="Numbering Communications"
            img={history3Img}
            imgAlt="PhishFlagger email numbering"
          />
        </div>
      </div>
    </section>
    )}

    </>
  );
}

function HistoryCard({ img, imgAlt }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border-2 border-black p-0.5 text-center">
      <img
        src={img}
        alt={imgAlt}
        className="h-auto w-full rounded-2xl object-contain pic-with-no-link-mouse-over-increase"
      />
    </div>
  );
}

// Inline brand text used in body copy: italic "Phish" bold + "Flagger"/"Counter" red normal
function BrandInline({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-bold text-ink">Phish</span>
      <span className="font-normal text-brand">{trail}</span>
    </em>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}

// Hover delay before the gif starts — a quick mouse-pass shouldn't trigger
// playback, only a deliberate hover. The static `src` poster frame should
// match the gif's own first frame, so this delay is invisible: whether the
// gif has started yet or not, the same picture is on screen either way.
const PHONE_GIF_HOVER_DELAY_MS = 150;

function PhonePlaceholder({ src, hoverSrc, alt, large = false, wide = false }) {
  const [showGif, setShowGif] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const hoverTimeoutRef = useRef(null);

  const sizeClass = large
    ? "mt-[2px] h-auto w-[230px] max-w-full sm:w-[300px] lg:w-[300px]"
    : wide
      // This mockup (PhishFlagger-Email v6.png) has a noticeably
      // thinner phone bezel than the Messages/Text/Caller ID
      // mockups, so at the same width it reads as a smaller device.
      // Bumped ~4% wider so the phone silhouettes look consistent.
      ? "h-auto w-[146px] max-w-full sm:w-[188px] lg:w-[177px]"
      : "h-auto w-[140px] max-w-full sm:w-[180px] lg:w-[170px]";
  const frameClass = large ? "rounded-lg border-2 border-black bg-white" : "";

  // Only mount the gif <img> once the hover delay has elapsed, and bump
  // `key` each time so it's a fresh element — that's what makes the gif
  // always restart at frame 1 on every hover, instead of continuing to
  // play wherever it was left off.
  function handleMouseEnter() {
    if (!hoverSrc) return;
    hoverTimeoutRef.current = window.setTimeout(() => {
      setGifKey((k) => k + 1);
      setShowGif(true);
    }, PHONE_GIF_HOVER_DELAY_MS);
  }

  function handleMouseLeave() {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setShowGif(false);
  }

  return (
    <div
      className={`relative z-10 inline-block transition-transform duration-200 hover:z-30 hover:scale-[1.35] ${sizeClass} ${frameClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className={`block w-full object-contain ${large ? "rounded-lg" : ""} ${showGif ? "opacity-0" : "opacity-100"}`}
      />
      {hoverSrc && showGif && (
        <img
          key={gifKey}
          src={hoverSrc}
          alt={alt}
          className={`absolute inset-0 block w-full object-contain ${large ? "rounded-lg" : ""}`}
        />
      )}
    </div>
  );
}
