import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services, type ServiceDetail } from "./data/services";

const processSteps = [
  { n: "01", title: "Audit", desc: "We review what's working and what isn't." },
  { n: "02", title: "Strategize", desc: "A plan built around your specific goals." },
  { n: "03", title: "Execute", desc: "We launch, track, and report — no guesswork." },
];

export default function ServiceDetailTemplate({
  service,
}: {
  service: ServiceDetail;
}) {
  const related = services
    .filter((s) => s && s.slug && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <Link
              href="/services"
              className="font-mono text-[12px] uppercase tracking-wider text-paper/40 transition-colors hover:text-signal"
            >
              ← All services
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <span
              className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white"
              style={{
                background: "linear-gradient(90deg, var(--signal), var(--teal))",
              }}
            >
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              {service.title}
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              {service.headline}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 text-lg leading-relaxed text-paper/60">
              {service.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
              >
                Get a free consultation
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image, if available */}
      {service.image && (
        <section className="border-b border-line py-12">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-line md:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* What's included */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-paper">
              What&apos;s included
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.included.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-ink-panel/40 p-4 text-sm text-paper/70 transition-colors hover:bg-ink-panel">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                    strokeWidth={2}
                  />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-paper">
              How it works
            </h2>
          </Reveal>
          <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="absolute left-0 right-0 top-[calc(0.9rem)] hidden h-px bg-line md:block" />
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90}>
                <div className="relative">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink font-mono text-xs text-signal">
                    {step.n}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="border-b border-line py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-paper">
                Explore related services
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col justify-between gap-4 bg-ink p-6 transition-colors hover:bg-ink-panel"
                  >
                    <div>
                      <h3 className="font-display text-base font-semibold text-paper">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper/60">
                        {s.headline}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-paper/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                      strokeWidth={2}
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
                  Ready to talk about {service.title.toLowerCase()}?
                </h2>
                <Link
                  href="/contact"
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
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