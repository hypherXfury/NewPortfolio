import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const VelvetBorder = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative p-px rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${className}`}
        {...props}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,#fff_0%,#e4e4e7_25%,#fff_50%,#e4e4e7_75%,#fff_100%)] animate-[spin_4s_linear_infinite]" />
        <div className="relative px-8 py-3 rounded-[7px] bg-white flex items-center justify-center">
          <span className="text-zinc-500 group-hover:text-zinc-900 transition-colors duration-300 text-xs font-mono">
            {children}
          </span>
        </div>
      </button>
    );
  },
);
VelvetBorder.displayName = "VelvetBorder";
