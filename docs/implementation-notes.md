# Implementation Notes

## Current State

- Astro app with Tailwind-driven styling and a warm custom palette.
- Shared layout in `src/layouts/Layout.astro` and shared navigation in `src/components/Header.astro`.
- The logo system is now code-based and lives in `src/components/BrandLogo.astro`, with `BrandMark.astro` handling link semantics and reuse.
- The header uses the primary wordmark variant, the footer uses the signature variant, and the favicon uses the compact monogram SVG in `public/favicon.svg`.
- The old exported raster/script logo is no longer the source of truth for the UI; the new SVG variants are more robust at small and large sizes.
- Logo sizing is controlled directly via Tailwind width classes on the shared wrapper, which keeps the layout stable and makes future tuning straightforward.
- The shared layout viewport now includes `initial-scale=1`, and the body is configured to hide horizontal overflow so the responsive surfaces behave consistently on mobile.
- Page-level SEO is centralized in `src/components/Seo.astro`, with canonicals, hreflang alternates, and Open Graph basics generated from the shared locale helpers.
- Restaurant and page structured data are centralized in `src/components/StructuredData.astro` and injected through the shared layout so schema stays aligned with the locale pages.
- Astro Actions are now enabled through `src/actions/index.ts`, with booking handled by a server action that reuses the shared validation schema.
- The production deployment adapter is now `@astrojs/vercel`, keeping SSR, booking actions, and locale routing aligned with Vercel without adding a custom deployment wrapper.
- A shared hospitality footer now lives in `src/components/Footer.astro` and pulls locale-aware contact data from `src/data/hospitality.ts`.
- The header and footer now use separate SVG logo variants from the shared logo component, so the visual hierarchy is clearer and the brand mark is less fragile when scaled.
- The header now uses a premium mobile overlay menu built with a native `<dialog>`, keeping the desktop navigation visible while giving mobile users a full-screen editorial menu with localized language switching and booking access.
- Locale homepage rendering is centralized in `src/components/LocaleHome.astro` with a richer section flow.
- The homepage now includes a compact House bridge that points into the dedicated narrative page without adding a separate visual system.
- The homepage hero now has a wider desktop split and more restrained mobile typography so the first screen feels cinematic without turning into a generic full-screen template.
- The homepage hero now uses `/assets/images/hero-interior-pasta-wide.png` as the primary opening image in a layered background treatment with a wide 3:2 crop.
- The homepage hero is now built as a layered background scene with overlaid copy, not a contained image card on the right side of the section.
- The mobile crop is intentionally right-biased so the lamp and pasta bench remain visible without needing a separate mobile hero asset.
- The hero headline was intentionally reduced and the supporting meta / note content trimmed so the opening frame feels less crowded and more premium.
- The homepage copy now leans harder on funnel clarity: the hero stays restaurant-forward, the Concept & Story block explains the concept, and The House block explains the people behind it.
- CTA labels were shortened and clarified so the landing flow moves more directly from menu discovery to table reservation.
- Shared editorial visual frames are centralized in `src/components/EditorialVisual.astro`, which now supports future image `src`, `alt`, and caption values sourced from `src/data/imagery.ts`.
- The finalized local image assets are mapped in `src/data/imagery.ts` and now drive the homepage hero, House bridge, House page hero, menu banner, and booking visual slots.
- Booking pages are centralized in `src/components/BookingPage.astro` with reusable field rendering in `src/components/BookingField.astro`.
- The House page is centralized in `src/components/HousePage.astro` with localized narrative content in `src/data/house.ts`.
- Localized content source exists in `src/data/home.ts`, including per-locale section labels.
- Menu pages are now centralized in `src/components/MenuPage.astro` with localized content in `src/data/menu.ts`.
- Menu and booking pages now use smaller mobile gutters and earlier heading downscales so their long-form content remains readable on narrow screens.
- Booking copy, validation schema, and localized booking metadata live in `src/data/booking.ts`.
- Hospitality contact details, hours, and reservation notes live in `src/data/hospitality.ts`.
- The same hospitality data now feeds the footer and JSON-LD schema, keeping the business details consistent across UI and search metadata.
- Language labels and routing helpers live in `src/i18n/ui.ts`.
- The brand identity is now explicitly documented and should be treated as a fixed implementation constraint, not a draft concept.

## Route Notes

- The site is structured around locale-prefixed pages for `it`, `en`, `et`, and `ru`.
- Menu and booking routes exist for each locale.
- The root `src/pages/index.astro` is now a minimal branded language gateway instead of the Astro starter welcome screen.
- Starter assets and the `Welcome.astro` scaffold were removed as part of the cleanup.
- Astro's default-locale redirect is disabled so the branded `/` gateway can coexist with the locale-prefixed routes without build conflicts.
- Astro is configured for server output via `@astrojs/vercel`, which keeps the booking action and SSR routes aligned with the Vercel runtime.
- The Astro `site` value is sourced from `SITE_URL` with a local fallback so canonical URLs can resolve to the deployed origin in production.
- The gateway is intentionally `noindex` and canonically points to the default localized entry rather than competing with the language-specific pages.
- Booking now posts to a real Astro Action, keeps the current UI, and falls back to native validation plus in-page success/error states.
- The footer is shared across the site and uses locale-aware, fictional hospitality details so the brand feels operational without implying a real business listing.
- Structured data is injected from the shared layout so the Restaurant and WebPage schema remain in step with the locale-specific pages without cluttering route files.
- Menu routes now inherit the same brand-specific treatment as the homepage and booking pages, replacing the starter placeholder pages.
- The homepage, menu, and booking pages now reserve coherent image slots so final photography can be added without changing the layout structure.
- The House bridge on the homepage and the House page hero aside now have dedicated visual slots that can receive final imagery without a layout rewrite.
- House routes now extend the locale structure with a small, meaningful narrative page that explains who shapes the room and how the concept is held together.
- The homepage now acts as a light bridge into the House page by surfacing the three-person narrative and linking to the deeper story.
- The mobile navigation has been upgraded from a simple collapsed header into a full-screen editorial overlay that preserves locale switching and booking access.
- The hero image direction now treats the homepage opening shot as a background-forward, wide interior frame rather than a narrow craft close-up.
- The hero composition should stay layered and restrained; avoid reintroducing a framed hero image card unless the concept changes again.
- The hero line should remain short and arresting; if it expands again, keep the supporting blocks equally sparse.
- A subtle portfolio disclosure now lives in the shared footer, paired with a real creator/contact bridge and lightweight legal route placeholders.
- The legal pages are shared-language first-release skeletons on purpose; keep them light unless the site gains new operational or tracking requirements.
- The shared SEO layer now falls back to `/assets/images/pasta-lab-og-default.png` for Open Graph and Twitter previews, with `Layout` and `Seo` accepting optional image overrides for future page-specific cards.
- The compact PL monogram now powers the favicon, PNG fallbacks, and Apple touch icon so the browser/app identity matches the broader brand system.
- The canonical `site` value still comes from `SITE_URL`; in Vercel, set that env var to the production origin so share links and hreflang URLs remain correct.

## Practical Gaps

- Booking still needs persistence and outbound email delivery once the action is connected to an operational backend.
- Menu content is centralized, but the next step is to refine the page into a slightly richer editorial system if menu depth grows.
- Social preview assets are still basic; a dedicated branded OG image would be the next visual polish step if needed.
- The current visual frames are placeholders by design and should be swapped for final imagery once the photography set is produced.
- If the footer ever expands, keep it restrained and avoid turning it into a general sitemap block.
- If a dark or inverse logo variant is introduced later, it should be mapped through the same shared `BrandMark` component instead of creating a second header/footer implementation.
- If the current logo still needs refinement in a later review, the next adjustment should be made in the shared `BrandMark` sizing props rather than adding one-off CSS overrides in route files.
- If the logo system expands later, keep the variant logic inside `BrandLogo.astro` instead of scattering SVG markup across route files.
- If a future polish pass is needed, focus it on motion and micro-interaction timing rather than another structural navigation rewrite.

## Recommended Working Pattern

- Keep copy in structured locale objects while the content is still changing.
- Preserve brand anchors in docs before introducing new pages or content systems.
- Move repeated page sections into reusable components once the structure stabilizes.
- Treat booking and menu as product surfaces, not just content pages.
- Add new content only if it reinforces handmade pasta, smoke, fermentation, Tallinn, or editorial warmth.
