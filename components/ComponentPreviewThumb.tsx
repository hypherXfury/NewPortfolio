"use client";

import { useEffect, useRef, useState } from "react";
import { ComponentPreview } from "@/blogs/ui/ComponentPreview";

type Props = {
  slug: string;
  /** Hero strip on homepage */
  variant?: "gallery" | "featured";
  /** Taller / shorter preview cells for masonry rhythm (gallery only). */
  masonrySize?: "s" | "m" | "l";
};

export default function ComponentPreviewThumb({
  slug,
  variant = "gallery",
  masonrySize = "m",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setVisible(true);
      },
      { rootMargin: "240px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let h: string;
  let scale: string;
  if (variant === "featured") {
    h = "min-h-[220px] h-56 sm:h-64";
    scale = "scale-[0.48] sm:scale-[0.55] origin-center";
  } else {
    const heights = {
      s: "h-36 sm:h-44 md:h-40",
      m: "h-44 sm:h-52 md:h-48",
      l: "h-52 sm:h-64 md:h-56",
    } as const;
    const scales = {
      s: "scale-[0.38] sm:scale-[0.44] origin-center",
      m: "scale-[0.4] sm:scale-[0.46] origin-center",
      l: "scale-[0.36] sm:scale-[0.42] origin-center",
    } as const;
    h = heights[masonrySize];
    scale = scales[masonrySize];
  }

  return (
    <div
      ref={rootRef}
      className={`relative w-full overflow-hidden bg-stone-50/50 dark:from-stone-900 dark:to-stone-950/90 ${h}`}
    >
      {!visible ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-32 rounded-md bg-stone-200/80 dark:bg-stone-700/80 animate-pulse" />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className={`${scale} pointer-events-none select-none flex justify-center`}
          >
            <div className="w-[min(920px,220vw)] flex justify-center">
              <ComponentPreview slug={slug} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
