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

export const LinkedInPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-md p-5 bg-white border border-zinc-200 rounded-xl font-sans ${className}`}
    {...props}
  >
    <div className="flex gap-3 mb-3">
      <div className="w-12 h-12 bg-blue-600 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-sm">
        JD
      </div>
      <div>
        <p className="font-semibold text-zinc-900 text-sm">John Doe</p>
        <p className="text-zinc-500 text-xs">Software Developer · 1st</p>
        <p className="text-zinc-400 text-xs">
          2h · <Globe className="inline w-3 h-3" />
        </p>
      </div>
      <div className="ml-auto">
        <MoreHorizontal className="w-5 h-5 text-zinc-400" />
      </div>
    </div>
    <p className="text-zinc-800 text-sm leading-relaxed mb-3">
      Excited to share my latest open-source UI library — built with
      accessibility and performance in mind. Check it out and let me know what
      you think! 🚀
      <br />
      <span className="text-blue-600">#OpenSource #UI #React #FrontendDev</span>
    </p>
    <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-3 mb-3">
      <p className="text-xs font-semibold text-zinc-800">example.com</p>
      <p className="text-xs text-zinc-500">
        Minimal, performant UI components for modern apps.
      </p>
    </div>
    <div className="flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-100 pt-3">
      <span className="flex items-center gap-1">
        <ThumbsUp size={13} className="text-blue-600" /> 842 reactions
      </span>
      <span>57 comments · 23 reposts</span>
    </div>
    <div className="flex gap-1 mt-3 border-t border-zinc-100 pt-3">
      {[
        { icon: <ThumbsUp size={14} />, label: "Like" },
        { icon: <MessageSquare size={14} />, label: "Comment" },
        { icon: <Repeat2 size={14} />, label: "Repost" },
        { icon: <Send size={14} />, label: "Send" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="flex-1 flex flex-col items-center gap-1 py-1 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors text-[11px] font-medium cursor-pointer"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  </div>
));
LinkedInPostCard.displayName = "LinkedInPostCard";
