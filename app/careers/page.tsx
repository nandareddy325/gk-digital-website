import type { Metadata } from "next";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers | GK Digital Solutions",
  description:
    "Join the GK Digital Solutions team in Hyderabad. Explore current openings in digital marketing, design, and client management.",
};

// Edit this list as roles open/close — no other changes needed elsewhere.
const openPositions: {
  title: string;
  type: string;
  location: string;
  department: string;
}[] = [
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Hyderabad (On-site)",
    department: "Marketing",
  },
  {
    title: "Performance Ads Specialist (Google & Meta)",
    type: "Full-time",
    location: "Hyderabad (On-site)",
    department: "Marketing",
  },
  {
    title: "Client Servicing Associate",
    type: "Full-time",
    location: "Hyderabad (On-site)",
    department: "Client Success",
  },
];

const values = [
  {
    icon: TrendingUp,
    title: "Real ownership",
    desc: "You'll run actual client campaigns from week one, not just observe.",
  },
  {
    icon: Users,
    title: "Small, sharp team",
    desc: "No bureaucracy — direct access to leadership and fast decisions.",
  },
  {
    icon: Heart,
    title: "Growth-first culture",
    desc: "We invest in upskilling — AI tools, new platforms, certifications.",
  },
  {
    icon: Briefcase,
    title: "Build with us",
    desc: "GKA1 Enterprises is scaling across digital marketing and SaaS — early team members grow with the company.",
  },
];

const APPLY_EMAIL = "careers@gkdigitalsolutions.in";
const APPLY_WHATSAPP = "https://wa.me/91XXXXXXXXXX";

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-wider text-signal">
              Careers
            </span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-paper md:text-5xl">
              Build your career at{" "}
              <span className="brand-gradient-text">GK Digital Solutions.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-paper/60">
              We&apos;re a growing digital marketing team based in Hyderabad,
              working with real clients on real budgets. If you want to learn
              fast and own your work, we&apos;d like to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Why work with us
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-ink-panel/40 p-6">
                <v.icon className="h-6 w-6 text-signal" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-semibold text-paper">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-paper/60">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Open positions */}
      <section className="border-y border-line bg-ink-panel/20 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Open positions
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {openPositions.length > 0 ? (
              openPositions.map((role, i) => (
                <Reveal key={role.title} delay={i * 80}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-line bg-ink p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-paper/40">
                        {role.department}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-semibold text-paper">
                        {role.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-xs text-paper/50">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(
                        role.title
                      )}`}
                      className="shrink-0 rounded-full px-5 py-2.5 text-center font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--signal), var(--teal))",
                      }}
                    >
                      Apply now
                    </a>
                  </div>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <p className="text-sm text-paper/60">
                  No open positions right now — but we&apos;re always happy to
                  hear from good people. Send us your profile below.
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* General application CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-line bg-ink-panel/40 p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Don&apos;t see a role that fits?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-paper/60">
              We&apos;re always open to meeting people who are sharp and want
              to grow fast. Send your resume and a short note about what you&apos;d
              like to work on.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${APPLY_EMAIL}?subject=General Application`}
                className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02] sm:w-auto"
                style={{
                  background:
                    "linear-gradient(90deg, var(--signal), var(--teal))",
                }}
              >
                <Mail className="h-4 w-4" strokeWidth={2} />
                Email your resume
              </a>
              <a
                href={APPLY_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-paper/70 transition-colors hover:border-signal/50 hover:text-signal sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}