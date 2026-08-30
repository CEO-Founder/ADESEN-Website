import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { Reveal } from "@/components/ui/Reveal";
import { keyStats, theoryOfChange, strategicAlignment, org } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Impact & Results",
  description:
    "ADESEN's 2026-2028 targets, Theory of Change, and alignment with Rwanda's NST2, Vision 2050 and the Sustainable Development Goals.",
};

export default function ImpactPage() {
  return (
    <>
      <section className="bg-forest text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Impact & results
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Measurable results, nationally aligned
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Over {org.programmePeriod}, ADESEN is designed to reach more than
            10,000 direct beneficiaries with a total indicative budget of{" "}
            {org.budget}, guided by a robust monitoring, evaluation and
            learning framework.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 pb-16 sm:grid-cols-3 sm:px-8 lg:grid-cols-5">
          {keyStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Theory of change"
          title="How change happens in Gatsibo District"
        />
        <Reveal className="mt-8 space-y-4 rounded-2xl border border-black/5 bg-cream p-8">
          <p className="text-lg leading-relaxed text-ink/80">
            <span className="font-semibold text-navy">If</span>{" "}
            {theoryOfChange.ifs.join("; and if ")} —
          </p>
          <p className="text-lg leading-relaxed text-ink/80">
            <span className="font-semibold text-navy">then</span>{" "}
            {theoryOfChange.then}
          </p>
          <p className="text-lg leading-relaxed text-ink/80">
            <span className="font-semibold text-navy">so that</span>{" "}
            {theoryOfChange.soThat}
          </p>
          <p className="pt-2 text-sm text-ink/60">
            <span className="font-semibold">Underlying assumptions:</span>{" "}
            {theoryOfChange.assumptions}
          </p>
        </Reveal>
      </Section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Strategic alignment"
          title="Mapped to NST2, Vision 2050 and the SDGs"
          description="Each programme component contributes to Rwanda's national transformation agenda."
        />
        <Reveal className="mt-10 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 bg-navy text-white">
                <th className="px-5 py-4 font-semibold">Programme component</th>
                <th className="px-5 py-4 font-semibold">NST2 pillar(s)</th>
                <th className="px-5 py-4 font-semibold">Vision 2050 goal</th>
                <th className="px-5 py-4 font-semibold">Relevant SDGs</th>
              </tr>
            </thead>
            <tbody>
              {strategicAlignment.map((row, i) => (
                <tr
                  key={row.component}
                  className={i % 2 === 0 ? "bg-white" : "bg-cream/60"}
                >
                  <td className="px-5 py-4 font-medium text-navy">
                    {row.component}
                  </td>
                  <td className="px-5 py-4 text-ink/80">{row.nst2}</td>
                  <td className="px-5 py-4 text-ink/80">{row.vision2050}</td>
                  <td className="px-5 py-4 text-ink/80">{row.sdgs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-navy">
            See how each component delivers these results
          </h2>
          <Link
            href="/programmes"
            className="inline-flex items-center gap-1 text-sm font-semibold text-forest hover:gap-2 transition-all"
          >
            Explore our programmes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
