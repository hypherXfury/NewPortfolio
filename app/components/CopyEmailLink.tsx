"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { GmailIcon } from "@/icons/brands/Gmail";
import { site } from "@/app/data/site";

export function CopyEmailLink({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can fail in insecure contexts; ignore quietly.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group inline-flex max-w-full items-center gap-2 text-left text-sm text-neutral-700 transition-colors hover:text-neutral-950 ${className}`}
      aria-label={copied ? "Email copied" : `Copy ${site.email}`}
    >
      {copied ? (
        <Check className="size-4 shrink-0 text-emerald-500" />
      ) : (
        <GmailIcon className="size-4 shrink-0" />
      )}
      <span className="truncate">{copied ? "copied" : site.email}</span>
    </button>
  );
}
