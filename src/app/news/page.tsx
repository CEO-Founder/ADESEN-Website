import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Programme updates and stories from ADESEN's work in Gatsibo District, Rwanda.",
};

// Placeholder structure for future posts. Once real updates are ready,
// replace this array (or wire it to a CMS/markdown source) and each
// item will automatically render as a card below.
type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const newsItems: NewsItem[] = [];

export default function NewsPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            News & updates
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Stories from Gatsibo District
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            As programme activities roll out across the 14 sectors of
            Gatsibo District, updates and stories will be published here.
          </p>
        </div>
      </section>

      <Section>
        {newsItems.length === 0 ? (
          <Reveal className="mx-auto max-w-xl rounded-2xl border border-dashed border-black/10 bg-cream p-12 text-center">
            <Newspaper className="mx-auto h-10 w-10 text-forest" strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-bold text-navy">
              No updates published yet
            </h2>
            <p className="mt-2 text-ink/70">
              Check back soon for news from ADESEN&apos;s programme activities,
              or follow our social channels for the latest updates.
            </p>
          </Reveal>
        ) : (
          <>
            <SectionHeading title="Latest updates" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <article
                  key={item.slug}
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <time className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {item.date}
                  </time>
                  <h3 className="mt-2 text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
}
