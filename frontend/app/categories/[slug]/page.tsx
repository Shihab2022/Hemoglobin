import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SearchX } from "lucide-react";
import { CATEGORIES, getCategoryBySlug } from "@/lib/data/categories";
import { getServicesByCategory } from "@/lib/data/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { EmptyState } from "@/components/ui/States";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/categories/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category not found" };
  return { title: `${category.name} Services`, description: category.description };
}

export default async function CategoryDetailPage(props: PageProps<"/categories/[slug]">) {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const services = getServicesByCategory(slug);

  return (
    <>
      <PageHeader
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500" role="status">
            <strong className="text-slate-800">{services.length}</strong> services listed in
            this prototype · {category.serviceCount}+ expected in the full directory
          </p>
          <Link
            href="/services"
            className="text-sm font-bold text-brand-700 hover:text-brand-800"
          >
            Browse all services →
          </Link>
        </div>

        {services.length === 0 ? (
          <EmptyState
            title="No services found."
            description="Try changing your search or filters."
            icon={<SearchX className="h-7 w-7" aria-hidden="true" />}
            action={
              <Link
                href="/services"
                className="inline-flex h-10 items-center rounded-xl bg-brand-600 px-4 text-sm font-bold text-white"
              >
                Back to services
              </Link>
            }
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 60} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
