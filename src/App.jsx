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
import NotFound from "./pages/NotFound.jsx";

import EmailDomain from "./pages/join/EmailDomain.jsx";
import EmailIndividual from "./pages/join/EmailIndividual.jsx";
import EmailMarketing from "./pages/join/EmailMarketing.jsx";
import EmailMarketingQuote from "./pages/join/EmailMarketingQuote.jsx";
import Telecom from "./pages/join/Telecom.jsx";
import TelecomContact from "./pages/join/TelecomContact.jsx";
import TelecomSubscribe from "./pages/join/TelecomSubscribe.jsx";
import {
  TelecomThanksContact,
  TelecomThanksSubscribe,
} from "./pages/join/TelecomThanks.jsx";
import Other from "./pages/join/Other.jsx";

import Team from "./pages/about/Team.jsx";
import Press from "./pages/about/Press.jsx";
import Video from "./pages/about/Video.jsx";
import IP from "./pages/about/IP.jsx";
import FAQ from "./pages/about/FAQ.jsx";
import Blog from "./pages/about/Blog.jsx";
import News from "./pages/about/News.jsx";
import Fiction from "./pages/about/Fiction.jsx";
import Kickstarter from "./pages/about/Kickstarter.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="phishflagger-org" element={<PhishFlaggerOrg />} />
        <Route path="victim-testimonials" element={<VictimTestimonials />} />
        <Route path="endorse-us" element={<EndorseUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="community" element={<Community />} />
        <Route path="demo" element={<Demo />} />
        <Route path="video" element={<VideoPage />} />

        <Route path="join">
          <Route path="email-domain" element={<EmailDomain />} />
          <Route path="email-individual" element={<EmailIndividual />} />
          <Route path="email-marketing" element={<EmailMarketing />} />
          <Route path="email-marketing/quote" element={<EmailMarketingQuote />} />
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
          <Route path="other" element={<Other />} />
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
          <Route path="fiction" element={<Fiction />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
