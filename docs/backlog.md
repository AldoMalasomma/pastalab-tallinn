# Backlog

## Next Steps

1. Booking fulfillment
   - Connect the Astro Action to email delivery and/or persistence.
   - Define confirmation, timeout, and failure handling for real requests.

2. Menu expansion
   - Expand menu pages beyond the current short placeholder copy.
   - Add structure for dishes, categories, pricing, and seasonal rotation.

3. Imagery strategy
   - Produce final photography for the documented homepage, menu, booking, and social preview slots.
   - Keep the current image ratios and placement logic intact when swapping in the real assets.

4. Polish
   - Normalize locale links and page `lang` values.
   - Focus the next pass on motion, micro-interactions, and content-level refinements.
   - Clean up any starter-template leftovers in the root route and shared files.
   - Add page-specific OG overrides only where a distinct share card clearly adds value.

## Completed

- Homepage refinement
  - Rebuilt the locale homepages into a richer, portfolio-grade layout with a stronger hero, story, signature dishes, atmosphere, and booking CTA flow.
- Booking page
  - Added a polished multilingual booking page with reusable field components and a real Astro Action-backed submission flow.
- SEO metadata and locale alternates
  - Added localized page titles and descriptions, canonical URLs, hreflang alternates, and Open Graph basics through the shared layout.
- Booking action flow
  - Replaced the simulated submit path with a real Astro Action backed by shared server-side validation and in-page feedback states.
- Responsive refinement pass
  - Upgraded the mobile header into a full-screen editorial overlay with localized language switching and booking access.
  - Widened the homepage hero for desktop and tightened hero, menu, and booking spacing on small screens.
  - Added explicit mobile viewport handling and safer horizontal overflow control in the shared layout.
- Portfolio compliance layer
  - Added a footer-level disclosure, creator/contact bridge, and lightweight legal route placeholders.
  - Kept the legal pages shared-language and intentionally minimal so the project remains believable as a restaurant site.
- Open Graph share preview
  - Added a default social preview card backed by the hero image and a warm editorial text treatment.
  - Keep future page-specific cards optional and only add them where the share surface clearly benefits from a distinct preview.
- Compact brand mark
  - Added a refined monogram favicon/app-icon system with PNG and Apple touch fallbacks.
  - Keep the same monogram geometry if the mark is reused in additional branded surfaces later.
