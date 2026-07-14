import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="mx-auto flex w-full flex-col items-center justify-center"
    >
      <div
        className={cn("relative my-20 max-w-lg px-4 md:px-0", className)}
      >
        {children}
      </div>
    </div>
  );
}
