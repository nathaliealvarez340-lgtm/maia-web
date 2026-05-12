import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border-maia-violet/70 bg-maia-violet text-white shadow-[0_0_34px_rgba(91,33,182,0.34)] hover:bg-maia-purple hover:shadow-[0_0_42px_rgba(109,40,217,0.42)]",
  secondary:
    "border-white/12 bg-black/30 text-maia-white backdrop-blur-xl hover:border-maia-violet/50 hover:bg-maia-violet/10",
  ghost:
    "border-transparent bg-transparent text-maia-muted hover:text-maia-white",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  showIcon?: boolean;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  showIcon?: boolean;
};

const baseClass =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maia-violet";

export function Button({
  className,
  variant = "primary",
  showIcon = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(baseClass, variants[variant], className)} {...props}>
      <span>{children}</span>
      {showIcon ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </button>
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  showIcon = false,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(baseClass, variants[variant], className)} {...props}>
      <span>{children}</span>
      {showIcon ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  );
}
