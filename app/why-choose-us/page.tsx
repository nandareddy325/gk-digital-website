import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp, Users, Rocket, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ScrollProgress from "@/components/ScrollProgress";
import { ServicesCursorAura, ServicesStickyCTA, ServicesTestimonialCarousel } from "@/components/ServicesPageInteractive";

export const metadata = {
  title: "Why Choose GK Digital Solutions | Results-Driven Digital Marketing Agency",
  description:
    "Discover why businesses choose GK Digital Solutions for SEO, ads, branding & web design — transparent reporting, proven strategy, and real ROI.",
};

const fluid = {
  hero: "text-[clamp(1.9rem,5.8vw,3.5rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
  stat: "text-[clamp(1.5rem,4.5vw,2.25rem)]",
};

const points = [
  { title: "Strategy Before Execution", desc: "We never launch a campaign without a clear plan built around your goals." },
  { title: "Full-Service Under One Roof", desc: "SEO, ads, design, and content — no juggling multiple vendors." },
  { title: "Transparent Reporting", desc: "Monthly reports that show real numbers, not vanity metrics." },
  { title: "Custom, Not Cookie-Cutter", desc: "Every strategy is built specifically for your business and industry." },
  { title: "ROI-Focused Mindset", desc: "We treat your ad budget like it's our own." },
  { title: "Dedicated Account Support", desc: "A real team you can reach, not a ticket number." },
  { title: "Data-Backed Decisions", desc: "We test, measure, and optimize continuously." },
  { title: "Proven Process", desc: "A repeatable system built to drive measurable growth across industries." },
];

const stats = [
  { value: 40, suffix: "+", label: "Active campaigns managed", icon: TrendingUp },
  { value: 18, suffix: "", label: "Brands live right now", icon: Users },
  { value: 3.2, decimals: 1, suffix: "x", label: "Avg. lead-to-close lift", icon: Rocket },
  { value: 100, suffix: "%", label: "CRM-tracked leads, always", icon: Award },
];

const differenceTestimonials = [
  {
    quote: "Every other agency we talked to led with a pitch deck. GK Digital Solutions led with an audit of what we were already doing wrong.",
    attribution: "Client, Real Estate, Hyderabad",
  },
  {
    quote: "The monthly report actually explains why a number moved, not just that it moved.",
    attribution: "Client, Interior Design, Hyderabad",
  },
  {
    quote: "We've never had to chase them for an update — the weekly check-in just happens.",
    attribution: "Client, Hospitality, Hyderabad",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <ServicesCursorAura />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob { animation: none !important; }
        }
      `}</style>

      <section className="relative overflow-hidden border-b border-line pt-28 sm:pt-32 md:pt-40 pb-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              Why choose us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Why businesses trust GK Digital Solutions to grow their
              online presence.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Stats strip — new */}
      <section className="border-b border-line py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="min-w-0 rounded-xl border border-line bg-ink-panel/30 p-4 sm:p-5">
                  <s.icon className="h-4 w-4 text-signal opacity-60 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  <div
                    className={`mt-2 bg-clip-text font-mono font-semibold text-transparent sm:mt-3 ${fluid.stat}`}
                    style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    <CountUp end={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[10.5px] leading-snug text-paper/50 sm:text-xs">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Points grid — now with hover lift and a spotlight glow */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-ink-panel">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))" }}
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-signal" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-paper">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper/60">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial carousel — new */}
      <section className="border-b border-line bg-ink-panel/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className={`inline-block font-mono uppercase text-teal ${fluid.eyebrow}`}>What the difference sounds like</span>
          </Reveal>
          <ServicesTestimonialCarousel quotes={differenceTestimonials} />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-panel p-10 md:p-14">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                  Experience the GK Digital Solutions difference.
                </h2>
                <Link
                  href="/contact"
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
                >
                  Start your growth journey
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServicesStickyCTA label="Ready to experience the difference?" linkText="Get started" />
    </main>
  );
}