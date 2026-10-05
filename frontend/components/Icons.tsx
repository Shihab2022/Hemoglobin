import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Small inline icon set (stroke-based, inherits `currentColor`).
 * Kept local so the app has no icon-library dependency.
 */
function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const DropletIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 2.7 6.9 8.8a7 7 0 1 0 10.2 0L12 2.7Z" />
  </Svg>
);

export const HeartPulseIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 20.3S3.8 15.4 3.8 9.5A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 8.2 1.9c0 5.9-8.2 10.8-8.2 10.8Z" />
    <path d="M3.9 12.4h3.2l1.5-3.4 2.3 6.2 1.7-4.4 1.1 1.6h3.3" />
  </Svg>
);

export const MenuIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Svg>
);

export const CheckIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Svg>
);

export const CheckCircleIcon = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.3 2.7 2.7L16 9.5" />
  </Svg>
);

export const UsersIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
    <circle cx="10" cy="8" r="3.5" />
    <path d="M20 19v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 4.6a3.5 3.5 0 0 1 0 6.8" />
  </Svg>
);

export const HospitalIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M4 21V8.4a1 1 0 0 1 1-1h4V5.4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7.4h4a1 1 0 0 1 1 1V21" />
    <path d="M12 8.5v4M10 10.5h4M9.5 21v-4h5v4M2.5 21h19" />
  </Svg>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 21s7-3 7-8.4V6.2L12 3 5 6.2v6.4C5 18 12 21 12 21Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </Svg>
);

export const CalendarIcon = (props: IconProps) => (
  <Svg {...props}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
  </Svg>
);

export const MapPinIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const PhoneIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M6.2 3.8h3l1.5 3.7-2 1.3a11.5 11.5 0 0 0 5.5 5.5l1.3-2 3.7 1.5v3a1.8 1.8 0 0 1-2 1.8C10.4 18.4 5.6 13.6 4.4 5.8a1.8 1.8 0 0 1 1.8-2Z" />
  </Svg>
);

export const MailIcon = (props: IconProps) => (
  <Svg {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
  </Svg>
);

export const ClockIcon = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </Svg>
);

export const AwardIcon = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="9.5" r="5.5" />
    <path d="m8.6 14.2-1.1 6.3L12 18.3l4.5 2.2-1.1-6.3" />
  </Svg>
);

export const BellIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6.2-2 6.2h16S18 14 18 9Z" />
    <path d="M13.7 19a2 2 0 0 1-3.4 0" />
  </Svg>
);

export const SearchIcon = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Svg>
);

export const SparklesIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 3.5 13.6 8l4.5 1.6-4.5 1.6L12 15.7l-1.6-4.5L5.9 9.6 10.4 8 12 3.5Z" />
    <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
  </Svg>
);

export const QuoteIcon = (props: IconProps) => (
  <Svg {...props} strokeWidth={0}>
    <path
      fill="currentColor"
      d="M9.4 6.2C6 7.6 4 10.3 4 13.6c0 2.7 1.6 4.4 3.8 4.4 1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.4-1.7 1.8-3.2 3.5-4.1l-1.5-1.6Zm9 0C15 7.6 13 10.3 13 13.6c0 2.7 1.6 4.4 3.8 4.4 1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.4-1.7 1.8-3.2 3.5-4.1l-1.5-1.6Z"
    />
  </Svg>
);
