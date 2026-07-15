"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";

import { cn } from "@/utils/cn";

type SpeakButtonProps = {
  text: string;
  label?: string;
  displayText?: string;
  lang?: string;
  rate?: number;
  pitch?: number;
  className?: string;
  iconClassName?: string;
  activeClassName?: string;
  compact?: boolean;
};

export function SpeakButton({
  text,
  label,
  displayText,
  lang = "nb-NO",
  rate = 0.82,
  pitch = 1,
  className,
  iconClassName,
  activeClassName,
  compact = false,
}: SpeakButtonProps) {
  const [isSupported, setIsSupported] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsSupported(false);
      return;
    }

    const synthesis = window.speechSynthesis;

    function loadVoices() {
      setVoices(synthesis.getVoices());
    }

    loadVoices();

    synthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      synthesis.removeEventListener("voiceschanged", loadVoices);
      synthesis.cancel();
    };
  }, []);

  function selectNorwegianVoice() {
    const norwegianLanguageCodes = [
      "nb-NO",
      "nn-NO",
      "no-NO",
      "nb",
      "nn",
      "no",
    ];

    return (
      norwegianLanguageCodes
        .map((code) =>
          voices.find(
            (voice) => voice.lang.toLowerCase() === code.toLowerCase(),
          ),
        )
        .find(Boolean) ??
      voices.find((voice) => voice.lang.toLowerCase().startsWith("nb")) ??
      voices.find((voice) => voice.lang.toLowerCase().startsWith("nn")) ??
      voices.find((voice) => voice.lang.toLowerCase().startsWith("no"))
    );
  }

  function speak() {
    if (!isSupported || typeof window === "undefined") {
      return;
    }

    const synthesis = window.speechSynthesis;

    // Impede que várias palavras sejam faladas simultaneamente.
    synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const norwegianVoice = selectNorwegianVoice();

    utterance.lang = norwegianVoice?.lang ?? lang;
    utterance.voice = norwegianVoice ?? null;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    synthesis.speak(utterance);
  }

  if (!isSupported) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 text-sm text-slate-500",
          className,
        )}
        title="Speech synthesis is not supported by this browser."
      >
        <Volume2 size={compact ? 15 : 18} aria-hidden="true" />

        {!compact && (displayText ?? label ?? text)}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={speak}
      aria-label={label ?? `Listen to the pronunciation of ${text}`}
      aria-pressed={isSpeaking}
      title={`Listen to “${text}”`}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
        isSpeaking && activeClassName,
        className,
      )}
    >
      <Volume2
        size={compact ? 15 : 18}
        className={cn("shrink-0", isSpeaking && "animate-pulse", iconClassName)}
        aria-hidden="true"
      />

      {!compact && <span>{displayText ?? label ?? text}</span>}
    </button>
  );
}
