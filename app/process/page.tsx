import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata = {
  title: "Our Digital Marketing Process | GK Digital Solutions",
  description:
    "See how GK Digital Solutions turns strategy into results — our proven 6-step process for SEO, ads, and digital growth campaigns.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

export default function ProcessPage() {
  return (
    <main className="overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
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
          .mesh-blob, .icon-float, .cta-border-glow, .shimmer-btn::after { animation: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="icon-float h-3 w-3" strokeWidth={2} />
              Our process
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              A proven process built for predictable growth.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 max-w-xl text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Six stages, repeated every month — not a one-time setup we
              walk away from. Each step feeds the next, from first audit
              to your next strategy call.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-3 text-xs text-paper/35 sm:mt-4">
              Scroll down — the timeline fills in as you go.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline — scroll-triggered animations live in ProcessTimeline */}
      <section className="relative border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <ProcessTimeline />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <div
              className="cta-border-glow relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm sm:p-10"
              style={{ borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1", background: "var(--ink-panel)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
                style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
                <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>
                  See our process in action.
                </h2>
                <Link
                  href="/contact"
                  className="shimmer-btn group relative flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.03] sm:w-auto sm:text-[13px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <span className="relative">Book your free strategy call</span>
                  <ArrowUpRight
                    className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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