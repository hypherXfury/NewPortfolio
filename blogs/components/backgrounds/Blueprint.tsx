import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Blueprint = forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full h-96 bg-white relative overflow-hidden ${className}`}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "10px 10px",
          }}
        />
        <div className="relative z-10">{children}</div>
      </section>
    );
  },
);
Blueprint.displayName = "Blueprint";
