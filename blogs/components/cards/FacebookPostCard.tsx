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

export const FacebookPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-md p-4 bg-white border border-zinc-200 rounded-xl font-sans shadow-sm ${className}`}
    {...props}
  >
    <div className="flex gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-zinc-900 shrink-0 flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="font-semibold text-zinc-900 text-sm">John Doe</p>
        <p className="text-zinc-400 text-xs">
          3 hours ago · <Globe className="inline w-3 h-3" />
        </p>
      </div>
      <div className="ml-auto">
        <MoreHorizontal className="w-5 h-5 text-zinc-400" />
      </div>
    </div>
    <p className="text-zinc-800 text-sm leading-relaxed mb-3">
      Just launched a new side project — an open-source collection of minimal
      React UI cards. Drop a ❤️ if you'd find this useful!
    </p>
    <div className="bg-zinc-100 rounded-lg h-32 flex items-center justify-center mb-3">
      <ImageIcon className="text-zinc-400 w-8 h-8" />
    </div>
    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2 px-1">
      <span className="flex items-center gap-1">
        <span className="bg-blue-500 rounded-full w-4 h-4 inline-flex items-center justify-center">
          <ThumbsUp size={9} className="text-white fill-white" />
        </span>
        <span className="bg-rose-500 rounded-full w-4 h-4 inline-flex items-center justify-center -ml-1">
          <Heart size={9} className="text-white fill-white" />
        </span>
        312
      </span>
      <span>48 comments · 9 shares</span>
    </div>
    <div className="flex border-t border-zinc-100 pt-2 gap-1">
      {[
        { icon: <ThumbsUp size={14} />, label: "Like" },
        { icon: <MessageSquare size={14} />, label: "Comment" },
        { icon: <Share2 size={14} />, label: "Share" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-zinc-500 hover:bg-zinc-50 rounded-md transition-colors text-xs font-medium"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  </div>
));
FacebookPostCard.displayName = "FacebookPostCard";
