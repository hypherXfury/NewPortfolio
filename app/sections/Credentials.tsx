import Link from "next/link";

import { FilesIcon } from "@/icons/brands/File";
import { site } from "@/app/data/site";

type Certificate = {
  id: string;
  name: string;
  note?: string;
  href?: string;
};

const certificates: Certificate[] = [
  {
    id: "nptel-java",
    name: "Programming in Java — NPTEL",
    note: "Silver + Elite medalist",
  },
  { id: "infosys-java", name: "Core Java — Infosys" },
  { id: "gameeon-csharp", name: "C# for Game Developers — GameEon Studios" },
];

export default function Credentials() {
  return (
    <section id="credentials" className="section-block">
      <h2 className="font-serif text-4xl tracking-tight text-neutral-950">
        Resume and Certificates
      </h2>

      <ul className="mt-12 divide-y divide-dashed divide-neutral-200 border-y border-dashed border-neutral-200">
        <li className="flex min-h-12 items-center gap-3 py-3 text-sm">
          <FilesIcon className="size-4 shrink-0" />
          <Link
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-300 underline-offset-4"
          >
            Resume
          </Link>
        </li>

        {certificates.map((cert) => (
          <li
            key={cert.id}
            className="flex min-h-12 items-center gap-3 py-3 text-sm"
          >
            <FilesIcon className="size-4 shrink-0" />
            <span className="flex min-w-0 flex-1 flex-wrap justify-between gap-2 text-neutral-700">
              {cert.href ? (
                <Link
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-300 underline-offset-4"
                >
                  {cert.name}
                </Link>
              ) : (
                <span>{cert.name}</span>
              )}
              {cert.note && (
                <span className="text-xs text-neutral-400">{cert.note}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
