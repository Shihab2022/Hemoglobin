import { Check, FileText } from "lucide-react";

/** Checklist of required documents (visual checkboxes, non-interactive). */
export function DocumentList({ documents }: { documents: string[] }) {
  if (documents.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line bg-canvas px-4 py-4 text-sm text-slate-500">
        No specific documents listed for this service — contact the responsible office to
        confirm requirements.
      </p>
    );
  }

  return (
    <ul className="space-y-2.5">
      {documents.map((doc) => (
        <li
          key={doc}
          className="flex items-start gap-3 rounded-xl border border-line bg-canvas px-4 py-3 transition-colors hover:border-brand-200 hover:bg-brand-50/50"
        >
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-brand-500 bg-brand-600 text-white">
            <Check className="h-3 w-3" strokeWidth={4} aria-hidden="true" />
          </span>
          <span className="flex items-start gap-2 text-sm font-medium leading-6 text-slate-700">
            <FileText className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
            {doc}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default DocumentList;
