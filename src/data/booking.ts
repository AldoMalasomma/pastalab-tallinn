import { z } from "zod";
import type { Locale } from "../i18n/ui";

type Detail = {
  label: string;
  value: string;
  text: string;
};

type Card = {
  title: string;
  text: string;
};

type Field = {
  label: string;
  help: string;
  placeholder?: string;
};

export const bookingSchema = z.object({
  date: z
    .string()
    .min(1, "Please choose a date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a valid date")
    .refine((value) => value >= getTallinnDate(), {
      message: "Please choose today or a later date",
    }),
  time: z
    .string()
    .min(1, "Please choose a time")
    .regex(/^\d{2}:\d{2}$/, "Please choose a valid time")
    .refine((value) => value >= DINNER_START_TIME && value <= DINNER_END_TIME, {
      message: "Please choose a time between 18:00 and 22:30",
    }),
  guests: z.coerce
    .number({ invalid_type_error: "Please choose the number of guests" })
    .int("Please choose a whole number")
    .min(1, "We need at least one guest")
    .max(8, "Please keep the party to 8 guests or fewer"),
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  notes: z
    .string()
    .trim()
    .max(500, "Please keep notes under 500 characters")
    .optional()
    .default(""),
});

export type BookingSubmission = z.infer<typeof bookingSchema>;

const DINNER_START_TIME = "18:00";
const DINNER_END_TIME = "22:30";

function getTallinnDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Tallinn",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export type BookingContent = {
  pageTitle: string;
  seo: {
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    details: Detail[];
  };
  form: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: {
      visit: string;
      contact: string;
      notes: string;
    };
    fields: {
      date: Field;
      time: Field;
      guests: Field;
      name: Field;
      email: Field;
      notes: Field;
    };
    submitLabel: string;
    pendingLabel: string;
    helper: string;
    actionNote: string;
    error: {
      eyebrow: string;
      title: string;
      text: string;
      retryLabel: string;
      fieldMessage: string;
    };
    success: {
      eyebrow: string;
      title: string;
      text: string;
      referenceLabel: string;
      resetLabel: string;
    };
  };
  sidebar: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Card[];
  };
};

export const bookingContent = {
  it: {
    pageTitle: "Prenotazione | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Prenota un tavolo a Tallinn per una cena intima con pasta fresca fatta a mano, ingredienti baltici affumicati e fermentati, e conferma manuale via email.",
    },
    hero: {
      eyebrow: "Prenotazione",
      title: "Prenota il tuo tavolo",
      subtitle:
        "Una richiesta semplice, un controllo manuale e un servizio pensato per la cena. Se hai esigenze particolari, lasciale nelle note.",
      details: [
        {
          label: "Orari",
          value: "18:00–22:30",
          text: "Servizio cena dal martedì alla domenica.",
        },
        {
          label: "Tenuta tavolo",
          value: "15 minuti",
          text: "Tenuta breve prima di liberare il tavolo.",
        },
        {
          label: "Ospiti",
          value: "1–8 ospiti",
          text: "Per gruppi più grandi, scrivilo nelle note.",
        },
      ],
    },
    form: {
      eyebrow: "Richiesta tavolo",
      title: "Raccontaci quando vorresti venire",
      intro:
        "Compila i dettagli principali e prepareremo la tua richiesta tavolo. La disponibilità viene confermata via email dopo il controllo manuale.",
      sections: {
        visit: "Dettagli della visita",
        contact: "Contatti",
        notes: "Note opzionali",
      },
      fields: {
        date: {
          label: "Data",
          help: "Scegli il giorno in cui vuoi cenare da noi.",
        },
        time: {
          label: "Orario",
          help: "Serviamo la cena tra le 18:00 e le 22:30.",
        },
        guests: {
          label: "Numero di ospiti",
          help: "Accettiamo prenotazioni da 1 a 8 persone.",
        },
        name: {
          label: "Nome e cognome",
          help: "Come compare sulla prenotazione.",
        },
        email: {
          label: "Email",
          help: "Invieremo qui la conferma.",
        },
        notes: {
          label: "Note",
          help: "Allergie, anniversari o richieste speciali.",
          placeholder: "Raccontaci eventuali dettagli utili.",
        },
      },
      submitLabel: "Invia richiesta",
      pendingLabel: "Invio in corso...",
      helper: "Le richieste vengono controllate manualmente prima della conferma.",
      actionNote:
        "La richiesta passa ora attraverso Astro Actions ed è pronta per email o archiviazione futura.",
      error: {
        eyebrow: "Richiesta non inviata",
        title: "Controlla i dettagli e riprova.",
        text:
          "Abbiamo trovato un problema nel completare la richiesta. Verifica i campi evidenziati oppure riprova tra poco.",
        retryLabel: "Riprova",
        fieldMessage: "Controlla questo campo e riprova.",
      },
      success: {
        eyebrow: "Richiesta ricevuta",
        title: "Grazie. Abbiamo registrato la tua richiesta.",
        text:
          "Ti confermeremo la disponibilità via email. Nel frattempo puoi tornare al menu o inviare un'altra richiesta.",
        referenceLabel: "Riferimento richiesta",
        resetLabel: "Invia un'altra richiesta",
      },
    },
    sidebar: {
      eyebrow: "Note di sala",
      title: "Un servizio serale, caldo e controllato",
      text:
        "Il ristorante è pensato per una cena tranquilla: menu breve, ritmo misurato e un ambiente intimo ma contemporaneo.",
      cards: [
        {
          title: "Ideale per",
          text: "Cene intime, piccoli gruppi e occasioni speciali.",
        },
        {
          title: "Risposta",
          text: "Le richieste vengono controllate manualmente prima della conferma.",
        },
        {
          title: "Ritmo menu",
          text: "La carta segue il mercato e cambia con la stagione.",
        },
      ],
    },
  },

  en: {
    pageTitle: "Booking | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Reserve a table in Tallinn for an intimate dinner built around handmade fresh pasta, smoked and fermented Baltic ingredients, and manual email confirmation.",
    },
    hero: {
      eyebrow: "Booking",
      title: "Reserve your table",
      subtitle:
        "A simple request, a manual check, and a dinner-first service. If you have special plans, add them in the notes.",
      details: [
        {
          label: "Service window",
          value: "18:00–22:30",
          text: "Dinner service from Tuesday to Sunday.",
        },
        {
          label: "Table hold",
          value: "15 minutit",
          text: "We hold the table briefly before releasing it.",
        },
        {
          label: "Party size",
          value: "1–8 külalist",
          text: "For larger groups, mention it in the notes.",
        },
      ],
    },
    form: {
      eyebrow: "Table request",
      title: "Tell us when you'd like to dine",
      intro:
        "Share the essentials and we’ll prepare the table request. Availability is confirmed by email after a manual check.",
      sections: {
        visit: "Visit details",
        contact: "Contact details",
        notes: "Optional notes",
      },
      fields: {
        date: {
          label: "Date",
          help: "Choose the evening you’d like to dine with us.",
        },
        time: {
          label: "Time",
          help: "Dinner service runs from 18:00 to 22:30.",
        },
        guests: {
          label: "Guests",
          help: "We take bookings for 1 to 8 guests.",
        },
        name: {
          label: "Full name",
          help: "Use the name you want on the reservation.",
        },
        email: {
          label: "Email",
          help: "We’ll send the confirmation here.",
        },
        notes: {
          label: "Notes",
          help: "Allergies, anniversaries, or special requests.",
          placeholder: "Share any useful details.",
        },
      },
      submitLabel: "Send request",
      pendingLabel: "Sending...",
      helper: "Requests are reviewed manually before confirmation.",
      actionNote:
        "This request now travels through an Astro Action and can later connect to email or storage.",
      error: {
        eyebrow: "Request not sent",
        title: "Check the details and try again.",
        text:
          "We couldn’t complete the request just now. Please review the highlighted fields or try again shortly.",
        retryLabel: "Try again",
        fieldMessage: "Check this field and try again.",
      },
      success: {
        eyebrow: "Request received",
        title: "Thanks. We’ve captured your request.",
        text:
          "We’ll confirm availability by email. In the meantime, you can return to the menu or send another request.",
        referenceLabel: "Request reference",
        resetLabel: "Send another request",
      },
    },
    sidebar: {
      eyebrow: "Dining notes",
      title: "An evening service with a calm, focused rhythm",
      text:
        "The restaurant is designed for a slow dinner: a compact menu, measured pacing, and an intimate room with a contemporary edge.",
      cards: [
        {
          title: "Best for",
          text: "Quiet dinners, small groups, and special occasions.",
        },
        {
          title: "Response",
          text: "Requests are checked manually before confirmation.",
        },
        {
          title: "Menu rhythm",
          text: "The menu follows the market and changes with the season.",
        },
      ],
    },
  },

  et: {
    pageTitle: "Broneerimine | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Broneeri laud Tallinnas intiimseks õhtusöögiks, kus kohtuvad käsitööna tehtud värske pasta, suitsutatud ja fermenteeritud kohalikud koostisosad ning käsitsi kinnitus e-kirjaga.",
    },
    hero: {
      eyebrow: "Broneerimine",
      title: "Broneeri oma laud",
      subtitle:
        "Lihtne päring, käsitsi kontroll ja õhtusöögile suunatud teenindus. Kui sul on erisoove, lisa need märkustesse.",
      details: [
        {
          label: "Teenindus",
          value: "18:00–22:30",
          text: "Õhtusöök teisipäevast pühapäevani.",
        },
        {
          label: "Laua hoid",
          value: "15 minutit",
          text: "Hoiame lauda lühidalt enne vabastamist.",
        },
        {
          label: "Külalisi",
          value: "1–8 külalist",
          text: "Suurema seltskonna lisa märkustesse.",
        },
      ],
    },
    form: {
      eyebrow: "Lauapäring",
      title: "Ütle meile, millal soovid einestada",
      intro:
        "Täida põhiandmed ja me paneme sinu lauapäringu valmis. Saadame saadavuse kinnituse e-kirjaga pärast käsitsi kontrolli.",
      sections: {
        visit: "Külastuse andmed",
        contact: "Kontaktandmed",
        notes: "Valikulised märkmed",
      },
      fields: {
        date: {
          label: "Kuupäev",
          help: "Vali õhtu, mil soovid meie juures süüa.",
        },
        time: {
          label: "Aeg",
          help: "Õhtusöök toimub ajavahemikus 18:00–22:30.",
        },
        guests: {
          label: "Külalisi",
          help: "Võtame vastu broneeringuid 1–8 inimesele.",
        },
        name: {
          label: "Täisnimi",
          help: "Kasuta nime, mis peaks broneeringul olema.",
        },
        email: {
          label: "E-post",
          help: "Kinnituse saadame siia.",
        },
        notes: {
          label: "Märkmed",
          help: "Allergiad, tähtpäevad või erisoovid.",
          placeholder: "Jaga kõike, mis aitab meil valmistuda.",
        },
      },
      submitLabel: "Saada päring",
      pendingLabel: "Saadan...",
      helper: "Päringud kontrollitakse enne kinnitamist käsitsi.",
      actionNote:
        "See päring liigub nüüd Astro Actionsi kaudu ja saab hiljem ühilduda e-posti või salvestusega.",
      error: {
        eyebrow: "Päring ei läinud läbi",
        title: "Kontrolli andmed ja proovi uuesti.",
        text:
          "Päringu lõpetamine ei õnnestunud. Vaata esile tõstetud väljad üle või proovi mõne hetke pärast uuesti.",
        retryLabel: "Proovi uuesti",
        fieldMessage: "Kontrolli seda välja ja proovi uuesti.",
      },
      success: {
        eyebrow: "Päring vastu võetud",
        title: "Aitäh. Sinu päring on olemas.",
        text:
          "Kinnitame saadavuse e-kirja teel. Soovi korral võid naasta menüüsse või saata uue päringu.",
        referenceLabel: "Päringu viide",
        resetLabel: "Saada uus päring",
      },
    },
    sidebar: {
      eyebrow: "Söögisaali märkmed",
      title: "Rahulik õhtusöögirütm ja selge teenindus",
      text:
        "Restoran on loodud aeglaseks õhtusöögiks: lühike menüü, mõõdukas tempo ja intiimne ruum kaasaegse servaga.",
      cards: [
        {
          title: "Sobib",
          text: "Rahulikud õhtusöögid, väiksed grupid ja erisündmused.",
        },
        {
          title: "Vastus",
          text: "Päringud kontrollitakse enne kinnitamist käsitsi.",
        },
        {
          title: "Menüü rütm",
          text: "Menüü järgib turgu ja muutub hooajaga.",
        },
      ],
    },
  },

  ru: {
    pageTitle: "Бронирование | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Забронируйте стол в Таллине для камерного ужина с пастой ручной работы, копчёными и ферментированными балтийскими ингредиентами и ручным подтверждением по email.",
    },
    hero: {
      eyebrow: "Бронирование",
      title: "Забронируйте стол",
      subtitle:
        "Простой запрос, ручная проверка и сервис, ориентированный на ужин. Если есть особые пожелания, оставьте их в заметках.",
      details: [
        {
          label: "Время",
          value: "18:00–22:30",
          text: "Ужин со вторника по воскресенье.",
        },
        {
          label: "Стол держим",
          value: "15 минут",
          text: "Стол удерживается недолго перед освобождением.",
        },
        {
          label: "Гостей",
          value: "1–8 гостей",
          text: "Для большой компании укажите это в заметках.",
        },
      ],
    },
    form: {
      eyebrow: "Запрос на стол",
      title: "Расскажите, когда вы хотели бы прийти",
      intro:
        "Укажите основные данные, и мы подготовим запрос на стол. Доступность подтверждаем по email после ручной проверки.",
      sections: {
        visit: "Детали визита",
        contact: "Контакты",
        notes: "Дополнительные заметки",
      },
      fields: {
        date: {
          label: "Дата",
          help: "Выберите вечер, когда хотите поужинать у нас.",
        },
        time: {
          label: "Время",
          help: "Ужин подаётся с 18:00 до 22:30.",
        },
        guests: {
          label: "Гостей",
          help: "Мы принимаем бронирования на 1–8 гостей.",
        },
        name: {
          label: "Имя и фамилия",
          help: "Используйте имя, которое должно быть в брони.",
        },
        email: {
          label: "Email",
          help: "Подтверждение придёт сюда.",
        },
        notes: {
          label: "Заметки",
          help: "Аллергии, годовщины или особые пожелания.",
          placeholder: "Напишите всё, что поможет нам подготовиться.",
        },
      },
      submitLabel: "Отправить запрос",
      pendingLabel: "Отправляем...",
      helper: "Запросы проверяются вручную перед подтверждением.",
      actionNote:
        "Этот запрос уже проходит через Astro Actions и позже может подключиться к email или сохранению.",
      error: {
        eyebrow: "Запрос не отправлен",
        title: "Проверьте данные и попробуйте снова.",
        text:
          "Сейчас не удалось завершить запрос. Проверьте выделенные поля или попробуйте ещё раз через пару минут.",
        retryLabel: "Попробовать снова",
        fieldMessage: "Проверьте это поле и попробуйте снова.",
      },
      success: {
        eyebrow: "Запрос получен",
        title: "Спасибо. Мы получили ваш запрос.",
        text:
          "Мы подтвердим доступность по email. При желании вы можете вернуться в меню или отправить новый запрос.",
        referenceLabel: "Номер запроса",
        resetLabel: "Отправить новый запрос",
      },
    },
    sidebar: {
      eyebrow: "Заметки зала",
      title: "Спокойный вечерний ритм и чёткий сервис",
      text:
        "Ресторан рассчитан на неспешный ужин: компактное меню, выверенный темп и камерное пространство с современным характером.",
      cards: [
        {
          title: "Подходит для",
          text: "Тихие ужины, небольшие компании и особые случаи.",
        },
        {
          title: "Ответ",
          text: "Запросы проверяются вручную перед подтверждением.",
        },
        {
          title: "Ритм меню",
          text: "Меню следует за рынком и меняется по сезону.",
        },
      ],
    },
  },
} as const satisfies Record<Locale, BookingContent>;
