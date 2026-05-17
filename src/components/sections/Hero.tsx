"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { SplineScene } from "@/components/ui/SplineScene";
import { type Dictionary } from "@/i18n/dictionary";

type HeroProps = {
  dictionary: Dictionary["hero"];
};

export function Hero({ dictionary }: HeroProps) {
  const firstLineParts = dictionary.lineOne.replace(/\.$/, ".").split(" ");
  const secondLineParts = dictionary.lineTwo.replace(/\.$/, ".").split(" ");

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-maia-black pt-36 sm:pt-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(109,40,217,0.2),transparent_31rem),radial-gradient(circle_at_18%_72%,rgba(59,10,69,0.2),transparent_34rem),linear-gradient(180deg,#050505_0%,#09090B_52%,#050505_100%)]" />
      <div className="absolute inset-0 subtle-grid-bg opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      <div className="absolute inset-0 system-dots-bg opacity-20 [mask-image:radial-gradient(circle_at_72%_36%,black,transparent_52%)]" />
      <div className="absolute right-[-10%] top-[18%] h-[42rem] w-[42rem] rounded-full border border-maia-violet/10 bg-maia-purple/10 blur-[120px]" />
      <div className="absolute left-[8%] top-[22%] hidden h-[34rem] w-px bg-gradient-to-b from-transparent via-maia-violet/20 to-transparent lg:block" />
      <div className="absolute bottom-0 left-1/2 h-px w-[min(84rem,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-maia-violet/28 to-transparent" />

      <div className="maia-container relative grid min-h-[calc(100vh-9rem)] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex rounded-full border border-white/10 bg-black/35 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-maia-muted">
              {dictionary.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.985, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[12ch] text-balance text-[clamp(3.7rem,8.6vw,7.2rem)] font-semibold uppercase leading-[0.84] tracking-normal text-maia-white lg:mx-0"
          >
            {firstLineParts.map((part) => (
              <span key={part} className="block">
                {part}
              </span>
            ))}
            <span className="mt-3 block text-maia-violet drop-shadow-[0_0_28px_rgba(109,40,217,0.36)]">
              {secondLineParts.map((part) => (
                <span key={part} className="block">
                  {part}
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl border-maia-violet/35 text-lg leading-8 text-maia-muted sm:text-xl lg:mx-0 lg:border-l lg:pl-5"
          >
            {dictionary.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <ButtonLink href="#contact" showIcon>
              {dictionary.primaryCta}
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              {dictionary.secondaryCta}
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.22, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[34rem] lg:justify-self-end"
        >
          <div className="absolute -inset-8 rounded-[2.2rem] border border-white/5 bg-white/[0.018] blur-sm" />
          <div className="absolute -inset-4 rounded-[1.8rem] bg-[conic-gradient(from_180deg,transparent,rgba(109,40,217,0.2),transparent_32%)] opacity-70 blur-2xl" />
          <SplineScene className="h-[360px] rounded-[1.35rem] sm:h-[440px] lg:h-[610px]" />
        </motion.div>
      </div>
    </section>
  );
}
