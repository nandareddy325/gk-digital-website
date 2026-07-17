import Link from "next/link";
import { Sparkles, HelpCircle, Target, Wallet, Rocket, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "FAQs | GK Digital Solutions",
  description:
    "Answers to common questions about GK Digital Solutions' SEO, PPC, social media, and website design services.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.2rem,3vw,1.5rem)] leading-[1.25]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.85rem,1.6vw,1rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

/* Grouped into categories — same underlying content as before, plus new
   questions covering Skin & Hair (industries update) and Razorpay billing
   (pricing update), so the FAQ stays current with the rest of the site. */
const faqCategories = [
  {
    title: "General",
    icon: HelpCircle,
    items: [
      { q: "What makes GK Digital Solutions different from other agencies?", a: "We combine full-service capability with a transparent, ROI-first approach — no vanity metrics, no cookie-cutter strategies, just measurable growth." },
      { q: "Can you work with businesses outside your local area?", a: "Yes, we work with clients remotely across regions and industries, with regular calls and reports to keep communication seamless." },
      { q: "What industries do you specialize in?", a: "Our deepest playbooks are in interior design, real estate, hospitality and skin & hair clinics — but we also run campaigns for e-commerce, education, fitness and several other verticals." },
    ],
  },
  {
    title: "Services & Strategy",
    icon: Target,
    items: [
      { q: "How long does it take to see results from SEO?", a: "SEO is a long-term strategy. Most clients start seeing meaningful ranking improvements within 3–6 months, with continued growth as authority builds over time." },
      { q: "How much should I budget for Google Ads or Meta Ads?", a: "Ad budgets vary based on industry, competition, and goals. During your free consultation, we'll recommend a budget range based on your specific objectives." },
      { q: "Will I own my website and social media accounts?", a: "Yes. All websites, ad accounts, and social media profiles are fully owned by you — we simply manage and optimize them on your behalf." },
      { q: "How do you report results?", a: "You'll receive monthly performance reports covering traffic, rankings, leads, ad performance, and ROI — explained in plain language, not jargon." },
      { q: "Is there a guarantee on results?", a: "We don't promise specific rankings or lead volumes, since outcomes depend on factors like your market and website — but every plan includes 100% CRM-tracked leads, so you always know exactly what your spend is producing." },
    ],
  },
  {
    title: "Pricing & Payments",
    icon: Wallet,
    items: [
      { q: "Do you require long-term contracts?", a: "We offer flexible month-to-month options as well as discounted long-term plans. We believe in earning your business through results, not locking you into contracts." },
      { q: "Is ad spend included in the price?", a: "No — management fees and ad spend are billed separately, so you always know exactly what's going toward media vs. our work." },
      { q: "How will I pay for my plan?", a: "We're rolling out online subscription billing via Razorpay for a smoother checkout experience. Until then, invoices are shared and payments arranged manually after your onboarding call." },
    ],
  },
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { q: "How do I get started?", a: "Simply book a free consultation. We'll audit your current digital presence and recommend a strategy tailored to your goals." },
      { q: "What does the onboarding process look like?", a: "After your audit call, we build campaigns, landing pages and CRM pipeline stages together — so from day one you can see cost-per-lead and cost-per-close side by side." },
    ],
  },
];

export default function FaqPage() {
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
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .eyebrow-underline::after, .icon-float, .cta-border-glow, .shimmer-btn::after {
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
              FAQ
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Frequently asked questions.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mx-auto mt-4 max-w-xl text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Everything you&apos;d ask on a first call — strategy, pricing,
              ownership and how we work — answered upfront.
            </p>
          </Reveal>

          {/* Category quick-nav — added content */}
          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-8">
              {faqCategories.map((cat) => (
                <a
                  key={cat.title}
                  href={`#${cat.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[11px] text-paper/60 transition-colors hover:border-signal/40 hover:text-signal sm:text-xs"
                >
                  <cat.icon className="h-3 w-3 shrink-0" strokeWidth={2} />
                  {cat.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categorized FAQ sections */}
      <div className="mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
        {faqCategories.map((cat, ci) => (
          <section
            key={cat.title}
            id={cat.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className="scroll-mt-28 border-b border-line py-10 last:border-b-0 sm:py-14"
          >
            <Reveal delay={ci * 40}>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10"
                  style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))" }}
                >
                  <cat.icon className="h-4 w-4 text-signal sm:h-4.5 sm:w-4.5" strokeWidth={1.75} />
                </div>
                <h2 className={`eyebrow-underline font-display font-semibold text-paper ${fluid.h2}`}>
                  {cat.title}
                </h2>
              </div>
            </Reveal>

            <Reveal delay={ci * 40 + 80}>
              <div className="mt-5 sm:mt-6">
                <FaqAccordion items={cat.items} />
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      {/* CTA — added content */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <div
              className="cta-border-glow relative overflow-hidden rounded-2xl border p-6 text-center backdrop-blur-sm sm:p-10"
              style={{ borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1", background: "var(--ink-panel)" }}
            >
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
                style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                aria-hidden="true"
              />
              <MessageCircle className="icon-float relative mx-auto h-6 w-6 text-signal" strokeWidth={1.75} />
              <h2 className={`relative mt-4 font-display font-semibold text-paper ${fluid.h2}`}>
                Still have a question?
              </h2>
              <p className={`relative mx-auto mt-2 max-w-md text-paper/60 ${fluid.body}`}>
                No pressure, no jargon — just tell us what you&apos;re
                trying to figure out and we&apos;ll answer directly.
              </p>
              <Link
                href="/contact"
                className="shimmer-btn relative mt-6 inline-flex min-h-[46px] items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.03] sm:text-[13px]"
                style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
              >
                <span className="relative">Ask us directly</span>
                <ArrowUpRight className="relative h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}