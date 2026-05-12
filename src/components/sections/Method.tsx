"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { type Dictionary } from "@/i18n/dictionary";

type MethodProps = {
  dictionary: Dictionary["method"];
};

export function Method({ dictionary }: MethodProps) {
  return (
    <section
      id="method"
      className="relative overflow-hidden bg-maia-carbon py-24 sm:py-32"
    >
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-maia-wine/30 blur-[120px]" />
      <div className="maia-container relative">
        <SectionHeader
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {dictionary.steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-h-[310px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur"
            >
              {index < dictionary.steps.length - 1 ? (
                <div className="absolute left-[calc(100%-0.25rem)] top-10 hidden h-px w-5 bg-maia-violet/50 lg:block" />
              ) : null}
              <span className="pointer-events-none absolute -right-4 top-5 z-0 text-[8rem] font-bold leading-none text-maia-violet/10 sm:text-[9rem] lg:-right-6 lg:text-[8.5rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10 flex min-h-[260px] flex-col justify-end">
                <h3 className="text-2xl font-semibold text-maia-white">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-maia-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
