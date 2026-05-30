"use client";

import { motion } from "framer-motion";
import { type Dictionary } from "@/i18n/dictionary";

type ServicesProps = {
  dictionary: Dictionary["services"];
};

export function Services({ dictionary }: ServicesProps) {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-maia-black py-24 sm:py-32"
    >
      <span id="builds" className="absolute -top-24" aria-hidden="true" />
      <div className="absolute inset-0 subtle-grid-bg opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute right-0 top-24 h-[34rem] w-[34rem] rounded-full bg-maia-wine/20 blur-[160px]" />

      <div className="maia-container relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-maia-violet">
              {dictionary.eyebrow}
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-maia-white sm:text-5xl lg:text-6xl">
              {dictionary.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-maia-muted lg:justify-self-end">
            {dictionary.description}
          </p>
        </div>

        <div className="mt-20">
          {dictionary.items.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid items-start border-t border-white/10 py-12 transition-colors lg:grid-cols-[96px_1fr_260px] lg:gap-16 lg:py-16"
            >
              <div className="mb-5 lg:mb-0 lg:pt-1">
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-maia-violet/50">
                  Layer
                </span>
                <span className="block text-[4rem] font-bold leading-none text-maia-violet/10 transition-colors duration-300 group-hover:text-maia-violet/18 lg:text-[5rem]">
                  {service.number}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-maia-white lg:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-[1.88] text-maia-muted">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap content-start gap-2 lg:mt-1">
                {(service.pillars as string[]).map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] tracking-wide text-maia-muted transition-colors group-hover:border-maia-violet/20 group-hover:text-maia-white/70"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
