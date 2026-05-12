"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Blocks, Orbit, Workflow } from "lucide-react";
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
    [0, 0.18, 0.34, 0.72, 1],
    ["#050505", "#050505", "#240733", "#18051F", "#050505"],
  );
  const phraseIntroOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.36, 0.43],
    [0, 1, 1, 0],
  );
  const phraseIntroScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.36, 0.43],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.96, 1.18, 1.9, 2.06],
  );
  const phraseIntroY = useTransform(
    scrollYProgress,
    [0, 0.36, 0.43],
    prefersReducedMotion ? [0, 0, 0] : [18, -8, -28],
  );
  const servicesOpacity = useTransform(
    scrollYProgress,
    [0.44, 0.52, 0.74, 0.82],
    [0, 1, 1, 0],
  );
  const servicesY = useTransform(
    scrollYProgress,
    [0.44, 0.52, 0.74, 0.82],
    prefersReducedMotion ? [0, 0, 0, 0] : [80, 0, 0, -60],
  );
  const phraseReturnOpacity = useTransform(
    scrollYProgress,
    [0.84, 0.94],
    [0, 1],
  );
  const phraseReturnScale = useTransform(
    scrollYProgress,
    [0.84, 1],
    prefersReducedMotion ? [1, 1] : [1.02, 1.14],
  );
  const finalCtaOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const finalCtaY = useTransform(
    scrollYProgress,
    [0.9, 1],
    prefersReducedMotion ? [0, 0] : [18, 0],
  );
  const glowOpacity = useTransform(scrollYProgress, [0.18, 0.45, 0.8], [0, 0.28, 0.12]);

  function scrollToCards() {
    if (!containerRef.current) {
      return;
    }

    const top = containerRef.current.offsetTop;
    const target = top + containerRef.current.offsetHeight * 0.5;

    window.scrollTo({
      top: target,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  if (prefersReducedMotion) {
    return (
      <section className="relative overflow-hidden bg-[#120417] py-24 sm:py-32">
        <StaticAtmosphere />
        <div className="maia-container relative grid gap-16">
          <RevealCopy dictionary={dictionary} />
          <ServicesScene services={services} />
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="max-w-sm text-sm leading-6 text-maia-muted sm:text-base">
              {dictionary.microcopy}
            </p>
            <RevealCta dictionary={dictionary} onClick={scrollToCards} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="builds"
      className="relative h-[460vh] bg-maia-black md:h-[520vh]"
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
              opacity: phraseIntroOpacity,
              scale: phraseIntroScale,
              y: phraseIntroY,
            }}
            className="pointer-events-none absolute z-10 max-w-6xl origin-center will-change-transform"
          >
            <RevealCopy dictionary={dictionary} />
          </motion.div>

          <motion.div
            style={{ opacity: servicesOpacity, y: servicesY }}
            className="pointer-events-auto absolute inset-0 z-30 mx-auto flex items-center justify-center px-4 will-change-transform"
          >
            <div className="w-full max-w-6xl">
              <ServicesScene services={services} />
            </div>
          </motion.div>

          <motion.div
            style={{
              opacity: phraseReturnOpacity,
              scale: phraseReturnScale,
            }}
            className="pointer-events-none absolute z-10 max-w-6xl origin-center will-change-transform"
          >
            <RevealCopy dictionary={dictionary} />
          </motion.div>

          <motion.div
            style={{ opacity: finalCtaOpacity, y: finalCtaY }}
            className="absolute bottom-14 z-40 flex flex-col items-center gap-5 sm:bottom-16"
          >
            <p className="max-w-sm text-sm leading-6 text-maia-muted sm:text-base">
              {dictionary.microcopy}
            </p>
            <RevealCta dictionary={dictionary} onClick={scrollToCards} />
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

function ServicesScene({ services }: { services: Dictionary["services"] }) {
  return (
    <div className="w-full text-left">
      <div className="mx-auto max-w-3xl text-center">
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

      <div className="mt-8 grid gap-3 md:grid-cols-3 lg:mt-10 lg:gap-4">
        {services.items.map((service) => {
          const Icon = icons[service.icon as keyof typeof icons] ?? Orbit;

          return (
            <article
              key={service.title}
              className="group min-h-[200px] rounded-lg border border-white/10 bg-black/24 p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:border-maia-violet/35 hover:bg-black/32 sm:p-5 lg:min-h-[230px] lg:p-6"
            >
              <div className="mb-5 inline-flex size-10 items-center justify-center rounded-full border border-maia-violet/35 bg-maia-violet/10 text-maia-white lg:mb-8 lg:size-11">
                <Icon className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-maia-white lg:text-xl">
                {service.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-maia-muted sm:text-base lg:mt-4 lg:leading-7">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function RevealCta({
  dictionary,
  onClick,
}: {
  dictionary: Dictionary["structureReveal"];
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-black/30 px-5 text-sm font-semibold text-maia-white backdrop-blur-md transition hover:border-maia-violet/55 hover:bg-maia-violet/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maia-violet"
    >
      {dictionary.button}
      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
    </button>
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
