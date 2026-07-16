import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/components/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | GK Digital Solutions",
  description:
    "Real results from real clients. See how GK Digital Solutions has helped businesses grow with SEO, Ads, and digital marketing.",
};

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <Reveal>
        <span className="font-mono text-[11px] uppercase tracking-wider text-signal">
          Case Studies
        </span>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-paper md:text-5xl">
          Results, not just promises.
        </h1>
        <p className="mt-4 max-w-xl text-base text-paper/60">
          A look at how we&apos;ve helped businesses across industries turn
          their marketing into a predictable growth engine.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.slug} delay={i * 100}>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-ink-panel/40 p-6 transition-colors hover:border-signal/50"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-paper/40">
                {cs.industry}
              </span>
              <h2 className="mt-2 font-display text-xl font-semibold text-paper">
                {cs.client}
              </h2>
              <p className="mt-2.5 flex-1 text-sm text-paper/60">
                {cs.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {cs.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 text-[10px] text-paper/50"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <div className="flex items-center gap-1.5 text-xs text-teal">
                  <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} />
                  {cs.stats[0]?.label}: {cs.stats[0]?.value}
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-paper/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                  strokeWidth={2}
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}