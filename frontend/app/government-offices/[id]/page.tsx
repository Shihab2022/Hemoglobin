import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { OFFICES, getOfficeById } from "@/lib/data/offices";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { DemoNote } from "@/components/ui/States";

export function generateStaticParams() {
  return OFFICES.map((o) => ({ id: o.id }));
}

export async function generateMetadata(
  props: PageProps<"/government-offices/[id]">,
): Promise<Metadata> {
  const { id } = await props.params;
  const office = getOfficeById(id);
  if (!office) return { title: "Office not found" };
  return { title: office.name, description: `${office.typeLabel} — ${office.address}` };
}

export default async function OfficeDetailPage(props: PageProps<"/government-offices/[id]">) {
  const { id } = await props.params;
  const office = getOfficeById(id);
  if (!office) notFound();

  return (
    <>
      <header className="relative overflow-hidden border-b border-line bg-canvas">
        <div className="pattern-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-100/70 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/government-offices" className="hover:text-brand-700">
                  Government Offices
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-slate-700">
                {office.typeLabel}
              </li>
            </ol>
          </nav>

          <div className="mt-5 flex items-start gap-4 sm:gap-5">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-card">
              <Icon name={office.icon} className="h-7 w-7" />
            </span>
            <div>
              <Badge tone="soft-green">{office.typeLabel}</Badge>
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {office.name}
              </h1>
              <p className="mt-2 flex items-start gap-1.5 text-sm text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flag-500" aria-hidden="true" />
                {office.address}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <DemoNote />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <section
            aria-labelledby="office-info"
            className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
          >
            <h2 id="office-info" className="text-base font-extrabold text-slate-900">
              Office Information
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="text-slate-600">{office.address}</dd>
                  <dd className="mt-0.5 text-xs text-slate-400">
                    {office.upazila}, {office.district} — {office.division} Division
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Opening hours</dt>
                  <dd className="text-slate-600">{office.openingHours}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Contact</dt>
                  <dd className="text-slate-600">{office.contact}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Office type</dt>
                  <dd className="text-slate-600">{office.typeLabel}</dd>
                </div>
              </div>
            </dl>

            {office.officialUrl ? (
              <a
                href={office.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-xl bg-brand-600 px-4 text-sm font-bold text-white transition-colors hover:bg-brand-700"
              >
                Visit Official Website
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </section>

          <section
            aria-labelledby="office-services"
            className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
          >
            <h2 id="office-services" className="text-base font-extrabold text-slate-900">
              Services Available
            </h2>
            <ul className="mt-4 space-y-2.5">
              {office.services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2.5 rounded-xl border border-line bg-canvas px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-flag-500" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Find related services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>

        {/* Map placeholder */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-line bg-brand-50/50 p-8 text-center">
          <div className="pattern-grid absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <MapPin className="mx-auto h-8 w-8 text-brand-600" aria-hidden="true" />
            <p className="mt-3 text-sm font-bold text-slate-800">Map integration coming soon</p>
            <p className="mt-1 text-xs text-slate-500">
              Coordinates are stored in the data model for a future map view.
            </p>
            {office.coordinates ? (
              <p className="mt-2 text-[11px] font-medium text-slate-400">
                {office.coordinates.lat.toFixed(4)}, {office.coordinates.lng.toFixed(4)}
              </p>
            ) : null}
          </div>
        </div>

      </div>
    </>
  );
}
