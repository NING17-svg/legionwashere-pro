# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

A growth-relevant edit is not complete until this file is updated. Entries below cover
`legionwashere.pro` only; they do not carry over the shared template's history.

## Change Log

### 2026-10-21 - Adsterra ad codes filled into the approved placement inventory

- Replaced the empty placeholder values in `src/data/ads.ts` with the real Adsterra codes for all 17 units in this site's `ad-placement-manifest.json`. Every key of the manifest inventory is present exactly once and non-empty; no key outside the inventory was added and no switch field was introduced.
- The inventory selects 8 distinct platform formats/sizes, and the same-format page keys deliberately share one platform placement and one code: `728x90` (`page-top-728x90`, `home-topic-break-728x90`, `guide-section-break-728x90`), `468x60` (`page-top-468x60`, `home-topic-break-468x60`, `home-directory-end-468x60`, `guide-section-break-468x60`, `guide-before-faq-468x60`), `320x50` (`page-top-320x50`, `home-directory-end-320x50`, `guide-section-break-320x50`, `guide-before-faq-320x50`), plus `300x250`, `160x600`, `160x300`, `Native Banner` and the footer `Smartlink` URL. Different sizes never share a code.
- Only formats selected by the page inventory were requested and collected. Popunder and Social Bar are not in this inventory and were neither requested nor written into the site.
- No ad component, slot position, page structure, content or SEO was changed; the layout remains exactly what Page Builder produced. The target layout is read-only for this step.
- Validation: `npm run verify` (typecheck, lint, build) clean. This records that the codes were written, validated locally and pushed; it does not claim any Cloudflare build result or any live ad request or impression.

### 2026-10-21 - Analytics and search verification wired into the production build

- Created this site's own GA4 property (`properties/559935107`, display name `legionwashere.pro`, timezone `Asia/Shanghai`) and its web data stream (`properties/559935107/dataStreams/16170957808`), measurement ID `G-FHNP8KNWR1`. These belong to `legionwashere.pro` only and are not reused from another site.
- Wrote the measurement ID into `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `wrangler.jsonc`, so the tag is baked in when the shared pool builds this site.
- Generated this site's Bing `msvalidate.01` code and wrote it into `NEXT_PUBLIC_BING_SITE_AUTH_CODE` in `wrangler.jsonc`. It was set on the site repo only and deliberately not on the shared pool's build variables, so no other pool member inherits it.
- Both are `NEXT_PUBLIC_*` values inlined at build time, so they must ship in the same site commit to take effect together in one shared-pool rebuild.
- Validation: GA4 admin API preflight returned the account; the connector reported the new property and stream. Public verification of the tag, the marker `source_commit` and the Bing meta tag is recorded in the launch result, not claimed here.

### 2026-10-21 - Launch integration: production config and site handoff files

- Set the site to its production identity for `legionwashere.pro`: `NEXT_PUBLIC_SITE_URL` in `src/data/site.ts` and `.env.example`, and the `vars` block in `wrangler.jsonc` (`NEXT_PUBLIC_SITE_URL`, plus the `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_BING_SITE_AUTH_CODE` keys left empty for this step). `next.config.ts` keeps `output: "export"`; `wrangler.jsonc` serves `./out` with `not_found_handling: "404-page"` and `drop-trailing-slash`, and has no `main` Worker script.
- Regenerated the three handoff files against the routes this site actually publishes. `CONTENT_INDEX.md` now lists the 16 real routes with their keywords, intent, CTAs, internal-link roles, the per-section `next_steps` map and the ad-slot index; the previous copy still described the template's `/wiki`, `/guides`, `/release-date` and `/faq` pages, none of which exist here. `AGENTS.md` referred to this site as `example.com` in two places and now names `legionwashere.pro`. This log's earlier template history was dropped so the file records only this site.
- Confirmed the fixed AdSense ownership trio survived assembly: the `google.com, pub-4194035852162505, DIRECT, f08c47fec0942fa0` record in `public/ads.txt`, the `google-adsense-account` meta tag `ca-pub-4194035852162505` in `src/app/layout.tsx`, and the `pagead2.googlesyndication.com` loader for the same client. These are publisher identifiers and were not changed.
- Added the IndexNow key file `public/indexnow-af8a4f40aa00c5b2ccae1d01c00dccbb.txt` (`npm run indexnow:setup`), used only by `indexnow:submit` to announce changed URLs to participating search engines.
- The shared-pool binding for this site is written by the launch deployer, not by hand: it adds `.shared-worker.json` and `.github/workflows/shared-worker.yml` pointing at the reserved pool. The pool deploy hook is a credential held as a GitHub secret (`SHARED_WORKER_DEPLOY_HOOK`) and is never written into site source.
- Validation: `npm run verify` (typecheck, lint, build) clean; `npm run routes:manifest` reports 16 routes with no trailing slash except `/`; every route's title, description, H1 and canonical point at `https://legionwashere.pro`; all 17 keys in `src/data/ads.ts` are still empty.

### 2026-10-21 - Legion Was Here guide site assembled from the guide-v4 drafts

- Built the 16 published routes from the 11 approved guide drafts plus the site index and four trust pages: `/`, `/guides/walkthrough`, `/guides/demo-walkthrough`, `/guides/dossier-guide`, `/guides/face-creation`, `/guides/interview-questions`, `/guides/big-day-mission`, `/guides/final-mission`, `/guides/titlescreen-achievement`, `/guides/black-screen-fix`, `/guides/flashing-lights`, `/guides/save-slot`, `/about`, `/contact`, `/privacy`, `/terms`.
- Removed the template routes that no draft supported: `/wiki`, the `/guides` aggregate, `/release-date` and `/faq`. No FAQ was invented, so `src/data/faq.ts`, `src/data/entities.ts`, `wiki-pages.ts` and `release-pages.ts` are gone and no FAQ schema is emitted. Directory duties pass to the homepage `guide-index` module and the persistent sidebar.
- Named the privacy page `/privacy` and fixed the footer link that still pointed at the template's `/privacy-policy`; the exported site has zero dead internal `href`s.
- Restricted guide ad slots to `pageType === "guides"` after the shared `ContentPage` had also emitted them on the four trust pages, and restricted `page-top` to the homepage so a guide's answer is never placed behind an ad.
- Set the visual identity from the actual game screenshots rather than a template preset: magenta `#F04090` and plum `#501070` on warm paper, geometric heading stack, `radius: 10px`, low-contrast dot motif. Added a local `clamp(32px, 3.4vw, 50px)` H1 override because the shared `visual-cover` rule compressed the homepage H1 to six lines; the headline text itself is unchanged.
- Registered the four Collector images with real dimensions, alt text and per-page usage. No official game logo is used.
- Validation: `npm run verify` clean with no errors or warnings; 16 routes in `route-manifest.json`; every page's `seoTitle`, `metaDescription` and `h1` copied verbatim from the draft frontmatter and `# H1` with 0 deviations; 25 `next_steps` links all land inside their named H2's body; no template placeholder text in any exported HTML.