import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import PhishFlaggerOrg from "./pages/PhishFlaggerOrg.jsx";
import Contact from "./pages/Contact.jsx";
import Community from "./pages/Community.jsx";
import Demo from "./pages/Demo.jsx";
import VideoPage from "./pages/Video.jsx";
import VictimTestimonials from "./pages/VictimTestimonials.jsx";
import EndorseUs from "./pages/EndorseUs.jsx";
import EndorseThanks from "./pages/EndorseThanks.jsx";
import Petition from "./pages/Petition.jsx";
import PetitionThanks from "./pages/PetitionThanks.jsx";
import GenericThanks from "./pages/GenericThanks.jsx";
import Kick from "./pages/Kick.jsx";
import Rock from "./pages/Rock.jsx";
import HumanVsDigital from "./pages/HumanVsDigital.jsx";
import TestStripe from "./pages/TestStripe.jsx";
import NotFound from "./pages/NotFound.jsx";

import EmailDomain from "./pages/join/EmailDomain.jsx";
import EmailFreePlugIn from "./pages/join/EmailFreePlugIn.jsx";
import EmailMarketing from "./pages/join/EmailMarketing.jsx";
import EmailMarketingQuote from "./pages/join/EmailMarketingQuote.jsx";
import Telecom from "./pages/join/Telecom.jsx";
import Messaging from "./pages/join/Messaging.jsx";
import TelecomContact from "./pages/join/TelecomContact.jsx";
import TelecomSubscribe from "./pages/join/TelecomSubscribe.jsx";
import {
  TelecomThanksContact,
  TelecomThanksSubscribe,
} from "./pages/join/TelecomThanks.jsx";
import Other from "./pages/join/Other.jsx";
import JoinFree from "./pages/join/JoinFree.jsx";
import RequestDomain from "./pages/join/RequestDomain.jsx";

import Team from "./pages/about/Team.jsx";
import Press from "./pages/about/Press.jsx";
import Video from "./pages/about/Video.jsx";
import IP from "./pages/about/IP.jsx";
import FAQ from "./pages/about/FAQ.jsx";
import Blog from "./pages/about/Blog.jsx";
import News from "./pages/about/News.jsx";
import Fiction from "./pages/about/Fiction.jsx";
import NumberingHistory from "./pages/about/NumberingHistory.jsx";
import Kickstarter from "./pages/about/Kickstarter.jsx";
import HallOfFame from "./pages/about/HallOfFame.jsx";
import AboutEndorseUs from "./pages/about/EndorseUs.jsx";
import Supporters from "./pages/about/Supporters.jsx";
import TelecomSupporters from "./pages/join/TelecomSupporters.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="phishflagger-org" element={<PhishFlaggerOrg />} />
        <Route path="victim-testimonials" element={<VictimTestimonials />} />
        <Route
          path="victim-testimonials/thanks"
          element={
            <GenericThanks
              message="Thank you. Your testimonial has been received."
              closeTo="/phishflagger-org"
            />
          }
        />
        <Route path="kick" element={<Kick />} />
        <Route path="edit" element={<Rock />} />
        <Route path="kick/human-vs-digital" element={<HumanVsDigital />} />
        <Route path="test-stripe" element={<TestStripe />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="contact/thanks"
          element={
            <GenericThanks
              message="Thank you. Your message has been received."
              closeTo="/contact"
            />
          }
        />
        <Route path="community" element={<Community />} />
        <Route
          path="community/thanks"
          element={
            <GenericThanks
              message="Thank you. Your community request has been received."
              closeTo="/phishflagger-org"
            />
          }
        />
        <Route path="demo" element={<Demo />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="News" element={<News />} />
        <Route path="petition" element={<Petition />} />
        <Route path="petition/thanks" element={<PetitionThanks />} />
        <Route path="joinfree" element={<JoinFree />} />
        <Route path="joinfree/request-domain" element={<RequestDomain />} />

        <Route path="join">
          <Route path="email-domain" element={<EmailDomain />} />
          <Route path="email-free-plug-in" element={<EmailFreePlugIn />} />
          <Route path="email-marketing" element={<EmailMarketing />} />
          <Route path="email-marketing/quote" element={<EmailMarketingQuote />} />
          <Route
            path="email-marketing/quote/thanks"
            element={
              <GenericThanks
                message="Thank you. Your quote request has been received."
                closeTo="/join/email-marketing"
              />
            }
          />
          <Route path="telecom" element={<Telecom />} />
          <Route path="telecom/contact" element={<TelecomContact />} />
          <Route path="telecom/subscribe" element={<TelecomSubscribe />} />
          <Route
            path="telecom/thanks-contact"
            element={<TelecomThanksContact />}
          />
          <Route
            path="telecom/thanks-subscribe"
            element={<TelecomThanksSubscribe />}
          />
          <Route path="messaging" element={<Messaging />} />
          <Route path="other" element={<Other />} />
        </Route>

        <Route path="help">
          <Route path="endorse-us" element={<AboutEndorseUs />} />
          <Route
            path="endorse-us/thanks"
            element={
              <GenericThanks
                message="Thank you. Your endorsement has been received."
                closeTo="/help/endorse-us"
              />
            }
          />
          <Route path="telecom-endorse-us" element={<EndorseUs />} />
          <Route
            path="telecom-endorse-us/thanks"
            element={<EndorseThanks />}
          />
          <Route path="kickstarter" element={<Kickstarter />} />
          <Route path="hall-of-fame" element={<HallOfFame />} />
          <Route path="supporters" element={<Supporters />} />
          <Route path="telecom-supporters" element={<TelecomSupporters />} />
        </Route>

        <Route path="about">
          <Route path="team" element={<Team />} />
          <Route path="press" element={<Press />} />
          <Route path="video" element={<Video />} />
          <Route path="ip" element={<IP />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="blog" element={<Blog />} />
          <Route path="news" element={<News />} />
          <Route path="kickstarter" element={<Kickstarter />} />
          <Route path="hall-of-fame" element={<HallOfFame />} />
          <Route path="endorse-us" element={<AboutEndorseUs />} />
          <Route
            path="endorse-us/thanks"
            element={
              <GenericThanks
                message="Thank you. Your endorsement has been received."
                closeTo="/about/endorse-us"
              />
            }
          />
          <Route path="supporters" element={<Supporters />} />
          <Route path="numbering-history" element={<NumberingHistory />} />
          <Route path="fiction" element={<Fiction />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
