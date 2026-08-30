import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Target, ListChecks, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { programmes, getProgrammeBySlug } from "@/lib/data/programmes";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  if (!programme) return {};
  return {
    title: programme.name,
    description: programme.rationale,
  };
}

export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  if (!programme) notFound();

  const Icon = programme.icon;

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All programmes
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              {programme.name}
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            {programme.rationale}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
              <ListChecks className="h-5 w-5 text-forest" /> Key activities
            </h2>
            <ul className="mt-4 space-y-3">
              {programme.activities.map((activity) => (
                <li key={activity} className="flex gap-3 text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {activity}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
              <Target className="h-5 w-5 text-forest" /> Targets (2026–2028)
            </h2>
            <ul className="mt-4 space-y-3">
              {programme.targets.map((target) => (
                <li key={target} className="flex gap-3 text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {target}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <PlaceholderImage label={`${programme.shortName} activity in Gatsibo District`} variant="sage" icon={Icon} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
              <TrendingUp className="h-5 w-5 text-forest" /> Impact focus
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              {programme.impactFocus}
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-white p-5 text-sm shadow-sm">
              <div>
                <dt className="font-semibold text-navy">NST2 pillar</dt>
                <dd className="mt-1 text-ink/70">{programme.nst2}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Vision 2050</dt>
                <dd className="mt-1 text-ink/70">{programme.vision2050}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">SDGs</dt>
                <dd className="mt-1 text-ink/70">{programme.sdgs}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-navy">
            Want to support this component?
          </h2>
          <div className="flex gap-4">
            <Button href="/partnerships">Partner with us</Button>
            <Button href="/programmes" variant="ghost">
              Explore other programmes
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
