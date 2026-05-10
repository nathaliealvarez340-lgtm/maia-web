"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Brand & Identity",
  "Business Architecture",
  "Growth Systems",
  "Integrated MAIA System",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset();
  }

  return (
    <section id="contact" className="bg-maia-carbon py-24 sm:py-32">
      <div className="maia-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Contact"
          title="For businesses ready to build with more intention."
          description="Send the signal. MAIA will review the context and respond with the clearest next step."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border border-white/10 bg-maia-black/70 p-5 shadow-[0_0_80px_rgba(91,33,182,0.14)] backdrop-blur sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} className={inputClass} />
            </Field>
            <Field label="Company" error={errors.company?.message}>
              <input {...register("company")} className={inputClass} />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                className={inputClass}
              />
            </Field>
            <Field label="Service of interest" error={errors.service?.message}>
              <select {...register("service")} className={inputClass}>
                <option value="">Select one</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={6}
                className={cn(inputClass, "h-auto resize-none py-3")}
              />
            </Field>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-maia-violet/70 bg-maia-violet px-5 text-sm font-semibold text-white shadow-[0_0_34px_rgba(91,33,182,0.42)] transition duration-300 hover:bg-maia-purple disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{isSubmitting ? "Sending..." : "Send inquiry"}</span>
              <Send className="size-4" />
            </button>

            {status === "success" ? (
              <p className="text-sm text-maia-white">
                Inquiry sent. MAIA will be in touch.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-300">
                The inquiry could not be sent. Check the server configuration.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-maia-white">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "h-12 w-full rounded-lg border border-white/10 bg-white/[0.035] px-4 text-sm text-maia-white outline-none transition placeholder:text-maia-muted focus:border-maia-violet/70 focus:bg-white/[0.055]";
