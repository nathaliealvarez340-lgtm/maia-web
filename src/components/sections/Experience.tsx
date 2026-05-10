"use client";

import { motion } from "framer-motion";

const statements = [
  "A pretty brand gets attention. A strategic brand builds power.",
  "Design is not the final layer. It is the visible part of the system.",
  "Growth without structure becomes noise.",
];

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-maia-black py-24 sm:py-32">
      <div className="maia-container">
        <div className="grid gap-5">
          {statements.map((statement, index) => (
            <motion.div
              key={statement}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.055] to-white/[0.018] p-7 sm:p-10"
            >
              <p className="text-balance text-3xl font-semibold leading-tight text-maia-white sm:text-5xl">
                {statement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
