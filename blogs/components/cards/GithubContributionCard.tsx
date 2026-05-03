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

export const GithubContributionCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-fit p-6 bg-white border border-zinc-200 rounded-xl font-mono ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <GitBranchIcon size={16} className="text-zinc-800" />
        <span className="text-sm font-medium text-zinc-800">Contributions</span>
      </div>
      <span className="text-xs text-zinc-400">Past year</span>
    </div>
    <div className="flex items-end gap-2 mb-4">
      <span className="text-4xl font-bold text-zinc-800">550</span>
      <span className="text-zinc-400 text-sm mb-1">commits</span>
    </div>
    <div
      className="grid gap-0.75"
      style={{ gridTemplateColumns: "repeat(26, 1fr)" }}
    >
      {[...Array(52 * 2)].map((_, i) => {
        // Use deterministic pseudo-random to prevent hydration errors
        const shade = ((i * 137 + 53) % 100) / 100;
        const bg =
          shade > 0.85
            ? "bg-emerald-600"
            : shade > 0.6
              ? "bg-emerald-400"
              : shade > 0.35
                ? "bg-emerald-200"
                : "bg-zinc-100";
        return <div key={i} className={`w-3 h-3 rounded-sm ${bg}`} />;
      })}
    </div>
    <div className="flex justify-between mt-2 text-[10px] text-zinc-400">
      <span>Less</span>
      <div className="flex items-center gap-1">
        {[
          "bg-zinc-100",
          "bg-emerald-200",
          "bg-emerald-400",
          "bg-emerald-600",
        ].map((c) => (
          <div key={c} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
        ))}
      </div>
      <span>More</span>
    </div>
  </div>
));
GithubContributionCard.displayName = "GithubContributionCard";
