# Image Direction

This project should use a restrained editorial image system, not generic restaurant photography. The images need to reinforce the brand's blend of handmade pasta, smoke, fermentation, Tallinn, and warm material textures.

## What the images should feel like

- Warm but not overlit
- Human and tactile rather than staged
- Quietly cinematic, with depth and shadow
- Material-first: flour, steam, butter sheen, rye, herbs, smoke, linen, ceramic, dark wood
- Contemporary hospitality, not fine-dining theatre

## Recommended Slots

### Homepage hero

- Ratio: `3:2`
- Placement: full-background layer behind the homepage hero copy
- Content: a wide opening interior shot with steam, copper light, and the pass or pasta bench in view
- Focal point: keep the right side of the frame present on mobile so the lamp and pasta bench survive the crop
- Goal: make the first screen feel like a cinematic manifesto shot rather than a generic restaurant image

### Homepage House bridge

- Ratio: `4:5`
- Placement: the visual slot inside the House bridge section on the homepage
- Content: a subtle founder portrait, a partial room view, or a detail that hints at the people shaping the house
- Goal: bridge the landing page into the House page without introducing a new visual language

### Menu page

- Ratio: `16:10` or `3:2`
- Placement: between menu structure and concept anchors, or as a wide top banner
- Content: one composed plated dish, tabletop detail, or a restrained dining-room scene
- Goal: give the menu page a strong visual pause without turning it into a gallery

### Booking page

- Ratio: `4:5`
- Placement: in the left column above the room note or alongside the booking intro
- Content: candlelight, a prepared table, quiet room atmosphere, or a subdued evening-service detail
- Goal: make the reservation flow feel like a real hospitality experience

### House page

- Ratio: `4:5`
- Placement: in the hero aside
- Content: a port-side room portrait, dark wood, matte copper, linen, smoked glass, or an interior detail that suggests the house rather than a stock restaurant scene
- Goal: give the narrative page a visual anchor that feels like the place itself

### Social / Open Graph

- Ratio: `1.91:1`
- Placement: share preview image and future social exports
- Content: a cinematic composition with room, pasta, or material detail
- Goal: keep search and sharing aligned with the same visual language
- Current default: `/assets/images/pasta-lab-og-default.png`
- Future note: page-specific share cards can be introduced by overriding the image props passed through `Layout` / `Seo` without changing the route structure.

## Content Priorities

Photograph these first:

1. Handmade pasta in process
2. A signature plated dish with visible smoke, butter, or fermentation cues
3. Dining room atmosphere with dark wood, copper, linen, and soft amber light
4. A reservation or service moment that feels intimate rather than staged

## Avoid

- Bright stock-style hospitality scenes
- Generic chef portraits
- Smiling menu-holder imagery
- White-tablecloth luxury tropes
- Overly rustic trattoria styling
- Over-filtered food shots

## Implementation Note

The current site uses shared visual frame components as placeholders. These are now asset-ready via `src/components/EditorialVisual.astro`, which can accept a final `src`, `alt`, and caption without changing the layout structure. Final imagery should be inserted by populating the matching slots in `src/data/imagery.ts` and keeping the same ratios and placement decisions.

### Current local asset mapping

- `homeHero` → `/assets/images/hero-interior-pasta-wide.png`
- `menuBanner` → `/assets/images/smoked-butter-tagliolini-menu.jpg`
- `bookingAside` → `/assets/images/quiet-room-booking.jpg`
- `houseIntro` → `/assets/images/house-interior-hero.jpg`
- `houseBridge` → `/assets/images/house-interior-hero.jpg` for now, until a dedicated bridge asset exists
- `socialPreview` → `/assets/images/pasta-lab-og-default.png`
