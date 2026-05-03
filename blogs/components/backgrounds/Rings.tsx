import React, { forwardRef } from "react";

export interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Rings = forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={`w-full h-96 bg-white relative overflow-hidden ${className}`}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              repeating-radial-gradient(
                circle at center,
                transparent 0px,
                transparent 14px,
                #000 15px,
                transparent 16px
              )
            `,
            backgroundSize: "100px 100px",
          }}
        />
        <div className="relative z-10">{children}</div>
      </section>
    );
  },
);
Rings.displayName = "Rings";
