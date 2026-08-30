"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  // Trap focus inside the open mobile menu and close it on Escape,
  // returning focus to the toggle button — otherwise a keyboard user
  // can tab straight out of the menu into the page behind it.
  useEffect(() => {
    if (!open) return;

    const focusable = mobileNavRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Logo priority />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-ink/80 transition-colors hover:text-forest",
                  active && "text-forest font-semibold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/partnerships" size="sm">
            Partner with us
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          ref={mobileNavRef}
          className="border-t border-black/5 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-navy hover:bg-forest-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <Button href="/partnerships" className="w-full" onClick={() => setOpen(false)}>
              Partner with us
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
