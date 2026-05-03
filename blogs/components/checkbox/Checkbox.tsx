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

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  (
    { label, defaultChecked = false, onChange, className = "", ...props },
    ref,
  ) => {
    const [checked, setChecked] = useState(defaultChecked);
    const toggle = () => {
      const newState = !checked;
      setChecked(newState);
      onChange?.(newState);
    };
    return (
      <div
        ref={ref}
        onClick={toggle}
        className={`flex items-center gap-2 cursor-pointer select-none group ${className}`}
        {...props}
      >
        <div
          className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${checked ? "bg-zinc-900 border-zinc-900" : "bg-white border-zinc-300"}`}
        >
          {checked && <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />}
        </div>
        <span className="text-sm text-zinc-700 group-hover:text-zinc-900">
          {label}
        </span>
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
