import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import {
  AwardIcon,
  BellIcon,
  CheckCircleIcon,
  HeartPulseIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@/components/Icons";

const FEATURES = [
  {
    icon: MapPinIcon,
    title: "Matched to your area",
    description:
      "Only hear about requests your blood group can actually serve, within a radius you choose.",
  },
  {
    icon: BellIcon,
    title: "Alerts on your terms",
    description:
      "Push, SMS or email — and a simple snooze when it is not a good week to donate.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Free health screening",
    description:
      "Every donation includes a full check-up: blood pressure, haemoglobin, iron and infection screening.",
  },
  {
    icon: HeartPulseIcon,
    title: "Track your impact",
    description:
      "See how many lives your donations have touched, with a shareable impact record.",
  },
];

const PERKS = [
  "Recover in 30–45 minutes",
  "Refreshments provided",
  "A free health check-up",
  "Travel reimbursement on long trips",
];

export function WhyDonate() {
  return (
    <section id="why-donate" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why donate"
              title="Good for their health. Good for yours too."
              description="Donating blood is one of the few ways a healthy person can save several lives in under an hour."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                >
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {perk}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/donate"
                className="group inline-flex h-12 items-center gap-2 rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-700"
              >
                <SparklesIcon className="h-5 w-5" />
                Register as a donor
              </Link>
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <AwardIcon className="h-5 w-5 text-brand-500" />
                Takes about two minutes
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-slate-200/70">
                  <feature.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDonate;
