import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Cross = forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full h-96 bg-white relative overflow-hidden ${className}`}
        {...props}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="crossPattern"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="14"
                y1="14"
                x2="18"
                y2="18"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="18"
                y1="14"
                x2="14"
                y2="18"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crossPattern)" />
        </svg>
        <div className="relative z-10">{children}</div>
      </section>
    );
  },
);
Cross.displayName = "Cross";
