"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-maia-black/72 backdrop-blur-xl">
      <nav className="maia-container flex h-16 items-center justify-between">
        <a
          href="#home"
          aria-label="MAIA home"
          className="font-mono text-sm font-semibold tracking-[0.34em] text-maia-white"
        >
          MAIA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-maia-muted transition duration-300 hover:text-maia-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ButtonLink href="#contact" variant="secondary" className="h-10 px-4">
            Work with MAIA
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-maia-white md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-white/10 bg-maia-black/96 transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="maia-container flex flex-col gap-4 py-5">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-maia-muted transition hover:text-maia-white"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="#contact" onClick={() => setOpen(false)}>
              Work with MAIA
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
