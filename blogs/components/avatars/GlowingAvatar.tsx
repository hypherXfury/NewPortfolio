import React, { forwardRef } from "react";
import { User } from "lucide-react";

export const GlowingAvatar = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative group cursor-pointer ${className}`}
      {...props}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
        <User className="w-5 h-5 text-white" />
      </div>
    </div>
  );
});
GlowingAvatar.displayName = "GlowingAvatar";
