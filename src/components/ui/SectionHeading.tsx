"use client";

import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { t } = useI18n();

  return (
    <Reveal variant="fade-up">
      <div
        className={cn(
          "max-w-3xl",
          align === "center" && "mx-auto text-center",
          className,
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-red-700">
            {t(eyebrow)}
          </p>
        )}

        <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {t(title)}
        </h2>

        {description && (
          <p className="mt-5 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            {t(description)}
          </p>
        )}
      </div>
    </Reveal>
  );
}
