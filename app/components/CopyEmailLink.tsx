"use client";

import { useState } from "react";

import { GmailIcon } from "@/icons/brands/Gmail";
import { Check } from "lucide-react";

const EMAIL = "bidyut.kundu.dev@gmail.com";

export function CopyEmailLink() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can fail in insecure contexts; ignore quietly.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="text-sm font-normal text-neutral-400">Get in touch</span>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex cursor-pointer items-center gap-2 bg-transparent p-0 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
        aria-label={copied ? "Email copied" : `Copy ${EMAIL}`}
      >
        <GmailIcon className="size-4 shrink-0" />
        <span className="underline decoration-neutral-300 underline-offset-4">
          {EMAIL}
        </span>
        <span className="font-normal text-xs text-neutral-400">
          {copied ? <div className="flex items-center gap-2 text-xs font-normal animate-pulse">copied<Check className="size-4 text-green-400" /></div> : ""}
        </span>
      </button>
    </div>
  );
}
