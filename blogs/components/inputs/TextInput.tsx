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

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, placeholder = "Type here…", hint, className = "", ...props },
    ref,
  ) => (
    <div className={className}>
      {label && (
        <label className="block text-xs text-zinc-500 mb-1.5">{label}</label>
      )}
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="w-full h-9 px-3 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400 focus:ring-2 focus:ring-blue-100 transition-all"
        {...props}
      />
      {hint && <p className="mt-1 text-[11px] text-zinc-400">{hint}</p>}
    </div>
  ),
);
TextInput.displayName = "TextInput";
