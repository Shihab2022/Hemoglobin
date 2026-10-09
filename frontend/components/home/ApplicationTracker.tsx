"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Route, SearchX, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/States";

const STAGES = ["Submitted", "Under Review", "Processing", "Approved"];

/**
 * Application tracker — UI only. Without backend data it shows an honest
 * empty state plus an example status flow (never fake live results).
 */
export function ApplicationTracker({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState("");
  const [state, setState] = useState<"idle" | "empty">("idle");

  function submit(e: FormEvent) {
    e.preventDefault();
    setState("empty");
  }

  return (
    <section aria-labelledby="tracker-heading" className={compact ? "" : "border-y border-line bg-canvas"}>
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              id="tracker-heading"
              align="left"
              eyebrow="Application tracker"
              title="আপনার আবেদন কোথায় আছে?"
              description="Enter your application ID to see where it stands in the process."
            />

            <form onSubmit={submit} className="mt-6 max-w-md">
              <label
                htmlFor="tracker-id"
                className="block text-sm font-semibold text-slate-700"
              >
                Application ID
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="tracker-id"
                  type="text"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (state !== "idle") setState("idle");
                  }}
                  placeholder="e.g. EP-2026-001234"
                  className="h-12 w-full min-w-0 rounded-xl border border-line bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                />
                <Button type="submit" size="lg" icon={<Send className="h-4 w-4" aria-hidden="true" />}>
                  Track
                </Button>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Button label: <strong>Track Application</strong> — demo mode, no backend
                connected.
              </p>
            </form>

            {state === "empty" ? (
              <div className="mt-5 max-w-md">
                <EmptyState
                  title="No live tracking data yet."
                  description="Tracking requires each authority's system to be connected. This prototype shows an example flow below instead."
                  icon={<SearchX className="h-7 w-7" aria-hidden="true" />}
                  className="py-10"
                />
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                <Route className="h-4 w-4" aria-hidden="true" />
                Example status flow
              </div>
              <ol className="mt-6 space-y-0">
                {STAGES.map((stage, i) => (
                  <li key={stage} className="relative flex gap-4 pb-8 last:pb-0">
                    {i < STAGES.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-0.5 bg-line"
                      />
                    ) : null}
                    <span
                      className={`relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${
                        i === 0
                          ? "bg-brand-600 text-white"
                          : "border-2 border-line bg-white text-slate-400"
                      }`}
                    >
                      {i === 0 ? "✓" : String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1">
                      <p
                        className={`text-sm font-bold ${
                          i === 0 ? "text-brand-700" : "text-slate-700"
                        }`}
                      >
                        {stage}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {i === 0
                          ? "Application received by the authority"
                          : `Pending — step ${i + 1} of ${STAGES.length}`}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <a
                href="/application-tracker"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
              >
                Open full tracker
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ApplicationTracker;
