import React, { forwardRef } from "react";

export const PulsingStatusBadge = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm w-max cursor-default hover:bg-zinc-50 transition-colors ${className}`}
      {...props}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span className="text-xs font-medium text-zinc-700">
        System Operational
      </span>
    </div>
  );
});
PulsingStatusBadge.displayName = "PulsingStatusBadge";
