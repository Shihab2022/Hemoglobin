"use client";

import { useMemo, useState } from "react";
import { Building2, List, Map, MapPin, SearchX } from "lucide-react";
import { DIVISIONS, OFFICES, OFFICE_TYPES } from "@/lib/data/offices";
import { OfficeCard } from "@/components/offices/OfficeCard";
import { EmptyState, SkeletonCard } from "@/components/ui/States";
import { Select } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

/** Offices explorer with search, cascading filters and list/map toggle. */
export function OfficesExplorer() {
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [type, setType] = useState("");
  const [view, setView] = useState<"list" | "map">("list");
  const [loading, setLoading] = useState(false);

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

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return OFFICES.filter(
      (o) =>
        (!q ||
          o.name.toLowerCase().includes(q) ||
          o.services.join(" ").toLowerCase().includes(q) ||
          o.address.toLowerCase().includes(q)) &&
        (!division || o.division === division) &&
        (!district || o.district === district) &&
        (!upazila || o.upazila === upazila) &&
        (!type || o.type === type),
    );
  }, [query, division, district, upazila, type]);

  const withLoading = (fn: () => void) => {
    fn();
    setLoading(true);
    window.setTimeout(() => setLoading(false), 300);
  };

  const reset = () => {
    setQuery("");
    setDivision("");
    setDistrict("");
    setUpazila("");
    setType("");
  };

  return (
    <div>
      <div className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="relative">
            <label htmlFor="off-search" className="sr-only">
              Search offices
            </label>
            <SearchX
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="off-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search office or service…"
              className="h-12 w-full rounded-xl border border-line bg-white pl-9 pr-3 text-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
            />
          </div>
          <Select
            aria-label="Division"
            value={division}
            onChange={(e) =>
              withLoading(() => {
                setDivision(e.target.value);
                setDistrict("");
                setUpazila("");
              })
            }
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
            onChange={(e) =>
              withLoading(() => {
                setDistrict(e.target.value);
                setUpazila("");
              })
            }
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
            onChange={(e) => withLoading(() => setUpazila(e.target.value))}
          >
            <option value="">All Upazilas</option>
            {upazilas.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </Select>
          <Select
            aria-label="Office type"
            value={type}
            onChange={(e) => withLoading(() => setType(e.target.value))}
          >
            <option value="">All Office Types</option>
            {OFFICE_TYPES.map((t) => (
              <option key={t.type} value={t.type}>
                {t.typeLabel}
              </option>
            ))}
          </Select>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <p className="text-sm text-slate-500" role="status" aria-live="polite">
            <strong className="text-slate-800">{results.length}</strong> offices found
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={reset}
              className="h-9 rounded-lg border border-line px-3 text-xs font-bold text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Reset
            </button>
            <div
              className="flex rounded-lg border border-line p-0.5"
              role="group"
              aria-label="View mode"
            >
              <button
                type="button"
                aria-pressed={view === "list"}
                onClick={() => setView("list")}
                className={cn(
                  "inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-bold transition-colors",
                  view === "list"
                    ? "bg-brand-600 text-white"
                    : "text-slate-500 hover:text-slate-800",
                )}
              >
                <List className="h-3.5 w-3.5" aria-hidden="true" />
                List
              </button>
              <button
                type="button"
                aria-pressed={view === "map"}
                onClick={() => setView("map")}
                className={cn(
                  "inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-bold transition-colors",
                  view === "map"
                    ? "bg-brand-600 text-white"
                    : "text-slate-500 hover:text-slate-800",
                )}
              >
                <Map className="h-3.5 w-3.5" aria-hidden="true" />
                Map
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Results */}
      <div className="mt-6">
        {view === "map" ? (
          <MapPlaceholder count={results.length} />
        ) : loading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : results.length === 0 ? (
          <EmptyState
            title="No offices found."
            description="Try changing your search or filters."
            icon={<Building2 className="h-7 w-7" aria-hidden="true" />}
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Placeholder map panel — no map SDK in the initial UI version. */
function MapPlaceholder({ count }: { count: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-brand-50/60 p-6 sm:p-10">
      <div className="pattern-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-md text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-card">
          <MapPin className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-extrabold text-slate-900">Map view (preview)</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          A live map integration is planned for a later release. For now, {count} matching
          offices are available in the list view.
        </p>
        <p className="mt-4 rounded-xl border border-dashed border-brand-200 bg-white px-4 py-3 text-xs text-slate-500">
          Demo placeholder — no map data is loaded in this prototype.
        </p>
      </div>
    </div>
  );
}

export default OfficesExplorer;
