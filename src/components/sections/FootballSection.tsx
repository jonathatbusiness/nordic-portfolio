"use client";

import Image from "next/image";
import {
  Award,
  CircleDot,
  Flag,
  Goal,
  MapPin,
  Medal,
  Megaphone,
  Shield,
  Shirt,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import { footballSection as footballSectionData } from "@/data/football";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { ReferencePopover } from "@/components/ui/ReferencePopover";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";
import type { FootballStat } from "@/types/portfolio";

const statIcons = {
  shirt: Shirt,
  goal: Goal,
  trophy: Trophy,
  stadium: MapPin,
} satisfies Record<FootballStat["icon"], typeof Shirt>;

export function FootballSection() {
  const { t, translate } = useI18n();
  const footballSection = translate(footballSectionData);

  return (
    <section
      id="football"
      className="scroll-mt-20 overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={footballSection.eyebrow}
          title={footballSection.title}
          description={footballSection.description}
          className="[&_h2]:text-white [&_p:last-child]:text-slate-300"
        />

        {/* Featured player */}
        <Reveal variant="fade-up">
          <article className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[34rem] overflow-hidden">
            <Image
              src={footballSection.featuredPlayer.image}
              alt={footballSection.featuredPlayer.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-sm font-semibold backdrop-blur-md sm:left-8 sm:top-8">
              <Flag size={17} className="text-red-400" aria-hidden="true" />
              {t("Norway")}
            </div>

            {footballSection.featuredPlayer.reference && (
              <div className="absolute right-6 top-6 z-20 sm:right-8 sm:top-8">
                <ReferencePopover
                  reference={footballSection.featuredPlayer.reference}
                  variant="dark"
                  align="right"
                  placement="side"
                />
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                {footballSection.featuredPlayer.position}
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {footballSection.featuredPlayer.name}
              </h3>
            </div>
            </div>

            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-24 -top-24 size-72 rounded-full bg-red-700/20 blur-3xl" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700 shadow-lg">
                <Shirt size={26} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {footballSection.featuredPlayer.eyebrow}
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {footballSection.featuredPlayer.name}
              </h3>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                {footballSection.featuredPlayer.position}
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-200">
                {footballSection.featuredPlayer.summary}
              </p>

              <div className="mt-7 space-y-4">
                {footballSection.featuredPlayer.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {footballSection.featuredPlayer.facts.map((fact) => (
                  <span
                    key={fact}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    <Sparkles
                      size={14}
                      className="text-red-400"
                      aria-hidden="true"
                    />

                    {fact}
                  </span>
                ))}
              </div>
            </div>
            </div>
          </article>
        </Reveal>

        {/* Statistics */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {footballSection.stats.map((stat) => {
            const Icon = statIcons[stat.icon];

            return (
              <InfoCard
                key={stat.id}
                label={stat.label}
                value={stat.value}
                description={stat.description}
                icon={Icon}
                className="border-white/10 bg-white text-slate-950"
              />
            );
          })}
        </div>

        {/* World Cup history */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              {footballSection.worldCup.eyebrow}
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {footballSection.worldCup.title}
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              {footballSection.worldCup.description}
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-white/15 lg:left-0 lg:top-1/2 lg:h-px lg:w-full lg:-translate-y-1/2" />

            <div className="relative grid gap-6 lg:grid-cols-4">
              {footballSection.worldCup.appearances.map((appearance, index) => (
                <Reveal
                  key={appearance.year}
                  variant={index % 2 === 0 ? "fade-up" : "scale"}
                  delay={index * 60}
                >
                  <article className="relative ml-12 rounded-[1.75rem] border border-white/10 bg-slate-900 p-6 shadow-lg lg:ml-0 lg:mt-0">
                    <div
                      className={`absolute -left-[3.15rem] top-6 flex size-6 items-center justify-center rounded-full border-4 border-slate-950 lg:-top-[2.65rem] lg:left-6 ${
                        appearance.highlighted ? "bg-red-600" : "bg-slate-500"
                      }`}
                    />

                    <p className="text-4xl font-black tracking-tight text-white">
                      {appearance.year}
                    </p>

                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-red-400">
                      {appearance.result}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {appearance.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Brazil match */}
        <Reveal variant="fade-right">
          <article className="mt-20 grid overflow-hidden rounded-[2rem] bg-red-700 shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[26rem]">
            <Image
              src={footballSection.brazilMatch.image}
              alt={footballSection.brazilMatch.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 via-transparent to-red-950/40" />

            {footballSection.brazilMatch.reference && (
              <div className="absolute right-6 top-6 z-20 sm:right-8 sm:top-8">
                <ReferencePopover
                  reference={footballSection.brazilMatch.reference}
                  variant="dark"
                  align="right"
                  placement="side"
                />
              </div>
            )}
            </div>

            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full border-[3rem] border-white/10" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-red-700 shadow-xl">
                <Goal size={27} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                {footballSection.brazilMatch.eyebrow}
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {footballSection.brazilMatch.title}
              </h3>

              <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-3">
                <p className="text-7xl font-black tracking-tighter sm:text-8xl">
                  {footballSection.brazilMatch.score}
                </p>

                <p className="pb-2 text-sm font-semibold uppercase tracking-[0.16em] text-red-100">
                  {footballSection.brazilMatch.date}
                </p>
              </div>

              <p className="mt-7 max-w-2xl leading-7 text-red-50">
                {footballSection.brazilMatch.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {footballSection.brazilMatch.scorers.map((scorer) => (
                  <span
                    key={scorer}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold"
                  >
                    <CircleDot size={14} aria-hidden="true" />
                    {scorer}
                  </span>
                ))}
              </div>
            </div>
            </div>
          </article>
        </Reveal>

        {/* Rivalries and women’s team */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal className="h-full" variant="fade-right">
            <article className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                <Shield size={25} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {footballSection.rivalries.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight">
                {footballSection.rivalries.title}
              </h3>

              <p className="mt-6 leading-7 text-slate-300">
                {footballSection.rivalries.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {footballSection.rivalries.countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold"
                  >
                    {t("Norway")} vs {t(country)}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal className="h-full" variant="fade-left" delay={80}>
            <article className="relative h-full overflow-hidden rounded-[2rem] bg-white p-7 text-slate-950 sm:p-10">
              <div className="absolute -right-16 -top-16 size-52 rounded-full bg-red-100" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700 text-white">
                <Medal size={26} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                {footballSection.womenTeam.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight">
                {footballSection.womenTeam.title}
              </h3>

              <p className="mt-6 leading-7 text-slate-600">
                {footballSection.womenTeam.description}
              </p>

              <div className="mt-7 space-y-3">
                {footballSection.womenTeam.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                  >
                    <Award
                      size={20}
                      className="mt-0.5 shrink-0 text-red-700"
                      aria-hidden="true"
                    />

                    <p className="text-sm font-semibold leading-6 text-slate-700">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </article>
          </Reveal>
        </div>

        {/* Supporters */}
        <Reveal variant="fade-up">
          <article className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[30rem]">
            <Image
              src={footballSection.supporters.image}
              alt={footballSection.supporters.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

            {footballSection.supporters.reference && (
              <div className="absolute right-6 top-6 z-20 sm:right-8 sm:top-8">
                <ReferencePopover
                  reference={footballSection.supporters.reference}
                  variant="dark"
                  align="right"
                  placement="side"
                />
              </div>
            )}

            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/15 bg-slate-950/65 px-5 py-3 backdrop-blur-md sm:bottom-8 sm:left-8">
              <Users size={19} aria-hidden="true" />

              <span className="font-semibold">{t("Norwegian Supporters")}</span>
            </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700">
                <Megaphone size={26} aria-hidden="true" />
              </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              {footballSection.supporters.eyebrow}
            </p>

            <h3 className="mt-3 text-4xl font-bold tracking-tight">
              {footballSection.supporters.title}
            </h3>

            <div className="mt-7 space-y-4">
              {footballSection.supporters.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-7 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {footballSection.supporters.traditions.map((tradition) => (
                <span
                  key={tradition}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {tradition}
                </span>
              ))}
            </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
