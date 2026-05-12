"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Blocks, Orbit, Workflow } from "lucide-react";
import { useRef } from "react";
import { type Dictionary } from "@/i18n/dictionary";

const icons = {
  orbit: Orbit,
  blocks: Blocks,
  workflow: Workflow,
};

type StructureRevealProps = {
  dictionary: Dictionary["structureReveal"];
  services: Dictionary["services"];
};

export function StructureReveal({
  dictionary,
  services,
}: StructureRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.22, 0.42, 0.85, 1],
    ["#050505", "#050505", "#240733", "#240733", "#0B0B0F"],
  );
  const firstPhraseOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.5, 0.6],
    [0, 1, 1, 0],
  );
  const firstPhraseScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5],
    prefersReducedMotion ? [1, 1, 1] : [0.96, 1.08, 1.26],
  );
  const firstPhraseY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    prefersReducedMotion ? [0, 0, 0] : [18, -6, -18],
  );
  const secondPhraseOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.78, 0.9, 1],
    [0, 1, 1, 0],
  );
  const secondPhraseScale = useTransform(
    scrollYProgress,
    [0.6, 0.78, 0.9, 1],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.96, 1.1, 1.1, 1.02],
  );
  const secondPhraseY = useTransform(
    scrollYProgress,
    [0.6, 0.78, 1],
    prefersReducedMotion ? [0, 0, 0] : [18, 0, -18],
  );
  const servicesOpacity = useTransform(
    scrollYProgress,
    [0.92, 1],
    [0, 1],
  );
  const servicesY = useTransform(
    scrollYProgress,
    [0.92, 1],
    prefersReducedMotion ? [0, 0] : [60, 0],
  );
  const glowOpacity = useTransform(scrollYProgress, [0.18, 0.45, 0.8], [0, 0.28, 0.12]);

  if (prefersReducedMotion) {
    return (
      <section className="relative overflow-hidden bg-[#120417] py-24 sm:py-32">
        <StaticAtmosphere />
        <div className="maia-container relative grid gap-16">
          <RevealCopy dictionary={dictionary} />
          <ServicesScene services={services} />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="builds"
      className="relative h-[360vh] bg-maia-black md:h-[380vh]"
    >
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute right-[6%] top-[12%] z-0 h-[30rem] w-[30rem] rounded-full bg-maia-wine blur-[160px]"
        />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute bottom-[5%] left-[8%] z-0 h-[24rem] w-[24rem] rounded-full bg-maia-purple/60 blur-[170px]"
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.035),transparent_35%),linear-gradient(to_bottom,rgba(5,5,5,0.24),rgba(5,5,5,0.66))]" />

        <div className="maia-container relative z-10 flex min-h-screen items-center justify-center px-1 text-center">
          <motion.div
            style={{
              opacity: firstPhraseOpacity,
              scale: firstPhraseScale,
              y: firstPhraseY,
            }}
            className="pointer-events-none absolute z-10 max-w-6xl origin-center will-change-transform"
          >
            <RevealFirstLine dictionary={dictionary} />
          </motion.div>

          <motion.div
            style={{
              opacity: secondPhraseOpacity,
              scale: secondPhraseScale,
              y: secondPhraseY,
            }}
            className="pointer-events-none absolute z-10 max-w-6xl origin-center will-change-transform"
          >
            <RevealStructureLine dictionary={dictionary} />
          </motion.div>

          <motion.div
            style={{ opacity: servicesOpacity, y: servicesY }}
            className="pointer-events-auto absolute inset-0 z-30 mx-auto flex items-center justify-center px-4 will-change-transform"
          >
            <div className="w-full max-w-6xl">
              <ServicesScene services={services} />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

function RevealCopy({ dictionary }: { dictionary: Dictionary["structureReveal"] }) {
  return (
    <h2 className="text-balance text-4xl font-semibold leading-[0.98] tracking-normal text-maia-white sm:text-6xl md:text-7xl xl:text-8xl">
      <span className="block">{dictionary.lineOne}</span>
      <span className="block">
        {dictionary.lineTwoPrefix}{" "}
        <span className="text-maia-violet drop-shadow-[0_0_24px_rgba(109,40,217,0.28)]">
          {dictionary.highlight}
        </span>
        .
      </span>
    </h2>
  );
}

function RevealFirstLine({
  dictionary,
}: {
  dictionary: Dictionary["structureReveal"];
}) {
  return (
    <h2 className="text-balance text-4xl font-semibold leading-[0.98] tracking-normal text-maia-white sm:text-6xl md:text-7xl xl:text-8xl">
      {dictionary.lineOne}
    </h2>
  );
}

function RevealStructureLine({
  dictionary,
}: {
  dictionary: Dictionary["structureReveal"];
}) {
  return (
    <h2 className="text-balance text-4xl font-semibold leading-[0.98] tracking-normal text-maia-white sm:text-6xl md:text-7xl xl:text-8xl">
      {dictionary.lineTwoPrefix}{" "}
      <span className="text-maia-violet drop-shadow-[0_0_24px_rgba(109,40,217,0.28)]">
        {dictionary.highlight}
      </span>
      .
    </h2>
  );
}

function ServicesScene({ services }: { services: Dictionary["services"] }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/14 px-5 py-8 text-left backdrop-blur-sm sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_center,rgba(109,40,217,0.22)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -right-20 top-8 h-72 w-72 rounded-full bg-maia-purple/14 blur-[110px]" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-maia-violet/25 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-maia-violet">
          {services.eyebrow}
        </p>
        <h3 className="text-balance text-3xl font-semibold leading-tight text-maia-white sm:text-4xl lg:text-5xl">
          {services.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-maia-muted sm:text-lg">
          {services.description}
        </p>
      </div>

      <div className="relative z-10 mt-8 grid gap-3 md:grid-cols-3 lg:mt-12 lg:gap-6">
        {services.items.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons] ?? Orbit;

          return (
            <article
              key={service.title}
              className="group relative min-h-[220px] overflow-hidden border-t border-white/10 px-2 py-6 text-left transition hover:border-maia-violet/35 md:border-l md:border-t-0 md:px-6 lg:min-h-[250px]"
            >
              <span className="pointer-events-none absolute -right-2 top-2 z-0 text-[7rem] font-bold leading-none text-maia-violet/12 sm:text-[8rem] lg:text-[9rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <div className="mb-7 inline-flex size-10 items-center justify-center rounded-full border border-maia-violet/30 bg-black/30 text-maia-white backdrop-blur">
                  <Icon className="size-5" />
                </div>
                <h4 className="max-w-xs text-xl font-semibold text-maia-white lg:text-2xl">
                  {service.title}
                </h4>
                <p className="mt-4 max-w-sm text-sm leading-7 text-maia-muted sm:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function StaticAtmosphere() {
  return (
    <>
      <div className="absolute right-[8%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-maia-wine/18 blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.5),rgba(5,5,5,0.72))]" />
    </>
  );
}
