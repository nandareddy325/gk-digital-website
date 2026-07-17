"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Target, Palette, Rocket, TrendingUp, FileText } from "lucide-react";

/* Steps live here (inside the client component) rather than being passed
   as props from the server page — lucide-react icon components can't be
   serialized across the server/client boundary, so this is the fix. */
const steps = [
  { n: "01", icon: Search, title: "Discover", desc: "We start with a deep-dive audit of your business, website, competitors, and target audience to understand exactly where you stand and where the opportunities are." },
  { n: "02", icon: Target, title: "Strategize", desc: "Using audit insights, we build a custom digital marketing roadmap — choosing the right mix of SEO, paid ads, social, and content based on your goals and budget." },
  { n: "03", icon: Palette, title: "Design & Build", desc: "Our creative and development team builds the assets your strategy needs — from websites and landing pages to ad creatives and content calendars." },
  { n: "04", icon: Rocket, title: "Launch & Execute", desc: "We launch campaigns across the selected channels, with careful tracking set up from day one so every action is measurable." },
  { n: "05", icon: TrendingUp, title: "Optimize & Scale", desc: "We continuously monitor performance, run A/B tests, and refine targeting, creative, and budget allocation to improve results month over month." },
  { n: "06", icon: FileText, title: "Report & Review", desc: "You receive clear, jargon-free monthly reports along with strategy calls to review performance and plan the next phase of growth." },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() => steps.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          setRevealed((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const revealedCount = revealed.filter(Boolean).length;
  const fillPercent = steps.length > 1 ? (Math.max(revealedCount - 1, 0) / (steps.length - 1)) * 100 : 0;

  return (
    <div ref={containerRef} className="relative">
      <style>{`
        @keyframes pt-pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(122,193,66,0.35); }
          70% { box-shadow: 0 0 0 10px rgba(122,193,66,0); }
          100% { box-shadow: 0 0 0 0 rgba(122,193,66,0); }
        }
        .pt-pulse { animation: pt-pulse-ring 2.6s ease-out infinite; }
        @keyframes pt-icon-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2.5px); }
        }
        .pt-bob { animation: pt-icon-bob 3s ease-in-out infinite; }
        .pt-step {
          opacity: 0;
          transform: translateX(-18px);
          transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .pt-step.pt-in {
          opacity: 1;
          transform: translateX(0);
        }
        .pt-icon-wrap {
          transform: scale(0.6);
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.15s;
        }
        .pt-step.pt-in .pt-icon-wrap {
          transform: scale(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .pt-pulse, .pt-bob { animation: none !important; }
          .pt-step, .pt-icon-wrap { transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Base track line */}
      <div
        className="absolute left-[21px] top-2 bottom-2 w-px bg-line sm:left-[27px]"
        aria-hidden="true"
      />
      {/* Progressive fill line — grows as steps scroll into view */}
      <div
        className="absolute left-[21px] top-2 w-px transition-[height] duration-700 ease-out sm:left-[27px]"
        style={{
          height: `${fillPercent}%`,
          background: "linear-gradient(180deg, var(--signal), var(--teal))",
        }}
        aria-hidden="true"
      />

      <div className="space-y-8 sm:space-y-10">
        {steps.map((step, i) => {
          const isRevealed = revealed[i];
          return (
            <div
              key={step.n}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-idx={i}
              className={`pt-step group relative flex gap-4 sm:gap-6 ${isRevealed ? "pt-in" : ""}`}
            >
              <div
                className={`pt-icon-wrap relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-ink transition-all duration-300 group-hover:scale-110 sm:h-[54px] sm:w-[54px] ${
                  isRevealed ? "border-signal/50 pt-pulse" : "border-line"
                }`}
              >
                <step.icon className="pt-bob h-4.5 w-4.5 text-signal sm:h-5 sm:w-5" strokeWidth={1.75} style={{ animationDelay: `${i * 0.2}s` }} />
              </div>
              <div className="min-w-0 flex-1 border-b border-line pb-8 sm:pb-10">
                <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:text-xs">
                  Step {step.n}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-paper sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-paper/60 sm:text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}