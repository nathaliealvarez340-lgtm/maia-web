"use client";

import { services } from "@/data/services";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <section id="services" className="relative bg-maia-black py-24 sm:py-32">
      <div className="maia-container">
        <SectionHeader
          eyebrow="Services"
          title="Integrated strategy for brands that need more than aesthetics."
          description="MAIA connects identity, operating clarity and growth infrastructure so the business can move with sharper decisions and fewer improvised systems."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

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
