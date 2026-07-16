"use client";

import { ChevronDown } from "lucide-react";

import { type Locale, useI18n } from "@/i18n/I18nProvider";
import { trackEvent } from "@/utils/analytics";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  "pt-BR": "PT-BR",
};

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  function changeLanguage(nextLocale: Locale) {
    trackEvent("language_change", {
      from_language: locale,
      to_language: nextLocale,
    });

    setLocale(nextLocale);
  }

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Select language</span>

      <select
        value={locale}
        onChange={(event) => changeLanguage(event.target.value as Locale)}
        aria-label={locale === "pt-BR" ? "Selecionar idioma" : "Select language"}
        className="h-10 cursor-pointer appearance-none rounded-full border border-slate-200 bg-white pl-4 pr-9 text-sm font-bold text-slate-950 shadow-sm outline-none transition hover:border-red-200 focus-visible:ring-2 focus-visible:ring-red-500"
      >
        <option value="en" className="bg-white text-slate-950">
          {localeLabels.en}
        </option>
        <option value="pt-BR" className="bg-white text-slate-950">
          {localeLabels["pt-BR"]}
        </option>
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 text-slate-700"
        aria-hidden="true"
      />
    </label>
  );
}
