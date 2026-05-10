import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-maia-violet">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-maia-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-maia-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
