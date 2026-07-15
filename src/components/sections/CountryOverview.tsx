import { Building2, CloudSnow, Compass, MapPinned, Ruler } from "lucide-react";

import { countryOverview } from "@/data/country";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CountryStat } from "@/types/portfolio";
import Image from "next/image";

const statIcons = {
  capital: Building2,
  area: Ruler,
  distance: Compass,
  climate: CloudSnow,
} satisfies Record<CountryStat["icon"], typeof Building2>;

export function CountryOverview() {
  return (
    <section
      id="norway"
      className="scroll-mt-20 overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={countryOverview.eyebrow}
          title={countryOverview.title}
          description={countryOverview.description}
        />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="h-full" variant="fade-right">
            <div className="relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
            <div className="relative min-h-[26rem] flex-1 overflow-hidden">
              <Image
                src="/images/country/norway-map.webp"
                alt="Map of Norway"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/10" />

              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-5 p-6 sm:p-8">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-slate-950/15 bg-white/80 text-slate-950 shadow-lg backdrop-blur-md">
                  <MapPinned size={27} aria-hidden="true" />
                </div>

                <span className="rounded-full border border-slate-950/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-lg backdrop-blur-md">
                  Northern Europe
                </span>
              </div>
            </div>

            <div className="relative bg-slate-950 px-7 py-5 sm:px-10 sm:py-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.24),transparent_44%),radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.26),transparent_45%)]" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
                  Norway
                </p>

                <p className="mt-2 max-w-lg text-lg leading-7 text-slate-200">
                  Located in the western part of the Scandinavian Peninsula,
                  extending from southern Scandinavia into the Arctic Circle.
                </p>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal className="h-full" variant="fade-left" delay={80}>
            <article className="h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-red-700 text-white">
                <MapPinned size={24} aria-hidden="true" />
              </div>

            <h3 className="mt-7 text-3xl font-bold tracking-tight text-slate-950">
              {countryOverview.location.title}
            </h3>

            <div className="mt-6 space-y-5">
              {countryOverview.location.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-7 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Sweden", "Finland", "Russia"].map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {country}
                </span>
              ))}
            </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {countryOverview.stats.map((stat) => {
            const Icon = statIcons[stat.icon];

            return (
              <InfoCard
                key={stat.id}
                label={stat.label}
                value={stat.value}
                description={stat.description}
                icon={Icon}
              />
            );
          })}
        </div>

        <Reveal variant="fade-up">
          <article className="relative mt-8 overflow-hidden rounded-[2rem] bg-red-700 text-white shadow-xl">
            <div className="absolute -right-20 -top-20 size-72 rounded-full border-[3rem] border-white/10" />

          <div className="absolute bottom-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-950/45 to-transparent" />

          <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-12">
            <div
              className="relative mx-auto aspect-[11/8] w-full max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-red-600 shadow-2xl"
              aria-label="Stylised representation of the Norwegian flag"
            >
              <div className="absolute inset-y-0 left-[30%] w-[18%] bg-white" />
              <div className="absolute inset-x-0 top-[38%] h-[25%] bg-white" />

              <div className="absolute inset-y-0 left-[34%] w-[10%] bg-blue-950" />
              <div className="absolute inset-x-0 top-[43%] h-[15%] bg-blue-950" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                National Symbol
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {countryOverview.flag.title}
              </h3>

              <div className="mt-6 space-y-4">
                {countryOverview.flag.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-3xl leading-7 text-red-50"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
