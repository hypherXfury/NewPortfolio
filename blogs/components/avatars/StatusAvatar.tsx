import React, { forwardRef } from "react";
import { User } from "lucide-react";

export const StatusAvatar = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative w-12 h-12 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center shadow-sm ${className}`}
      {...props}
    >
      <User className="w-5 h-5 text-zinc-400" />
      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
    </div>
  );
});
StatusAvatar.displayName = "StatusAvatar";
