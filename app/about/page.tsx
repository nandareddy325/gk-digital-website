import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Users,
  Lightbulb,
  Eye,
  Compass,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Heart,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import TalkToTeamButton from "@/components/TalkToTeamButton";

export const metadata = {
  title: "About GK Digital Solutions | Our Story, Mission & Team",
  description:
    "Learn about GK Digital Solutions — a results-driven digital marketing agency committed to helping businesses grow through SEO, ads, branding, and web design.",
};

const stats = [
  { value: "40+", label: "Active campaigns managed" },
  { value: "18", label: "Brands live right now" },
  { value: "3.2x", label: "Avg. lead-to-close lift" },
  { value: "₹2.4Cr+", label: "Ad spend tracked" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    desc: "Clear reporting, honest timelines, no vanity metrics.",
  },
  {
    icon: TrendingUp,
    title: "Results-First Thinking",
    desc: "Every campaign is built around ROI, not just impressions.",
  },
  {
    icon: Lightbulb,
    title: "Creativity with Purpose",
    desc: "Bold ideas that are grounded in strategy, not guesswork.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    desc: "We grow when you grow — your success is the scoreboard.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    desc: "We stay ahead of algorithm changes, platform trends, and consumer behavior.",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Strategy First",
    desc: "We don't believe in one-size-fits-all packages. Every business gets a strategy built around their specific goals and audience.",
  },
  {
    icon: Lightbulb,
    title: "Data + Creativity",
    desc: "Our team blends analytical thinking with creative execution, so campaigns aren't just data-driven — they're memorable.",
  },
  {
    icon: Users,
    title: "One Team, Every Channel",
    desc: "Strategists, creators, designers and developers working together, so your brand stays consistent everywhere it shows up.",
  },
];

const team = [
  {
    role: "Strategy & Growth",
    desc: "Audits accounts, builds channel roadmaps, and owns the numbers behind every campaign.",
  },
  {
    role: "Paid Media",
    desc: "Runs and optimizes Google, Meta and WhatsApp campaigns against real close rates, not just clicks.",
  },
  {
    role: "Creative & Content",
    desc: "Shoots, edits and writes the assets that make campaigns stop the scroll.",
  },
  {
    role: "Web & CRM",
    desc: "Builds the websites, landing pages and CRM pipelines that turn traffic into tracked leads.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-24">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/50">
              <Compass className="h-3 w-3" strokeWidth={2} />
              About us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl">
              Built on results.
              <br />
              Driven by growth.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">
              We&apos;re a full-service digital growth partner for businesses
              that want more than likes and impressions — real leads, real
              revenue, and a team that treats your budget like it&apos;s our
              own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-line py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-semibold text-signal md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-paper/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-line py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Our story
            </h2>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={80}>
              <p className="leading-relaxed text-paper/70">
                GK Digital Solutions was founded on a simple belief:
                businesses deserve marketing that actually works, not just
                marketing that looks good on paper. We saw too many
                companies burning budgets on scattered campaigns, generic
                websites, and social media accounts with no strategy
                behind them — and we set out to change that.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="leading-relaxed text-paper/70">
                Today, we&apos;re a full-service digital growth partner,
                helping businesses across multiple industries build
                stronger online visibility, generate qualified leads, and
                convert digital attention into real revenue. We combine
                technical expertise with creative thinking, and we measure
                our success the same way you do — by results.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="leading-relaxed text-paper/70">
                Every engagement starts with an honest audit, not a sales
                pitch. If we don&apos;t think we can move the needle for
                you, we&apos;ll tell you that too.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-ink-panel/40 p-8">
                <Target className="h-6 w-6 text-signal" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl font-semibold text-paper">
                  Our Mission
                </h3>
                <p className="mt-3 leading-relaxed text-paper/60">
                  To empower businesses of every size with data-driven
                  digital marketing strategies that generate real,
                  measurable growth — more visibility, more leads, and
                  more revenue — through honest work and creative
                  excellence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-line bg-ink-panel/40 p-8">
                <Eye className="h-6 w-6 text-teal" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl font-semibold text-paper">
                  Our Vision
                </h3>
                <p className="mt-3 leading-relaxed text-paper/60">
                  To become the most trusted digital growth partner for
                  ambitious brands, known for turning digital marketing
                  budgets into predictable, scalable business results.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="max-w-lg font-display text-2xl font-semibold text-paper md:text-3xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="group h-full bg-ink p-8 transition-colors hover:bg-ink-panel">
                  <v.icon
                    className="h-6 w-6 text-signal transition-transform group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="max-w-lg font-display text-2xl font-semibold text-paper md:text-3xl">
              What makes us different
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="group h-full bg-ink p-8 transition-colors hover:bg-ink-panel">
                  <d.icon
                    className="h-6 w-6 text-signal transition-transform group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {d.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Our team
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-paper/60">
              SEO specialists, paid media strategists, content creators,
              graphic designers, web developers, and account managers —
              all working together under one roof so your digital
              strategy stays consistent across every channel.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={i * 70}>
                <div className="h-full rounded-2xl border border-line bg-ink-panel/30 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line font-mono text-xs text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-paper">
                    {member.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {member.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                  Let&apos;s build something great together.
                </h2>
                <TalkToTeamButton />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}