"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="font-semibold">{t("Norway - School Portfolio")}</p>

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-300 sm:justify-start">
            <Link href="/norway-history" className="transition hover:text-white">
              History
            </Link>
            <Link href="/norway-culture" className="transition hover:text-white">
              Culture
            </Link>
            <Link href="/norway-tourism" className="transition hover:text-white">
              Tourism
            </Link>
            <Link
              href="/pt-br/trabalho-escolar-sobre-a-noruega"
              className="transition hover:text-white"
            >
              Portugues
            </Link>
          </nav>

          <p className="text-sm text-slate-400">
            {t("English project by Mateus A. Caetani, 2026.")}
          </p>

          <p className="text-xs text-slate-500">
            {t("Website developed by Jonatha L. Teixeira.")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
