import type { PageContent } from "@/types/content";

// content/index.md — seoTitle, metaDescription and h1 are copied verbatim from
// its frontmatter title, frontmatter description and body H1 respectively.
export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "visual-cover" },
  h1: "Legion Was Here Guides: Dossier, Face, Interview",
  seoTitle: "Legion Was Here Guide: Dossier, Face And Interview Loop",
  metaDescription:
    "Legion Was Here runs on three phases: read the dossier, rebuild the face in the operating room, survive the interview. Guides for the six missions and fixes.",
  summary:
    "Walkthroughs for the dossier, the operating-room face creator and the interview phase, plus the six missions, the achievements and the launch fixes.",
  hero: {
    eyebrow: "Unofficial guide site",
    subtitle:
      "The guides here cover the whole loop, the missions and the achievements, plus the launch and display problems that stop the game before it starts.",
    assetId: "home-hero",
    ctas: [
      { label: "Read the walkthrough", href: "/guides/walkthrough" },
      { label: "Play the free demo", href: "/guides/demo-walkthrough" },
    ],
  },
  quickAnswer: "",
  keyFacts: [
    { label: "Campaign length", value: "3–4 hours" },
    { label: "Contracted missions", value: "Six" },
    { label: "Controls", value: "Mouse or touch only" },
    { label: "Face combinations", value: "More than 900 million" },
  ],
  modules: [
    {
      id: "start-here",
      type: "featured-guides",
      heading: "Start Here",
      lead: {
        title: "Legion Was Here walkthrough",
        href: "/guides/walkthrough",
        description:
          "All six contracted missions with the target you impersonate, who questions you, and the dossier and interview answers each one decides.",
      },
      supporting: [
        {
          title: "Demo walkthrough",
          href: "/guides/demo-walkthrough",
          description:
            "The free demo covers the tutorial and one complete mission on the same systems, which is the cheapest place to learn the loop.",
        },
        {
          title: "Black screen and purple language screen",
          href: "/guides/black-screen-fix",
          description:
            "The game renders through WebView2, so the usual high-performance GPU setting does nothing. The registry override that does work, plus the Linux steps.",
        },
      ],
    },
    {
      id: "what-it-is",
      type: "prose",
      heading: "What Legion Was Here Is",
      body: "Legion Was Here is a dark-comedy spy deduction game of roughly 3–4 hours. You play Legion, an agent who can change his appearance at will and takes jobs from everyone from the FBI and MI6 to ghosts and amusement-park mascots. Each contract asks you to impersonate a specific person without being caught, and every one of the six missions is the same deduction played against a different dossier.",
    },
    {
      id: "three-phase-loop",
      type: "progression",
      heading: "What Legion Was Here Asks You To Do",
      stages: [
        {
          label: "Phase one",
          title: "Read the dossier",
          href: "/guides/dossier-guide",
          description:
            "Photographs, clippings, letters and small everyday items hold the target's appearance and history, with a few clues planted to mislead you.",
        },
        {
          label: "Phase two",
          title: "Rebuild the face",
          href: "/guides/face-creation",
          description:
            "Choosing among more than 900 million combinations from the evidence rather than from preference.",
        },
        {
          label: "Phase three",
          title: "Survive the interview",
          href: "/guides/interview-questions",
          description:
            "Multiple-choice questions from the people who knew the target, answered from notes written on Legion's left hand, since the dossier is not reopened once you are inside.",
        },
      ],
    },
    {
      id: "all-guides",
      type: "guide-index",
      heading: "All Legion Was Here Guides",
      columns: 2,
      groups: [
        {
          title: "Master the three phases",
          items: [
            {
              label: "Dossier guide",
              href: "/guides/dossier-guide",
              description:
                "Every document in the game is double sided. These are the backs that carry the answers, mission by mission.",
            },
            {
              label: "Face creation",
              href: "/guides/face-creation",
              description:
                "The ten numbered traits in the editor, plus the exact recipe for all six targets.",
            },
            {
              label: "Interview questions",
              href: "/guides/interview-questions",
              description:
                "The answers, which questions always play, and the pairs that swap phrasings between replays.",
            },
          ],
        },
        {
          title: "Missions and achievements",
          items: [
            {
              label: "The Big Day mission",
              href: "/guides/big-day-mission",
              description:
                "You are Ralf, Helga is questioning you and Alex walks in dressed as Roomzy. The eleven mascot names and every answer.",
            },
            {
              label: "The final mission",
              href: "/guides/final-mission",
              description:
                "How the campaign ends, and the two-poem clue chain behind Legion: Origins.",
            },
            {
              label: "Hidden achievements",
              href: "/guides/titlescreen-achievement",
              description:
                "The two rarest unlocks in the game: the cone-eared face you rebuild in the editor, and one that is a confirmed bug.",
            },
          ],
        },
        {
          title: "When something goes wrong",
          items: [
            {
              label: "Black screen and purple language screen",
              href: "/guides/black-screen-fix",
              description:
                "The game renders through WebView2, so the usual high-performance GPU setting does nothing. The registry override that does work, plus the Linux steps.",
            },
            {
              label: "Flashing lights",
              href: "/guides/flashing-lights",
              description:
                "The single checkbox that controls intense visual effects, and its one gotcha.",
            },
            {
              label: "Save slots and progress",
              href: "/guides/save-slot",
              description: "Why a failed run does not delete anything you finished.",
            },
          ],
        },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["WebSite", "CollectionPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-22",
};