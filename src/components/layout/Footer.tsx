"use client";

import { Container } from "@/components/ui/Container";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="font-semibold">{t("Norway - School Portfolio")}</p>

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
