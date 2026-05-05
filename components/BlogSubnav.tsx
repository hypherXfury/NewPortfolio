import Link from "next/link";

type Crumb = { label: string; href: string };

export default function BlogSubnav({
  crumbs,
  title,
}: {
  crumbs: Crumb[];
  title?: string;
}) {
  return (
    <header className="border-b border-stone-100 dark:border-stone-700 pb-3 mb-3">
      <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-stone-400 dark:text-stone-500 mb-3">
        {crumbs.map((c, i) => (
          <span key={c.href} className="flex items-center gap-2">
            {i > 0 && <span className="text-stone-300 dark:text-stone-600">/</span>}
            <Link
              href={c.href}
              className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
            >
              {c.label}
            </Link>
          </span>
        ))}
      </nav>
      {title && (
        <h1 className="text-[15px] font-medium text-stone-900 dark:text-stone-100">
          {title}
        </h1>
      )}
    </header>
  );
}
