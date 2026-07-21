import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, ShieldCheck, Clock, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services, type ServiceDetail } from "./data/services";
import {
  ServicesCursorAura,
  ServicesStickyCTA,
  ServicesTestimonialCarousel,
  ServicesFAQSection,
} from "@/components/ServicesPageInteractive";

const fluid = {
  hero: "text-[clamp(1.9rem,5.4vw,3rem)] leading-[1.18]",
  h2: "text-[clamp(1.25rem,3.4vw,1.75rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
};

const processSteps = [
  { n: "01", title: "Audit", desc: "We review what's working and what isn't." },
  { n: "02", title: "Strategize", desc: "A plan built around your specific goals." },
  { n: "03", title: "Execute", desc: "We launch, track, and report — no guesswork." },
];

// Trust points that apply to any service, phrased generically since they
// don't depend on per-service data that isn't in the ServiceDetail type.
const trustPoints = [
  { icon: ShieldCheck, title: "Tracked in your CRM", desc: "Every lead this service brings in is tagged and tracked end-to-end, not just reported as an impression." },
  { icon: Clock, title: "Month-to-month", desc: "No 12-month lock-in. We keep the work because it performs, not because of a contract term." },
  { icon: Layers, title: "Fits into the bigger system", desc: "Runs alongside whatever else you have with us — same strategist, same reporting cadence." },
];

// Generic FAQ, applicable across services since it isn't tied to
// service-specific data in the current data model.
const genericFaqs = [
  { q: "How long before I see results?", a: "It depends on the service — paid channels show signal within the first 2–3 weeks, while SEO and content typically take 8–12 weeks to compound. We'll give you a realistic timeline in the audit." },
  { q: "Is this billed separately from other services?", a: "It's scoped as part of one overall engagement, not billed as an isolated add-on — so switching or bundling services doesn't mean starting a new contract." },
  { q: "Do I need to already have a CRM or website?", a: "No — if you don't have one, we can build it as part of the engagement. If you do, we'll work with what's there rather than forcing a rebuild." },
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
    <main className="relative overflow-x-hidden pt-32">
      <ServicesCursorAura />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        .mesh-blob-2 { animation: mesh-drift 18s ease-in-out infinite reverse; }
        @keyframes particle-drift {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translate(var(--px, 24px), -110px); opacity: 0; }
        }
        .hero-particle { animation: particle-drift linear infinite; }
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
          .mesh-blob, .mesh-blob-2, .hero-particle, .cta-border-glow, .shimmer-btn::after {
            animation: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="mesh-blob-2 pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="hero-particle absolute h-1 w-1 rounded-full"
              style={
                {
                  left: `${14 + i * 14}%`,
                  bottom: "-10px",
                  background: i % 2 === 0 ? "var(--signal)" : "var(--teal)",
                  animationDuration: `${9 + (i % 4) * 2}s`,
                  animationDelay: `${i * 1.2}s`,
                  "--px": `${(i % 3) * 16 - 16}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

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
            <h1 className={`mt-5 font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              {service.headline}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className={`mt-5 text-paper/60 ${fluid.lead}`}>
              {service.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="shimmer-btn group relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02]"
                style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
              >
                <span className="relative flex items-center gap-2">
                  Get a free consultation
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </span>
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
              <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-line md:h-80">
                <div
                  className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, var(--signal), transparent 40%, var(--teal))",
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                  aria-hidden="true"
                />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Trust strip — generic, applies to any service */}
      <section className="border-b border-line bg-ink-panel/30 py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={i * 70}>
                <div className="flex gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))" }}
                  >
                    <t.icon className="h-4 w-4 text-signal" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-paper">{t.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-paper/55">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                <div className="group flex h-full items-start gap-3 rounded-xl border border-line bg-ink-panel/40 p-4 text-sm text-paper/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/30 hover:bg-ink-panel">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-signal transition-transform group-hover:scale-110"
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
                <div className="group relative">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink font-mono text-xs text-signal transition-colors group-hover:border-signal/60">
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

      {/* Testimonial carousel */}
      <section className="border-b border-line bg-ink-panel/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-wider text-teal">What clients say</span>
          </Reveal>
          <ServicesTestimonialCarousel />
        </div>
      </section>

      {/* FAQ — uses this service's own FAQs when the data has them, falls
          back to the generic set for any service that doesn't yet */}
      <ServicesFAQSection faqs={service.faqs && service.faqs.length > 0 ? service.faqs : genericFaqs} />

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
            <div
              className="cta-border-glow relative overflow-hidden rounded-2xl border p-10 md:p-14"
              style={{ borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1", background: "var(--ink-panel)" }}
            >
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

      <ServicesStickyCTA />
    </main>
  );
}