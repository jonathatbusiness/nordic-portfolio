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

export default function HomePage() {
  return (
    <>
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
