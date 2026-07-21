import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, RefreshCw, MessageCircle, TrendingUp, Users, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ScrollProgress from "@/components/ScrollProgress";
import ProcessTimeline from "@/components/ProcessTimeline";
import {
  ServicesCursorAura,
  ServicesStickyCTA,
  ServicesTestimonialCarousel,
  ServicesFAQSection,
} from "@/components/ServicesPageInteractive";

export const metadata = {
  title: "Our Digital Marketing Process | GK Digital Solutions",
  description:
    "See how GK Digital Solutions turns strategy into results — our proven 6-step process for SEO, ads, and digital growth campaigns.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.85rem,1.6vw,1rem)] leading-relaxed",
  stat: "text-[clamp(1.5rem,4.5vw,2.25rem)]",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

// Numbers that make "the process" concrete rather than abstract — same
// figures used elsewhere on the site for consistency.
const stats = [
  { value: 40, suffix: "+", label: "Active campaigns run through this process", icon: TrendingUp },
  { value: 24, suffix: "h", label: "Turnaround on a strategy call request", icon: Rocket },
  { value: 6, suffix: "", label: "Stages, repeated every month", icon: Users },
];

// Why the cadence itself is the point, not just the six stages —
// addresses the "so what's actually different" question directly.
const cadencePoints = [
  { icon: ShieldCheck, title: "Nothing runs on autopilot", desc: "Every stage has a human check-in — no campaign runs untouched for a month waiting on a quarterly review." },
  { icon: RefreshCw, title: "The loop closes monthly", desc: "Stage six feeds back into stage one. What we learn this month changes next month's plan, not just the report." },
  { icon: MessageCircle, title: "You're in the loop, not just the recap", desc: "Weekly updates happen while decisions are still live, not delivered after the budget's already spent." },
];

const processTestimonials = [
  {
    quote:
      "The monthly rhythm is what sold us — we always knew what changed and why, instead of getting a report that just restated last month's numbers.",
    attribution: "Client, Real Estate, Hyderabad",
  },
  {
    quote:
      "Most agencies treat onboarding as the strategy. Here the audit actually changed what they recommended for us.",
    attribution: "Client, Interior Design, Hyderabad",
  },
  {
    quote:
      "We've paused and restarted a service twice as our season changed. The process picked back up without losing any history.",
    attribution: "Client, Hospitality, Hyderabad",
  },
];

const processFaqs = [
  { q: "How often do we actually talk?", a: "A weekly async update as standard, plus a monthly call to walk through what changed and why. More frequent check-ins are available if a launch or a problem needs it." },
  { q: "What happens if a campaign stalls mid-month?", a: "We don't wait for the monthly review — a stalled campaign gets flagged and addressed within the same week, since that's what the weekly check-in is for." },
  { q: "Can we pause the process without losing progress?", a: "Yes — pausing a service keeps the CRM history and reporting intact, so restarting doesn't mean re-auditing from zero." },
  { q: "Does the process change based on which services we've booked?", a: "The six stages stay the same regardless of whether you've booked one service or several — what changes is the specific work inside each stage." },
];

export default function ProcessPage() {
  return (
    <main className="relative overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />
      <ServicesCursorAura />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .icon-float { animation: icon-float 3.4s ease-in-out infinite; }
        @keyframes border-glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .cta-border-glow { animation: border-glow 4s ease-in-out infinite; }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .shimmer-btn::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shimmer-sweep 3.2s ease-in-out infinite;
        }
        @keyframes particle-drift {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translate(var(--px, 24px), -110px); opacity: 0; }
        }
        .hero-particle { animation: particle-drift linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .icon-float, .cta-border-glow, .shimmer-btn::after, .hero-particle { animation: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
          {[...Array(7)].map((_, i) => (
            <span
              key={i}
              className="hero-particle absolute h-1 w-1 rounded-full"
              style={
                {
                  left: `${12 + i * 12}%`,
                  bottom: "-10px",
                  background: i % 2 === 0 ? "var(--signal)" : "var(--teal)",
                  animationDuration: `${9 + (i % 4) * 2}s`,
                  animationDelay: `${i * 1.1}s`,
                  "--px": `${(i % 3) * 16 - 16}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="icon-float h-3 w-3" strokeWidth={2} />
              Our process
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              A proven process built for predictable growth.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 max-w-xl text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Six stages, repeated every month — not a one-time setup we
              walk away from. Each step feeds the next, from first audit
              to your next strategy call.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-3 text-xs text-paper/35 sm:mt-4">
              Scroll down — the timeline fills in as you go.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats strip — makes "the process" concrete */}
      <section className="border-b border-line py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="min-w-0 rounded-xl border border-line bg-ink-panel/30 p-3.5 sm:p-5">
                  <s.icon className="h-4 w-4 text-signal opacity-60 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  <div
                    className={`mt-2 bg-clip-text font-mono font-semibold text-transparent sm:mt-3 ${fluid.stat}`}
                    style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[10.5px] leading-snug text-paper/50 sm:text-xs">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — scroll-triggered animations live in ProcessTimeline */}
      <section className="relative border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <ProcessTimeline />
        </div>
      </section>

      {/* Why the cadence matters — new section, answers "so what's actually
          different" instead of ending on the timeline alone */}
      <section className="border-b border-line bg-ink-panel/30 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`font-mono uppercase text-teal ${fluid.eyebrow}`}>Beyond the six stages</span>
            <h2 className={`mt-2 max-w-xl font-display font-semibold text-paper ${fluid.h2}`}>
              Why the cadence itself is the point
            </h2>
            <p className={`mt-3 max-w-xl text-paper/60 ${fluid.body}`}>
              A lot of agencies can draw six boxes on a slide. What actually
              matters is what happens between them, every single month.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
            {cadencePoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-ink/60 p-5 transition-colors hover:border-signal/30 sm:p-6">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))" }}
                  >
                    <p.icon className="h-4 w-4 text-signal" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-paper sm:text-lg">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/60 sm:text-sm">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial carousel — process-specific quotes */}
      <section className="border-b border-line py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal>
            <span className={`inline-block font-mono uppercase text-teal ${fluid.eyebrow}`}>What the cadence feels like from the outside</span>
          </Reveal>
          <ServicesTestimonialCarousel quotes={processTestimonials} />
        </div>
      </section>

      {/* FAQ — process-specific */}
      <ServicesFAQSection faqs={processFaqs} />

      {/* CTA */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <div
              className="cta-border-glow relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm sm:p-10"
              style={{ borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1", background: "var(--ink-panel)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
                style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
                <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>
                  See our process in action.
                </h2>
                <Link
                  href="/contact"
                  className="shimmer-btn group relative flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.03] sm:w-auto sm:text-[13px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <span className="relative">Book your free strategy call</span>
                  <ArrowUpRight
                    className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesStickyCTA label="Ready to start the process?" linkText="Book a call" />
    </main>
  );
}