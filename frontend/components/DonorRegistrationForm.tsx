"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Field,
  Select,
  SubmitButton,
  TextInput,
} from "@/components/Form";
import { CheckCircleIcon, HeartPulseIcon, ShieldCheckIcon } from "@/components/Icons";

const BLOOD_GROUPS = ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"];
const AVAILABILITY = ["Weekday mornings", "Weekday evenings", "Weekends", "Flexible"];
const CHANNELS = [
  { value: "sms", label: "SMS" },
  { value: "push", label: "Push notification" },
  { value: "email", label: "Email" },
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  bloodGroup: string;
  city: string;
  channel: string;
  availability: string[];
  consent: boolean;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  bloodGroup: "",
  city: "",
  channel: "sms",
  availability: [],
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (values.fullName.trim().length < 3) {
    errors.fullName = "Please enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!/^[+\d][\d\s-]{6,17}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required.";
  } else {
    const age = Date.now() - new Date(values.dateOfBirth).getTime();
    const years = age / (365.25 * 24 * 60 * 60 * 1000);
    if (Number.isNaN(years) || years < 18) {
      errors.dateOfBirth = "Donors must be at least 18 years old.";
    } else if (years > 65) {
      errors.dateOfBirth = "Donors must be under 65 years old.";
    }
  }
  if (!values.bloodGroup) {
    errors.bloodGroup = "Select your blood group.";
  }
  if (values.city.trim().length < 2) {
    errors.city = "Tell us your city or area.";
  }
  if (values.availability.length === 0) {
    errors.availability = "Pick at least one time that suits you.";
  }
  if (!values.consent) {
    errors.consent = "Please accept the donor terms to continue.";
  }

  return errors;
}

export function DonorRegistrationForm() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function toggleAvailability(option: string) {
    setValues((prev) => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter((a) => a !== option)
        : [...prev.availability, option],
    }));
    setErrors((prev) => ({ ...prev, availability: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircleIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-slate-900">
          You&rsquo;re registered, {values.fullName.split(" ")[0]}!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          We have your details for{" "}
          <span className="font-semibold text-brand-700">{values.bloodGroup}</span>{" "}
          donors in {values.city}. You will get a {CHANNELS.find((c) => c.value === values.channel)?.label.toLowerCase()}{" "}
          the moment a matching request opens nearby.
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
            Register another person
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          htmlFor="fullName"
          required
          error={errors.fullName}
          className="sm:col-span-2"
        >
          <TextInput
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="e.g. Nusrat Jahan"
            value={values.fullName}
            invalid={Boolean(errors.fullName)}
            onChange={(e) => set("fullName", e.target.value)}
          />
        </Field>

        <Field label="Email address" htmlFor="email" required error={errors.email}>
          <TextInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            invalid={Boolean(errors.email)}
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>

        <Field label="Phone number" htmlFor="phone" required error={errors.phone}>
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+880 1700 000000"
            value={values.phone}
            invalid={Boolean(errors.phone)}
            onChange={(e) => set("phone", e.target.value)}
          />
        </Field>

        <Field
          label="Date of birth"
          htmlFor="dateOfBirth"
          required
          error={errors.dateOfBirth}
          hint="Donors must be between 18 and 65."
        >
          <TextInput
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={values.dateOfBirth}
            invalid={Boolean(errors.dateOfBirth)}
            onChange={(e) => set("dateOfBirth", e.target.value)}
          />
        </Field>

        <Field
          label="Blood group"
          htmlFor="bloodGroup"
          required
          error={errors.bloodGroup}
        >
          <Select
            id="bloodGroup"
            name="bloodGroup"
            value={values.bloodGroup}
            invalid={Boolean(errors.bloodGroup)}
            onChange={(e) => set("bloodGroup", e.target.value)}
          >
            <option value="">Select your group</option>
            {BLOOD_GROUPS.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="City or area"
          htmlFor="city"
          required
          error={errors.city}
          className="sm:col-span-2"
          hint="We use this to match you with the closest donation centre."
        >
          <TextInput
            id="city"
            name="city"
            autoComplete="address-level2"
            placeholder="e.g. Banani, Dhaka"
            value={values.city}
            invalid={Boolean(errors.city)}
            onChange={(e) => set("city", e.target.value)}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-slate-800">
          When are you usually available?
          <span className="ml-0.5 text-brand-600" aria-hidden="true">
            *
          </span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {AVAILABILITY.map((option) => {
            const active = values.availability.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleAvailability(option)}
                aria-pressed={active}
                className={
                  active
                    ? "rounded-full border border-brand-600 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
                    : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-400"
                }
              >
                {option}
              </button>
            );
          })}
        </div>
        {errors.availability ? (
          <p className="mt-2 text-xs font-medium text-red-600">
            {errors.availability}
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-slate-800">
          How should we alert you?
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {CHANNELS.map((option) => (
            <label
              key={option.value}
              className={
                values.channel === option.value
                  ? "flex cursor-pointer items-center gap-3 rounded-xl border border-brand-600 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700"
                  : "flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:border-slate-400"
              }
            >
              <input
                type="radio"
                name="channel"
                value={option.value}
                checked={values.channel === option.value}
                onChange={() => set("channel", option.value)}
                className="h-4 w-4 accent-brand-600"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded accent-brand-600"
          />
          <span className="text-sm leading-6 text-slate-600">
            I confirm the details above are accurate and I agree to the donor
            terms, health-screening process and privacy policy.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-xs font-medium text-red-600">{errors.consent}</p>
        ) : null}
      </div>

      <SubmitButton>
        <HeartPulseIcon className="h-5 w-5" />
        Complete registration
      </SubmitButton>

      <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
        <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
        Your details are encrypted and only shared with verified blood banks and
        hospitals you choose to donate to.
      </p>
    </form>
  );
}

export default DonorRegistrationForm;
