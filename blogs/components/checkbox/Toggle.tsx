import React, { useState, forwardRef } from "react";
import { Check } from "lucide-react";

export interface ToggleProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  label: React.ReactNode;
  defaultOn?: boolean;
  onChange?: (on: boolean) => void;
}

export interface CheckboxProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  label: React.ReactNode;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface RadioGroupProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  options?: string[];
  defaultValue?: string;
  onChange?: (selected: string) => void;
}

export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  ({ label, defaultOn = false, onChange, className = "", ...props }, ref) => {
    const [on, setOn] = useState(defaultOn);
    const toggle = () => {
      const newState = !on;
      setOn(newState);
      onChange?.(newState);
    };
    return (
      <div
        ref={ref}
        onClick={toggle}
        className={`flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
        {...props}
      >
        <div
          className={`relative w-9 h-5 rounded-full transition-colors ${on ? "bg-blue-500" : "bg-zinc-300"}`}
        >
          <div
            className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${on ? "translate-x-4" : ""}`}
          />
        </div>
        <span className="text-sm text-zinc-700 group-hover:text-zinc-900">
          {label}
        </span>
      </div>
    );
  },
);
Toggle.displayName = "Toggle";
