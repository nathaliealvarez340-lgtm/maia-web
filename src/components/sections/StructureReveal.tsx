"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { type Dictionary } from "@/i18n/dictionary";

type StructureRevealProps = {
  dictionary: Dictionary["structureReveal"];
};

export function StructureReveal({ dictionary }: StructureRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.68, 1],
    ["#050505", "#050505", "#1A0628", "#0B0B0F"],
  );
  const firstOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.35, 0.48],
    [0, 1, 1, 0],
  );
  const firstScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.48],
    prefersReducedMotion ? [1, 1, 1] : [0.98, 1.08, 1.12],
  );
  const secondOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.62, 0.85, 1],
    [0, 1, 1, 0],
  );
  const secondScale = useTransform(
    scrollYProgress,
    [0.48, 0.7, 1],
    prefersReducedMotion ? [1, 1, 1] : [0.98, 1.08, 1],
  );
  const glowOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.62, 0.95],
    [0.08, 0.24, 0.08],
  );

  if (prefersReducedMotion) {
    return (
      <section className="relative overflow-hidden bg-[#120417] py-28 sm:py-36">
        <Atmosphere />
        <div className="maia-container relative flex min-h-[70vh] flex-col items-center justify-center gap-10 text-center">
          <FirstLine dictionary={dictionary} />
          <SecondLine dictionary={dictionary} />
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-maia-black md:h-[300vh]">
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        <Atmosphere />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-maia-wine blur-[170px]"
        />

        <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 text-center">
          <motion.div
            style={{ opacity: firstOpacity, scale: firstScale }}
            className="pointer-events-none absolute mx-auto w-[min(1100px,90vw)] will-change-transform"
          >
            <FirstLine dictionary={dictionary} />
          </motion.div>

          <motion.div
            style={{ opacity: secondOpacity, scale: secondScale }}
            className="pointer-events-none absolute mx-auto w-[min(1100px,90vw)] will-change-transform"
          >
            <SecondLine dictionary={dictionary} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FirstLine({ dictionary }: StructureRevealProps) {
  return (
    <h2 className="mx-auto max-w-[min(1100px,90vw)] text-balance text-center text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.96] text-maia-white">
      {dictionary.lineOne}
    </h2>
  );
}

function SecondLine({ dictionary }: StructureRevealProps) {
  return (
    <h2 className="mx-auto max-w-[min(1100px,90vw)] text-balance text-center text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.96] text-maia-white">
      {dictionary.lineTwoPrefix}{" "}
      <span className="text-maia-violet drop-shadow-[0_0_24px_rgba(109,40,217,0.28)]">
        {dictionary.highlight}
      </span>
      .
    </h2>
  );
}

function Atmosphere() {
  return (
    <>
      <div className="absolute inset-0 subtle-grid-bg opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(109,40,217,0.12),transparent_32%),linear-gradient(to_bottom,rgba(5,5,5,0.28),rgba(5,5,5,0.72))]" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-maia-violet/20 to-transparent" />
    </>
  );
}
