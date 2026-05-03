"use client";
import { useState, useEffect } from "react";
import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";
import Search from "@/icons/Search";
import SearchModal from "@/components/SearchModal";

const NAV_LINKS = [
  { label: "Home", href: "#", target: undefined },
  { label: "Work", href: "#experience", target: undefined },
  { label: "Projects", href: "#projects", target: undefined },
  {
    label: "Resume",
    href: "/Software-engineer_Bidyut-Kundu.pdf",
    target: "_blank",
  },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

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

  return (
    <>
      <nav className="sticky top-0 z-50 bg-stone-50/85 backdrop-blur-md">
        <div className="max-w-170 mx-auto px-6 h-13 flex items-center justify-between border-b border-stone-200">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map(({ label, href , target}) => (
              <a
                key={label}
                href={href}
                target={target}
                className="text-[13.5px] text-stone-500 hover:text-stone-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-[13px] text-stone-400 bg-white border border-stone-200 rounded-full px-1.5 md:px-3 py-1.5 cursor-pointer hover:border-stone-300 transition-colors"
            >
              <Search />
              <div className="hidden md:flex items-center">
                <kbd className="text-[10px] font-mono bg-stone-100 border border-stone-200 rounded px-1.5 py-0.5 text-stone-500">
                  Ctrl
                </kbd>
                <kbd className="text-[10px] ml-1 font-mono bg-stone-100 border border-stone-200 rounded px-1.5 py-0.5 text-stone-500">
                  K
                </kbd>
              </div>
            </button>
            <div className="flex items-center gap-2 text-[13px] text-stone-400 bg-white border border-stone-200 rounded-full p-1.5 cursor-pointer hover:border-stone-300 transition-colors">
              <Moon />
            </div>
          </div>
        </div>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}