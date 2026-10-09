import Link from "next/link";
import { AlertTriangle, ArrowRight, Bot, Sparkles, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * AI assistant promo with a static chat preview.
 * CTA leads to the demo chat page (/ai-assistant).
 */
export function AIAssistant() {
  return (
    <section aria-labelledby="ai-heading" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="ai-heading"
              align="left"
              eyebrow="AI assistant"
              title="সরকারি সেবা বুঝতে সাহায্য দরকার?"
              description="Ask questions about government services, required documents, eligibility and procedures."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/ai-assistant"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
              >
                Ask EkSheba AI
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <Sparkles className="h-3.5 w-3.5 text-flag-500" aria-hidden="true" />
                Demo responses — verify with official sources
              </span>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
              <p className="text-xs leading-5 text-amber-800">
                AI answers are generated guidance. Always verify information against official
                government sources before acting.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative rounded-3xl border border-line bg-canvas p-5 shadow-card sm:p-7">
              <span
                className="absolute -top-3 right-6 h-6 w-6 rounded-full bg-flag-500 shadow"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2.5 border-b border-line pb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">EkSheba AI</p>
                  <p className="text-[11px] font-medium text-brand-600">● Online — demo</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex justify-end">
                  <div className="flex max-w-[85%] items-start gap-2">
                    <div className="rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-3 text-sm leading-6 text-white">
                      How can I renew my passport?
                    </div>
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                      <UserRound className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-line bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm">
                    You can renew your passport through the{" "}
                    <strong className="text-brand-700">e-Passport re-issue</strong> service.
                    Required documents:
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li>• Current passport (original)</li>
                      <li>• NID card</li>
                      <li>• Bank payment receipt</li>
                    </ul>
                    <p className="mt-2 text-xs text-slate-400">
                      Official portal: epassport.gov.bd — verify fees there.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-9">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400 [animation-delay:300ms]" />
                  </span>
                  <span className="text-[11px] text-slate-400">EkSheba AI is typing…</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3">
                <span className="flex-1 text-sm text-slate-400">
                  Ask about any government service…
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default AIAssistant;
