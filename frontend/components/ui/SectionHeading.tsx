import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared section heading — bilingual (Bangla title + English support text)
 * so every section reads consistently across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "green",
  className,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "green" | "red" | "white";
  className?: string;
  id?: string;
}) {
  const centered = align === "center";
  return (
    <div
      id={id}
      className={cn("max-w-2xl", centered ? "mx-auto text-center" : "text-left", className)}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest",
            tone === "green" && "bg-brand-50 text-brand-700",
            tone === "red" && "bg-flag-50 text-flag-700",
            tone === "white" && "bg-white/10 text-white ring-1 ring-white/20",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl",
          tone === "white" ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            tone === "white" ? "text-brand-50/90" : "text-slate-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
