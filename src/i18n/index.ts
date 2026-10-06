import { es } from "./es";
import { en } from "./en";

export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

const dictionaries = { es, en };

export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === "/en" || url.pathname.startsWith("/en/") ? "en" : "es";
}

/** Ruta sin el prefijo de idioma: /en/project/x/ → /project/x/ */
export function stripLang(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, "") || "/";
}

/** Añade el prefijo del idioma a una ruta: ("/project/x/", "en") → /en/project/x/ */
export function localizePath(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}
