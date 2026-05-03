import React, { useState, forwardRef } from "react";
import { Eye, EyeOff, Check, Mail } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
}

export const DisabledInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { label = "Disabled field", value = "Read only", className = "", ...props },
    ref,
  ) => (
    <div className={className}>
      {label && (
        <label className="block text-xs text-zinc-500 mb-1.5">{label}</label>
      )}
      <input
        ref={ref}
        type="text"
        value={value}
        disabled
        readOnly
        className="w-full h-9 px-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm text-zinc-400 cursor-not-allowed outline-none"
        {...props}
      />
    </div>
  ),
);
DisabledInput.displayName = "DisabledInput";
