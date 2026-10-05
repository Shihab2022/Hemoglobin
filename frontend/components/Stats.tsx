import { AwardIcon, DropletIcon, HeartPulseIcon, HospitalIcon, UsersIcon } from "@/components/Icons";

const STATS = [
  {
    icon: HeartPulseIcon,
    value: "74,600+",
    label: "Lives saved",
  },
  {
    icon: UsersIcon,
    value: "12,480",
    label: "Active donors",
  },
  {
    icon: HospitalIcon,
    value: "210+",
    label: "Partner hospitals",
  },
  {
    icon: DropletIcon,
    value: "318,000",
    label: "Units collected",
  },
];

export function Stats() {
  return (
    <section
      id="impact"
      aria-label="Impact in numbers"
      className="border-y border-slate-200 bg-slate-50"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <stat.icon className="h-5.5 w-5.5" />
              </span>
              <dd className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="text-sm font-medium text-slate-600">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <AwardIcon className="h-4.5 w-4.5 text-brand-500" />
          Figures updated monthly from verified hospital records.
        </p>
      </div>
    </section>
  );
}

export default Stats;
