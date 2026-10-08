import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "red" | "white";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-sm hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-brand-600",
  secondary:
    "bg-brand-50 text-brand-800 ring-1 ring-brand-200 hover:bg-brand-100 hover:text-brand-900",
  outline:
    "border border-line bg-white text-slate-700 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50/50",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  red: "bg-flag-500 text-white hover:bg-flag-600 focus-visible:outline-flag-500",
  white: "bg-white text-brand-800 shadow-sm hover:bg-brand-50 ring-1 ring-black/5",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  /** Rendered before the label. */
  icon?: ReactNode;
  /** Stretch to container width (mobile forms). */
  block?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  block,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:opacity-55",
        "active:translate-y-px",
        VARIANTS[variant],
        SIZES[size],
        block && "w-full",
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
