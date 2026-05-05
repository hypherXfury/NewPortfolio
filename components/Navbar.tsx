"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";
import Search from "@/icons/Search";
import SearchModal from "@/components/SearchModal";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "Home", href: "/" },
  // { label: "Work", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Components", href: "/blogs" },
  // {
  //   label: "Resume",
  //   href: "/Software-engineer_Bidyut-Kundu.pdf",
  //   external: true,
  // },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/50 dark:bg-stone-950/90 backdrop-blur-md">
        <div className="max-w-170 mx-auto px-6 h-13 flex items-center justify-between border-b border-stone-100 dark:border-stone-800">
          <div className="flex items-center gap-6 flex-wrap">
            {NAV_LINKS.map(({ label, href, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="text-[13.5px] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-[13px] text-stone-400 dark:text-stone-500 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-700 rounded-full px-2 py-2 md:px-3 md:py-1.5 cursor-pointer hover:border-stone-300 dark:hover:border-stone-600 transition-colors"
            >
              <Search />
              <div className="hidden md:flex items-center">
                <kbd className="text-[10px] font-mono bg-stone-50/50 dark:bg-stone-800 border border-stone-100 dark:border-stone-600 rounded px-1.5 py-0.5 text-stone-500 dark:text-stone-400">
                  Ctrl
                </kbd>
                <kbd className="text-[10px] ml-1 font-mono bg-stone-50/50 dark:bg-stone-800 border border-stone-100 dark:border-stone-600 rounded px-1.5 py-0.5 text-stone-500 dark:text-stone-400">
                  K
                </kbd>
              </div>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Light theme" : "Dark theme"}
              className="flex items-center justify-center w-8 h-8 text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-700 rounded-full cursor-pointer hover:border-stone-300 dark:hover:border-stone-600 transition-colors"
            >
              {isDark ? <Sun className="text-amber-500" /> : <Moon />}
            </button>
          </div>
        </div>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
