"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { NOTICES } from "@/lib/data/notices";
import { OFFICES } from "@/lib/data/offices";
import { SERVICES } from "@/lib/data/services";
import type { SearchResult } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/States";
import { Tabs } from "@/components/ui/Tabs";

const TABS = [
  { value: "all", label: "All" },
  { value: "service", label: "Services" },
  { value: "office", label: "Offices" },
  { value: "notice", label: "Notices" },
  { value: "document", label: "Documents" },
];

function collect(q0: string): SearchResult[] {
  const q = q0.trim().toLowerCase();
  const out: SearchResult[] = [];
  for (const s of SERVICES) {
    const hay = `${s.name} ${s.description} ${(s.requiredDocuments ?? []).join(" ")} ${s.department}`.toLowerCase();
    if (!q || hay.includes(q))
      out.push({ id: s.id, type: "service", title: s.name, description: s.description, href: `/services/${s.slug}`, badge: s.isOnline ? "Online" : "Office" });
  }
  for (const o of OFFICES) {
    const hay = `${o.name} ${o.typeLabel} ${o.district} ${o.division}`.toLowerCase();
    if (!q || hay.includes(q))
      out.push({ id: o.id, type: "office", title: o.name, description: `${o.typeLabel} — ${o.address}`, href: `/government-offices/${o.id}`, badge: o.district });
  }
  for (const n of NOTICES) {
    const hay = `${n.title} ${n.summary} ${n.department}`.toLowerCase();
    if (!q || hay.includes(q))
      out.push({ id: n.id, type: "notice", title: n.title, description: n.summary, href: `/notices/${n.id}`, badge: "Notice" });
  }
  for (const s of SERVICES) {
    for (const doc of s.requiredDocuments ?? []) {
      if (!q || doc.toLowerCase().includes(q)) {
        out.push({ id: `${s.id}-${doc}`, type: "document", title: doc, description: `Required for ${s.name}`, href: `/services/${s.slug}`, badge: s.name });
        break;
      }
    }
  }
  return out;
}

export function Hi({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded bg-amber-200/70 px-0.5 text-inherit">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

export function SearchExplorer({ initialQuery }: { initialQuery: string }) {
  const sp = useSearchParams();
  const [query, setQuery] = useState(sp.get("q") ?? initialQuery);
  const [tab, setTab] = useState("all");
  const results = useMemo(() => collect(query), [query]);
  const filtered = tab === "all" ? results : results.filter((r) => r.type === tab);
  const counts = {
    all: results.length,
    service: results.filter((r) => r.type === "service").length,
    office: results.filter((r) => r.type === "office").length,
    notice: results.filter((r) => r.type === "notice").length,
    document: results.filter((r) => r.type === "document").length,
  };

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
        <label htmlFor="global-search" className="sr-only">Search government services, documents, offices and notices</label>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input id="global-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search government services, documents, offices and notices..." autoComplete="off"
            className="h-[52px] w-full rounded-xl border border-line bg-canvas py-3.5 pr-4 pl-12 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
        </div>
        <div className="mt-3">
          <Tabs tabs={TABS.map((t) => ({ value: t.value, label: t.label, count: counts[t.value as keyof typeof counts] ?? 0 }))} defaultValue="all" onChange={setTab} size="sm" />
        </div>
      </form>
      <p className="mt-5 text-sm font-medium text-slate-500" role="status" aria-live="polite">
        {query.trim() ? (<> <strong className="font-bold text-slate-800">{filtered.length}</strong> result{filtered.length === 1 ? "" : "s"} for <strong className="font-bold text-slate-800">&ldquo;{query.trim()}&rdquo;</strong></>)
        : (<>Showing <strong className="font-bold text-slate-800">{filtered.length}</strong> popular results — type to search everything.</>)}
      </p>
      {filtered.length > 0 ? (
        <ul className="mt-4 space-y-3">
          {filtered.slice(0, 30).map((r) => (
            <li key={`${r.type}-${r.id}`} className="group relative rounded-2xl border border-line bg-white p-4 shadow-card transition-all duration-300 hover:border-brand-200 hover:shadow-card-hover sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={r.type === "service" ? "soft-green" : r.type === "notice" ? "soft-red" : r.type === "document" ? "soft-amber" : "outline"}>{r.type}</Badge>
                {r.badge ? <span className="text-xs font-medium text-slate-400">{r.badge}</span> : null}
              </div>
              <Link href={r.href} className="mt-2 block text-base font-bold text-slate-900 group-hover:text-brand-700">
                <Hi text={r.title} query={query} />
              </Link>
              <p className="mt-1 text-sm leading-6 text-slate-500"><Hi text={r.description} query={query} /></p>
              <Link href={r.href} className="mt-2.5 inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-800">
                Open <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState className="mt-4" title="No results found." description={`Nothing matched \u201C${query.trim()}\u201D. Try a keyword like passport, NID or land.`} />
      )}
    </div>
  );
}

export default SearchExplorer;

