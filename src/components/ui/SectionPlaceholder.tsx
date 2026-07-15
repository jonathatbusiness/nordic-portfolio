import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";

type SectionPlaceholderProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
};

export function SectionPlaceholder({
  id,
  eyebrow,
  title,
  description,
  dark = false,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-24 sm:py-32",
        dark ? "bg-slate-950 text-white" : "bg-white text-slate-950",
      )}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className={cn(
            dark && "[&_h2]:text-white [&_p:last-child]:text-slate-300",
          )}
        />

        <div
          className={cn(
            "mt-12 min-h-64 rounded-3xl border border-dashed p-8",
            dark
              ? "border-white/20 bg-white/5"
              : "border-slate-300 bg-slate-50",
          )}
        >
          <p
            className={cn(
              "text-sm",
              dark ? "text-slate-400" : "text-slate-500",
            )}
          >
            Content will be added in the next stage.
          </p>
        </div>
      </Container>
    </section>
  );
}
