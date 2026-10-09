"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function RegisterForm() {
  return (
    <form className="mt-7 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="reg-name" className="mb-1.5 block text-sm font-bold text-slate-700">Name</label>
        <input id="reg-name" required autoComplete="name" placeholder="Your full name"
          className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
      </div>
      <div className="mt-4">
        <label htmlFor="reg-email" className="mb-1.5 block text-sm font-bold text-slate-700">Email</label>
        <input id="reg-email" type="email" required autoComplete="email" placeholder="you@example.com"
          className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-pass" className="mb-1.5 block text-sm font-bold text-slate-700">Password</label>
          <input id="reg-pass" type="password" required autoComplete="new-password" placeholder="••••••••"
            className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="reg-pass2" className="mb-1.5 block text-sm font-bold text-slate-700">Confirm Password</label>
          <input id="reg-pass2" type="password" required autoComplete="new-password" placeholder="••••••••"
            className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
        </div>
      </div>
      <Button type="submit" className="mt-5 w-full" size="lg">Create Account</Button>
      <p className="mt-5 text-center text-sm text-slate-500">
        Already have an account? <Link href="/login" className="font-bold text-brand-700 hover:text-brand-800">Log in</Link>
      </p>
    </form>
  );
}
export default RegisterForm;
