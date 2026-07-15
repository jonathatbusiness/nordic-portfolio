"use client";

import { BookOpenText, ExternalLink, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { ContentReference } from "@/types/portfolio";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

type ReferencePopoverProps = {
  reference: ContentReference;
  className?: string;
  align?: "left" | "right";
  placement?: "auto" | "side";
  variant?: "light" | "dark";
};

type PopoverPosition = {
  top: number;
  left: number;
  width: number;
};

const VIEWPORT_MARGIN = 16;
const POPOVER_GAP = 12;
const MAX_POPOVER_WIDTH = 368;

export function ReferencePopover({
  reference,
  className,
  align = "right",
  placement = "auto",
  variant = "light",
}: ReferencePopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, translate } = useI18n();
  const localizedReference = translate(reference);

  const [position, setPosition] = useState<PopoverPosition>({
    top: 0,
    left: 0,
    width: 320,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  const updatePosition = useCallback(() => {
    const button = buttonRef.current;

    if (!button) {
      return;
    }

    const buttonRect = button.getBoundingClientRect();

    const availableWidth = window.innerWidth - VIEWPORT_MARGIN * 2;

    const width = Math.min(MAX_POPOVER_WIDTH, availableWidth);

    let left = align === "right" ? buttonRect.right - width : buttonRect.left;

    left = Math.max(
      VIEWPORT_MARGIN,
      Math.min(left, window.innerWidth - width - VIEWPORT_MARGIN),
    );

    const estimatedHeight = popoverRef.current?.offsetHeight ?? 340;

    const clampedTop = (targetTop: number) =>
      Math.max(
        VIEWPORT_MARGIN,
        Math.min(targetTop, window.innerHeight - estimatedHeight - VIEWPORT_MARGIN),
      );

    if (placement === "side") {
      const hasRightSpace =
        window.innerWidth - buttonRect.right - POPOVER_GAP - VIEWPORT_MARGIN >=
        width;

      const hasLeftSpace =
        buttonRect.left - POPOVER_GAP - VIEWPORT_MARGIN >= width;

      if (hasRightSpace || hasLeftSpace) {
        const shouldOpenRight =
          align === "right" ? hasRightSpace : !hasLeftSpace;

        setPosition({
          top: clampedTop(
            buttonRect.top + buttonRect.height / 2 - estimatedHeight / 2,
          ),
          left: shouldOpenRight
            ? buttonRect.right + POPOVER_GAP
            : buttonRect.left - width - POPOVER_GAP,
          width,
        });

        return;
      }
    }

    const spaceAbove = buttonRect.top;
    const spaceBelow = window.innerHeight - buttonRect.bottom;

    const shouldOpenAbove =
      spaceAbove >= estimatedHeight + POPOVER_GAP || spaceAbove > spaceBelow;

    const top = shouldOpenAbove
      ? clampedTop(buttonRect.top - estimatedHeight - POPOVER_GAP)
      : clampedTop(buttonRect.bottom + POPOVER_GAP);

    setPosition({
      top,
      left,
      width,
    });
  }, [align, placement]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    updatePosition();

    const animationFrame = requestAnimationFrame(updatePosition);

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;

      const clickedButton = buttonRef.current?.contains(target);

      const clickedPopover = popoverRef.current?.contains(target);

      if (!clickedButton && !clickedPopover) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handleViewportChange() {
      updatePosition();
    }

    document.addEventListener("mousedown", handlePointerDown);

    document.addEventListener("keydown", handleKeyDown);

    window.addEventListener("resize", handleViewportChange);

    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      cancelAnimationFrame(animationFrame);

      document.removeEventListener("mousedown", handlePointerDown);

      document.removeEventListener("keydown", handleKeyDown);

      window.removeEventListener("resize", handleViewportChange);

      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [isOpen, updatePosition]);

  const popover =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            ref={popoverRef}
            id={popoverId}
            role="dialog"
            aria-label={t("Image reference")}
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              width: position.width,
            }}
            className="z-[9999] max-h-[min(32rem,calc(100vh-2rem))] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 text-left text-slate-950 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <BookOpenText
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                    {localizedReference.label ?? t("Image Reference")}
                  </p>

                  <h4 className="mt-1 text-base font-bold leading-6 text-slate-950">
                    {localizedReference.title}
                  </h4>
                </div>
              </div>

              <button
                type="button"
                aria-label={t("Close image reference")}
                onClick={() => {
                  setIsOpen(false);
                  buttonRef.current?.focus();
                }}
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {localizedReference.details.map((detail) => (
                <p key={detail} className="text-sm leading-6 text-slate-600">
                  {detail}
                </p>
              ))}
            </div>

            {localizedReference.url && (
              <a
                href={localizedReference.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {localizedReference.linkLabel ?? t("Open source")}

                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className={cn("relative inline-flex", className)}>
        <button
          ref={buttonRef}
          type="button"
          aria-label={`${t("View image reference for")} ${localizedReference.title}`}
          aria-expanded={isOpen}
          aria-controls={popoverId}
          aria-pressed={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-xl border shadow-lg backdrop-blur-md transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",

            isOpen
              ? "border-red-500 bg-red-700 text-white shadow-red-950/40 hover:bg-red-600"
              : variant === "dark"
                ? "border-white/20 bg-slate-950/70 text-white hover:border-red-400 hover:bg-slate-950/90 hover:text-red-400 focus-visible:ring-offset-slate-950"
                : "border-slate-200 bg-white/90 text-slate-800 hover:border-red-200 hover:text-red-700",
          )}
        >
          <BookOpenText size={20} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>

      {popover}
    </>
  );
}
