"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { offSocietyVideoUrl } from "@/data/offSociety";
import { type Dictionary } from "@/i18n/dictionary";

type OffSocietyProps = {
  dictionary: Dictionary["offSociety"];
};

export function OffSociety({ dictionary }: OffSocietyProps) {
  const [step, setStep] = useState<"intro" | number | "join">("intro");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldLoadVideo = useInView(sectionRef, {
    once: true,
    margin: "240px",
  });

  const activeSignal = typeof step === "number" ? dictionary.signals[step] : null;
  const signalIndex = typeof step === "number" ? step : -1;

  function nextSignal() {
    if (step === "intro") {
      setStep(0);
      return;
    }

    if (typeof step === "number" && step < dictionary.signals.length - 1) {
      setStep(step + 1);
      return;
    }

    setStep("join");
  }

  function submitSignal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setSubmitted(true);
  }

  return (
    <section
      ref={sectionRef}
      id="off-society"
      className="relative overflow-hidden bg-maia-black py-24 sm:py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-maia-wine/8 blur-[150px]" />
      <div className="maia-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[620px] overflow-hidden rounded-lg border border-white/10 bg-maia-carbon shadow-[0_0_70px_rgba(59,10,69,0.1)] sm:min-h-[700px]"
        >
          {shouldLoadVideo ? (
            <video
              className="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-40 blur-[1px]"
              src={offSocietyVideoUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          ) : null}

          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.82)_48%,rgba(12,8,18,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(109,40,217,0.09),transparent_32%),linear-gradient(to_top,rgba(5,5,5,0.96),transparent_44%)]" />
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-maia-violet/30 to-transparent" />

          <div className="relative z-10 flex min-h-[620px] flex-col justify-between p-6 sm:min-h-[700px] sm:p-10 lg:p-14">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-maia-muted">
                {dictionary.label}
              </p>
              {typeof step === "number" ? (
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-maia-violet">
                  {String(signalIndex + 1).padStart(2, "0")} /{" "}
                  {String(dictionary.signals.length).padStart(2, "0")}
                </p>
              ) : null}
            </div>

            <AnimatePresence mode="wait">
              {step === "intro" ? (
                <motion.div
                  key="intro"
                  {...panelMotion}
                  className="max-w-4xl py-24 sm:py-28"
                >
                  <h2 className="text-balance text-5xl font-semibold leading-[0.94] text-maia-white sm:text-6xl lg:text-[5.8rem]">
                    {dictionary.title}
                  </h2>
                </motion.div>
              ) : null}

              {activeSignal ? (
                <motion.div
                  key={activeSignal.title}
                  {...panelMotion}
                  className="max-w-4xl py-20"
                >
                  <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-maia-violet">
                    {dictionary.signalLabel}
                  </p>
                  <h2 className="text-balance text-4xl font-semibold leading-tight text-maia-white sm:text-6xl lg:text-7xl">
                    {activeSignal.title}
                  </h2>
                  <p className="mt-8 max-w-2xl text-xl leading-9 text-maia-muted">
                    {activeSignal.text}
                  </p>
                </motion.div>
              ) : null}

              {step === "join" ? (
                <motion.div
                  key="join"
                  {...panelMotion}
                  className="max-w-3xl py-20"
                >
                  <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-maia-violet">
                    {dictionary.join.label}
                  </p>
                  <h2 className="text-balance text-4xl font-semibold leading-tight text-maia-white sm:text-6xl">
                    {dictionary.join.title}
                  </h2>
                  <p className="mt-7 max-w-2xl text-lg leading-8 text-maia-muted">
                    {dictionary.join.text}
                  </p>
                  <p className="mt-10 max-w-2xl text-balance text-2xl leading-tight text-maia-white sm:text-3xl">
                    {dictionary.primaryText}
                  </p>
                  <form
                    onSubmit={submitSignal}
                    className="mt-12 flex max-w-xl flex-col gap-3 rounded-full border border-white/10 bg-black/30 p-2 backdrop-blur-md sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={dictionary.join.placeholder}
                      aria-label={dictionary.join.placeholder}
                      className="h-11 min-w-0 flex-1 bg-transparent px-4 text-sm text-maia-white outline-none placeholder:text-maia-muted"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-maia-violet/60 px-4 text-sm font-semibold text-maia-white transition hover:border-maia-violet hover:bg-maia-violet/12"
                    >
                      {dictionary.join.cta}
                      <ArrowRight className="size-4" />
                    </button>
                  </form>
                  {submitted ? (
                    <p className="mt-4 text-sm text-maia-muted">
                      {dictionary.join.success}
                    </p>
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-maia-muted">
                {step === "intro"
                  ? dictionary.caption
                  : step === "join"
                    ? dictionary.join.caption
                    : dictionary.signalCaption}
              </p>
              {step !== "join" ? (
                <button
                  type="button"
                  onClick={nextSignal}
                  className="group inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.2em] text-maia-white transition hover:text-maia-violet"
                >
                  {step === "intro" ? dictionary.cta : dictionary.nextCta}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setStep("intro");
                    setSubmitted(false);
                  }}
                  className="self-start font-mono text-xs uppercase tracking-[0.2em] text-maia-muted transition hover:text-maia-white"
                >
                  {dictionary.resetCta}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const panelMotion = {
  initial: { opacity: 0, y: 22, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -18, filter: "blur(10px)" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
} as const;
