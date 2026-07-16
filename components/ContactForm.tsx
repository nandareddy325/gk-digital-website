"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const services = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media Marketing",
  "Website Design",
  "Branding",
  "Other",
];

const MESSAGE_LIMIT = 500;

type FormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  website: string; // honeypot — humans never fill this
};

const initialState: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: services[0],
  budget: "",
  message: "",
  website: "",
};

function isValidPhone(phone: string) {
  return /^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10));
}

function isValidEmail(email: string) {
  if (!email) return true; // optional
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) e.name = "Name is required.";
    if (!values.phone.trim()) {
      e.phone = "Phone is required.";
    } else if (!isValidPhone(values.phone)) {
      e.phone = "Enter a valid 10-digit mobile number.";
    }
    if (!isValidEmail(values.email)) e.email = "Enter a valid email address.";
    return e;
  }, [values]);

  const filledCount = [
    values.name,
    values.business,
    values.email,
    values.phone,
    values.budget,
    values.message,
  ].filter(Boolean).length;
  const progress = Math.round((filledCount / 6) * 100);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function markTouched(key: string) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });

    // Honeypot check — if filled, silently treat as success (bot caught)
    if (values.website) {
      setStatus("success");
      return;
    }

    if (Object.keys(errors).length > 0) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      setStatus("success");
      setValues(initialState);
      setTouched({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-ink-panel/40 p-10">
        <CheckCircle2 className="h-8 w-8 text-signal" strokeWidth={1.5} />
        <h3 className="font-display text-xl font-semibold text-paper">
          Thanks — we&apos;ve got your details.
        </h3>
        <p className="text-sm text-paper/60">
          Our team will get back to you within 24 hours. In the meantime,
          feel free to reach out on WhatsApp for a faster response.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 font-mono text-[12px] uppercase tracking-wider text-signal hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border bg-ink px-4 py-2.5 text-sm text-paper outline-none transition-colors ${
      touched[field] && errors[field as keyof typeof errors]
        ? "border-red-400/60 focus:border-red-400"
        : "border-line focus:border-signal/60"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-line bg-ink-panel/40 p-8"
    >
      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-paper/40">
          <span>Form progress</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-ink">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, var(--signal), var(--teal))",
            }}
          />
        </div>
      </div>

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={(e) => update("website", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Full name *
          </label>
          <input
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => markTouched("name")}
            className={inputClass("name")}
          />
          {touched.name && errors.name && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="h-3 w-3" strokeWidth={2} />
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Business name
          </label>
          <input
            value={values.business}
            onChange={(e) => update("business", e.target.value)}
            className={inputClass("business")}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Email <span className="normal-case text-paper/30">(optional)</span>
          </label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => markTouched("email")}
            className={inputClass("email")}
          />
          {touched.email && errors.email && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="h-3 w-3" strokeWidth={2} />
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Phone *
          </label>
          <input
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => markTouched("phone")}
            placeholder="98765 43210"
            className={inputClass("phone")}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="h-3 w-3" strokeWidth={2} />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Service interested in
          </label>
          <select
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass("service")}
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Monthly budget (optional)
          </label>
          <input
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
            placeholder="e.g. ₹25,000 - ₹50,000"
            className={inputClass("budget")}
          />
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Message / project details
          </label>
          <span className="font-mono text-[10px] text-paper/30">
            {values.message.length}/{MESSAGE_LIMIT}
          </span>
        </div>
        <textarea
          value={values.message}
          onChange={(e) =>
            update("message", e.target.value.slice(0, MESSAGE_LIMIT))
          }
          rows={4}
          className={`resize-none ${inputClass("message")}`}
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-1.5 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" strokeWidth={2} />
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white transition-transform hover:scale-[1.01] disabled:opacity-60"
        style={{
          background: "linear-gradient(90deg, var(--signal), var(--teal))",
        }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Sending...
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </>
        )}
      </button>
    </form>
  );
}