import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { programmes } from "@/lib/data/programmes";
import { org } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "ADESEN's five integrated programme components: health & socio-economic development, education & skills, talent development, environment & climate resilience, and advocacy & social protection.",
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Our programmes
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Five mutually reinforcing components
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            ADESEN&apos;s {org.programmePeriod} programme improves the
            well-being and resilience of vulnerable populations in Gatsibo
            District through coordinated action across five components —
            each designed to reinforce the others.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          title="Explore each component"
          description="Every component below links to its detailed activities, targets and alignment with national priorities."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme, i) => (
            <Reveal key={programme.slug} delay={i * 0.05}>
              <ProgrammeCard programme={programme} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
