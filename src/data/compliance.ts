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
  name: "Aldo G. Malasomma",
  business: "CopyCodeAI",
  location: "Tallinn, Estonia",
  email: "hello@copycodeai.online",
  href: "mailto:hello@copycodeai.online",
} as const;

const legalRoutes = [
  { label: "Privacy Policy", slug: "privacy-policy" },
  { label: "Cookie Policy", slug: "cookie-policy" },
  { label: "Accessibility Statement", slug: "accessibility-statement" },
  { label: "Terms of Use", slug: "terms-of-use" },
  { label: "Portfolio Disclosure", slug: "colophon" },
];

export function getLegalLinks(lang: Locale): LegalLink[] {
  return legalRoutes.map((link) => ({
    label: link.label,
    href: `/${lang}/${link.slug}/`,
  }));
}

export const legacyLegalRoutes = [
  "/privacy-policy/",
  "/cookie-policy/",
  "/accessibility-statement/",
  "/terms-of-use/",
  "/colophon/",
];

export const footerDisclosureByLocale: Record<Locale, FooterDisclosure> = {
  it: {
    label: "Portfolio",
    text: "Progetto portfolio. Brand e dettagli del locale fittizi; design, sviluppo e conformità reali di Aldo G. Malasomma / CopyCodeAI.",
  },
  en: {
    label: "Portfolio",
    text: "Portfolio concept. Fictional brand and venue details; real design, development, and compliance by Aldo G. Malasomma / CopyCodeAI.",
  },
  et: {
    label: "Portfoolio",
    text: "Portfoolio projekt. Fiktiivne bränd ja kohadetailid; tegelik disain, arendus ja vastavus Aldo G. Malasomma / CopyCodeAI poolt.",
  },
  ru: {
    label: "Портфолио",
    text: "Портфолио-проект. Бренд и данные заведения вымышлены; реальный дизайн, разработка и комплаенс — Aldo G. Malasomma / CopyCodeAI.",
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
      "This site is a portfolio concept presented as a fictional hospitality brand. Any information submitted through forms, or needed for technical site operation, is handled by the real operator behind the portfolio: Aldo G. Malasomma / CopyCodeAI, Tallinn, Estonia.",
    sections: [
      {
        title: "Information you submit",
        body: [
          "Booking and contact details are used only to review requests and respond to you.",
          "The site does not currently process payments, public accounts, or customer databases.",
        ],
      },
      {
        title: "Technical data",
        body: [
          "Basic request metadata or server logs may be processed to keep the site secure, reliable, and debuggable.",
          "If the technical setup changes, this page will be updated before any broader use of the data.",
        ],
      },
      {
        title: "Contact",
        body: [
          `Questions about privacy or data handling can be sent to ${creatorBridge.email}.`,
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
      "The site is designed to stay light on tracking and does not intentionally use non-essential cookies or analytics tools.",
    sections: [
      {
        title: "Essential functionality",
        body: [
          "If any browser or hosting state is required for core delivery or form handling, it is limited to essential functionality.",
          "At present, there is no separate advertising or measurement cookie layer on the site.",
        ],
      },
      {
        title: "Future changes",
        body: [
          "If analytics or embedded services are added later, this policy will be updated before they go live.",
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
      "This accessibility statement covers the portfolio concept site operated by Aldo G. Malasomma / CopyCodeAI. The current build aims to align with WCAG 2.1 AA and EN 301 549 principles in structure, contrast, readability, and interaction.",
    sections: [
      {
        title: "What is in place",
        body: [
          "Navigation, booking forms, and core content blocks are built to work across mobile and desktop with semantic headings and visible hierarchy.",
          "The design keeps information understandable without depending on motion or decorative effects.",
        ],
      },
      {
        title: "Known limits",
        body: [
          "The site has not yet been subjected to a formal independent accessibility audit.",
          "Visual assets should continue to receive descriptive alt text and should be reviewed whenever imagery changes.",
        ],
      },
      {
        title: "Feedback",
        body: [
          `If you encounter an accessibility issue, contact ${creatorBridge.email}.`,
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
      "This site presents a portfolio concept for a fictional hospitality brand and is not a live booking contract.",
    sections: [
      {
        title: "Concept status",
        body: [
          "The brand, venue, hospitality details, and reservation context are fictional and used to demonstrate design, UX, and content strategy.",
        ],
      },
      {
        title: "Original work",
        body: [
          "The design, development, UX, and technical implementation are original work by Aldo G. Malasomma / CopyCodeAI.",
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
      "A concise note on the boundary between the fictional hospitality world and the real operator behind the build.",
    sections: [
      {
        title: "Project",
        body: [
          "Pasta Lab & Smoked Flavors is a fictional hospitality concept built to demonstrate branding, copy, UX, and responsive Astro execution.",
          "The site keeps the illusion of a real restaurant while remaining a portfolio case study.",
        ],
      },
      {
        title: "Real operator",
        body: [
          `${creatorBridge.name} / ${creatorBridge.business} is the real operator and compliance contact behind the portfolio project.`,
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
    note: "Portfolio concept. Fictional brand and venue details; real design, development, and compliance by Aldo G. Malasomma / CopyCodeAI.",
  },
} as const satisfies Record<string, LegalPageContent>;

export type LegalPageKey = keyof typeof legalPageContent;
export type LegalPage = (typeof legalPageContent)[LegalPageKey];
