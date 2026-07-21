import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Users,
  Lightbulb,
  Eye,
  Compass,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Heart,
  Sparkles,
  Rocket,
  Award,
  Home as HomeIcon,
  Building2,
  UtensilsCrossed,
  Scissors,
  ShoppingCart,
  Filter,
  Layers,
  MessageCircle,
  BarChart3,
  Quote,
  Star,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import TalkToTeamButton from "@/components/TalkToTeamButton";
import SpotlightCard from "@/components/SpotlightCard";
import ScrollProgress from "@/components/ScrollProgress";
import FunnelGraph from "@/components/FunnelGraph";
import AboutCursorAura from "@/components/AboutCursorAura";
import AboutStickyCTA from "@/components/AboutStickyCTA";
import AboutTestimonialCarousel from "@/components/AboutTestimonialCarousel";

export const metadata = {
  title: "About GK Digital Solutions | Our Story, Mission & Team",
  description:
    "Learn about GK Digital Solutions — a results-driven digital marketing agency committed to helping businesses grow through SEO, ads, branding, and web design.",
};

/* Fluid type scale — continuous clamp() scaling instead of breakpoint jumps,
   matching the homepage's mobile-first treatment. */
const fluid = {
  hero: "text-[clamp(1.9rem,6vw,3.75rem)] leading-[1.15]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.9vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.85rem,1.6vw,1rem)] leading-relaxed",
  stat: "text-[clamp(1.6rem,4.8vw,2.5rem)]",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

const stats = [
  { value: 40, suffix: "+", label: "Active campaigns managed", icon: TrendingUp },
  { value: 18, suffix: "", label: "Brands live right now", icon: Users },
  { value: 3.2, decimals: 1, suffix: "x", label: "Avg. lead-to-close lift", icon: Rocket },
  { value: 2.4, decimals: 1, prefix: "₹", suffix: "Cr+", label: "Ad spend tracked", icon: Award },
];

// Expanded from 3 to 5 steps — adds where the CRM fits in and an honest
// "what's next" close instead of ending on a static present-tense claim.
const journey = [
  {
    n: "01",
    title: "The problem we saw",
    desc: "Too many businesses burning budgets on scattered campaigns, generic websites, and social accounts with no strategy behind them — spend going out, nothing measurable coming back.",
  },
  {
    n: "02",
    title: "The first fix",
    desc: "We started by unifying strategy, creative and media buying under one roof — so at least the campaigns pulled in the same direction, on the same brief.",
  },
  {
    n: "03",
    title: "The system we built",
    desc: "That wasn't enough on its own. We built a CRM pipeline into the process, so every lead is tracked from first click to closed deal — not just reported as an impression.",
  },
  {
    n: "04",
    title: "Where we are today",
    desc: "A full-service digital growth partner for interior design, real estate, hospitality and skin & hair brands across Hyderabad — audited honestly, run transparently.",
  },
  {
    n: "05",
    title: "What we're building next",
    desc: "Deeper automation — WhatsApp follow-up, lead scoring, and reporting that updates itself — so clients spend less time chasing status updates and more time closing.",
  },
];

const values = [
  { icon: ShieldCheck, title: "Transparency", desc: "Clear reporting, honest timelines, no vanity metrics." },
  { icon: TrendingUp, title: "Results-First Thinking", desc: "Every campaign is built around ROI, not just impressions." },
  { icon: Lightbulb, title: "Creativity with Purpose", desc: "Bold ideas that are grounded in strategy, not guesswork." },
  { icon: Heart, title: "Client Partnership", desc: "We grow when you grow — your success is the scoreboard.", highlighted: true },
  { icon: RefreshCw, title: "Continuous Learning", desc: "We stay ahead of algorithm changes, platform trends, and consumer behavior." },
];

const differentiators = [
  { icon: Target, title: "Strategy First", desc: "We don't believe in one-size-fits-all packages. Every business gets a strategy built around their specific goals and audience." },
  { icon: Lightbulb, title: "Data + Creativity", desc: "Our team blends analytical thinking with creative execution, so campaigns aren't just data-driven — they're memorable." },
  { icon: Users, title: "One Team, Every Channel", desc: "Strategists, creators, designers and developers working together, so your brand stays consistent everywhere it shows up." },
];

const industryChips = [
  { icon: HomeIcon, label: "Interior Design" },
  { icon: Building2, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Scissors, label: "Skin & Hair" },
  { icon: ShoppingCart, label: "E-Commerce" },
];

const team = [
  { role: "Strategy & Growth", desc: "Audits accounts, builds channel roadmaps, and owns the numbers behind every campaign.", initials: "SG" },
  { role: "Paid Media", desc: "Runs and optimizes Google, Meta and WhatsApp campaigns against real close rates, not just clicks.", initials: "PM" },
  { role: "Creative & Content", desc: "Shoots, edits and writes the assets that make campaigns stop the scroll.", initials: "CC" },
  { role: "Web & CRM", desc: "Builds the websites, landing pages and CRM pipelines that turn traffic into tracked leads.", initials: "WC" },
];

// NOTE: replace with real, verified badges/logos before publishing — do not
// claim a certification or partnership status that hasn't actually been
// earned, since this is a checkable public claim.
const toolsWeUse = [
  { icon: Target, label: "Meta Ads Manager" },
  { icon: BarChart3, label: "Google Ads & Analytics" },
  { icon: MessageCircle, label: "WhatsApp Business API" },
  { icon: Layers, label: "Custom CRM Pipeline" },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />
      <AboutCursorAura />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        .mesh-blob-2 { animation: mesh-drift 18s ease-in-out infinite reverse; }
        @keyframes shine { to { background-position: 200% center; } }
        .hero-gradient-text { background-size: 200% auto; animation: shine 6s linear infinite; }
        @keyframes highlight-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(122,193,66,0.0), 0 16px 50px -20px rgba(27,84,199,0.3); }
          50% { box-shadow: 0 0 0 5px rgba(122,193,66,0.06), 0 16px 50px -20px rgba(122,193,66,0.3); }
        }
        .highlight-card { animation: highlight-pulse 3.5s ease-in-out infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 26s linear infinite; }
        .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
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
        @keyframes draw-line { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .journey-line { animation: draw-line 1.6s ease-out forwards; transform-origin: top; }
        @keyframes underline-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .eyebrow-underline {
          position: relative;
          display: inline-flex;
        }
        .eyebrow-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          height: 1.5px;
          width: 100%;
          background: linear-gradient(90deg, var(--signal), var(--teal));
          transform: scaleX(0);
          transform-origin: left;
          animation: underline-draw 0.9s ease-out 0.3s forwards;
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .icon-float { animation: icon-float 3.4s ease-in-out infinite; }
        @keyframes avatar-pop {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .avatar-pop { animation: avatar-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes particle-drift {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translate(var(--px, 30px), -120px); opacity: 0; }
        }
        .hero-particle { animation: particle-drift linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .mesh-blob-2, .hero-gradient-text, .highlight-card,
          .marquee-track, .cta-border-glow, .shimmer-btn::after, .journey-line,
          .eyebrow-underline::after, .icon-float, .avatar-pop, .hero-particle {
            animation: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24">
        <div
          className="mesh-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div
          className="mesh-blob-2 pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full opacity-10 blur-3xl sm:-left-32 sm:h-72 sm:w-72"
          style={{ background: "linear-gradient(135deg, var(--teal), var(--signal))" }}
          aria-hidden="true"
        />

        {/* Ambient rising particles, same motif as the homepage hero — kept
            subtle and desktop-only so mobile stays clean and fast. */}
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="hero-particle absolute h-1 w-1 rounded-full"
              style={
                {
                  left: `${10 + i * 11}%`,
                  bottom: "-10px",
                  background: i % 2 === 0 ? "var(--signal)" : "var(--teal)",
                  animationDuration: `${10 + (i % 4) * 2}s`,
                  animationDelay: `${i * 1.1}s`,
                  "--px": `${(i % 3) * 18 - 18}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Compass className="icon-float h-3 w-3 shrink-0" strokeWidth={2} />
              About us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper sm:mt-6 ${fluid.hero}`}>
              Built on results.
              <br />
              <span
                className="hero-gradient-text bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal), var(--signal))" }}
              >
                Driven by growth.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-5 max-w-2xl text-paper/60 sm:mt-6 ${fluid.lead}`}>
              We&apos;re a full-service digital growth partner for businesses
              that want more than likes and impressions — real leads, real
              revenue, and a team that treats your budget like it&apos;s our
              own.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <TalkToTeamButton />
              <Link
                href="#journey"
                className="flex min-h-[46px] items-center rounded-full border border-line px-5 font-mono text-[12px] uppercase tracking-wider text-paper/80 transition-all hover:border-signal/50 hover:text-signal hover:-translate-y-0.5 sm:px-6 sm:text-[13px]"
              >
                Our journey
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated stats strip */}
      <section className="border-b border-line py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-line bg-ink-panel/30 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:bg-ink-panel sm:p-6">
                  <s.icon className="icon-float h-4 w-4 text-signal opacity-60 transition-opacity group-hover:opacity-100 sm:h-5 sm:w-5" strokeWidth={1.75} style={{ animationDelay: `${i * 0.3}s` }} />
                  <div
                    className={`mt-3 bg-clip-text font-mono font-semibold text-transparent sm:mt-4 ${fluid.stat}`}
                    style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    <CountUp end={s.value} decimals={s.decimals ?? 0} prefix={s.prefix ?? ""} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-[11px] leading-snug text-paper/50 sm:text-xs">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Team image */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl min-w-0 gap-8 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
          <Reveal>
            <div className="group relative h-56 w-full overflow-hidden rounded-2xl border border-line sm:h-72 md:h-96">
              <div
                className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background: "linear-gradient(135deg, var(--signal), transparent 40%, var(--teal))",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
                aria-hidden="true"
              />
              <Image
                src="/team-collaboration.png"
                alt="GK Digital Solutions team collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
          <div className="space-y-4 sm:space-y-5">
            <Reveal delay={80}>
              <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Our story</span>
              <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>
                Why GK Digital Solutions exists
              </h2>
              <p className={`mt-3 text-paper/70 sm:mt-4 ${fluid.body}`}>
                GK Digital Solutions was founded on a simple belief:
                businesses deserve marketing that actually works, not just
                marketing that looks good on paper. We saw too many
                companies burning budgets on scattered campaigns, generic
                websites, and social media accounts with no strategy
                behind them — and we set out to change that.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className={`text-paper/70 ${fluid.body}`}>
                Today, we&apos;re a full-service digital growth partner,
                helping businesses across interior design, real estate,
                hospitality, skin &amp; hair and other industries build
                stronger online visibility, generate qualified leads, and
                convert digital attention into real revenue.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className={`text-paper/70 ${fluid.body}`}>
                Every engagement starts with an honest audit, not a sales
                pitch. If we don&apos;t think we can move the needle for
                you, we&apos;ll tell you that too.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section id="journey" className="relative border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>How we got here</span>
            <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>The short version</h2>
          </Reveal>

          <div className="relative mt-10 sm:mt-12">
            <div
              className="journey-line absolute left-4 top-1 bottom-1 w-px sm:left-5"
              style={{ background: "linear-gradient(180deg, var(--signal), var(--teal))" }}
              aria-hidden="true"
            />
            <div className="space-y-8 sm:space-y-10">
              {journey.map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div className="group relative flex gap-4 sm:gap-5">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-ink font-mono text-[11px] text-signal transition-all duration-300 group-hover:scale-110 group-hover:border-signal/60 sm:h-10 sm:w-10 sm:text-xs">
                      {step.n}
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="font-display text-base font-semibold text-paper sm:text-lg">{step.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-paper/60 sm:mt-2 sm:text-sm">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Graph — how leads move through the system */}
      <section className="relative border-b border-line py-14 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-teal/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline inline-flex items-center gap-2 font-mono uppercase text-teal ${fluid.eyebrow}`}>
              <Filter className="icon-float h-3 w-3" strokeWidth={2} />
              The pipeline
            </span>
            <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>
              How a lead becomes a client
            </h2>
            <p className={`mt-3 max-w-xl text-paper/60 sm:mt-4 ${fluid.body}`}>
              Every visitor that comes in through an ad or search moves
              through the same tracked funnel — so you can see exactly
              where a lead is lost, not just how many came in.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 rounded-2xl border border-line bg-ink-panel/30 p-5 backdrop-blur-sm sm:mt-10 sm:p-8">
              <FunnelGraph />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision with images */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            <Reveal>
              <div className="group h-full overflow-hidden rounded-2xl border border-line bg-ink-panel/40 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30">
                <div className="relative h-40 w-full overflow-hidden bg-ink-panel sm:h-48">
                  <Image
                    src="/mission-launch.png"
                    alt="Our mission"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <Target className="icon-float h-5 w-5 text-signal sm:h-6 sm:w-6" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-paper sm:mt-5 sm:text-xl">
                    Our Mission
                  </h3>
                  <p className={`mt-3 text-paper/60 ${fluid.body}`}>
                    To empower businesses of every size with data-driven
                    digital marketing strategies that generate real,
                    measurable growth — more visibility, more leads, and
                    more revenue — through honest work and creative
                    excellence.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="group h-full overflow-hidden rounded-2xl border border-line bg-ink-panel/40 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30">
                <div className="relative h-40 w-full overflow-hidden bg-ink-panel sm:h-48">
                  <Image
                    src="/values-partnership.png"
                    alt="Our values"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <Eye className="icon-float h-5 w-5 text-teal sm:h-6 sm:w-6" strokeWidth={1.5} style={{ animationDelay: "0.4s" }} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-paper sm:mt-5 sm:text-xl">
                    Our Vision
                  </h3>
                  <p className={`mt-3 text-paper/60 ${fluid.body}`}>
                    To become the most trusted digital growth partner for
                    ambitious brands, known for turning digital marketing
                    budgets into predictable, scalable business results.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values — spotlight-hover cards */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Our principles</span>
            <h2 className={`mt-2 max-w-lg font-display font-semibold text-paper ${fluid.h2}`}>
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <SpotlightCard
                  highlighted={v.highlighted}
                  className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                    v.highlighted
                      ? "border-transparent bg-ink-panel/60 shadow-xl"
                      : "border-line bg-ink-panel/30 hover:border-signal/30"
                  }`}
                >
                  {v.highlighted && (
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
                  <v.icon className="icon-float h-5 w-5 text-signal transition-transform group-hover:scale-110 sm:h-6 sm:w-6" strokeWidth={1.5} style={{ animationDelay: `${i * 0.25}s` }} />
                  <h3 className="mt-4 font-display text-base font-semibold text-paper sm:mt-5 sm:text-lg">{v.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/60 sm:text-sm">{v.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators — spotlight-hover cards */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>The edge</span>
            <h2 className={`mt-2 max-w-lg font-display font-semibold text-paper ${fluid.h2}`}>
              What makes us different
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3.5 sm:mt-12 sm:gap-4 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <SpotlightCard className="rounded-2xl border border-line bg-ink-panel/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 sm:p-7">
                  <d.icon className="icon-float h-5 w-5 text-signal transition-transform group-hover:scale-110 sm:h-6 sm:w-6" strokeWidth={1.5} style={{ animationDelay: `${i * 0.25}s` }} />
                  <h3 className="mt-4 font-display text-base font-semibold text-paper sm:mt-5 sm:text-lg">{d.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/60 sm:text-sm">{d.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & platforms — factual list of what we operate in, deliberately
          NOT phrased as "certified" or "official partner" unless that status
          is actually verified; swap in real badge logos when you have them. */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Under the hood</span>
            <h2 className={`mt-2 max-w-lg font-display font-semibold text-paper ${fluid.h2}`}>
              Where the work actually happens
            </h2>
            <p className={`mt-3 max-w-xl text-paper/60 ${fluid.body}`}>
              No mystery stack. These are the platforms your campaigns and
              leads run through, day to day.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3.5 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {toolsWeUse.map((t, i) => (
              <Reveal key={t.label} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-xl border border-line bg-ink-panel/30 p-4 transition-colors hover:border-signal/30 sm:p-5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))" }}
                  >
                    <t.icon className="h-4 w-4 text-signal" strokeWidth={1.75} />
                  </div>
                  <span className="text-[12.5px] font-medium text-paper/80 sm:text-sm">{t.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="border-b border-line py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-5">
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-paper/40 sm:text-[11px]">
                Industries we serve
              </span>
              <div className="marquee-wrap relative w-full min-w-0 overflow-hidden md:w-auto">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent sm:w-12" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent sm:w-12" aria-hidden="true" />
                <div className="marquee-track flex w-max items-center gap-2.5 sm:gap-3">
                  {[...industryChips, ...industryChips].map((c, i) => (
                    <span
                      key={`${c.label}-${i}`}
                      className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] text-paper/60 transition-colors hover:border-signal/40 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
                    >
                      <c.icon className="h-3.5 w-3.5 text-signal" strokeWidth={1.75} />
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder spotlight — About pages read as more trustworthy with a
          named person behind them, not just a logo. NOTE: confirm exact
          name/title spelling before publishing. */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-line bg-ink-panel/30 p-6 text-center backdrop-blur-sm sm:p-10 md:flex-row md:gap-8 md:text-left">
              <div
                className="avatar-pop flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-semibold text-white shadow-lg sm:h-20 sm:w-20 sm:text-2xl"
                style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
              >
                G
              </div>
              <div>
                <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Founder&apos;s note</span>
                <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>
                  &ldquo;We built this because we got tired of agencies that couldn&apos;t answer &apos;so what did that spend actually get us?&apos;&rdquo;
                </h2>
                <p className={`mt-3 text-paper/60 ${fluid.body}`}>
                  Ganesh, Founder &amp; Managing Director, GK Digital
                  Solutions — part of GKA1 Enterprises, alongside GK Home
                  Interiors.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team — premium avatar cards */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>The people</span>
            <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>Our team</h2>
            <p className={`mt-3 max-w-2xl text-paper/60 sm:mt-4 ${fluid.body}`}>
              SEO specialists, paid media strategists, content creators,
              graphic designers, web developers, and account managers —
              all working together under one roof so your digital
              strategy stays consistent across every channel.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={i * 70}>
                <SpotlightCard className="h-full rounded-2xl border border-line bg-ink-panel/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 sm:p-6">
                  <div
                    className="avatar-pop flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-semibold text-white transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, var(--signal), var(--teal))"
                        : "linear-gradient(135deg, var(--teal), var(--signal))",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="mt-3.5 font-display text-[15px] font-semibold text-paper sm:mt-4 sm:text-base">{member.role}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/60 sm:text-sm">{member.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial carousel — client-side rotating quotes, distinct set
          from the homepage so the two pages don't repeat content. */}
      <section className="border-b border-line bg-ink-panel/30 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <Quote className="mx-auto h-6 w-6 text-signal/40" strokeWidth={1.5} />
            <div className="mt-3 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={0} style={{ fill: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }} />
              ))}
            </div>
            <span className={`mt-4 inline-block font-mono uppercase text-teal sm:mt-5 ${fluid.eyebrow}`}>
              In their words
            </span>
          </Reveal>
          <AboutTestimonialCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <div
              className="cta-border-glow relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm sm:p-10 md:p-14"
              style={{ borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1", background: "var(--ink-panel)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
                style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
                <div className="max-w-lg">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white sm:text-[11px]"
                    style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    <Sparkles className="icon-float h-3 w-3" strokeWidth={2} />
                    Let&apos;s talk
                  </span>
                  <h2 className={`mt-4 font-display font-semibold text-paper sm:mt-5 ${fluid.h2}`}>
                    Let&apos;s build something great together.
                  </h2>
                </div>
                <div className="w-full md:w-auto">
                  <TalkToTeamButton />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutStickyCTA />
    </main>
  );
}