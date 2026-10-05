"use client";

import { useState } from "react";
import Link from "next/link";
import { Field, Select, SubmitButton, Textarea, TextInput } from "@/components/Form";
import { CheckCircleIcon, SearchIcon, ShieldCheckIcon } from "@/components/Icons";

const BLOOD_GROUPS = ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"];
const ROLES = [
  { value: "patient", label: "Patient / family member" },
  { value: "hospital", label: "Hospital" },
  { value: "bloodbank", label: "Blood bank / organisation" },
];
const URGENCY = [
  { value: "routine", label: "Routine (within a week)" },
  { value: "urgent", label: "Urgent (within 24 hours)" },
  { value: "emergency", label: "Emergency (immediate)" },
];

type FormState = {
  name: string;
  role: string;
  facility: string;
  phone: string;
  email: string;
  bloodGroup: string;
  units: string;
  urgency: string;
  neededBy: string;
  notes: string;
  consent: boolean;
};

const INITIAL: FormState = {
  name: "",
  role: "patient",
  facility: "",
  phone: "",
  email: "",
  bloodGroup: "",
  units: "1",
  urgency: "routine",
  neededBy: "",
  notes: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 3) errors.name = "Please enter your name.";
  if (values.role !== "patient" && values.facility.trim().length < 2) {
    errors.facility = "Please enter your hospital or organisation name.";
  }
  if (!/^[+\d][\d\s-]{6,17}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.bloodGroup) errors.bloodGroup = "Select the blood group needed.";

  const units = Number(values.units);
  if (!Number.isInteger(units) || units < 1 || units > 50) {
    errors.units = "Enter between 1 and 50 units.";
  }
  if (!values.neededBy) {
    errors.neededBy = "Tell us when the blood is needed.";
  }
  if (!values.consent) errors.consent = "Please accept the request terms.";

  return errors;
}

export function BloodRequestForm() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  }

  if (submitted) {
    const urgency = URGENCY.find((u) => u.value === values.urgency)?.label;
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircleIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-slate-900">
          Request received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          We are alerting compatible donors near you right now. Expect a call
          from a verified coordinator within 15 minutes for{" "}
          <span className="font-semibold text-brand-700">{urgency?.toLowerCase()}</span>{" "}
          requests.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Back to home
          </Link>
          <button
            type="button"
            onClick={() => {
              setValues(INITIAL);
              setSubmitted(false);
            }}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required error={errors.name}>
          <TextInput
            id="name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Rahim Uddin"
            value={values.name}
            invalid={Boolean(errors.name)}
            onChange={(e) => set("name", e.target.value)}
          />
        </Field>

        <Field label="I am a" htmlFor="role" required>
          <Select
            id="role"
            name="role"
            value={values.role}
            onChange={(e) => set("role", e.target.value)}
          >
            {ROLES.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </Select>
        </Field>

        {values.role !== "patient" ? (
          <Field
            label="Hospital / organisation"
            htmlFor="facility"
            required
            error={errors.facility}
            className="sm:col-span-2"
          >
            <TextInput
              id="facility"
              name="facility"
              autoComplete="organization"
              placeholder="e.g. Sunrise General Hospital"
              value={values.facility}
              invalid={Boolean(errors.facility)}
              onChange={(e) => set("facility", e.target.value)}
            />
          </Field>
        ) : null}

        <Field label="Phone number" htmlFor="requestPhone" required error={errors.phone}>
          <TextInput
            id="requestPhone"
            name="requestPhone"
            type="tel"
            autoComplete="tel"
            placeholder="+880 1700 000000"
            value={values.phone}
            invalid={Boolean(errors.phone)}
            onChange={(e) => set("phone", e.target.value)}
          />
        </Field>

        <Field label="Email address" htmlFor="requestEmail" required error={errors.email}>
          <TextInput
            id="requestEmail"
            name="requestEmail"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            invalid={Boolean(errors.email)}
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Blood group needed"
          htmlFor="neededGroup"
          required
          error={errors.bloodGroup}
        >
          <Select
            id="neededGroup"
            name="neededGroup"
            value={values.bloodGroup}
            invalid={Boolean(errors.bloodGroup)}
            onChange={(e) => set("bloodGroup", e.target.value)}
          >
            <option value="">Select a group</option>
            {BLOOD_GROUPS.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Units needed"
          htmlFor="units"
          required
          error={errors.units}
          hint="1 unit is roughly 450 ml."
        >
          <TextInput
            id="units"
            name="units"
            type="number"
            min={1}
            max={50}
            value={values.units}
            invalid={Boolean(errors.units)}
            onChange={(e) => set("units", e.target.value)}
          />
        </Field>

        <Field label="Urgency" htmlFor="urgency" required>
          <Select
            id="urgency"
            name="urgency"
            value={values.urgency}
            onChange={(e) => set("urgency", e.target.value)}
          >
            {URGENCY.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Needed by"
          htmlFor="neededBy"
          required
          error={errors.neededBy}
        >
          <TextInput
            id="neededBy"
            name="neededBy"
            type="date"
            value={values.neededBy}
            invalid={Boolean(errors.neededBy)}
            onChange={(e) => set("neededBy", e.target.value)}
          />
        </Field>

        <Field
          label="Anything the donor should know?"
          htmlFor="notes"
          className="sm:col-span-2"
          hint="Patient name, ward, transport needs — whatever is relevant."
        >
          <Textarea
            id="notes"
            name="notes"
            placeholder="e.g. Surgery scheduled Friday morning, patient can travel to any centre in the city."
            value={values.notes}
            onChange={(e) => set("notes", e.target.value)}
          />
        </Field>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded accent-brand-600"
          />
          <span className="text-sm leading-6 text-slate-600">
            I confirm these details are accurate and I consent to being contacted
            by Hemoglobin and by matched donors about this request.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-xs font-medium text-red-600">{errors.consent}</p>
        ) : null}
      </div>

      <SubmitButton>
        <SearchIcon className="h-5 w-5" />
        Send blood request
      </SubmitButton>

      <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
        <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
        Every request is verified by our coordination team before donors are
        alerted, to protect both donors and recipients.
      </p>
    </form>
  );
}

export default BloodRequestForm;
