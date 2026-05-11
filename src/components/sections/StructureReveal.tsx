"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
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

  const phraseOpacity = useTransform(scrollYProgress, [0, 0.12, 0.85], [0, 1, 1]);
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    prefersReducedMotion ? [1, 1, 1] : [0.92, 1.18, 1.38],
  );
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.45, 0.78, 1],
    ["#050505", "#050505", "#18051F", "#3B0A45"],
  );
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.75, 1], [0, 0.22, 0.34]);
  const ctaOpacity = useTransform(scrollYProgress, [0.72, 0.9], [0, 1]);
  const ctaY = useTransform(
    scrollYProgress,
    [0.72, 0.9],
    prefersReducedMotion ? [0, 0] : [18, 0],
  );

  function scrollToBuilds() {
    document.getElementById("builds")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  if (prefersReducedMotion) {
    return (
      <section className="relative overflow-hidden bg-[#18051F] py-28 sm:py-36">
        <StaticAtmosphere />
        <div className="maia-container relative flex min-h-[70vh] flex-col items-center justify-center text-center">
          <RevealCopy dictionary={dictionary} />
          <RevealCta dictionary={dictionary} onClick={scrollToBuilds} />
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative min-h-[190vh] bg-maia-black">
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute right-[8%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-maia-wine blur-[150px]"
        />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute bottom-[8%] left-[8%] h-[22rem] w-[22rem] rounded-full bg-maia-purple/60 blur-[160px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.035),transparent_34%),linear-gradient(to_bottom,rgba(5,5,5,0.35),rgba(5,5,5,0.58))]" />

        <div className="maia-container relative flex min-h-screen flex-col items-center justify-center px-1 text-center">
          <motion.div
            style={{ opacity: phraseOpacity, scale: textScale }}
            className="max-w-6xl origin-center will-change-transform"
          >
            <RevealCopy dictionary={dictionary} />
          </motion.div>

          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="absolute bottom-16 flex flex-col items-center gap-5 sm:bottom-20"
          >
            <p className="max-w-sm text-sm leading-6 text-maia-muted sm:text-base">
              {dictionary.microcopy}
            </p>
            <RevealCta dictionary={dictionary} onClick={scrollToBuilds} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function RevealCopy({ dictionary }: StructureRevealProps) {
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

function RevealCta({
  dictionary,
  onClick,
}: StructureRevealProps & {
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
