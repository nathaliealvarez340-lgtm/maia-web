import { navigationItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-maia-black">
      <div className="maia-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm tracking-[0.34em] text-maia-white">
            MAIA
          </p>
          <p className="mt-2 text-sm text-maia-muted">
            Strategy that designs. Systems that scale.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-maia-muted">
          {navigationItems.map((item) => (
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
