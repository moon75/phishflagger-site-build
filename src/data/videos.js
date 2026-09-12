import kickstarterVideo2Poster from "../assets/images/kickstarter-video-2-poster.png";
import { publicPath } from "../lib/publicPath.js";

// Shared video data/config for both video pages:
//   /video  — VideoShowcase.jsx — public, curated "best of best" (1+ per category)
//   /video1 — Video.jsx         — access-code gated, full library + scripts
// Keep this file the single source of truth for video entries so the two
// pages never drift out of sync.

const YOUTUBE_VIDEO_ID = "kqtO0Mq3f-s";

const BASE_VIDEOS = [
  {
    type: "youtube",
    id: YOUTUBE_VIDEO_ID,
    title: "PhishFlagger Overview",
    description: "How PhishFlagger and human validation protects against phishing and fraud.",
    thumb: `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
  },
  {
    type: "local",
    src: publicPath("/assets/video1/v1.mp4"),
    title: "Thank You Video",
    description: "A closer look at how sequential numbering flags impersonation in real time.",
  },
  {
    type: "local",
    src: publicPath("/assets/video1/v2.mp4"),
    title: "Setup & Protection",
    description: "See how quickly your domain or inbox can be protected end to end.",
  },
  {
    type: "local",
    src: publicPath("/assets/video1/PhishFlagger_Kickstarter_video_1.mp4"),
    title: "PhishFlagger Kickstarter",
    description: "An introduction to the PhishFlagger Kickstarter campaign.",
  },
  {
    type: "local",
    src: publicPath("/assets/video1/PhishFlagger_Kickstarter_video_2.mp4"),
    title: "PhishFlagger Kickstarter",
    description: "More on the PhishFlagger Kickstarter campaign.",
    poster: kickstarterVideo2Poster,
  },
];

export const VIDEOS_PER_PAGE = 8;

// Pads a category's video list with "Coming Soon" placeholders up to
// VIDEOS_PER_PAGE, so every category's first page fills a full grid.
// Categories that already have more than VIDEOS_PER_PAGE (e.g. Oracle)
// are left untouched.
export function padToFullPage(videos) {
  const missing = VIDEOS_PER_PAGE - videos.length;
  if (missing <= 0) return videos;
  return [
    ...videos,
    ...Array.from({ length: missing }, () => ({
      type: "placeholder",
      title: "Coming Soon",
      description: "",
    })),
  ];
}

export const VIDEOS = padToFullPage(BASE_VIDEOS);

// All categories, shown in full on the gated /video1 library.
export const VIDEO_CATEGORIES = [
  "Feature",
  "Ads",
  "Shorts",
  "Manual",
  "Kickstarter",
  "Learning",
  "CISO",
  "Telecom Caller ID",
  "Funny",
  "From the Vault",
  "Oracle",
  "Oracle2",
];

// Categories shown on the public /video showcase — everything except
// Oracle and Oracle2, which stay in the gated /video1 library only.
export const PUBLIC_VIDEO_CATEGORIES = VIDEO_CATEGORIES.filter(
  (category) => category !== "Oracle" && category !== "Oracle2",
);

export const CATEGORY_SLUGS = {
  Feature: "",
  Ads: "ads",
  Shorts: "shorts",
  Manual: "manual",
  Kickstarter: "kickstarter",
  Learning: "learning",
  "Telecom Caller ID": "telecom-caller-id",
  Oracle: "oracle",
  Oracle2: "oracle2",
  CISO: "ciso",
  Funny: "funny",
  "From the Vault": "from-the-vault",
};
export const SLUG_CATEGORIES = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([category, slug]) => [slug, category]),
);

// Each category has its own script doc. Feature keeps the original
// "all videos" doc; Oracle keeps its existing doc; the rest point at the
// new placeholder-outline docs created for them (still owner-only in
// Drive until sharing is switched to "Anyone with the link").
export const CATEGORY_SCRIPTS = {
  Feature: "https://docs.google.com/document/d/1r39Taeyz0SfKI6bLWvA7xrASlVv1Lm0ESAdZGx7XxQE/edit?usp=sharing",
  Ads: "https://docs.google.com/document/d/1vvnN3lnYhQ0xROslrgKhOzFcVJBEPXJiztPKaVg5OFU/edit?usp=sharing",
  Shorts: "https://docs.google.com/document/d/1McbM3xzzbegxLIK2C20CkcwUvWqZ3G1LFqaf_Oloqss/edit?usp=sharing",
  Manual: "https://docs.google.com/document/d/1RxLhKRARbMXgNNCpyPTJp3XEN2sSfKtxKq9vtX2zBjI/edit?usp=sharing",
  Kickstarter: "https://docs.google.com/document/d/1fG9xmR13I6qq9CaGTstLV1UUjNKSKLRFAD_lS5HF_4g/edit?usp=sharing",
  Learning: "https://docs.google.com/document/d/1nh8GnkkCM9uDDPFNhSAr9Gfhu49pk_l4YpRbvTsSP4c/edit?usp=sharing",
  "Telecom Caller ID": "https://docs.google.com/document/d/1HsqXIfQIE4AkhKF8tk_Yq0AFoL0UH9xD3qduP0PzGFU/edit?usp=sharing",
  Oracle: "https://docs.google.com/document/d/1KTOVa0wRnynUHv4bfmfGftXJ9PTRsuJ7Tp9FIi5t6P0/edit?usp=sharing",
  Oracle2: "https://docs.google.com/document/d/1KTOVa0wRnynUHv4bfmfGftXJ9PTRsuJ7Tp9FIi5t6P0/edit?usp=sharing",
  CISO: "https://docs.google.com/document/d/1yEJY1sn-JPJcrRg2w34hihlrBzNlzBKAEidvqMaEW6M/edit?usp=sharing",
  Funny: "https://docs.google.com/document/d/1S74NisRSzyw0C37quBHoCpPGx9NWdefCGCd5IENRF9E/edit?usp=sharing",
  "From the Vault": "https://docs.google.com/document/d/1DlkLYRIix4iA7-dGpPzgIZdtdBayMegiqCJtXenGeuA/edit?usp=sharing",
};

const KICKSTARTER_VIDEOS = BASE_VIDEOS.filter((v) => v.title === "PhishFlagger Kickstarter");

export function categoryVideos(category) {
  if (category === "Feature") return VIDEOS;
  if (category === "Kickstarter") {
    return padToFullPage(KICKSTARTER_VIDEOS);
  }
  if (category === "Learning") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/monkey video.mp4"),
        title: "Coming Soon",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Get the message part1.mp4"),
        title: "Get the Message - Part 1",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/The Message Part 2 Final.mp4"),
        title: "Get the Message - Part 2",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/PhishFlagger_8.04.26_Part3.mp4"),
        title: "PhishFlagger 8.04.26 - Part 3",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Fake_message_reveal_offer_202608071511.mp4"),
        title: "Fake Message Reveal Offer",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Taking_over_the_world_202608102121.mp4"),
        title: "Taking Over the World",
        description: "",
      },
    ]);
  }
  if (category === "Oracle") {
    return [
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Man_and_dog_pet_health_202608130007.mp4"),
        title: "Man and Dog Pet Health",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Man_testing_dog_ketone_strips_202608130020.mp4"),
        title: "Man Testing Dog Ketone Strips",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Pet_owner_with_dog_in_202608130010.mp4"),
        title: "Pet Owner with Dog",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Pet_product_video_advertisement_202608130012.mp4"),
        title: "Pet Product Video Advertisement",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/save%20your%20dog%20too.mp4"),
        title: "Save Your Dog Too",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Website_text_display_sequence_202608141319.mp4"),
        title: "Website Text Display Sequence",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Pet%20owner%20with%20dog%20full.mp4"),
        title: "Pet Owner with Dog - Full",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Granny_with_cat_save_your_cat_too.mp4"),
        title: "Granny: Save Your Cat Too Use Code SAVE123",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/save%20your%20dog%20too_usecode-save123.mp4"),
        title: "Save Your Dog Too Use Code SAVE123",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Granny_monitoring_dog_health_202608212143.mp4"),
        title: "Granny Monitoring Dog Health",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Woman_caring_for_pets_at_202608212137.mp4"),
        title: "Woman Caring for Pets",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Oracle%20Video1.mp4"),
        title: "Oracle Video 1",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Oracle%20Video1%20sameple%202.mp4"),
        title: "Oracle Video 1 - Sample 2",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Oracle%20Video1%20sameple%203.mp4"),
        title: "Oracle Video 1 - Sample 3",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Pet_health_commercial_storyboard_202608281110.mp4"),
        title: "Pet Health Commercial Storyboard",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Oracle%C2%AEBlood%20Glucose%20Meter%20Video.mp4"),
        title: "Oracle® Blood Glucose Meter Video",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/BloodSugar.mp4"),
        title: "Blood Sugar",
        description: "",
      },
    ];
  }
  if (category === "Oracle2") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Video1%20v2.mp4"),
        title: "Video 1 v2",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Outro%20video%20with%20text%20on%20it%20.mp4"),
        title: "Outro Video with Text",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Script%203%20video%20cat.mp4"),
        title: "Script 3 Video - Cat",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/Script%203%20video%20dog.mp4"),
        title: "Script 3 Video - Dog",
        description: "",
      },
      {
        type: "local",
        src: publicPath("/assets/video1/Oracle/My%20Dog%20Seems%20Tired.mp4"),
        title: "My Dog Seems Tired",
        description: "",
      },
    ]);
  }

  if (category === "Telecom Caller ID") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/Telecom/PhishFlagger_FINAL_bright_logo.mp4"),
        title: "PhishFlagger Telecom / Caller ID",
        description: "",
      },
    ]);
  }

  if (category === "Ads") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/PhishFlagger_protecting_communications.mp4"),
        title: "PhishFlagger - Protecting Communications",
        description: "",
      },
    ]);
  }

  if (category === "Shorts") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/Shorts/Professional_ignoring_phone_call_20260911164535.mp4"),
        title: "Ignore the Fraud Call",
        description: "",
      },
    ]);
  }

  if (category === "Manual") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/Manual/Software_walkthrough_flagging_email_20260911164613.mp4"),
        title: "How PhishFlagger Flags an Email",
        description: "",
      },
    ]);
  }

  if (category === "CISO") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/CISO/Security_leader_reviews_dashboard_20260911173520.mp4"),
        title: "Security Leadership Dashboard",
        description: "",
      },
    ]);
  }

  if (category === "Funny") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/Funny/Scammer_call_declined_with_fraud_20260911174436.mp4"),
        title: "Scammer Call Declined",
        description: "",
      },
    ]);
  }

  if (category === "From the Vault") {
    return padToFullPage([
      {
        type: "local",
        src: publicPath("/assets/video1/From%20the%20vault/Numbering_stamp_transitions_to_smartphone_20260911205417.mp4"),
        title: "From Numbering Stamp to Smartphone",
        description: "",
      },
    ]);
  }

  return padToFullPage([]);
}

// The single "best of best" video representing a category on the public
// /video showcase — currently just the first real (non-placeholder) video
// in that category. Adjust per-category here if a different pick is wanted.
export function bestVideoForCategory(category) {
  const videos = categoryVideos(category);
  return (
    videos.find((v) => v.type !== "placeholder" && v.title !== "Coming Soon") || null
  );
}

// A category's grid on the public /video showcase: just its one curated
// "best" pick, padded out to a full page of "Coming Soon" placeholders —
// same visual grid as the full /video1 library, minus the rest of the reel.
export function showcaseVideosForCategory(category) {
  const best = bestVideoForCategory(category);
  return padToFullPage(best ? [best] : []);
}
