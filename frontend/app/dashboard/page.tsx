import type { Metadata } from "next";
import Link from "next/link";
import { Bell, Bookmark, Bot, Building2, History, PackageSearch, Search } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { DemoNote } from "@/components/ui/States";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Dashboard", description: "Your NagorikSheba citizen dashboard." };

const QUICK = [
  { icon: Search, label: "Search Service", href: "/search" },
  { icon: PackageSearch, label: "Track Application", href: "/application-tracker" },
  { icon: Building2, label: "Find Office", href: "/government-offices" },
  { icon: Bot, label: "Ask AI", href: "/ai-assistant" },
];

export default function DashboardPage() {
  const saved = SERVICES.slice(0, 3);
  return (
    <>
      <PageHeader
        title="Welcome back!"
        description="Your saved services, applications and recent activity — all in one place."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6"><DemoNote /></div>
        <section aria-labelledby="dash-quick">
          <h2 id="dash-quick" className="text-sm font-extrabold tracking-wide text-slate-500 uppercase">Quick Actions</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {QUICK.map((q) => (
              <Link key={q.label} href={q.href}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition-transform duration-300 group-hover:scale-105">
                  <q.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-slate-800">{q.label}</span>
              </Link>
            ))}
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section aria-labelledby="dash-apps">
              <div className="flex items-center justify-between">
                <h2 id="dash-apps" className="text-lg font-extrabold text-slate-900">My Applications</h2>
                <Link href="/application-tracker" className="text-sm font-bold text-brand-700 hover:text-brand-800">Track one</Link>
              </div>
              <div className="mt-3 rounded-2xl border border-dashed border-line bg-white p-6 text-center">
                <Icon name="ScrollText" className="mx-auto h-8 w-8 text-slate-300" />
                <p className="mt-2 text-sm font-bold text-slate-700">No applications yet</p>
                <p className="mt-1 text-xs text-slate-400">Applications you track will appear here once accounts are connected.</p>
              </div>
            </section>
            <section aria-labelledby="dash-saved">
              <div className="flex items-center justify-between">
                <h2 id="dash-saved" className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
                  <Bookmark className="h-5 w-5 text-brand-600" aria-hidden="true" /> Saved Services
                </h2>
                <Link href="/services" className="text-sm font-bold text-brand-700 hover:text-brand-800">Browse all</Link>
              </div>
              <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {saved.map((s) => (<ServiceCard key={s.id} service={s} />))}
              </div>
            </section>
          </div>
          <aside className="space-y-5">
            <section aria-labelledby="dash-recent" className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h2 id="dash-recent" className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                <History className="h-[18px] w-[18px] text-brand-600" aria-hidden="true" /> Recent Searches
              </h2>
              <ul className="mt-3 space-y-2">
                {["passport renewal", "NID correction", "land mutation"].map((t) => (
                  <li key={t}>
                    <Link href={`/search?q=${encodeURIComponent(t)}`} className="block truncate rounded-xl bg-canvas px-3.5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700">{t}</Link>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="dash-notif" className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h2 id="dash-notif" className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                <Bell className="h-[18px] w-[18px] text-brand-600" aria-hidden="true" /> Notifications
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-500">
                <li className="rounded-xl bg-brand-50/70 px-3.5 py-2.5"><strong className="font-bold text-slate-800">Tax filing reminder:</strong> e-Return deadline is approaching.</li>
                <li className="rounded-xl bg-canvas px-3.5 py-2.5">New notice: BRTA test schedule updated.</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
