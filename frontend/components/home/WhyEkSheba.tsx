import { Accessibility, Layers, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    icon: Sparkles,
    title: "Simple",
    bn: "সরল",
    text: "সরকারি সেবার জটিল তথ্য সহজ ভাষায়।",
    en: "Complex government information in plain language.",
    accent: "green",
  },
  {
    icon: Layers,
    title: "Organized",
    bn: "সুশৃঙ্খল",
    text: "সব সেবা category অনুযায়ী সাজানো।",
    en: "Every service organized by category.",
    accent: "red",
  },
  {
    icon: ShieldCheck,
    title: "Transparent",
    bn: "স্বচ্ছ",
    text: "প্রয়োজনীয় documents, fees এবং steps পরিষ্কারভাবে দেখুন।",
    en: "Documents, fees and steps shown clearly.",
    accent: "green",
  },
  {
    icon: Lock,
    title: "Official",
    bn: "অফিসিয়াল",
    text: "অফিসিয়াল সরকারি service links-এ পৌঁছান।",
    en: "Reach genuine official service links.",
    accent: "red",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    bn: "সুলভ",
    text: "মোবাইল, ট্যাব এবং ডেস্কটপে সহজে ব্যবহারযোগ্য।",
    en: "Works beautifully on mobile, tablet and desktop.",
    accent: "green",
  },
];

/** "কেন একসেবা?" value-proposition grid. */
export function WhyEkSheba() {
  return (
    <section aria-labelledby="why-heading" className="relative overflow-hidden bg-brand-700">
      <div className="pattern-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-flag-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            id="why-heading"
            tone="white"
            eyebrow="Why EkSheba"
            title="কেন একসেবা?"
            description="Built to earn the trust of every citizen who uses it."
          />
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <li key={reason.title}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <div
                  className={cn(
                    "group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10",
                    i === REASONS.length - 1 && "lg:col-span-1",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-6",
                      reason.accent === "green" ? "bg-white/10 text-white" : "bg-flag-500 text-white",
                    )}
                  >
                    <reason.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="mt-4 flex items-baseline gap-2">
                    <h3 className="text-lg font-extrabold text-white">{reason.title}</h3>
                    <span className="text-xs font-semibold text-brand-200">{reason.bn}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium leading-6 text-white/90">
                    {reason.text}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-brand-100/70">{reason.en}</p>
                </div>
              </Reveal>
            </li>
          ))}

          {/* sixth tile — brand statement */}
          <li>
            <Reveal delay={140} className="h-full">
              <div className="flex h-full flex-col justify-center rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-sm font-bold leading-6 text-white">
                  “Government Trust + Modern Technology + Bangladesh Identity + Excellent UX.”
                </p>
                <p className="mt-3 text-xs leading-5 text-brand-100/75">
                  The design principle behind একসেবা.
                </p>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyEkSheba;
