"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  organisation: z.string().optional(),
  reason: z.enum(["partnership", "donor", "volunteer", "media", "general"]),
  message: z.string().min(10, "Please share a few more details (min. 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/**
 * Client-side validated contact form. Submits to /api/contact, which
 * sends via Resend — see README "Wiring up the contact form" for the
 * RESEND_API_KEY / CONTACT_TO_EMAIL setup this depends on.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { reason: "general" },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        throw new Error();
      }
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Something went wrong sending your message. Please try again in a moment."
      );
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-forest/20 bg-forest-light p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-forest" />
        <h3 className="text-lg font-bold text-navy">Message sent</h3>
        <p className="text-sm text-ink/70">
          Thank you for reaching out — the ADESEN team will respond as soon
          as possible.
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Full name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="text-sm font-semibold text-navy">
          Organisation (optional)
        </label>
        <input
          id="organisation"
          type="text"
          autoComplete="organization"
          {...register("organisation")}
          className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
        />
      </div>

      <div>
        <label htmlFor="reason" className="text-sm font-semibold text-navy">
          I am reaching out about
        </label>
        <select
          id="reason"
          {...register("reason")}
          className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
        >
          <option value="general">General enquiry</option>
          <option value="partnership">Partnership / District coordination</option>
          <option value="donor">Donor / funding opportunity</option>
          <option value="volunteer">Volunteering</option>
          <option value="media">Media enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {submitError}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
