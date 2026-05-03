"use client";

import { ComponentPreview } from "@/blogs/ui/ComponentPreview";

export default function PreviewPane({ slug }: { slug: string }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900/80 overflow-hidden">
      <ComponentPreview slug={slug} />
    </div>
  );
}
