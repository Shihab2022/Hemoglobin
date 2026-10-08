import { Building2, FileText, ListChecks, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Official service links" },
  { icon: ListChecks, label: "Step-by-step guidance" },
  { icon: FileText, label: "Required documents" },
  { icon: Building2, label: "Government office information" },
];

/** Compact reassurance strip directly below the hero. */
export function TrustBar() {
  return (
    <section aria-label="Why trust NagorikSheba" className="border-b border-line bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <item.icon className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold leading-tight text-slate-600 sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
