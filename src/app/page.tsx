import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { keyStats, org, mission, strategicAlignment } from "@/lib/data/site";
import { programmes } from "@/lib/data/programmes";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 15%, var(--color-gold) 0, transparent 35%), radial-gradient(circle at 85% 30%, var(--color-forest) 0, transparent 45%)",
          }}
        />
        <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-gold">
              Gatsibo District, Eastern Province, Rwanda · 2026–2028
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {org.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {org.shortName} delivers integrated, community-driven programmes in
              health, education, talent development, environmental protection
              and social protection — in partnership with Gatsibo District and
              the communities it serves.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/partnerships" size="lg">
                Partner with us
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact us
              </Button>
            </div>
          </div>
          <Reveal>
            <SiteImage
              src="/images/hero-community.jpg"
              alt="Community members in Gatsibo District, Rwanda"
              aspect="aspect-[5/4]"
              className="shadow-2xl"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Impact stats bar */}
      <section className="bg-forest">
        <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {keyStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </Container>
      </section>

      {/* Intro strip */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="An integrated approach to community development"
              description={mission}
            />
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:gap-2 transition-all"
            >
              Learn more about ADESEN <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <SiteImage
              src="/images/community-engagement.jpg"
              alt="Community engagement in Gatsibo District"
            />
          </Reveal>
        </div>
      </Section>

      {/* Programme components */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Our programmes"
          title="Five components, one integrated model"
          description="Each component reinforces the others — from household health and income, to education, talent, environment and rights."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme, i) => (
            <Reveal key={programme.slug} delay={i * 0.05}>
              <ProgrammeCard programme={programme} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Impact & alignment teaser */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SiteImage
              src="/images/tree-planting.jpg"
              alt="Tree-planting and agroforestry activity"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Impact & alignment"
              title="Locally grounded, nationally aligned"
              description="Every programme component is mapped to Rwanda's NST2 pillars, Vision 2050 goals and the Sustainable Development Goals — so local results add up to national transformation."
            />
            <ul className="mt-6 space-y-2 text-sm text-ink/80">
              {strategicAlignment.slice(0, 3).map((row) => (
                <li key={row.component} className="flex gap-2">
                  <span className="font-semibold text-navy">{row.component}:</span>
                  <span>{row.nst2}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/impact"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:gap-2 transition-all"
            >
              See full impact & alignment <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Partnership strip */}
      <Section className="bg-navy text-white">
        <SectionHeading
          eyebrow="Partnerships"
          title="Working hand in hand with Gatsibo District"
          description="ADESEN delivers every programme in partnership with Gatsibo District administration, national government bodies, the private sector, civil society and the communities themselves."
          align="center"
          className="mx-auto [&_h2]:text-white [&_p]:text-white/80"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold uppercase tracking-wide text-white/50">
          <span>Gatsibo District</span>
          <span>Government of Rwanda</span>
          <span>Development Partners</span>
          <span>Private Sector</span>
          <span>Civil Society</span>
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/partnerships" variant="primary">
            Explore our partnerships
          </Button>
        </div>
      </Section>

      {/* News preview */}
      <Section>
        <SectionHeading
          eyebrow="News & updates"
          title="Latest from the field"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 rounded-2xl border border-dashed border-black/10 bg-cream p-10 text-center">
          <p className="text-ink/70">
            Programme updates and stories from Gatsibo District will be posted
            here as activities roll out.
          </p>
          <Link
            href="/news"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:gap-2 transition-all"
          >
            Visit the news page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CTA banner */}
      <Section className="bg-gold-dark">
        <div className="flex flex-col items-center gap-6 text-center text-navy">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Join us in transforming Gatsibo District
          </h2>
          <p className="max-w-xl text-navy/80">
            Whether you are a donor, government partner, private sector actor
            or community member — there is a role for you in this work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/partnerships" variant="secondary">
              Partner with us
            </Button>
            <Button href="/contact" variant="ghost" className="bg-white">
              Contact us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
