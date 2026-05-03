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

export const FacebookProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-zinc-200 rounded-xl overflow-hidden font-sans shadow-sm ${className}`}
    {...props}
  >
    <div className="h-24 bg-blue-500" />
    <div className="px-4 pb-4 -mt-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center shadow">
        <User className="w-8 h-8 text-zinc-800" />
      </div>
      <h4 className="mt-2 font-bold text-zinc-900 text-lg">John Doe</h4>
      <p className="text-zinc-500 text-xs">@johndoe · West Bengal</p>
      <p className="text-zinc-600 text-xs mt-1.5 leading-relaxed">
        Software dev · Open-source advocate · Building cool UIs
      </p>
      <div className="flex gap-6 mt-3 text-xs text-zinc-500">
        <div className="text-center">
          <p className="font-bold text-zinc-900">1.2K</p>
          <p>Friends</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-zinc-900">84</p>
          <p>Followers</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2 w-full">
        <button className="flex-1 py-1.5 text-xs font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Add Friend
        </button>
        <button className="flex-1 py-1.5 text-xs font-medium border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors text-zinc-700">
          Message
        </button>
      </div>
    </div>
  </div>
));
FacebookProfileCard.displayName = "FacebookProfileCard";
