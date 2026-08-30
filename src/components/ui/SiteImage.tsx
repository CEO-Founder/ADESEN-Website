import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Wraps next/image in the same aspect-ratio box PlaceholderImage used,
 * so swapping a placeholder for a real photo is a drop-in replacement.
 */
export function SiteImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  priority,
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", aspect, className)}>
      <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
    </div>
  );
}
