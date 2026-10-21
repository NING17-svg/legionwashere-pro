import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Legion Was Here Guides",
  brandMark: "LW",
  gameName: "Legion Was Here",
  domain: "legionwashere.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://legionwashere.pro").replace(/\/$/, ""),
  description:
    "Legion Was Here walkthroughs and guides: read the dossier, rebuild the face in the operating room, survive the interview, and fix the launch and display problems that stop the game before it starts.",
  tagline: "Dossier, face and interview guides for Legion Was Here.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "Legion Was Here Guides",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Legion Was Here on Steam",
      href: "https://store.steampowered.com/app/3492120/Legion_Was_Here/",
      description:
        "The official store page for Legion Was Here, the game these guides cover.",
    },
  ],
  disclaimer:
    "Legion Was Here Guides is an unofficial fan site. It is not affiliated with or endorsed by the developer or the publisher.",
};