"use client";

import Image from "next/image";
import { Crown, Landmark, ScrollText, Shield } from "lucide-react";
import { ReferencePopover } from "@/components/ui/ReferencePopover";
import { historySection as historySectionData } from "@/data/history";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { useI18n } from "@/i18n/I18nProvider";

export function HistorySection() {
  const { t, translate } = useI18n();
  const historySection = translate(historySectionData);

  return (
    <section
      id="history"
      className="scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={historySection.eyebrow}
          title={historySection.title}
          description={historySection.description}
        />

        <Reveal variant="fade-up">
          <article className="mt-14 grid overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[30rem]">
            <Image
              src={historySection.featured.image}
              alt={historySection.featured.imageAlt}
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-transparent to-slate-950/20" />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:hidden" />
            </div>

            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-24 -top-24 size-72 rounded-full bg-red-700/15 blur-3xl" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg">
                <Shield size={26} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {historySection.featured.eyebrow}
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {historySection.featured.title}
              </h3>

              <div className="mt-7 space-y-5">
                {historySection.featured.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              {t("Historical Timeline")}
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {t("Key Moments in Norwegian History")}
            </h3>
          </div>

          <Timeline items={historySection.timeline} />
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <Reveal className="h-full" variant="fade-right">
            <article className="h-full rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-10">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-red-700 text-white">
                <Landmark size={24} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                {historySection.independence.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                {historySection.independence.title}
              </h3>

              <div className="mt-6 space-y-4">
                {historySection.independence.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal className="h-full" variant="fade-left" delay={80}>
            <article className="h-full rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl sm:p-10">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-white/10 text-white">
                <ScrollText size={24} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {historySection.achievements.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight">
                {historySection.achievements.title}
              </h3>

              <div className="mt-6 space-y-4">
                {historySection.achievements.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              {t("Famous Historical Figures")}
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {t("People Who Shaped Norway")}
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {historySection.figures.map((figure, index) => (
              <Reveal
                key={figure.id}
                className="h-full"
                variant={index % 2 === 0 ? "fade-up" : "scale"}
                delay={(index % 3) * 70}
              >
                <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-80 overflow-visible bg-slate-900">
                  <div className="absolute inset-0 overflow-hidden rounded-t-[2rem]">
                    <Image
                      src={figure.image}
                      alt={figure.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                  </div>

                  <div className="absolute inset-x-5 bottom-5 z-20 flex items-end justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-slate-950/65 text-white shadow-lg backdrop-blur-md">
                      <Crown size={20} aria-hidden="true" />
                    </div>

                    {figure.reference && (
                      <ReferencePopover
                        reference={figure.reference}
                        variant="dark"
                        align="right"
                        placement="side"
                      />
                    )}
                  </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                      {figure.role}
                    </p>

                    <h4 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                      {figure.name}
                    </h4>

                    <p className="mt-4 leading-7 text-slate-600">
                      {figure.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
