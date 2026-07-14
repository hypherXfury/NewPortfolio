import type { ReactNode } from "react";

export function Paragraph({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "dark";
}) {
  return (
    <p
      className={`mt-6 text-start font-sans text-base leading-relaxed tracking-tight ${tone === "muted" ? "text-neutral-700" : "text-neutral-900"}`}
    >
      {children}
    </p>
  );
}