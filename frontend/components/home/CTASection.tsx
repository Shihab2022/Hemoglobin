import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

/** Strong closing CTA band with the flag-red circular accent. */
export function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="bg-brand-600">
      <div className="relative overflow-hidden">
        {/* flag-red circle motif */}
        <div
          className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-flag-500/25 blur-2xl"
          aria-hidden="true"
        />
        <span
          className="absolute right-[8%] top-10 h-14 w-14 rounded-full bg-flag-500 shadow-xl"
          aria-hidden="true"
        />
        <span
          className="absolute left-[6%] bottom-8 h-5 w-5 rounded-full bg-white/30"
          aria-hidden="true"
        />
        <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <h2
              id="cta-heading"
              className="text-2xl font-extrabold leading-snug text-white sm:text-3xl lg:text-4xl"
            >
              আপনার প্রয়োজনীয় সরকারি সেবা
              <br />
              আজই খুঁজে নিন।
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-brand-50/90 sm:text-base">
              একসেবার মাধ্যমে সঠিক তথ্য থেকে সঠিক সরকারি সেবায় পৌঁছে যান।
            </p>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-bold text-brand-800 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                সেবা খুঁজুন
                <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-xs text-brand-100/70">
              Free for citizens · Guidance only · Official links
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
