import Link from "next/link";
import { ArrowUpRight, Sparkles, Lock, FileText, Users, ShieldCheck, Check, X, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import PricingPlans from "@/components/PricingPlans";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Digital Marketing Pricing Plans | GK Digital Solutions",
  description:
    "Explore GK Digital Solutions' Starter, Growth, and Full-Scale pricing plans for SEO, ads, social media, and web design services.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.85rem,1.6vw,1rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

const trustPoints = [
  { icon: Lock, title: "You own everything", desc: "Ad accounts, creative assets and CRM data stay in your name, always." },
  { icon: FileText, title: "No lock-in contracts", desc: "Month-to-month by default — annual billing is optional, not required." },
  { icon: Users, title: "One dedicated strategist", desc: "On Growth and Full-Scale plans, the person who audits your account runs it." },
  { icon: ShieldCheck, title: "Weekly, plain-language reports", desc: "Cost-per-lead and cost-per-close, no jargon to translate." },
];

const comparisonRows: { label: string; typical: string; us: string }[] = [
  { label: "Contracts", typical: "12-month lock-in", us: "Month-to-month, annual optional" },
  { label: "Ad spend billing", typical: "Bundled, hard to audit", us: "Billed separately, fully transparent" },
  { label: "Lead tracking", typical: "Platform dashboards only", us: "100% tracked in your CRM" },
  { label: "Who runs your account", typical: "A rotating account exec", us: "The same strategist, every time" },
];

const faqs = [
  {
    q: "Do you require long-term contracts?",
    a: "No — flexible month-to-month plans are available, with a discount for annual commitments.",
  },
  {
    q: "Is ad spend included in the price?",
    a: "No, management fees and ad spend are billed separately so you always know exactly what's going toward media vs. our work.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade at the start of any billing cycle as your needs change.",
  },
  {
    q: "How will I pay in the future?",
    a: "We're setting up online subscription billing so you'll be able to pay and manage your plan directly — for now, billing is arranged after your onboarding call.",
  },
  {
    q: "What happens after I click \"Get started\"?",
    a: "You're routed to a short contact form with your chosen plan pre-filled. We'll follow up within 24 hours to confirm scope and kick off the audit.",
  },
];

export default function PricingPage() {
  return (
    <main className="overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
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
        @keyframes border-glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .cta-border-glow { animation: border-glow 4s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .eyebrow-underline::after, .icon-float, .cta-border-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl min-w-0 px-5 text-center sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="icon-float h-3 w-3" strokeWidth={2} />
              Pricing
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Flexible plans built to fit your business stage.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mx-auto mt-4 max-w-xl text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Every plan includes dedicated support, transparent reporting,
              and strategy built around your goals. Need something
              custom? We&apos;ll build a plan around your specific needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans + toggle */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <PricingPlans />
        </div>
      </section>

      {/* Trust strip — added content */}
      <section className="border-b border-line bg-ink-panel/30 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={i * 70}>
                <div className="flex min-w-0 gap-2.5 sm:gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9"
                    style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))" }}
                  >
                    <t.icon className="h-3.5 w-3.5 text-signal sm:h-4 sm:w-4" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[12.5px] font-semibold leading-snug text-paper sm:text-sm">{t.title}</h3>
                    <p className="mt-1 hidden text-xs leading-relaxed text-paper/55 sm:block">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison — added content, reused pattern for site consistency */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Why it's different</span>
            <h2 className={`mt-2 max-w-xl font-display font-semibold text-paper ${fluid.h2}`}>
              What your plan actually includes
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 space-y-3 sm:mt-10 sm:hidden">
              {comparisonRows.map((row) => (
                <div key={row.label} className="rounded-xl border border-line bg-ink-panel/30 p-4">
                  <div className="text-[13px] font-semibold text-paper">{row.label}</div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-1.5 min-w-0">
                      <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-paper/30" strokeWidth={2} />
                      <span className="text-[12px] leading-snug text-paper/50">{row.typical}</span>
                    </div>
                    <div
                      className="flex min-w-0 items-start gap-1.5 rounded-lg p-2 -m-2"
                      style={{ background: "linear-gradient(180deg, rgba(27,84,199,0.08), rgba(122,193,66,0.05))" }}
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
                      <span className="text-[12px] leading-snug text-paper">{row.us}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 hidden overflow-hidden rounded-2xl border border-line sm:block">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-ink-panel/60 backdrop-blur-sm">
                <div className="p-5 font-mono text-[11px] uppercase tracking-wider text-paper/40">&nbsp;</div>
                <div className="border-l border-line p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">Typical agency</span>
                </div>
                <div
                  className="relative border-l border-line p-5"
                  style={{ background: "linear-gradient(180deg, rgba(27,84,199,0.10), rgba(122,193,66,0.06))" }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-teal">GK Digital Solutions</span>
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-[1.1fr_1fr_1fr] ${i % 2 === 0 ? "bg-ink" : "bg-ink-panel/20"}`}>
                  <div className="flex items-center p-5 text-sm font-medium text-paper/80">{row.label}</div>
                  <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper/50">
                    <X className="h-3.5 w-3.5 shrink-0 text-paper/30" strokeWidth={2} />
                    {row.typical}
                  </div>
                  <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper">
                    <Check className="h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial — added content */}
      <section className="border-b border-line bg-ink-panel/40 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl min-w-0 px-5 text-center sm:px-6">
          <Reveal>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={0} style={{ fill: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }} />
              ))}
            </div>
            <p className={`mt-4 font-display leading-relaxed text-paper sm:mt-5 ${fluid.h2}`}>
              &ldquo;The Growth plan paid for itself in the first month —
              we finally know our real cost-per-lead instead of
              guessing.&rdquo;
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:mt-4 sm:text-[12px]">
              — Client, Hyderabad
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline mx-auto flex w-fit font-mono uppercase text-teal ${fluid.eyebrow}`}>Questions</span>
            <h2 className={`mt-2 text-center font-display font-semibold text-paper ${fluid.h2}`}>
              Pricing questions
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <div className="h-full min-w-0 rounded-2xl border border-line bg-ink-panel/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 sm:p-6">
                  <h3 className="font-display text-[13.5px] font-semibold text-paper sm:text-sm">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-paper/60 sm:text-sm">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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
              <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
                <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>
                  Not sure which plan fits your business?
                </h2>
                <Link
                  href="/contact"
                  className="group flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 font-mono text-[12px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03] sm:w-auto sm:text-[13px]"
                >
                  Get a free custom quote
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