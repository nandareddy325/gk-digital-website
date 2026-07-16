import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Digital Marketing Process | GK Digital Solutions",
  description:
    "See how GK Digital Solutions turns strategy into results — our proven 6-step process for SEO, ads, and digital growth campaigns.",
};

const steps = [
  { n: "01", title: "Discover", desc: "We start with a deep-dive audit of your business, website, competitors, and target audience to understand exactly where you stand and where the opportunities are." },
  { n: "02", title: "Strategize", desc: "Using audit insights, we build a custom digital marketing roadmap — choosing the right mix of SEO, paid ads, social, and content based on your goals and budget." },
  { n: "03", title: "Design & Build", desc: "Our creative and development team builds the assets your strategy needs — from websites and landing pages to ad creatives and content calendars." },
  { n: "04", title: "Launch & Execute", desc: "We launch campaigns across the selected channels, with careful tracking set up from day one so every action is measurable." },
  { n: "05", title: "Optimize & Scale", desc: "We continuously monitor performance, run A/B tests, and refine targeting, creative, and budget allocation to improve results month over month." },
  { n: "06", title: "Report & Review", desc: "You receive clear, jargon-free monthly reports along with strategy calls to review performance and plan the next phase of growth." },
];

export default function ProcessPage() {
  return (
    <main className="pt-32">
      <section className="relative overflow-hidden border-b border-line py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/50">
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              Our process
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              A proven process built for predictable growth.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-10">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <div className="flex gap-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line font-mono text-sm text-signal">
                    {step.n}
                  </div>
                  <div className="border-b border-line pb-10">
                    <h3 className="font-display text-xl font-semibold text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-paper/60">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-panel p-10 md:flex-row md:items-center">
              <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                See our process in action.
              </h2>
              <Link
                href="/contact"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
              >
                Book your free strategy call
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}