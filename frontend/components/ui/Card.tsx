import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Base card with hover elevation — used across the site for services,
 * offices, notices and dashboard widgets.
 */
export function Card({
  className,
  hover = false,
  interactive = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  /** Lift + shadow on hover. */
  hover?: boolean;
  /** Add pointer cursor (card is clickable/link-wrapped). */
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white shadow-card transition-all duration-200",
        hover &&
          "hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift hover:ring-1 hover:ring-brand-100",
        interactive && "cursor-pointer",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 sm:p-6", className)} {...props} />;
}

/** Small labelled meta row inside cards (documents count, time, fee…). */
export function MetaItem({
  icon,
  label,
  value,
  className,
}: {
  icon?: ReactNode;
  label: string;
  value: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start gap-2 text-sm", className)}>
      {icon ? <span className="mt-0.5 text-brand-600">{icon}</span> : null}
      <span className="text-slate-500">{label}</span>
      <span className="ml-auto text-right font-semibold text-slate-800">{value}</span>
    </div>
  );
}

export default Card;
