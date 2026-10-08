"use client";
import { useRef, useState } from "react";
import { Bot, SendHorizonal, User } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "ai"; text: string };

const STARTERS = ["How can I renew my passport?", "What documents do I need for NID correction?", "How much is the driving licence fee?"];

function demoAnswer(q: string): string {
  const t = q.toLowerCase();
  const hit = SERVICES.find((s) => t.includes(s.name.toLowerCase().split(" ")[0]) || s.name.toLowerCase().split(" ").some((w) => w.length > 3 && t.includes(w)));
  if (hit) {
    const docs = (hit.requiredDocuments ?? []).slice(0, 3).join("; ");
    return `You can apply for ${hit.name} through ${hit.authority ?? hit.department}. ${docs ? `Key documents: ${docs}. ` : ""}Fee: ${hit.fee ?? "see official source"}. Processing: ${hit.processingTime ?? "varies"}. Open the service page for full steps — and always verify on the official portal before applying.`;
  }
  return "Thanks for asking! In the full version I will answer from verified service guides. For now, try asking about passports, NID, driving licences or land mutation — and always verify answers against the official source.";
}

export function ChatWidget() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "user", text: "How can I renew my passport?" },
    { role: "ai", text: "You can renew your passport through the e-Passport service. You will need your NID, previous passport, payment receipt and a photograph. Open the e-Passport service page for the full steps — and verify everything on the official portal." },
  ]);
  const [input, setInput] = useState("");
  const bottom = useRef<HTMLDivElement>(null);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "ai", text: demoAnswer(q) }]);
    setInput("");
    window.setTimeout(() => bottom.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="flex items-center gap-3 border-b border-line bg-brand-800 px-5 py-4 text-white">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15"><Bot className="h-5 w-5" aria-hidden="true" /></span>
        <div>
          <p className="text-sm font-extrabold">EkSheba AI</p>
          <p className="text-xs text-brand-200">Demo assistant · verify answers officially</p>
        </div>
      </div>
      <div className="max-h-[380px] space-y-3 overflow-y-auto bg-canvas px-4 py-5 sm:px-5" role="log" aria-label="Chat messages" aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={cn("flex gap-2.5", m.role === "user" ? "justify-end" : "justify-start")}>
            {m.role === "ai" ? <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"><Bot className="h-4 w-4" aria-hidden="true" /></span> : null}
            <p className={cn("max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-6",
              m.role === "user" ? "rounded-br-md bg-brand-600 text-white" : "rounded-bl-md border border-line bg-white text-slate-700")}>{m.text}</p>
            {m.role === "user" ? <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600"><User className="h-4 w-4" aria-hidden="true" /></span> : null}
          </div>
        ))}
        <div ref={bottom} />
      </div>
      <div className="border-t border-line p-3 sm:p-4">
        <div className="mb-2.5 flex flex-wrap gap-2">
          {STARTERS.map((s) => (
            <button key={s} type="button" onClick={() => send(s)} className="rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700">{s}</button>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
          <label htmlFor="ai-input" className="sr-only">Ask about a government service</label>
          <input id="ai-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about documents, fees, steps..."
            className="h-11 flex-1 rounded-xl border border-line bg-canvas px-4 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none" />
          <Button type="submit" size="icon" aria-label="Send message"><SendHorizonal className="h-4.5 w-4.5" aria-hidden="true" /></Button>
        </form>
      </div>
    </div>
  );
}
export default ChatWidget;
