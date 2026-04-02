import type { Locale } from "../i18n/ui";

type Link = {
  label: string;
  href: string;
};

type OpeningHoursSpecification = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type HospitalityBusiness = {
  name: string;
  urlPath: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  openingHoursSpecification: OpeningHoursSpecification[];
  sameAs: string[];
  contactType: string;
};

type HospitalityContent = {
  eyebrow: string;
  title: string;
  text: string;
  schemaDescription: string;
  addressLabel: string;
  hoursLabel: string;
  phoneLabel: string;
  emailLabel: string;
  reservationNoteLabel: string;
  bookingCtaLabel: string;
  menuCtaLabel: string;
  address: string;
  hours: string[];
  phone: string;
  email: string;
  reservationNote: string;
  linksLabel: string;
  links: Link[];
};

export const hospitalityBusiness: HospitalityBusiness = {
  name: "Pasta Lab & Smoked Flavors",
  urlPath: "/it/",
  telephone: "+372 612 4580",
  email: "hello@pastalabsmokedflavors.com",
  address: {
    streetAddress: "Põhja puiestee 17",
    postalCode: "10415",
    addressLocality: "Tallinn",
    addressRegion: "Harju County",
    addressCountry: "EE",
  },
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
      ],
      opens: "18:00",
      closes: "22:30",
    },
    {
      dayOfWeek: [
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
      ],
      opens: "18:00",
      closes: "23:00",
    },
    {
      dayOfWeek: ["https://schema.org/Sunday"],
      opens: "17:30",
      closes: "21:30",
    },
  ],
  sameAs: ["https://instagram.com/pastalab.smokedflavors"],
  contactType: "reservations",
};

export const hospitalityContent = {
  it: {
    eyebrow: "Informazioni",
    title: "Pasta Lab & Smoked Flavors",
    text:
      "Un bistrò contemporaneo a Tallinn, aperto per cene raccolte e tavoli curati con attenzione.",
    schemaDescription:
      "Bistrò di pasta a Tallinn dove pasta fresca fatta a mano incontra ingredienti baltici affumicati e fermentati.",
    addressLabel: "Indirizzo",
    hoursLabel: "Orari",
    phoneLabel: "Telefono",
    emailLabel: "Email",
    reservationNoteLabel: "Prenotazioni",
    bookingCtaLabel: "Prenota un tavolo",
    menuCtaLabel: "Menu",
    address: "Põhja puiestee 17, 10415 Tallinn, Estonia",
    hours: [
      "Mar–Gio 18:00–22:30",
      "Ven–Sab 18:00–23:00",
      "Dom 17:30–21:30",
    ],
    phone: "+372 612 4580",
    email: "hello@pastalabsmokedflavors.com",
    reservationNote:
      "Le prenotazioni sono consigliate. Per gruppi di 6 o più ospiti, scrivici prima.",
    linksLabel: "Segui",
    links: [
      { label: "Instagram", href: "https://instagram.com/pastalab.smokedflavors" },
      { label: "Maps", href: "https://maps.google.com/?q=P%C3%B5hja%20puiestee%2017%2C%20Tallinn" },
    ],
  },
  en: {
    eyebrow: "Info",
    title: "Pasta Lab & Smoked Flavors",
    text:
      "A contemporary Tallinn bistro for intimate dinners and carefully paced service.",
    schemaDescription:
      "A Tallinn pasta bistro where handmade fresh pasta meets smoked and fermented Baltic ingredients.",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    phoneLabel: "Phone",
    emailLabel: "Email",
    reservationNoteLabel: "Reservations",
    bookingCtaLabel: "Book a table",
    menuCtaLabel: "Menu",
    address: "Põhja puiestee 17, 10415 Tallinn, Estonia",
    hours: [
      "Tue–Thu 18:00–22:30",
      "Fri–Sat 18:00–23:00",
      "Sun 17:30–21:30",
    ],
    phone: "+372 612 4580",
    email: "hello@pastalabsmokedflavors.com",
    reservationNote:
      "Reservations are recommended. For parties of 6 or more, please contact us in advance.",
    linksLabel: "Follow",
    links: [
      { label: "Instagram", href: "https://instagram.com/pastalab.smokedflavors" },
      { label: "Maps", href: "https://maps.google.com/?q=P%C3%B5hja%20puiestee%2017%2C%20Tallinn" },
    ],
  },
  et: {
    eyebrow: "Info",
    title: "Pasta Lab & Smoked Flavors",
    text:
      "Kaasaegne Tallinna bistroo intiimseteks õhtusöökideks ja hoolikalt hoitud teeninduseks.",
    schemaDescription:
      "Tallinna pasta-bistroo, kus käsitsi tehtud värske pasta kohtub suitsutatud ja fermenteeritud Balti koostisosadega.",
    addressLabel: "Aadress",
    hoursLabel: "Lahtiolekuajad",
    phoneLabel: "Telefon",
    emailLabel: "E-post",
    reservationNoteLabel: "Broneeringud",
    bookingCtaLabel: "Broneeri laud",
    menuCtaLabel: "Menüü",
    address: "Põhja puiestee 17, 10415 Tallinn, Eesti",
    hours: ["T–N 18:00–22:30", "R–L 18:00–23:00", "P 17:30–21:30"],
    phone: "+372 612 4580",
    email: "hello@pastalabsmokedflavors.com",
    reservationNote:
      "Broneerimine on soovitatav. 6 või enama külalise korral kirjuta meile ette.",
    linksLabel: "Jälgi",
    links: [
      { label: "Instagram", href: "https://instagram.com/pastalab.smokedflavors" },
      { label: "Maps", href: "https://maps.google.com/?q=P%C3%B5hja%20puiestee%2017%2C%20Tallinn" },
    ],
  },
  ru: {
    eyebrow: "Информация",
    title: "Pasta Lab & Smoked Flavors",
    text:
      "Современное таллиннское бистро для камерных ужинов и спокойного сервиса.",
    schemaDescription:
      "Таллиннский паста-бистро, где свежая паста ручной работы встречается с копчёными и ферментированными балтийскими ингредиентами.",
    addressLabel: "Адрес",
    hoursLabel: "Часы работы",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    reservationNoteLabel: "Бронирование",
    bookingCtaLabel: "Забронировать стол",
    menuCtaLabel: "Меню",
    address: "Põhja puiestee 17, 10415 Tallinn, Estonia",
    hours: ["Вт–Чт 18:00–22:30", "Пт–Сб 18:00–23:00", "Вс 17:30–21:30"],
    phone: "+372 612 4580",
    email: "hello@pastalabsmokedflavors.com",
    reservationNote:
      "Бронирование желательно. Для компаний от 6 гостей, пожалуйста, свяжитесь с нами заранее.",
    linksLabel: "Следите",
    links: [
      { label: "Instagram", href: "https://instagram.com/pastalab.smokedflavors" },
      { label: "Maps", href: "https://maps.google.com/?q=P%C3%B5hja%20puiestee%2017%2C%20Tallinn" },
    ],
  },
} as const satisfies Record<Locale, HospitalityContent>;

export type HospitalityContent = (typeof hospitalityContent)[Locale];
