"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fallbackNews } from "@/data/news";
import { type Locale } from "@/i18n/config";
import { type Dictionary } from "@/i18n/dictionary";

type IntelligenceWeeklyProps = {
  locale: Locale;
  dictionary: Dictionary["newsletter"];
};

export function IntelligenceWeekly({
  locale,
  dictionary,
}: IntelligenceWeeklyProps) {
  const items = fallbackNews.slice(0, 5);

  return (
    <section
      id="intelligence"
      className="relative overflow-hidden bg-maia-carbon py-24 sm:py-32"
    >
      <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-maia-purple/15 blur-[130px]" />
      <div className="maia-container relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow={dictionary.eyebrow}
            title={dictionary.title}
            description={dictionary.description}
          />
          <p className="max-w-xl text-lg leading-8 text-maia-muted lg:justify-self-end">
            {dictionary.supporting}
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {items.map((item, index) => (
            <motion.article
              key={`${item.source}-${item.title}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[330px] flex-col rounded-lg border border-white/10 bg-maia-black/55 p-5 transition hover:border-maia-violet/45 hover:bg-maia-black/75"
            >
              <div className="flex items-center justify-between gap-3 text-xs text-maia-muted">
                <span>{item.source}</span>
                <span>{item.category}</span>
              </div>
              <time
                dateTime={item.publishedAt}
                className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-maia-violet"
              >
                {item.publishedAt}
              </time>
              <h3 className="mt-5 text-lg font-semibold leading-7 text-maia-white">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-maia-muted">
                {item.summary[locale] ?? item.summary.es}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maia-white transition hover:text-maia-violet"
              >
                {dictionary.readSource}
                <ArrowUpRight className="size-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
