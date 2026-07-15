"use client";

import { ChevronDown, ChevronUp, Music2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/utils/cn";

const STORAGE_KEY = "norway-spotify-player-collapsed";

export function SpotifyPlayer() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (storedValue === "true") {
      setIsCollapsed(true);
    }
  }, []);

  function togglePlayer() {
    setIsCollapsed((current) => {
      const nextValue = !current;

      window.localStorage.setItem(STORAGE_KEY, String(nextValue));

      return nextValue;
    });
  }

  function hidePlayer() {
    setIsHidden(true);
  }

  function showPlayer() {
    setIsHidden(false);
    setIsCollapsed(true);

    window.localStorage.setItem(STORAGE_KEY, "true");
  }

  if (!isMounted) {
    return null;
  }

  if (isHidden) {
    return (
      <button
        type="button"
        onClick={showPlayer}
        aria-label="Show Norway Spotify playlist"
        className={cn(
          "fixed z-[9000] flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/95 px-4 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-xl transition",
          "hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
          "bottom-4 left-1/2 -translate-x-1/2",
          "md:bottom-6 md:left-auto md:right-6 md:translate-x-0",
        )}
      >
        <Music2 size={18} className="text-red-400" aria-hidden="true" />
        Show soundtrack
      </button>
    );
  }

  return (
    <aside
      aria-label="Norway Spotify playlist"
      className={cn(
        "fixed z-[9000] overflow-hidden border border-white/10 bg-slate-950/95 text-white shadow-2xl backdrop-blur-xl transition-all duration-300",
        "bottom-3 left-3 right-3 rounded-2xl",
        "md:bottom-6 md:left-auto md:right-6 md:w-[352px]",
        isCollapsed ? "h-[54px]" : "h-[406px] md:h-[410px]",
      )}
    >
      <div className="flex h-[54px] items-center justify-between gap-3 border-b border-white/10 px-4">
        <button
          type="button"
          onClick={togglePlayer}
          aria-expanded={!isCollapsed}
          aria-controls="spotify-playlist-panel"
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-700 text-white">
            <Music2 size={18} aria-hidden="true" />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">
              Norway Portfolio Soundtrack
            </span>

            <span className="block truncate text-xs text-slate-400">
              Listen while exploring
            </span>
          </span>
        </button>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={togglePlayer}
            aria-label={
              isCollapsed ? "Expand Spotify player" : "Collapse Spotify player"
            }
            className="flex size-9 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            {isCollapsed ? (
              <ChevronUp size={19} aria-hidden="true" />
            ) : (
              <ChevronDown size={19} aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={hidePlayer}
            aria-label="Hide Spotify player"
            className="flex size-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-red-700 hover:text-white"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="spotify-playlist-panel"
        className={cn(
          "transition-opacity duration-200",
          isCollapsed ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <iframe
          data-testid="embed-iframe"
          title="Norway Portfolio Soundtrack on Spotify"
          src="https://open.spotify.com/embed/playlist/2uLhFliUybPDtbV3ArtzEc?utm_source=generator&si=4b1dff80f1d14a38"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block w-full"
        />
      </div>
    </aside>
  );
}
