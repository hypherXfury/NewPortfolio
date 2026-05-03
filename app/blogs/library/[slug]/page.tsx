import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import BlogSubnav from "@/components/BlogSubnav";
import PreviewPane from "@/blogs/ui/PreviewPane";
import {
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
    title: entry
      ? `${entry.name} | UI library`
      : "Component | UI library",
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

export default async function UILibraryDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getUIEntry(slug);
  if (!entry) notFound();

  const source = readSource(entry);

  return (
    <>
      <BlogSubnav
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Writing", href: "/blogs" },
          { label: "UI library", href: "/blogs/library" },
          { label: entry.name, href: `/blogs/library/${entry.slug}` },
        ]}
        title={entry.name}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        <Link
          href="/blogs/library"
          className="text-[12px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-600 rounded-full px-3 py-1 bg-white dark:bg-stone-900"
        >
          ← Back to library
        </Link>
        <Link
          href="/blogs"
          className="text-[12px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-600 rounded-full px-3 py-1 bg-white dark:bg-stone-900"
        >
          Writing index
        </Link>
        <Link
          href="/"
          className="text-[12px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-600 rounded-full px-3 py-1 bg-white dark:bg-stone-900"
        >
          Portfolio home
        </Link>
      </div>

      <p className="text-[12px] uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">
        {entry.category}
      </p>
      <p className="text-[14px] text-stone-600 dark:text-stone-300 leading-relaxed mb-2">
        {entry.description}
      </p>
      <p className="text-[13px] text-stone-500 dark:text-stone-400 leading-relaxed mb-8">
        {entry.howItWorks}
      </p>
      <p className="text-[11px] font-mono text-stone-400 dark:text-stone-500 mb-2">
        {entry.file}
      </p>

      <h2 className="text-[12px] font-medium text-stone-800 dark:text-stone-200 mb-2">
        Preview
      </h2>
      <div className="mb-10">
        <PreviewPane slug={entry.slug} />
      </div>

      <h2 className="text-[12px] font-medium text-stone-800 dark:text-stone-200 mb-2">
        Source
      </h2>
      <pre className="text-[11px] leading-relaxed font-mono text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg p-4 overflow-x-auto max-h-[min(70vh,560px)] overflow-y-auto">
        {source}
      </pre>
    </>
  );
}
