import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "green" | "red" | "slate" | "soft-green" | "soft-red" | "amber";

const TONES: Record<Tone, string> = {
  green: "bg-brand-600 text-white",
  "soft-green": "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
  red: "bg-flag-500 text-white",
  "soft-red": "bg-flag-50 text-flag-700 ring-1 ring-flag-100",
  slate: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
  amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
};

export function Badge({
  tone = "slate",
  icon,
  className,
  children,
}: {
  tone?: Tone;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        TONES[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export default Badge;
