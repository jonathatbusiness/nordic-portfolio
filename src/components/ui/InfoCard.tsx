"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

type InfoCardProps = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function InfoCard({
  label,
  value,
  description,
  icon: Icon,
  className,
}: InfoCardProps) {
  const { t } = useI18n();

  return (
    <Reveal className="h-full" variant="scale">
      <article
        className={cn(
          "group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl",
          className,
        )}
      >
        <div className="absolute right-0 top-0 size-28 translate-x-10 -translate-y-10 rounded-full bg-red-50 transition duration-300 group-hover:scale-125" />

        <div className="relative">
          <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
            {t(label)}
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
            {t(value)}
          </h3>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            {t(description)}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
