export const locales = ["es", "en", "pt", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
  it: "IT",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
