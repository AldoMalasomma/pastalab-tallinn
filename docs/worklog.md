# Worklog

## 2026-04-01

- Inspected the current project structure and confirmed this is an Astro 6 hospitality microsite for Pasta Lab & Smoked Flavors.
- Verified the multilingual setup for `it`, `en`, `et`, and `ru`, with shared home content in `src/data/home.ts` and UI/routing helpers in `src/i18n/ui.ts`.
- Confirmed the current styling tokens in `src/styles/global.css` and the shared layout/header structure.
- Cleaned up starter leftovers, centralized the homepage renderer in `src/components/LocaleHome.astro`, and replaced the root starter page with a branded language gateway.
- Kept the locale routes intact and normalized the shared locale path handling so the header and home CTAs stay consistent.
- Rebuilt the homepage into a more editorial, premium layout with a stronger hero, story, dishes, atmosphere, and booking CTA flow across all locales.
- Implemented a polished booking page with reusable field components, localized copy, native validation, and a simulated submission state that is ready for Astro Actions later.
- Added the `/docs` documentation structure and updated it to reflect the live codebase after the cleanup.

## 2026-04-01 - Brand clarification pass

- Locked the refined brand direction for Pasta Lab & Smoked Flavors as a Tallinn pasta bistro with editorial warmth, handmade pasta craft, and smoked / fermented local ingredients.
- Recorded the primary payoff, secondary brand line, and the port-side industrial-lab backstory so future implementation does not drift into generic trattoria or luxury-restaurant tropes.
- Captured the signature dish anchors, hospitality rituals, and visual cues that should guide both copy and interface decisions.
- Updated the implementation notes so future work stays aligned with the preserved concept rather than rewriting it.

## 2026-04-01 - Brand manifesto and menu concept

- Created `docs/brand-manifesto.md` to hold the internal brand guardrails, emotional space, and visual / hospitality language.
- Created `docs/menu-concept.md` to preserve the culinary logic, menu structure, and signature dish anchors.
- Linked both documents from the docs index so designers, developers, and copywriters can find the concept rules quickly.

## 2026-04-01 - Alignment pass

- Reviewed the homepage, menu, and booking surfaces against the refined brand direction and tightened the less specific areas.
- Replaced the placeholder menu pages with the shared menu component and localized menu content so all locale routes now follow the same editorial structure.
- Softened the booking copy so it reads like a real manual table request flow instead of a demo explanation, while keeping the current simulated submission path intact.
- Updated implementation notes to record what has been aligned and what still needs backend and SEO follow-through.

## 2026-04-01 - SEO metadata pass

- Added a shared SEO helper in `src/components/Seo.astro` so canonical URLs, hreflang alternates, Open Graph basics, and robots directives are generated consistently from the shared layout.
- Added localized page titles and descriptions to the homepage, menu, and booking content sources so metadata stays close to the copy it represents.
- Configured the Astro `site` value from `SITE_URL` so the same SEO code can resolve to the deployed origin in production.
- Kept the root gateway intentionally `noindex` and pointed it at the default localized entry so it does not compete with the indexed locale pages.
- Updated the backlog and implementation notes to reflect that page-level SEO is now in place and that the next gaps are operational and visual rather than structural.

## 2026-04-01 - Booking action pass

- Converted the booking flow from client-side simulation to a real Astro Action backed by shared validation in `src/data/booking.ts`.
- Added the Node adapter and switched Astro to server output so the action endpoint can run in the built app.
- Kept the booking page layout intact while adding pending, error, and success states that are driven by the action result.
- Recorded the remaining operational gap: persistence and email delivery are still future backend work, but the request path is now real.

## 2026-04-01 - Hospitality footer pass

- Added a shared footer and contact layer in `src/components/Footer.astro` with locale-aware hospitality details from `src/data/hospitality.ts`.
- Kept the footer restrained and editorial so it supports the brand without turning into a generic sitemap or marketing block.
- Recorded the invented address, hours, phone, email, reservation note, and optional social links in the content strategy and implementation notes so the site stays internally consistent.

## 2026-04-01 - Visual system prep

- Added shared editorial visual frame components and imagery slot data so the homepage, menu, and booking pages have coherent image placements before final photography exists.
- Documented the recommended crop ratios, placement logic, and content types in `docs/image-direction.md`.
- Kept the current layout intact while reserving stronger visual slots for final restaurant imagery.

## 2026-04-01 - House narrative pass

- Added a multilingual House page system in `src/components/HousePage.astro` and locale routes for `it`, `en`, `et`, and `ru`.
- Defined a small founder trio with stable roles for the story: Matteo Valli, Liis Saar, and Aleksander “Sass” Kõiv.
- Positioned the page as a narrative layer for the brand rather than a corporate about page, keeping the tone warm, restrained, and editorial.

## 2026-04-01 - Homepage House bridge

- Added a compact House teaser to the homepage so the narrative layer is discoverable from the landing page without bloating the layout.
- Reused the House page content as the source of truth for the founder names, roles, and pull quote.
- Kept the bridge section restrained and editorial, with a clear CTA into the dedicated House page.

## 2026-04-01 - House imagery prep

- Made the shared editorial visual component asset-aware so final images can be inserted with `src`, `alt`, and caption data from the shared imagery file.
- Added a dedicated House bridge visual slot on the homepage and kept the House page hero visual marked as the primary above-the-fold slot.
- Documented the final image insertion points in `docs/image-direction.md` so the photography handoff stays controlled and predictable.

## 2026-04-01 - Final asset integration

- Mapped the prepared local image files into the shared imagery slot system without changing the layout structure.
- Set the homepage hero to load eagerly and kept the remaining visuals on the existing lazy/default behavior where appropriate.
- Recorded the final file-to-slot mapping in the image direction docs so future replacements stay straightforward and maintainable.

## 2026-04-01 - Logo integration

- Added a shared brand mark component and wired the SVG logo into the header and footer from the public asset path.
- Kept the text brand name as a fallback in the footer only, where it helps balance the layout and preserve readability.
- Noted the potential need for a dark or inverse logo variant if the visual system later requires a darker branded surface.

## 2026-04-01 - Logo scale increase

- Increased the logo mark size in the header and footer by roughly 50% so the brand reads more confidently in the existing navigation and footer layouts.
- Kept the surrounding spacing and navigation unchanged, adjusting only the shared brand mark sizing.

## 2026-04-01 - Logo sizing audit

- Verified that there were no global CSS overrides shrinking the SVG logo; the limiting values were the hardcoded height classes in the header and footer.
- Increased the brand mark size more aggressively so the logo reads clearly in both places without changing the layout structure.

## 2026-04-01 - Horizontal logo correction

- Switched the brand mark sizing from height-based sizing to width-based sizing because the logo is a horizontal asset.
- Reduced the header and footer logo to roughly half of the previous visual footprint while keeping spacing and layout behavior intact.

## 2026-04-01 - Logo enlargement request

- Increased the horizontal logo significantly to match the brand mark scale the user wanted, using width-based Tailwind sizing instead of height-based classes.
- Kept the header and footer aligned to the existing content containers and avoided any layout rewrite.

## 2026-04-01 - Logo +50% adjustment

- Increased the brand mark again by roughly 50% from the prior width-based values so it reads more confidently without changing the navigation structure.
- Kept the sizing bounded with responsive max widths to avoid overflow on smaller screens.

## 2026-04-01 - Code-based logo system

- Replaced the fragile exported logo usage with an inline SVG logo system in `src/components/BrandLogo.astro`.
- Split the logo into three variants: primary wordmark for the header, signature mark for the footer / House moments, and monogram for the favicon.
- Linked the favicon to the monogram SVG so the compact mark is available across browser UI surfaces as well.

## 2026-04-01 - Header wordmark refinement

- Tightened the primary header wordmark so the secondary line feels more intentionally part of the brand lockup.
- Increased the visual weight and proximity of `& Smoked Flavors` while keeping the overall treatment restrained and editorial.

## 2026-04-01 - Header logo scale increase

- Increased the primary header wordmark by roughly 50% so the brand reads with more presence in the navigation area.
- Kept the lockup structure the same and adjusted the SVG canvas to preserve balance while scaling the wordmark up.

## 2026-04-01 - Tech notes refresh

- Updated `docs/tech-architecture.md` with the SVG logo system, the monogram favicon path, and the current split between logo variants and reusable brand wrappers.
- Kept the implementation notes and worklog aligned with the current logo direction so the next session can resume from the SVG system rather than the old raster export.

## 2026-04-01 - Structured data pass

- Added a shared JSON-LD component in `src/components/StructuredData.astro` and wired it through the base layout so Restaurant and WebPage schema are emitted consistently.
- Reused the hospitality data as the source of truth for business name, address, hours, phone, email, and reservation contact intent.
- Kept route files uncluttered by centralizing structured data in the shared layout rather than duplicating metadata per locale page.

## 2026-04-02 - Responsive refinement pass

- Refined the shared layout viewport handling so mobile browsers receive a proper `initial-scale=1` declaration and the page can safely lock scroll while the mobile menu is open.
- Reworked the header into a premium mobile overlay menu with localized navigation and language switching while leaving the desktop nav and locale pills intact.
- Widened the homepage hero composition for larger screens and tightened hero copy, panel, and section spacing on smaller screens.
- Improved readability on the menu and booking pages by reducing mobile gutters, scaling headings down earlier, and making the booking submit action easier to use on touch devices.
- Recorded the responsive pass in the implementation notes and backlog so the next iteration can focus on motion and content polish rather than structural fixes.

## 2026-04-02 - Hero image integration

- Added the new wide homepage hero image asset to the shared image slot system and mapped it to `/assets/images/hero-interior-pasta-wide.png`.
- Switched the homepage hero slot from the older portrait concept to a wide 3:2 opening shot so the first screen reads more like a manifesto image.
- Kept the existing homepage structure intact and relied on the shared `EditorialVisual` system for the crop, overlay, and responsive presentation.
- Updated the image direction docs so the hero slot, crop ratio, and asset mapping stay aligned with the live implementation.

## 2026-04-02 - Hero background refactor

- Refactored the homepage hero so the new wide interior image is used as the actual background layer instead of a contained right-side visual card.
- Preserved the homepage section order and moved the panel copy into a layered editorial text treatment on top of the background scene.
- Tuned the overlay, crop positioning, and mobile text rhythm so the opening shot stays readable and cinematic across screen sizes.
- Kept the mobile crop right-biased so the lamp and pasta bench remain in frame without introducing a separate phone-only asset.
- Updated the image direction notes to describe the hero as a background treatment and to keep the file mapping explicit.

## 2026-04-02 - Hero balance refinement

- Reduced the hero headline scale slightly and shortened the supporting copy so the image can breathe more.
- Simplified the hero meta row from three items to two and trimmed the side note block to two supporting points.
- Sharpened the hero line across locales to a cleaner, more memorable phrasing while keeping the same warm editorial tone.
- Kept the rest of the homepage structure intact and limited the pass to balance, hierarchy, and restraint.

## 2026-04-02 - Homepage messaging refinement

- Tightened the hero subcopy and CTA labels so the landing path reads more intentionally from first glance to booking.
- Clarified the separation between the concept/story section and the House bridge so the homepage reads as both a restaurant site and a structured showcase of the people behind it.
- Simplified the atmosphere and booking copy to keep the supporting sections premium, readable, and less redundant on mobile.
- Preserved the same visual system and navigation structure while making the homepage copy feel more portfolio-grade and conversion-aware.

## 2026-04-02 - Portfolio compliance layer

- Added a subtle footer-level portfolio disclosure so the site can signal its project status without breaking the restaurant illusion.
- Added a creator/contact bridge and lightweight legal placeholders for privacy, cookies, accessibility, terms, and colophon routes.
- Kept the legal pages shared-language and intentionally restrained so they read as a polished first release rather than a heavy compliance system.
- Updated the content strategy and implementation notes so the portfolio layer is documented as part of the intended product shape.

## 2026-04-02 - Compliance operator alignment

- Replaced the visible creator reference with Aldo G. Malasomma / CopyCodeAI and updated the shared footer bridge to use the live contact email.
- Refined the privacy, cookie, terms, accessibility, and colophon pages so they clearly distinguish the fictional hospitality brand from the real operator behind the portfolio.
- Kept the legal layer concise and professional, with no extra boilerplate beyond what supports a credible first public release.

## 2026-04-02 - Open Graph preview system

- Added a default social preview card built from the wide hero image and a warm editorial text treatment.
- Wired the shared SEO layer to emit `og:image` and large Twitter card metadata by default while keeping optional override props available in `Layout` and `Seo`.
- Documented the preview asset and the future page-specific override path in the image direction notes and backlog.

## 2026-04-02 - Compact brand mark

- Refined the compact PL monogram so the favicon and app-icon surfaces feel more intentional at small sizes.
- Added raster favicon derivatives and an Apple touch icon from the same mark so browser tabs, bookmarks, and mobile home-screen shortcuts stay visually coherent.
- Kept the change confined to the shared layout and brand logo component so the rest of the site architecture remained untouched.

## 2026-04-02 - Vercel deployment prep

- Switched the production adapter from `@astrojs/node` to `@astrojs/vercel` so the current SSR and Astro Action setup matches the intended hosting target.
- Kept the locale routing, booking flow, canonical URL handling, and SEO layer unchanged while aligning the output to Vercel's deployment model.
- Documented the required `SITE_URL` environment variable and the adapter choice so the first public release can be deployed without extra platform scaffolding.

## 2026-04-02 - Lighthouse cleanup pass

- Replaced the browser-side `astro:actions` import in the booking form with a same-origin POST enhancement so the production console stays clean while preserving the Astro Action flow.
- Removed the hardcoded `http://localhost:4321` site fallback from Astro config so deployed metadata no longer carries a localhost-origin default.
- Downgraded the booking visual slot title from a semantic heading to a caption-style label so the homepage and booking pages keep a valid heading tree.
- Kept the booking UI, validation states, and visible design unchanged apart from the semantic and runtime cleanup needed for production QA.

## 2026-04-02 - Booking devalue cleanup

- Removed the client-side `devalue` package import from the booking enhancement script after it surfaced as an unresolved browser module specifier in production.
- Replaced it with a small local JSON parse plus devalue-array unflatten step, which is enough for the current booking action payload shape and keeps the browser bundle free of runtime imports.
- Preserved the same form submission, pending state, error handling, and success summary behavior so the booking UX stays unchanged.
