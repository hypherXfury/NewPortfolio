"use client";

import React from "react";
import { ChevronDown, Edit, Trash } from "lucide-react";
import { Dropdown } from "@/blogs/components/dropdowns/Dropdown";
import { BorderedAccordion } from "@/blogs/components/accordions/BorderedAccordion";
import { MinimalAccordion } from "@/blogs/components/accordions/MinimalAccordion";
import { AvatarStack } from "@/blogs/components/avatars/AvatarStack";
import { GlowingAvatar } from "@/blogs/components/avatars/GlowingAvatar";
import { StatusAvatar } from "@/blogs/components/avatars/StatusAvatar";
import { Blueprint } from "@/blogs/components/backgrounds/Blueprint";
import { Circles } from "@/blogs/components/backgrounds/Circles";
import { Cross } from "@/blogs/components/backgrounds/Cross";
import { Grids } from "@/blogs/components/backgrounds/Grids";
import { Horizontal } from "@/blogs/components/backgrounds/Horizontal";
import { Rings } from "@/blogs/components/backgrounds/Rings";
import { Sparse } from "@/blogs/components/backgrounds/Sparse";
import { Stripes } from "@/blogs/components/backgrounds/Stripes";
import { GlassmorphismBadge } from "@/blogs/components/badges/GlassmorphismBadge";
import { PulsingStatusBadge } from "@/blogs/components/badges/PulsingStatusBadge";
import { SoftTag } from "@/blogs/components/badges/SoftTag";
import { BentoExpand } from "@/blogs/components/buttons/BentoExpand";
import { GlassInset } from "@/blogs/components/buttons/GlassInset";
import { InkBleed } from "@/blogs/components/buttons/InkBleed";
import { LiquidBorder } from "@/blogs/components/buttons/LiquidBorder";
import { MagneticPull } from "@/blogs/components/buttons/MagneticPull";
import { MinimalistRipple } from "@/blogs/components/buttons/MinimalistRipple";
import { SoftFloat } from "@/blogs/components/buttons/SoftFloat";
import { SolidButton } from "@/blogs/components/buttons/SolidButton";
import { VelvetBorder } from "@/blogs/components/buttons/VelvetBorder";
import { BusinessCard } from "@/blogs/components/cards/BusinessCard";
import { FacebookPostCard } from "@/blogs/components/cards/FacebookPostCard";
import { FacebookProfileCard } from "@/blogs/components/cards/FacebookProfileCard";
import { GithubContributionCard } from "@/blogs/components/cards/GithubContributionCard";
import { GithubProfileCard } from "@/blogs/components/cards/GithubProfileCard";
import { GoogleProfileCard } from "@/blogs/components/cards/GoogleProfileCard";
import { InstagramPostCard } from "@/blogs/components/cards/InstagramPostCard";
import { LinkedInPostCard } from "@/blogs/components/cards/LinkedInPostCard";
import { LinkedInProfileCard } from "@/blogs/components/cards/LinkedInProfileCard";
import { NotepadCard } from "@/blogs/components/cards/NotepadCard";
import { TwitterPostCard } from "@/blogs/components/cards/TwitterPostCard";
import { TwitterProfileCard } from "@/blogs/components/cards/TwitterProfileCard";
import { Checkbox } from "@/blogs/components/checkbox/Checkbox";
import { RadioGroup } from "@/blogs/components/checkbox/RadioGroup";
import { Toggle } from "@/blogs/components/checkbox/Toggle";
import { HomeDropdown } from "@/blogs/components/dropdowns/HomeDropdown";
import { DisabledInput } from "@/blogs/components/inputs/DisabledInput";
import { EmailInput } from "@/blogs/components/inputs/EmailInput";
import { InputValidated } from "@/blogs/components/inputs/InputValidated";
import { InputWithError } from "@/blogs/components/inputs/InputWithError";
import { PasswordInput } from "@/blogs/components/inputs/PasswordInput";
import { TextInput } from "@/blogs/components/inputs/TextInput";
import { TextareaInput } from "@/blogs/components/inputs/TextareaInput";
import { HomeMenuBar } from "@/blogs/components/menubar/HomeMenuBar";
import { MenuBar } from "@/blogs/components/menubar/MenuBar";
import { GlowingProgressBar } from "@/blogs/components/progress/GlowingProgressBar";
import { StripedProgressBar } from "@/blogs/components/progress/StripedProgressBar";
import { SearchBar } from "@/blogs/components/searchbar/SearchBar";
import { SearchBarWithResults } from "@/blogs/components/searchbar/SearchBarWithResults";
import { CardSkeleton } from "@/blogs/components/skeletons/CardSkeleton";
import { ProfileSkeleton } from "@/blogs/components/skeletons/ProfileSkeleton";
import { Tabs } from "@/blogs/components/tabs/Tabs";

const wrap = "flex justify-center items-center p-6 min-h-[100px] w-full";
const bgWrap = "w-full max-w-lg max-h-56 overflow-hidden rounded-lg border border-stone-100 dark:border-stone-700 mx-auto";

export function ComponentPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "accordions-bordered-accordion":
      return <div className={wrap}><BorderedAccordion /></div>;
    case "accordions-minimal-accordion":
      return <div className={wrap}><MinimalAccordion /></div>;
    case "avatars-avatar-stack":
      return <div className={wrap}><AvatarStack /></div>;
    case "avatars-glowing-avatar":
      return <div className={wrap}><GlowingAvatar /></div>;
    case "avatars-status-avatar":
      return <div className={wrap}><StatusAvatar /></div>;
    case "backgrounds-blueprint":
      return <div className={wrap}><div className={bgWrap}><Blueprint><span className="text-sm text-zinc-500">Content</span></Blueprint></div></div>;
    case "backgrounds-circles":
      return <div className={wrap}><div className={bgWrap}><Circles><span className="text-sm text-zinc-500">Content</span></Circles></div></div>;
    case "backgrounds-cross":
      return <div className={wrap}><div className={bgWrap}><Cross><span className="text-sm text-zinc-500">Content</span></Cross></div></div>;
    case "backgrounds-grids":
      return <div className={wrap}><div className={bgWrap}><Grids><span className="text-sm text-zinc-500">Content</span></Grids></div></div>;
    case "backgrounds-horizontal":
      return <div className={wrap}><div className={bgWrap}><Horizontal><span className="text-sm text-zinc-500">Content</span></Horizontal></div></div>;
    case "backgrounds-rings":
      return <div className={wrap}><div className={bgWrap}><Rings><span className="text-sm text-zinc-500">Content</span></Rings></div></div>;
    case "backgrounds-sparse":
      return <div className={wrap}><div className={bgWrap}><Sparse><span className="text-sm text-zinc-500">Content</span></Sparse></div></div>;
    case "backgrounds-stripes":
      return <div className={wrap}><div className={bgWrap}><Stripes><span className="text-sm text-zinc-500">Content</span></Stripes></div></div>;
    case "badges-glassmorphism-badge":
      return <div className={wrap}><GlassmorphismBadge /></div>;
    case "badges-pulsing-status-badge":
      return <div className={wrap}><PulsingStatusBadge /></div>;
    case "badges-soft-tag":
      return <div className={wrap}><SoftTag /></div>;
    case "buttons-bento-expand":
      return <div className={wrap}><BentoExpand>Preview</BentoExpand></div>;
    case "buttons-glass-inset":
      return <div className={wrap}><GlassInset>Preview</GlassInset></div>;
    case "buttons-ink-bleed":
      return <div className={wrap}><InkBleed>Preview</InkBleed></div>;
    case "buttons-liquid-border":
      return <div className={wrap}><LiquidBorder>Preview</LiquidBorder></div>;
    case "buttons-magnetic-pull":
      return <div className={wrap}><MagneticPull>Preview</MagneticPull></div>;
    case "buttons-minimalist-ripple":
      return <div className={wrap}><MinimalistRipple>Preview</MinimalistRipple></div>;
    case "buttons-soft-float":
      return <div className={wrap}><SoftFloat>Preview</SoftFloat></div>;
    case "buttons-solid-button":
      return <div className={wrap}><SolidButton>Preview</SolidButton></div>;
    case "buttons-velvet-border":
      return <div className={wrap}><VelvetBorder>Preview</VelvetBorder></div>;
    case "cards-business-card":
      return <div className={wrap}><BusinessCard /></div>;
    case "cards-facebook-post-card":
      return <div className={wrap}><FacebookPostCard /></div>;
    case "cards-facebook-profile-card":
      return <div className={wrap}><FacebookProfileCard /></div>;
    case "cards-github-contribution-card":
      return <div className={wrap}><GithubContributionCard /></div>;
    case "cards-github-profile-card":
      return <div className={wrap}><GithubProfileCard /></div>;
    case "cards-google-profile-card":
      return <div className={wrap}><GoogleProfileCard /></div>;
    case "cards-instagram-post-card":
      return <div className={wrap}><InstagramPostCard /></div>;
    case "cards-linked-in-post-card":
      return <div className={wrap}><LinkedInPostCard /></div>;
    case "cards-linked-in-profile-card":
      return <div className={wrap}><LinkedInProfileCard /></div>;
    case "cards-notepad-card":
      return <div className={wrap}><NotepadCard /></div>;
    case "cards-twitter-post-card":
      return <div className={wrap}><TwitterPostCard /></div>;
    case "cards-twitter-profile-card":
      return <div className={wrap}><TwitterProfileCard /></div>;
    case "checkbox-checkbox":
      return <div className={wrap}><Checkbox label="Accept terms" /></div>;
    case "checkbox-radio-group":
      return <div className={wrap}><RadioGroup options={["Option A", "Option B"]} /></div>;
    case "checkbox-toggle":
      return <div className={wrap}><Toggle label="Notifications" /></div>;
    case "dropdowns-dropdown":
      return <div className={wrap}><Dropdown trigger={<button type="button" className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm">Open<ChevronDown className="h-4 w-4" /></button>} items={[{ label: "Edit", icon: <Edit className="h-3.5 w-3.5" /> }, { separator: true }, { label: "Remove", icon: <Trash className="h-3.5 w-3.5" />, danger: true }]} /></div>;
    case "dropdowns-home-dropdown":
      return <div className={wrap}><HomeDropdown /></div>;
    case "inputs-disabled-input":
      return <div className={wrap}><DisabledInput label="Disabled" value="Read only value" /></div>;
    case "inputs-email-input":
      return <div className={wrap}><EmailInput label="Email" placeholder="you@example.com" /></div>;
    case "inputs-input-validated":
      return <div className={wrap}><InputValidated label="Validated" placeholder="ok" /></div>;
    case "inputs-input-with-error":
      return <div className={wrap}><InputWithError label="Username" error="Already taken" placeholder="jane" /></div>;
    case "inputs-password-input":
      return <div className={wrap}><PasswordInput label="Password" placeholder="••••••••" /></div>;
    case "inputs-text-input":
      return <div className={wrap}><TextInput label="Label" placeholder="Type…" hint="Helper text" /></div>;
    case "inputs-textarea-input":
      return <div className={wrap}><TextareaInput label="Notes" placeholder="Longer text…" /></div>;
    case "menubar-home-menu-bar":
      return <div className={wrap}><HomeMenuBar /></div>;
    case "menubar-menu-bar":
      return <div className={wrap}><MenuBar defaultActive="Home" items={[{ label: "Home" }, { label: "Work" }, { separator: true }, { label: "Settings" }]} /></div>;
    case "progress-glowing-progress-bar":
      return <div className={wrap}><GlowingProgressBar /></div>;
    case "progress-striped-progress-bar":
      return <div className={wrap}><StripedProgressBar /></div>;
    case "searchbar-search-bar":
      return <div className={wrap}><SearchBar placeholder="Search…" /></div>;
    case "searchbar-search-bar-with-results":
      return <div className={wrap}><SearchBarWithResults placeholder="Search people…" /></div>;
    case "skeletons-card-skeleton":
      return <div className={wrap}><CardSkeleton /></div>;
    case "skeletons-profile-skeleton":
      return <div className={wrap}><ProfileSkeleton /></div>;
    case "tabs-tabs":
      return <div className={wrap}><Tabs tabs={[{ id: "a", label: "Overview", content: <p className="text-sm text-zinc-600">Tab A content</p> }, { id: "b", label: "Details", content: <p className="text-sm text-zinc-600">Tab B content</p> }]} /></div>;
    default:
      return <p className="text-sm text-stone-500">No preview for this slug.</p>;
  }
}