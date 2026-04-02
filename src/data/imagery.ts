export type VisualSlot = {
  label: string;
  title: string;
  description: string;
  crop: string;
  ratio: "portrait" | "landscape" | "square" | "wide";
  theme: "light" | "dark";
  notes: string[];
  alt: string;
  caption: string;
  src?: string;
};

export const imageryDirection = {
  homeHero: {
    label: "Hero background",
    title: "Wide interior opening shot",
    description:
      "Use this wide opening frame as the homepage manifesto shot: a warm dining-room or pass view with steam, copper light, and enough depth to carry the hero without feeling staged.",
    crop: "3:2",
    ratio: "wide",
    theme: "dark",
    notes: ["opening shot", "steam", "copper", "ambient light"],
    alt: "Wide editorial interior of Pasta Lab & Smoked Flavors with warm copper light, steam, and a pasta bench in view.",
    caption: "Homepage hero background",
    src: "/assets/images/hero-interior-pasta-wide.png",
  },
  menuBanner: {
    label: "Plating detail",
    title: "One dish, one table, one surface",
    description:
      "Use a wide landscape frame for a plated pasta close-up, a tabletop detail, or a composed dining-room scene with linen, ceramic, and low amber light.",
    crop: "16:10",
    ratio: "landscape",
    theme: "light",
    notes: ["plated pasta", "linen", "ceramic", "smoke"],
    alt: "Wide editorial frame of a plated pasta dish with linen, ceramic, and amber room light.",
    caption: "Menu page visual",
    src: "/assets/images/smoked-butter-tagliolini-menu.jpg",
  },
  houseIntro: {
    label: "House portrait",
    title: "Port-side room, warm and precise",
    description:
      "Use a portrait frame for the house page: a dining room edge, dark wood, copper reflections, linen texture, or a subtle portrait of the space itself.",
    crop: "4:5",
    ratio: "portrait",
    theme: "dark",
    notes: ["port-side", "dark wood", "linen", "copper"],
    alt: "Portrait of the House with dark wood, matte copper, linen, and a warm port-side atmosphere.",
    caption: "House page hero visual",
    src: "/assets/images/house-interior-hero.jpg",
  },
  houseBridge: {
    label: "House bridge",
    title: "Three people, one room, one direction",
    description:
      "Use this narrower portrait frame for the homepage bridge: a partial room view, a subtle founder portrait, or a detail that hints at the people behind the place without turning the page into a team sheet.",
    crop: "4:5",
    ratio: "portrait",
    theme: "light",
    notes: ["founders", "room detail", "editorial", "warmth"],
    alt: "Warm port-side room portrait with dark wood, matte copper, and linen texture.",
    caption: "Homepage House bridge",
    src: "/assets/images/house-interior-hero.jpg",
  },
  bookingAside: {
    label: "Room atmosphere",
    title: "Reservation mood, not stock hospitality",
    description:
      "Use a quieter portrait image for the booking page: candlelight, a table set for two, or a softly lit room with the feeling of an evening service about to start.",
    crop: "4:5",
    ratio: "portrait",
    theme: "dark",
    notes: ["candlelight", "table setting", "quiet room", "amber glow"],
    alt: "Quiet reservation mood with candlelight, a prepared table, and a softly lit evening room.",
    caption: "Booking page visual",
    src: "/assets/images/quiet-room-booking.jpg",
  },
  socialPreview: {
    label: "Share preview",
    title: "Editorial frame for social and OG use",
    description:
      "Use a cinematic landscape crop for the open graph image: room, hands, or a composed plate with dark wood and warm highlights.",
    crop: "1.91:1",
    ratio: "landscape",
    theme: "dark",
    notes: ["OG image", "interior", "plating", "editorial warmth"],
    alt: "Cinematic landscape composition for social preview with room, pasta, or material detail.",
    caption: "Social preview visual",
    src: "/assets/images/pasta-lab-og-default.png",
  },
} as const satisfies Record<string, VisualSlot>;

export type ImagerySlot = keyof typeof imageryDirection;
