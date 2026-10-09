import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, CalendarDays, Clock, ExternalLink } from "lucide-react";
import { NOTICES, formatNoticeDate, getNoticeById, publishedLabel } from "@/lib/data/notices";
import { NoticeCard } from "@/components/notices/NoticeCard";
import { Badge } from "@/components/ui/Badge";
import { DemoNote } from "@/components/ui/States";

export function generateStaticParams() {
  return NOTICES.map((n) => ({ id: n.id }));
}

export async function generateMetadata(
  props: PageProps<"/notices/[id]">,
): Promise<Metadata> {
  const { id } = await props.params;
  const notice = getNoticeById(id);
  if (!notice) return { title: "Notice not found" };
  return { title: notice.title, description: notice.summary };
}

const CATEGORY_LABELS: Record<string, string> = {
  nid: "NID",
  passport: "Passport",
  tax: "Tax",
  education: "Education",
  land: "Land",
  transport: "Transport",
  health: "Health",
};

export default async function NoticeDetailPage(props: PageProps<"/notices/[id]">) {
  const { id } = await props.params;
  const notice = getNoticeById(id);
  if (!notice) notFound();

  const related = NOTICES.filter((n) => n.id !== notice.id && n.category === notice.category).slice(0, 3);

  return (
    <>
      <div className="border-b border-line bg-canvas">
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="pattern-grid absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <Link
              href="/notices"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All notices
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="soft-red">Notice</Badge>
              <Badge tone="outline">{CATEGORY_LABELS[notice.category] ?? notice.category}</Badge>
            </div>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {notice.title}
            </h1>
            <dl className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <dt className="sr-only">Published</dt>
                <dd>
                  <time dateTime={notice.publishedAt}>{formatNoticeDate(notice.publishedAt)}</time> ·{" "}
                  {publishedLabel(notice.publishedAt)}
                </dd>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                <dt className="sr-only">Department</dt>
                <dd>{notice.department}</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <dt className="sr-only">Reading time</dt>
                <dd>{notice.readMinutes} min read</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <DemoNote />
        </div>
        <article className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <p className="border-l-4 border-brand-500 bg-brand-50/60 px-4 py-3 text-base leading-7 font-medium text-slate-700">
            {notice.summary}
          </p>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
            {notice.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {notice.officialUrl ? (
            <a
              href={notice.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-brand-600 px-4 text-sm font-bold text-white transition-colors hover:bg-brand-700"
            >
              Verify on Official Source
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </article>

        {related.length > 0 ? (
          <section aria-labelledby="related-notices" className="mt-10">
            <h2 id="related-notices" className="text-lg font-extrabold text-slate-900">
              Related notices
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {related.map((n) => (
                <NoticeCard key={n.id} notice={n} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
