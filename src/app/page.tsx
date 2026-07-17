import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CountryOverview } from "@/components/sections/CountryOverview";
import { CultureSection } from "@/components/sections/CultureSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { FootballSection } from "@/components/sections/FootballSection";
import { LanguageSocietySection } from "@/components/sections/LanguageSocietySection";
import { TourismSection } from "@/components/sections/TourismSection";
import { CuriositySection } from "@/components/sections/CuriositySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { seoPages, seoPagesPtBr, siteUrl } from "@/data/seoPages";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Norway Student Portfolio",
    url: siteUrl,
    description:
      "A student-made English portfolio about Norway's history, culture, Vikings, fjords, tourism, football, language, geography and society.",
    inLanguage: ["en", "pt-BR"],
    hasPart: [
      ...seoPages.map((page) => ({
        "@type": "WebPage",
        name: page.shortTitle,
        url: `${siteUrl}/${page.slug}`,
        description: page.description,
        inLanguage: "en",
      })),
      ...seoPagesPtBr.map((page) => ({
        "@type": "WebPage",
        name: page.shortTitle,
        url: `${siteUrl}/pt-br/${page.slug}`,
        description: page.description,
        inLanguage: "pt-BR",
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <Hero />
        <CountryOverview />
        <CultureSection />
        <HistorySection />
        <FootballSection />
        <LanguageSocietySection />
        <TourismSection />
        <CuriositySection />
        <GallerySection />
      </main>

      <Footer />
    </>
  );
}
