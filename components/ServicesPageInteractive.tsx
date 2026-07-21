"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ---------- Cursor aura — same quiet mouse-follow glow used on Home/About ---------- */
export function ServicesCursorAura() {
  const auraRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || reduce) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      const el = auraRef.current;
      if (el) {
        el.style.transform = `translate3d(${pos.current.x - 260}px, ${pos.current.y - 260}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[520px] w-[520px] rounded-full opacity-[0.06] blur-[110px] md:block"
      style={{ background: "radial-gradient(circle, var(--signal), var(--teal) 60%, transparent 75%)" }}
      aria-hidden="true"
    />
  );
}

/* ---------- Sticky CTA — appears once the hero has scrolled past ---------- */
export function ServicesStickyCTA({
  label = "Not sure which service fits?",
  linkHref = "/contact",
  linkText = "Ask us",
}: {
  label?: string;
  linkHref?: string;
  linkText?: string;
} = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-10% 0px 0px 0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-50 hidden justify-center px-4 transition-all duration-500 ease-out md:flex ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-4 rounded-full border border-line bg-ink-panel/90 py-2 pl-5 pr-2 shadow-2xl backdrop-blur-xl">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-paper/70">
          <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
          {label}
        </span>
        <Link
          href={linkHref}
          className="flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white shadow-md"
          style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
        >
          {linkText}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

/* ---------- Testimonial carousel — quotes about combining services ---------- */
const quotes = [
  {
    quote:
      "We started with just Google Ads. Once the CRM showed which leads actually closed, adding SEO on top was an easy call.",
    attribution: "Client, Real Estate, Hyderabad",
  },
  {
    quote:
      "Having website, ads and WhatsApp follow-up run by the same team meant nothing got lost in translation between vendors.",
    attribution: "Client, Interior Design, Hyderabad",
  },
  {
    quote:
      "They talked us out of a service we didn't need yet, which is exactly why we trusted them with the ones we did book.",
    attribution: "Client, Skin & Hair Clinic, Hyderabad",
  },
];

export function ServicesTestimonialCarousel({
  quotes: quotesProp,
}: {
  quotes?: { quote: string; attribution: string }[];
} = {}) {
  const items = quotesProp && quotesProp.length > 0 ? quotesProp : quotes;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, [items.length]);

  const active = items[index];

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
          onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
          aria-label="Previous testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-paper/50 transition-colors hover:border-signal/50 hover:text-signal"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </button>
        <div className="flex items-center gap-1.5">
          {items.map((t, i) => (
            <button
              key={t.attribution}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === index ? "20px" : "6px", background: i === index ? "var(--teal)" : "var(--line)" }}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % items.length)}
          aria-label="Next testimonial"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-paper/50 transition-colors hover:border-signal/50 hover:text-signal"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

/* ---------- FAQ accordion — reusable, takes its content as a prop ---------- */
type FaqItem = { q: string; a: string };

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} className="flex min-h-[52px] w-full items-center justify-between gap-4 py-4 text-left sm:py-6" aria-expanded={isOpen}>
        <span className="font-display text-[14.5px] font-medium text-paper sm:text-base md:text-lg">{item.q}</span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line transition-colors sm:h-7 sm:w-7"
          style={isOpen ? { borderColor: "var(--teal)" } : undefined}
        >
          {isOpen ? <Minus className="h-3.5 w-3.5 text-teal" strokeWidth={2} /> : <Plus className="h-3.5 w-3.5 text-paper/50" strokeWidth={2} />}
        </span>
      </button>
      <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="pb-4 text-[13px] leading-relaxed text-paper/60 sm:pb-6 sm:text-sm md:max-w-2xl">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export function ServicesFAQSection({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <span className="font-mono text-[clamp(0.625rem,1.3vw,0.75rem)] uppercase tracking-[0.18em] text-teal">Questions</span>
        <h2 className="mt-2 font-display text-[clamp(1.4rem,4vw,2.25rem)] font-semibold leading-[1.2] text-paper">
          Before you pick a service
        </h2>
        <div className="mt-6 sm:mt-10">
          {faqs.map((f, i) => (
            <FaqRow key={f.q} item={f} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}