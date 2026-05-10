import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maia.studio";
  const url = new URL(`/${locale}`, baseUrl);

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    keywords: dictionary.seo.keywords,
    alternates: {
      canonical: url,
      languages: {
        es: new URL("/es", baseUrl).toString(),
        en: new URL("/en", baseUrl).toString(),
        pt: new URL("/pt", baseUrl).toString(),
        it: new URL("/it", baseUrl).toString(),
        "x-default": new URL(`/${defaultLocale}`, baseUrl).toString(),
      },
    },
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url,
      siteName: "MAIA",
      locale: dictionary.seo.openGraphLocale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dictionary={dictionary.nav} />
      {children}
      <Footer dictionary={dictionary.footer} />
    </>
  );
}
