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

export const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label = "Message",
      placeholder = "Write something…",
      rows = 4,
      className = "",
      ...props
    },
    ref,
  ) => (
    <div className={className}>
      {label && (
        <label className="block text-xs text-zinc-500 mb-1.5">{label}</label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400 focus:ring-2 focus:ring-blue-100 transition-all resize-y leading-relaxed"
        {...props}
      />
    </div>
  ),
);
TextareaInput.displayName = "TextareaInput";
