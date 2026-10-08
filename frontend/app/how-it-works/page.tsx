import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover, understand, prepare, apply and track — how NagorikSheba guides you to the right official government service.",
};

const PHASES = [
  {
    step: "01",
    title: "Discover",
    bn: "সেবা খুঁজুন",
    description:
      "Search or browse hundreds of government services organized by category — from NID and passports to land and tax.",
    icon: "LayoutGrid",
    href: "/services",
    cta: "Browse services",
  },
  {
    step: "02",
    title: "Understand",
    bn: "যোগ্যতা ও প্রয়োজনীয় কাগজপত্র দেখুন",
    description:
      "Every service page explains eligibility, required documents, fees and processing time in simple language.",
    icon: "BookOpen",
    href: "/documents",
    cta: "Document checklists",
  },
  {
    step: "03",
    title: "Prepare",
    bn: "ধাপে ধাপে প্রক্রিয়া অনুসরণ করুন",
    description:
      "Follow a clear numbered procedure and prepare every document before you visit an office or portal.",
    icon: "ScrollText",
    href: "/fees",
    cta: "Check fee guide",
  },
  {
    step: "04",
    title: "Apply",
    bn: "অফিসিয়াল সেবায় আবেদন করুন",
    description:
      "Use the official source link to apply on the government portal, or visit the right office with everything ready.",
    icon: "Building2",
    href: "/government-offices",
    cta: "Find offices",
  },
  {
    step: "05",
    title: "Track",
    bn: "আপনার আবেদন ট্র্যাক করুন",
    description:
      "Keep your application ID safe and follow up through the official channel until your service is delivered.",
    icon: "Clock",
    href: "/application-tracker",
    cta: "Track application",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="কীভাবে কাজ করে?"
        description="Five simple phases take you from a confusing government process to a confident application — Discover, Understand, Prepare, Apply, Track."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
      />
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[27px] before:w-0.5 before:bg-brand-100 sm:before:left-[31px]">
          {PHASES.map((phase) => (
            <li key={phase.step} className="relative flex gap-5 sm:gap-7">
              <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-base font-extrabold text-white shadow-card sm:h-16 sm:w-16">
                {phase.step}
              </span>
              <div className="flex-1 rounded-2xl border border-line bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-cardHover sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={phase.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    {phase.title} <span className="text-slate-400">·</span>{" "}
                    <span className="text-brand-700">{phase.bn}</span>
                  </h2>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{phase.description}</p>
                <Link
                  href={phase.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
                >
                  {phase.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-brand-800 px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-flag-500/25" aria-hidden="true" />
          <div className="pattern-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to try it?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-7 text-brand-100">
              Start with the most common task — searching for the service you need right now.
            </p>
            <Link
              href="/search"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-brand-800 shadow-card transition-colors hover:bg-brand-50"
            >
              Search services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
