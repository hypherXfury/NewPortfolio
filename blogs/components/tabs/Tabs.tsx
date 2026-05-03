import React, { useState } from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  badge?: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab }) => {
  const [active, setActive] = useState(defaultTab || tabs?.[0]?.id);

  return (
    <div>
      <div className="flex gap-0 border-b border-zinc-200 mb-4 overflow-x-auto scrollbar-none">
        {tabs?.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2 text-sm border-b-2 -mb-px transition-all whitespace-nowrap cursor-pointer ${
              active === tab.id
                ? "border-zinc-900 text-zinc-900 font-medium"
                : "border-transparent text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="ml-1.5 inline-flex items-center justify-center rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-700">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      {tabs?.map((tab) => (
        <div
          key={tab.id}
          style={{ display: active === tab.id ? "block" : "none" }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
