import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, FileSearch, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

/** Empty result state — "No services found." */
export function EmptyState({
  title = "No services found.",
  description = "Try changing your search or filters.",
  icon,
  action,
  className,
}: {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-white px-6 py-14 text-center",
        className,
      )}
    >
      <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        {icon ?? <SearchX className="h-7 w-7" aria-hidden="true" />}
      </span>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm leading-6 text-slate-500">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/** Error state with retry — used by error boundaries and failed loads. */
export function ErrorState({
  title = "Something went wrong.",
  description = "Please try again.",
  onRetry,
  className,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-flag-200 bg-flag-50 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-flag-600 shadow-sm">
        <AlertTriangle className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-bold text-flag-800">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm leading-6 text-flag-700/80">{description}</p>
      {onRetry ? (
        <Button variant="red" className="mt-5" onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  );
}

/** Inline success message. */
export function SuccessNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      role="status"
      className={cn(
        "flex items-start gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800",
        className,
      )}
    >
      <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Small note that data is demo/mock — used on prototype-only features. */
export function DemoNote({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800",
        className,
      )}
    >
      <FileSearch className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>
        <strong className="font-semibold">Demo data:</strong> this prototype uses mock
        information. Always verify fees, documents and links with the official source.
      </span>
    </p>
  );
}

/** Skeleton primitives for loading states. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-slate-200/70", className)}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard({ lines = 3 }: { lines?: number }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <Skeleton className="h-11 w-11 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-full" />
        ))}
      </div>
      <Skeleton className="mt-5 h-9 w-28 rounded-lg" />
    </div>
  );
}
