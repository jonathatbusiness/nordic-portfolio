import {
  Building2,
  CloudSnow,
  Compass,
  Map,
  MapPinned,
  Ruler,
} from "lucide-react";

import { countryOverview } from "@/data/country";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CountryStat } from "@/types/portfolio";

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
          <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.45),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.42),transparent_42%)]" />

            <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative flex h-full min-h-[28rem] flex-col justify-between p-7 sm:p-10">
              <div className="flex items-center justify-between gap-5">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                  <MapPinned size={27} aria-hidden="true" />
                </div>

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-sm">
                  Northern Europe
                </span>
              </div>

              <div className="my-12 flex flex-1 items-center justify-center">
                <div className="relative flex aspect-square w-full max-w-72 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <div className="absolute inset-5 rounded-full border border-dashed border-white/15" />

                  <Map
                    size={108}
                    strokeWidth={0.8}
                    className="text-white/80"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
                  Norway
                </p>

                <p className="mt-3 max-w-lg text-lg leading-7 text-slate-200">
                  Located in the western part of the Scandinavian Peninsula,
                  extending from southern Scandinavia into the Arctic Circle.
                </p>
              </div>
            </div>
          </div>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
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
      </Container>
    </section>
  );
}
