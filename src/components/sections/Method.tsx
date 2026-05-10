"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Diagnose",
    text: "Read the business beneath the surface: positioning, offer logic, operational friction and growth constraints.",
  },
  {
    title: "Design",
    text: "Translate strategy into identity, architecture and systems that make decisions easier and execution sharper.",
  },
  {
    title: "Scale",
    text: "Install repeatable growth infrastructure across content, CRM, automation and commercial rituals.",
  },
];

export function Method() {
  return (
    <section
      id="method"
      className="relative overflow-hidden bg-maia-carbon py-24 sm:py-32"
    >
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-maia-wine/30 blur-[120px]" />
      <div className="maia-container relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Method"
          title="MAIA does not decorate businesses. MAIA structures them."
          description="The work starts before the visual layer and continues after launch. Every output has to strengthen how the business thinks, sells, operates and compounds."
        />

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur md:grid-cols-[7rem_1fr]"
            >
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-maia-violet">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-maia-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-maia-muted">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
