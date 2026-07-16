import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "FAQs | GK Digital Solutions",
  description:
    "Answers to common questions about GK Digital Solutions' SEO, PPC, social media, and website design services.",
};

const faqs = [
  { q: "How long does it take to see results from SEO?", a: "SEO is a long-term strategy. Most clients start seeing meaningful ranking improvements within 3–6 months, with continued growth as authority builds over time." },
  { q: "Do you require long-term contracts?", a: "We offer flexible month-to-month options as well as discounted long-term plans. We believe in earning your business through results, not locking you into contracts." },
  { q: "How much should I budget for Google Ads or Meta Ads?", a: "Ad budgets vary based on industry, competition, and goals. During your free consultation, we'll recommend a budget range based on your specific objectives." },
  { q: "Will I own my website and social media accounts?", a: "Yes. All websites, ad accounts, and social media profiles are fully owned by you — we simply manage and optimize them on your behalf." },
  { q: "How do you report results?", a: "You'll receive monthly performance reports covering traffic, rankings, leads, ad performance, and ROI — explained in plain language, not jargon." },
  { q: "Can you work with businesses outside your local area?", a: "Yes, we work with clients remotely across regions and industries, with regular calls and reports to keep communication seamless." },
  { q: "What makes GK Digital Solutions different from other agencies?", a: "We combine full-service capability with a transparent, ROI-first approach — no vanity metrics, no cookie-cutter strategies, just measurable growth." },
  { q: "How do I get started?", a: "Simply book a free consultation. We'll audit your current digital presence and recommend a strategy tailored to your goals." },
];

export default function FaqPage() {
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
              FAQ
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Frequently asked questions.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}