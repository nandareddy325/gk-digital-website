"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";

/* Animated lead funnel — bars fill in and percentages count up once the
   section scrolls into view. Numbers are illustrative of a typical funnel
   shape; real client numbers live in the monthly report, not on this page. */
const stages = [
  { label: "Website Visitors", value: 100, color: "var(--signal)" },
  { label: "Leads Captured", value: 42, color: "var(--signal)" },
  { label: "Qualified Leads", value: 28, color: "var(--teal)" },
  { label: "Consultations Booked", value: 18, color: "var(--teal)" },
  { label: "Deals Closed", value: 8, color: "var(--teal)" },
];

export default function FunnelGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full min-w-0">
      <style>{`
        @keyframes funnel-glow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .funnel-glow-bg { animation: funnel-glow 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .funnel-glow-bg { animation: none !important; }
          .funnel-bar { transition: none !important; }
        }
      `}</style>

      <div className="space-y-3 sm:space-y-4">
        {stages.map((s, i) => (
          <div key={s.label} className="min-w-0">
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="truncate text-[12.5px] font-medium text-paper/80 sm:text-sm">{s.label}</span>
              <span
                className="shrink-0 font-mono text-[13px] font-semibold sm:text-sm"
                style={{ color: s.color }}
              >
                {inView ? <CountUp end={s.value} suffix="%" /> : "0%"}
              </span>
            </div>
            <div className="relative h-7 w-full overflow-hidden rounded-lg border border-line bg-ink-panel/40 sm:h-8">
              <div
                className="funnel-bar relative h-full rounded-lg transition-[width] ease-out"
                style={{
                  width: inView ? `${s.value}%` : "0%",
                  background: `linear-gradient(90deg, ${s.color}, ${s.color}CC)`,
                  transitionDuration: "1100ms",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div
                  className="funnel-glow-bg pointer-events-none absolute inset-0 rounded-lg"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color})` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-paper/40 sm:mt-5 sm:text-xs">
        Illustrative funnel shape based on typical client accounts — your
        actual stage-by-stage numbers are tracked live in your CRM and
        covered in your weekly report.
      </p>
    </div>
  );
}