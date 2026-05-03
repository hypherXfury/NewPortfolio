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

export const LinkedInProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-zinc-200 rounded-xl overflow-hidden font-sans shadow-sm ${className}`}
    {...props}
  >
    <div className="h-20 bg-linear-to-r from-blue-700 to-blue-500" />
    <div className="px-4 pb-4 -mt-8">
      <div className="w-16 h-16 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow">
        JD
      </div>
      <h4 className="mt-2 font-bold text-zinc-900">John Doe</h4>
      <p className="text-zinc-600 text-xs">
        Software Developer at OpenSourceUI
      </p>
      <p className="text-zinc-400 text-xs mt-0.5">
        West Bengal, India · 500+ connections
      </p>
      <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
        Passionate about open-source, minimal UI, and developer tools.
      </p>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Connect
        </button>
        <button className="flex-1 py-1.5 text-xs font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
          Message
        </button>
      </div>
    </div>
    <div className="border-t border-zinc-100 px-4 py-3 flex justify-around text-center">
      <div>
        <p className="text-sm font-bold text-zinc-900">42</p>
        <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
          Posts
        </p>
      </div>
      <div>
        <p className="text-sm font-bold text-zinc-900">500+</p>
        <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
          Connections
        </p>
      </div>
      <div>
        <p className="text-sm font-bold text-zinc-900">2.5yr</p>
        <p className="text-[10px] text-zinc-400 uppercase tracking-wide">
          Experience
        </p>
      </div>
    </div>
  </div>
));
LinkedInProfileCard.displayName = "LinkedInProfileCard";
