"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  return (
    <form className="mt-7 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="login-email" className="mb-1.5 block text-sm font-bold text-slate-700">Email</label>
        <input id="login-email" type="email" required autoComplete="email" placeholder="you@example.com"
          className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
      </div>
      <div className="mt-4">
        <label htmlFor="login-pass" className="mb-1.5 block text-sm font-bold text-slate-700">Password</label>
        <input id="login-pass" type="password" required autoComplete="current-password" placeholder="••••••••"
          className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
      </div>
      <Button type="submit" className="mt-5 w-full" size="lg">Login</Button>
      <p className="mt-3 text-center"><a href="/login" className="text-sm font-bold text-brand-700 hover:text-brand-800">Forgot password?</a></p>
      <div className="my-5 flex items-center gap-3 text-xs font-bold text-slate-400" aria-hidden="true">
        <span className="h-px flex-1 bg-line" /> OR <span className="h-px flex-1 bg-line" />
      </div>
      <Button type="button" variant="outline" className="w-full" size="lg">Continue with Google</Button>
      <p className="mt-5 text-center text-sm text-slate-500">
        Don&apos;t have an account? <Link href="/register" className="font-bold text-brand-700 hover:text-brand-800">Create account</Link>
      </p>
    </form>
  );
}
export default LoginForm;
