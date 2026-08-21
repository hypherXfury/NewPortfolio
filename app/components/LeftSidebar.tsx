import Link from "next/link";

import { Avatar } from "@/app/components/Avatar";
import { CopyEmailLink } from "@/app/components/CopyEmailLink";
import { SocialLinks } from "@/app/components/SocialLinks";
import { navItems } from "@/app/data/site";

export function LeftSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen flex-col border-x border-dashed border-neutral-200 px-6 py-14 lg:flex">
      <Link
        href="#home"
        aria-label="Vaibhav Shrivastava — home"
        className="w-fit rounded-full focus-visible:outline-2 focus-visible:outline-blue-500"
      >
        <Avatar className="size-14" priority />
      </Link>

      <nav aria-label="Portfolio sections" className="mt-12 flex flex-col">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="border-b border-dashed border-neutral-200 py-2 text-sm text-neutral-600 transition-colors first:border-t hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <p className="mb-4 text-sm text-neutral-500">Drop me a message anytime</p>
        <CopyEmailLink />
        <div className="mt-10">
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
}
