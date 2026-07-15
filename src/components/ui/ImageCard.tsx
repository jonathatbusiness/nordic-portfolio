import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/utils/cn";

type ImageCardProps = {
  src?: string;
  alt: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ImageCard({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  imageClassName,
  priority = false,
}: ImageCardProps) {
  return (
    <div className={cn("relative overflow-hidden bg-slate-900", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover object-center transition duration-700 group-hover:scale-[1.03]",
            imageClassName,
          )}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900 text-slate-500">
          <ImageIcon size={36} strokeWidth={1.4} aria-hidden="true" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em]">
            Image coming soon
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/5" />
    </div>
  );
}
