import type { AssetManifest } from "@/types/assets";

// Collector display images for legionwashere-pro, copied byte-for-byte from
// <project>/collector/images/ into site/public/images/. Only the known facts
// are recorded; the delivery carried no separate source attribution.
export const assetManifest = {
  "home-hero": {
    id: "home-hero",
    src: "/images/lwh-library-hero.jpg",
    alt: "Cartoon cover art for Legion Was Here: a face hidden behind two spread hands, with one bright pink eye showing through the fingers against a flat magenta banner.",
    width: 1920,
    height: 620,
    sourcePage: "collector/images/lwh-library-hero.jpg",
    usage: "Homepage hero, to the right of the headline and entry links.",
    pageIds: ["home"],
    // The subject sits in the right third of the banner; keep it when cropped.
    objectPosition: "right center",
    fallback: "surface",
  },
  "face-creator-room": {
    id: "face-creator-room",
    src: "/images/lwh-screenshot-1.jpg",
    alt: "Legion lying in the operating room during a mission, beside a steel tray of prosthetic parts — a severed ear, an artificial eye, lipstick and scissors — with a dossier marked Legion and a police badge on the table.",
    width: 1920,
    height: 1080,
    sourcePage: "collector/images/lwh-screenshot-1.jpg",
    usage: "Page opening image for the face creation guide, to the right of the headline.",
    pageIds: ["face-creation"],
    objectPosition: "center",
    fallback: "surface",
  },
  "dossier-desk": {
    id: "dossier-desk",
    src: "/images/lwh-screenshot-2.jpg",
    alt: "A mission dossier spread across a desk: brief and objectives sheets, a letter, a translation card, an anatomy diagram of the target, and a small hand icon marking the notes Legion carries.",
    width: 1920,
    height: 1080,
    sourcePage: "collector/images/lwh-screenshot-2.jpg",
    usage: "Page opening image for the dossier guide, to the right of the headline.",
    pageIds: ["dossier-guide"],
    objectPosition: "center",
    fallback: "surface",
  },
  "interview-choices": {
    id: "interview-choices",
    src: "/images/lwh-screenshot-3.jpg",
    alt: "The interview phase: a target in a bucket hat and round pink sunglasses stands against a purple night city while a dialogue box and four stacked multiple-choice answers wait for a reply.",
    width: 1920,
    height: 1080,
    sourcePage: "collector/images/lwh-screenshot-3.jpg",
    usage: "Page opening image for the interview questions guide, to the right of the headline.",
    pageIds: ["interview-questions"],
    objectPosition: "center",
    fallback: "surface",
  },
} satisfies AssetManifest;