import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import { DemoNote } from "@/components/ui/States";

export const metadata: Metadata = {
  title: "Government Services",
  description:
    "Browse Bangladesh government services by category, department and availability — with documents, fees and step-by-step guidance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Government Services"
        description="সরকারি সেবা খুঁজুন — browse, filter and open the official application link for every service."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <DemoNote />
        </div>
        <ServicesExplorer />
      </div>
    </>
  );
}
