import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import {
  getEnglishAlternateSlug,
  getSeoPagePtBr,
  seoPagesPtBr,
  siteUrl,
} from "@/data/seoPages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seoPagesPtBr.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPagePtBr(slug);

  if (!page) {
    return {};
  }

  const englishSlug = getEnglishAlternateSlug(page.slug);

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `/pt-br/${page.slug}`,
      languages: {
        "pt-BR": `/pt-br/${page.slug}`,
        ...(englishSlug ? { en: `/${englishSlug}` } : {}),
      },
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `${siteUrl}/pt-br/${page.slug}`,
      title: page.title,
      description: page.description,
      siteName: "Portfólio Escolar Sobre a Noruega",
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}

export default async function SeoArticlePagePtBr({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPagePtBr(slug);

  if (!page) {
    notFound();
  }

  const relatedPages = seoPagesPtBr.filter((item) => item.slug !== page.slug);
  const articleUrl = `${siteUrl}/pt-br/${page.slug}`;
  const englishSlug = getEnglishAlternateSlug(page.slug);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.description,
      image: `${siteUrl}${page.image}`,
      mainEntityOfPage: articleUrl,
      inLanguage: "pt-BR",
      author: {
        "@type": "Person",
        name: "Mateus A. Caetani",
      },
      publisher: {
        "@type": "Person",
        name: "Mateus A. Caetani",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "pt-BR",
      mainEntity: page.questions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Portfólio Escolar Sobre a Noruega",
          item: `${siteUrl}/pt-br/${page.slug}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.shortTitle,
          item: articleUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="relative overflow-hidden bg-slate-950 pt-24 text-white">
          <Image
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />

          <Container className="relative z-10 py-20 sm:py-24">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300 transition hover:text-red-200"
            >
              Portfólio Escolar Sobre a Noruega
            </Link>

            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black uppercase sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>

            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-200">
              {page.description}
            </p>

            {englishSlug && (
              <Link
                href={`/${englishSlug}`}
                className="mt-8 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Read in English
              </Link>
            )}
          </Container>
        </section>

        <Container className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-20">
          <div className="space-y-12">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Perguntas rápidas
              </h2>

              <div className="mt-6 space-y-4">
                {page.questions.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-950">
                      {item.question}
                    </summary>
                    <p className="mt-3 leading-7 text-slate-700">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">
                Mais guias sobre a Noruega
              </h2>

              <div className="mt-4 flex flex-col gap-3">
                {relatedPages.slice(0, 5).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/pt-br/${item.slug}`}
                    className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-800"
                  >
                    {item.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </article>
      </main>

      <Footer />
    </>
  );
}
