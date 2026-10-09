import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { DemoNote } from "@/components/ui/States";
import { NoticesExplorer } from "@/components/notices/NoticesExplorer";

export const metadata: Metadata = {
  title: "Government Notices",
  description:
    "Browse the latest government notices, updates and announcements across NID, passport, tax, education, land and more.",
};

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        title="সর্বশেষ সরকারি নোটিশ"
        description="Latest government notices, service updates and announcements — clearly organized and easy to scan."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Notices" }]}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <DemoNote />
        </div>
        <NoticesExplorer />
      </div>
    </>
  );
}
