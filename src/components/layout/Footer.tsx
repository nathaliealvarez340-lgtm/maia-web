import { type Dictionary } from "@/i18n/dictionary";
import { Logo } from "@/components/ui/Logo";

type FooterProps = {
  dictionary: Dictionary["footer"];
};

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-maia-black">
      <div className="maia-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo variant="light" mode="lockup" className="h-10 w-auto opacity-95" />
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-maia-muted">
            {dictionary.disciplines}
          </p>
          <p className="mt-2 text-sm text-maia-muted">{dictionary.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-maia-muted">
          {dictionary.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-maia-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
