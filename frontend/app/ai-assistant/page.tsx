import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ChatWidget } from "@/components/ai/ChatWidget";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Ask EkSheba AI about government services, documents, eligibility and procedures.",
};

export default function AiPage() {
  return (
    <>
      <PageHeader
        title="সরকারি সেবা বুঝতে সাহায্য দরকার?"
        description="Ask questions about government services, required documents, eligibility and procedures."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI Assistant" }]}
      />
      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <ChatWidget />
        <p className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span><strong className="font-semibold">Prototype demo:</strong> answers are generated from mock data. Always verify against the official source before acting.</span>
        </p>
      </div>
    </>
  );
}
