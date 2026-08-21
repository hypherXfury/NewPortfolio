import Link from "next/link";

import { Monogram } from "@/app/components/Monogram";
import { SquareGithubIcon } from "@/icons/brands/Github";
import { LinkedinIcon } from "@/icons/brands/LinkedIn";
import { GmailIcon } from "@/icons/brands/Gmail";
import { site } from "@/app/data/site";

const dockIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: SquareGithubIcon,
  LinkedIn: LinkedinIcon,
};

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-dashed border-neutral-200 bg-white/95 px-4 backdrop-blur lg:hidden">
      <div className="flex h-16 items-center justify-between">
        <Link href="#home" aria-label="Home" className="rounded-full">
          <Monogram className="size-10 text-sm" />
        </Link>
        {site.openToWork && (
          <span className="inline-flex items-center gap-2 text-xs text-neutral-600">
            <span>Open to work</span>
            <span aria-hidden className="size-2 animate-pulse rounded-full bg-emerald-400" />
          </span>
        )}
      </div>
    </header>
  );
}

export function MobileDock() {
  const items = [
    ...site.socials.map(({ label, href }) => ({ label, href })),
    { label: "Email", href: `mailto:${site.email}` },
  ];

  return (
    <div className="fixed inset-x-0 bottom-3 z-50 flex justify-center overflow-visible px-3 pb-[env(safe-area-inset-bottom)] font-sans lg:hidden">
      <nav aria-label="Social links" className="relative inline-flex items-end gap-2 p-2.5">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/50 bg-white/65 shadow-xl shadow-black/15 backdrop-blur-xl"
        />
        {items.map(({ label, href }) => {
          const Icon = dockIcons[label] ?? GmailIcon;
          const external = href.startsWith("http");
          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group relative z-10 flex flex-col items-center rounded-lg outline-none"
            >
              <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 rounded-md bg-neutral-950 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-white opacity-0 shadow-sm transition-[opacity,transform] duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100">
                {label}
              </span>
              <span className="origin-bottom transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/70 bg-white/85 shadow-sm backdrop-blur-xl">
                  <Icon className="size-5" />
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
