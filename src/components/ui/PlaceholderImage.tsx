import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type Variant = "forest" | "navy" | "gold" | "sage";

const variantStyles: Record<Variant, string> = {
  forest: "from-forest via-forest-dark to-navy",
  navy: "from-navy via-navy-light to-forest-dark",
  gold: "from-forest-dark via-navy to-navy-light",
  sage: "from-sage via-forest to-forest-dark",
};

/**
 * Branded placeholder used everywhere a real photograph will eventually go.
 * Renders as a themed gradient with an icon and a caption naming the photo
 * that should replace it — no external image requests, so it always
 * renders correctly and never shows a broken/mismatched stock photo.
 */
export function PlaceholderImage({
  label,
  icon: Icon = ImageIcon,
  variant = "forest",
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  icon?: LucideIcon;
  variant?: Variant;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-gradient-to-br text-cream",
        variantStyles[variant],
        aspect,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)",
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <Icon className="h-10 w-10 opacity-80" strokeWidth={1.5} />
        <p className="max-w-[220px] text-xs font-medium uppercase tracking-wide opacity-80">
          Photo placeholder — {label}
        </p>
      </div>
    </div>
  );
}
