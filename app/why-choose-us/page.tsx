import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Why Choose GK Digital Solutions | Results-Driven Digital Marketing Agency",
  description:
    "Discover why businesses choose GK Digital Solutions for SEO, ads, branding & web design — transparent reporting, proven strategy, and real ROI.",
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

export default function WhyChooseUsPage() {
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
              Why choose us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Why businesses trust GK Digital Solutions to grow their
              online presence.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <div className="h-full bg-ink p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-signal"
                      strokeWidth={1.75}
                    />
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-panel p-10 md:flex-row md:items-center">
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
          </Reveal>
        </div>
      </section>
    </main>
  );
}