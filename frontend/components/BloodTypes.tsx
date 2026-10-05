import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, DropletIcon, SparklesIcon } from "@/components/Icons";

type BloodType = {
  type: string;
  share: string;
  badge?: string;
  donateTo: string[];
  receiveFrom: string[];
};

const BLOOD_TYPES: BloodType[] = [
  {
    type: "O−",
    share: "6%",
    badge: "Universal donor",
    donateTo: ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"],
    receiveFrom: ["O−"],
  },
  {
    type: "O+",
    share: "38%",
    donateTo: ["O+", "A+", "B+", "AB+"],
    receiveFrom: ["O−", "O+"],
  },
  {
    type: "A−",
    share: "6%",
    donateTo: ["A−", "A+", "AB−", "AB+"],
    receiveFrom: ["O−", "A−"],
  },
  {
    type: "A+",
    share: "34%",
    donateTo: ["A+", "AB+"],
    receiveFrom: ["O−", "O+", "A−", "A+"],
  },
  {
    type: "B−",
    share: "2%",
    donateTo: ["B−", "B+", "AB−", "AB+"],
    receiveFrom: ["O−", "B−"],
  },
  {
    type: "B+",
    share: "9%",
    donateTo: ["B+", "AB+"],
    receiveFrom: ["O−", "O+", "B−", "B+"],
  },
  {
    type: "AB−",
    share: "1%",
    badge: "Rare",
    donateTo: ["AB−", "AB+"],
    receiveFrom: ["O−", "A−", "B−", "AB−"],
  },
  {
    type: "AB+",
    share: "4%",
    badge: "Universal recipient",
    donateTo: ["AB+"],
    receiveFrom: ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"],
  },
];

function TypePills({ types, tone }: { types: string[]; tone: "donate" | "receive" }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {types.map((t) => (
        <li
          key={t}
          className={
            tone === "donate"
              ? "rounded-md bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700"
              : "rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600"
          }
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function BloodTypes() {
  return (
    <section id="blood-types" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Blood group guide"
          title="Who can give to whom"
          description="ABO and Rh compatibility decides the match. Here is the full compatibility table — the same logic our matching engine uses."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BLOOD_TYPES.map((blood) => (
            <article
              key={blood.type}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 items-center gap-1.5 rounded-xl bg-brand-600 px-3 font-display text-lg font-extrabold text-white">
                  <DropletIcon className="h-4 w-4" />
                  {blood.type}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {blood.share} of donors
                </span>
              </div>

              {blood.badge ? (
                <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  {blood.badge}
                </p>
              ) : (
                <p className="mt-3 text-xs text-slate-400">&nbsp;</p>
              )}

              <dl className="mt-4 space-y-3 border-t border-slate-100 pt-4 text-xs">
                <div>
                  <dt className="font-semibold text-slate-500">Can donate to</dt>
                  <dd className="mt-1.5">
                    <TypePills types={blood.donateTo} tone="donate" />
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">Can receive from</dt>
                  <dd className="mt-1.5">
                    <TypePills types={blood.receiveFrom} tone="receive" />
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-10 flex flex-col items-center gap-3 text-center text-sm text-slate-500 sm:flex-row sm:justify-center">
          <span>Not sure of your group?</span>
          <Link
            href="/donate"
            className="group inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700"
          >
            Register and we&rsquo;ll screen you at your first visit
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </p>
      </div>
    </section>
  );
}

export default BloodTypes;
