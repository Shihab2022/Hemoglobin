import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Clock,
  Coins,
  ExternalLink,
  FileCheck2,
  Globe,
  HelpCircle,
  MapPin,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/data/services";
import { getCategoryBySlug } from "@/lib/data/categories";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { DemoNote } from "@/components/ui/States";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import { ServiceSteps, DetailSection } from "@/components/services/ServiceSteps";
import { DocumentList } from "@/components/services/DocumentList";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return { title: service.name, description: service.description };
}

const FAQ_ITEMS = [
  {
    q: "Can I apply online for this service?",
    a: "Where an official portal exists, EkSheba links you directly to it. Some services still require an in-person visit for enrolment, biometrics or document verification.",
  },
  {
    q: "How accurate is the fee shown here?",
    a: "Fees on this prototype are indicative demo values. Always confirm the current fee on the official portal or at the office before paying.",
  },
  {
    q: "What if I do not have a required document?",
    a: "Most authorities allow you to obtain the missing document (for example a birth registration copy) before starting the application. Check the related services below.",
  },
];

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const category = getCategoryBySlug(service.category);

  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden border-b border-line bg-canvas">
        <div className="pattern-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-100/70 blur-2xl"
          aria-hidden="true"
        />
        <span
          className="absolute right-10 top-10 h-8 w-8 rounded-full bg-flag-500/70"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-brand-700">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/categories/${service.category}`} className="hover:text-brand-700">
                  {category?.name ?? "Service"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-slate-700">
                {service.name}
              </li>
            </ol>
          </nav>

          <div className="mt-5 flex items-start gap-4 sm:gap-5">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-card sm:h-16 sm:w-16">
              <Icon name={service.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                <Badge tone={service.isOnline ? "soft-green" : "soft-red"}>
                  {service.isOnline ? "Online Service" : "Office Service"}
                </Badge>
                <Badge tone="slate">{service.department}</Badge>
                {service.updatedLabel ? (
                  <Badge tone="amber">{service.updatedLabel}</Badge>
                ) : null}
              </div>
              <h1 className="mt-2.5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {service.name}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6 lg:hidden">
          <DemoNote />
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="space-y-10">
            <div className="hidden lg:block">
              <DemoNote />
            </div>
            <DetailSection id="overview" title="Overview" icon={<Globe className="h-4 w-4" />}>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {service.longDescription ?? service.description}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This page is guidance provided by EkSheba. The application itself is submitted
                through the official {service.authority} channels.
              </p>
            </DetailSection>

            <DetailSection
              id="eligibility"
              title="Eligibility"
              icon={<UserCheck className="h-4 w-4" />}
            >
              <ul className="space-y-2.5">
                {(service.eligibility ?? []).map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                  >
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {rule}
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection
              id="documents"
              title="Required Documents"
              icon={<FileCheck2 className="h-4 w-4" />}
            >
              <DocumentList documents={service.requiredDocuments ?? []} />
            </DetailSection>

            <div className="grid gap-6 sm:grid-cols-2">
              <DetailSection id="fees" title="Fees" icon={<Coins className="h-4 w-4" />}>
                <p className="rounded-xl border border-line bg-canvas px-4 py-4 text-sm font-bold text-slate-900">
                  {service.fee ?? "Based on service"}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Fees may change. Always verify the latest fee from the official government
                  source.
                </p>
              </DetailSection>

              <DetailSection
                id="processing"
                title="Processing Time"
                icon={<Clock className="h-4 w-4" />}
              >
                <p className="rounded-xl border border-line bg-canvas px-4 py-4 text-sm font-bold text-slate-900">
                  {service.processingTime ?? "Varies"}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Indicative timeframes — actual duration depends on the authority.
                </p>
              </DetailSection>
            </div>

            <DetailSection id="how-to-apply" title="How to Apply">
              {service.steps && service.steps.length > 0 ? (
                <ServiceSteps steps={service.steps} />
              ) : (
                <p className="text-sm text-slate-500">
                  Step-by-step guidance is being prepared for this service.
                </p>
              )}
            </DetailSection>

            <DetailSection
              id="where-to-apply"
              title="Where to Apply"
              icon={<MapPin className="h-4 w-4" />}
            >
              <ul className="space-y-2.5">
                {(service.officeLocations ?? [
                  `${service.authority} office / relevant service counter`,
                ]).map((loc) => (
                  <li
                    key={loc}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-slate-600"
                  >
                    <Building2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {loc}
                  </li>
                ))}
              </ul>
              <Link
                href="/government-offices"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
              >
                Find a government office near you
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </DetailSection>

            <DetailSection
              id="official-link"
              title="Official Link"
              icon={<ExternalLink className="h-4 w-4" />}
            >
              {service.officialUrl ? (
                <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5">
                  <p className="text-sm font-semibold text-brand-900">
                    Official Source: {service.authority}
                  </p>
                  <a
                    href={service.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700"
                  >
                    {service.officialUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  {service.lastVerifiedAt ? (
                    <p className="mt-3 text-xs text-brand-700">
                      Last Verified: {service.lastVerifiedAt}
                    </p>
                  ) : null}
                </div>
              ) : (
                <p className="rounded-xl border border-dashed border-line bg-canvas px-4 py-4 text-sm text-slate-500">
                  No official web portal is listed for this service yet. Visit the responsible
                  office in person — EkSheba never invents government URLs.
                </p>
              )}
            </DetailSection>

            <DetailSection id="faq" title="FAQ" icon={<HelpCircle className="h-4 w-4" />}>
              <div className="space-y-2.5">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-line bg-white px-4 py-3.5 transition-colors open:border-brand-200 open:bg-brand-50/40"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-slate-800 [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </DetailSection>


          </div>
          <div className="hidden lg:block">
            <ServiceSidebar service={service} />
          </div>
        </div>
      </div>
      {/* Mobile sticky CTA */}
      <div className="sticky bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-slate-500">
              {service.processingTime ?? "Varies"} · {service.fee ?? "Fee applies"}
            </p>
          </div>
          {service.officialUrl ? (
            <a
              href={service.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-brand-600 px-4 text-sm font-bold text-white"
            >
              Visit Official
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <Link
              href="/government-offices"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-brand-600 px-4 text-sm font-bold text-white"
            >
              Find Office
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>

    </>
  );
}
