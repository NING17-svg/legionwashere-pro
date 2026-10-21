import type { ModuleAdAnchor } from "@/components/ads/AdModuleSequence";
import type { PageContent } from "@/types/content";

// Every anchor points at a complete authored module that exists on the page, so
// an ad always lands between whole sections rather than inside a step list,
// table or card group. See page-assembly.md §3 for the per-page chapter table.

/** Homepage: between the finished three-phase topic group and the full index. */
const HOME_TOPIC_BREAK_AFTER = "three-phase-loop";
/** Homepage: where the complete guide index ends, before the supplementary block. */
const HOME_DIRECTORY_END_AFTER = "all-guides";

export function pageAdAnchors(page: PageContent): ModuleAdAnchor[] {
  if (page.id === "home") {
    return [
      { after: HOME_TOPIC_BREAK_AFTER, slot: "home-topic-break" },
      { after: HOME_DIRECTORY_END_AFTER, slot: "home-directory-end" },
    ];
  }

  // Only guide pages carry the in-article guide slots. Trust pages (About,
  // Contact, Privacy, Terms) are short and carry the footer unit only.
  if (page.pageType !== "guides") return [];

  // Guide pages break after the second complete chapter, which leaves the
  // opening answer and at least one full section above the banner.
  const secondChapter = page.modules[1];
  return secondChapter ? [{ after: secondChapter.id, slot: "guide-section-break" }] : [];
}

/** True when a page is an article and may carry the in-article guide slots. */
export function isGuideArticle(page: PageContent): boolean {
  return page.pageType === "guides";
}