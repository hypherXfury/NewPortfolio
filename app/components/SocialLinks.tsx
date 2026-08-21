import Link from "next/link";

import { SquareGithubIcon } from "@/icons/brands/Github";
import { LinkedinIcon } from "@/icons/brands/LinkedIn";
import { site } from "@/app/data/site";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: SquareGithubIcon,
  LinkedIn: LinkedinIcon,
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {site.socials.map(({ label, href }) => {
        const Icon = icons[label];
        return (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-950"
          >
            {Icon && <Icon className="size-4" />}
            {label}
          </Link>
        );
      })}
    </div>
  );
}
