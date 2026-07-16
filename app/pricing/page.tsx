import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import PricingPlans from "@/components/PricingPlans";

export const metadata = {
  title: "Digital Marketing Pricing Plans | GK Digital Solutions",
  description:
    "Explore GK Digital Solutions' Starter, Growth, and Full-Scale pricing plans for SEO, ads, social media, and web design services.",
};

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
];

export default function PricingPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/50">
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              Pricing
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Flexible plans built to fit your business stage.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-paper/60">
              Every plan includes dedicated support, transparent reporting,
              and strategy built around your goals. Need something
              custom? We&apos;ll build a plan around your specific needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans + toggle + comparison table */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <PricingPlans />
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold text-paper md:text-3xl">
              Pricing questions
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 90}>
                <div className="h-full rounded-2xl border border-line bg-ink-panel/30 p-6">
                  <h3 className="font-display text-sm font-semibold text-paper">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                  Not sure which plan fits your business?
                </h2>
                <Link
                  href="/contact"
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
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
