import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPopularServices } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** "জনপ্রিয় সরকারি সেবা" — top 9 services by popularity. */
export function PopularServices() {
  const services = getPopularServices(9);

  return (
    <section aria-labelledby="popular-heading" className="border-y border-line bg-canvas">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            id="popular-heading"
            eyebrow="Popular services"
            title="জনপ্রিয় সরকারি সেবা"
            description="The services citizens look up most often — with documents, fees and official links."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 70} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand-600 px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PopularServices;
