import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import { org, vision, mission, coreValues } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ADESEN's vision, mission, core values and organisational background — a Rwandan NGO delivering integrated community development in Gatsibo District.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Holistic, sustainable development for Gatsibo District
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            {org.fullName} is a {org.type.toLowerCase()} committed to the
            holistic and sustainable development of vulnerable communities,
            working at the intersection of health and livelihoods, education
            and skills, youth and talent, environmental protection, and
            social inclusion.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-cream p-8">
            <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{vision}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-black/5 bg-cream p-8">
            <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{mission}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="What guides us"
          title="Our core values"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => (
            <Reveal
              key={value.name}
              delay={i * 0.05}
              className="flex gap-3 rounded-2xl bg-white p-6 shadow-sm"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-forest" />
              <div>
                <h3 className="font-bold text-navy">{value.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Organisational background"
              title="Rooted in Kigali, working in Gatsibo"
            />
            <div className="mt-6 space-y-4 text-ink/80">
              <p>
                {org.legalStatus} {org.shortName} is headquartered in{" "}
                {org.hq.lines.join(", ")}, with programme operations across{" "}
                {org.operatingArea}.
              </p>
              <p>
                Gatsibo District is a predominantly rural, agriculture-dependent
                district in the semi-arid east of Rwanda, home to over 550,000
                people across 14 sectors. Its communities face persistent rural
                poverty, youth unemployment, climate variability and gaps in
                access to quality education, skills and social services —
                realities this programme responds to with locally grounded,
                community-driven interventions delivered in partnership with
                the District administration.
              </p>
              <p>
                ADESEN brings practical experience in community health and
                nutrition, vocational and digital skills, youth engagement,
                climate-smart agriculture, environmental restoration, and
                rights-based advocacy — all delivered through a model that
                embeds activities within existing local government and
                community structures.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SiteImage
              src="/images/gatsibo-landscape.jpg"
              alt="Gatsibo District landscape and community"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
