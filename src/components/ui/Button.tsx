import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gold text-navy hover:bg-gold-dark focus-visible:ring-gold",
        secondary:
          "bg-forest text-white hover:bg-forest-dark focus-visible:ring-forest",
        outline:
          "border-2 border-white text-white hover:bg-white hover:text-navy focus-visible:ring-white",
        ghost: "text-navy hover:bg-forest-light focus-visible:ring-forest",
      },
      size: {
        default: "px-6 py-3 text-base",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type Variants = VariantProps<typeof buttonVariants>;
type Shared = Variants & { className?: string; children: ReactNode };

// Renders as a Next.js <Link> when `href` is given, otherwise a <button>.
type LinkButtonProps = Shared & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className"
  >;

type NativeButtonProps = Shared & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ className, variant, size, children, ...rest }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { href: _unused, ...buttonProps } = rest as NativeButtonProps;
  void _unused;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
