import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SearchExplorer } from "@/components/search/SearchExplorer";
import { Skeleton } from "@/components/ui/States";

export const metadata: Metadata = {
  title: "Search",
  description: "Search government services, required documents, offices and notices across NagorikSheba.",
};

export default async function SearchPage(props: PageProps<"/search">) {
  const sp = await props.searchParams;
  const q = typeof sp?.q === "string" ? sp.q : "";
  return (
    <>
      <PageHeader
        title="Search everything"
        description="One search across government services, documents, offices and notices."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Suspense fallback={<Skeleton className="h-40 w-full rounded-2xl" />}>
          <SearchExplorer initialQuery={q} />
        </Suspense>
      </div>
    </>
  );
}
