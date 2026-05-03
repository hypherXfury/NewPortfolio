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

export const InputValidated = forwardRef<HTMLInputElement, InputProps>(
  ({ label = "Email", className = "", ...props }, ref) => (
    <div className={className}>
      {label && (
        <label className="block text-xs text-zinc-500 mb-1.5">{label}</label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type="text"
          className="w-full h-9 px-3 pr-9 rounded-lg border border-green-400 bg-white text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-green-100 transition-all"
          {...props}
        />
        <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
      </div>
    </div>
  ),
);
InputValidated.displayName = "InputValidated";
