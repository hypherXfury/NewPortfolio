import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Sparse = forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full h-96 bg-white relative overflow-hidden ${className}`}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10">{children}</div>
      </section>
    );
  },
);
Sparse.displayName = "Sparse";
