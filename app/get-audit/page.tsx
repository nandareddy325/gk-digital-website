import type { Metadata } from "next";
import {
  Search,
  MousePointerClick,
  Share2,
  Globe,
  TrendingUp,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Digital Marketing Audit | GK Digital Solutions",
  description:
    "Get a free, no-obligation audit of your website, SEO, and ad accounts from GK Digital Solutions. Find out exactly where you're losing leads and revenue.",
};

const auditItems = [
  {
    icon: Search,
    title: "SEO Health Check",
    desc: "On-page issues, keyword gaps, technical errors holding your rankings back.",
  },
  {
    icon: MousePointerClick,
    title: "Ad Account Review",
    desc: "Wasted spend, weak targeting, and quality score issues in Google & Meta Ads.",
  },
  {
    icon: Globe,
    title: "Website Conversion Audit",
    desc: "Where visitors drop off before becoming leads — speed, UX, CTAs.",
  },
  {
    icon: Share2,
    title: "Social Presence Review",
    desc: "Content consistency, engagement quality, and missed opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Competitor Snapshot",
    desc: "How you stack up against 2–3 direct competitors in your market.",
  },
  {
    icon: ShieldCheck,
    title: "Actionable Report",
    desc: "A clear, prioritized list of fixes — not just a list of problems.",
  },
];

const steps = [
  {
    step: "01",
    title: "Fill the form",
    desc: "Tell us about your business and share your website / ad account details.",
  },
  {
    step: "02",
    title: "We audit",
    desc: "Our team reviews your digital presence across SEO, ads, and website — usually within 48 hours.",
  },
  {
    step: "03",
    title: "You get the report",
    desc: "A no-jargon breakdown of what's working, what's not, and what to fix first — free, no strings attached.",
  },
];

export default function GetAuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper/50">
              <Clock className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
              Free · Takes 48 hours · No obligation
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-paper md:text-5xl">
              Find out exactly where your marketing is{" "}
              <span className="brand-gradient-text">leaking leads.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-base text-paper/60">
              Get a free, detailed audit of your website, SEO, and ad
              accounts from our team — the same process we use before
              onboarding every client. No sales pitch, just the numbers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            What&apos;s included in your audit
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {auditItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-ink-panel/40 p-6">
                <item.icon className="h-6 w-6 text-signal" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-paper/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-ink-panel/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              How it works
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div>
                  <span className="font-mono text-3xl font-bold text-signal/40">
                    {s.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-paper/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + trust panel */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                Get your free audit
              </h2>
              <p className="mt-3 text-sm text-paper/60">
                Share a few details below and our team will get back to you
                within 24–48 hours with your audit findings.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "100% free, no credit card or commitment",
                  "Reviewed by a real strategist, not a bot",
                  "Delivered as a simple, prioritized action list",
                  "Works whether or not you decide to work with us",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-paper/60"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                      strokeWidth={2}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}