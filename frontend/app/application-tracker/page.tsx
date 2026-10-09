import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TrackerWidget } from "@/components/tracker/TrackerWidget";

export const metadata: Metadata = {
  title: "Application Tracker",
  description: "Track where your government application stands — demo UI showing how live status tracking will work.",
};

export default function TrackerPage() {
  return (
    <>
      <PageHeader
        title="আপনার আবেদন কোথায় আছে?"
        description="Enter your application ID to see a demonstration of how live status tracking will work once backend systems are connected."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Application Tracker" }]}
      />
      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <TrackerWidget />
        <div className="mt-6 rounded-2xl border border-line bg-white p-5 shadow-card">
          <h2 className="text-sm font-extrabold text-slate-900">How real tracking works</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-500">
            <li>Apply on the official portal and save your application / acknowledgement ID.</li>
            <li>Use the authority&apos;s own tracking page or helpline for the live status.</li>
            <li>Once integrated, this page will query those systems directly.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
