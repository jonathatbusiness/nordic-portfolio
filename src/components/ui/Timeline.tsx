import { cn } from "@/utils/cn";
import type { HistoryTimelineItem } from "@/types/portfolio";
import { Reveal } from "@/components/ui/Reveal";

type TimelineProps = {
  items: HistoryTimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute bottom-2 left-[0.6875rem] top-2 w-px bg-slate-300 sm:left-1/2 sm:-translate-x-1/2" />

      <div className="space-y-10">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const variant = isEven ? "fade-right" : "fade-left";

          return (
            <Reveal
              key={item.id}
              variant={variant}
              rootMargin="0px 0px -58% 0px"
              delay={index % 2 === 0 ? 0 : 80}
            >
              <article className="relative grid gap-6 pl-10 sm:grid-cols-2 sm:pl-0">
                <div
                  className={cn(
                    "absolute left-0 top-2 z-10 flex size-6 items-center justify-center rounded-full border-4 border-white bg-red-700 shadow-md sm:left-1/2 sm:-translate-x-1/2",
                  )}
                />

                <div
                  className={cn(
                    "sm:pr-10",
                    isEven
                      ? "sm:col-start-1 sm:text-right"
                      : "sm:col-start-2 sm:pl-10",
                  )}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                    {item.period}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
