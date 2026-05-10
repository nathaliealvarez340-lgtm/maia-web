"use client";

import { usePathname } from "next/navigation";
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

  function getHref(locale: Locale) {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const segments = pathname.split("/");
    segments[1] = locale;
    return `${segments.join("/") || `/${locale}`}${hash}`;
  }

  return (
    <div
      aria-label={label}
      className={cn(
        "inline-flex rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur",
        className,
      )}
    >
      {locales.map((locale) => (
        <a
          key={locale}
          href={getHref(locale)}
          aria-current={locale === currentLocale ? "page" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.14em] transition",
            locale === currentLocale
              ? "bg-maia-violet text-white shadow-[0_0_20px_rgba(109,40,217,0.35)]"
              : "text-maia-muted hover:text-maia-white",
          )}
        >
          {localeLabels[locale]}
        </a>
      ))}
    </div>
  );
}
