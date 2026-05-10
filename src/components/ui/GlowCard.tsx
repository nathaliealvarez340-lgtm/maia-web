"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md",
        "before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-maia-violet/70 before:to-transparent",
        "after:absolute after:-right-20 after:-top-20 after:size-44 after:rounded-full after:bg-maia-violet/15 after:blur-3xl after:transition after:duration-500 group-hover:after:bg-maia-violet/24",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
