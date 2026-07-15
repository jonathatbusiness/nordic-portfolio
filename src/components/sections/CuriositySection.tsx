import Image from "next/image";
import {
  ArrowUpRight,
  Lightbulb,
  Mountain,
  Route,
  Sparkles,
  SunMedium,
} from "lucide-react";

import { curiositySection } from "@/data/curiosity";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CuriosityFact } from "@/types/portfolio";

const factIcons = {
  sun: SunMedium,
  tunnel: Route,
  island: Mountain,
} satisfies Record<CuriosityFact["icon"], typeof SunMedium>;

export function CuriositySection() {
  return (
    <section
      id="curiosity"
      className="scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={curiositySection.eyebrow}
          title={curiositySection.title}
          description={curiositySection.description}
        />

        <article className="mt-14 grid overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[32rem] overflow-hidden">
            <Image
              src={curiositySection.featured.image}
              alt={curiositySection.featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/10" />

            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-sm font-semibold backdrop-blur-md sm:left-8 sm:top-8">
              <Sparkles size={17} className="text-red-400" aria-hidden="true" />
              Natural Phenomenon
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                Midnight Sun
              </p>

              <p className="mt-2 text-3xl font-bold">Northern Norway</p>
            </div>
          </div>

          <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-red-700/20 blur-3xl" />

            <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-700/20 blur-3xl" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700 shadow-lg">
                <Lightbulb size={27} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {curiositySection.featured.eyebrow}
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {curiositySection.featured.title}
              </h3>

              <p className="mt-7 text-lg leading-8 text-slate-300">
                {curiositySection.featured.description}
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <SunMedium
                    size={24}
                    className="mt-0.5 shrink-0 text-red-400"
                    aria-hidden="true"
                  />

                  <p className="font-semibold leading-7 text-white">
                    {curiositySection.featured.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {curiositySection.facts.map((fact) => {
            const Icon = factIcons[fact.icon];

            return (
              <article
                key={fact.id}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl sm:p-8"
              >
                <div className="absolute -right-10 -top-10 size-36 rounded-full bg-red-50 transition duration-300 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon size={24} aria-hidden="true" />
                    </div>

                    <ArrowUpRight
                      size={21}
                      className="text-slate-300 transition duration-300 group-hover:text-red-700"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                    {fact.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    {fact.value}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    {fact.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
