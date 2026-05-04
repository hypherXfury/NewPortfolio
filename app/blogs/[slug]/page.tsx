import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import BlogSubnav from "@/components/BlogSubnav";
import PreviewPane from "@/blogs/ui/PreviewPane";
import {
  UI_REGISTRY,
  getUIEntry,
  getAllUISlugs,
  type UIRegistryEntry,
} from "@/blogs/data/ui-registry";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllUISlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getUIEntry(slug);
  return {
    title: entry ? `${entry.name} | Components` : "Component | Bidyut Kundu",
    description: entry?.description,
  };
}

function readSource(entry: UIRegistryEntry) {
  const abs = path.join(
    /* turbopackIgnore: true */ process.cwd(),
    entry.file,
  );
  return fs.readFileSync(abs, "utf8");
}

export default async function ComponentDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getUIEntry(slug);
  if (!entry) notFound();

  const source = readSource(entry);
  const idx = UI_REGISTRY.findIndex((e) => e.slug === slug);
  const prev = idx > 0 ? UI_REGISTRY[idx - 1] : null;
  const next = idx < UI_REGISTRY.length - 1 ? UI_REGISTRY[idx + 1] : null;

  return (
    <div className="mx-auto w-full max-w-170 px-4 sm:px-2">
      <BlogSubnav
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/blogs" },
          { label: entry.name, href: `/blogs/${entry.slug}` },
        ]}
        title={entry.name}
      />

      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          href="/blogs"
          className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[12px] text-stone-500 transition-colors hover:text-stone-900 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          ← All components
        </Link>
        <Link
          href="/#components"
          className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[12px] text-stone-500 transition-colors hover:text-stone-900 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          Homepage picks
        </Link>
        <Link
          href="/"
          className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[12px] text-stone-500 transition-colors hover:text-stone-900 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          Portfolio home
        </Link>
      </div>

      <p className="mb-2 text-[12px] uppercase tracking-widest text-stone-400 dark:text-stone-500">
        {entry.category}
      </p>
      <p className="mb-2 text-[14px] leading-relaxed text-stone-600 dark:text-stone-300">
        {entry.description}
      </p>
      <p className="mb-8 text-[13px] leading-relaxed text-stone-500 dark:text-stone-400">
        {entry.howItWorks}
      </p>
      <p className="mb-6 font-mono text-[11px] text-stone-400 dark:text-stone-500">
        {entry.file}
      </p>

      <h2 className="mb-2 text-[12px] font-medium text-stone-800 dark:text-stone-200">
        Preview
      </h2>
      <div className="mb-10">
        <PreviewPane slug={entry.slug} />
      </div>

      <h2 className="mb-2 text-[12px] font-medium text-stone-800 dark:text-stone-200">
        Source
      </h2>
      <pre className="max-h-[min(70vh,560px)] overflow-y-auto overflow-x-auto rounded-lg border border-stone-200 bg-stone-100 p-4 font-mono text-[11px] leading-relaxed text-stone-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300">
        {source}
      </pre>

      <nav className="mt-14 flex flex-col gap-4 border-t border-stone-200 pt-8 text-[13px] dark:border-stone-700 sm:flex-row sm:justify-between">
        <div>
          {prev ? (
            <Link
              href={`/blogs/${prev.slug}`}
              className="text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              ← {prev.name}
            </Link>
          ) : (
            <span className="text-stone-300 dark:text-stone-600"> </span>
          )}
        </div>
        <div className="text-right">
          {next ? (
            <Link
              href={`/blogs/${next.slug}`}
              className="text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              {next.name} →
            </Link>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
