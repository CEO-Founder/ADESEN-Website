import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Programme } from "@/lib/data/programmes";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  const Icon = programme.icon;
  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-light text-forest">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy">{programme.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
        {programme.tagline}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
