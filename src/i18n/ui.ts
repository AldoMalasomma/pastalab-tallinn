export const languages = {
  it: "IT",
  en: "EN",
  et: "ET",
  ru: "RU",
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = "it";

export const ui = {
  it: {
    nav: {
      home: "Home",
      house: "Storia",
      menu: "Menu",
      booking: "Prenota",
    },
    header: {
      navigation: "Navigazione",
      language: "Lingua",
      openMenu: "Menu",
      closeMenu: "Chiudi",
    },
  },
  en: {
    nav: {
      home: "Home",
      house: "Story",
      menu: "Menu",
      booking: "Book",
    },
    header: {
      navigation: "Navigation",
      language: "Language",
      openMenu: "Menu",
      closeMenu: "Close",
    },
  },
  et: {
    nav: {
      home: "Avaleht",
      house: "Lugu",
      menu: "Menüü",
      booking: "Broneeri",
    },
    header: {
      navigation: "Navigeerimine",
      language: "Keel",
      openMenu: "Menüü",
      closeMenu: "Sulge",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      house: "История",
      menu: "Меню",
      booking: "Бронь",
    },
    header: {
      navigation: "Навигация",
      language: "Язык",
      openMenu: "Меню",
      closeMenu: "Закрыть",
    },
  },
} as const;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function getCurrentSlugFromUrl(url: URL) {
  const segments = url.pathname.split("/").filter(Boolean);
  return segments.slice(1).join("/");
}

export function getLocalizedPath(lang: Locale, slug = "") {
  return slug ? `/${lang}/${slug}` : `/${lang}/`;
}

export function useTranslations(lang: Locale) {
  return function t(section: keyof (typeof ui)[typeof defaultLang], key: string) {
    return (ui[lang][section] as Record<string, string>)[key];
  };
}
