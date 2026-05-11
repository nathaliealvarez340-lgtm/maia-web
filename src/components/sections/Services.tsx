"use client";

import { Blocks, Orbit, Workflow } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { type Dictionary } from "@/i18n/dictionary";

const icons = {
  orbit: Orbit,
  blocks: Blocks,
  workflow: Workflow,
};

type ServicesProps = {
  dictionary: Dictionary["services"];
};

export function Services({ dictionary }: ServicesProps) {
  return (
    <section id="services" className="relative bg-maia-black py-24 sm:py-32">
      <span id="builds" className="absolute -top-20" aria-hidden="true" />
      <div className="maia-container">
        <SectionHeader
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {dictionary.items.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Orbit;

            return (
              <GlowCard key={service.title} className="min-h-[286px]">
                <div className="mb-10 inline-flex size-12 items-center justify-center rounded-full border border-maia-violet/40 bg-maia-violet/10 text-maia-white shadow-[0_0_28px_rgba(91,33,182,0.28)]">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-2xl font-semibold text-maia-white">
                  {service.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-maia-muted">
                  {service.description}
                </p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
