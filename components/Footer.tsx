import Link from "next/link";
import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import Mail from "@/icons/Mail";
import Twitter from "@/icons/Twitter";

const FOOTER_NAV: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Components", href: "/blogs" },
  {
    label: "Resume",
    href: "/Software-engineer_Bidyut-Kundu.pdf",
    external: true,
  },
];
export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/bidyut10",
      icon: <Github />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/bidyut-kundu-4ba406242",
      icon: <LinkedIn />,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/BidyutKundu12",
      icon: <Twitter />,
      label: "Twitter",
    },
    {
      href: "mailto:bidyut.kundu.dev@gmail.com",
      icon: <Mail />,
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-170 mx-auto px-6 py-9 grid grid-cols-2 gap-8">
        <div>
          <div className="text-[11px] tracking-widest text-stone-400 dark:text-stone-500 mb-4">
            Navigate
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_NAV.map(({ label, href, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="text-[13px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-widest text-stone-400 dark:text-stone-500 mb-4">
            Connect
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                title={label}
                className="text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-170 mx-auto px-6 py-4 border-t border-stone-200 dark:border-stone-800 flex justify-between items-center">
        <span className="text-[12px] text-stone-400 dark:text-stone-500">
          © 2026, Bidyut Kundu. All rights reserved.
        </span>
        <span className="text-[12px] text-stone-400 dark:text-stone-500">
          Kolkata, India
        </span>
      </div>
    </footer>
  );
}
