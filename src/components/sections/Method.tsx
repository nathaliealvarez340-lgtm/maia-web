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
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-maia-wine/24 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_center,rgba(109,40,217,0.18)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-maia-violet/25 to-transparent" />
      <div className="maia-container relative">
        <SectionHeader
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />

        <div className="relative mt-16 grid gap-4 lg:grid-cols-4 lg:gap-0">
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
              className="relative min-h-[310px] overflow-hidden border-t border-white/10 bg-white/[0.018] p-6 backdrop-blur-sm lg:border-l lg:border-t-0 lg:bg-transparent lg:p-7"
            >
              {index < dictionary.steps.length - 1 ? (
                <div className="absolute left-[calc(100%-0.25rem)] top-1/2 hidden h-px w-5 bg-maia-violet/40 lg:block" />
              ) : null}
              <span className="pointer-events-none absolute -right-5 top-4 z-0 text-[8.5rem] font-bold leading-none text-maia-violet/12 sm:text-[10rem] lg:-right-8 lg:text-[9.5rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10 flex min-h-[260px] flex-col justify-end">
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-maia-violet">
                  Fase {index + 1}
                </p>
                <h3 className="text-2xl font-semibold text-maia-white lg:text-3xl">
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
