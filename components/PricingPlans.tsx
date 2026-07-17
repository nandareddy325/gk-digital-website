"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Sparkles, ArrowRight, X } from "lucide-react";
import Reveal from "@/components/Reveal";

/* =========================================================================
   RAZORPAY INTEGRATION — READY TO WIRE UP
   =========================================================================
   Each plan below carries a `razorpayPlanId` object with placeholder plan
   IDs. When you're ready to go live with Razorpay Subscriptions:

   1. Create these plans in the Razorpay Dashboard (Subscriptions → Plans),
      one per billing cycle, and replace the placeholder strings below with
      the real plan_XXXXXXXXXXXXXX IDs Razorpay gives you.

   2. Build a backend route (e.g. app/api/create-subscription/route.ts) that
      calls Razorpay's Subscriptions API:
         POST https://api.razorpay.com/v1/subscriptions
         { plan_id, customer_notify: 1, total_count: 12 }
      using your RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET (server-side only,
      never expose the secret in this client component).

   3. Load the checkout script once, e.g. in app/layout.tsx:
         <Script src="https://checkout.razorpay.com/v1/checkout.js" />

   4. Replace the body of `handleSubscribe` below with:
         const res = await fetch("/api/create-subscription", {
           method: "POST",
           body: JSON.stringify({ planId: plan.razorpayPlanId[billing] }),
         });
         const { subscription_id } = await res.json();
         const rzp = new (window as any).Razorpay({
           key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
           subscription_id,
           name: "GK Digital Solutions",
           theme: { color: "#1B54C7" },
           handler: (response: unknown) => { // confirm payment, then redirect to /thank-you
             console.log(response);
           },
         });
         rzp.open();

   Until then, the button below routes to /contact with the chosen plan
   pre-filled so leads are still captured — nothing here is a dead end.
   ========================================================================= */

type Billing = "monthly" | "annual";

const plans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For businesses just getting serious about digital marketing",
    monthlyPrice: 15000,
    annualPrice: 12750, // 15% off, billed annually
    razorpayPlanId: { monthly: "plan_starter_monthly_placeholder", annual: "plan_starter_annual_placeholder" },
    popular: false,
    features: [
      { label: "1 paid channel (Meta or Google)", included: true },
      { label: "Local SEO & Google Business Profile", included: true },
      { label: "Monthly content calendar (15 posts + 8 Reels)", included: true },
      { label: "WhatsApp lead notifications", included: true },
      { label: "Weekly reporting call", included: true },
      { label: "CRM pipeline integration", included: false },
      { label: "Dedicated strategist", included: false },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Our most-picked plan for brands ready to scale leads",
    monthlyPrice: 35000,
    annualPrice: 29750,
    razorpayPlanId: { monthly: "plan_growth_monthly_placeholder", annual: "plan_growth_annual_placeholder" },
    popular: true,
    features: [
      { label: "Meta + Google Ads, fully managed", included: true },
      { label: "Local SEO & Google Business Profile", included: true },
      { label: "Monthly content calendar (16 posts + 16 reels)", included: true },
      { label: "WhatsApp & CRM lead automation", included: true },
      { label: "Weekly reporting call", included: true },
      { label: "100% CRM-tracked pipeline", included: true },
      { label: "Dedicated strategist", included: false },
    ],
  },
  {
    id: "full-scale",
    name: "Full-Scale",
    tagline: "For businesses ready to run every channel at once",
    monthlyPrice: 65000,
    annualPrice: 55250,
    razorpayPlanId: { monthly: "plan_fullscale_monthly_placeholder", annual: "plan_fullscale_annual_placeholder" },
    popular: false,
    features: [
      { label: "Meta, Google & WhatsApp Ads, fully managed", included: true },
      { label: "Local SEO + on-page SEO", included: true },
      { label: "Monthly content calendar (30+ posts, reels, shoots)", included: true },
      { label: "WhatsApp & CRM lead automation", included: true },
      { label: "Weekly reporting call + monthly strategy review", included: true },
      { label: "100% CRM-tracked pipeline", included: true },
      { label: "Dedicated strategist", included: true },
    ],
  },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const router = useRouter();

  const handleSubscribe = (plan: (typeof plans)[number]) => {
    // See the integration notes above this component for wiring Razorpay
    // Subscriptions here. For now, route to contact with plan pre-filled.
    router.push(`/contact?plan=${plan.id}&billing=${billing}`);
  };

  return (
    <div>
      {/* Billing toggle */}
      <Reveal>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-line bg-ink-panel/40 p-1">
            {(["monthly", "annual"] as Billing[]).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors sm:px-5 sm:text-xs ${
                  billing === b ? "text-white" : "text-paper/60 hover:text-paper"
                }`}
                style={
                  billing === b
                    ? { background: "linear-gradient(90deg, var(--signal), var(--teal))" }
                    : undefined
                }
              >
                {b === "monthly" ? "Monthly" : "Annual"}
                {b === "annual" && (
                  <span className="ml-1.5 rounded-full bg-teal/20 px-1.5 py-0.5 text-[9px] text-teal">
                    Save 15%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Plan cards */}
      <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-3 md:gap-6">
        {plans.map((plan, i) => {
          const price = billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;
          return (
            <Reveal key={plan.id} delay={i * 90}>
              <div
                className={`group relative flex h-full min-w-0 flex-col rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  plan.popular
                    ? "highlight-card border-transparent bg-ink-panel/60 shadow-2xl"
                    : "border-line bg-ink-panel/30 hover:border-signal/30"
                }`}
              >
                {plan.popular && (
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, var(--signal), var(--teal))",
                      padding: "1.5px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    aria-hidden="true"
                  />
                )}

                {plan.popular && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-teal">
                    <Sparkles className="h-3 w-3" strokeWidth={2} />
                    Most picked
                  </span>
                )}

                <h3 className="font-display text-lg font-semibold text-paper sm:text-xl">{plan.name}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-paper/60 sm:text-sm">{plan.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1.5 sm:mt-6">
                  <span
                    className="bg-clip-text font-display text-3xl font-semibold text-transparent sm:text-4xl"
                    style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-paper/50">/mo</span>
                </div>
                {billing === "annual" && (
                  <p className="mt-1 text-[11px] text-paper/40">Billed annually · ad spend billed separately</p>
                )}
                {billing === "monthly" && (
                  <p className="mt-1 text-[11px] text-paper/40">Ad spend billed separately</p>
                )}

                <ul className="mt-6 flex-1 space-y-2.5 sm:mt-7 sm:space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5 text-[12.5px] sm:text-[13px]">
                      {f.included ? (
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
                      ) : (
                        <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-paper/25" strokeWidth={2} />
                      )}
                      <span className={f.included ? "text-paper/80" : "text-paper/35"}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`group/btn mt-7 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full font-mono text-[12px] uppercase tracking-wider transition-transform hover:scale-[1.02] sm:mt-8 sm:text-[13px] ${
                    plan.popular ? "text-white" : "border border-line text-paper/80 hover:border-signal/50 hover:text-signal"
                  }`}
                  style={
                    plan.popular
                      ? { background: "linear-gradient(90deg, var(--signal), var(--teal))" }
                      : undefined
                  }
                >
                  Get started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2} />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 text-center text-[11px] text-paper/35 sm:mt-8 sm:text-xs">
        Payments are currently arranged manually after a quick call — online
        checkout is coming soon.
      </p>

      <style>{`
        @keyframes highlight-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(122,193,66,0.0), 0 20px 60px -20px rgba(27,84,199,0.35); }
          50% { box-shadow: 0 0 0 6px rgba(122,193,66,0.06), 0 20px 60px -20px rgba(122,193,66,0.35); }
        }
        .highlight-card { animation: highlight-pulse 3.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .highlight-card { animation: none !important; }
        }
      `}</style>
    </div>
  );
}