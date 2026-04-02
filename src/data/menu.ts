import type { Locale } from "../i18n/ui";

type SectionCard = {
  title: string;
  text: string;
};

type AnchorDish = {
  name: string;
  text: string;
};

export type MenuContent = {
  pageTitle: string;
  seo: {
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  structure: {
    eyebrow: string;
    title: string;
    text: string;
    cards: SectionCard[];
  };
  anchors: {
    eyebrow: string;
    title: string;
    text: string;
    items: AnchorDish[];
  };
  pairings: {
    eyebrow: string;
    title: string;
    text: string;
    options: string[];
    note: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    button: string;
  };
};

export const menuContent = {
  it: {
    pageTitle: "Menu | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Scopri un menu breve e stagionale a Tallinn: piccole portate, pasta fresca, dessert e pairing pensati per un bistrò di carattere.",
    },
    hero: {
      eyebrow: "Menu",
      title: "Corto, stagionale, essenziale.",
      subtitle:
        "Il menu mette al centro la pasta fresca e lascia che ingredienti baltici, affumicature e fermentazioni diano profondità e carattere.",
    },
    structure: {
      eyebrow: "Struttura del menu",
      title: "Una carta breve che segue il ritmo della cucina",
      text:
        "La struttura resta compatta e leggibile, con pochi passaggi ben definiti. Ogni sezione deve sentirsi curata, non piena.",
      cards: [
        {
          title: "Piccoli piatti",
          text: "Pane, burro affumicato, verdure, snack e aperture leggere.",
        },
        {
          title: "Pasta fresca",
          text: "Il centro del menu: tagli, ripieni e salse costruiti con precisione.",
        },
        {
          title: "Dessert",
          text: "Pochi dolci, stagionali, puliti e non caricati.",
        },
        {
          title: "Pairings",
          text: "Vino e alternative leggere pensate con la stessa cura del cibo.",
        },
      ],
    },
    anchors: {
      eyebrow: "Concept anchors",
      title: "Piatti che mantengono il concept leggibile",
      text:
        "Questi riferimenti devono restare riconoscibili anche mentre la carta cambia con la stagione.",
      items: [
        {
          name: "Tagliolini al burro affumicato",
          text: "Tagliolini freschi, burro affumicato al legno di melo e segale tostato.",
        },
        {
          name: "Ravioli di patata fermentata",
          text: "Ripieno cremoso, acidità morbida, cipolla bruciata e olio alle erbe.",
        },
        {
          name: "Pappardelle ai funghi baltici",
          text: "Pasta all'uovo, funghi locali, crema leggera affumicata e aneto.",
        },
        {
          name: "Tortelloni al quark e aneto",
          text: "Un ripieno lattico e fresco che richiama la dispensa nordica.",
        },
        {
          name: "Gnocchi tostati con cavolo fermentato",
          text: "Morbidezza, tostatura e una nota viva di fermentazione.",
        },
      ],
    },
    pairings: {
      eyebrow: "Pairings",
      title: "Le bevande devono allargare il piatto, non coprirlo",
      text:
        "Le alternative al vino possono essere parte reale dell’esperienza, non un ripiego.",
      options: [
        "Kombucha",
        "Kefir",
        "Infusi",
        "Natural wine",
        "Dry cider",
      ],
      note: "La lista dei pairing deve sentirsi deliberata e stagionale, non guidata dalle mode.",
    },
    cta: {
      eyebrow: "Booking",
      title: "La sala è pensata per una cena completa",
      text:
        "Quando il menu ti convince, la prenotazione deve essere semplice e immediata.",
      button: "Prenota un tavolo",
    },
  },
  en: {
    pageTitle: "Menu | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Explore a short seasonal menu in Tallinn: small plates, fresh pasta, dessert, and pairings shaped for a bistro with a clear point of view.",
    },
    hero: {
      eyebrow: "Menu",
      title: "Short, seasonal, deliberate.",
      subtitle:
        "The menu keeps fresh pasta at the center and lets Baltic ingredients, smoke, and fermentation add depth and character.",
    },
    structure: {
      eyebrow: "Menu structure",
      title: "A compact menu shaped by the kitchen rhythm",
      text:
        "The structure should stay tight and easy to read, with only a few clearly defined parts. Every section needs to feel curated, not full.",
      cards: [
        {
          title: "Small plates",
          text: "Bread, smoked butter, vegetables, snacks, and light openings.",
        },
        {
          title: "Fresh pasta",
          text: "The center of the menu: cuts, fillings, and sauces built with precision.",
        },
        {
          title: "Dessert",
          text: "Few sweets, seasonal, clean, and not overdesigned.",
        },
        {
          title: "Pairings",
          text: "Wine and lower-alcohol options treated with the same care as the food.",
        },
      ],
    },
    anchors: {
      eyebrow: "Concept anchors",
      title: "Dishes that keep the concept readable",
      text:
        "These references should remain recognizable even as the menu shifts with the season.",
      items: [
        {
          name: "Tagliolini with smoked butter",
          text: "Fresh tagliolini, applewood-smoked butter, and toasted rye.",
        },
        {
          name: "Fermented potato ravioli",
          text: "Creamy filling, soft acidity, charred onion, and herb oil.",
        },
        {
          name: "Baltic mushroom pappardelle",
          text: "Egg pasta, local mushrooms, light smoked cream, and dill.",
        },
        {
          name: "Tortelloni with quark and dill",
          text: "A fresh, lacto-driven filling that speaks to the northern pantry.",
        },
        {
          name: "Crisped gnocchi with fermented cabbage",
          text: "Softness, toasting, and a bright fermented edge.",
        },
      ],
    },
    pairings: {
      eyebrow: "Pairings",
      title: "Drinks should extend the plate, not overpower it",
      text:
        "Non-wine options can be part of the experience, not an afterthought.",
      options: ["Kombucha", "Kefir", "Infusions", "Natural wine", "Dry cider"],
      note: "The pairing list should feel deliberate and seasonal, not trend-led.",
    },
    cta: {
      eyebrow: "Booking",
      title: "The room is built for a full dinner",
      text:
        "Once the menu lands, the reservation step should feel immediate and simple.",
      button: "Book a table",
    },
  },
  et: {
    pageTitle: "Menüü | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Tutvu lühikese hooajalise menüüga Tallinnas: väikesed road, värske pasta, dessert ja läbimõeldud joogipaarid.",
    },
    hero: {
      eyebrow: "Menüü",
      title: "Lühike, hooajaline, läbimõeldud.",
      subtitle:
        "Menüü hoiab fookuse värskel pastal ja laseb Balti koostisosadel, suitsul ja fermentatsioonil anda sügavust ning iseloomu.",
    },
    structure: {
      eyebrow: "Menüü struktuur",
      title: "Lühike kaart, mille määrab köögi rütm",
      text:
        "Struktuur jääb kompaktseks ja selgelt loetavaks, vaid mõne hoolikalt defineeritud osaga. Iga osa peab tunduma kureeritud, mitte täis.",
      cards: [
        {
          title: "Väikesed road",
          text: "Leib, suitsuvõi, köögiviljad, snäkid ja kerged avajad.",
        },
        {
          title: "Värske pasta",
          text: "Menüü keskpunkt: lõiked, täidised ja kastmed täpse käekirjaga.",
        },
        {
          title: "Dessert",
          text: "Vähesed magusad, hooajalised ja selged.",
        },
        {
          title: "Pairings",
          text: "Vein ja madalama alkoholiga valikud sama hoolikalt kui toit.",
        },
      ],
    },
    anchors: {
      eyebrow: "Concept anchors",
      title: "Road, mis hoiavad kontseptsiooni loetavana",
      text:
        "Need viited peaksid olema äratuntavad ka siis, kui menüü hooajaga muutub.",
      items: [
        {
          name: "Tagliolini suitsuvõiga",
          text: "Värske tagliolini, õunapuusuitsuga või ja röstitud rukis.",
        },
        {
          name: "Fermenteeritud kartuli ravioolid",
          text: "Kreemine täidis, õrn happesus, kõrvetatud sibul ja ürdiõli.",
        },
        {
          name: "Pappardelle Balti seentega",
          text: "Munapasta, kohalikud seened, kerge suitsukoor ja till.",
        },
        {
          name: "Tortelloni kohupiima ja tilliga",
          text: "Värske, põhjamaiselt laktiline täidis.",
        },
        {
          name: "Krõbe gnocchi fermenteeritud kapsaga",
          text: "Pehmus, röst ja elav fermentatsioon.",
        },
      ],
    },
    pairings: {
      eyebrow: "Joogipaarid",
      title: "Jook peab taldrikut avama, mitte varjutama",
      text:
        "Ka madalama alkoholiga või alkoholivabad valikud võivad olla kogemuse osa.",
      options: ["Kombucha", "Keefir", "Tõmmised", "Naturaalvein", "Kuiv siider"],
      note: "Joogivalik peab tunduma läbimõeldud ja hooajaline, mitte trendijärgne.",
    },
    cta: {
      eyebrow: "Booking",
      title: "Ruum on mõeldud täielikuks õhtusöögiks",
      text:
        "Kui menüü kõnetab, peab broneerimine olema lihtne ja kohene.",
      button: "Broneeri laud",
    },
  },
  ru: {
    pageTitle: "Меню | Pasta Lab & Smoked Flavors",
    seo: {
      description:
        "Изучите короткое сезонное меню в Таллине: небольшие блюда, свежая паста, десерт и продуманные пары напитков.",
    },
    hero: {
      eyebrow: "Меню",
      title: "Короткое, сезонное, собранное.",
      subtitle:
        "Меню держит фокус на свежей пасте и позволяет балтийским продуктам, копчению и ферментации добавить глубину и характер.",
    },
    structure: {
      eyebrow: "Структура меню",
      title: "Компактное меню, которое задаёт ритм кухни",
      text:
        "Структура должна оставаться лаконичной и легко читаемой, с несколькими чётко определёнными частями. Каждая часть должна ощущаться кураторской, а не перегруженной.",
      cards: [
        {
          title: "Небольшие блюда",
          text: "Хлеб, копчёное масло, овощи, закуски и лёгкое начало.",
        },
        {
          title: "Свежая паста",
          text: "Центр меню: форма, начинка и соус, собранные точно.",
        },
        {
          title: "Десерт",
          text: "Немного сладкого, сезонно, чисто и без перегруза.",
        },
        {
          title: "Pairings",
          text: "Вино и варианты с меньшим градусом должны быть равноправной частью.",
        },
      ],
    },
    anchors: {
      eyebrow: "Concept anchors",
      title: "Блюда, которые удерживают концепцию читаемой",
      text:
        "Эти ориентиры должны оставаться узнаваемыми даже при сезонном изменении меню.",
      items: [
        {
          name: "Тальолини с копчёным маслом",
          text: "Свежие тальолини, масло холодного копчения и поджаренная рожь.",
        },
        {
          name: "Равиоли с ферментированным картофелем",
          text: "Кремовая начинка, мягкая кислотность, жжёный лук и травяное масло.",
        },
        {
          name: "Паппарделле с балтийскими грибами",
          text: "Яичная паста, местные грибы, лёгкий копчёный крем и укроп.",
        },
        {
          name: "Тортеллони с кварком и укропом",
          text: "Свежая, северная по характеру начинка.",
        },
        {
          name: "Хрустящие ньокки с ферментированной капустой",
          text: "Мягкость, обжарка и живая ферментация.",
        },
      ],
    },
    pairings: {
      eyebrow: "Пары напитков",
      title: "Напитки должны раскрывать блюдо, а не перекрывать его",
      text:
        "Варианты с меньшим градусом или без алкоголя тоже должны быть частью опыта.",
      options: ["Камбуча", "Кефир", "Настои", "Натуральное вино", "Сухой сидр"],
      note: "Список напитков должен ощущаться продуманным и сезонным, а не следовать трендам.",
    },
    cta: {
      eyebrow: "Booking",
      title: "Зал рассчитан на полноценный ужин",
      text:
        "Если меню откликается, следующий шаг должен быть простым и мгновенным.",
      button: "Забронировать стол",
    },
  },
} as const satisfies Record<Locale, MenuContent>;
