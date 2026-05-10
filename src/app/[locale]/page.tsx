import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { IntelligenceWeekly } from "@/components/sections/IntelligenceWeekly";
import { Method } from "@/components/sections/Method";
import { OffSociety } from "@/components/sections/OffSociety";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { WhyMaia } from "@/components/sections/WhyMaia";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <main>
      <Hero dictionary={dictionary.hero} />
      <Services dictionary={dictionary.services} />
      <Method dictionary={dictionary.method} />
      <Portfolio locale={locale} dictionary={dictionary.portfolio} />
      <OffSociety dictionary={dictionary.offSociety} />
      <IntelligenceWeekly locale={locale} dictionary={dictionary.newsletter} />
      <WhyMaia dictionary={dictionary.whyMaia} />
      <Contact dictionary={dictionary.contact} />
    </main>
  );
}
