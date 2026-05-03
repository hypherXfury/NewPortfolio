import React, { useState, useId } from "react";
import {
  Home,
  LayoutDashboard,
  TrendingUp,
  Users,
  Settings,
} from "lucide-react";
import { MenuBar } from "./MenuBar";

export interface MenuBarItem {
  label?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export interface MenuBarProps {
  items: MenuBarItem[];
  defaultActive?: string;
  onActiveChange?: (label: string) => void;
  className?: string;
}

export function HomeMenuBar() {
  return (
    <MenuBar
      defaultActive="Home"
      onActiveChange={(label) => console.log("active:", label)}
      items={[
        { label: "Home", icon: <Home className="size-3.5" /> },
        { label: "Dashboard", icon: <LayoutDashboard className="size-3.5" /> },
        {
          label: "Analytics",
          icon: <TrendingUp className="size-3.5" />,
          badge: "New",
        },
        { separator: true },
        { label: "Team", icon: <Users className="size-3.5" /> },
        {
          label: "Settings",
          icon: <Settings className="size-3.5" />,
          disabled: true,
        },
      ]}
    />
  );
}
