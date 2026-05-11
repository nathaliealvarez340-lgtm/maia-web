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
    [0, 0.26, 0.45, 0.78, 1],
    ["#050505", "#050505", "#240733", "#18051F", "#050505"],
  );
  const phraseOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.42, 0.5, 0.72, 0.82, 0.96],
    [0, 1, 1, 0, 0, 1, 1],
  );
  const phraseScale = useTransform(
    scrollYProgress,
    [0, 0.28, 0.45, 0.72, 0.9, 1],
    prefersReducedMotion ? [1, 1, 1, 1, 1, 1] : [0.9, 1.46, 1.18, 0.98, 1.1, 1.08],
  );
  const phraseY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 0.72, 0.82],
    prefersReducedMotion ? [0, 0, 0, 0, 0] : [24, -12, -40, 32, 0],
  );
  const servicesOpacity = useTransform(
    scrollYProgress,
    [0.43, 0.52, 0.68, 0.76],
    [0, 1, 1, 0],
  );
  const servicesY = useTransform(
    scrollYProgress,
    [0.43, 0.54, 0.76],
    prefersReducedMotion ? [0, 0, 0] : [30, 0, -24],
  );
  const finalCtaOpacity = useTransform(scrollYProgress, [0.78, 0.9], [0, 1]);
  const finalCtaY = useTransform(
    scrollYProgress,
    [0.78, 0.9],
    prefersReducedMotion ? [0, 0] : [18, 0],
  );
  const glowOpacity = useTransform(scrollYProgress, [0.18, 0.45, 0.8], [0, 0.28, 0.12]);

  function scrollToCards() {
    const top =
      (containerRef.current?.offsetTop ?? 0) +
      window.innerHeight * (prefersReducedMotion ? 0.55 : 1.6);

    window.scrollTo({
      top,
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
      className="relative min-h-[320vh] bg-maia-black"
    >
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute right-[6%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-maia-wine blur-[160px]"
        />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute bottom-[5%] left-[8%] h-[24rem] w-[24rem] rounded-full bg-maia-purple/60 blur-[170px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.035),transparent_35%),linear-gradient(to_bottom,rgba(5,5,5,0.24),rgba(5,5,5,0.66))]" />

        <div className="maia-container relative flex min-h-screen items-center justify-center px-1 text-center">
          <motion.div
            style={{
              opacity: phraseOpacity,
              scale: phraseScale,
              y: phraseY,
            }}
            className="absolute max-w-6xl origin-center will-change-transform"
          >
            <RevealCopy dictionary={dictionary} />
          </motion.div>

          <motion.div
            style={{ opacity: servicesOpacity, y: servicesY }}
            className="absolute inset-x-0 mx-auto flex max-w-6xl flex-col items-center px-4 will-change-transform"
          >
            <ServicesScene services={services} />
          </motion.div>

          <motion.div
            style={{ opacity: finalCtaOpacity, y: finalCtaY }}
            className="absolute bottom-14 flex flex-col items-center gap-5 sm:bottom-16"
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

      <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12">
        {services.items.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons] ?? Orbit;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.07,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group min-h-[230px] rounded-lg border border-white/10 bg-black/24 p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:border-maia-violet/35 hover:bg-black/32 sm:p-6"
            >
              <div className="mb-8 inline-flex size-11 items-center justify-center rounded-full border border-maia-violet/35 bg-maia-violet/10 text-maia-white">
                <Icon className="size-5" />
              </div>
              <h4 className="text-xl font-semibold text-maia-white">
                {service.title}
              </h4>
              <p className="mt-4 text-sm leading-7 text-maia-muted sm:text-base">
                {service.description}
              </p>
            </motion.article>
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
