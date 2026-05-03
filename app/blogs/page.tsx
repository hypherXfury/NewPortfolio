import Link from "next/link";
import type { Metadata } from "next";
import BlogSubnav from "@/components/BlogSubnav";
import { BLOG_POSTS } from "@/blogs/data/posts";

export const metadata: Metadata = {
  title: "Writing | Bidyut Kundu",
  description: "Articles on backend systems, databases, and shipping software.",
};

export default function BlogsIndexPage() {
  return (
    <>
      <BlogSubnav
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Writing", href: "/blogs" },
        ]}
        title="All posts"
      />
      <p className="text-[13px] text-stone-500 dark:text-stone-400 mb-6 leading-relaxed">
        Longer notes than a tweet, shorter than a book — mostly lessons from
        production systems. Explore the{" "}
        <Link
          href="/blogs/library"
          className="underline hover:text-stone-900 dark:hover:text-stone-100"
        >
          UI component library
        </Link>{" "}
        used to illustrate patterns in these posts.
      </p>
      <ul className="space-y-0 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden bg-white dark:bg-stone-900/40">
        {BLOG_POSTS.map((post, i) => (
          <li
            key={post.slug}
            className={
              i < BLOG_POSTS.length - 1
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
    </>
  );
}
