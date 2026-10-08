import { BadgeCheck, Clock, ExternalLink, Landmark, MonitorSmartphone } from "lucide-react";
import type { GovernmentService } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

/**
 * Sticky "Service Information" card for the service detail page.
 * Desktop: sticky sidebar. Mobile: rendered above a sticky CTA bar.
 */
export function ServiceSidebar({ service }: { service: GovernmentService }) {
  return (
    <aside aria-label="Service information" className="lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <div className="border-b border-line bg-brand-50 px-5 py-4">
          <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-brand-800">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Service Information
          </h2>
        </div>

        <div className="space-y-3 p-5">
          <div className="flex flex-wrap gap-2">
            <Badge tone={service.isOnline ? "soft-green" : "soft-red"}>
              <MonitorSmartphone className="h-3 w-3" aria-hidden="true" />
              {service.isOnline ? "Online Available" : "Office Visit"}
            </Badge>
            <Badge tone="slate">Government Service</Badge>
          </div>

          <dl className="space-y-3 border-t border-line pt-3 text-sm">
            <div className="flex items-start justify-between gap-3">
              <dt className="flex items-center gap-1.5 text-slate-500">
                <Clock className="h-4 w-4 text-brand-600" aria-hidden="true" />
                Processing
              </dt>
              <dd className="text-right font-bold text-slate-900">
                {service.processingTime ?? "Varies"}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="flex items-center gap-1.5 text-slate-500">
                <Landmark className="h-4 w-4 text-brand-600" aria-hidden="true" />
                Fee
              </dt>
              <dd className="max-w-[60%] text-right font-bold text-slate-900">
                {service.fee ?? "Based on service"}
              </dd>
            </div>
          </dl>

          {service.officialUrl ? (
            <a
              href={service.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 text-sm font-bold text-white transition-all hover:bg-brand-700 hover:shadow-md"
            >
              Visit Official Website
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <p className="rounded-xl border border-dashed border-line bg-canvas px-4 py-3 text-xs leading-5 text-slate-500">
              No single online portal for this service — apply at the responsible office in
              person.
            </p>
          )}

          <div className="rounded-xl bg-canvas px-4 py-3 text-xs leading-5 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-700">Official Source:</strong>{" "}
              {service.authority}
            </p>
            {service.lastVerifiedAt ? (
              <p className="mt-1">
                <strong className="font-semibold text-slate-700">Last Verified:</strong>{" "}
                {service.lastVerifiedAt}
              </p>
            ) : null}
          </div>

          <p className="text-[11px] leading-4 text-slate-400">
            EkSheba provides guidance only. Applications are submitted through official
            government systems.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default ServiceSidebar;
