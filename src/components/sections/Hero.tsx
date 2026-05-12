"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { SplineScene } from "@/components/ui/SplineScene";
import { type Dictionary } from "@/i18n/dictionary";

type HeroProps = {
  dictionary: Dictionary["hero"];
};

export function Hero({ dictionary }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-maia-black pt-32"
    >
      <div className="absolute inset-0 subtle-grid-bg opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute inset-0 system-dots-bg opacity-25 [mask-image:radial-gradient(circle_at_74%_36%,black,transparent_48%)]" />
      <div className="absolute right-0 top-0 h-[38rem] w-[38rem] rounded-full bg-maia-purple/18 blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 h-px w-2/3 bg-gradient-to-r from-transparent via-maia-violet/25 to-transparent" />

      <div className="maia-container relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-maia-muted">
              {dictionary.eyebrow}
            </p>
          </div>
          <h1 className="text-balance text-5xl font-semibold uppercase leading-[0.92] tracking-normal text-maia-white sm:text-7xl lg:text-[6.9rem]">
            {dictionary.lineOne}
            <span className="block text-maia-violet drop-shadow-[0_0_28px_rgba(109,40,217,0.42)]">
              {dictionary.lineTwo}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl border-l border-maia-violet/35 pl-5 text-lg leading-8 text-maia-muted sm:text-xl">
            {dictionary.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact" showIcon>
              {dictionary.primaryCta}
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              {dictionary.secondaryCta}
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:justify-self-end"
        >
          <div className="absolute -inset-6 rounded-[2rem] border border-white/5 bg-white/[0.018] blur-sm" />
          <SplineScene className="h-[420px] rounded-[1.35rem] lg:h-[610px]" />
        </motion.div>
      </div>
    </section>
  );
}
