import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

const COLUMNS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Donate",
    links: [
      { label: "Become a donor", href: "/donate" },
      { label: "Why donate blood", href: "/#why-donate" },
      { label: "Donation process", href: "/#how-it-works" },
      { label: "Eligibility", href: "/#how-it-works" },
    ],
  },
  {
    title: "Find blood",
    links: [
      { label: "Request blood", href: "/request-blood" },
      { label: "Blood group guide", href: "/#blood-types" },
      { label: "Nearby centres", href: "/#impact" },
      { label: "Emergency requests", href: "/request-blood" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our mission", href: "/#why-donate" },
      { label: "Donor stories", href: "/#stories" },
      { label: "Impact", href: "/#impact" },
      { label: "Contact us", href: "/#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo tagline />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
              Hemoglobin is a blood donation network that connects willing donors
              with hospitals and patients who need them — quickly, safely and
              transparently.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" />
                <span>128 Wellness Avenue, Dhaka 1215, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" />
                <a href="tel:+8801700000000" className="hover:text-brand-700">
                  +880 1700 000 000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" />
                <a href="mailto:hello@hemoglobin.org" className="hover:text-brand-700">
                  hello@hemoglobin.org
                </a>
              </li>
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-bold tracking-wide text-slate-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-600 transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Hemoglobin. Built for people who
            give.
          </p>
          <div className="flex gap-6">
            <Link href="/#contact" className="hover:text-brand-700">
              Privacy
            </Link>
            <Link href="/#contact" className="hover:text-brand-700">
              Terms
            </Link>
            <Link href="/#contact" className="hover:text-brand-700">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
