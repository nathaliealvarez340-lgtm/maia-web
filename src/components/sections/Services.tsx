"use client";

import { Blocks, Orbit, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { type Dictionary } from "@/i18n/dictionary";

const icons = {
  orbit: Orbit,
  blocks: Blocks,
  workflow: Workflow,
};

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
      <div className="absolute inset-0 subtle-grid-bg opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute inset-0 system-dots-bg opacity-25 [mask-image:radial-gradient(circle_at_30%_60%,black,transparent_58%)]" />
      <div className="absolute right-0 top-24 h-[34rem] w-[34rem] rounded-full bg-maia-wine/22 blur-[150px]" />

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

        <div className="relative mt-16 rounded-[2rem] border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,rgba(109,40,217,0.12),transparent_34%,rgba(255,255,255,0.035))]" />
          <div className="relative grid gap-3 lg:grid-cols-3 lg:gap-0">
            {dictionary.items.map((service, index) => {
              const Icon = icons[service.icon as keyof typeof icons] ?? Orbit;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[310px] overflow-hidden border-t border-white/10 px-4 py-8 transition hover:bg-white/[0.035] lg:border-l lg:border-t-0 lg:px-8"
                >
                  <span className="pointer-events-none absolute -right-3 top-3 text-[8rem] font-bold leading-none text-maia-violet/10 transition group-hover:text-maia-violet/16 sm:text-[10rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="inline-flex size-11 items-center justify-center rounded-full border border-maia-violet/30 bg-black/30 text-maia-white backdrop-blur">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="max-w-xs text-2xl font-semibold text-maia-white">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-sm text-base leading-8 text-maia-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
