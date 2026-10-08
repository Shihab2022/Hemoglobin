"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Building2, Newspaper } from "lucide-react";
import { NOTICES, NOTICE_CATEGORIES, publishedLabel } from "@/lib/data/notices";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/States";
import { cn } from "@/lib/utils";

/** Latest government notices with category chips (client-side filter). */
export function NoticeSection() {
  const [active, setActive] = useState<string>("all");

  const filtered = NOTICES.filter((n) => active === "all" || n.category === active).slice(0, 6);

  return (
    <section aria-labelledby="notices-heading" className="border-t border-line bg-canvas">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            id="notices-heading"
            eyebrow="Notices"
            title="সর্বশেষ সরকারি নোটিশ"
            description="Stay updated with the latest announcements from government departments."
          />
        </Reveal>

        <Reveal delay={80}>
          <div
            className="scrollbar-none mt-8 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center"
            role="group"
            aria-label="Filter notices by category"
          >
            {NOTICE_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                aria-pressed={active === cat.value}
                onClick={() => setActive(cat.value)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm",
                  active === cat.value
                    ? "bg-brand-600 text-white shadow-sm"
                    : "border border-line bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6">
          {filtered.length === 0 ? (
            <EmptyState
              title="No notices in this category."
              description="Try changing your search or filters."
              icon={<Newspaper className="h-7 w-7" aria-hidden="true" />}
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((notice, i) => (
                <Reveal key={notice.id} delay={(i % 3) * 60} className="h-full">
                  <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                    <div className="flex items-center justify-between gap-2">
                      <Badge tone="soft-red">
                        <Newspaper className="h-3 w-3" aria-hidden="true" />
                        NOTICE
                      </Badge>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {notice.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-brand-700">
                      <Link href={`/notices/${notice.id}`} className="after:absolute after:inset-0">
                        {notice.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs font-medium text-slate-500">
                      {publishedLabel(notice.publishedAt)}
                    </p>

                    <div className="mt-auto flex items-center gap-2 border-t border-line pt-3.5">
                      <Building2 className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden="true" />
                      <span className="truncate text-xs font-medium text-slate-500">
                        {notice.department}
                      </span>
                    </div>

                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                      Read Notice
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <Reveal>
          <div className="mt-8 text-center">
            <Link
              href="/notices"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-white px-5 text-sm font-bold text-slate-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              View all notices
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default NoticeSection;
