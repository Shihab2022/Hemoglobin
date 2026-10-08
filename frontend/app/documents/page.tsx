import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { DemoNote } from "@/components/ui/States";
import { DocsExplorer } from "@/components/documents/DocsExplorer";

export const metadata: Metadata = {
  title: "Document Checklists",
  description: "Interactive checklists of required documents for every major Bangladesh government service.",
};

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="কোন সেবার জন্য কী কী কাগজ লাগবে?"
        description="Pick a service, tick off each document as you collect it, and arrive fully prepared."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Documents" }]}
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6"><DemoNote /></div>
        <DocsExplorer />
      </div>
    </>
  );
}
