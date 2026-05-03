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

export const TwitterProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-zinc-200 rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="h-20 bg-sky-100" />
    <div className="px-4 pb-4 -mt-8">
      <div className="w-16 h-16 rounded-full border-4 border-white bg-sky-50 flex items-center justify-center">
        <User className="w-7 h-7 text-sky-500" />
      </div>
      <div className="flex items-start justify-between mt-2">
        <div>
          <p className="font-bold text-zinc-900">John Doe</p>
          <p className="text-zinc-400 text-xs">@johndoe</p>
        </div>
        <button className="mt-1 px-4 py-1.5 text-xs font-medium cursor-pointer bg-zinc-900 text-white rounded-full hover:bg-black transition-colors">
          Follow
        </button>
      </div>
      <p className="text-zinc-700 text-xs mt-2 leading-relaxed">
        Building things on the web · Minimalism enthusiast · Open-source forever
      </p>
      <div className="flex gap-1 mt-2 text-xs text-zinc-500 flex-wrap">
        <span className="flex items-center gap-1">
          <MapPin size={11} /> West Bengal
        </span>
        <span className="flex items-center gap-1 ml-2">
          <Link size={11} /> example.com
        </span>
      </div>
      <div className="flex gap-4 mt-3 text-xs text-zinc-500">
        <span>
          <b className="text-zinc-900">320</b> Following
        </span>
        <span>
          <b className="text-zinc-900">1.2K</b> Followers
        </span>
      </div>
    </div>
  </div>
));
TwitterProfileCard.displayName = "TwitterProfileCard";
