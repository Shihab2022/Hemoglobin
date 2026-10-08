"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Building2, MapPin, MapPinned } from "lucide-react";
import { DIVISIONS, OFFICES, OFFICE_TYPES } from "@/lib/data/offices";
import { OfficeCard } from "@/components/offices/OfficeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Select } from "@/components/ui/Input";
import { EmptyState } from "@/components/ui/States";

/** Homepage office finder with division / district / upazila / type filters. */
export function OfficeFinder() {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [type, setType] = useState("");

  const districts = useMemo(
    () =>
      Array.from(
        new Set(
          OFFICES.filter((o) => !division || o.division === division).map((o) => o.district),
        ),
      ).sort(),
    [division],
  );
  const upazilas = useMemo(
    () =>
      Array.from(
        new Set(
          OFFICES.filter(
            (o) =>
              (!division || o.division === division) && (!district || o.district === district),
          ).map((o) => o.upazila),
        ),
      ).sort(),
    [division, district],
  );

  const results = OFFICES.filter(
    (o) =>
      (!division || o.division === division) &&
      (!district || o.district === district) &&
      (!upazila || o.upazila === upazila) &&
      (!type || o.type === type),
  ).slice(0, 6);

  const reset = () => {
    setDivision("");
    setDistrict("");
    setUpazila("");
    setType("");
  };

  return (
    <section aria-labelledby="office-finder-heading" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            id="office-finder-heading"
            eyebrow="Office finder"
            title="সরকারি অফিস খুঁজুন"
            description="Find the nearest passport office, land office, BRTA, police station, hospital or tax office."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-3 rounded-2xl border border-line bg-canvas p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-5">
            <Select
              aria-label="Division"
              value={division}
              onChange={(e) => {
                setDivision(e.target.value);
                setDistrict("");
                setUpazila("");
              }}
            >
              <option value="">All Divisions</option>
              {DIVISIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Select>
            <Select
              aria-label="District"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                setUpazila("");
              }}
            >
              <option value="">All Districts</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Select>
            <Select
              aria-label="Upazila"
              value={upazila}
              onChange={(e) => setUpazila(e.target.value)}
            >
              <option value="">All Upazilas</option>
              {upazilas.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </Select>
            <Select aria-label="Office type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All Office Types</option>
              {OFFICE_TYPES.map((t) => (
                <option key={t.type} value={t.type}>
                  {t.typeLabel}
                </option>
              ))}
            </Select>
            <button
              type="button"
              onClick={reset}
              className="h-12 rounded-xl border border-line bg-white text-sm font-semibold text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Reset filters
            </button>
          </div>
        </Reveal>

        <div className="mt-6">
          {results.length === 0 ? (
            <EmptyState
              title="No offices found."
              description="Try changing your search or filters."
              icon={<Building2 className="h-7 w-7" aria-hidden="true" />}
            />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((office, i) => (
                <Reveal key={office.id} delay={(i % 3) * 60} className="h-full">
                  <OfficeCard office={office} />
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-50 px-5 py-4 ring-1 ring-brand-100 sm:flex-row">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-800">
              <MapPinned className="h-4.5 w-4.5" aria-hidden="true" />
              {OFFICES.length} demo offices across Bangladesh in this prototype.
            </p>
            <Link
              href="/government-offices"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-brand-600 px-4 text-sm font-bold text-white transition-all hover:bg-brand-700"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Open office finder
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default OfficeFinder;
