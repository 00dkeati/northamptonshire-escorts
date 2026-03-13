import { MetadataRoute } from "next";
import { towns, escortTypes, serviceTypes } from "@/data/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://northamptonshireescorts.agency";
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/escorts`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Town pages (old /locations/[slug] format)
  const locationPages: MetadataRoute.Sitemap = towns.map((town) => ({
    url: `${baseUrl}/locations/${town.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Town index pages (new /[town] format)
  const townIndexPages: MetadataRoute.Sitemap = towns.map((town) => ({
    url: `${baseUrl}/${town.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Town + Type pages
  const townTypePages: MetadataRoute.Sitemap = [];
  for (const town of towns) {
    // Escort types
    for (const escortType of escortTypes) {
      townTypePages.push({
        url: `${baseUrl}/${town.slug}/${escortType.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    }
    // Service types
    for (const serviceType of serviceTypes) {
      townTypePages.push({
        url: `${baseUrl}/${town.slug}/${serviceType.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    }
  }

  return [...staticPages, ...locationPages, ...townIndexPages, ...townTypePages];
}
