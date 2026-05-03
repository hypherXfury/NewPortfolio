import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogSubnav from "@/components/BlogSubnav";
import {
  BLOG_POSTS,
  getPostBySlug,
  getAllSlugs,
} from "@/blogs/data/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post | Bidyut Kundu" };
  return {
    title: `${post.title} | Bidyut Kundu`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? BLOG_POSTS[idx - 1] : null;
  const next = idx < BLOG_POSTS.length - 1 ? BLOG_POSTS[idx + 1] : null;

  return (
    <>
      <BlogSubnav
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Writing", href: "/blogs" },
          { label: post.title, href: `/blogs/${post.slug}` },
        ]}
      />
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/blogs"
          className="text-[12px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-600 rounded-full px-3 py-1 bg-white dark:bg-stone-900"
        >
          ← All posts
        </Link>
        <Link
          href="/"
          className="text-[12px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-600 rounded-full px-3 py-1 bg-white dark:bg-stone-900"
        >
          Portfolio home
        </Link>
        <Link
          href="/blogs/library"
          className="text-[12px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-600 rounded-full px-3 py-1 bg-white dark:bg-stone-900"
        >
          UI library
        </Link>
      </div>
      <article>
        <p className="text-[11px] text-stone-400 dark:text-stone-500 mb-2">
          {post.date} · {post.readTime}
        </p>
        <h1 className="text-[20px] md:text-[22px] font-medium text-stone-900 dark:text-stone-100 mb-6 leading-snug">
          {post.title}
        </h1>
        <p className="text-[14px] text-stone-600 dark:text-stone-300 leading-relaxed mb-8 border-l-2 border-stone-200 dark:border-stone-600 pl-4">
          {post.excerpt}
        </p>
        <div className="space-y-5 text-[14px] text-stone-700 dark:text-stone-300 leading-[1.75]">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <nav className="mt-14 pt-8 border-t border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row gap-4 sm:justify-between text-[13px]">
        <div>
          {prev ? (
            <Link
              href={`/blogs/${prev.slug}`}
              className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span className="text-stone-300 dark:text-stone-600"> </span>
          )}
        </div>
        <div className="text-right">
          {next ? (
            <Link
              href={`/blogs/${next.slug}`}
              className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              {next.title} →
            </Link>
          ) : null}
        </div>
      </nav>
    </>
  );
}
