import Link from "next/link";
import Pen from "@/icons/Pen";
import { UI_REGISTRY, getUIEntry } from "@/blogs/data/ui-registry";
import { FEATURED_COMPONENT_SLUGS } from "@/blogs/data/featured-components";
import ComponentPreviewThumb from "@/components/ComponentPreviewThumb";
import ArrowUpRight from "@/icons/ArrowUpRight";

function featuredEntries() {
  return FEATURED_COMPONENT_SLUGS.map((slug) => getUIEntry(slug)).filter(
    (e): e is NonNullable<typeof e> => Boolean(e),
  );
}

export default function BlogsSection() {
  const featured = featuredEntries();

  return (
    <section id="components" className="mb-12 max-w-170 mx-auto px-6">
      <h1 className="text-[14px] mb-3 text-stone-800 dark:text-stone-100">
        Component library
      </h1>
      <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 pt-4 border-t border-stone-200">
        <Pen />
        <span>
          Things I&lsquo;ve built and reuse — copy, tweak, make them yours.
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {featured.map((entry) => (
          <Link
            key={entry.slug}
            href={`/blogs/${entry.slug}`}
            className="group overflow-hidden rounded-lg border border-stone-200 bg-stone-50/50 transition-shadow hover:shadow-md dark:border-stone-700 dark:bg-stone-900/50 dark:hover:border-stone-600"
          >
            <ComponentPreviewThumb slug={entry.slug} variant="featured" />
            <div className="flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <p className="mb-1 text-[12px] capitalize text-stone-500 dark:text-stone-400">
                  {entry.category}
                </p>
                <h2 className="truncate text-[14px] font-medium text-stone-900 dark:text-stone-100">
                  {entry.name}
                </h2>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white dark:border-stone-600 dark:bg-stone-800">
                <ArrowUpRight className="h-4 w-4 text-stone-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-stone-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-center gap-1.5">
        <Link
          href="/blogs"
          className="text-[13px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border border-stone-200 dark:border-stone-600 rounded-full px-4 py-1.5 bg-white dark:bg-stone-900"
        >
          See all {UI_REGISTRY.length} components
        </Link>
        <p className="text-[11px] text-stone-400 dark:text-stone-500">
          more being added as I build
        </p>
      </div>
    </section>
  );
}
