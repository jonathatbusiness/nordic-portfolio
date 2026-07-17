import type { MetadataRoute } from "next";

import {
  getEnglishAlternateSlug,
  getPtBrAlternateSlug,
  seoPages,
  seoPagesPtBr,
  siteUrl,
} from "@/data/seoPages";

const lastModified = new Date("2026-07-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          "pt-BR": `${siteUrl}/pt-br/trabalho-escolar-sobre-a-noruega`,
        },
      },
    },
    ...seoPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${page.image}`],
      alternates: {
        languages: {
          en: `${siteUrl}/${page.slug}`,
          ...(getPtBrAlternateSlug(page.slug)
            ? {
                "pt-BR": `${siteUrl}/pt-br/${getPtBrAlternateSlug(page.slug)}`,
              }
            : {}),
        },
      },
    })),
    ...seoPagesPtBr.map((page) => ({
      url: `${siteUrl}/pt-br/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [`${siteUrl}${page.image}`],
      alternates: {
        languages: {
          "pt-BR": `${siteUrl}/pt-br/${page.slug}`,
          ...(getEnglishAlternateSlug(page.slug)
            ? {
                en: `${siteUrl}/${getEnglishAlternateSlug(page.slug)}`,
              }
            : {}),
        },
      },
    })),
  ];
}
