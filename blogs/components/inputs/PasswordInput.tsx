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

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { label = "Password", hint = "Min 8 characters", className = "", ...props },
    ref,
  ) => {
    const [show, setShow] = useState(false);
    return (
      <div className={className}>
        {label && (
          <label className="block text-xs text-zinc-500 mb-1.5">{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={show ? "text" : "password"}
            placeholder="••••••••"
            className="w-full h-9 px-3 pr-9 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400 focus:ring-2 focus:ring-blue-100 transition-all"
            {...props}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 cursor-pointer"
          >
            {show ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {hint && <p className="mt-1 text-[11px] text-zinc-400">{hint}</p>}
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";
