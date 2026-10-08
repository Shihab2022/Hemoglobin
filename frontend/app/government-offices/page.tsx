import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { OfficesExplorer } from "@/components/offices/OfficesExplorer";
import { DemoNote } from "@/components/ui/States";

export const metadata: Metadata = {
  title: "Find Government Offices",
  description:
    "Find government offices across Bangladesh — passport, land, BRTA, police, hospitals, tax, city corporation, municipality and courts.",
};

export default function GovernmentOfficesPage() {
  return (
    <>
      <PageHeader
        title="Find Government Offices"
        description="সরকারি অফিস খুঁজুন — filter by division, district, upazila and office type."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Government Offices" }]}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <DemoNote />
        </div>
        <OfficesExplorer />
      </div>
    </>
  );
}
