import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Horizontal = forwardRef<HTMLElement, BackgroundProps>(
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
              "repeating-linear-gradient(90deg, #000 0, #000 0.5px, transparent 0, transparent 50%)",
            backgroundSize: "120px 120px",
          }}
        />
        {children}
      </section>
    );
  },
);
Horizontal.displayName = "Horizontal";
