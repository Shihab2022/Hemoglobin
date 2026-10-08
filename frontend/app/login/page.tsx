import type { Metadata } from "next";
import { Logo } from "@/components/ui/Logo";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Login", description: "Log in to your NagorikSheba account." };

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col px-4 py-12 sm:py-16">
      <div className="flex justify-center"><Logo /></div>
      <h1 className="mt-6 text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">Welcome back</h1>
      <p className="mt-2 text-center text-sm text-slate-500">Log in to save services and track applications.</p>
      <LoginForm />
      <p className="mt-4 text-center text-xs text-slate-400">Prototype only — authentication is not connected yet.</p>
    </div>
  );
}
