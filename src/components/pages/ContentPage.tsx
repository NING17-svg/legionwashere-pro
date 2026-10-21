import { AdSlot } from "@/components/ads/AdSlot";
import { AnswerSummary } from "@/components/content/AnswerSummary";
import { FAQBlock } from "@/components/content/FAQBlock";
import { AdModuleSequence, type ModuleAdAnchor } from "@/components/ads/AdModuleSequence";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { RightRail } from "@/components/layout/RightRail";
import { PageContents } from "@/components/content/PageContents";
import { PageHero } from "@/components/pages/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { theme } from "@/data/theme";
import { isGuideArticle } from "@/data/ad-anchors";
import { getFaqsForPage, getRelatedPages } from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  collectionPageSchema,
  faqSchema,
} from "@/lib/schema";
import type { ThemeConfig } from "@/types/theme";
import type { PageContent } from "@/types/content";

export function ContentPage({ page, themeConfig = theme, adAnchors = [] }: { page: PageContent; themeConfig?: ThemeConfig; adAnchors?: ModuleAdAnchor[] }) {
  const faqs = getFaqsForPage(page);
  const related = getRelatedPages(page);
  // Trust pages carry only BreadcrumbList, so they fall through to Article by
  // page type; guide pages declare Article and get the article schema.
  const primarySchema = page.schemaTypes.includes("Article")
    ? articleSchema(page)
    : collectionPageSchema(page);
  const variant =
    page.presentation.shell === "content"
      ? (page.presentation.variant ?? themeConfig.variants.content)
      : themeConfig.variants.content;

  return (
    <article className="content-page" data-variant={variant}>
      <JsonLd data={breadcrumbSchema(page)} />
      <JsonLd data={primarySchema} />
      {faqs.length ? <JsonLd data={faqSchema(faqs)} /> : null}
      <PageHero page={page} themeConfig={themeConfig} />
      {/* No page-top banner here: the guide hero holds only the H1, so a banner
          under it would sit in front of the answer. guide-native takes the
          approved slot after the short answer and the collapsed page contents. */}
      <div className="content-layout" data-variant={variant}>
        <div className="article-body">
          <AnswerSummary
            answer={page.quickAnswer}
            context={page.quickAnswerContext}
            locale={page.locale}
          />
          <div className={variant === "reading-right-rail" ? "inline-contents mobile-contents" : "inline-contents"}><PageContents page={page} collapsible /></div>
          {isGuideArticle(page) ? <AdSlot slot="guide-native" /> : null}
          <AdModuleSequence modules={page.modules} anchors={adAnchors} />
          {isGuideArticle(page) ? <AdSlot slot="guide-before-faq" /> : null}
          <FAQBlock faqs={faqs} />
          <RelatedLinks pages={related} />
        </div>
        {variant === "reading-right-rail" ? <RightRail page={page} /> : null}
      </div>
    </article>
  );
}
