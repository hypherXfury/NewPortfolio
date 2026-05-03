"use client";

import { useEffect, useRef, useState } from "react";
import Search from "@/icons/Search";
import House from "@/icons/House";
import Work from "@/icons/Work";
import Terminal from "@/icons/Terminal";
import File from "@/icons/File";

const NAV_ITEMS = [
  { icon: House, label: "Home", href: "#home", target: undefined },
  { icon: Work, label: "Work", href: "#work", target: undefined },
  { icon: Terminal, label: "Projects", href: "#projects", target: undefined },
  {
    icon: File,
    label: "Resume",
    href: "/Software-engineer_Bidyut-Kundu.pdf",
    target: "_blank",
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

  // ✅ FIX: reset state WITHOUT useEffect or setState in effect
  if (open && query !== "") {
    setQuery("");
    setActiveIdx(0);
  }

  useEffect(() => {
    if (!open) return;

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, [open]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    }

    if (e.key === "ArrowUp") {
      setActiveIdx((i) => Math.max(i - 1, 0));
    }

    if (e.key === "Escape") {
      onClose();
    }

    if (e.key === "Enter" && filtered[activeIdx]) {
      window.location.href = filtered[activeIdx].href;
      onClose();
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black/40 flex items-start justify-center pt-20 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-145 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-200">
          <Search className="text-stone-400 shrink-0" />

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
            className="flex-1 text-[17px] text-stone-800 placeholder:text-stone-400 bg-transparent border-none outline-none"
          />

          <kbd
            onClick={onClose}
            className="text-[10px] font-mono bg-stone-100 border border-stone-200 rounded px-1.5 py-0.5 text-stone-500 cursor-pointer"
          >
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="py-2">
          <p className="text-[11px] font-medium text-stone-400 uppercase tracking-wide px-4 pt-2 pb-1">
            Quick links
          </p>

          {filtered.length === 0 && (
            <p className="text-sm text-stone-400 px-4 py-3">
              No results found.
            </p>
          )}

          {filtered.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              target={item.target}
              onClick={onClose}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm text-stone-700 transition-colors ${
                idx === activeIdx ? "bg-stone-100" : "hover:bg-stone-50"
              }`}
            >
              <span className="w-7 h-7 rounded-md bg-stone-100 flex items-center justify-center text-[13px]">
                <item.icon />
              </span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 px-4 py-2.5 flex gap-4">
          {[
            ["↑↓", "navigate"],
            ["↵", "select"],
            ["Esc", "close"],
          ].map(([key, desc]) => (
            <span
              key={key}
              className="flex items-center gap-1.5 text-[11px] text-stone-400"
            >
              <kbd className="font-mono bg-stone-100 border border-stone-200 rounded px-1 py-0.5 text-stone-500">
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
