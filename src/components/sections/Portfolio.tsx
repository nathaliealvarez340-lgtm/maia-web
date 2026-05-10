"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getWorkHref } from "@/data/portfolio";
import { type Locale } from "@/i18n/config";
import { type Dictionary } from "@/i18n/dictionary";

type PortfolioProps = {
  locale: Locale;
  dictionary: Dictionary["portfolio"];
};

export function Portfolio({ locale, dictionary }: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-maia-black py-24 sm:py-32">
      <div className="maia-container">
        <SectionHeader
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />

        <div className="mt-14 grid gap-5">
          {dictionary.cases.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-8 rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-maia-violet/45 hover:bg-white/[0.055] hover:shadow-[0_0_70px_rgba(91,33,182,0.16)] lg:grid-cols-[0.45fr_0.55fr] lg:p-8"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-maia-violet">
                  {item.category}
                </p>
                <h3 className="mt-6 text-4xl font-semibold text-maia-white sm:text-5xl">
                  {item.name}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-8 text-maia-muted">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-8">
                <div className="flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-maia-muted"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-maia-muted">
                    {dictionary.resultLabel}
                  </p>
                  <p className="mt-3 text-xl leading-8 text-maia-white">
                    {item.result}
                  </p>
                  <a
                    href={getWorkHref(locale, item.slug)}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-maia-white transition hover:text-maia-violet"
                  >
                    {dictionary.cta}
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
