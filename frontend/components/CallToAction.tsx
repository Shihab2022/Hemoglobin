import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  ShieldCheckIcon,
} from "@/components/Icons";

export function CallToAction() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-14 text-center shadow-glow sm:px-14 sm:py-16">
          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10"
          />

          <div className="relative">
            <LogoMark className="mx-auto h-14 w-14 drop-shadow-lg" />
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Someone in your city is waiting for blood right now
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-brand-100">
              Joining takes two minutes. You will only ever be asked to donate if
              you are eligible and if your blood group matches an open request.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/donate"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-brand-700 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Become a donor
                <ArrowRightIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/request-blood"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/30 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <SearchIcon className="h-5 w-5" />
                Request blood
              </Link>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/15 pt-8 text-sm text-brand-100 sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2">
                <PhoneIcon className="h-4.5 w-4.5" />
                <a href="tel:+8801700000000" className="hover:text-white">
                  +880 1700 000 000
                </a>
              </span>
              <span className="flex items-center gap-2">
                <MailIcon className="h-4.5 w-4.5" />
                <a href="mailto:hello@hemoglobin.org" className="hover:text-white">
                  hello@hemoglobin.org
                </a>
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheckIcon className="h-4.5 w-4.5" />
                24/7 emergency helpline
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
