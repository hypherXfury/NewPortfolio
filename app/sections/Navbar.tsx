"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type SectionId = "home" | "projects";

const navLinkBase =
  "underline decoration-neutral-300 underline-offset-4 transition-all duration-300 hover:text-neutral-900 hover:decoration-rose-300";

export default function Navbar() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const sectionIds: SectionId[] = ["home", "projects"];

    const updateActive = () => {
      const offset = 120;
      let current: SectionId = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="relative z-10 w-full">
      <nav className="mx-auto flex h-14 w-full max-w-lg items-center justify-between px-6 md:px-0">
        <p className="inline-flex shrink-0 items-center gap-2 text-xs font-medium text-neutral-500">
          Open to work
          <span
            className="size-2 animate-pulse rounded-full bg-emerald-500"
            title="Available"
            aria-hidden
          />
        </p>

        <div className="flex items-center gap-5 text-sm font-medium tracking-tight">
          <Link
            href="#home"
            aria-current={active === "home" ? "page" : undefined}
            className={cn(
              navLinkBase,
              active === "home"
                ? "text-neutral-950 decoration-rose-300"
                : "text-neutral-600",
            )}
          >
            Home
          </Link>
          <Link
            href="https://opensourceui.in"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(navLinkBase, "text-neutral-600")}
          >
            Components
          </Link>
          <Link
            href="#projects"
            aria-current={active === "projects" ? "page" : undefined}
            className={cn(
              navLinkBase,
              active === "projects"
                ? "text-neutral-950 decoration-rose-300"
                : "text-neutral-600",
            )}
          >
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}
