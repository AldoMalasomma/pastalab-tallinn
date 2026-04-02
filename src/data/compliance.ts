import type { Locale } from "../i18n/ui";

type FooterDisclosure = {
  label: string;
  text: string;
};

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageContent = {
  pageTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  note?: string;
};

type LegalLink = {
  label: string;
  href: string;
};

export const creatorBridge = {
  label: "Design and development",
  name: "Ajia",
  email: "a.g.malasomma@gmail.com",
  href: "mailto:a.g.malasomma@gmail.com",
} as const;

export const legalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Accessibility Statement", href: "/accessibility-statement/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
  { label: "Portfolio Disclosure", href: "/colophon/" },
];

export const footerDisclosureByLocale: Record<Locale, FooterDisclosure> = {
  it: {
    label: "Portfolio",
    text: "Progetto portfolio. Dati del locale fittizi; design e sviluppo reali di Ajia.",
  },
  en: {
    label: "Portfolio",
    text: "Portfolio concept. Fictional venue details; real design and development by Ajia.",
  },
  et: {
    label: "Portfoolio",
    text: "Portfoolio projekt. Fiktiivsed kohadetailid; disain ja arendus Ajia poolt.",
  },
  ru: {
    label: "Портфолио",
    text: "Портфолио-проект. Вымышленные данные заведения; дизайн и разработка — Ajia.",
  },
};

export const legalPageContent = {
  privacy: {
    pageTitle: "Privacy Policy | Pasta Lab & Smoked Flavors",
    description:
      "Privacy policy for the Pasta Lab & Smoked Flavors portfolio concept and reservation surfaces.",
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro:
      "This page outlines how the site handles bookings, contact requests, and lightweight operational data.",
    sections: [
      {
        title: "Bookings",
        body: [
          "Information entered in the booking form is used to review reservation requests and reply by email.",
          "The site does not currently process payments or public account data.",
        ],
      },
      {
        title: "Site operations",
        body: [
          "Basic technical data may be used to keep the site reliable and improve performance.",
          "Any future analytics or tracking will be disclosed and added with a consent-aware approach.",
        ],
      },
      {
        title: "Contact",
        body: [
          `Questions about this site can be sent to ${creatorBridge.email}.`,
        ],
      },
    ],
  },
  cookie: {
    pageTitle: "Cookie Policy | Pasta Lab & Smoked Flavors",
    description:
      "Cookie policy for the Pasta Lab & Smoked Flavors portfolio concept and reservation surfaces.",
    eyebrow: "Legal",
    title: "Cookie Policy",
    intro:
      "The site is designed to stay light on tracking. Essential functionality comes first.",
    sections: [
      {
        title: "Essential cookies",
        body: [
          "The site may use cookies or storage required for core functionality, such as form handling or session behavior.",
        ],
      },
      {
        title: "Future analytics",
        body: [
          "If analytics or embedded services are added later, they should be documented here and introduced with consent where required.",
        ],
      },
    ],
  },
  accessibility: {
    pageTitle: "Accessibility Statement | Pasta Lab & Smoked Flavors",
    description:
      "Accessibility statement for the Pasta Lab & Smoked Flavors portfolio concept and reservation surfaces.",
    eyebrow: "Legal",
    title: "Accessibility Statement",
    intro:
      "The site aims for semantic structure, readable type, clear contrast, and keyboard-friendly navigation.",
    sections: [
      {
        title: "What is covered",
        body: [
          "Navigation, booking forms, and core content blocks are built to work cleanly across mobile and desktop.",
          "The current design keeps hierarchy visible without relying on motion to make the interface understandable.",
        ],
      },
      {
        title: "Ongoing work",
        body: [
          "Visual assets should continue to carry descriptive alt text and should be reviewed whenever the imagery changes.",
          "If a formal audit is needed, this page can be expanded into a tracked statement.",
        ],
      },
    ],
  },
  terms: {
    pageTitle: "Terms of Use | Pasta Lab & Smoked Flavors",
    description:
      "Terms of use for the Pasta Lab & Smoked Flavors portfolio concept and reservation surfaces.",
    eyebrow: "Legal",
    title: "Terms of Use",
    intro:
      "This site presents a portfolio concept for a fictional hospitality brand and is not a booking contract.",
    sections: [
      {
        title: "Concept status",
        body: [
          "Brand, venue, and hospitality details are fictional and used to demonstrate design, UX, and content strategy.",
        ],
      },
      {
        title: "Use of the site",
        body: [
          "Content is provided for review, demonstration, and portfolio purposes.",
          "Any future operational use should be paired with formal legal review and business-specific terms.",
        ],
      },
    ],
  },
  colophon: {
    pageTitle: "Portfolio Disclosure / Colophon | Pasta Lab & Smoked Flavors",
    description:
      "Portfolio disclosure and colophon for the Pasta Lab & Smoked Flavors concept project.",
    eyebrow: "Portfolio",
    title: "Portfolio Disclosure / Colophon",
    intro:
      "A short note on what is fictional in the brand world and what is real in the build.",
    sections: [
      {
        title: "Project",
        body: [
          "Pasta Lab & Smoked Flavors is a fictional hospitality concept built to demonstrate branding, copy, UX, and responsive Astro execution.",
          "The site keeps the illusion of a real restaurant while remaining a portfolio case study.",
        ],
      },
      {
        title: "Creator",
        body: [
          `Design and development by ${creatorBridge.name}.`,
          `Contact: ${creatorBridge.email}.`,
        ],
      },
      {
        title: "Stack",
        body: [
          "Astro, Tailwind, TypeScript, and a content-first structure that can be extended toward a CMS layer.",
        ],
      },
    ],
    note: "Portfolio concept. Fictional brand and venue details; real design and development by Ajia.",
  },
} as const satisfies Record<string, LegalPageContent>;

export type LegalPageKey = keyof typeof legalPageContent;
export type LegalPage = (typeof legalPageContent)[LegalPageKey];
