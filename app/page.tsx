import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Target,
  Search,
  MessageCircle,
  Palette,
  TrendingUp,
} from "lucide-react";

// ---------- PulseLine ----------
function PulseLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 160"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pulse-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0" />
          <stop offset="10%" stopColor="var(--signal)" stopOpacity="1" />
          <stop offset="90%" stopColor="var(--signal)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </linearGradient>
        <filter id="pulse-glow" x="-20%" y="-100%" width="140%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M0,120 L90,120 L120,60 L150,140 L180,40 L210,120 L260,120 L290,90 L320,120 L420,120 L450,70 L480,130 L510,50 L540,120 L620,120 L650,95 L680,120 L780,120 L810,55 L840,135 L870,30 L900,120 L980,120 L1010,85 L1040,120 L1200,120"
        stroke="var(--line)"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M0,120 L90,120 L120,60 L150,140 L180,40 L210,120 L260,120 L290,90 L320,120 L420,120 L450,70 L480,130 L510,50 L540,120 L620,120 L650,95 L680,120 L780,120 L810,55 L840,135 L870,30 L900,120 L980,120 L1010,85 L1040,120 L1200,120"
        stroke="url(#pulse-fade)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pulse-path"
        filter="url(#pulse-glow)"
        opacity="0.9"
      />
      <circle cx="1040" cy="120" r="8" fill="var(--signal)" opacity="0.25" className="blink-dot" />
      <circle cx="1040" cy="120" r="4" fill="var(--signal)" className="blink-dot" />
    </svg>
  );
}

// ---------- Hero ----------
const heroStats = [
  { value: "40+", label: "Active campaigns" },
  { value: "3.2×", label: "Avg. lead-to-close lift" },
  { value: "₹2.4Cr+", label: "Ad spend managed" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rise-in flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
          Live across 40+ campaigns · Hyderabad
        </div>

        <h1 className="rise-in mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper md:text-7xl">
          Your ad spend, tracked like a pipeline —{" "}
          <span className="text-signal">not a vanity metric.</span>
        </h1>

        <p
          className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-paper/70"
          style={{ animationDelay: "0.1s" }}
        >
          GK Digital Solutions runs Meta, Google and WhatsApp campaigns for
          interior design, real estate and hospitality brands — and wires
          every lead straight into your CRM, so you see what closes, not
          just what clicks.
        </p>

        <div
          className="rise-in mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            href="/contact"
            className="rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
          >
            Book a free audit
          </Link>
          <Link
            href="#results"
            className="rounded-full border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-paper/80 transition-colors hover:border-paper/40"
          >
            See results
          </Link>
        </div>

        <div
          className="rise-in mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8 md:max-w-xl"
          style={{ animationDelay: "0.3s" }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-semibold text-paper md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-paper/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-line">
        <PulseLine className="h-28 w-full md:h-40" />
      </div>
    </section>
  );
}

// ---------- Services ----------
const services = [
  {
    icon: Target,
    title: "Meta & Google Ads",
    desc: "Full-funnel campaigns built around your actual sales stages, not just impressions — tuned weekly against real close rates.",
    metric: "3.2x",
    metricLabel: "avg. ROAS",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "Google Business Profile, local landing pages and review systems that put you at the top when Hyderabad searches for what you sell.",
    metric: "1–3",
    metricLabel: "map pack rank",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & CRM Automation",
    desc: "Every lead auto-tagged, followed up and dropped into your pipeline within minutes — no manual data entry, no leads lost in DMs.",
    metric: "<5min",
    metricLabel: "response time",
  },
  {
    icon: Palette,
    title: "Creative & Content",
    desc: "Reels, carousels and ad creative shot and edited for the categories that actually convert in interiors, real estate and hospitality.",
    metric: "12+",
    metricLabel: "assets / month",
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            Four systems.
            <br />
            One pipeline.
          </h2>
          <p className="max-w-sm text-paper/60">
            We don&apos;t sell services in isolation — each one feeds the same
            CRM, so nothing you pay for disappears into a report nobody
            reads.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col gap-6 bg-ink p-8 transition-colors hover:bg-ink-panel"
            >
              <div className="flex items-start justify-between">
                <s.icon className="h-6 w-6 text-signal" strokeWidth={1.5} />
                <div className="text-right">
                  <div className="font-mono text-2xl text-paper">{s.metric}</div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
                    {s.metricLabel}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-paper">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">
                  {s.desc}
                </p>
              </div>
              <div className="mt-auto h-px w-0 bg-signal/60 transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Process ----------
const steps = [
  {
    n: "01",
    title: "Audit",
    desc: "We pull your last 90 days of ad and lead data and show you exactly where budget is leaking before we touch a single campaign.",
  },
  {
    n: "02",
    title: "Build",
    desc: "Campaigns, landing pages and CRM pipeline stages get built together — so every lead has somewhere to go the moment it comes in.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "We go live with a tracked baseline, so from day one you can see cost-per-lead and cost-per-close side by side.",
  },
  {
    n: "04",
    title: "Optimize",
    desc: "Weekly review against pipeline data, not platform dashboards — we cut what doesn't close, and scale what does.",
  },
];

function Process() {
  return (
    <section id="process" className="border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            How we work
          </h2>
          <p className="mt-4 text-paper/60">
            No black-box retainers. Four stages, each one handed off with
            data you can check yourself.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <div className="absolute left-0 right-0 top-[calc(0.9rem)] hidden h-px bg-line md:block" />

          {steps.map((step) => (
            <div key={step.n} className="group relative">
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink font-mono text-xs text-signal-dim transition-colors group-hover:border-signal/60 group-hover:text-signal">
                {step.n}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Results ----------
const resultStats = [
  { value: "₹42L+", label: "pipeline value tracked / month" },
  { value: "3.2x", label: "average return on ad spend" },
  { value: "68%", label: "leads auto-qualified before handoff" },
  { value: "18", label: "Hyderabad brands live right now" },
];

function Results() {
  return (
    <section id="results" className="border-t border-line bg-ink-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
          Numbers, not testimonials
        </div>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
          What&apos;s actually in the pipeline right now
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-ink p-8 transition-colors hover:bg-ink-panel"
            >
              <TrendingUp
                className="h-4 w-4 text-signal/40 transition-colors group-hover:text-signal"
                strokeWidth={1.75}
              />
              <div className="mt-4 font-mono text-4xl text-signal">
                {s.value}
              </div>
              <div className="mt-3 text-sm leading-snug text-paper/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-paper/40">
          Figures reflect active client campaigns and update as new brands
          come on board.
        </p>
      </div>
    </section>
  );
}

// ---------- CTA ----------
function CTA() {
  return (
    <section id="contact" className="border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-panel p-10 md:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/50">
                <Sparkles className="h-3 w-3" strokeWidth={2} />
                Free 15-min audit
              </span>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
                Let&apos;s see where your budget is actually going.
              </h2>

              <p className="mt-4 text-paper/60">
                Send us your last month of ad spend and lead numbers.
                We&apos;ll map it against your close rate and tell you,
                free, whether the problem is targeting, follow-up, or
                something else entirely.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-paper/50">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                  Reply within 24 hours
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
                  No spam, no obligation
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[280px]">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.02]"
              >
                WhatsApp us
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>

              <a
                href="mailto:hello@gkdigitalsolutions.in"
                className="group flex items-center justify-between gap-4 rounded-full border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-paper/80 transition-colors hover:border-paper/40"
              >
                Email us
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>

              <p className="pt-1 text-center font-mono text-[10px] uppercase tracking-wider text-paper/30 md:text-left">
                Takes 2 minutes &middot; Sent 40+ audits so far
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Home Page ----------
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Results />
      <CTA />
    </main>
  );
}
