"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { type Dictionary } from "@/i18n/dictionary";

type WhyMaiaProps = {
  dictionary: Dictionary["whyMaia"];
};

export function WhyMaia({ dictionary }: WhyMaiaProps) {
  const paragraphs = dictionary.paragraphs as string[];

  return (
    <section id="about" className="relative overflow-hidden bg-maia-carbon py-32 sm:py-40">
      <div className="absolute inset-0 subtle-grid-bg opacity-20 [mask-image:radial-gradient(circle_at_30%_50%,black,transparent_72%)]" />
      <div className="absolute left-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-maia-wine/18 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-maia-purple/8 blur-[120px]" />

      <div className="maia-container relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 font-mono text-xs uppercase tracking-[0.28em] text-maia-violet"
        >
          {dictionary.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-balance text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-tight text-maia-white"
        >
          {dictionary.title}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 h-px w-20 origin-left bg-maia-violet/45"
        />

        <div className="mt-12 max-w-[700px] space-y-7">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: 0.08 + index * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg leading-[1.88] text-maia-muted"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 border-l-2 border-maia-violet/45 pl-8"
        >
          <p className="max-w-2xl text-balance text-xl font-semibold leading-[1.45] text-maia-white sm:text-2xl">
            {dictionary.statement}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <ButtonLink href="#services" variant="secondary" showIcon>
            {dictionary.cta}
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
