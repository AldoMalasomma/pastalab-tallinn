# Tech Architecture

## Current Stack

- Astro `6.1.2`
- Tailwind CSS `4.2` via `@tailwindcss/vite`
- Node `>=22.12.0`
- `@astrojs/vercel` provides the production adapter for Vercel SSR and Astro Actions
- `clsx` and `zod` are installed for utility and validation support
- Prettier with Astro and Tailwind plugins

## Project Shape

The site is organized as a small Astro app with shared layout and localized page files:

- `src/layouts/Layout.astro` provides the base HTML shell and imports global styles
- `src/components/Header.astro` renders navigation and language switching
- `src/components/BrandLogo.astro` holds the code-based SVG logo variants, while `src/components/BrandMark.astro` wraps them as reusable brand links
- `src/components/Seo.astro` centralizes page metadata, canonical URLs, hreflang alternates, and Open Graph tags
- `src/components/StructuredData.astro` centralizes Restaurant and WebPage JSON-LD and reads from the shared hospitality data
- `src/components/EditorialVisual.astro` centralizes the shared image-frame placeholders used across the main content pages
- `src/components/HousePage.astro` centralizes the new House narrative page
- `src/actions/index.ts` is the Astro Actions entrypoint and currently exports the booking request action
- `src/data/home.ts` stores the localized homepage content
- `src/data/menu.ts` and `src/data/booking.ts` store localized page copy plus the metadata used by the shared layout; the booking model now treats email as required and phone as optional contact support
- `src/data/house.ts` stores the localized House narrative, founder roles, and brand rituals
- `src/data/imagery.ts` stores the planned image-slot system and crop guidance
- `public/favicon.svg` provides the compact monogram mark for browser UI; `public/favicon.ico`, `public/favicon-32x32.png`, `public/favicon-16x16.png`, and `public/apple-touch-icon.png` provide browser and mobile fallbacks
- `src/i18n/ui.ts` stores UI labels and language helpers
- `src/styles/global.css` defines the custom Tailwind theme colors

## Route and i18n Structure

Astro i18n is configured in `astro.config.mjs` with:

- default locale: `it`
- locales: `it`, `en`, `et`, `ru`
- `prefixDefaultLocale: true`
- `redirectToDefaultLocale: false`
- `site` is sourced from `SITE_URL`; set that env var in production so canonical URLs and structured data resolve to the deployed origin without a localhost fallback.
- `output` is `server`, which keeps Astro Actions available in the Vercel serverless runtime.
- the Vercel adapter emits the `.vercel/output` build artifacts automatically, so no extra deployment wrapper is required.

Current route structure:

- `/` is a branded language gateway in `src/pages/index.astro`
- Locale homepages live at `/it/`, `/en/`, `/et/`, and `/ru/`
- Menu pages live at `/it/menu`, `/en/menu`, `/et/menu`, and `/ru/menu`
- House pages live at `/it/house`, `/en/house`, `/et/house`, and `/ru/house`
- Booking pages live at `/it/booking`, `/en/booking`, `/et/booking`, and `/ru/booking`
- Legal and compliance pages live inside the same locale namespaces, and the old root-level legal URLs redirect to the default locale for legacy compatibility only.

## Current Implementation Notes

- Locale homepages now share a common renderer in `src/components/LocaleHome.astro`.
- The homepage copy is already split by locale in `src/data/home.ts`.
- The header reads the locale from the URL and renders the language switcher from `src/i18n/ui.ts`.
- Locale path generation is centralized in `src/i18n/ui.ts`, which keeps home/menu/booking links consistent.
- Menu pages share `src/components/MenuPage.astro` and booking pages share `src/components/BookingPage.astro`, keeping the route files thin.
- House pages now share `src/components/HousePage.astro`, keeping the narrative layer consistent and route files thin.
- Page metadata is localized and generated through the shared layout rather than being repeated in each route file.
- Structured data is also injected through the shared layout so the schema stays aligned with the same locale and hospitality sources.
- Planned imagery is also centralized so the final photography can be swapped in without changing the page structure.
- The brand mark system is now SVG-based and split into header, signature, and monogram variants so the logo can scale cleanly across navigation, footer, and favicon usage.
- The deployment target is Vercel-first, with Astro SSR, Actions, and canonical URLs all kept compatible with that host.
- No custom `vercel.json` is required for the current setup; the Astro adapter handles the output format directly.
