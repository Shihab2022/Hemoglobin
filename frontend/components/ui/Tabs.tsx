"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TabItem = {
  value: string;
  label: ReactNode;
  /** Optional count shown next to the label. */
  count?: number;
};

/**
 * Accessible tab strip (roving highlight, keyboard arrow navigation).
 * Controlled-free: manages its own state and calls onChange.
 */
export function Tabs({
  tabs,
  defaultValue,
  onChange,
  className,
  size = "md",
}: {
  tabs: TabItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  size?: "sm" | "md";
}) {
  const id = useId();
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value ?? "");

  function select(value: string) {
    setActive(value);
    onChange?.(value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const index = tabs.findIndex((t) => t.value === active);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = tabs[(index + 1) % tabs.length];
      select(next.value);
      document.getElementById(`${id}-tab-${next.value}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = tabs[(index - 1 + tabs.length) % tabs.length];
      select(prev.value);
      document.getElementById(`${id}-tab-${prev.value}`)?.focus();
    }
  }

  return (
    <div
      role="tablist"
      onKeyDown={onKeyDown}
      className={cn(
        "scrollbar-none flex items-center gap-1 overflow-x-auto rounded-xl border border-line bg-white p-1",
        className,
      )}
    >
      {tabs.map((tab) => {
        const selected = tab.value === active;
        return (
          <button
            key={tab.value}
            id={`${id}-tab-${tab.value}`}
            role="tab"
            type="button"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => select(tab.value)}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-lg font-semibold whitespace-nowrap transition-all duration-200",
              size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
              selected
                ? "bg-brand-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
            )}
          >
            {tab.label}
            {typeof tab.count === "number" ? (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[11px] font-bold",
                  selected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500",
                )}
              >
                {tab.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
