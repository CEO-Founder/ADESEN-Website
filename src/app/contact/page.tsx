import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ContactForm } from "@/components/ContactForm";
import { org } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ADESEN — partnership enquiries, donor relations, volunteering and general contact information.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Whether you&apos;re a District partner, donor, volunteer or
            community member, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-navy">Send us a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-navy">
                Contact information
              </h2>
              <ul className="mt-4 space-y-4 text-sm text-ink/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span>
                    <span className="block font-semibold text-navy">
                      {org.hq.label}
                    </span>
                    {org.hq.lines.join(", ")}
                    <br />
                    <span className="mt-1 block font-semibold text-navy">
                      {org.programmeOffice.label}
                    </span>
                    {org.programmeOffice.lines.join(", ")}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-forest" />
                  <a href={`mailto:${org.contact.email}`} className="hover:text-forest">
                    {org.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-forest" />
                  <a href={`tel:${org.contact.phone}`} className="hover:text-forest">
                    {org.contact.phone}
                  </a>
                </li>
              </ul>
              {org.contact.isPlaceholder ? (
                <p className="mt-3 text-xs italic text-ink/40">
                  Email and phone shown are placeholders — replace with
                  confirmed details before launch.
                </p>
              ) : null}
            </div>

            <PlaceholderImage
              label="ADESEN programme office location"
              variant="forest"
              aspect="aspect-[4/3]"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
