import {
  Accessibility,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  BusFront,
  CircleAlert,
  Languages,
  Lightbulb,
  MapPin,
  MessageCircleMore,
  Quote,
  Ship,
  Sparkles,
} from "lucide-react";
import { SpeakButton } from "@/components/ui/SpeakButton";

import { languageSocietySection } from "@/data/languageSociety";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SocietyStat, SocietyTopic } from "@/types/portfolio";

const statIcons = {
  currency: Banknote,
  economy: BriefcaseBusiness,
  quality: Building2,
  technology: Lightbulb,
} satisfies Record<SocietyStat["icon"], typeof Banknote>;

const topicIcons = {
  challenges: CircleAlert,
  transport: BusFront,
} satisfies Record<SocietyTopic["icon"], typeof CircleAlert>;

export function LanguageSocietySection() {
  return (
    <section
      id="language-society"
      className="scroll-mt-20 overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={languageSocietySection.eyebrow}
          title={languageSocietySection.title}
          description={languageSocietySection.description}
        />

        {/* Language introduction */}
        <Reveal variant="fade-up">
          <article className="relative mt-14 overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
            <div className="absolute -right-24 -top-24 size-80 rounded-full bg-red-700/20 blur-3xl" />

          <div className="absolute bottom-0 left-0 size-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-700/20 blur-3xl" />

          <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700 shadow-lg">
                <Languages size={27} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {languageSocietySection.language.eyebrow}
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {languageSocietySection.language.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {languageSocietySection.language.description}
              </p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Official languages
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  {languageSocietySection.language.officialLanguages.map(
                    (language) => (
                      <span
                        key={language}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                      >
                        {language}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Norge pronunciation */}
            <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-7 sm:p-9">
              <div className="absolute -right-8 -top-8 text-white/[0.04]">
                <Quote size={180} strokeWidth={1} aria-hidden="true" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <MapPin size={23} aria-hidden="true" />
                  </div>

                  <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Country name
                  </span>
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
                  Norway in Norwegian
                </p>

                <p className="mt-3 text-7xl font-black tracking-tight sm:text-8xl">
                  {languageSocietySection.language.countryName.norwegian}
                </p>

                <SpeakButton
                  text={languageSocietySection.language.countryName.norwegian}
                  label="Listen to the pronunciation of Norge"
                  displayText={`Pronunciation: ${languageSocietySection.language.countryName.pronunciation}`}
                  lang="nb-NO"
                  rate={0.78}
                  className="mt-6 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 hover:border-red-400/50 hover:bg-white/10 hover:text-white"
                  iconClassName="text-red-400"
                  activeClassName="border-red-500 bg-red-700/20 text-white"
                />
              </div>

              <p className="relative mt-8 leading-7 text-slate-400">
                {languageSocietySection.language.countryName.description}
              </p>
            </div>
          </div>
          </article>
        </Reveal>

        {/* Expressions */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {languageSocietySection.language.expressions.map((expression, index) => (
            <Reveal
              key={expression.id}
              className="h-full"
              variant={index % 2 === 0 ? "fade-up" : "scale"}
              delay={index * 60}
            >
              <article className="relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-red-200 hover:shadow-md">
                <div className="absolute -right-8 -top-8 size-28 rounded-full bg-red-50" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <MessageCircleMore size={21} aria-hidden="true" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {expression.english}
                  </span>
                </div>

                <p className="mt-7 text-4xl font-black tracking-tight text-slate-950">
                  {expression.norwegian}
                </p>

                <SpeakButton
                  text={expression.norwegian}
                  label={`Listen to ${expression.norwegian}`}
                  displayText={expression.pronunciation}
                  lang="nb-NO"
                  rate={0.8}
                  className="mt-3 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 shadow-sm hover:border-red-300 hover:bg-red-100 hover:text-red-800"
                  iconClassName="text-red-600"
                  activeClassName="border-red-400 bg-red-100 text-red-800"
                />

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {expression.meaning}
                </p>
              </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Economy */}
        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              {languageSocietySection.economy.eyebrow}
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {languageSocietySection.economy.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {languageSocietySection.economy.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {languageSocietySection.economy.stats.map((stat) => {
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
        </div>

        {/* Industries and companies */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal className="h-full" variant="fade-right">
            <article className="h-full rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl sm:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700">
                <Ship size={26} aria-hidden="true" />
              </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Principal Economic Activities
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight">
              Major Norwegian Industries
            </h3>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {languageSocietySection.economy.industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Sparkles
                    size={18}
                    className="mt-0.5 shrink-0 text-red-400"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-medium leading-6 text-slate-200">
                    {industry}
                  </p>
                </div>
              ))}
            </div>
            </article>
          </Reveal>

          <Reveal className="h-full" variant="fade-left" delay={80}>
            <article className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-red-50" />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-red-700 text-white">
                <Building2 size={26} aria-hidden="true" />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Technology & Companies
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Norwegian Companies
              </h3>

              <p className="mt-6 leading-7 text-slate-600">
                Several Norwegian companies operate internationally in energy,
                telecommunications, finance, engineering and sustainable
                technology.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {languageSocietySection.economy.companies.map((company) => (
                  <span
                    key={company}
                    className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
            </article>
          </Reveal>
        </div>

        {/* Challenges and transport */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {languageSocietySection.topics.map((topic) => {
            const Icon = topicIcons[topic.icon];
            const isTransport = topic.id === "transport-accessibility";

            return (
              <Reveal
                key={topic.id}
                className="h-full"
                variant={isTransport ? "fade-left" : "fade-right"}
              >
                <article
                  className={
                    isTransport
                      ? "h-full rounded-[2rem] bg-red-700 p-7 text-white shadow-xl sm:p-10"
                      : "h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
                  }
                >
                  <div
                    className={
                      isTransport
                        ? "flex size-14 items-center justify-center rounded-2xl bg-white text-red-700"
                        : "flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-white"
                    }
                  >
                    <Icon size={26} aria-hidden="true" />
                  </div>

                <p
                  className={
                    isTransport
                      ? "mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-100"
                      : "mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-700"
                  }
                >
                  {topic.eyebrow}
                </p>

                <h3
                  className={
                    isTransport
                      ? "mt-3 text-3xl font-bold tracking-tight text-white"
                      : "mt-3 text-3xl font-bold tracking-tight text-slate-950"
                  }
                >
                  {topic.title}
                </h3>

                <p
                  className={
                    isTransport
                      ? "mt-6 leading-7 text-red-50"
                      : "mt-6 leading-7 text-slate-600"
                  }
                >
                  {topic.description}
                </p>

                <div className="mt-7 space-y-3">
                  {topic.items.map((item) => (
                    <div
                      key={item}
                      className={
                        isTransport
                          ? "flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4"
                          : "flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                      }
                    >
                      {isTransport ? (
                        <Accessibility
                          size={19}
                          className="mt-0.5 shrink-0 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <BookOpen
                          size={19}
                          className="mt-0.5 shrink-0 text-red-700"
                          aria-hidden="true"
                        />
                      )}

                      <p
                        className={
                          isTransport
                            ? "text-sm font-medium leading-6 text-white"
                            : "text-sm font-medium leading-6 text-slate-700"
                        }
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
