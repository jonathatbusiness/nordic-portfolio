"use client";

import Image from "next/image";
import { ArrowDown, Images } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/i18n/I18nProvider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-slate-950 pt-20 text-white"
    >
      {/* Background image */}
      <Image
        src="/images/cover/hero-norway.webp"
        alt="Norwegian landscape, Vikings and Norwegian culture"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[52%_38%] sm:object-[52%_34%] lg:object-[52%_30%]"
      />

      {/* Soft global overlay */}
      <div className="absolute inset-0 bg-slate-950/15" />

      {/* Gradient concentrated behind the text */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-transparent" />

      {/* Subtle contrast at top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30" />

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            {t("Land of Vikings")}
          </p>

          <h1
            className="digital-glitch text-balance text-6xl font-black uppercase tracking-tight sm:text-7xl lg:text-9xl"
            data-text={t("Norway")}
          >
            {t("Norway")}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl">
            {t(
              "A land of breathtaking nature, rich history and strong traditions.",
            )}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
            {t(
              "From the classroom to the land of Vikings: an English project (3rd Year 1) by Mateus A. Caetani, 2026.",
            )}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#norway"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-700 px-6 font-semibold transition hover:bg-red-600"
            >
              {t("Explore the Portfolio")}
              <ArrowDown size={18} />
            </a>

            <a
              href="#gallery"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              <Images size={18} />
              {t("View Gallery")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
