import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, CalendarIcon, ShieldCheckIcon, UsersIcon } from "@/components/Icons";

const STEPS = [
  {
    icon: UsersIcon,
    step: "01",
    title: "Register in two minutes",
    description:
      "Tell us your blood group, contact details and the area you live in. No documents needed to get started.",
  },
  {
    icon: ShieldCheckIcon,
    step: "02",
    title: "Get health-screened",
    description:
      "We check your eligibility and flag anything that would make donating unsafe. Most people qualify in about a minute.",
  },
  {
    icon: CalendarIcon,
    step: "03",
    title: "Donate and save lives",
    description:
      "We alert you to requests that match your group nearby. Book a slot, donate, and your blood is screened, stored and delivered.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from signup to someone’s lifeline"
          description="No queues you did not choose, no phone calls you have to chase. Hemoglobin handles the matching."
        />

        <ol className="relative mt-14 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((step, index) => (
            <li
              key={step.step}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              {/* Connector line between steps (desktop only) */}
              {index < STEPS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-12 -right-6 hidden h-px w-6 bg-slate-200 lg:block"
                />
              ) : null}

              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-extrabold text-slate-100">
                  {step.step}
                </span>
              </div>

              <h3 className="mt-6 font-display text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link
            href="/donate"
            className="group inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Start your registration
            <ArrowRightIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
