import type { PageContent } from "@/types/content";

// Trust pages are written by this site rather than taken from the Guide Editor,
// so their copy here is final. They stay factual about what is an unofficial
// fan site and never imply a relationship with the developer or publisher.

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "About Legion Was Here Guides",
    seoTitle: "About Legion Was Here Guides: An Unofficial Fan Site",
    metaDescription:
      "Legion Was Here Guides is an unofficial fan site for Legion Was Here, the WebGL spy deduction game. What the guides cover, who writes them, and what this site is not.",
    summary:
      "An unofficial, independently written set of guides for Legion Was Here, covering the dossier, the operating-room face creator, the interview and the launch problems players hit first.",
    hero: {
      eyebrow: "About",
      subtitle: "",
      ctas: [
        { label: "Read the walkthrough", href: "/guides/walkthrough" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "Legion Was Here Guides is an unofficial fan site. It is written and maintained independently of Geoffroy Monde and Surefire.Games, and it exists to make the game's three-phase loop — read the dossier, rebuild the face, survive the interview — easier to get through.",
    keyFacts: [
      { label: "Game", value: "Legion Was Here" },
      { label: "Platform covered", value: "Steam" },
      { label: "Written by", value: "Fans, not the developer" },
      { label: "Language", value: "English" },
    ],
    modules: [
      {
        id: "what-this-site-covers",
        type: "prose",
        heading: "What This Site Covers",
        body: "The guides are organised around the loop rather than around the game's menus. One group covers the three phases in order: [how to read a dossier](/guides/dossier-guide), [how to set a face that matches the evidence](/guides/face-creation), and [what the interview asks and how credibility is scored](/guides/interview-questions).\n\nA second group covers the missions themselves — the [full walkthrough of all six contracts](/guides/walkthrough), [The Big Day](/guides/big-day-mission), [how the campaign ends](/guides/final-mission), and the [two hidden achievements](/guides/titlescreen-achievement) that have nothing to do with playing a contract.\n\nThe last group is the one players search for most often in the first ten minutes: [the black screen and purple language screen fixes](/guides/black-screen-fix), [the flashing lights checkbox](/guides/flashing-lights), and [what a save slot does and does not keep](/guides/save-slot).",
      },
      {
        id: "how-the-guides-are-written",
        type: "prose",
        heading: "How The Guides Are Written",
        body: "Every guide starts from the game's own systems rather than from a walkthrough video. The dossier method is built around how the documents in a mission file agree with or contradict each other, the face guide is built around the order the operating room asks for its sliders, and the interview guide is built around the fact that questions are drawn from the same file you already read.\n\nWhere a claim about the game is a fact — the number of face combinations, the mission count, the credibility ceiling, the platform requirements — it comes from the developer's and publisher's own store listing and in-game text. Where it is a judgement about strategy, it is written as advice rather than as a rule, because strategy depends on how much time you have.",
      },
      {
        id: "the-game-these-guides-cover",
        type: "fact-panel",
        heading: "The Game These Guides Cover",
        facts: [
          { label: "Developer", value: "Geoffroy Monde" },
          { label: "Publisher", value: "Surefire.Games" },
          { label: "Platform", value: "Steam" },
          { label: "Release", value: "13 October 2026" },
          { label: "Length", value: "Roughly 3–4 hours for the campaign" },
          { label: "Controls", value: "Mouse or touch only" },
        ],
      },
      {
        id: "not-an-official-source",
        type: "callout",
        tone: "caution",
        title: "This Is Not An Official Source",
        body: "Legion Was Here Guides is not affiliated with, endorsed by, or connected to Geoffroy Monde or Surefire.Games. If you need the authoritative answer about the game, its updates or its support, go to the official Steam listing first. Everything here is written by players.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["walkthrough", "contact"],
    schemaTypes: ["BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-21",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact Legion Was Here Guides",
    seoTitle: "Contact Legion Was Here Guides",
    metaDescription:
      "Email support@legionwashere.pro to report a broken link, correct a guide, or suggest a Legion Was Here guide worth writing next.",
    summary:
      "Corrections, broken links and suggestions all go to one address: support@legionwashere.pro.",
    hero: {
      eyebrow: "Contact",
      subtitle: "",
      ctas: [
        { label: "About this site", href: "/about" },
        { label: "Black screen fixes", href: "/guides/black-screen-fix" },
      ],
    },
    quickAnswer:
      "Write to support@legionwashere.pro. It reaches the person who maintains these guides, and it is the best place for a correction to a fact, a report of a broken link, or a suggestion for a guide that has not been written yet.",
    keyFacts: [
      { label: "Email", value: "support@legionwashere.pro" },
      { label: "For", value: "Corrections, broken links, suggestions" },
      { label: "Not for", value: "Anything about the game developer's own support" },
    ],
    modules: [
      {
        id: "how-to-reach-us",
        type: "prose",
        heading: "How To Reach Us",
        body: "There is no contact form behind a tracker and no ticket queue — just email. Send it to **support@legionwashere.pro** and it arrives in the same inbox that the guides are written from.\n\nBecause Legion Was Here is not a live-service game, there is nothing here that needs an account, a login or a subscription. If you can read the site, you can write to it.",
      },
      {
        id: "what-to-include",
        type: "prose",
        heading: "What To Include In A Message",
        body: "For a correction, the most useful thing is the guide's address and the sentence that is wrong:\n\n- the page it is on, such as `/guides/interview-questions`\n- what the page currently says\n- what it should say, and where you saw it\n\nFor a broken link, the address you clicked and the page you were on is enough — the site is exported as static files, so links break when a page is renamed, and a note like that gets it fixed the same week.",
      },
      {
        id: "what-we-cannot-answer",
        type: "callout",
        tone: "unknown",
        title: "What This Address Cannot Help With",
        body: "Account problems, refunds, crashes that happen on a machine we cannot see, and anything to do with your copy of the game all belong to the developer and the platform. Contact support@legionwashere.pro only for the content of this site — not for your Steam purchase, and not for the game's own support.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "walkthrough"],
    schemaTypes: ["BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-21",
  },
  {
    id: "privacy",
    translationKey: "privacy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy",
    url: "/privacy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy",
    seoTitle: "Privacy | Legion Was Here Guides",
    metaDescription:
      "Legion Was Here Guides is a static site with no accounts and no analytics of its own. What the advertising partner may collect, and how to avoid it.",
    summary:
      "A static fan site with no accounts, no comments and no analytics of its own — the only third party involved is the advertising partner that serves the ads.",
    hero: {
      eyebrow: "Privacy",
      subtitle: "",
      ctas: [
        { label: "About this site", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "This site has no accounts, no login, no comments and no analytics script of its own. It is a set of static files. The one third party involved is the advertising partner that serves the ad slots, and it may set its own cookies — which is why there is an opt-out link below.",
    keyFacts: [
      { label: "Accounts", value: "None" },
      { label: "Analytics", value: "None of our own" },
      { label: "Third party", value: "The advertising partner" },
      { label: "Email", value: "Only if you choose to write" },
    ],
    modules: [
      {
        id: "what-this-site-collects",
        type: "prose",
        heading: "What This Site Collects",
        body: "Nothing, on your behalf. The guides are static HTML files: there is no account to create, no comment form, no newsletter sign-up, no analytics script and no fingerprinting code shipped by this site.\n\nIf you email support@legionwashere.pro, that address is used to reply to you and for nothing else. It is not added to a list, sold, or passed to anyone.",
      },
      {
        id: "what-the-ad-partner-may-collect",
        type: "prose",
        heading: "What The Advertising Partner May Collect",
        body: "The ad slots on these pages are filled by a third-party advertising partner. When an ad is served, that partner — not this site — decides what is set on your device, and its own privacy policy governs what it does with that. This can include cookies, an approximate location derived from your IP address, and an identifier used to limit how often the same ad is shown to you.\n\nThe partner's opt-out page is the place to manage or refuse those cookies: [opt out of personalised advertising](https://optout.aboutads.info/) covers the industry opt-out programme that most such partners participate in.",
      },
      {
        id: "how-to-limit-it",
        type: "callout",
        tone: "tip",
        title: "If You Would Rather Not See Personalised Ads",
        body: "Use the opt-out link above, or the tracking-protection setting in your browser. Because every page here is static, blocking cookies and third-party requests costs you nothing: the guides, the images and the navigation all load without any of it.",
      },
      {
        id: "external-links",
        type: "prose",
        heading: "External Links",
        body: "Where a guide points at something outside this site — the game's store listing, or an opt-out page — that destination has its own privacy policy and its own use of your data. This policy covers legionwashere.pro only.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact"],
    schemaTypes: ["BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-21",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms",
    seoTitle: "Terms | Legion Was Here Guides",
    metaDescription:
      "The terms covering use of Legion Was Here Guides: an unofficial fan site, its relationship to the developer and publisher, and the limits on how its guides may be reused.",
    summary:
      "These terms cover an unofficial fan site: no affiliation with the game's developer or publisher, no warranty on the advice, and the usual limits on reuse.",
    hero: {
      eyebrow: "Terms",
      subtitle: "",
      ctas: [
        { label: "About this site", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "Legion Was Here Guides is an independent fan site. It is not affiliated with Geoffroy Monde or Surefire.Games, the advice in it is published without warranty, and Legion Was Here and its associated names remain the property of their respective owners.",
    keyFacts: [
      { label: "Operator", value: "Independent, unofficial" },
      { label: "Affiliation", value: "None with the developer or publisher" },
      { label: "Advice", value: "Published without warranty" },
      { label: "Game names", value: "Property of their respective owners" },
    ],
    modules: [
      {
        id: "unofficial-site",
        type: "prose",
        heading: "Unofficial Site",
        body: "legionwashere.pro is an independent, fan-run site. It has no connection to, and no endorsement from, Geoffroy Monde, the developer of Legion Was Here, or Surefire.Games, its publisher. Nothing on this site should be read as an official announcement, a support channel, or a statement of policy on their behalf.\n\nWhere these guides describe the game, they describe a released version of it on Steam. If the game changes, these pages will eventually lag behind it, and the game itself remains the authority on how it works.",
      },
      {
        id: "no-warranty",
        type: "prose",
        heading: "No Warranty On The Advice",
        body: "Everything published here is written by players and offered as it stands. A strategy that works for one run may not work for another, and a factual detail can be wrong until someone writes in to say so.\n\nUse these guides as a second opinion alongside the game itself, not instead of it. If a guide and the game disagree, the game is right.",
      },
      {
        id: "intellectual-property",
        type: "prose",
        heading: "Legion Was Here And Other Names",
        body: "Legion Was Here, the names of its characters, and any other names, logos or assets that appear in the game are the property of their respective owners. They are used here only to identify the game these guides are about, under fair use, and to show what the game actually looks like.\n\nThe written guides on this site are the work of this site. You may read them, link to them, and quote short passages with a link back. Republishing a whole guide elsewhere is not something this site grants.",
      },
      {
        id: "liability",
        type: "callout",
        tone: "caution",
        title: "Liability",
        body: "This site is provided as it is, with no warranty of any kind, and the people who run it are not liable for any loss or damage arising from its use — including lost progress, purchases made through links from these pages, or anything done in reliance on the advice here. Questions about a problem go to support@legionwashere.pro; anything about your copy of the game goes to the platform it was bought on.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact"],
    schemaTypes: ["BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-21",
  },
];
