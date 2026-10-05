import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  DropletIcon,
  HeartPulseIcon,
  MapPinIcon,
  SearchIcon,
  ShieldCheckIcon,
} from "@/components/Icons";

const TRUST_POINTS = [
  "Free health screening",
  "Verified hospitals only",
  "Cancel any time",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-50 to-transparent blur-2xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Live &middot; 12,480 donors ready near you
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            One donation can
            <br />
            save{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-600">three lives</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1.5 -z-0 h-3 rounded-sm bg-brand-200/70"
              />
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Hemoglobin connects willing blood donors with hospitals and patients
            who need them. Register once, get matched with nearby requests, and
            donate on a schedule that fits your life.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/donate"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 text-base font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <DropletIcon className="h-5 w-5" />
              Become a donor
              <ArrowRightIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/request-blood"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              <SearchIcon className="h-5 w-5" />
              Find blood now
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div
          className="relative animate-fade-up lg:pl-6"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Soft halo behind the card */}
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-200/50 to-brand-50 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <LogoMark className="h-9 w-9" />
                  <div>
                    <p className="font-display text-sm font-bold text-slate-900">
                      Urgent request
                    </p>
                    <p className="text-xs text-slate-500">Matched 6 min ago</p>
                  </div>
                </div>
                <span className="rounded-full bg-brand-600 px-2.5 py-1 text-xs font-bold text-white">
                  O&minus;
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-brand-50/70 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Sunrise General Hospital
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-600">
                  <MapPinIcon className="h-4 w-4 text-brand-500" />
                  Banani, Dhaka &middot; 1.2 km away
                </p>

                <div
                  className="mt-5 flex items-end gap-1.5"
                  aria-hidden="true"
                >
                  <HeartPulseIcon className="h-12 w-12 animate-beat text-brand-600" />
                  <div className="flex flex-1 items-end gap-1">
                    {[28, 44, 22, 60, 34, 18].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h * 0.7}%` }}
                        className="flex-1 rounded-full bg-brand-200"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                <div className="flex -space-x-2.5">
                  {["A", "B", "C", "D"].map((initial, i) => (
                    <span
                      key={initial}
                      style={{ zIndex: 4 - i }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-600"
                    >
                      {initial}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">12 donors</span>{" "}
                  are already en route
                </p>
              </div>

              <Link
                href="/donate"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <ShieldCheckIcon className="h-5 w-5" />
                Respond to this request
              </Link>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -left-4 top-24 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card sm:block">
              <p className="font-display text-xl font-extrabold text-brand-600">
                3 lives
              </p>
              <p className="text-xs text-slate-500">saved per donation</p>
            </div>

            <div className="animate-float absolute -right-3 -bottom-6 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card sm:block">
              <p className="font-display text-xl font-extrabold text-slate-900">
                24,860
              </p>
              <p className="text-xs text-slate-500">units donated this year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
