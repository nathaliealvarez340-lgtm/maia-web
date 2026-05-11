"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  function getHref(locale: Locale) {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const segments = pathname.split("/");
    segments[1] = locale;
    return `${segments.join("/") || `/${locale}`}${hash}`;
  }

  return (
    <motion.div
      ref={switcherRef}
      layout
      className={cn(
        "inline-flex h-10 max-w-full items-center overflow-hidden rounded-full border border-white/10 bg-maia-black/65 p-1 text-maia-white shadow-[0_10px_38px_rgba(0,0,0,0.22)] backdrop-blur-xl",
        "focus-within:border-maia-violet/45 hover:border-maia-violet/35",
        className,
      )}
    >
      <button
        type="button"
        aria-label={isOpen ? `Close ${label}` : `Open ${label}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="group inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-maia-violet text-white shadow-[0_0_22px_rgba(109,40,217,0.32)] outline-none transition hover:bg-maia-purple focus-visible:ring-2 focus-visible:ring-maia-violet/60"
      >
        <Globe2 className="size-4" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.nav
            key="language-options"
            aria-label={label}
            initial={{ width: 0, opacity: 0, filter: "blur(6px)" }}
            animate={{ width: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ width: 0, opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1 overflow-hidden pl-1"
          >
            {locales.map((locale) => (
              <a
                key={locale}
                href={getHref(locale)}
                aria-current={locale === currentLocale ? "page" : undefined}
                onClick={() => setIsOpen(false)}
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
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
