import React, { forwardRef } from "react";

export const GlassmorphismBadge = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md w-max text-blue-600 text-xs font-semibold tracking-wide uppercase cursor-pointer hover:bg-blue-500/20 transition-all ${className}`}
      {...props}
    >
      Beta Version
    </div>
  );
});
GlassmorphismBadge.displayName = "GlassmorphismBadge";
