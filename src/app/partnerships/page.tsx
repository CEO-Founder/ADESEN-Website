import type { Metadata } from "next";
import { Landmark, Building2, HeartHandshake, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "How ADESEN works with Gatsibo District administration, the Government of Rwanda, donors, the private sector and communities to deliver its 2026-2028 programme.",
};

const partners = [
  {
    icon: Landmark,
    name: "Gatsibo District Administration",
    description:
      "Programme delivery is embedded within District and community structures. ADESEN participates in District coordination forums, including the Joint Action Development Forum (JADF), and submits periodic reports to the District.",
  },
  {
    icon: Building2,
    name: "Government of Rwanda",
    description:
      "ADESEN is registered under Law No. 058/2024 and aligns its programme with national bodies including the Ministry of Health, Ministry of Education, Rwanda Environment Management Authority (REMA), National Youth Council and Rwanda Governance Board.",
  },
  {
    icon: HeartHandshake,
    name: "Donors & Development Partners",
    description:
      "ADESEN is building multi-year partnerships with international donors and institutional funders whose mandates align with its five programme components.",
  },
  {
    icon: Users,
    name: "Private Sector & Civil Society",
    description:
      "Corporate social responsibility partnerships and civil society collaboration extend the reach and sustainability of programme activities beyond ADESEN's own resources.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Partnerships
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Community-driven, District-anchored, nationally aligned
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            No single organisation can transform a district alone. ADESEN
            delivers every programme component in partnership with Gatsibo
            District, national government, donors, the private sector and
            the communities themselves.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {partners.map((partner, i) => (
            <Reveal
              key={partner.name}
              delay={i * 0.05}
              className="flex gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-light text-forest">
                <partner.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-bold text-navy">{partner.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {partner.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SiteImage
              src="/images/coordination-meeting.jpg"
              alt="Community development coordination meeting"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Community ownership"
              title="Communities lead, ADESEN facilitates"
              description="Every activity is designed so that communities identify their own priorities and lead delivery — ensuring results endure well beyond the three-year programme period."
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-navy text-white">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Interested in partnering with ADESEN?
          </h2>
          <p className="max-w-xl text-white/80">
            Whether you represent a government institution, a donor
            organisation, a private company or a community group, we would
            welcome the conversation.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
