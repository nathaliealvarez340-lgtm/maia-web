import "server-only";
import { defaultLocale, type Locale } from "@/i18n/config";

const dictionaries = {
  es: () => import("./locales/es.json").then((module) => module.default),
  en: () => import("./locales/en.json").then((module) => module.default),
  pt: () => import("./locales/pt.json").then((module) => module.default),
  it: () => import("./locales/it.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["es"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]?.() ?? dictionaries[defaultLocale]();
}
