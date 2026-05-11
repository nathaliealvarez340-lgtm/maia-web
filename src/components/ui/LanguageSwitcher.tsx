"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  className?: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function getHref(locale: Locale) {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const segments = pathname.split("/");
    segments[1] = locale;
    return `${segments.join("/") || `/${locale}`}${hash}`;
  }

  return (
    <motion.div
      layout
      className={cn(
        "inline-flex h-10 max-w-full items-center overflow-hidden rounded-full border border-white/10 bg-maia-black/65 p-1 text-maia-white shadow-[0_10px_38px_rgba(0,0,0,0.22)] backdrop-blur-xl",
        "focus-within:border-maia-violet/45 hover:border-maia-violet/35",
        className,
      )}
    >
      <button
        type="button"
        aria-label={open ? `Close ${label}` : `Open ${label}`}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex h-8 items-center gap-2 rounded-full pr-2.5 text-left outline-none"
      >
        <motion.span
          layout
          className="inline-flex size-8 items-center justify-center rounded-full bg-maia-violet text-white shadow-[0_0_22px_rgba(109,40,217,0.32)] transition group-hover:bg-maia-purple"
        >
          <Globe2 className="size-4" />
        </motion.span>
        <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-maia-white">
          {localeLabels[currentLocale]}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="language-options"
            initial={{ width: 0, opacity: 0, filter: "blur(6px)" }}
            animate={{ width: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ width: 0, opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1 overflow-hidden pl-1"
          >
            {locales.map((locale) => (
              <a
                key={locale}
                href={getHref(locale)}
                aria-current={locale === currentLocale ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-full px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] transition outline-none focus-visible:ring-2 focus-visible:ring-maia-violet/60",
                  locale === currentLocale
                    ? "bg-maia-violet text-white shadow-[0_0_18px_rgba(109,40,217,0.3)]"
                    : "text-maia-muted hover:bg-white/[0.055] hover:text-maia-white",
                )}
              >
                {localeLabels[locale]}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
