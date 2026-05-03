import React, { forwardRef } from "react";
import { User } from "lucide-react";

export const AvatarStack = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex -space-x-3 hover:space-x-1 transition-all duration-300 ${className}`}
      {...props}
    >
      <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 font-medium z-[3] shadow-sm transition-transform hover:scale-110 hover:z-10 cursor-pointer">
        AB
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-600 font-medium z-[2] shadow-sm transition-transform hover:scale-110 hover:z-10 cursor-pointer">
        CD
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-rose-600 font-medium z-[1] shadow-sm transition-transform hover:scale-110 hover:z-10 cursor-pointer">
        EF
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium z-[0] shadow-sm transition-transform hover:scale-110 hover:z-10 cursor-pointer">
        +3
      </div>
    </div>
  );
});
AvatarStack.displayName = "AvatarStack";
