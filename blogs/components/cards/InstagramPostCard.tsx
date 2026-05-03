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

export const InstagramPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`max-w-xs bg-white border border-zinc-200 rounded-xl font-sans overflow-hidden ${className}`}
    {...props}
  >
    <div className="flex items-center gap-2 px-3 py-2.5">
      <div className="w-8 h-8 rounded-full p-0.5 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600">
        <div className="w-full h-full rounded-full bg-white p-0.5">
          <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
            <User size={12} className="text-white" />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-zinc-900 text-xs">johndoe.dev</p>
        <p className="text-zinc-400 text-[10px]">West Bengal, India</p>
      </div>
      <MoreHorizontal className="w-4 h-4 text-zinc-400 ml-auto" />
    </div>

    <div className="bg-zinc-100 h-52 flex items-center justify-center">
      <Image className="text-zinc-400 w-10 h-10" />
    </div>

    <div className="px-3 pt-2.5 pb-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <button className="cursor-pointer hover:opacity-70">
            <Heart size={18} className="text-zinc-800" />
          </button>
          <button className="cursor-pointer hover:opacity-70">
            <MessageSquare size={18} className="text-zinc-800" />
          </button>
          <button className="cursor-pointer hover:opacity-70">
            <Send size={18} className="text-zinc-800" />
          </button>
        </div>
        <button className="cursor-pointer hover:opacity-70">
          <Bookmark size={18} className="text-zinc-800" />
        </button>
      </div>
      <p className="text-xs font-semibold text-zinc-900 mb-1">1,204 likes</p>
      <p className="text-xs text-zinc-800 leading-relaxed">
        <span className="font-semibold">johndoe.dev</span> New card UI drop 🃏
        Minimal, clean, and open-source.{" "}
        <span className="text-blue-500">#uidesign #reactjs #webdev</span>
      </p>
      <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wide">
        2 hours ago
      </p>
    </div>
  </div>
));
InstagramPostCard.displayName = "InstagramPostCard";
