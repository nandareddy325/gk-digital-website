import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { industries, getIndustryBySlug } from "@/components/data/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: `Digital Marketing for ${industry.name} | GK Digital Solutions`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
          <Reveal>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-xs text-paper/50 transition-colors hover:text-signal"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
              All industries
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-wider text-signal">
              Digital Marketing for {industry.name}
            </span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-paper md:text-5xl">
              {industry.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-paper/60">
              {industry.summary}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <Link
              href="/get-audit"
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, var(--signal), var(--teal))",
              }}
            >
              Get a free audit
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Common challenges we solve
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {industry.painPoints.map((point, i) => (
            <Reveal key={point} delay={i * 80}>
              <div className="flex items-start gap-3 rounded-xl border border-line bg-ink-panel/40 p-4">
                <XCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70"
                  strokeWidth={2}
                />
                <span className="text-sm text-paper/60">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-line bg-ink-panel/20 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              What we do for {industry.name.toLowerCase()} businesses
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {industry.services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-ink p-6">
                  <h3 className="font-display text-base font-semibold text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-paper/60">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Why {industry.name.toLowerCase()} businesses work with us
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {industry.whyUs.map((point, i) => (
            <Reveal key={point} delay={i * 80}>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                  strokeWidth={2}
                />
                <span className="text-sm text-paper/60">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 md:pb-28">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-ink-panel/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold text-paper">
                Ready to grow your {industry.name.toLowerCase()} business?
              </h3>
              <p className="mt-1 text-sm text-paper/60">
                Get a free audit and see exactly where you stand.
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
    </>
  );
}