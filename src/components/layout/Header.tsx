"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useI18n } from "@/i18n/I18nProvider";
import { trackEvent } from "@/utils/analytics";
import { cn } from "@/utils/cn";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, translate } = useI18n();
  const localizedNavigationItems = translate(navigationItems);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function trackNavigationClick(label: string, href: string, menuType: string) {
    trackEvent("navigation_click", {
      label,
      href,
      menu_type: menuType,
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link
            href="/#home"
            className="flex items-center gap-3 font-bold tracking-wide"
            onClick={() => {
              trackNavigationClick("Norway", "/#home", "brand");
              closeMenu();
            }}
          >
            <Image
              src="/android-icon-48x48.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full border border-white/20 shadow-sm"
            />

            <span className="text-lg uppercase">{t("Norway")}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {localizedNavigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
                onClick={() =>
                  trackNavigationClick(item.label, item.href, "desktop")
                }
              >
                {item.label}
              </Link>
            ))}

            <LanguageSelector />
          </nav>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
            aria-label={
              isMenuOpen ? t("Close navigation menu") : t("Open navigation menu")
            }
            aria-expanded={isMenuOpen}
            onClick={() => {
              const nextValue = !isMenuOpen;

              trackEvent("mobile_menu_toggle", {
                state: nextValue ? "open" : "closed",
              });

              setIsMenuOpen(nextValue);
            }}
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-slate-950 transition-[max-height,opacity] duration-300 lg:hidden",
          isMenuOpen
            ? "max-h-[32rem] opacity-100"
            : "max-h-0 border-transparent opacity-0",
        )}
      >
        <Container className="py-5">
          <nav className="flex flex-col">
            {localizedNavigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 text-base font-medium text-slate-200 last:border-none"
                onClick={() => {
                  trackNavigationClick(item.label, item.href, "mobile");
                  closeMenu();
                }}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4">
              <LanguageSelector />
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
