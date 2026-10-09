"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaqExplorer } from "@/components/faq/FaqExplorer";

export default function FaqPage() {
  const [q, setQ] = useState("");
  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        description="Quick answers about NagorikSheba, services, accounts and how we keep information accurate."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions..."
            aria-label="Search questions"
            className="h-12 w-full rounded-xl border border-line bg-white pr-4 pl-11 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
        </div>
        <div className="mt-5">
          <FaqExplorer query={q} />
        </div>
      </div>
    </>
  );
}
