import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Work & Case Studies | GK Digital Solutions Results",
  description:
    "See real results from GK Digital Solutions' SEO, ads, and branding campaigns — case studies showing measurable growth across industries.",
};

const caseStudies = [
  { title: "Real Estate Brand", tag: "Local SEO & Lead Generation" },
  { title: "E-Commerce Store", tag: "Google Ads & Meta Ads ROI" },
  { title: "Healthcare Clinic", tag: "Website Redesign & Local SEO" },
  { title: "Restaurant Chain", tag: "Social Media Growth" },
];

export default function PortfolioPage() {
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
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Real businesses. Real growth. Real numbers.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-dashed border-line bg-ink-panel/30 p-8">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
                    {cs.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                    {cs.title}
                  </h3>
                  <p className="mt-4 text-sm text-paper/40">
                    Case study coming soon — add real challenge, strategy
                    and results here once client data is available.
                  </p>
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
                Your success story could be next.
              </h2>
              <Link
                href="/contact"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
              >
                Start your project
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