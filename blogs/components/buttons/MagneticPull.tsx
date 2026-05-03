import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MagneticPull = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative px-10 py-4 bg-white border border-zinc-200 rounded-full flex items-center gap-3 cursor-pointer transition-all duration-500 hover:border-zinc-400 hover:shadow-2xl hover:shadow-zinc-100 ${className}`}
        {...props}
      >
        <span className="relative z-10 text-zinc-900 text-xs font-mono transition-transform duration-500 group-hover:translate-x-2">
          {children}
        </span>
        <div className="w-2 h-2 rounded-full bg-amber-400 transition-all duration-500 group-hover:scale-[3.5] group-hover:-translate-x-28 group-hover:opacity-0" />
        <div className="absolute right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-amber-400">
          →
        </div>
      </button>
    );
  },
);
MagneticPull.displayName = "MagneticPull";
