import { SectionHeading } from "@/components/SectionHeading";
import { QuoteIcon } from "@/components/Icons";

const STORIES = [
  {
    quote:
      "My mother needed B-negative during an emergency surgery. I had signed up two weeks earlier and got the alert while I was at work. She is alive because of it.",
    name: "Nusrat Jahan",
    role: "Donor since 2023",
    location: "Uttara, Dhaka",
    group: "B−",
    donations: 7,
  },
  {
    quote:
      "I donate every three months. The app tells me exactly which hospital needs my group and how far away it is. It takes twenty seconds to say yes.",
    name: "Tanvir Ahmed",
    role: "Donor since 2021",
    location: "Chattogram",
    group: "O+",
    donations: 14,
  },
  {
    quote:
      "I was nervous about my first donation, but the nurses walked me through everything. Now I bring two of my friends every time.",
    name: "Farhana Rahman",
    role: "Donor since 2024",
    location: "Sylhet",
    group: "A+",
    donations: 4,
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Donor stories"
          title="Real people, real second chances"
          description="Every donation on Hemoglobin is tracked back to a person who received it."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card"
            >
              <QuoteIcon className="h-8 w-8 text-brand-200" />

              <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-700">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-extrabold text-white">
                  {story.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-900">
                    {story.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {story.role} &middot; {story.location}
                  </p>
                </div>
                <div className="shrink-0 rounded-lg bg-brand-50 px-2.5 py-1.5 text-center">
                  <p className="font-display text-sm font-extrabold text-brand-700">
                    {story.group}
                  </p>
                  <p className="text-[0.6rem] font-semibold text-brand-500">
                    {story.donations} donations
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
