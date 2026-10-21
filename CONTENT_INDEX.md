# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

This file lists the 16 routes the site actually publishes on `legionwashere.pro`. There is no `/wiki`, no `/guides` aggregate page, no `/release-date` and no `/faq`: the guide drafts did not support those pages, so they are not routes and must not be reintroduced. The only route outside this list is the `404` fallback.

## Page Inventory

The rows below are the primary-locale baseline (`en-US`, root path, no locale prefix). The site is single-locale; `translationKey` equals the page `id` and the only alternate is the page itself.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | legion was here guide | Decide where to start and what the site covers | Read the walkthrough / Play the free demo | Hub | Opens with `featured-guides` entry cards, then the three-phase route, then the full guide index. Hero image `/images/lwh-library-hero.jpg`. |
| `/guides/walkthrough` | `src/data/pages/guide-pages.ts` | Guide | legion was here walkthrough | Understand the campaign loop and the six missions | Read the mission list / continue to a specific mission | Campaign hub | Outbound: `/guides/big-day-mission`, `/guides/final-mission`, `/guides/dossier-guide`, `/guides/interview-questions`. Carries the longest body. |
| `/guides/demo-walkthrough` | `src/data/pages/guide-pages.ts` | Guide | legion was here demo walkthrough | Play the free Neptunian demo before buying | Read the demo dossier / build the face / survive the interview | Getting-started hub | Outbound: `/guides/dossier-guide`, `/guides/face-creation`, `/guides/interview-questions`, `/guides/walkthrough`. |
| `/guides/dossier-guide` | `src/data/pages/guide-pages.ts` | Guide | legion was here dossier guide | Sort dossier material into usable clues | Turn appearance clues into a face / biography clues into answers | Clue-investigation hub | Opening image `/images/lwh-screenshot-2.jpg`. Renders the three-bucket method as cards. |
| `/guides/face-creation` | `src/data/pages/guide-pages.ts` | Guide | legion was here face creation | Build a face that matches the dossier at the operating room | Set the face in this order / continue to the interview | Face-construction hub | Opening image `/images/lwh-screenshot-1.jpg`. Outbound: `/guides/interview-questions`. |
| `/guides/interview-questions` | `src/data/pages/guide-pages.ts` | Guide | legion was here interview questions | Answer interview questions and survive the run | Answer from hand notes / go for 100 percent credibility | Interview hub | Opening image `/images/lwh-screenshot-3.jpg`. Outbound: `/guides/final-mission`, `/guides/walkthrough`. |
| `/guides/big-day-mission` | `src/data/pages/guide-pages.ts` | Guide | legion was here big day mission | Clear the sixth contract and its two achievements | Check both conditions for Jujuk World Peace | Mission page | Outbound: `/guides/interview-questions`, `/guides/final-mission`. |
| `/guides/final-mission` | `src/data/pages/guide-pages.ts` | Guide | legion was here final mission | Learn how the campaign really ends | Close the credibility gap / sit through the credits | Mission page | Outbound: `/guides/titlescreen-achievement`, `/guides/interview-questions`. |
| `/guides/titlescreen-achievement` | `src/data/pages/guide-pages.ts` | Guide | legion was here lost in the titlescreen achievement | Unlock the rarer titlescreen achievement and theme song | Find both achievements | Achievement page | Outbound: `/guides/big-day-mission`, `/guides/final-mission`. No page image; the subject is a screen, not a place. |
| `/guides/black-screen-fix` | `src/data/pages/guide-pages.ts` | Guide | legion was here black screen fix | Get past a black or purple screen at launch | Verify files and try windowed mode | Troubleshooting hub | Renders the minimum-spec table with GFM in a locally scrolling container. Outbound: `/guides/flashing-lights`, `/guides/walkthrough`, `/guides/demo-walkthrough`. |
| `/guides/flashing-lights` | `src/data/pages/guide-pages.ts` | Guide | legion was here flashing lights fix | Turn off the flashing-lights startup effect | Find the W/O Flash checkbox | Troubleshooting page | Outbound: `/guides/black-screen-fix`, `/guides/demo-walkthrough`. |
| `/guides/save-slot` | `src/data/pages/guide-pages.ts` | Guide | legion was here save slot | Find out where progress is stored after a crash | Check what a lost save looks like | Troubleshooting page | Outbound: `/guides/walkthrough`. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about legion was here guides | Check editorial policy and what the site covers | Contact | Trust | States that the site is unofficial and not an official source. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact legion was here guides | Report a broken link or a correction | Email `support@legionwashere.pro` | Trust | Lists what to include and what cannot be answered. |
| `/privacy` | `src/data/pages/site-pages.ts` | Legal | legion was here guides privacy | Understand analytics and ad-partner collection | Read terms | Trust | URL is `/privacy`, **not** `/privacy-policy`; the footer links here. Mentions GA4 only once it is configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | legion was here guides terms | Understand acceptable use of an unofficial fan site | Read privacy | Trust | Covers unofficial status, no warranty, intellectual property, liability. |

## Generated Route Families

- Home and trust/legal pages: authored in `src/data/pages/home.ts` and `src/data/pages/site-pages.ts` with explicit locale and final URL.
- Guide pages: authored in `src/data/pages/guide-pages.ts`; each carries its own `quickAnswer`, section `content-modules` and `next_steps`.
- There is no `src/data/entities.ts` and no `src/data/faq.ts` in this site; the guide drafts contained no FAQ and none was invented, so no FAQ schema is emitted.
- Final route inventory: `npm run routes:manifest` writes `route-manifest.json` (16 routes, all slashless except `/`).
- Single-locale site: `src/data/site.ts` sets `primaryLocale: "en-US"` with an empty `pathPrefix`, so all routes live on the root path.

## Content Clusters

Three phases mirror the game's own loop:

- Getting started: `/guides/walkthrough`, `/guides/demo-walkthrough`
- Dossier and face: `/guides/dossier-guide`, `/guides/face-creation`
- Interview and campaign: `/guides/interview-questions`, `/guides/big-day-mission`, `/guides/final-mission`
- Achievements and troubleshooting: `/guides/titlescreen-achievement`, `/guides/black-screen-fix`, `/guides/flashing-lights`, `/guides/save-slot`
- Trust and legal: `/about`, `/contact`, `/privacy`, `/terms`

## Internal Linking Map

Every guide carries its `next_steps` links **inside the body of the named H2 section** (rendered by `RichText` as a normal in-prose `<a>`), not only in the sidebar or footer. When one H2 owns several `next_steps`, that section keeps all of its links and the closing sentence is never dropped.

| From | H2 that carries the link | To |
|---|---|---|
| `/guides/walkthrough` | The Six Missions In The Campaign | `/guides/big-day-mission` |
| `/guides/walkthrough` | The Six Missions In The Campaign | `/guides/final-mission` |
| `/guides/walkthrough` | Notes On Legion's Left Hand | `/guides/dossier-guide` |
| `/guides/walkthrough` | Why Runs Fail And What Replaying Changes | `/guides/interview-questions` |
| `/guides/demo-walkthrough` | Reading The Demo Dossier Twice | `/guides/dossier-guide` |
| `/guides/demo-walkthrough` | Building Legion's Face | `/guides/face-creation` |
| `/guides/demo-walkthrough` | Surviving The Interview | `/guides/interview-questions` |
| `/guides/demo-walkthrough` | After You Clear The Demo | `/guides/walkthrough` |
| `/guides/dossier-guide` | Turning Appearance Clues Into A Face | `/guides/face-creation` |
| `/guides/dossier-guide` | Turning Biography Clues Into Answers | `/guides/interview-questions` |
| `/guides/face-creation` | When The Face Is Not Enough | `/guides/interview-questions` |
| `/guides/interview-questions` | Going For 100 Percent Credibility | `/guides/final-mission` |
| `/guides/interview-questions` | Wrong Answers End The Run | `/guides/walkthrough` |
| `/guides/big-day-mission` | Getting Jujuk World Peace | `/guides/interview-questions` |
| `/guides/big-day-mission` | Where The Big Day Sits In The Campaign | `/guides/final-mission` |
| `/guides/final-mission` | Sitting Through The Credits | `/guides/titlescreen-achievement` |
| `/guides/final-mission` | Closing The Credibility Gap | `/guides/interview-questions` |
| `/guides/titlescreen-achievement` | Where These Two Fit In The Rest Of The List | `/guides/big-day-mission`, `/guides/final-mission` |
| `/guides/black-screen-fix` | If The Game Starts But The Screen Looks Wrong | `/guides/flashing-lights` |
| `/guides/black-screen-fix` | What To Do Once The Game Launches | `/guides/walkthrough`, `/guides/demo-walkthrough` |
| `/guides/flashing-lights` | The One Gotcha About That Checkbox | `/guides/black-screen-fix` |
| `/guides/flashing-lights` | What Reduced Mode Does Not Promise | `/guides/demo-walkthrough` |
| `/guides/save-slot` | The Legion Was Here Save Slot Bug Is Rarely A Lost File | `/guides/walkthrough` |

Trust pages do not carry guide ad slots and do not link into the guide tree.

## Ad Placement Index

`ad-placement-manifest.json` and `src/data/ads.ts` must stay in one-to-one agreement. All 17 codes are empty by design; only the Adsterra Integrator fills them after launch.

| Slot | Applies to | Desktop | Mobile |
|---|---|---|---|
| `page-top` | `/` only | `page-top-728x90`, `page-top-468x60` | `page-top-320x50` |
| `home-topic-break` | `/` | `home-topic-break-728x90`, `home-topic-break-468x60` | `home-topic-break-300x250` |
| `home-directory-end` | `/` | `home-directory-end-468x60` | `home-directory-end-320x50` |
| `guide-native` | `/guides/*` | `guide-native-native-banner` | `guide-native-native-banner` |
| `guide-section-break` | `/guides/*` | `guide-section-break-728x90`, `guide-section-break-468x60` | `guide-section-break-320x50` |
| `guide-before-faq` | `/guides/*` | `guide-before-faq-468x60` | `guide-before-faq-320x50` |
| `guide-rail` | `/guides/*` | `guide-rail-160x600`, `guide-rail-160x300` | none (sidebar hidden) |
| `footer-sponsored` | all pages | `footer-sponsored-smartlink` | `footer-sponsored-smartlink` |

## Change Discipline

- Update this file whenever a URL, route, page type, keyword, CTA, title, H1, canonical, schema, internal-link role or ad slot changes.
- Update `GROWTH_LOG.md` in the same change; a growth-relevant edit is not complete until the log is updated.
- Preserve the fixed AdSense ownership trio in `public/ads.txt`, the `google-adsense-account` meta tag and the root layout script.