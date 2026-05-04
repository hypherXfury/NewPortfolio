"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Search from "@/icons/Search";
import House from "@/icons/House";
import Work from "@/icons/Work";
import Terminal from "@/icons/Terminal";
import File from "@/icons/File";
import { LayoutDashboard } from "lucide-react";

const NAV_ITEMS: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { icon: House, label: "Home", href: "/" },
  { icon: Work, label: "Work", href: "/#experience" },
  { icon: Terminal, label: "Projects", href: "/#projects" },
  { icon: LayoutDashboard, label: "Components", href: "/blogs" },
  {
    icon: File,
    label: "Resume",
    href: "/Software-engineer_Bidyut-Kundu.pdf",
    external: true,
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = NAV_ITEMS.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, [open]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      setActiveIdx((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
    }

    if (e.key === "ArrowUp") {
      setActiveIdx((i) => Math.max(i - 1, 0));
    }

    if (e.key === "Escape") {
      onClose();
    }

    if (e.key === "Enter" && filtered[activeIdx]) {
      const item = filtered[activeIdx];
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = item.href;
      }
      onClose();
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black/40 flex items-start justify-center pt-20 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white dark:bg-stone-900 rounded-2xl w-full max-w-145 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150 border border-stone-200 dark:border-stone-700">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-200 dark:border-stone-700">
          <Search className="text-stone-400 dark:text-stone-500 shrink-0" />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIdx(0);
            }}
            onKeyDown={handleKey}
            placeholder="Search anything..."
            className="flex-1 text-[17px] text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 bg-transparent border-none outline-none"
          />

          <kbd
            onClick={onClose}
            className="text-[10px] font-mono bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-600 rounded px-1.5 py-0.5 text-stone-500 dark:text-stone-400 cursor-pointer"
          >
            Esc
          </kbd>
        </div>

        <div className="py-2">
          <p className="text-[11px] font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wide px-4 pt-2 pb-1">
            Quick links
          </p>

          {filtered.length === 0 && (
            <p className="text-sm text-stone-400 dark:text-stone-500 px-4 py-3">
              No results found.
            </p>
          )}

          {filtered.map((item, idx) => {
            const row = (
              <>
                <span className="w-7 h-7 rounded-md bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-[13px]">
                  <item.icon />
                </span>
                {item.label}
              </>
            );
            const className = `flex items-center gap-3 px-4 py-2.5 text-sm text-stone-700 dark:text-stone-200 transition-colors ${
              idx === activeIdx
                ? "bg-stone-100 dark:bg-stone-800"
                : "hover:bg-stone-50 dark:hover:bg-stone-800/60"
            }`;

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                onMouseEnter={() => setActiveIdx(idx)}
                className={className}
              >
                {row}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                onMouseEnter={() => setActiveIdx(idx)}
                className={className}
              >
                {row}
              </Link>
            );
          })}
        </div>

        <div className="border-t border-stone-200 dark:border-stone-700 px-4 py-2.5 flex gap-4">
          {[
            ["↑↓", "navigate"],
            ["↵", "select"],
            ["Esc", "close"],
          ].map(([key, desc]) => (
            <span
              key={key}
              className="flex items-center gap-1.5 text-[11px] text-stone-400 dark:text-stone-500"
            >
              <kbd className="font-mono bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-600 rounded px-1 py-0.5 text-stone-500 dark:text-stone-400">
                {key}
              </kbd>
              {desc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
