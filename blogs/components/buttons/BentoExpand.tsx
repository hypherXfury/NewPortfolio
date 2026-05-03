import React, { forwardRef } from "react";



export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BentoExpand = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group flex items-center bg-zinc-900 rounded-full px-5 py-3 border border-white/5 cursor-pointer transition-colors duration-300 hover:bg-zinc-800 ${className}`}
        {...props}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mr-3 transition-transform duration-500 group-hover:scale-125" />
        <div className="flex items-center overflow-hidden">
          <div className="grid grid-cols-[1fr] transition-[grid-template-columns,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:grid-cols-[0fr] group-hover:opacity-0">
            <span className="overflow-hidden text-zinc-400 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
              Button
            </span>
          </div>
          <div className="grid grid-cols-[0fr] transition-[grid-template-columns,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:grid-cols-[1fr] group-hover:opacity-100 opacity-0">
            <span className="overflow-hidden text-white text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
              {children}
            </span>
          </div>
        </div>
      </button>
    );
  },
);
BentoExpand.displayName = "BentoExpand";
