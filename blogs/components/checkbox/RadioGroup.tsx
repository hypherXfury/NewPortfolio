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

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      options = ["Free", "Pro", "Enterprise"],
      defaultValue,
      onChange,
      className = "",
      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(defaultValue || options[0]);

    const handleSelect = (opt: string) => {
      setSelected(opt);
      onChange?.(opt);
    };

    return (
      <div ref={ref} className={`flex flex-col gap-2 ${className}`} {...props}>
        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => handleSelect(opt)}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selected === opt ? "border-blue-500" : "border-zinc-300 bg-white"}`}
            >
              {selected === opt && (
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              )}
            </div>
            <span className="text-sm text-zinc-700 group-hover:text-zinc-900">
              {opt}
            </span>
          </div>
        ))}
      </div>
    );
  },
);
RadioGroup.displayName = "RadioGroup";
