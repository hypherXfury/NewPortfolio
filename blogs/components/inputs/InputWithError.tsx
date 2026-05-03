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

export const InputWithError = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = "Email",
      className = "",
      error = "Please enter a valid email address.",
      ...props
    },
    ref,
  ) => (
    <div className={className}>
      {label && (
        <label className="block text-xs text-zinc-500 mb-1.5">{label}</label>
      )}
      <input
        ref={ref}
        type="text"
        className="w-full h-9 px-3 rounded-lg border border-red-400 bg-white text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-red-100 transition-all"
        {...props}
      />
      {error && <p className="mt-1 text-[11px] text-red-600">{error}</p>}
    </div>
  ),
);
InputWithError.displayName = "InputWithError";
