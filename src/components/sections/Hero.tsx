"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { type Dictionary } from "@/i18n/dictionary";

type HeroProps = {
  dictionary: Dictionary["hero"];
};

export function Hero({ dictionary }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-maia-black pt-36 sm:pt-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_16%,rgba(109,40,217,0.22),transparent_34rem),radial-gradient(ellipse_at_50%_78%,rgba(59,10,69,0.28),transparent_38rem),linear-gradient(180deg,#050505_0%,#09090B_48%,#050505_100%)]" />
      <div className="absolute inset-0 subtle-grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="absolute inset-x-0 top-0 mx-auto h-full w-[min(54rem,92vw)] bg-[linear-gradient(90deg,transparent,rgba(109,40,217,0.08),transparent)] blur-2xl" />
      <div className="absolute left-1/2 top-[12%] h-[74vh] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-maia-violet/38 to-transparent" />
      <div className="absolute left-1/2 top-[16%] h-[68vh] w-[min(38rem,78vw)] -translate-x-1/2 rounded-full border border-maia-violet/10 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.16),transparent_62%)] blur-sm" />
      <div className="absolute left-1/2 top-[18%] h-[62vh] w-[min(64rem,96vw)] -translate-x-1/2 rounded-[50%] border border-white/[0.035]" />
      <div className="absolute left-1/2 top-[26%] h-[46vh] w-[min(50rem,88vw)] -translate-x-1/2 rounded-[50%] border border-maia-violet/10" />
      <div className="absolute bottom-0 left-1/2 h-px w-[min(84rem,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-maia-violet/28 to-transparent" />

      <div className="maia-container relative flex min-h-[calc(100vh-9rem)] items-center justify-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 inline-flex rounded-full border border-white/10 bg-black/35 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-maia-muted">
              {dictionary.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.985, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-tight text-maia-white"
          >
            <span className="block">{dictionary.lineOne}</span>
            <span className="mt-3 block text-maia-violet drop-shadow-[0_0_28px_rgba(109,40,217,0.36)]">
              {dictionary.lineTwo}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-xl text-lg leading-8 text-maia-muted sm:text-xl"
          >
            {dictionary.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <ButtonLink href="#contact" showIcon>
              {dictionary.primaryCta}
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              {dictionary.secondaryCta}
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
