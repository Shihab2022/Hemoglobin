import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BloodRequestForm } from "@/components/BloodRequestForm";
import { ClockIcon, PhoneIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Request blood",
  description:
    "Post a blood request on Hemoglobin and reach compatible donors near you. For patients, families, hospitals and blood banks.",
};

const REASSURANCE = [
  {
    icon: UsersIcon,
    title: "Instant donor reach",
    description:
      "Compatible donors nearby are alerted as soon as your request is verified.",
  },
  {
    icon: ClockIcon,
    title: "15-minute response",
    description:
      "A coordinator calls you back to confirm details and match a centre.",
  },
  {
    icon: PhoneIcon,
    title: "24/7 emergency line",
    description:
      "For critical cases, call the helpline and skip the queue entirely.",
  },
];

export default function RequestBloodPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Find blood
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Request blood in minutes
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Tell us what you need and we will reach out to compatible donors
              around you — for patients, families, hospitals and blood banks.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-9">
              <BloodRequestForm />
            </div>

            <aside className="space-y-4 lg:sticky lg:top-24">
              {REASSURANCE.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-sm font-bold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <h2 className="font-display text-base font-bold">
                  Need blood right now?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Call the emergency helpline and we will coordinate donors
                  directly while you head to the hospital.
                </p>
                <a
                  href="tel:+8801700000000"
                  className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                >
                  <PhoneIcon className="h-4.5 w-4.5" />
                  +880 1700 000 000
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
