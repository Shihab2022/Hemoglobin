import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DonorRegistrationForm } from "@/components/DonorRegistrationForm";
import {
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Become a blood donor",
  description:
    "Register as a blood donor on Hemoglobin. Share your blood group and area, get matched with nearby requests and save up to three lives per donation.",
};

const NEXT_STEPS = [
  {
    icon: ShieldCheckIcon,
    title: "Health screening",
    description:
      "A nurse checks your vitals and haemoglobin level before any blood is drawn.",
  },
  {
    icon: ClockIcon,
    title: "About 30 minutes",
    description:
      "The whole visit, including refreshments and recovery, takes under an hour.",
  },
  {
    icon: MapPinIcon,
    title: "A centre near you",
    description:
      "We share your details only with verified blood banks you choose.",
  },
];

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Donor registration
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Register as a blood donor
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              It takes about two minutes. We only contact you when a request
              matches your blood group and your area.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-9">
              <DonorRegistrationForm />
            </div>

            <aside className="space-y-4 lg:sticky lg:top-24">
              {NEXT_STEPS.map((step) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-sm font-bold text-slate-900">
                      {step.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5">
                <h2 className="font-display text-sm font-bold text-brand-900">
                  Common eligibility
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Aged between 18 and 65",
                    "At least 50 kg and in good health",
                    "No alcohol in the last 24 hours",
                    "A gap of 3+ months between donations",
                  ].map((rule) => (
                    <li
                      key={rule}
                      className="flex items-start gap-2 text-sm text-brand-900/80"
                    >
                      <CheckCircleIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
