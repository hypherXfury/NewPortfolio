import React from "react";
import { ChevronDown, Copy, Edit, Trash } from "lucide-react";
import { Dropdown } from "./Dropdown";
export interface DropdownItem {
  label?: string;
  icon?: React.ReactElement;
  kbd?: string;
  danger?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
}

export const HomeDropdown = () => (
  <Dropdown
    trigger={
      <button className="group inline-flex items-center justify-between gap-4 h-11 px-5 text-sm border border-zinc-200 bg-white rounded-xl hover:border-zinc-300 hover:shadow-sm transition-all duration-300 cursor-pointer font-medium text-zinc-800 active:scale-95">
        <span className="tracking-tight">Project Settings</span>
        <ChevronDown className="w-4 h-4 text-zinc-400 transition-transform duration-300 group-hover:translate-y-0.5" />
      </button>
    }
    items={[
      { label: "Edit Details", icon: <Edit />, kbd: "⌘E" },
      { label: "Duplicate", icon: <Copy />, kbd: "⌘D" },
      { separator: true },
      { label: "Delete Project", icon: <Trash />, danger: true, kbd: "⌫" },
    ]}
  />
);
