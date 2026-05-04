"use client";

import Link from "next/link";
import type { UIRegistryEntry } from "@/blogs/data/ui-registry";
import ArrowUpRight from "@/icons/ArrowUpRight";
import ComponentPreviewThumb from "@/components/ComponentPreviewThumb";

function masonrySizeFromSlug(slug: string): "s" | "m" | "l" {
  let n = 0;
  for (let i = 0; i < slug.length; i++) {
    n = (n + slug.charCodeAt(i) * (i + 7)) % 1009;
  }
  const r = n % 5;
  if (r <= 1) return "s";
  if (r <= 3) return "m";
  return "l";
}

const bentoRowSpan = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
] as const;

export default function ComponentGalleryGrid({
  entries,
}: {
  entries: readonly UIRegistryEntry[];
}) {
  return (
    <section className="mb-12 w-full min-w-0">
      <div className="grid w-full grid-cols-3 grid-rows-[repeat(auto-fill,minmax(220px,auto))] gap-3">
        {entries.map((entry, i) => (
          <Link
            key={entry.slug}
            href={`/blogs/${entry.slug}`}
            className={`${bentoRowSpan[i % bentoRowSpan.length]} group flex flex-col overflow-hidden rounded-xl border border-stone-200/90 bg-stone-50/50 shadow-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-lg dark:border-stone-700/90 dark:bg-stone-900/60 dark:hover:border-stone-600 dark:hover:shadow-black/40`}
          >
            <div className="min-h-0 flex-1">
              <ComponentPreviewThumb
                slug={entry.slug}
                variant="gallery"
                masonrySize={masonrySizeFromSlug(entry.slug)}
              />
            </div>
            <div className="flex items-start justify-between gap-3 p-3.5 sm:p-4">
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wide text-stone-400 dark:text-stone-500">
                  {entry.category}
                </p>
                <h3 className="text-[13px] font-medium leading-snug text-stone-900 dark:text-stone-100 sm:text-[14px]">
                  {entry.name}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-stone-500 dark:text-stone-400 sm:text-[12px]">
                  {entry.description}
                </p>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-200/80 bg-white/90 dark:border-stone-600 dark:bg-stone-800/90 sm:h-9 sm:w-9">
                <ArrowUpRight className="h-3.5 w-3.5 text-stone-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-stone-300 sm:h-4 sm:w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
