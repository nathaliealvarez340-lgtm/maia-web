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
      className="relative isolate min-h-screen overflow-hidden bg-maia-black pt-28"
    >
      <div className="absolute inset-0 maia-grid opacity-60" />
      <div className="absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-maia-purple/20 blur-[140px]" />

      <div className="maia-container relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-maia-muted">
            {dictionary.eyebrow}
          </p>
          <h1 className="text-balance text-5xl font-semibold uppercase leading-[0.92] tracking-normal text-maia-white sm:text-7xl lg:text-[6.9rem]">
            {dictionary.lineOne}
            <span className="block text-maia-violet drop-shadow-[0_0_28px_rgba(109,40,217,0.42)]">
              {dictionary.lineTwo}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-maia-muted sm:text-xl">
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
          className="lg:justify-self-end"
        >
          <SplineScene className="h-[420px] lg:h-[610px]" />
        </motion.div>
      </div>
    </section>
  );
}
