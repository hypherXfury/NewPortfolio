import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InkBleed = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative px-6 py-2 overflow-hidden bg-white transition-colors duration-500 cursor-pointer ${className}`}
        {...props}
      >
        <span className="relative z-10 text-xs font-mono text-zinc-900 group-hover:text-white transition-colors duration-500">
          {children}
        </span>
        <div className="absolute inset-0 z-0 bg-zinc-900 scale-0 group-hover:scale-[2.5] transition-transform duration-700 ease-out origin-center" />
      </button>
    );
  },
);
InkBleed.displayName = "InkBleed";
