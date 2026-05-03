import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Grids = forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full h-96 bg-white relative overflow-hidden flex items-center justify-center ${className}`}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 48%, #000 49%, #000 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, #000 49%, #000 51%, transparent 52%)
            `,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10">{children}</div>
      </section>
    );
  },
);
Grids.displayName = "Grids";
