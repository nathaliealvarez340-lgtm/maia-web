import { type Locale } from "@/i18n/config";

export const portfolioSlugs = ["bet", "orbit-nexus", "suut"] as const;

export type PortfolioSlug = (typeof portfolioSlugs)[number];

export function getWorkHref(locale: Locale, slug: string) {
  return `/${locale}/work/${slug}`;
}
