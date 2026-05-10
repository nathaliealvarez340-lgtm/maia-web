"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

type SplineSceneProps = {
  scene?: string;
  className?: string;
  label?: string;
};

export function SplineScene({ scene, className, label }: SplineSceneProps) {
  return (
    <div
      aria-label={label ?? "MAIA abstract strategy system"}
      className={cn(
        "relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-maia-carbon/70",
        "shadow-[0_0_90px_rgba(91,33,182,0.18)]",
        className,
      )}
    >
      {scene ? (
        <Suspense fallback={<SplineFallback />}>
          <Spline scene={scene} className="h-full min-h-[360px] w-full" />
        </Suspense>
      ) : (
        <SplineFallback />
      )}
    </div>
  );
}

function SplineFallback() {
  return (
    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(109,40,217,0.28),transparent_34%),linear-gradient(145deg,#050505,#0B0B0F_58%,#121218)]">
      <div className="absolute inset-0 maia-grid opacity-70" />
      <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-maia-violet/30 bg-maia-violet/10 shadow-[0_0_90px_rgba(109,40,217,0.36)]" />
      <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-[18%] top-[24%] h-px w-44 rotate-12 bg-gradient-to-r from-transparent via-maia-violet/80 to-transparent" />
      <div className="absolute bottom-[24%] right-[14%] h-px w-52 -rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-maia-muted backdrop-blur">
        Spline ready
      </div>
    </div>
  );
}
