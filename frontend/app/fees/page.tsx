import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeAlert, ExternalLink } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { DemoNote } from "@/components/ui/States";

export const metadata: Metadata = {
  title: "Fee Guide",
  description: "Indicative government fees for popular Bangladesh services — always verify with the official source.",
};

export default function FeesPage() {
  return (
    <>
      <PageHeader
        title="সরকারি ফি সম্পর্কে জানুন"
        description="Indicative fees at a glance — so you can budget before you apply."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fees" }]}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6"><DemoNote /></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 12).map((s) => (
            <article key={s.id} className="group rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cardHover sm:p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-transform duration-300 group-hover:scale-105">
                <Icon name={s.icon} className="h-5.5 w-5.5" />
              </span>
              <h2 className="mt-3 text-base font-extrabold text-slate-900">{s.name}</h2>
              <p className="mt-1 text-2xl font-extrabold tracking-tight text-brand-700">{s.fee ?? "—"}</p>
              <p className="mt-1 text-xs font-medium text-slate-400">Processing: {s.processingTime ?? "Varies"}</p>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-800">
                  Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {s.officialUrl ? (
                  <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-brand-700">
                    Official <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <BadgeAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
          <p className="text-sm leading-6 font-medium text-amber-900">
            Fees may change. Always verify the latest fee from the official government source before paying.
          </p>
        </div>
      </div>
    </>
  );
}
