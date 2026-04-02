# Content Strategy

## Approach

Pasta Lab & Smoked Flavors should read like a hospitality brand with a clear culinary point of view. The content needs to be short, concrete, sensory, and restrained. It should preserve the distinction of the concept instead of smoothing it into generic restaurant language.

The current source of truth for homepage and booking copy is `src/data/home.ts` and `src/data/booking.ts`. Those structures should remain the canonical content sources until a CMS or content system is introduced.

## Language Roles

- `it`: primary brand language and the richest expression of the concept
- `en`: international guest-facing version, concise but still editorial
- `et`: local Tallinn/Estonian version, direct and practical without losing atmosphere
- `ru`: regional guest-facing version, warm, clear, and visually aligned with the brand voice

## Content Principles

- Translate intent, not just words.
- Keep menu and booking language ingredient-led and specific.
- Prefer short, strong headings over descriptive clutter.
- Keep sensory references grounded in the actual concept: smoked butter, fermentation, rye, dill, mushrooms, charred onion, reduced broths.
- Use tone that feels warm and precise, not salesy.
- Avoid translating generic hospitality tropes into every locale.

## Page Model

The site should stay consistent across languages with the same basic content arc:

- hero
- concept
- signature dishes
- atmosphere / experience
- booking call to action

The House page extends that arc with a light narrative layer: founders, room character, and hospitality rituals. It should feel like an internal brand chapter, not a corporate about page.

That gives the site a stable narrative while still allowing each locale to adapt phrasing, detail level, and cultural nuance.

## Multilingual Notes

- Italian copy can carry the deepest brand specificity and ritual detail.
- English should be concise, premium, and exportable for discovery.
- Estonian should feel local, clear, and naturally paced.
- Russian should remain warm, readable, and hospitality-first.

For the house narrative, keep the three named roles stable across locales:

- Matteo Valli — Chef & Co-Founder
- Liis Saar — Co-Founder & House Direction
- Aleksander “Sass” Kõiv — Pairings & Floor

Those names should anchor the story of how the room works without drifting into bios that feel corporate or decorative.

## Hospitality Layer

- The footer/contact layer uses fictional but believable operational details so the site feels like a real restaurant rather than a concept-only portfolio piece.
- The shared contact data lives in `src/data/hospitality.ts` and is translated per locale for labels and reservation notes; the same source also feeds the structured data layer.
- Keep those details stable across the site unless the brand scenario changes; treat them as part of the implemented identity, not throwaway filler.

## Portfolio and Compliance Layer

- The site should disclose its portfolio status at footer level rather than in the hero so the restaurant illusion stays intact.
- The disclosure language should stay concise, elegant, and believable: enough to avoid deception, not enough to collapse the hospitality worldbuilding.
- The real creator bridge lives beside the disclosure and points to Aldo G. Malasomma / CopyCodeAI / `hello@copycodeai.online`.
- Legal pages should live inside each locale namespace so the footer and public links always resolve within the active language path.
- The compliance copy can remain shared-language and centrally maintained for now, with route aliases only as legacy support for old root URLs.
- Keep the legal layer visually quiet and structurally separate from the editorial content hierarchy.

## Content Guardrails

- Do not describe the venue as a trattoria.
- Do not drift into generic fine dining language.
- Do not flatten the concept into “Italian food with a twist.”
- Do not overuse luxury adjectives.
- Do preserve the port-side industrial-lab backstory and the handmade pasta + smoked/fermented local ingredients contrast.
- Do keep invented contact details and hours coherent across locales and consistent with a real Tallinn restaurant rhythm.

Menu and booking content should be reviewed as localized hospitality writing, not mechanical translation.
