import { Drum, Music2, Shirt, Soup, Sparkles } from "lucide-react";

import { cultureSection } from "@/data/culture";
import { Container } from "@/components/ui/Container";
import { ImageCard } from "@/components/ui/ImageCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const itemIcons = {
  "typical-food": Soup,
  "traditional-music": Music2,
  "traditional-instrument": Music2,
  "traditional-dance": Drum,
  "traditional-clothes": Shirt,
};

export function CultureSection() {
  const featuredItem = cultureSection.items.find((item) => item.featured);

  const secondaryItems = cultureSection.items.filter((item) => !item.featured);

  return (
    <section
      id="culture"
      className="scroll-mt-20 overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow={cultureSection.eyebrow}
          title={cultureSection.title}
          description={cultureSection.description}
          className="[&_h2]:text-white [&_p:last-child]:text-slate-300"
        />

        {featuredItem && (
          <Reveal variant="fade-up">
            <article className="group mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
              <ImageCard
                src={featuredItem.image}
                alt={featuredItem.imageAlt}
                className="min-h-[24rem] lg:min-h-full"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />

              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="absolute -right-20 -top-20 size-60 rounded-full bg-red-700/10 blur-3xl" />

                <div className="relative">
                  <div className="flex size-13 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg">
                    <Soup size={24} aria-hidden="true" />
                  </div>

                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                    {featuredItem.eyebrow}
                  </p>

                  <h3 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {featuredItem.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-300">
                    {featuredItem.summary}
                  </p>

                  <div className="mt-7 space-y-4">
                    {featuredItem.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-7 text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {featuredItem.facts && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {featuredItem.facts.map((fact) => (
                        <span
                          key={fact}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                        >
                          {fact}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {secondaryItems.map((item) => {
            const Icon = itemIcons[item.id];

            return (
              <Reveal
                key={item.id}
                className="h-full"
                variant={item.id === "traditional-dance" ? "fade-left" : "scale"}
                delay={item.id === "traditional-instrument" ? 80 : 0}
              >
                <article className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                  <ImageCard
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-72"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                        {item.eyebrow}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-300">
                    {item.summary}
                  </p>

                  <div className="mt-6 space-y-4">
                    {item.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-6 text-slate-400"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {item.facts && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.facts.map((fact) => (
                        <span
                          key={fact}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-medium text-slate-300"
                        >
                          <Sparkles
                            size={13}
                            className="text-red-400"
                            aria-hidden="true"
                          />

                          {fact}
                        </span>
                      ))}
                    </div>
                  )}
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
