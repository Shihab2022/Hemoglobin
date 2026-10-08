import { ClipboardList, FileSearch, Search, Stamp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    no: "01",
    title: "সেবা খুঁজুন",
    en: "Discover the service",
    icon: Search,
  },
  {
    no: "02",
    title: "যোগ্যতা ও প্রয়োজনীয় কাগজপত্র দেখুন",
    en: "Check eligibility & documents",
    icon: FileSearch,
  },
  {
    no: "03",
    title: "ধাপে ধাপে প্রক্রিয়া অনুসরণ করুন",
    en: "Follow the step-by-step process",
    icon: ClipboardList,
  },
  {
    no: "04",
    title: "অফিসিয়াল সেবায় আবেদন করুন",
    en: "Apply on the official portal",
    icon: Stamp,
  },
];

/** 4-step connected timeline (desktop) / vertical timeline (mobile). */
export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            id="how-heading"
            eyebrow="How EkSheba works"
            title="একসেবা কীভাবে কাজ করে"
            description="Four simple steps from confusion to a completed application."
          />
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting line (desktop only) */}
          <li
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 hidden lg:block"
          >
            <span className="mx-auto block h-0.5 w-[calc(100%-16rem)] max-w-5xl translate-y-14 bg-gradient-to-r from-brand-200 via-brand-400 to-flag-300" />
          </li>

          {STEPS.map((step, i) => (
            <li key={step.no} className="relative">
              <Reveal delay={i * 90}>
                <div className="flex h-full flex-col items-center text-center lg:items-center">
                  <div className="relative">
                    <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-700 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:rotate-3">
                      <step.icon className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <span className="absolute -right-2 -top-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-flag-500 px-1.5 text-xs font-extrabold text-white shadow">
                      {step.no}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold leading-6 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500">{step.en}</p>

                  {/* vertical connector on mobile */}
                  {i < STEPS.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-8 left-1/2 h-8 w-0.5 -translate-x-1/2 bg-brand-200 lg:hidden"
                    />
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
