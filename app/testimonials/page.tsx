import Link from "next/link";
import { ArrowUpRight, Quote, Sparkles, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Client Testimonials | GK Digital Solutions Reviews",
  description:
    "Read what our clients say about working with GK Digital Solutions — real feedback on SEO, ads, branding, and web design results.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  stat: "text-[clamp(1.5rem,4.5vw,2.25rem)]",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

/* NOTE: name / business fields are still placeholders — swap in real client
   names and businesses (with their permission) before this page goes live.
   The `industry` tag is new, added so the cards can show which vertical
   each review is from, consistent with the Industries page. */
const testimonials = [
  { quote: "Working with GK Digital Solutions changed how we approach our online presence. Our leads have never been more consistent.", name: "[Client Name]", business: "[Business Name]", industry: "Interior Design", rating: 5 },
  { quote: "They didn't just run ads — they understood our business and built a strategy around it. The results speak for themselves.", name: "[Client Name]", business: "[Business Name]", industry: "Real Estate", rating: 5 },
  { quote: "Finally, an agency that explains things clearly and delivers what they promise. Our website traffic has grown massively.", name: "[Client Name]", business: "[Business Name]", industry: "Hospitality", rating: 5 },
  { quote: "The team at GK Digital Solutions feels like an extension of our own. Responsive, strategic, and genuinely invested in our growth.", name: "[Client Name]", business: "[Business Name]", industry: "Skin & Hair", rating: 5 },
];

const stats = [
  { end: 18, suffix: "+", label: "Brands we work with" },
  { end: 40, suffix: "+", label: "Campaigns managed" },
  { end: 4.8, decimals: 1, suffix: "★", label: "Avg. client rating" },
];

export default function TestimonialsPage() {
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
              Testimonials
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              What our clients say.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Real feedback from brands across interior design, real
              estate, hospitality and skin &amp; hair — on the strategy,
              the reporting, and the results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats strip — added content */}
      <section className="border-b border-line py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="min-w-0 rounded-xl border border-line bg-ink-panel/30 p-3.5 text-center sm:p-5">
                  <div
                    className={`bg-clip-text font-mono font-semibold text-transparent ${fluid.stat}`}
                    style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    <CountUp end={s.end} decimals={s.decimals ?? 0} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[10.5px] leading-snug text-paper/50 sm:text-xs">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial cards */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 70}>
                <SpotlightCard className="h-full rounded-2xl border border-line bg-ink-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 sm:p-8">
                  <div className="flex items-start justify-between">
                    <Quote className="h-6 w-6 text-signal/60" strokeWidth={1.5} />
                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-teal sm:text-[10px]">
                      {t.industry}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-0.5">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star
                        key={si}
                        className="h-3.5 w-3.5"
                        strokeWidth={0}
                        style={{ fill: si % 2 === 0 ? "var(--signal)" : "var(--teal)" }}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-[13.5px] leading-relaxed text-paper/70 sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:text-[12px]">
                    {t.name} · {t.business}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-6 text-center text-[11px] text-paper/35 sm:text-xs">
              Client names shown here are pending permission for public use — full case studies coming soon.
            </p>
          </Reveal>
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
                  Ready to write your own success story?
                </h2>
                <Link
                  href="/contact"
                  className="shimmer-btn group relative flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.03] sm:w-auto sm:text-[13px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <span className="relative">Get started</span>
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