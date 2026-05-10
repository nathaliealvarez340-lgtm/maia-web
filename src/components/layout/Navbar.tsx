"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Logo } from "@/components/ui/Logo";
import { type Locale } from "@/i18n/config";
import { type Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary["nav"];
};

export function Navbar({ locale, dictionary }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-maia-black/72 backdrop-blur-xl">
      <nav className="maia-container flex h-16 items-center justify-between gap-3">
        <a
          href="#home"
          aria-label="MAIA home"
          className="inline-flex items-center"
        >
          <Logo
            variant="light"
            mode="lockup"
            priority
            className="h-7 w-auto opacity-95"
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {dictionary.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-maia-muted transition duration-300 hover:text-maia-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher
            currentLocale={locale}
            label={dictionary.languageLabel}
          />
          <ButtonLink href="#contact" variant="secondary" className="h-10 px-4">
            {dictionary.cta}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-maia-white lg:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-white/10 bg-maia-black/96 transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="maia-container flex flex-col gap-4 py-5">
            {dictionary.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-maia-muted transition hover:text-maia-white"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <LanguageSwitcher
                currentLocale={locale}
                label={dictionary.languageLabel}
              />
              <ButtonLink href="#contact" onClick={() => setOpen(false)}>
                {dictionary.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
