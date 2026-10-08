import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, HeartHandshake, Target } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "What NagorikSheba is, our mission and vision, and how we help citizens navigate government services.",
};

const VALUES = [
  { icon: HeartHandshake, title: "Citizens first", text: "Complex government information explained in simple, respectful language anyone can follow." },
  { icon: Target, title: "Accuracy over speed", text: "Every entry links to its official source and carries a last-verified date for transparency." },
  { icon: Eye, title: "Transparent by design", text: "Demo data is labelled as demo. We never pretend guidance is an official transaction." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="What is NagorikSheba?"
        description="An independent civic-tech platform that helps citizens discover, understand and reach official government services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section aria-labelledby="about-mission" className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
            <h2 id="about-mission" className="text-lg font-extrabold text-slate-900">Our Mission</h2>
            <p className="mt-2 text-[15px] leading-7 text-slate-600">
              Make every Bangladesh government service discoverable and understandable — so no citizen
              gives up because a process felt too confusing.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
            <h2 className="text-lg font-extrabold text-slate-900">Our Vision</h2>
            <p className="mt-2 text-[15px] leading-7 text-slate-600">
              A Bangladesh where any citizen, on any phone, can find the right service, prepare the
              right documents, and reach the right office in minutes.
            </p>
          </div>
        </section>

        <section aria-labelledby="about-how" className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <h2 id="about-how" className="text-lg font-extrabold text-slate-900">How We Work</h2>
          <ol className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
            <li className="flex gap-3"><span className="font-extrabold text-brand-700">1.</span> Editors study official portals, gazettes and office notices.</li>
            <li className="flex gap-3"><span className="font-extrabold text-brand-700">2.</span> We rewrite procedures in plain Bangla and English with checklists.</li>
            <li className="flex gap-3"><span className="font-extrabold text-brand-700">3.</span> Each entry links to the official portal where the real application happens.</li>
            <li className="flex gap-3"><span className="font-extrabold text-brand-700">4.</span> Citizens report errors so entries stay accurate over time.</li>
          </ol>
        </section>

        <section aria-labelledby="about-why" className="mt-8">
          <h2 id="about-why" className="text-lg font-extrabold text-slate-900">Why accurate government information matters</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <v.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-extrabold text-slate-900">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-[15px] leading-7 font-medium text-amber-900">
            NagorikSheba does not replace official government websites. We help citizens understand
            and navigate government services more easily — the service itself is always delivered by
            the official authority.
          </p>
          <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800">
            Report incorrect information <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
