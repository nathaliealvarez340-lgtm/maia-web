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
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-maia-wine/24 blur-[130px]" />
      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-maia-purple/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 subtle-grid-bg opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="pointer-events-none absolute inset-0 system-dots-bg opacity-30 [mask-image:radial-gradient(circle_at_70%_48%,black,transparent_62%)]" />

      <div className="maia-container relative">
        <SectionHeader
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-maia-violet/35 to-transparent lg:block" />
          <div className="grid gap-5 lg:grid-cols-4 lg:gap-0">
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
                className="premium-border relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl lg:rounded-none lg:border-l lg:border-r-0 lg:bg-white/[0.018] lg:p-7"
              >
                <span className="pointer-events-none absolute -right-5 top-4 z-0 text-[8.5rem] font-bold leading-none text-maia-violet/12 sm:text-[10rem] lg:-right-8 lg:text-[9.5rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10 flex min-h-[288px] flex-col justify-end">
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-maia-violet">
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
      </div>
    </section>
  );
}
