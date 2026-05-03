import Link from "next/link";
import type { Metadata } from "next";
import BlogSubnav from "@/components/BlogSubnav";
import { UI_REGISTRY, uiEntriesByCategory } from "@/blogs/data/ui-registry";

export const metadata: Metadata = {
  title: "UI library | Bidyut Kundu",
  description:
    "Interactive previews of React UI components used across writing posts.",
};

export default function UILibraryIndexPage() {
  const byCat = uiEntriesByCategory();
  const categories = Object.keys(byCat).sort();

  return (
    <>
      <BlogSubnav
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Writing", href: "/blogs" },
          { label: "UI library", href: "/blogs/library" },
        ]}
        title="Component library"
      />
      <p className="text-[13px] text-stone-500 dark:text-stone-400 mb-8 leading-relaxed max-w-2xl">
        Each entry opens a dedicated page with a live preview (client-rendered)
        and the full source file from the repository so you can see exactly how
        the component is built.
      </p>

      <p className="text-[11px] tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-2">
        {UI_REGISTRY.length} components
      </p>

      <div className="space-y-10">
        {categories.map((cat) => (
          <section key={cat}>
            <h2 className="text-[13px] font-medium text-stone-800 dark:text-stone-200 mb-3 capitalize">
              {cat}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {byCat[cat].map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/blogs/library/${e.slug}`}
                    className="block rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900/50 px-3 py-2.5 hover:border-stone-300 dark:hover:border-stone-600 transition-colors"
                  >
                    <span className="text-[13px] text-stone-900 dark:text-stone-100 font-medium">
                      {e.name}
                    </span>
                    <p className="text-[12px] text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-2">
                      {e.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
