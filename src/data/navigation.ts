import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

// Grouping follows the Guide Editor topic map: a player arriving with a phase
// to finish or a problem to solve should land on its group first. Every entry
// points at a page that actually exists in this site.
export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Home" } },
  {
    href: "/guides/walkthrough",
    labels: { "en-US": "Getting started" },
    children: [
      { href: "/guides/walkthrough", labels: { "en-US": "Walkthrough" } },
      { href: "/guides/demo-walkthrough", labels: { "en-US": "Demo walkthrough" } },
    ],
  },
  { href: "/guides/dossier-guide", labels: { "en-US": "Clue investigation" } },
  { href: "/guides/face-creation", labels: { "en-US": "Face construction" } },
  { href: "/guides/interview-questions", labels: { "en-US": "Interview questions" } },
  {
    href: "/guides/big-day-mission",
    labels: { "en-US": "Missions" },
    children: [
      { href: "/guides/big-day-mission", labels: { "en-US": "The Big Day" } },
      { href: "/guides/final-mission", labels: { "en-US": "The final mission" } },
    ],
  },
  { href: "/guides/titlescreen-achievement", labels: { "en-US": "Achievements" } },
  {
    href: "/guides/black-screen-fix",
    labels: { "en-US": "Troubleshooting" },
    children: [
      { href: "/guides/black-screen-fix", labels: { "en-US": "Black and purple screen" } },
      { href: "/guides/flashing-lights", labels: { "en-US": "Flashing lights" } },
      { href: "/guides/save-slot", labels: { "en-US": "Save slots and progress" } },
    ],
  },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}