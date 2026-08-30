import Link from "next/link";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 shrink-0"
      aria-label="ADESEN — home"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full",
          inverted ? "bg-gold text-navy" : "bg-forest text-white"
        )}
      >
        <Leaf className="h-5 w-5" strokeWidth={2} />
      </span>
      <span
        className={cn(
          "font-heading text-xl font-bold tracking-tight",
          inverted ? "text-white" : "text-navy"
        )}
      >
        ADESEN
      </span>
    </Link>
  );
}
