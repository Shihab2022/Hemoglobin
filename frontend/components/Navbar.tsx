"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/#" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Blood types", href: "/#blood-types" },
  { label: "Why donate", href: "/#why-donate" },
  { label: "Donor stories", href: "/#stories" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel when the viewport grows back to desktop.
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/85 backdrop-blur-md transition-shadow",
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-18"
      >
        <Link href="/" onClick={() => setOpen(false)} className="rounded-md">
          <Logo />
          <span className="sr-only">Hemoglobin home</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/request-blood"
            className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            Request blood
          </Link>
          <Link
            href="/donate"
            className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-700"
          >
            Donate blood
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-slate-200 bg-white lg:hidden"
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-4">
            <Link
              href="/request-blood"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Request blood
            </Link>
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Donate blood
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
