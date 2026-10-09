import Link from "next/link";
import { AlertCircle, HeartHandshake } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Categories", href: "/categories" },
      { label: "Government Offices", href: "/government-offices" },
      { label: "Notices", href: "/notices" },
      { label: "Application Tracking", href: "/application-tracker" },
      { label: "AI Assistant", href: "/ai-assistant" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "FAQ", href: "/faq" },
      { label: "Documents", href: "/documents" },
      { label: "Fees", href: "/fees" },
      { label: "Help", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/about" },
      { label: "Terms", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-800 text-brand-50">
      {/* subtle dot grid + red disc accent */}
      <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-flag-500/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <LogoMark className="bg-white" />
              <span className="text-lg font-extrabold tracking-tight text-white">
                EkSheba <span className="text-brand-200">/ একসেবা</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-brand-100/85">
              বাংলাদেশের সরকারি সেবার এক ঠিকানা — Bangladesh Government Services, One Place.
            </p>
            <p className="mt-3 text-sm leading-6 text-brand-100/70">
              Discover government services, understand eligibility, documents, fees and
              step-by-step procedures — then reach the official portal.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 rounded text-sm text-brand-100/80 transition-colors hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-flag-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Important disclaimer */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-flag-500 text-white">
              <AlertCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-sm font-bold text-white">Important</h2>
              <p className="mt-1.5 text-sm leading-6 text-brand-100/80">
                EkSheba is an independent information and service-discovery platform.
                Government services are provided through official government portals and
                authorities. This prototype uses mock data — always verify information with
                the official source before acting.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-brand-100/70 sm:flex-row">
          <p>© 2026 EkSheba. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with
            <HeartHandshake className="h-4 w-4 text-flag-500" aria-hidden="true" />
            for the citizens of Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
