"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

// Distinct quote set from the homepage carousel, so a visitor reading both
// pages doesn't see the same three testimonials twice.
const testimonials = [
  {
    quote:
      "What stood out wasn't the ad creative — it was that they actually picked up the phone when a campaign underperformed instead of hiding behind a dashboard.",
    attribution: "Client, Hospitality, Hyderabad",
  },
  {
    quote:
      "We'd worked with two agencies before this. This is the first one that told us our budget was too thin for one channel, instead of just taking it.",
    attribution: "Client, Real Estate, Hyderabad",
  },
  {
    quote:
      "The CRM handover alone paid for itself — we stopped losing leads across three different spreadsheets.",
    attribution: "Client, Interior Design, Hyderabad",
  },
];

export default function AboutTestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <div>
      <div className="relative mt-4 min-h-[110px] sm:mt-5 sm:min-h-[90px]">
        <p key={index} className="fade-in-quote font-display text-[clamp(1.4rem,4.4vw,2.5rem)] leading-[1.18] text-paper">
          &ldquo;{active.quote}&rdquo;
        </p>
      </div>
      <style>{`
        @keyframes fade-in-quote { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-quote { animation: fade-in-quote 0.5s ease-out; }
        @media (prefers-reduced-motion: reduce) { .fade-in-quote { animation: none !important; } }
      `}</style>

      <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:mt-4 sm:text-[12px]">
        — {active.attribution}
      </p>

      <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
        <button
          onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-paper/50 transition-colors hover:border-signal/50 hover:text-signal"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </button>
        <div className="flex items-center gap-1.5">
          {testimonials.map((t, i) => (
            <button
              key={t.attribution}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "20px" : "6px",
                background: i === index ? "var(--teal)" : "var(--line)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          aria-label="Next testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-paper/50 transition-colors hover:border-signal/50 hover:text-signal"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>

      <Link href="/testimonials" className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-signal hover:underline sm:mt-7 sm:text-[12px]">
        Read more stories
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
      </Link>
    </div>
  );
}