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

export const GithubProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-zinc-200 rounded-xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="h-16 bg-zinc-900" />
    <div className="px-5 pb-5 -mt-8 flex flex-col">
      <div className="w-16 h-16 rounded-full border-4 border-white bg-zinc-100 flex items-center justify-center shadow">
        <User size={28} className="text-zinc-700" />
      </div>
      <h4 className="mt-2 font-bold text-zinc-900">johndoe</h4>
      <p className="text-zinc-500 text-xs">John Doe</p>
      <p className="text-zinc-600 text-xs mt-1 leading-relaxed">
        Open-source developer · Building minimal UI systems
      </p>
      <div className="mt-3 flex gap-4 text-xs text-zinc-500">
        <span className="flex items-center gap-1">
          <Users size={12} /> <b className="text-zinc-900">124</b> followers
        </span>
        <span className="flex items-center gap-1">
          <UserCheck size={12} /> <b className="text-zinc-900">80</b> following
        </span>
      </div>
      <div className="mt-2 flex gap-3 text-xs text-zinc-500">
        <span className="flex items-center gap-1">
          <MapPin size={11} /> West Bengal
        </span>
        <span className="flex items-center gap-1">
          <Link size={11} className="text-blue-500" /> example.com
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 py-1.5 text-xs cursor-pointer font-mono font-medium bg-zinc-900 text-white rounded-md hover:bg-black transition-colors">
          Follow
        </button>
        <button className="flex-1 py-1.5 text-xs cursor-pointer font-mono font-medium border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors text-zinc-700">
          Message
        </button>
      </div>
    </div>
    <div className="border-t border-zinc-100 px-5 py-3 flex justify-around text-center">
      <div>
        <p className="text-sm font-bold text-zinc-900">42</p>
        <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
          Repos
        </p>
      </div>
      <div>
        <p className="text-sm font-bold text-zinc-900">550</p>
        <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
          Commits
        </p>
      </div>
      <div>
        <p className="text-sm font-bold text-zinc-900">18</p>
        <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
          Stars
        </p>
      </div>
    </div>
  </div>
));
GithubProfileCard.displayName = "GithubProfileCard";
