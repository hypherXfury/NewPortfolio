import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SoftFloat = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative px-8 py-3 bg-white text-zinc-800 border border-zinc-200 rounded-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer ${className}`}
        {...props}
      >
        <span className="relative z-10 text-xs font-mono">{children}</span>
        <div className="absolute inset-0 bg-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      </button>
    );
  },
);
SoftFloat.displayName = "SoftFloat";
