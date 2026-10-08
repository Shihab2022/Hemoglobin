"use client";

import { useMemo, useState } from "react";
import { Search, SearchX, SlidersHorizontal } from "lucide-react";
import { SERVICES, getServiceDepartments } from "@/lib/data/services";
import { CATEGORIES } from "@/lib/data/categories";
import { ServiceCard } from "@/components/services/ServiceCard";
import { EmptyState, SkeletonCard } from "@/components/ui/States";
import { Select } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

type SortKey = "popular" | "az" | "za";

/**
 * Client-side services explorer: search, category chips, department,
 * online filter and sorting with a short simulated loading state.
 */
export function ServicesExplorer({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("all");
  const [department, setDepartment] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [sort, setSort] = useState<SortKey>("popular");
  const [loading, setLoading] = useState(false);

  const departments = useMemo(() => getServiceDepartments(), []);

  function update<T>(setter: (v: T) => void, value: T) {
    setter(value);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 320);
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = SERVICES.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.department.toLowerCase().includes(q);
      const matchesCategory = category === "all" || s.category === category;
      const matchesDept = department === "all" || s.department === department;
      const matchesAvail =
        availability === "all" ||
        (availability === "online" && s.isOnline) ||
        (availability === "office" && s.requiresOfficeVisit);
      return matchesQuery && matchesCategory && matchesDept && matchesAvail;
    });
    return [...list].sort((a, b) => {
      if (sort === "popular") return b.popularity - a.popularity;
      if (sort === "az") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });
  }, [query, category, department, availability, sort]);

  const hasFilters =
    category !== "all" || department !== "all" || availability !== "all" || query !== "";

  function clearAll() {
    setQuery("");
    setCategory("all");
    setDepartment("all");
    setAvailability("all");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
      <aside
        aria-label="Service filters"
        className="rounded-2xl border border-line bg-white p-5 shadow-card lg:sticky lg:top-28"
      >
        <div className="flex items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <SlidersHorizontal className="h-4 w-4 text-brand-600" aria-hidden="true" />
            Filters
          </h2>
          {hasFilters ? (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs font-bold text-flag-600 hover:text-flag-700"
            >
              Clear all
            </button>
          ) : null}
        </div>

        <div className="relative mt-4">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <label htmlFor="svc-search" className="sr-only">
            Search services
          </label>
          <input
            id="svc-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services…"
            className="h-11 w-full rounded-xl border border-line bg-white pl-9 pr-3 text-sm transition-all placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="svc-dept"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500"
          >
            Department
          </label>
          <Select
            id="svc-dept"
            value={department}
            onChange={(e) => update(setDepartment, e.target.value)}
          >
            <option value="all">All departments</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-4">
          <label
            htmlFor="svc-avail"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500"
          >
            Availability
          </label>
          <Select
            id="svc-avail"
            value={availability}
            onChange={(e) => update(setAvailability, e.target.value)}
          >
            <option value="all">All services</option>
            <option value="online">Online available</option>
            <option value="office">Office visit required</option>
          </Select>
        </div>

        <div className="mt-4">
          <label
            htmlFor="svc-sort"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500"
          >
            Sort by
          </label>
          <Select
            id="svc-sort"
            value={sort}
            onChange={(e) => update(setSort, e.target.value as SortKey)}
          >
            <option value="popular">Most popular</option>
            <option value="az">Name: A – Z</option>
            <option value="za">Name: Z – A</option>
          </Select>
        </div>
      </aside>
      {/* Results */}
      <div>
        <div
          className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-2"
          role="group"
          aria-label="Filter by category"
        >
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => update(setCategory, "all")}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm",
              category === "all"
                ? "bg-brand-600 text-white shadow-sm"
                : "border border-line bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700",
            )}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={category === cat.slug}
              onClick={() => update(setCategory, cat.slug)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm",
                category === cat.slug
                  ? "bg-brand-600 text-white shadow-sm"
                  : "border border-line bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700",
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm text-slate-500" role="status" aria-live="polite">
          Showing <strong className="text-slate-800">{results.length}</strong> of{" "}
          {SERVICES.length} services
        </p>

        <div className="mt-4">
          {loading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : results.length === 0 ? (
            <EmptyState
              title="No services found."
              description="Try changing your search or filters."
              icon={<SearchX className="h-7 w-7" aria-hidden="true" />}
              action={
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex h-10 items-center rounded-xl bg-brand-600 px-4 text-sm font-bold text-white transition-colors hover:bg-brand-700"
                >
                  Reset filters
                </button>
              }
            />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default ServicesExplorer;
