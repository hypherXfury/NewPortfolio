import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Stripes = forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full h-96 bg-white relative overflow-hidden ${className}`}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        {children}
      </section>
    );
  },
);
Stripes.displayName = "Stripes";
