import { cn } from "@/lib/utils";

/**
 * The Hemoglobin mark: a blood drop carrying a heartbeat (ECG) line.
 *
 * The gradient id below is intentionally stable — every instance of the logo
 * on a page renders the identical gradient, so the shared definition is safe.
 */
const GRADIENT_ID = "hemoglobinLogoGradient";

export function LogoMark({
  className,
  title = "Hemoglobin",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient
          id={GRADIENT_ID}
          x1="4"
          y1="2"
          x2="28"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB7185" />
          <stop offset="0.55" stopColor="#E11D48" />
          <stop offset="1" stopColor="#881337" />
        </linearGradient>
      </defs>

      {/* Drop body */}
      <path
        d="M16 2C16 2 5.5 13.8 5.5 20.5a10.5 10.5 0 0 0 21 0C26.5 13.8 16 2 16 2Z"
        fill={`url(#${GRADIENT_ID})`}
      />
      {/* Gloss highlight */}
      <path
        d="M16 4.6C16 4.6 9.2 12.7 8.2 18.1a7.8 7.8 0 0 0 1.6 4.5c-1.2-1.6-1.6-3.4-1.6-4.9 0-4.2 7.8-13.1 7.8-13.1Z"
        fill="#FFFFFF"
        fillOpacity="0.28"
      />
      {/* Heartbeat line */}
      <path
        d="M8.2 20.6h3.6l1.8-4.4 2.9 8.8 2.4-6.4 1.3 2h3.6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  tagline = false,
  markClassName,
}: {
  className?: string;
  /** Show the "Blood Donation Network" strapline under the wordmark. */
  tagline?: boolean;
  markClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-9 w-9 shrink-0", markClassName)} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
          Hemo
          <span className="text-brand-600">globin</span>
        </span>
        {tagline ? (
          <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Blood Donation Network
          </span>
        ) : null}
      </span>
    </span>
  );
}

export default Logo;
