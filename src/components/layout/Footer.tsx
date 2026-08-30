import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { navLinks, org, footerLegal } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {org.fullName}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {org.hq.lines.join(", ")}
                <br />
                <span className="text-white/60">
                  Programme office: {org.programmeOffice.lines.join(", ")}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${org.contact.email}`} className="hover:text-white">
                {org.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${org.contact.phone}`} className="hover:text-white">
                {org.contact.phone}
              </a>
            </li>
          </ul>
          {org.contact.isPlaceholder ? (
            <p className="mt-2 text-xs italic text-white/40">
              Email and phone shown are placeholders — replace with confirmed details.
            </p>
          ) : null}
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Follow ADESEN
          </h3>
          <div className="mt-4 flex gap-3">
            {[
              { href: org.social.facebook, label: "Facebook", short: "f" },
              { href: org.social.x, label: "X (Twitter)", short: "x" },
              { href: org.social.linkedin, label: "LinkedIn", short: "in" },
              { href: org.social.instagram, label: "Instagram", short: "ig" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold uppercase hover:bg-white/20"
              >
                {s.short}
              </a>
            ))}
          </div>
          {org.social.isPlaceholder ? (
            <p className="mt-3 text-xs italic text-white/40">
              Social links are placeholders until accounts are created.
            </p>
          ) : null}
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerLegal}</p>
          <p>© {new Date().getFullYear()} ADESEN. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
