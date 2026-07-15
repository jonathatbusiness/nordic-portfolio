"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  rootMargin?: string;
};

const hiddenClasses = {
  "fade-up": "translate-y-8 opacity-0",
  "fade-left": "translate-x-8 opacity-0",
  "fade-right": "-translate-x-8 opacity-0",
  scale: "scale-[0.96] opacity-0",
} satisfies Record<RevealVariant, string>;

export function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  rootMargin = "0px 0px -40% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const animationFrame = requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transform-gpu transition duration-700 ease-out",
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : hiddenClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
