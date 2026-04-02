import type { Locale } from "../i18n/ui";

type Member = {
  name: string;
  role: string;
  text: string;
};

type Principle = {
  title: string;
  text: string;
};

type Ritual = {
  title: string;
  text: string;
};

type HouseContentData = {
  pageTitle: string;
  seo: {
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  story: {
    eyebrow: string;
    title: string;
    text: string;
    pullQuoteLabel: string;
    pullQuote: string;
  };
  founders: {
    eyebrow: string;
    title: string;
    text: string;
    members: Member[];
  };
  house: {
    eyebrow: string;
    title: string;
    text: string;
    principles: Principle[];
  };
  rituals: {
    eyebrow: string;
    title: string;
    text: string;
    items: Ritual[];
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export const houseContent = {
  it: {
    pageTitle: "La casa | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Scopri la casa di Pasta Lab & Smoked Flavors: Matteo Valli, Liis Saar e Aleksander “Sass” Kõiv guidano un bistrò di pasta a Tallinn tra tecnica italiana e carattere baltico.",
    },
    hero: {
      eyebrow: "La casa",
      title: "Una casa piccola, costruita attorno alla pasta fresca.",
      subtitle:
        "Pasta Lab & Smoked Flavors nasce dall'incontro tra la pasta italiana di Matteo Valli, la direzione di casa di Liis Saar e il lavoro di sala e pairing di Aleksander “Sass” Kõiv.",
      primaryCta: "Scopri il menu",
      secondaryCta: "Prenota un tavolo",
    },
    story: {
      eyebrow: "Storia della casa",
      title: "Un ex spazio industriale vicino al porto, trasformato in bistrò-lab.",
      text:
        "La casa prende forma da una struttura portuale ripensata come sala calda e precisa: pasta fresca, ingredienti baltici, fumo leggero, fermentazioni e tecniche lente che tengono tutto in equilibrio.",
      pullQuoteLabel: "Citazione guida",
      pullQuote:
        "Non una trattoria, non fine dining: un luogo intimo in cui il Nord incontra la mano italiana senza perdere carattere.",
    },
    founders: {
      eyebrow: "Fondatori",
      title: "Tre ruoli, una sola voce",
      text:
        "La cucina, la sala e il tono della casa restano distinti ma perfettamente allineati. Ogni ruolo ha un compito chiaro, e insieme definiscono il ritmo del locale.",
      members: [
        {
          name: "Matteo Valli",
          role: "Chef & Co-Founder",
          text:
            "Tiene il centro della pasta: impasti, tagli, ripieni e cotture pulite. La sua cucina dà struttura al piatto senza appesantirlo.",
        },
        {
          name: "Liis Saar",
          role: "Co-Founder & House Direction",
          text:
            "Definisce il lato baltico della casa: materiali, ritmo, accoglienza e il modo in cui la stanza resta calda, precisa e contemporanea.",
        },
        {
          name: 'Aleksander “Sass” Kõiv',
          role: "Pairings & Floor",
          text:
            "Guida sala e pairing con una lettura sobria del tavolo: kombucha, kefir, infusi, vini naturali e cider secco, senza forzature.",
        },
      ],
    },
    house: {
      eyebrow: "Direzione della casa",
      title: "Il carattere del posto nasce dai dettagli giusti.",
      text:
        "La sala deve sembrare vissuta ma controllata: legno scuro, rame opaco, lino, vetro affumicato e ceramiche in crema, cenere e carbone.",
      principles: [
        {
          title: "Mestiere, visibile ma quieto",
          text:
            "La pasta si sente vicina al tavolo, ma senza teatralità superflua.",
        },
        {
          title: "Materialità baltica",
          text:
            "Maggior profondità da funghi, aneto, cavolo fermentato, cipolla bruciata e brodi ridotti.",
        },
        {
          title: "Menu corto, ritmo chiaro",
          text:
            "Pochi passaggi, stagionalità forte e una sala che sa quando fermarsi.",
        },
      ],
    },
    rituals: {
      eyebrow: "Rituali di casa",
      title: "Piccoli gesti che rendono la casa riconoscibile",
      text:
        "L'ospitalità non deve essere rumorosa: deve arrivare con precisione, calore e una certa memoria materiale.",
      items: [
        {
          title: "Pane caldo e burro affumicato",
          text:
            "Un gesto di apertura che mette subito in chiaro il lessico della casa.",
        },
        {
          title: "Pasta fatta in vista",
          text:
            "La manualità resta percepibile, ma sempre al servizio del piatto e della sala.",
        },
        {
          title: "Pairing oltre il vino",
          text:
            "Kombucha, kefir, infusi e cider secco ampliano la cena senza renderla didascalica.",
        },
        {
          title: "Luce ambrata e tempo lento",
          text:
            "La stanza deve invitare a restare, non a passare oltre.",
        },
      ],
    },
    cta: {
      eyebrow: "Prossimo passo",
      title: "Se la casa ti convince, il tavolo è il passo successivo.",
      text:
        "Il menu racconta il carattere della cucina; la prenotazione apre la porta alla sala.",
      primaryCta: "Vedi il menu",
      secondaryCta: "Prenota un tavolo",
    },
  },
  en: {
    pageTitle: "The House | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Meet the house behind Pasta Lab & Smoked Flavors: Matteo Valli, Liis Saar, and Aleksander “Sass” Kõiv shape a Tallinn pasta bistro with Italian craft and Baltic character.",
    },
    hero: {
      eyebrow: "The House",
      title: "A small house built around fresh pasta.",
      subtitle:
        "Pasta Lab & Smoked Flavors brings together Matteo Valli's pasta discipline, Liis Saar's house direction, and Aleksander “Sass” Kõiv's floor and pairing rhythm.",
      primaryCta: "Explore the menu",
      secondaryCta: "Book a table",
    },
    story: {
      eyebrow: "House story",
      title: "A former industrial space near the port, remade as a bistro-lab.",
      text:
        "The room was imagined as a port-side shell made warmer and more precise: fresh pasta, Baltic ingredients, gentle smoke, fermentation, and slow techniques held in balance.",
      pullQuote:
        "Not a trattoria, not fine dining: an intimate room where northern character and Italian craft meet without softening either one.",
    },
    founders: {
      eyebrow: "Founders",
      title: "Three roles, one voice",
      text:
        "Kitchen, floor, and house direction stay distinct but aligned. Each role carries its own responsibility, and together they define the rhythm of the place.",
      members: [
        {
          name: "Matteo Valli",
          role: "Chef & Co-Founder",
          text:
            "Keeps the pasta at the center: dough, cuts, fillings, and clean cooking. His work gives structure without weight.",
        },
        {
          name: "Liis Saar",
          role: "Co-Founder & House Direction",
          text:
            "Shapes the Baltic side of the house: materials, pacing, welcome, and the feeling of a room that is warm but controlled.",
        },
        {
          name: 'Aleksander “Sass” Kõiv',
          role: "Pairings & Floor",
          text:
            "Leads the room and the pairings with a restrained read on the table: kombucha, kefir, infusions, natural wine, and dry cider.",
        },
      ],
    },
    house: {
      eyebrow: "House direction",
      title: "The character of the place lives in the right details.",
      text:
        "The room should feel lived-in but controlled: dark wood, matte copper, linen, smoked glass, and ceramics in cream, ash, and charcoal.",
      principles: [
        {
          title: "Craft, visible but calm",
          text:
            "The pasta should feel close to the table without turning into theatre.",
        },
        {
          title: "Baltic materiality",
          text:
            "Depth comes from mushrooms, dill, fermented cabbage, charred onion, and reduced broths.",
        },
        {
          title: "Short menu, clear rhythm",
          text:
            "A tight sequence of plates, strong seasonality, and a room that knows when to pause.",
        },
      ],
    },
    rituals: {
      eyebrow: "House rituals",
      title: "Small gestures that make the house recognizable",
      text:
        "Hospitality should be precise and warm rather than loud. It needs to carry memory through material, pace, and touch.",
      items: [
        {
          title: "Warm bread and smoked butter",
          text:
            "A first gesture that immediately sets the language of the house.",
        },
        {
          title: "Visible pasta craft",
          text:
            "Handmade work remains present, always in service of the plate and the room.",
        },
        {
          title: "Pairings beyond wine",
          text:
            "Kombucha, kefir, infusions, and dry cider widen the dinner without turning it into a gimmick.",
        },
        {
          title: "Amber light and slow time",
          text:
            "The room should invite guests to stay, not move on quickly.",
        },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "If the house feels right, the table is the next move.",
      text:
        "The menu explains the kitchen. The booking flow opens the room.",
      primaryCta: "Explore the menu",
      secondaryCta: "Book a table",
    },
  },
  et: {
    pageTitle: "Maja | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Tutvu Pasta Lab & Smoked Flavors majaga: Matteo Valli, Liis Saar ja Aleksander “Sass” Kõiv kujundavad Tallinna pasta-bistroo, kus Itaalia käsitöö kohtub Balti karakteriga.",
    },
    hero: {
      eyebrow: "Maja",
      title: "Väike maja, mis on ehitatud värske pasta ümber.",
      subtitle:
        "Pasta Lab & Smoked Flavors ühendab Matteo Valli pastakäsitöö, Liis Saare majajuhtimise ja Aleksander “Sass” Kõivu saali- ning pairing-rütmi.",
      primaryCta: "Vaata menüüd",
      secondaryCta: "Broneeri laud",
    },
    story: {
      eyebrow: "Maja lugu",
      title: "Endine tööstusruum sadama lähedal, ümber mõeldud bistroo-labaks.",
      text:
        "Ruum on kujutatud sadamaäärse kestana, mis on muudetud soojaks ja täpseks: värske pasta, Balti koostisosad, kerge suits, fermentatsioon ja aeglased tehnikad püsivad tasakaalus.",
      pullQuoteLabel: "Tuumtsitaat",
      pullQuote:
        "Mitte trattoria, mitte fine dining: intiimne ruum, kus Põhjala karakter ja Itaalia käsitöö kohtuvad ilma kumbagi lahjendamata.",
    },
    founders: {
      eyebrow: "Asutajad",
      title: "Kolm rolli, üks hääl",
      text:
        "Köök, saal ja majajuhtimine jäävad eraldi, kuid liiguvad koos. Igal rollil on oma vastutus ning koos määravad nad koha rütmi.",
      members: [
        {
          name: "Matteo Valli",
          role: "Chef & Co-Founder",
          text:
            "Hoidab fookuses pasta: tainas, lõiked, täidised ja puhas küpsetus. Tema töö annab struktuuri ilma raskuseta.",
        },
        {
          name: "Liis Saar",
          role: "Co-Founder & House Direction",
          text:
            "Kujundab maja Balti poole: materjalid, tempo, tervitus ja tunne, et ruum on soe, kuid kontrollitud.",
        },
        {
          name: 'Aleksander “Sass” Kõiv',
          role: "Pairings & Floor",
          text:
            "Juhib saali ja pairingeid vaoshoitud käega: kombucha, kefir, infusioonid, naturaalvein ja kuiv siider.",
        },
      ],
    },
    house: {
      eyebrow: "Maja suund",
      title: "Koha iseloom sünnib õigetest detailidest.",
      text:
        "Ruum peab tunduma elatud, kuid kontrollitud: tume puit, matt vask, lina, suitsuklaas ning kreemi, tuha ja söe toonides keraamika.",
      principles: [
        {
          title: "Käsitöö, nähtav kuid vaikne",
          text:
            "Pasta peab olema laua lähedal, kuid ilma liigse teatrilisuseta.",
        },
        {
          title: "Balti materjalilisus",
          text:
            "Sügavus tuleb seentest, tillist, fermenteeritud kapsast, kõrvetatud sibulast ja vähendatud puljongitest.",
        },
        {
          title: "Lühike menüü, selge rütm",
          text:
            "Tihe roogade jada, tugev hooajalisus ja saal, mis oskab pausi hoida.",
        },
      ],
    },
    rituals: {
      eyebrow: "Maja rituaalid",
      title: "Väikesed žestid, mis teevad maja äratuntavaks",
      text:
        "Külalislahkus peab olema täpne ja soe, mitte vali. See vajab materjali, rütmi ja puudutuse kaudu jäävat mälu.",
      items: [
        {
          title: "Soe leib ja suitsuvõi",
          text:
            "Esimene žest, mis annab maja keele kohe kätte.",
        },
        {
          title: "Näha olev pastatöö",
          text:
            "Käsitöö jääb tajutavaks, alati roa ja saali teenistuses.",
        },
        {
          title: "Pairing rohkem kui vein",
          text:
            "Kombucha, kefir, infusioonid ja kuiv siider avavad õhtusööki ilma trikitamiseta.",
        },
        {
          title: "Soe valgus ja aeglane aeg",
          text:
            "Ruum peab kutsuma jääma, mitte kiiresti edasi liikuma.",
        },
      ],
    },
    cta: {
      eyebrow: "Järgmine samm",
      title: "Kui maja tundub õige, on laud järgmine samm.",
      text:
        "Menüü selgitab kööki. Broneerimine avab ruumi.",
      primaryCta: "Vaata menüüd",
      secondaryCta: "Broneeri laud",
    },
  },
  ru: {
    pageTitle: "Дом | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Познакомьтесь с домом Pasta Lab & Smoked Flavors: Matteo Valli, Liis Saar и Aleksander “Sass” Kõiv формируют таллиннское паста-бистро, где итальянское ремесло встречается с балтийским характером.",
    },
    hero: {
      eyebrow: "Дом",
      title: "Небольшой дом, построенный вокруг свежей пасты.",
      subtitle:
        "Pasta Lab & Smoked Flavors соединяет паста-дисциплину Matteo Valli, управление домом Liis Saar и ритм зала и pairing-ов Aleksander “Sass” Kõiv.",
      primaryCta: "Посмотреть меню",
      secondaryCta: "Забронировать стол",
    },
    story: {
      eyebrow: "История дома",
      title: "Бывшее индустриальное пространство у порта, переосмысленное как бистро-лаборатория.",
      text:
        "Пространство задумывалось как портовый каркас, превращённый в тёплый и точный зал: свежая паста, балтийские ингредиенты, мягкий дым, ферментация и медленные техники удерживают всё в равновесии.",
      pullQuoteLabel: "Ключевая цитата",
      pullQuote:
        "Не траттория и не fine dining: камерное пространство, где северный характер и итальянское ремесло встречаются без смягчения сути.",
    },
    founders: {
      eyebrow: "Основатели",
      title: "Три роли, один голос",
      text:
        "Кухня, зал и направление дома остаются разными, но движутся в одном ритме. У каждой роли своя задача, и вместе они формируют характер места.",
      members: [
        {
          name: "Matteo Valli",
          role: "Chef & Co-Founder",
          text:
            "Держит фокус на пасте: тесто, нарезка, начинки и чистая термика. Его работа даёт структуру без тяжести.",
        },
        {
          name: "Liis Saar",
          role: "Co-Founder & House Direction",
          text:
            "Формирует балтийскую сторону дома: материалы, темп, приём гостей и ощущение тёплого, но собранного пространства.",
        },
        {
          name: 'Aleksander “Sass” Kõiv',
          role: "Pairings & Floor",
          text:
            "Ведёт зал и pairing-ы сдержанно и точно: kombucha, kefir, настои, натуральное вино и сухой сидр.",
        },
      ],
    },
    house: {
      eyebrow: "Направление дома",
      title: "Характер места рождается в точных деталях.",
      text:
        "Зал должен ощущаться обжитым, но контролируемым: тёмное дерево, матовая медь, лён, копчёное стекло и керамика в тонах крема, пепла и угля.",
      principles: [
        {
          title: "Ремесло, заметное, но спокойное",
          text:
            "Паста должна быть близко к гостю, но без лишней театральности.",
        },
        {
          title: "Балтийская материальность",
          text:
            "Глубину дают грибы, укроп, ферментированная капуста, обожжённый лук и редуцированные бульоны.",
        },
        {
          title: "Короткое меню, чёткий ритм",
          text:
            "Короткий набор блюд, сильная сезонность и зал, который умеет держать паузу.",
        },
      ],
    },
    rituals: {
      eyebrow: "Ритуалы дома",
      title: "Маленькие жесты, по которым узнаётся дом",
      text:
        "Гостеприимство должно быть точным и тёплым, а не громким. Его задача — оставлять память через материал, ритм и прикосновение.",
      items: [
        {
          title: "Тёплый хлеб и копчёное масло",
          text:
            "Первый жест, который сразу задаёт язык дома.",
        },
        {
          title: "Видимая работа с пастой",
          text:
            "Ремесло остаётся заметным, но всегда служит блюду и залу.",
        },
        {
          title: "Пейринги не только вино",
          text:
            "Kombucha, kefir, настои и сухой сидр расширяют ужин без лишнего эффекта.",
        },
        {
          title: "Тёплый свет и медленное время",
          text:
            "Пространство должно приглашать задержаться, а не уйти сразу.",
        },
      ],
    },
    cta: {
      eyebrow: "Следующий шаг",
      title: "Если дом кажется правильным, следующий шаг — стол.",
      text:
        "Меню объясняет кухню. Бронирование открывает зал.",
      primaryCta: "Посмотреть меню",
      secondaryCta: "Забронировать стол",
    },
  },
} as const satisfies Record<Locale, HouseContentData>;

export type HouseContent = (typeof houseContent)[Locale];
