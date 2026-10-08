"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SuccessNote } from "@/components/ui/States";

const TOPICS = ["Report incorrect information", "Suggest a service", "Report broken official link", "General feedback"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(TOPICS[0]);

  return sent ? (
    <SuccessNote>Thank you — your message has been noted. This is a UI prototype, so nothing was sent to a server yet.</SuccessNote>
  ) : (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7"
      aria-label="Contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-bold text-slate-700">Name</label>
          <input id="cf-name" required autoComplete="name" placeholder="Your name"
            className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-bold text-slate-700">Email</label>
          <input id="cf-email" type="email" required autoComplete="email" placeholder="you@example.com"
            className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-bold text-slate-700">Subject</label>
        <select id="cf-subject" value={topic} onChange={(e) => setTopic(e.target.value)}
          className="h-12 w-full rounded-xl border border-line bg-canvas px-4 text-sm font-medium text-slate-700 focus:border-brand-500 focus:outline-none">
          {TOPICS.map((t) => (<option key={t}>{t}</option>))}
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-msg" className="mb-1.5 block text-sm font-bold text-slate-700">Message</label>
        <textarea id="cf-msg" required rows={5} placeholder="Tell us which page the issue is on and what should change..."
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm leading-6 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
      </div>
      <Button type="submit" className="mt-5 w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" /> Send message
      </Button>
    </form>
  );
}

export default ContactForm;
