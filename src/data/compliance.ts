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

export type LegalPageKey = "privacy" | "cookie" | "accessibility" | "terms" | "colophon";

export const creatorBridge = {
  label: "Design and development",
  name: "Aldo G. Malasomma",
  business: "CopyCodeAI",
  website: "https://copycodeai.online",
  location: "Tallinn, Estonia",
  email: "hello@copycodeai.online",
  href: "mailto:hello@copycodeai.online",
} as const;

const legalRoutes = [
  {
    slug: "privacy-policy",
    labels: {
      it: "Informativa privacy",
      en: "Privacy Policy",
      et: "Privaatsuspoliitika",
      ru: "Политика конфиденциальности",
    },
  },
  {
    slug: "cookie-policy",
    labels: {
      it: "Informativa cookie",
      en: "Cookie Policy",
      et: "Küpsisepoliitika",
      ru: "Политика cookie",
    },
  },
  {
    slug: "accessibility-statement",
    labels: {
      it: "Accessibilità",
      en: "Accessibility Statement",
      et: "Ligipääsetavuse avaldus",
      ru: "Заявление о доступности",
    },
  },
  {
    slug: "terms-of-use",
    labels: {
      it: "Termini d'uso",
      en: "Terms of Use",
      et: "Kasutustingimused",
      ru: "Условия использования",
    },
  },
  {
    slug: "colophon",
    labels: {
      it: "Divulgazione portfolio",
      en: "Portfolio Disclosure",
      et: "Portfoolio avalikustamine",
      ru: "Раскрытие портфолио",
    },
  },
];

export function getLegalLinks(lang: Locale): LegalLink[] {
  return legalRoutes.map((link) => ({
    label: link.labels[lang],
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

export const legalPageContentByLocale = {
  it: {
    privacy: {
      pageTitle: "Informativa privacy | Pasta Lab & Smoked Flavors",
      description:
        "Informativa privacy per il progetto portfolio Pasta Lab & Smoked Flavors e le superfici di prenotazione.",
      eyebrow: "Legale",
      title: "Informativa privacy",
      intro:
        "Questo sito è un progetto portfolio presentato come un marchio hospitality fittizio. Qualsiasi informazione inviata tramite i moduli, o necessaria al funzionamento tecnico del sito, è trattata dal reale operatore dietro il portfolio: Aldo G. Malasomma / CopyCodeAI, Tallinn, Estonia.",
      sections: [
        {
          title: "Dati inviati",
          body: [
            "I dati di prenotazione e contatto vengono usati solo per valutare le richieste e risponderti.",
            "Il sito non tratta al momento pagamenti, account pubblici o database clienti.",
          ],
        },
        {
          title: "Dati tecnici",
          body: [
            "Metadati basilari delle richieste o log del server possono essere trattati per mantenere il sito sicuro, affidabile e verificabile.",
            "Se l'assetto tecnico cambia, questa pagina verrà aggiornata prima di un uso più ampio dei dati.",
          ],
        },
        {
          title: "Contatto",
          body: [
            `Per domande sulla privacy o sul trattamento dei dati puoi scrivere a ${creatorBridge.email}.`,
          ],
        },
      ],
    },
    cookie: {
      pageTitle: "Informativa cookie | Pasta Lab & Smoked Flavors",
      description:
        "Informativa cookie per il progetto portfolio Pasta Lab & Smoked Flavors e le superfici di prenotazione.",
      eyebrow: "Legale",
      title: "Informativa cookie",
      intro:
        "Il sito è progettato per restare leggero sul tracciamento e non usa intenzionalmente cookie non essenziali né strumenti di analytics.",
      sections: [
        {
          title: "Funzionalità essenziali",
          body: [
            "Se il browser o l'hosting richiedono stato per la consegna base o per la gestione dei moduli, questo è limitato alle funzionalità essenziali.",
            "Al momento non esiste un livello separato di cookie pubblicitari o di misurazione sul sito.",
          ],
        },
        {
          title: "Modifiche future",
          body: [
            "Se in futuro verranno aggiunti analytics o servizi incorporati, questa policy verrà aggiornata prima della messa online.",
          ],
        },
      ],
    },
    accessibility: {
      pageTitle: "Dichiarazione di accessibilità | Pasta Lab & Smoked Flavors",
      description:
        "Dichiarazione di accessibilità per il progetto portfolio Pasta Lab & Smoked Flavors e le superfici di prenotazione.",
      eyebrow: "Legale",
      title: "Dichiarazione di accessibilità",
      intro:
        "Questa dichiarazione riguarda il sito portfolio operato da Aldo G. Malasomma / CopyCodeAI. La build attuale mira ad allinearsi ai principi WCAG 2.1 AA ed EN 301 549 in struttura, contrasto, leggibilità e interazione.",
      sections: [
        {
          title: "Cosa è già presente",
          body: [
            "Navigazione, moduli di prenotazione e blocchi contenuto principali sono costruiti per funzionare su mobile e desktop con heading semantici e gerarchia visibile.",
            "Il design mantiene il contenuto comprensibile senza affidarsi al movimento o a effetti decorativi.",
          ],
        },
        {
          title: "Limiti noti",
          body: [
            "Il sito non è ancora stato sottoposto a un audit indipendente formale.",
            "Le immagini devono continuare ad avere alt descrittivi e vanno riviste quando cambia il set fotografico.",
          ],
        },
        {
          title: "Feedback",
          body: [
            `Se riscontri un problema di accessibilità, scrivi a ${creatorBridge.email}.`,
          ],
        },
      ],
    },
    terms: {
      pageTitle: "Termini d'uso | Pasta Lab & Smoked Flavors",
      description:
        "Termini d'uso per il progetto portfolio Pasta Lab & Smoked Flavors e le superfici di prenotazione.",
      eyebrow: "Legale",
      title: "Termini d'uso",
      intro:
        "Questo sito presenta un concept portfolio per un marchio hospitality fittizio e non costituisce un contratto di prenotazione attivo.",
      sections: [
        {
          title: "Stato del concept",
          body: [
            "Il brand, il locale, i dettagli hospitality e il contesto delle prenotazioni sono fittizi e servono a dimostrare design, UX e strategia dei contenuti.",
          ],
        },
        {
          title: "Lavoro originale",
          body: [
            "Il design, lo sviluppo, la UX e l'implementazione tecnica sono lavoro originale di Aldo G. Malasomma / CopyCodeAI.",
            "Qualsiasi futuro uso operativo dovrà essere accompagnato da una revisione legale formale e da termini specifici del business.",
          ],
        },
      ],
    },
    colophon: {
      pageTitle: "Divulgazione portfolio / colophon | Pasta Lab & Smoked Flavors",
      description:
        "Divulgazione portfolio e colophon per il progetto Pasta Lab & Smoked Flavors.",
      eyebrow: "Portfolio",
      title: "Divulgazione portfolio / colophon",
      intro:
        "Una nota sintetica sul confine tra il mondo hospitality fittizio e il reale operatore dietro il progetto.",
      sections: [
        {
          title: "Progetto",
          body: [
            "Pasta Lab & Smoked Flavors è un concept hospitality fittizio costruito per dimostrare branding, copy, UX ed esecuzione Astro responsive.",
            "Il sito mantiene l'illusione di un ristorante reale pur restando un case study portfolio.",
          ],
        },
        {
          title: "Operatore reale",
          body: [
            `${creatorBridge.name} / ${creatorBridge.business} è l'operatore reale e il contatto di conformità dietro il progetto portfolio.`,
            `Contatto: ${creatorBridge.email}.`,
          ],
        },
        {
          title: "Stack",
          body: [
            "Astro, Tailwind, TypeScript e una struttura content-first estendibile verso un layer CMS.",
          ],
        },
      ],
      note: "Progetto portfolio. Brand e dettagli del locale fittizi; design, sviluppo e conformità reali di Aldo G. Malasomma / CopyCodeAI.",
      contactLabel: "Contatto operatore",
    },
  },
  en: {
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
      contactLabel: "Operator contact",
    },
  },
  et: {
    privacy: {
      pageTitle: "Privaatsuspoliitika | Pasta Lab & Smoked Flavors",
      description:
        "Privaatsuspoliitika Pasta Lab & Smoked Flavors portfooliokonseptsiooni ja broneerimisvaadete jaoks.",
      eyebrow: "Juriidiline",
      title: "Privaatsuspoliitika",
      intro:
        "See sait on portfoolioprojekt, mida esitletakse väljamõeldud hospitality-brändina. Kõik vormide kaudu saadetud andmed või tehnilise töö tagamiseks vajalik info töötleb päris operaator, kes seisab selle portfoolio taga: Aldo G. Malasomma / CopyCodeAI, Tallinn, Eesti.",
      sections: [
        {
          title: "Sinu saadetud andmed",
          body: [
            "Broneeringu- ja kontaktandmeid kasutatakse ainult taotluse ülevaatamiseks ja sulle vastamiseks.",
            "Sait ei töötle praegu makseid, avalikke kontosid ega kliendiandmebaase.",
          ],
        },
        {
          title: "Tehnilised andmed",
          body: [
            "Päringute põhimetaandmeid või serveri logisid võidakse töödelda, et sait oleks turvaline, usaldusväärne ja hallatav.",
            "Kui tehniline seadistus muutub, uuendatakse seda lehte enne andmete laiemat kasutamist.",
          ],
        },
        {
          title: "Kontakt",
          body: [
            `Privaatsuse või andmetöötluse küsimused võid saata aadressile ${creatorBridge.email}.`,
          ],
        },
      ],
    },
    cookie: {
      pageTitle: "Küpsisepoliitika | Pasta Lab & Smoked Flavors",
      description:
        "Küpsisepoliitika Pasta Lab & Smoked Flavors portfooliokonseptsiooni ja broneerimisvaadete jaoks.",
      eyebrow: "Juriidiline",
      title: "Küpsisepoliitika",
      intro:
        "Sait on loodud nii, et jälgimine oleks võimalikult kerge ja mittesiduvad küpsised või analüütikavahendid pole kasutusel tahtlikult.",
      sections: [
        {
          title: "Oluline funktsionaalsus",
          body: [
            "Kui brauseri või hostingu olek on vajalik põhitööks või vormide töötlemiseks, piirdub see vaid olulise funktsionaalsusega.",
            "Hetkel ei ole saidil eraldi reklaami- ega mõõtmisküpsiste kihti.",
          ],
        },
        {
          title: "Tulevased muudatused",
          body: [
            "Kui hiljem lisatakse analüütika või manustatud teenuseid, uuendatakse seda poliitikat enne nende avalikustamist.",
          ],
        },
      ],
    },
    accessibility: {
      pageTitle: "Juurdepääsetavuse avaldus | Pasta Lab & Smoked Flavors",
      description:
        "Juurdepääsetavuse avaldus Pasta Lab & Smoked Flavors portfooliokonseptsiooni ja broneerimisvaadete jaoks.",
      eyebrow: "Juriidiline",
      title: "Juurdepääsetavuse avaldus",
      intro:
        "See juurdepääsetavuse avaldus kehtib portfooliosaidile, mida haldab Aldo G. Malasomma / CopyCodeAI. Praegune ehitis püüab järgida WCAG 2.1 AA ja EN 301 549 põhimõtteid struktuuri, kontrasti, loetavuse ja kasutatavuse osas.",
      sections: [
        {
          title: "Mis on juba olemas",
          body: [
            "Navigeerimine, broneerimisvormid ja põhisisu plokid on loodud nii, et need töötaksid mobiilis ja arvutis koos semantiliste pealkirjade ja selge hierarhiaga.",
            "Disain hoiab info arusaadavana ilma liikumisele või dekoratiivsetele efektidele toetumata.",
          ],
        },
        {
          title: "Teadaolevad piirangud",
          body: [
            "Saiti ei ole veel allutatud ametlikule sõltumatule ligipääsetavuse auditile.",
            "Visuaalsetel materjalidel peaksid alati olema kirjeldavad alt-tekstide ja need tuleks üle vaadata iga kord, kui pildimaterjal muutub.",
          ],
        },
        {
          title: "Tagasiside",
          body: [
            `Kui märkad ligipääsetavuse probleemi, kirjuta aadressile ${creatorBridge.email}.`,
          ],
        },
      ],
    },
    terms: {
      pageTitle: "Kasutustingimused | Pasta Lab & Smoked Flavors",
      description:
        "Kasutustingimused Pasta Lab & Smoked Flavors portfooliokonseptsiooni ja broneerimisvaadete jaoks.",
      eyebrow: "Juriidiline",
      title: "Kasutustingimused",
      intro:
        "See sait esitab portfooliokonseptsiooni väljamõeldud hospitality-brändi jaoks ega ole aktiivne broneerimisleping.",
      sections: [
        {
          title: "Kontseptsiooni staatus",
          body: [
            "Bränd, koht, hospitality-andmed ja broneerimiskontekst on väljamõeldud ning mõeldud disaini, UX-i ja sisu strateegia demonstreerimiseks.",
          ],
        },
        {
          title: "Originaalne töö",
          body: [
            "Disain, arendus, UX ja tehniline teostus on Aldo G. Malasomma / CopyCodeAI originaaltöö.",
            "Iga tulevane operatiivne kasutus peaks olema seotud ametliku õigusliku ülevaate ja ärispetsiifiliste tingimustega.",
          ],
        },
      ],
    },
    colophon: {
      pageTitle: "Portfoolio avalikustamine / kolofon | Pasta Lab & Smoked Flavors",
      description:
        "Portfoolio avalikustamine ja kolofon Pasta Lab & Smoked Flavors projekti jaoks.",
      eyebrow: "Portfoolio",
      title: "Portfoolio avalikustamine / kolofon",
      intro:
        "Lühike märkus selle kohta, mis on väljamõeldud hospitality-maailmas ja kes on päris operaator projekti taga.",
      sections: [
        {
          title: "Projekt",
          body: [
            "Pasta Lab & Smoked Flavors on väljamõeldud hospitality-kontseptsioon, mis on loodud brändingu, copy, UX-i ja responsive Astro teostuse demonstreerimiseks.",
            "Sait hoiab päris restorani muljet, jäädes samal ajal portfoolio juhtumiuuringuks.",
          ],
        },
        {
          title: "Päris operaator",
          body: [
            `${creatorBridge.name} / ${creatorBridge.business} on projekti taga olev päris operaator ja vastavuskontakt.`,
            `Kontakt: ${creatorBridge.email}.`,
          ],
        },
        {
          title: "Stack",
          body: [
            "Astro, Tailwind, TypeScript ja content-first struktuur, mida saab tulevikus laiendada CMS-kihiks.",
          ],
        },
      ],
      note: "Portfoolioprojekt. Fiktiivne bränd ja kohadetailid; tegelik disain, arendus ja vastavus Aldo G. Malasomma / CopyCodeAI poolt.",
      contactLabel: "Operaatori kontakt",
    },
  },
  ru: {
    privacy: {
      pageTitle: "Политика конфиденциальности | Pasta Lab & Smoked Flavors",
      description:
        "Политика конфиденциальности для портфолио-проекта Pasta Lab & Smoked Flavors и форм бронирования.",
      eyebrow: "Правовая информация",
      title: "Политика конфиденциальности",
      intro:
        "Этот сайт — портфолио-проект, представленный как вымышленный гастрономический бренд. Любая информация, отправленная через формы, или необходимая для технической работы сайта, обрабатывается реальным оператором портфолио: Aldo G. Malasomma / CopyCodeAI, Tallinn, Estonia.",
      sections: [
        {
          title: "Сведения, которые вы отправляете",
          body: [
            "Данные бронирования и контакта используются только для рассмотрения запроса и ответа вам.",
            "Сайт в настоящее время не обрабатывает платежи, публичные аккаунты или клиентские базы данных.",
          ],
        },
        {
          title: "Технические данные",
          body: [
            "Базовые метаданные запросов или серверные журналы могут обрабатываться для безопасности, стабильности и отладки сайта.",
            "Если техническая схема изменится, эта страница будет обновлена до любого более широкого использования данных.",
          ],
        },
        {
          title: "Контакты",
          body: [
            `Вопросы о конфиденциальности или обработке данных можно направлять на ${creatorBridge.email}.`,
          ],
        },
      ],
    },
    cookie: {
      pageTitle: "Политика cookie | Pasta Lab & Smoked Flavors",
      description:
        "Политика cookie для портфолио-проекта Pasta Lab & Smoked Flavors и форм бронирования.",
      eyebrow: "Правовая информация",
      title: "Политика cookie",
      intro:
        "Сайт спроектирован так, чтобы свести трекинг к минимуму, и не использует намеренно необязательные cookie или инструменты аналитики.",
      sections: [
        {
          title: "Необходимая функциональность",
          body: [
            "Если для базовой доставки или обработки форм требуется состояние браузера или хостинга, оно ограничивается только необходимой функциональностью.",
            "На сайте сейчас нет отдельного слоя рекламных или измерительных cookie.",
          ],
        },
        {
          title: "Будущие изменения",
          body: [
            "Если позже будут добавлены аналитика или встроенные сервисы, эта политика будет обновлена до их запуска.",
          ],
        },
      ],
    },
    accessibility: {
      pageTitle: "Заявление о доступности | Pasta Lab & Smoked Flavors",
      description:
        "Заявление о доступности для портфолио-проекта Pasta Lab & Smoked Flavors и форм бронирования.",
      eyebrow: "Правовая информация",
      title: "Заявление о доступности",
      intro:
        "Это заявление о доступности относится к портфолио-сайту, которым управляет Aldo G. Malasomma / CopyCodeAI. Текущая сборка стремится соответствовать принципам WCAG 2.1 AA и EN 301 549 в части структуры, контраста, читаемости и взаимодействия.",
      sections: [
        {
          title: "Что уже реализовано",
          body: [
            "Навигация, формы бронирования и основные блоки контента работают на мобильных и настольных устройствах с семантическими заголовками и видимой иерархией.",
            "Дизайн делает информацию понятной без зависимости от анимации или декоративных эффектов.",
          ],
        },
        {
          title: "Известные ограничения",
          body: [
            "Сайт ещё не проходил независимый формальный аудит доступности.",
            "Изображения должны и дальше получать описательные alt-тексты и пересматриваться при смене фотоматериалов.",
          ],
        },
        {
          title: "Обратная связь",
          body: [
            `Если вы столкнулись с проблемой доступности, свяжитесь по адресу ${creatorBridge.email}.`,
          ],
        },
      ],
    },
    terms: {
      pageTitle: "Условия использования | Pasta Lab & Smoked Flavors",
      description:
        "Условия использования для портфолио-проекта Pasta Lab & Smoked Flavors и форм бронирования.",
      eyebrow: "Правовая информация",
      title: "Условия использования",
      intro:
        "Этот сайт представляет портфолио-концепцию вымышленного гастрономического бренда и не является действующим договором бронирования.",
      sections: [
        {
          title: "Статус концепции",
          body: [
            "Бренд, место, гастрономические детали и контекст бронирования являются вымышленными и используются для демонстрации дизайна, UX и контент-стратегии.",
          ],
        },
        {
          title: "Оригинальная работа",
          body: [
            "Дизайн, разработка, UX и техническая реализация являются оригинальной работой Aldo G. Malasomma / CopyCodeAI.",
            "Любое будущее операционное использование должно сопровождаться формальной юридической проверкой и бизнес-специфическими условиями.",
          ],
        },
      ],
    },
    colophon: {
      pageTitle: "Раскрытие портфолио / колофон | Pasta Lab & Smoked Flavors",
      description:
        "Раскрытие портфолио и колофон для проекта Pasta Lab & Smoked Flavors.",
      eyebrow: "Портфолио",
      title: "Раскрытие портфолио / колофон",
      intro:
        "Краткая заметка о границе между вымышленным миром hospitality и реальным оператором, стоящим за проектом.",
      sections: [
        {
          title: "Проект",
          body: [
            "Pasta Lab & Smoked Flavors — это вымышленная hospitality-концепция, созданная для демонстрации брендинга, copy, UX и responsive-реализации на Astro.",
            "Сайт сохраняет иллюзию реального ресторана, оставаясь портфолио-кейсом.",
          ],
        },
        {
          title: "Реальный оператор",
          body: [
            `${creatorBridge.name} / ${creatorBridge.business} — реальный оператор и контакт по соответствию, стоящий за проектом.`,
            `Контакт: ${creatorBridge.email}.`,
          ],
        },
        {
          title: "Stack",
          body: [
            "Astro, Tailwind, TypeScript и content-first структура, которую можно расширить до слоя CMS.",
          ],
        },
      ],
      note: "Портфолио-проект. Бренд и данные заведения вымышлены; реальный дизайн, разработка и комплаенс — Aldo G. Malasomma / CopyCodeAI.",
      contactLabel: "Контакт оператора",
    },
  },
} as const satisfies Record<Locale, Record<LegalPageKey, LegalPageContent>>;

export function getLegalPageContent(lang: Locale, page: LegalPageKey): LegalPageContent {
  return legalPageContentByLocale[lang][page];
}

export type LegalPage = (typeof legalPageContentByLocale)["en"][LegalPageKey];
