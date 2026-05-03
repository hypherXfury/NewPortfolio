import React, { useState } from "react";
import { Search, X } from "lucide-react";

export interface SearchBarProps {
  placeholder?: string;
  width?: string;
}

export interface SearchBarWithResultsProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search anything…",
  width = "w-56",
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 w-4 h-4 text-zinc-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`${width} h-9 pl-9 pr-8 rounded-full border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all`}
      />
      {value && (
        <button
          onClick={() => setValue("")}
          className="absolute right-2.5 w-4 h-4 rounded-full bg-zinc-300 flex items-center justify-center cursor-pointer"
        >
          <X className="w-2.5 h-2.5 text-zinc-600" />
        </button>
      )}
    </div>
  );
};
