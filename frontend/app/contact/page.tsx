import type { Metadata } from "next";
import { AlertTriangle, Lightbulb, Link2Off, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NagorikSheba — report incorrect information, suggest a service, or send feedback.",
};

const CARDS = [
  { icon: AlertTriangle, title: "Report incorrect information", text: "Wrong fee, document or step on a service page? Tell us the page and the correction." },
  { icon: Lightbulb, title: "Suggest a service", text: "Missing a service citizens need? Suggest it and we will research the official process." },
  { icon: Link2Off, title: "Report broken official link", text: "Official portals move often — report a dead link and we will fix it." },
  { icon: MessageSquare, title: "General feedback", text: "Ideas to make NagorikSheba clearer, simpler or more accessible for everyone." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact NagorikSheba"
        description="Help us keep government information accurate — every correction from citizens helps everyone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-3 text-sm font-extrabold text-slate-900">{c.title}</h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-500">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <ContactForm />
          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h2 className="text-sm font-extrabold text-slate-900">Before you write</h2>
              <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-500">
                <li>Check the Official Source link on the service page first.</li>
                <li>Include the page URL and what you expected to see.</li>
                <li>We cannot submit applications or take payments.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-800 p-5 text-white">
              <h2 className="text-sm font-extrabold">Prefer self-help?</h2>
              <p className="mt-1.5 text-sm leading-6 text-brand-100">Most questions are already answered in the FAQ.</p>
              <a href="/faq" className="mt-3 inline-block rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-brand-800 transition-colors hover:bg-brand-50">Visit FAQ</a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
