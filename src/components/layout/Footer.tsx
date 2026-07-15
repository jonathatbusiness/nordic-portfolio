import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="font-semibold">Norway - School Portfolio</p>

          <p className="text-sm text-slate-400">
            English project by Mateus A. Caetani, 2026.
          </p>

          <p className="text-xs text-slate-500">
            Website developed by Jonatha L. Teixeira.
          </p>
        </div>
      </Container>
    </footer>
  );
}
