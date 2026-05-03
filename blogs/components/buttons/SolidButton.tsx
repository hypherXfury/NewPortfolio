import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SolidButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative px-5 py-2 overflow-hidden bg-white border border-zinc-900 font-mono text-[10px] tracking-widest cursor-pointer ${className}`}
        {...props}
      >
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          {children}
        </span>
        <div className="absolute inset-0 bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    );
  },
);
SolidButton.displayName = "SolidButton";
