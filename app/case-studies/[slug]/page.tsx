import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudyBySlug } from "@/components/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.client} Case Study | GK Digital Solutions`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 md:py-28">
      <Reveal>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-xs text-paper/50 transition-colors hover:text-signal"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
          All case studies
        </Link>
      </Reveal>

      <Reveal delay={80}>
        <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-wider text-signal">
          {study.industry}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-paper md:text-5xl">
          {study.client}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-paper/60">
          {study.summary}
        </p>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-line py-4">
          <div className="flex items-center gap-1.5 text-xs text-paper/50">
            <Clock className="h-3.5 w-3.5" strokeWidth={2} />
            {study.timeline}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-paper/50">
            <Layers className="h-3.5 w-3.5" strokeWidth={2} />
            {study.services.join(" · ")}
          </div>
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal delay={200}>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-ink-panel/40 p-5 text-center"
            >
              <div className="font-display text-2xl font-bold text-teal md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] text-paper/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Challenge */}
      <Reveal delay={100}>
        <div className="mt-14">
          <h2 className="font-display text-xl font-semibold text-paper">
            The Challenge
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-paper/60">
            {study.challenge}
          </p>
        </div>
      </Reveal>

      {/* Approach */}
      <Reveal delay={100}>
        <div className="mt-10">
          <h2 className="font-display text-xl font-semibold text-paper">
            Our Approach
          </h2>
          <ul className="mt-4 space-y-3">
            {study.approach.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-paper/60"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Results */}
      <Reveal delay={100}>
        <div className="mt-10">
          <h2 className="font-display text-xl font-semibold text-paper">
            The Results
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-paper/60">
            {study.results}
          </p>
        </div>
      </Reveal>

      {/* Testimonial (optional) */}
      {study.testimonial && (
        <Reveal delay={100}>
          <blockquote className="mt-12 rounded-2xl border border-line bg-ink-panel/40 p-8">
            <p className="font-display text-lg italic leading-relaxed text-paper">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-xs text-paper/50">
              {study.testimonial.author} — {study.testimonial.role}
            </footer>
          </blockquote>
        </Reveal>
      )}

      {/* CTA */}
      <Reveal delay={150}>
        <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-line bg-ink-panel/40 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-paper">
              Want results like this for your business?
            </h3>
            <p className="mt-1 text-sm text-paper/60">
              Get a free audit and see where you stand.
            </p>
          </div>
          <Link
            href="/get-audit"
            className="group flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
            style={{
              background: "linear-gradient(90deg, var(--signal), var(--teal))",
            }}
          >
            Get free audit
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}