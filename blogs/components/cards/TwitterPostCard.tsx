import React, { forwardRef } from "react";
import {
  Mail,
  MapPin,
  MessageSquare,
  Heart,
  Share2,
  Repeat2,
  ThumbsUp,
  Send,
  Bookmark,
  MoreHorizontal,
  StickyNote,
  GitBranchIcon,
  Globe,
  Phone,
  Link,
  UserCheck,
  Users,
  ImageIcon,
  Image,
  User,
} from "lucide-react";

export const TwitterPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-md p-5 bg-white border border-zinc-200 rounded-2xl font-sans hover:shadow-sm transition-shadow ${className}`}
    {...props}
  >
    <div className="flex gap-3">
      <div className="w-11 h-11 bg-zinc-900 rounded-full shrink-0 flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-zinc-900 text-sm">
              John Doe
            </span>
            <span className="text-zinc-400 text-xs">@johndoe · 2h</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-400 shrink-0" />
        </div>
        <p className="mt-2 text-zinc-800 text-sm leading-relaxed">
          Building the future of UI with minimalist design and performance-first
          components. Obsessed with the little details. ✦{" "}
          <span className="text-sky-500">#WebDev #Design</span>
        </p>
        <div className="flex justify-between mt-4 text-zinc-400 max-w-xs">
          <button className="flex items-center gap-1 cursor-pointer hover:text-sky-500 transition-colors">
            <MessageSquare size={15} />
            <span className="text-xs">12</span>
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition-colors">
            <Repeat2 size={15} />
            <span className="text-xs">38</span>
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-rose-500 transition-colors">
            <Heart size={15} />
            <span className="text-xs">450</span>
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-sky-500 transition-colors">
            <Bookmark size={15} />
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-sky-500 transition-colors">
            <Share2 size={15} />
          </button>
        </div>
      </div>
    </div>
  </div>
));
TwitterPostCard.displayName = "TwitterPostCard";
