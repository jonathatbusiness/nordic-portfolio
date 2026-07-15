"use client";

import Image from "next/image";
import { Expand, Images } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import { galleryCategories, galleryItems } from "@/data/gallery";
import { GalleryModal } from "@/components/ui/GalleryModal";
import { Reveal } from "@/components/ui/Reveal";
import type { GalleryCategory, GalleryItem } from "@/types/gallery";
import { cn } from "@/utils/cn";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (!selectedItem || filteredItems.length === 0) {
      return;
    }

    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedItem.id,
    );

    const previousIndex =
      currentIndex <= 0 ? filteredItems.length - 1 : currentIndex - 1;

    setSelectedItem(filteredItems[previousIndex]);
  }, [filteredItems, selectedItem]);

  const showNext = useCallback(() => {
    if (!selectedItem || filteredItems.length === 0) {
      return;
    }

    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedItem.id,
    );

    const nextIndex =
      currentIndex >= filteredItems.length - 1 ? 0 : currentIndex + 1;

    setSelectedItem(filteredItems[nextIndex]);
  }, [filteredItems, selectedItem]);

  function changeCategory(category: GalleryCategory) {
    setActiveCategory(category);
    setSelectedItem(null);
  }

  return (
    <>
      <Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => changeCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={cn(
                "rounded-full border px-5 py-3 text-sm font-semibold transition",
                activeCategory === category.id
                  ? "border-red-700 bg-red-700 text-white shadow-lg"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid auto-rows-[16rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => {
          const isLarge = index % 7 === 0 || index % 7 === 4;

          return (
            <Reveal
              key={item.id}
              className={cn(isLarge && "sm:row-span-2")}
              variant={index % 3 === 1 ? "scale" : "fade-up"}
              delay={(index % 3) * 70}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Open ${item.title} in gallery`}
                className={cn(
                  "group relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 text-left shadow-lg",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.05]"
                />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

              <div className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-xl border border-white/15 bg-slate-950/60 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand size={20} aria-hidden="true" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
                  {item.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="mt-8 flex min-h-72 flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-white/5 text-center">
          <Images size={36} className="text-slate-500" aria-hidden="true" />

          <p className="mt-4 font-semibold text-slate-300">
            No images are available in this category.
          </p>
        </div>
      )}

      {selectedItem && selectedIndex >= 0 && (
        <GalleryModal
          item={selectedItem}
          currentIndex={selectedIndex}
          totalItems={filteredItems.length}
          onClose={closeModal}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
}
