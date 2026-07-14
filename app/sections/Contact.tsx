"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { GmailIcon } from "@/icons/brands/Gmail";
import { SquareGithubIcon } from "@/icons/brands/Github";
import { LinkedinIcon } from "@/icons/brands/LinkedIn";
import { ProducthuntIcon } from "@/icons/brands/ProductHunt";
import { SquareXTwitterIcon } from "@/icons/brands/Twitter";

const EMAIL = "bidyut.kundu.dev@gmail.com";

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/BidyutKundu12",
    icon: SquareXTwitterIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bidyut-kundu-4ba406242",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/bidyut10",
    icon: SquareGithubIcon,
  },
  {
    label: "Product Hunt",
    href: "https://www.producthunt.com/@bidyut_kundu",
    icon: ProducthuntIcon,
  },
] as const;

function ContactEmail() {
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
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex cursor-pointer items-center gap-2 bg-transparent p-0"
      aria-label={copied ? "Email copied" : `Copy ${EMAIL}`}
    >
      <GmailIcon className="size-4 shrink-0" />
      <span className="text-sm font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:decoration-neutral-500">
        {EMAIL}
      </span>
      <span className="min-w-[3.5rem] text-left text-xs text-neutral-400">
        {copied ? (
          <span className="inline-flex items-center gap-1 text-emerald-600">
            copied
            <Check className="size-3.5" />
          </span>
        ) : (
          "copy"
        )}
      </span>
    </button>
  );
}

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative mt-28 w-full overflow-hidden">

      <div className="relative mx-auto flex w-full max-w-lg flex-col items-start px-4 pt-16 pb-6 text-left md:px-0">
        <p className="font-serif text-lg leading-snug text-neutral-500">
          Thanks for stopping by,
        </p>

        <Image
          src="/bifyut-profile-sign.webp"
          alt="Bidyut Kundu signature"
          width={420}
          height={160}
          className="mt-8 h-20 w-auto select-none object-contain object-left opacity-95 sm:h-24"
        />

        <p className="mt-10 max-w-[28ch] text-sm leading-relaxed text-neutral-500">
          If you want to work together or just say hi — my inbox is open.
        </p>

        <div className="mt-6">
          <ContactEmail />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-start gap-x-5 gap-y-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <Icon className="size-3.5 text-neutral-700" />
              {label}
            </Link>
          ))}
        </div>
      </div>

      <footer className="relative mx-auto w-full max-w-lg px-4 pt-14 pb-14 md:px-0">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200/70 pt-6">
          <p className="text-xs text-neutral-400">© {year} Bidyut Kundu</p>
          <p className="text-xs text-neutral-400">Kolkata, India</p>
        </div>
      </footer>
    </section>
  );
}
