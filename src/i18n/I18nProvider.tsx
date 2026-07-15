"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ptBRTranslations } from "@/i18n/pt-BR";

export type Locale = "en" | "pt-BR";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (value: string) => string;
  translate: <T>(value: T) => T;
};

const STORAGE_KEY = "norway-portfolio-locale";

const I18nContext = createContext<I18nContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "pt-BR";
}

function getBrowserLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.navigator.language.toLowerCase().startsWith("pt")
    ? "pt-BR"
    : "en";
}

const untranslatedKeys = new Set([
  "id",
  "href",
  "image",
  "url",
  "icon",
  "category",
  "highlighted",
]);

function translateValue<T>(value: T, locale: Locale): T {
  if (locale === "en") {
    return value;
  }

  if (typeof value === "string") {
    return (ptBRTranslations[value] ?? value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateValue(item, locale)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        untranslatedKeys.has(key)
          ? nestedValue
          : translateValue(nestedValue, locale),
      ]),
    ) as T;
  }

  return value;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    const nextLocale = isLocale(storedLocale) ? storedLocale : getBrowserLocale();

    const animationFrame = requestAnimationFrame(() => {
      setLocaleState(nextLocale);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  }

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (text) => translateValue(text, locale),
      translate: (input) => translateValue(input, locale),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
