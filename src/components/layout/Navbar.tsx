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
    <header className="fixed inset-x-0 top-5 z-50 px-3">
      <nav className="mx-auto flex h-14 w-full max-w-[1080px] items-center justify-between gap-3 rounded-full border border-white/10 bg-maia-black/70 px-4 shadow-[0_18px_70px_rgba(59,10,69,0.18)] backdrop-blur-2xl sm:px-5">
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

        <div className="hidden items-center gap-1 lg:flex">
          {dictionary.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-maia-muted transition duration-300 hover:border-maia-violet/25 hover:bg-maia-violet/18 hover:text-white"
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
          "mx-auto mt-2 grid max-w-[min(100%-1.5rem,32rem)] rounded-3xl border border-white/10 bg-maia-black/92 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 p-5">
            {dictionary.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-maia-muted transition hover:border-maia-violet/25 hover:bg-maia-violet/18 hover:text-white"
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
