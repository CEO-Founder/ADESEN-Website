import type { Metadata } from "next";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Analytics } from "@/components/Analytics";

const siteUrl = "https://www.adesen.rw";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ADESEN — Community Development in Gatsibo District, Rwanda",
    template: "%s | ADESEN",
  },
  description:
    "ADESEN improves the well-being of vulnerable populations in Gatsibo District, Rwanda through integrated programmes in health, education, talent development, environmental protection and social protection (2026–2028).",
  keywords: [
    "ADESEN",
    "Gatsibo District",
    "Rwanda NGO",
    "community development Rwanda",
    "NST2",
    "Vision 2050",
  ],
  openGraph: {
    title: "ADESEN — Community Development in Gatsibo District, Rwanda",
    description:
      "Integrated, community-driven programmes in health, education, talent, environment and social protection — reaching 10,000+ beneficiaries in Gatsibo District, Rwanda (2026–2028).",
    url: siteUrl,
    siteName: "ADESEN",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADESEN — Community Development in Gatsibo District, Rwanda",
    description:
      "Integrated, community-driven programmes in health, education, talent, environment and social protection in Gatsibo District, Rwanda.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
