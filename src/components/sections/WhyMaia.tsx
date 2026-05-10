"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { type Dictionary } from "@/i18n/dictionary";

type WhyMaiaProps = {
  dictionary: Dictionary["whyMaia"];
};

export function WhyMaia({ dictionary }: WhyMaiaProps) {
  return (
    <section className="bg-maia-black py-24 sm:py-32">
      <div className="maia-container">
        <SectionHeader eyebrow={dictionary.eyebrow} title={dictionary.title} />
        <p className="mt-8 max-w-4xl text-balance text-3xl font-semibold leading-tight text-maia-white sm:text-5xl">
          {dictionary.statement}
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
            >
              <h3 className="text-xl font-semibold text-maia-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-maia-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
