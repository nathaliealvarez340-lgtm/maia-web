import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "light" | "dark";
type LogoMode = "lockup" | "mark";

type LogoProps = {
  variant?: LogoVariant;
  mode?: LogoMode;
  className?: string;
  priority?: boolean;
};

const logoAssets: Record<LogoVariant, Record<LogoMode, string>> = {
  light: {
    lockup: "/brand/maia-logo-white-web.png",
    mark: "/brand/maia-mark-white-web.png",
  },
  dark: {
    lockup: "/brand/maia-logo-black.png",
    mark: "/brand/MA_280X280_BLACK.png",
  },
};

const dimensions: Record<LogoMode, { width: number; height: number }> = {
  lockup: { width: 780, height: 260 },
  mark: { width: 512, height: 512 },
};

export function Logo({
  variant = "light",
  mode = "lockup",
  className,
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={logoAssets[variant][mode]}
      alt="MAIA"
      width={dimensions[mode].width}
      height={dimensions[mode].height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
