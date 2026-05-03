import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LiquidBorder = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative p-px overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer ${className}`}
        {...props}
      >
        <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#3b82f6_50%,#E2E8F0_100%)]" />
        <div className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3 text-xs font-mono text-slate-950 backdrop-blur-3xl">
          {children}
        </div>
      </button>
    );
  },
);
LiquidBorder.displayName = "LiquidBorder";
