import Link from "next/link";
import {
  Search,
  Target,
  MessageCircle,
  Palette,
  Globe,
  PenTool,
  Mail,
  Users,
  MapPin,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Rocket,
  Award,
  Home as HomeIcon,
  Building2,
  UtensilsCrossed,
  Scissors,
  ShoppingCart,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Digital Marketing Services | SEO, Ads, Web Design & Branding",
  description:
    "Explore GK Digital Solutions' full range of services — SEO, Google Ads, social media marketing, website design, branding, content marketing, and lead generation.",
};

/* Fluid type scale — continuous clamp() scaling, matches Home/About treatment */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.85rem,1.6vw,1rem)] leading-relaxed",
  stat: "text-[clamp(1.5rem,4.5vw,2.25rem)]",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

/* Each service now carries a "tag" — the deliverable framing, and a metric
   for quick scanning, matching the homepage ServiceCard pattern. Existing
   11 services kept exactly as-is, content only added on top. */
const services = [
  { slug: "seo", icon: Search, title: "SEO", desc: "Rank higher on Google and get found by customers actively searching for you.", tag: "Organic growth", metric: "1–3", metricLabel: "map pack rank" },
  { slug: "google-ads", icon: Target, title: "Google Ads (PPC)", desc: "Instant visibility and high-intent traffic that converts.", tag: "Paid search", metric: "3.2x", metricLabel: "avg. ROAS" },
  { slug: "meta-ads", icon: Target, title: "Meta & Instagram Ads", desc: "Reach the right audience with scroll-stopping creative.", tag: "Paid social", metric: "12+", metricLabel: "creatives / month" },
  { slug: "social-media-marketing", icon: Users, title: "Social Media Marketing", desc: "Build a brand people follow, trust, and buy from.", tag: "Organic social" },
  { slug: "website-design", icon: Globe, title: "Website Design & Development", desc: "Fast, modern, conversion-optimized websites.", tag: "Web & CRO", metric: "<2s", metricLabel: "avg. load time" },
  { slug: "branding", icon: Palette, title: "Branding & Graphic Design", desc: "A visual identity that makes your business unforgettable.", tag: "Brand identity" },
  { slug: "content-marketing", icon: PenTool, title: "Content Marketing", desc: "Content that builds authority and drives traffic.", tag: "Content & SEO" },
  { slug: "whatsapp-marketing", icon: MessageCircle, title: "WhatsApp Marketing", desc: "Direct, personal, high-converting communication at scale.", tag: "CRM automation", metric: "<5min", metricLabel: "response time" },
  { slug: "email-marketing", icon: Mail, title: "Email Marketing", desc: "Turn your email list into a revenue channel.", tag: "Retention", metric: "4x", metricLabel: "cheaper than cold ads" },
  { slug: "lead-generation", icon: Target, title: "Lead Generation", desc: "A predictable pipeline of qualified prospects.", tag: "Pipeline", metric: "100%", metricLabel: "CRM-tracked leads", highlighted: true },
  { slug: "local-seo", icon: MapPin, title: "Local SEO & GBP Optimization", desc: "Dominate local search and Google Maps results.", tag: "Local visibility" },
];

const stats = [
  { value: 40, suffix: "+", label: "Active campaigns managed", icon: TrendingUp },
  { value: 11, suffix: "", label: "Services under one roof", icon: Rocket },
  { value: 3.2, decimals: 1, suffix: "x", label: "Avg. lead-to-close lift", icon: Award },
];

/* Industries section — Skin & Hair added alongside existing verticals,
   matching the Home and About pages for site-wide consistency. */
const industries = [
  { icon: HomeIcon, label: "Interior Design" },
  { icon: Building2, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Scissors, label: "Skin & Hair" },
  { icon: ShoppingCart, label: "E-Commerce" },
];

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        @keyframes highlight-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(122,193,66,0.0), 0 16px 50px -20px rgba(27,84,199,0.3); }
          50% { box-shadow: 0 0 0 5px rgba(122,193,66,0.06), 0 16px 50px -20px rgba(122,193,66,0.3); }
        }
        .highlight-card { animation: highlight-pulse 3.5s ease-in-out infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 26s linear infinite; }
        .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
        @keyframes underline-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .eyebrow-underline { position: relative; display: inline-flex; }
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
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .highlight-card, .marquee-track, .eyebrow-underline::after, .icon-float {
            animation: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20 md:py-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="icon-float h-3 w-3" strokeWidth={2} />
              Our services
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Complete digital marketing solutions under one roof.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 text-paper/60 sm:mt-5 ${fluid.lead}`}>
              From getting found on Google to converting visitors into
              customers, GK Digital Solutions offers everything your
              business needs to grow online — for interior design, real
              estate, hospitality, skin &amp; hair and e-commerce brands
              across Hyderabad.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick stats strip — added content */}
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
                    <CountUp end={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[10.5px] leading-snug text-paper/50 sm:text-xs">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid — spotlight-hover cards, all 11 original services + tags */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <SpotlightCard
                  highlighted={s.highlighted}
                  className={`rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    s.highlighted
                      ? "border-transparent bg-ink-panel/60 shadow-xl"
                      : "border-line bg-ink-panel/30 hover:border-signal/30"
                  }`}
                >
                  <Link href={`/services/${s.slug}`} className="group flex h-full flex-col gap-4 p-5 sm:p-6">
                    {s.highlighted && (
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
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-10 sm:w-10"
                        style={{
                          background: s.highlighted
                            ? "linear-gradient(135deg, var(--signal), var(--teal))"
                            : "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))",
                        }}
                      >
                        <s.icon className={`h-4 w-4 ${s.highlighted ? "text-white" : "text-signal"}`} strokeWidth={1.75} />
                      </div>
                      {s.metric && (
                        <div className="text-right">
                          <div
                            className="bg-clip-text font-mono text-sm text-transparent sm:text-base"
                            style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                          >
                            {s.metric}
                          </div>
                          <div className="font-mono text-[8px] uppercase tracking-wider text-paper/40 sm:text-[9px]">{s.metricLabel}</div>
                        </div>
                      )}
                    </div>

                    {s.highlighted && (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-teal">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
                        Our guarantee
                      </span>
                    )}

                    <div className="flex-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-paper/40 sm:text-[10px]">{s.tag}</span>
                      <h3 className="mt-1.5 font-display text-base font-semibold text-paper sm:mt-2 sm:text-lg">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-paper/60 sm:text-sm">
                        {s.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="h-px w-0 transition-all duration-300 group-hover:w-10" style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }} />
                      <ArrowUpRight
                        className="h-4 w-4 -translate-x-1 text-paper/0 transition-all group-hover:translate-x-0 group-hover:text-signal group-hover:opacity-100"
                        strokeWidth={2}
                        style={{ opacity: 0 }}
                      />
                    </div>
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve — new section with Skin & Hair added */}
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
                  {[...industries, ...industries].map((c, i) => (
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
              <Link
                href="/industries"
                className="flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-teal hover:underline sm:text-[11px]"
              >
                View all
                <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-panel p-6 sm:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
                <div>
                  <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>
                    Not sure which service you need?
                  </h2>
                  <p className={`mt-2 max-w-lg text-paper/60 ${fluid.body}`}>
                    Let&apos;s talk. We&apos;ll assess your business and
                    recommend the right strategy — no pressure, no jargon.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 font-mono text-[12px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03] sm:w-auto sm:text-[13px]"
                >
                  Get a free consultation
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
    </main>
  );
}