import Link from "next/link";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Client Testimonials | GK Digital Solutions Reviews",
  description:
    "Read what our clients say about working with GK Digital Solutions — real feedback on SEO, ads, branding, and web design results.",
};

const testimonials = [
  { quote: "Working with GK Digital Solutions changed how we approach our online presence. Our leads have never been more consistent.", name: "[Client Name]", business: "[Business Name]" },
  { quote: "They didn't just run ads — they understood our business and built a strategy around it. The results speak for themselves.", name: "[Client Name]", business: "[Business Name]" },
  { quote: "Finally, an agency that explains things clearly and delivers what they promise. Our website traffic has grown massively.", name: "[Client Name]", business: "[Business Name]" },
  { quote: "The team at GK Digital Solutions feels like an extension of our own. Responsive, strategic, and genuinely invested in our growth.", name: "[Client Name]", business: "[Business Name]" },
];

export default function TestimonialsPage() {
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
              Testimonials
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              What our clients say.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="h-full rounded-2xl border border-line bg-ink-panel/40 p-8">
                  <Quote className="h-6 w-6 text-signal/60" strokeWidth={1.5} />
                  <p className="mt-4 leading-relaxed text-paper/70">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 font-mono text-[12px] uppercase tracking-wider text-paper/40">
                    {t.name} · {t.business}
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
                Ready to write your own success story?
              </h2>
              <Link
                href="/contact"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
              >
                Get started
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