import React, { forwardRef } from "react";

export const SoftTag = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={`flex gap-2 ${className}`} {...props}>
      <span className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-600 text-xs font-medium border border-rose-100 hover:bg-rose-100 transition-colors cursor-pointer">
        Bug
      </span>
      <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 text-xs font-medium border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-pointer">
        Feature
      </span>
    </div>
  );
});
SoftTag.displayName = "SoftTag";
