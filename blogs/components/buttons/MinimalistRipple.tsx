import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MinimalistRipple = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative px-8 py-3 bg-transparent transition-all duration-300 cursor-pointer ${className}`}
        {...props}
      >
        <div className="absolute inset-0 bg-zinc-200/50 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
        <span className="relative z-10 text-zinc-600 text-xs font-mono flex items-center gap-2">
          {children}
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </span>
      </button>
    );
  },
);
MinimalistRipple.displayName = "MinimalistRipple";
