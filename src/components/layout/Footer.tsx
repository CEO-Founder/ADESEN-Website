import Link from "next/link";
import type { SVGProps } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { navLinks, org, footerLegal } from "@/lib/data/site";

// lucide-react intentionally ships no brand/social marks, so these four
// are hand-drawn as plain filled glyphs to match its visual weight
// elsewhere on the site, rather than mixing in bold-text abbreviations.
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9H16l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 2H21l-6.53 7.47L22 22h-6.16l-4.82-6.29L5.46 22H2.7l7-8.01L2 2h6.31l4.36 5.75L18.24 2Zm-1.08 18h1.71L7.02 3.9H5.19L17.16 20Z" />
    </svg>
  );
}
function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 21h-3.38v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.62-2.39 3.28V21H9.79V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2V21Z" />
    </svg>
  );
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.89 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.44 2.54c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2Zm0 3.5a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 1.8a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Zm5.02-1.98a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
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
            {org.contact.isPlaceholder ? (
              <li className="flex items-center gap-2 text-white/50">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>Email &amp; phone — to be confirmed</span>
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
          {org.contact.isPlaceholder ? (
            <p className="mt-2 text-xs italic text-white/40">
              Email and phone aren&apos;t confirmed yet — please use the contact form instead.
            </p>
          ) : null}
        </div>

        {org.social.isPlaceholder ? null : (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
              Follow ADESEN
            </h3>
            <div className="mt-4 flex gap-3">
              {[
                { href: org.social.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: org.social.x, label: "X (Twitter)", Icon: XIcon },
                { href: org.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                { href: org.social.instagram, label: "Instagram", Icon: InstagramIcon },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        )}
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
