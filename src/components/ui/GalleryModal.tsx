"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import type { GalleryItem } from "@/types/gallery";
import { useI18n } from "@/i18n/I18nProvider";

type GalleryModalProps = {
  item: GalleryItem;
  currentIndex: number;
  totalItems: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function GalleryModal({
  item,
  currentIndex,
  totalItems,
  onClose,
  onPrevious,
  onNext,
}: GalleryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex h-full max-h-[56rem] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl lg:grid lg:grid-cols-[1.35fr_0.65fr]">
        <div className="relative min-h-[55vh] overflow-hidden bg-black lg:min-h-0">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-contain"
          />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="rounded-full border border-white/15 bg-slate-950/65 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              {currentIndex + 1} / {totalItems}
            </span>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t("Close gallery")}
              className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-slate-950/65 text-white backdrop-blur-md transition hover:bg-red-700"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={onPrevious}
            aria-label={t("Previous image")}
            className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white backdrop-blur-md transition hover:bg-red-700 sm:left-6"
          >
            <ChevronLeft size={25} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label={t("Next image")}
            className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white backdrop-blur-md transition hover:bg-red-700 sm:right-6"
          >
            <ChevronRight size={25} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col justify-center border-t border-white/10 p-7 text-white sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            {t(item.category)}
          </p>

          <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {item.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {item.description}
          </p>

          <div className="mt-8 h-px bg-white/10" />

          <p className="mt-6 text-sm leading-6 text-slate-500">
            {t("Use the arrow keys to navigate or press Esc to close.")}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
