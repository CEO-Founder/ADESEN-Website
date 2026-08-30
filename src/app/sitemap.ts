import type { MetadataRoute } from "next";
import { programmes } from "@/lib/data/programmes";

const siteUrl = "https://www.adesen.rw";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/programmes",
    "/impact",
    "/partnerships",
    "/news",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const programmeRoutes = programmes.map((p) => ({
    url: `${siteUrl}/programmes/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...programmeRoutes];
}
