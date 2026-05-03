import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Circles = forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full h-96 bg-white relative overflow-hidden flex items-center justify-center ${className}`}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(#000 0.8px, transparent 0.8px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 85%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </section>
    );
  },
);
Circles.displayName = "Circles";
