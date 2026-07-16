"use client";

import Image from "next/image";
import {
  Compass,
  Landmark,
  MapPin,
  Mountain,
  Navigation,
  Snowflake,
  Sparkles,
  Waves,
} from "lucide-react";

import { tourismSection as tourismSectionData } from "@/data/tourism";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ReferencePopover } from "@/components/ui/ReferencePopover";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";
import { trackEvent } from "@/utils/analytics";

const categoryLabels = {
  city: "City",
  nature: "Natural Landscape",
  attraction: "Tourist Attraction",
};

const cityHighlights = [
  {
    icon: Landmark,
    cardClassName:
      "border-blue-200 bg-blue-50 text-slate-950",
    iconClassName: "bg-blue-700 text-white",
    eyebrowClassName: "text-blue-700",
    descriptionClassName: "text-slate-700",
    numberClassName: "text-blue-200/60",
  },
  {
    icon: Waves,
    cardClassName:
      "border-stone-200 bg-stone-100 text-slate-950",
    iconClassName: "bg-slate-900 text-stone-100",
    eyebrowClassName: "text-slate-700",
    descriptionClassName: "text-slate-700",
    numberClassName: "text-stone-300/70",
  },
  {
    icon: Snowflake,
    cardClassName:
      "border-sky-200 bg-sky-50 text-slate-950",
    iconClassName: "bg-sky-700 text-white",
    eyebrowClassName: "text-sky-700",
    descriptionClassName: "text-slate-700",
    numberClassName: "text-sky-200/70",
  },
];

export function TourismSection() {
  const { t, translate } = useI18n();
  const tourismSection = translate(tourismSectionData);

  return (
    <section
      id="tourism"
      className="scroll-mt-20 overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={tourismSection.eyebrow}
          title={tourismSection.title}
          description={tourismSection.description}
          className="[&_h2]:text-white [&_p:last-child]:text-slate-300"
        />

        {/* Featured destination */}
        <Reveal variant="fade-up">
          <article className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[32rem] overflow-hidden">
              <Image
                src={tourismSection.featured.image}
                alt={tourismSection.featured.imageAlt}
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-sm font-semibold backdrop-blur-md sm:left-8 sm:top-8">
              <Mountain size={18} className="text-red-400" aria-hidden="true" />
              {t("Featured Destination")}
            </div>

            {tourismSection.featured.reference && (
              <div className="absolute right-6 top-6 z-20 sm:right-8 sm:top-8">
                <ReferencePopover
                  reference={tourismSection.featured.reference}
                  variant="dark"
                  align="right"
                  placement="side"
                />
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                {tourismSection.featured.location}
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {tourismSection.featured.name}
              </h3>
            </div>
            </div>

            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-red-700/20 blur-3xl" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg">
                <Compass size={27} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {t(categoryLabels[tourismSection.featured.category])}
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {tourismSection.featured.name}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-400">
                <MapPin size={16} aria-hidden="true" />
                {tourismSection.featured.location}
              </div>

              <p className="mt-7 text-lg leading-8 text-slate-300">
                {tourismSection.featured.description}
              </p>
            </div>
            </div>
          </article>
        </Reveal>

        {/* Destination cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tourismSection.destinations.map((destination) => (
            <Reveal
              key={destination.id}
              className="h-full"
              variant={
                destination.category === "city" ? "fade-up" : "scale"
              }
            >
              <article className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                <div className="relative h-72 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/5 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  {t(categoryLabels[destination.category])}
                </div>

                {destination.reference && (
                  <div className="absolute right-5 top-5 z-20">
                    <ReferencePopover
                      reference={destination.reference}
                      variant="dark"
                      align="right"
                      placement="side"
                    />
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-400">
                    <MapPin size={14} aria-hidden="true" />
                    {destination.location}
                  </div>

                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                    {destination.name}
                  </h3>
                </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-slate-300">
                    {destination.description}
                  </p>

                  <a
                    href={destination.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("tourism_destination_click", {
                        destination_id: destination.id,
                        destination_name: destination.name,
                        destination_category: destination.category,
                        outbound_url: destination.websiteUrl,
                      })
                    }
                    aria-label={`${t("Discover this destination")}: ${destination.name}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition hover:text-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-300"
                  >
                    <Navigation size={16} aria-hidden="true" />
                    {t("Discover this destination")}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Natural landscapes */}
        <Reveal variant="fade-right">
          <article className="relative mt-20 overflow-hidden rounded-[2rem] bg-red-700 p-7 shadow-2xl sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 size-72 rounded-full border-[3rem] border-white/10" />

          <div className="absolute bottom-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-950/45 to-transparent" />

          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-red-700 shadow-lg">
                <Mountain size={27} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                {tourismSection.landscapes.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {tourismSection.landscapes.title}
              </h3>

              <p className="mt-6 leading-7 text-red-50">
                {tourismSection.landscapes.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {tourismSection.landscapes.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4"
                >
                  <Sparkles
                    size={18}
                    className="mt-0.5 shrink-0 text-white"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            </div>
          </article>
        </Reveal>

        {/* Famous cities */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              {tourismSection.cities.eyebrow}
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {tourismSection.cities.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {tourismSection.cities.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tourismSection.cities.items.map((city, index) => {
              const CityIcon = cityHighlights[index]?.icon ?? MapPin;
              const cardClassName =
                cityHighlights[index]?.cardClassName ??
                "border-white/10 bg-white/5";
              const iconClassName =
                cityHighlights[index]?.iconClassName ??
                "bg-slate-950 text-white";
              const eyebrowClassName =
                cityHighlights[index]?.eyebrowClassName ?? "text-red-700";
              const descriptionClassName =
                cityHighlights[index]?.descriptionClassName ?? "text-slate-700";
              const numberClassName =
                cityHighlights[index]?.numberClassName ?? "text-slate-200";

              return (
                <Reveal
                  key={city.name}
                  className="h-full"
                  variant={index === 1 ? "scale" : "fade-up"}
                  delay={index * 80}
                >
                  <article
                    className={`relative h-full overflow-hidden rounded-[2rem] border p-7 sm:p-8 ${cardClassName}`}
                  >
                    <div
                      className={`absolute -right-4 -top-8 text-[8rem] font-black leading-none ${numberClassName}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  <div className="relative">
                    <div
                      className={`flex size-12 items-center justify-center rounded-2xl shadow-lg ${iconClassName}`}
                    >
                      <CityIcon size={23} aria-hidden="true" />
                    </div>

                    <p
                      className={`mt-7 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowClassName}`}
                    >
                      {city.subtitle}
                    </p>

                    <h4 className="mt-3 text-3xl font-bold tracking-tight">
                      {city.name}
                    </h4>

                    <p className={`mt-5 leading-7 ${descriptionClassName}`}>
                      {city.description}
                    </p>
                  </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
