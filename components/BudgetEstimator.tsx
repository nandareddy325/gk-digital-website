"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

// A simple, clearly-labeled indicative estimator — NOT a quote. The
// multiplier below is a rough illustrative midpoint; replace ROUGH_CPL_MIN/
// MAX with real historical cost-per-lead figures once available, since a
// visitor could reasonably act on these numbers.
const ROUGH_CPL_MIN = 150; // ₹ per lead, optimistic case
const ROUGH_CPL_MAX = 350; // ₹ per lead, conservative case

export default function BudgetEstimator() {
  const [budget, setBudget] = useState(40000);

  const { minLeads, maxLeads } = useMemo(() => {
    return {
      minLeads: Math.round(budget / ROUGH_CPL_MAX),
      maxLeads: Math.round(budget / ROUGH_CPL_MIN),
    };
  }, [budget]);

  return (
    <div className="rounded-2xl border border-line bg-ink-panel/40 p-6 backdrop-blur-sm sm:p-8">
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
        >
          <Calculator className="h-4 w-4 text-white" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-paper sm:text-lg">Estimate your monthly leads</h3>
          <p className="text-[11px] text-paper/45 sm:text-xs">A rough, indicative range — not a quote</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="budget-slider" className="text-[12px] text-paper/60 sm:text-sm">
            Monthly ad spend
          </label>
          <span
            className="bg-clip-text font-mono text-lg font-semibold text-transparent sm:text-xl"
            style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
          >
            ₹{budget.toLocaleString("en-IN")}
          </span>
        </div>
        <input
          id="budget-slider"
          type="range"
          min={15000}
          max={200000}
          step={5000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-teal"
        />
        <div className="mt-1.5 flex justify-between text-[10px] text-paper/30">
          <span>₹15k</span>
          <span>₹2L</span>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-line bg-ink/60 p-5 text-center">
        <div className="text-[10px] uppercase tracking-wider text-paper/40 font-mono">Estimated leads / month</div>
        <div
          className="mt-1.5 bg-clip-text font-display text-2xl font-semibold text-transparent sm:text-3xl"
          style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
        >
          {minLeads}–{maxLeads}
        </div>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-paper/40">
        Based on a typical ₹{ROUGH_CPL_MIN}–₹{ROUGH_CPL_MAX} cost-per-lead range across our current clients — your actual
        numbers depend on category, competition and creative. The audit call gives you a figure specific to your
        business, not this estimate.
      </p>
    </div>
  );
}