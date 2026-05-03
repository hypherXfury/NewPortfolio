import Link from "next/link";
import Pen from "@/icons/Pen";
import { BLOG_POSTS } from "@/blogs/data/posts";

const PREVIEW_COUNT = 5;

export default function BlogsSection() {
  const preview = BLOG_POSTS.slice(0, PREVIEW_COUNT);

  return (
    <section id="blogs" className="mb-12 max-w-170 mx-auto px-6">
      <h1 className="text-[14px] mb-3 text-stone-800 dark:text-stone-100">
        Writing
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-t border-stone-200 dark:border-stone-700 pt-3">
        <div className="flex items-center gap-2.5 text-[14px] font-serif italic text-stone-400 dark:text-stone-500 leading-relaxed">
          <Pen />
          <span>
            Notes on backend work, databases, and shipping — plus an interactive{" "}
            <Link
              href="/blogs/library"
              className="not-italic text-stone-600 dark:text-stone-300 underline hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              UI component library
            </Link>{" "}
            built for these posts.
          </span>
        </div>
        <Link
          href="/blogs"
          className="shrink-0 text-[13px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border border-stone-200 dark:border-stone-600 rounded-full px-3 py-1.5 bg-white dark:bg-stone-900"
        >
          All blogs
        </Link>
      </div>

      <ul className="mt-6 space-y-0 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden bg-white dark:bg-stone-900/40">
        {preview.map((post, i) => (
          <li
            key={post.slug}
            className={
              i < preview.length - 1
                ? "border-b border-stone-100 dark:border-stone-800"
                : ""
            }
          >
            <Link
              href={`/blogs/${post.slug}`}
              className="block px-4 py-4 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
            >
              <p className="text-[11px] text-stone-400 dark:text-stone-500 mb-1">
                {post.date} · {post.readTime}
              </p>
              <h2 className="text-[14px] font-medium text-stone-900 dark:text-stone-100 mb-1">
                {post.title}
              </h2>
              <p className="text-[13px] text-stone-500 dark:text-stone-400 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
