import type { Locale } from "../i18n/ui";

type Detail = {
  label: string;
  value: string;
};

type Highlight = {
  title: string;
  text: string;
};

type Dish = {
  name: string;
  description: string;
  note: string;
};

type Point = {
  title: string;
  text: string;
};

export type HomeContent = {
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
    meta: Detail[];
    panel: {
      eyebrow: string;
      title: string;
      text: string;
      points: string[];
    };
  };
  story: {
    eyebrow: string;
    title: string;
    text: string;
    highlights: Highlight[];
  };
  house: {
    eyebrow: string;
    title: string;
    text: string;
    button: string;
    note: string;
  };
  dishes: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Dish[];
  };
  atmosphere: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    features: Highlight[];
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    button: string;
    note: string;
    points: Point[];
  };
};

export const homeContent = {
  it: {
    pageTitle: "Pasta Lab & Smoked Flavors | Bistro di pasta a Tallinn",
    seo: {
      description:
        "Pasta Lab & Smoked Flavors è un bistrò di pasta a Tallinn dove pasta fresca fatta a mano incontra ingredienti baltici affumicati e fermentati in una sala calda ed editoriale.",
    },
    hero: {
      eyebrow: "Tallinn · Contemporary Pasta Bistro",
      title: "Pasta fresca, profondità affumicata, anima baltica.",
      subtitle:
        "Un bistrò caldo a Tallinn dove la pasta fresca incontra burro affumicato e ingredienti baltici.",
      primaryCta: "Prenota un tavolo",
      secondaryCta: "Vedi il menu",
      meta: [
        { label: "Fatto in casa", value: "Pasta fresca ogni giorno" },
        { label: "Profilo", value: "Affumicature leggere, fermentazioni" },
      ],
      panel: {
        eyebrow: "Kitchen note",
        title: "Ingredienti baltici, tecnica italiana, mano ferma.",
        text:
          "La cucina costruisce piatti essenziali ma stratificati: burro affumicato, funghi, erbe e verdure conservate.",
        points: [
          "Servizio serale e raccolto",
          "Menu breve, di stagione",
        ],
      },
    },
    story: {
      eyebrow: "Concept & story",
      title: "Tecnica italiana, ingredienti baltici, ritmo chiaro.",
      text:
        "La carta resta corta e leggibile, così il piatto, la sala e il percorso verso la prenotazione si capiscono subito.",
      highlights: [
        {
          title: "Handmade",
          text: "La pasta viene tirata e rifinita in casa, ogni giorno.",
        },
        {
          title: "Local sourcing",
          text: "Ingredienti baltici e lavorazioni sobrie, con rispetto della stagione.",
        },
        {
          title: "Warm service",
          text: "Servizio presente, gentile e senza rigidità.",
        },
      ],
    },
    house: {
      eyebrow: "The House",
      title: "Tre persone, una sala, un solo ritmo.",
      text:
        "Matteo Valli guida la pasta, Liis Saar disegna il lato baltico della casa e Aleksander “Sass” Kõiv tiene il ritmo della sala.",
      button: "Scopri la casa",
      note: "Una lettura breve del team che tiene insieme il luogo.",
    },
    dishes: {
      eyebrow: "Signature dishes",
      title: "Piatti che definiscono il carattere della casa",
      intro:
        "La carta resta essenziale: pochi piatti, molto controllo, una forte identità.",
      items: [
        {
          name: "Tagliolini al burro affumicato",
          description:
            "Tagliolini freschi, burro affumicato al legno di melo, pepe nero e pangrattato di segale tostato.",
          note: "Finale sapido e texture pulita.",
        },
        {
          name: "Ravioli di patata fermentata",
          description:
            "Ravioli ripieni di patata e crema acida, serviti con cipolla bruciata e olio alle erbe.",
          note: "Acidità morbida e un centro molto cremoso.",
        },
        {
          name: "Pappardelle ai funghi del Baltico",
          description:
            "Pasta all'uovo tirata a mano con funghi locali, crema leggera affumicata e aneto fresco.",
          note: "Profondità terrosa, chiusura fresca.",
        },
      ],
    },
    atmosphere: {
      eyebrow: "Atmosphere",
      title: "Pensata per cene lente.",
      text:
        "Luce morbida, materiali naturali e un ritmo di tavola tranquillo tengono il focus sul piatto.",
      note: "Note della sala",
      features: [
        {
          title: "Luce calda",
          text: "Toni serali e riflessi discreti.",
        },
        {
          title: "Piatti puliti",
          text: "Presentazione essenziale, senza rumore.",
        },
        {
          title: "Ritmo rilassato",
          text: "Una cena che invita a fermarsi.",
        },
        {
          title: "Tallinn urbana",
          text: "Contemporanea, ma quieta.",
        },
      ],
    },
    cta: {
      eyebrow: "Booking",
      title: "Prenota la cena.",
      text:
        "Per una serata intima, una cena tra amici o una piccola ricorrenza, prenota in anticipo.",
      button: "Prenota un tavolo",
      note: "Le prenotazioni sono consigliate nelle serate più piene.",
      points: [
        {
          title: "Servizio serale",
          text: "Pensato per l'ora di cena.",
        },
        {
          title: "Carta di stagione",
          text: "La carta cambia con naturalezza.",
        },
        {
          title: "Sala intima",
          text: "Adatta a cene e piccole occasioni.",
        },
      ],
    },
  },

  en: {
    pageTitle: "Pasta Lab & Smoked Flavors | Tallinn pasta bistro",
    seo: {
      description:
        "Pasta Lab & Smoked Flavors is a Tallinn pasta bistro where handmade fresh pasta meets smoked, fermented Baltic ingredients in a warm editorial room.",
    },
    hero: {
      eyebrow: "Tallinn · Contemporary Pasta Bistro",
      title: "Fresh pasta, smoked depth, Baltic soul.",
      subtitle:
        "A warm Tallinn bistro where fresh pasta meets smoked butter and Baltic ingredients.",
      primaryCta: "Book a table",
      secondaryCta: "View the menu",
      meta: [
        { label: "Made in house", value: "Fresh pasta daily" },
        { label: "Flavor profile", value: "Smoke, fermentation, Baltic herbs" },
      ],
      panel: {
        eyebrow: "House note",
        title: "Italian technique, Baltic ingredients, one clear rhythm.",
        text:
          "The kitchen keeps the plate count low so the menu, room, and booking path read cleanly.",
        points: [
          "Dinner-led service",
          "Seasonal menu, kept short",
        ],
      },
    },
    story: {
      eyebrow: "Concept & story",
      title: "A focused concept for slow dinners.",
      text:
        "Fresh pasta, smoked depth, and Baltic ingredients keep the experience direct from first glance to booking.",
      highlights: [
        {
          title: "Handmade",
          text: "Pasta is rolled, cut, and finished in house every day.",
        },
        {
          title: "Local sourcing",
          text: "Ingredient choices stay close to the season and the region.",
        },
        {
          title: "Warm service",
          text: "Attentive hospitality without stiffness or noise.",
        },
      ],
    },
    house: {
      eyebrow: "The House",
      title: "Three people, one room, one rhythm.",
      text:
        "Matteo leads the pasta, Liis shapes the Baltic side of the house, and Aleksander keeps the floor in step.",
      button: "Meet the house",
      note: "A brief read on the team behind the room.",
    },
    dishes: {
      eyebrow: "Signature dishes",
      title: "Plates that define the house character",
      intro:
        "The menu stays compact by design: fewer plates, more control, a clearer identity.",
      items: [
        {
          name: "Tagliolini with smoked butter",
          description:
            "Fresh tagliolini, applewood-smoked butter, black pepper, and toasted rye breadcrumbs.",
          note: "Clean texture and a savory finish.",
        },
        {
          name: "Fermented potato ravioli",
          description:
            "Ravioli filled with potato and sour cream, served with charred onion and herb oil.",
          note: "Soft acidity and a very creamy center.",
        },
        {
          name: "Baltic mushroom pappardelle",
          description:
            "Handmade egg pasta with local mushrooms, light smoked cream, and fresh dill.",
          note: "Earthy depth with a bright, fresh finish.",
        },
      ],
    },
    atmosphere: {
      eyebrow: "Atmosphere",
      title: "Made for slower dinners.",
      text:
        "Warm light, natural materials, and an easy table pace keep the food in focus.",
      note: "Room notes",
      features: [
        {
          title: "Warm light",
          text: "Evening tones and soft reflections.",
        },
        {
          title: "Editorial plating",
          text: "Clean presentation, no clutter.",
        },
        {
          title: "Relaxed pace",
          text: "A dinner that invites a second glass.",
        },
        {
          title: "Urban calm",
          text: "Contemporary Tallinn energy, quietly delivered.",
        },
      ],
    },
    cta: {
      eyebrow: "Booking",
      title: "Reserve the evening table.",
      text:
        "For dinners, celebrations, and small groups, book ahead so we can hold the room properly.",
      button: "Reserve a table",
      note: "Reservations are recommended for busier evenings.",
      points: [
        {
          title: "Dinner focus",
          text: "Built around evening service.",
        },
        {
          title: "Seasonal menu",
          text: "The menu moves with the season.",
        },
        {
          title: "Intimate room",
          text: "Best suited to dinners and small groups.",
        },
      ],
    },
  },

  et: {
    pageTitle: "Pasta Lab & Smoked Flavors | Tallinna pasta-bistroo",
    seo: {
      description:
        "Pasta Lab & Smoked Flavors on Tallinna pasta-bistroo, kus käsitsi tehtud värske pasta kohtub suitsutatud ja fermenteeritud kohalike koostisosadega.",
    },
    hero: {
      eyebrow: "Tallinn · Contemporary Pasta Bistro",
      title: "Värske pasta, suitsune sügavus, Balti hing.",
      subtitle:
        "Soe Tallinna bistroo, kus värske pasta kohtub suitsuvõi ja Balti koostisosadega.",
      primaryCta: "Broneeri laud",
      secondaryCta: "Vaata menüüd",
      meta: [
        { label: "Valmistatud kohapeal", value: "Värske pasta iga päev" },
        { label: "Maitseprofiil", value: "Suits, fermentatsioon, Balti ürdid" },
      ],
      panel: {
        eyebrow: "Maja märkus",
        title: "Itaalia tehnika, kohalikud koostisosad, selge rütm.",
        text:
          "Köök hoiab taldrikute arvu väikesena, et menüü, ruum ja broneerimine oleksid kohe loetavad.",
        points: [
          "Õhtusöögile keskendunud teenindus",
          "Hooajaline menüü, hoitud lühike",
        ],
      },
    },
    story: {
      eyebrow: "Concept & story",
      title: "Selge rütmiga pasta kontseptsioon.",
      text:
        "Värske pasta, suitsune sügavus ja Balti koostisosad hoiavad kogemuse otse ja lihtsalt loetavana.",
      highlights: [
        {
          title: "Käsitöö",
          text: "Pasta rullitakse, lõigatakse ja viimistletakse kohapeal.",
        },
        {
          title: "Kohalik",
          text: "Koostisosad jäävad hooaja ja piirkonna lähedale.",
        },
        {
          title: "Soe teenindus",
          text: "Tähelepanelik, aga mitte jäik külalislahkus.",
        },
      ],
    },
    house: {
      eyebrow: "Maja",
      title: "Kolm inimest, üks ruum, üks rütm.",
      text:
        "Matteo juhib pastat, Liis kujundab maja Balti poole ja Aleksander hoiab saali rütmi.",
      button: "Tutvu majaga",
      note: "Lühike lugemine inimestest, kes ruumi koos hoiavad.",
    },
    dishes: {
      eyebrow: "Signature dishes",
      title: "Road, mis annavad majale iseloomu",
      intro:
        "Menüü on teadlikult lühike: vähem taldrikuid, rohkem kontrolli, selgem identiteet.",
      items: [
        {
          name: "Tagliolini suitsuvõiga",
          description:
            "Värske tagliolini, õunapuusuitsuga või, must pipar ja röstitud rukkipuru.",
          note: "Puhas tekstuur ja soolane lõpp.",
        },
        {
          name: "Fermenteeritud kartuli ravioolid",
          description:
            "Kartuli ja hapukoore täidisega ravioolid, kõrvetatud sibula ja ürdiõliga.",
          note: "Õrn happesus ja väga kreemine süda.",
        },
        {
          name: "Pappardelle Balti seentega",
          description:
            "Käsitsi valmistatud munapasta kohalike seente, kerge suitsukoore ja värske tilliga.",
          note: "Sügav metsane maitse, värske lõpp.",
        },
      ],
    },
    atmosphere: {
      eyebrow: "Atmosphere",
      title: "Mõeldud aeglasematele õhtusöökidele.",
      text:
        "Pehme valgus, looduslikud materjalid ja rahulik lauatempo hoiavad fookuse toidul.",
      note: "Ruumi märksõnad",
      features: [
        {
          title: "Soe valgus",
          text: "Õhtused toonid ja pehmed peegeldused.",
        },
        {
          title: "Puhtad taldrikud",
          text: "Editorialne esitlus ilma mürata.",
        },
        {
          title: "Rahulik tempo",
          text: "Õhtusöök, mis kutsub aega võtma.",
        },
        {
          title: "Tallinna rahu",
          text: "Kaasaegne linnatunnetus, aga vaikselt.",
        },
      ],
    },
    cta: {
      eyebrow: "Booking",
      title: "Broneeri õhtulaud.",
      text:
        "Õhtusöögiks, tähistamiseks või väiksema seltskonnaga broneeri ette.",
      button: "Mine broneerima",
      note: "Broneerimine on eriti soovitatav tihedamatel õhtutel.",
      points: [
        {
          title: "Õhtusöögile keskendunud",
          text: "Loodud rahulikuks õhtuseks teeninduseks.",
        },
        {
          title: "Hooajaline menüü",
          text: "Menüü liigub hooajaga kaasa.",
        },
        {
          title: "Intiimne saal",
          text: "Sobib õhtusöökideks ja väiksemaks seltskonnaks.",
        },
      ],
    },
  },

  ru: {
    pageTitle: "Pasta Lab & Smoked Flavors | паста-бистро в Таллине",
    seo: {
      description:
        "Pasta Lab & Smoked Flavors — таллиннский паста-бистро, где свежая паста ручной работы встречается с копчёными и ферментированными балтийскими ингредиентами в тёплом редакционном пространстве.",
    },
    hero: {
      eyebrow: "Tallinn · Contemporary Pasta Bistro",
      title: "Свежая паста, дымная глубина, балтийская душа.",
      subtitle:
        "Тёплое таллиннское бистро, где свежая паста встречается с копчёным маслом и балтийскими ингредиентами.",
      primaryCta: "Забронировать стол",
      secondaryCta: "Посмотреть меню",
      meta: [
        { label: "Сделано в доме", value: "Свежая паста каждый день" },
        { label: "Профиль вкуса", value: "Дым, ферментация, балтийские травы" },
      ],
      panel: {
        eyebrow: "Заметка кухни",
        title: "Итальянская техника, балтийские продукты, ясный ритм.",
        text:
          "Кухня держит меню коротким, чтобы зал, меню и путь к брони читались сразу.",
        points: [
          "Вечерний, неспешный сервис",
          "Короткое сезонное меню",
        ],
      },
    },
    story: {
      eyebrow: "Concept & story",
      title: "Сосредоточенный концепт для долгих ужинов.",
      text:
        "Свежая паста, дымная глубина и балтийские продукты держат опыт прямым от первого взгляда до брони.",
      highlights: [
        {
          title: "Ручная работа",
          text: "Паста раскатывается, режется и доводится на месте каждый день.",
        },
        {
          title: "Локальные продукты",
          text: "Выбор ингредиентов остаётся близким к сезону и региону.",
        },
        {
          title: "Тёплый сервис",
          text: "Внимательное гостеприимство без лишней формальности.",
        },
      ],
    },
    house: {
      eyebrow: "Дом",
      title: "Трое людей, один зал, один ритм.",
      text:
        "Matteo ведёт пасту, Liis формирует балтийскую сторону дома, а Aleksander держит ритм зала.",
      button: "Познакомиться с домом",
      note: "Короткое чтение о команде, которая собирает пространство.",
    },
    dishes: {
      eyebrow: "Signature dishes",
      title: "Блюда, задающие характер дома",
      intro:
        "Меню специально короткое: меньше позиций, больше контроля и более чёткая идентичность.",
      items: [
        {
          name: "Тальолини с копчёным маслом",
          description:
            "Свежие тальолини, масло холодного копчения на яблоне, чёрный перец и поджаренные ржаные крошки.",
          note: "Чистая текстура и выразительный солёный финал.",
        },
        {
          name: "Равиоли с ферментированным картофелем",
          description:
            "Равиоли с картофелем и сметаной, подаются с жжёным луком и травяным маслом.",
          note: "Мягкая кислотность и очень кремовая середина.",
        },
        {
          name: "Паппарделле с балтийскими грибами",
          description:
            "Свежая яичная паста ручной работы с местными грибами, лёгким копчёным кремом и укропом.",
          note: "Глубокий лесной вкус и свежий финал.",
        },
      ],
    },
    atmosphere: {
      eyebrow: "Atmosphere",
      title: "Создано для медленного ужина.",
      text:
        "Тёплый свет, натуральные материалы и спокойный темп стола держат фокус на еде.",
      note: "Заметки зала",
      features: [
        {
          title: "Тёплый свет",
          text: "Вечерние оттенки и мягкие отражения.",
        },
        {
          title: "Чистая подача",
          text: "Редакционный стиль без шума.",
        },
        {
          title: "Неспешный темп",
          text: "Ужин, который располагает к разговору.",
        },
        {
          title: "Спокойный Таллинн",
          text: "Современный городской характер, но тихо.",
        },
      ],
    },
    cta: {
      eyebrow: "Booking",
      title: "Забронируйте вечерний стол.",
      text:
        "Для ужина, праздника или небольшой компании лучше бронировать заранее.",
      button: "Перейти к бронированию",
      note: "Бронирование особенно рекомендуется в более загруженные вечера.",
      points: [
        {
          title: "Вечерний формат",
          text: "Сервис построен вокруг ужина.",
        },
        {
          title: "Сезонное меню",
          text: "Меню движется вместе с сезоном.",
        },
        {
          title: "Камерный зал",
          text: "Подходит для ужинов и небольших компаний.",
        },
      ],
    },
  },
} as const satisfies Record<Locale, HomeContent>;
