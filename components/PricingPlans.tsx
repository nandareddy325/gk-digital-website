"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Rocket, TrendingUp, Crown } from "lucide-react";
import Reveal from "@/components/Reveal";

const plans = [
  {
    name: "Starter Growth",
    icon: Rocket,
    monthly: 15000,
    yearly: 150000, // ~2 months free
    desc: "Best for small businesses and startups building their digital foundation",
    features: [
      "Website audit & basic SEO setup",
      "Google Business Profile optimization",
      "Social media (2 platforms, 12 posts/mo)",
      "Monthly performance report",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth Accelerator",
    icon: TrendingUp,
    monthly: 35000,
    yearly: 350000,
    desc: "Best for growing businesses ready to scale visibility and leads",
    features: [
      "Everything in Starter, plus:",
      "Full on-page & technical SEO",
      "Google or Meta Ads (1 platform)",
      "Social media (3 platforms, 20 posts/mo)",
      "Landing page design",
      "Bi-weekly strategy calls",
    ],
    highlight: true,
  },
  {
    name: "Full-Scale Domination",
    icon: Crown,
    monthly: 65000,
    yearly: 650000,
    desc: "Best for established businesses wanting an all-in-one growth partner",
    features: [
      "Everything in Growth, plus:",
      "Advanced SEO & link building",
      "Google + Meta Ads (multi-platform)",
      "Website design / redevelopment",
      "Content marketing (blogs, graphics)",
      "Email & WhatsApp automation",
      "Weekly calls & priority support",
    ],
    highlight: false,
  },
];

const compareFeatures = [
  { label: "Monthly performance reports", tiers: [true, true, true] },
  { label: "Google Business Profile optimization", tiers: [true, true, true] },
  { label: "Technical & on-page SEO", tiers: [false, true, true] },
  { label: "Paid ads management", tiers: [false, true, true] },
  { label: "Landing page design", tiers: [false, true, true] },
  { label: "Website design / redevelopment", tiers: [false, false, true] },
  { label: "Content marketing (blogs, video scripts)", tiers: [false, false, true] },
  { label: "WhatsApp & email automation", tiers: [false, false, true] },
  { label: "Priority support", tiers: [false, false, true] },
];

function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function PricingPlans() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* Toggle */}
      <Reveal>
        <div className="flex items-center justify-center gap-4">
          <span
            className={`font-mono text-[12px] uppercase tracking-wider ${
              !yearly ? "text-paper" : "text-paper/40"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setYearly((v) => !v)}
            aria-pressed={yearly}
            className="relative h-7 w-14 rounded-full border border-line transition-colors"
            style={{
              background: yearly
                ? "linear-gradient(90deg, var(--signal), var(--teal))"
                : "var(--ink-panel)",
            }}
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                yearly ? "translate-x-7" : "translate-x-0.5"
              }`}
            />
          </button>
          <span
            className={`font-mono text-[12px] uppercase tracking-wider ${
              yearly ? "text-paper" : "text-paper/40"
            }`}
          >
            Yearly
          </span>
          <span className="rounded-full bg-teal/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-teal">
            Save ~17%
          </span>
        </div>
      </Reveal>

      {/* Plan cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <Reveal key={plan.name} delay={i * 90}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-transform hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-signal/60 bg-ink-panel"
                    : "border-line bg-ink-panel/30"
                }`}
              >
                {plan.highlight && (
                  <span
                    className="mb-4 inline-block w-fit rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--signal), var(--teal))",
                    }}
                  >
                    Most popular
                  </span>
                )}

                <plan.icon
                  className="h-7 w-7 text-signal"
                  strokeWidth={1.5}
                />

                <h3 className="mt-4 font-display text-xl font-semibold text-paper">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-paper/50">{plan.desc}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-semibold text-paper">
                    {formatINR(price)}
                  </span>
                  <span className="text-sm text-paper/40">
                    /{yearly ? "year" : "month"}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-paper/70"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                        strokeWidth={2}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider transition-transform hover:scale-[1.02] ${
                    plan.highlight
                      ? "text-white"
                      : "border border-line text-paper/80"
                  }`}
                  style={
                    plan.highlight
                      ? {
                          background:
                            "linear-gradient(90deg, var(--signal), var(--teal))",
                        }
                      : undefined
                  }
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="mt-8 text-center text-xs text-paper/40">
          All plans are customizable. Ad spend is separate from management
          fees. Contact us for a tailored quote based on your goals and
          industry.
        </p>
      </Reveal>

      {/* Comparison table */}
      <Reveal delay={100}>
        <div className="mt-20 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-ink-panel/50">
                <th className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-wider text-paper/50">
                  Feature
                </th>
                {plans.map((p) => (
                  <th
                    key={p.name}
                    className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-wider text-paper/50"
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareFeatures.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-ink" : "bg-ink-panel/20"}
                >
                  <td className="px-6 py-4 text-paper/70">{row.label}</td>
                  {row.tiers.map((included, j) => (
                    <td key={j} className="px-6 py-4">
                      {included ? (
                        <Check
                          className="h-4 w-4 text-signal"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <span className="text-paper/20">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </>
  );
}
