import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const GlassInset = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative px-8 py-3 bg-zinc-50/50 rounded-2xl overflow-hidden transition-all duration-300 active:scale-95 cursor-pointer ${className}`}
        {...props}
      >
        <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] rounded-2xl" />
        <span className="relative z-10 bg-linear-to-b from-zinc-800 to-zinc-500 bg-clip-text text-transparent font-bold uppercase tracking-wider text-[11px]">
          {children}
        </span>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>
    );
  },
);
GlassInset.displayName = "GlassInset";
