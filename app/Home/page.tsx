"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Target,
  Search,
  MessageCircle,
  Palette,
  TrendingUp,
  Mail,
  Star,
  Building2,
  Home as HomeIcon,
  ShoppingCart,
  UtensilsCrossed,
  CheckCircle2,
  Layout,
  BarChart3,
  X,
  Check,
  Plus,
  Minus,
  Lock,
  Users,
  FileText,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const WHATSAPP_LINK =
  "https://wa.me/917569622606?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20GK%20Digital%20Solutions%27%20services.";

// ---------- Global page-level flourishes ----------
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--signal), var(--teal))",
        }}
      />
    </div>
  );
}

// Fine grain overlay — adds a premium, filmic texture instead of flat gradients
function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[55] h-full w-full opacity-[0.035] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="grain-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  );
}

// Chevron divider — echoes the "K" stroke in the logo mark
function ChevronDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex justify-center ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
      <svg
        width="44"
        height="22"
        viewBox="0 0 44 22"
        className="chevron-divider relative bg-ink px-2"
      >
        <defs>
          <linearGradient id="chev-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--signal)" />
            <stop offset="100%" stopColor="var(--teal)" />
          </linearGradient>
        </defs>
        <path
          d="M4 3 L22 19 L40 3"
          stroke="url(#chev-grad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ---------- PulseLine ----------
function PulseLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 160"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pulse-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0" />
          <stop offset="10%" stopColor="var(--signal)" stopOpacity="1" />
          <stop offset="55%" stopColor="var(--teal)" stopOpacity="1" />
          <stop offset="90%" stopColor="var(--teal)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
        <filter id="pulse-glow" x="-20%" y="-100%" width="140%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M0,120 L90,120 L120,60 L150,140 L180,40 L210,120 L260,120 L290,90 L320,120 L420,120 L450,70 L480,130 L510,50 L540,120 L620,120 L650,95 L680,120 L780,120 L810,55 L840,135 L870,30 L900,120 L980,120 L1010,85 L1040,120 L1200,120"
        stroke="var(--line)"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M0,120 L90,120 L120,60 L150,140 L180,40 L210,120 L260,120 L290,90 L320,120 L420,120 L450,70 L480,130 L510,50 L540,120 L620,120 L650,95 L680,120 L780,120 L810,55 L840,135 L870,30 L900,120 L980,120 L1010,85 L1040,120 L1200,120"
        stroke="url(#pulse-fade)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pulse-path"
        filter="url(#pulse-glow)"
        opacity="0.9"
      />
      <circle cx="1040" cy="120" r="8" fill="var(--teal)" opacity="0.25" className="blink-dot" />
      <circle cx="1040" cy="120" r="4" fill="var(--teal)" className="blink-dot" />
    </svg>
  );
}

// ---------- Hero image mockup ----------
function DashboardMockup() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    el.style.setProperty("--tilt-x", `${y}deg`);
    el.style.setProperty("--tilt-y", `${x}deg`);
  };

  const handleLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div className="relative block">
      <style>{`
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes image-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .mockup-image {
          animation: image-float 7s ease-in-out infinite;
          transform: perspective(1400px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
          transition: transform 0.25s ease-out;
        }
        .mockup-badge { animation: badge-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mockup-image, .mockup-badge { animation: none !important; transform: none !important; }
        }
      `}</style>

      <div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="mockup-image relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-2xl"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-60"
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
          src="/hero-dashboard.png"
          alt="GK Digital Solutions analytics dashboard"
          width={1100}
          height={733}
          priority
          className="h-auto w-full rounded-2xl ring-1 ring-line/60 shadow-2xl"
        />

        <div
          className="mockup-badge absolute -left-6 top-8 hidden items-center gap-2 rounded-xl border border-line bg-ink-panel/90 px-4 py-3 shadow-xl backdrop-blur-md md:flex"
          style={{ animationDelay: "1s" }}
        >
          <CheckCircle2 className="h-4 w-4 text-teal" strokeWidth={2} />
          <div>
            <div className="text-xs font-semibold text-paper">New lead</div>
            <div className="text-[10px] text-paper/40">
              synced to CRM · 2s ago
            </div>
          </div>
        </div>

        <div
          className="mockup-badge absolute -bottom-4 -right-4 hidden items-center gap-2 rounded-xl border border-line bg-ink-panel/90 px-4 py-3 shadow-xl backdrop-blur-md md:flex"
          style={{ animationDelay: "2.2s" }}
        >
          <TrendingUp className="h-4 w-4 text-signal" strokeWidth={2} />
          <div>
            <div className="text-xs font-semibold text-paper">
              <CountUp end={18} /> brands
            </div>
            <div className="text-[10px] text-paper/40">live right now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Magnetic CTA button ----------
function MagneticLink({
  href,
  children,
  className = "",
  style,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-btn transition-transform duration-200 ease-out ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-20">
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        .mesh-blob-2 { animation: mesh-drift 18s ease-in-out infinite reverse; }
        .hero-gradient-text {
          background-size: 200% auto;
          animation: shine 6s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes grid-fade {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .hero-grid { animation: grid-fade 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .mesh-blob-2, .hero-gradient-text, .hero-grid { animation: none !important; }
        }
      `}</style>

      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div
        className="mesh-blob pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
        aria-hidden="true"
      />
      <div
        className="mesh-blob-2 pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "linear-gradient(135deg, var(--teal), var(--signal))" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
              Live across 40+ campaigns · Hyderabad
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper md:text-6xl">
              Your ad spend, tracked like a pipeline —{" "}
              <span
                className="hero-gradient-text bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--signal), var(--teal), var(--signal))",
                }}
              >
                not a vanity metric.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              GK Digital Solutions runs Meta, Google and WhatsApp campaigns for
              interior design, real estate and hospitality brands — and wires
              every lead straight into your CRM, so you see what closes, not
              just what clicks.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticLink
                href="/contact"
                className="rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white shadow-lg"
                style={{
                  background: "linear-gradient(90deg, var(--signal), var(--teal))",
                  boxShadow: "0 10px 30px -8px rgba(27,84,199,0.45)",
                }}
              >
                Book a free audit
              </MagneticLink>
              <MagneticLink
                href="#results"
                className="rounded-full border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-paper/80 hover:border-signal/50 hover:text-signal"
              >
                See results
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8 max-w-xl">
              <div>
                <div className="font-display text-2xl font-semibold text-paper md:text-3xl">
                  <CountUp end={40} suffix="+" />
                </div>
                <div className="mt-1 text-xs leading-snug text-paper/50">
                  Active campaigns
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-paper md:text-3xl">
                  <CountUp end={3.2} decimals={1} suffix="×" />
                </div>
                <div className="mt-1 text-xs leading-snug text-paper/50">
                  Avg. lead-to-close lift
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-paper md:text-3xl">
                  ₹<CountUp end={2.4} decimals={1} suffix="Cr+" />
                </div>
                <div className="mt-1 text-xs leading-snug text-paper/50">
                  Ad spend managed
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <DashboardMockup />
        </Reveal>
      </div>

      <div className="mt-20">
        <PulseLine className="h-28 w-full md:h-40" />
      </div>
    </section>
  );
}

// ---------- Industries strip (seamless marquee) ----------
const industryChips = [
  { icon: HomeIcon, label: "Interior Design" },
  { icon: Building2, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: ShoppingCart, label: "E-Commerce" },
];

function IndustryStrip() {
  const chips = [...industryChips, ...industryChips];

  return (
    <section className="relative border-b border-line py-10">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 22s linear infinite; }
        .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
              Trusted across
            </span>
            <div className="marquee-wrap relative w-full overflow-hidden md:w-auto">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent"
                aria-hidden="true"
              />
              <div className="marquee-track flex w-max items-center gap-3">
                {chips.map((c, i) => (
                  <span
                    key={`${c.label}-${i}`}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-line px-4 py-2 text-xs text-paper/60"
                  >
                    <c.icon className="h-3.5 w-3.5 text-signal" strokeWidth={1.75} />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/industries"
              className="flex shrink-0 items-center gap-1 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-teal hover:underline"
            >
              +11 more
              <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Services: 4-column grid on desktop, premium hover, one highlighted card ----------
const services = [
  {
    icon: Target,
    title: "Meta & Google Ads",
    desc: "Full-funnel campaigns built around your actual sales stages, not just impressions — tuned weekly against real close rates.",
    metric: "3.2x",
    metricLabel: "avg. ROAS",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "Google Business Profile, local landing pages and review systems that put you at the top when Hyderabad searches for what you sell.",
    metric: "1–3",
    metricLabel: "map pack rank",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & CRM Automation",
    desc: "Every lead auto-tagged, followed up and dropped into your pipeline within minutes of coming in.",
    metric: "<5min",
    metricLabel: "response time",
  },
  {
    icon: Palette,
    title: "Creative & Content",
    desc: "Reels, carousels and ad creative shot and edited for categories that actually convert, not just look good.",
    metric: "12+",
    metricLabel: "assets / month",
  },
  {
    icon: Layout,
    title: "Website & Landing Pages",
    desc: "Fast, conversion-focused pages built to match the offer in your ad, so the click doesn't die on arrival.",
    metric: "<2s",
    metricLabel: "avg. load time",
  },
  {
    icon: Mail,
    title: "Email & Retargeting",
    desc: "Automated sequences that bring back the visitors who didn't convert on the first visit, at a fraction of new-lead cost.",
    metric: "4x",
    metricLabel: "cheaper than cold ads",
  },
  {
    icon: ShieldCheck,
    title: "Brand & Review Management",
    desc: "We monitor and respond to reviews across Google, Meta and Justdial so a bad week never becomes a bad reputation.",
    metric: "4.8★",
    metricLabel: "avg. client rating",
  },
  {
    icon: BarChart3,
    title: "100% CRM-Tracked Leads",
    desc: "Every single lead — from every channel — lands in one pipeline. No spreadsheet reconciliation, no lost enquiries, ever.",
    metric: "100%",
    metricLabel: "leads tracked",
    highlighted: true,
  },
];

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
    const rx = ((y - 50) / 50) * -3.5;
    const ry = ((x - 50) / 50) * 3.5;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`spotlight-card group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform ${
        s.highlighted
          ? "highlight-card border-transparent bg-ink-panel/60 shadow-2xl"
          : "border-line bg-ink-panel/40 hover:border-signal/40 hover:shadow-xl"
      }`}
      style={{
        transform:
          "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateY(0)",
      }}
    >
      {/* diagonal shine sweep on hover */}
      <div
        className="shine-sweep pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* gradient outline for the highlighted card */}
      {s.highlighted && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, var(--signal), var(--teal))",
            padding: "1.5px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          aria-hidden="true"
        />
      )}

      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(122,193,66,0.14), transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* faint corner glow, always-on for the highlighted card */}
      {s.highlighted && (
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-2xl"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
      )}

      <div className="relative flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6"
          style={{
            background: s.highlighted
              ? "linear-gradient(135deg, var(--signal), var(--teal))"
              : "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))",
          }}
        >
          <s.icon
            className={`h-4.5 w-4.5 ${s.highlighted ? "text-white" : "text-signal"}`}
            strokeWidth={1.75}
          />
        </div>

        <div className="text-right">
          <div
            className="bg-clip-text font-mono text-lg text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
          >
            {s.metric}
          </div>
          <div className="font-mono text-[9px] uppercase tracking-wider text-paper/40">
            {s.metricLabel}
          </div>
        </div>
      </div>

      {s.highlighted && (
        <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
          Our guarantee
        </span>
      )}

      <div className="relative flex-1">
        <h3 className="font-display text-base font-semibold leading-snug text-paper">
          {s.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-paper/60">{s.desc}</p>
      </div>

      <div className="relative flex items-center justify-between pt-1">
        <div
          className="h-px w-0 transition-all duration-300 group-hover:w-10"
          style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
        />
        <ArrowUpRight
          className="h-4 w-4 -translate-x-1 text-paper/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-teal group-hover:opacity-100"
          strokeWidth={2}
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24">
      <style>{`
        @keyframes highlight-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(122,193,66,0.0), 0 20px 60px -20px rgba(27,84,199,0.35); }
          50% { box-shadow: 0 0 0 6px rgba(122,193,66,0.06), 0 20px 60px -20px rgba(122,193,66,0.35); }
        }
        .highlight-card { animation: highlight-pulse 3.5s ease-in-out infinite; }
        .spotlight-card { transform-style: preserve-3d; }
        .shine-sweep {
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,0.06) 35%,
            rgba(122,193,66,0.10) 45%,
            transparent 60%
          );
          background-size: 250% 250%;
          background-position: 100% 0%;
          transition: background-position 0.7s ease;
        }
        .group:hover .shine-sweep {
          background-position: 0% 100%;
        }
        @media (prefers-reduced-motion: reduce) {
          .highlight-card { animation: none !important; }
          .shine-sweep { transition: none !important; }
        }
      `}</style>
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
                What we run
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
                Eight systems.
                <br />
                One pipeline.
              </h2>
            </div>
            <p className="max-w-sm text-paper/60">
              We don&apos;t sell services in isolation — each one feeds the
              same CRM, so nothing you pay for disappears into a report
              nobody reads.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-wider text-teal hover:underline"
            >
              View all 11 services
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Process ----------
const steps = [
  { n: "01", title: "Audit", desc: "We pull your last 90 days of ad and lead data and show you exactly where budget is leaking before we touch a single campaign." },
  { n: "02", title: "Build", desc: "Campaigns, landing pages and CRM pipeline stages get built together — so every lead has somewhere to go the moment it comes in." },
  { n: "03", title: "Launch", desc: "We go live with a tracked baseline, so from day one you can see cost-per-lead and cost-per-close side by side." },
  { n: "04", title: "Optimize", desc: "Weekly review against pipeline data, not platform dashboards — we cut what doesn't close, and scale what does." },
];

function Process() {
  return (
    <section id="process" className="relative py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <style>{`
        @keyframes draw-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .process-line { animation: draw-line 1.4s ease-out forwards; transform-origin: left; }
        @media (prefers-reduced-motion: reduce) {
          .process-line { animation: none !important; transform: scaleX(1); }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-paper/60">
              No black-box retainers. Four stages, each one handed off with
              data you can check yourself.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <div
            className="process-line absolute left-0 right-0 top-[calc(0.9rem)] hidden h-px md:block"
            style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
          />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="group relative">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink font-mono text-xs text-signal-dim transition-colors group-hover:border-signal/60 group-hover:text-signal">
                  {step.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-paper">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Why Choose Us teaser ----------
const whyPoints = [
  "Strategy before execution, always",
  "Full-service under one roof",
  "Transparent, jargon-free reporting",
  "Real team, not a ticket number",
];

function WhyChooseTeaser() {
  return (
    <section className="relative bg-ink-panel/40 py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
            Why us
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            We don&apos;t just run campaigns — we build growth systems.
          </h2>
          <p className="mt-4 text-paper/60">
            Every engagement starts with an honest audit, not a sales
            pitch. If we don&apos;t think we can move the needle for you,
            we&apos;ll tell you that too.
          </p>
          <Link
            href="/why-choose-us"
            className="mt-6 inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-wider text-signal hover:underline"
          >
            See the full difference
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-3">
            {whyPoints.map((p, i) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-xl border border-line bg-ink/80 p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-signal/30"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0"
                  strokeWidth={2}
                  style={{ color: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }}
                />
                <span className="text-sm text-paper/70">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- NEW: Comparison — us vs a typical agency ----------
const comparisonRows: { label: string; typical: string; us: string }[] = [
  { label: "Lead attribution", typical: "Platform dashboards only", us: "Tracked end-to-end in your CRM" },
  { label: "Reporting", typical: "Monthly PDF, after the fact", us: "Live pipeline, checked weekly together" },
  { label: "Follow-up speed", typical: "Whenever someone gets to it", us: "Auto-tagged and routed in minutes" },
  { label: "Contracts", typical: "12-month lock-in", us: "Month-to-month, earn the renewal" },
  { label: "Creative", typical: "Recycled templates", us: "Shot for your category, refreshed monthly" },
  { label: "Who you talk to", typical: "A rotating account exec", us: "The same strategist, every time" },
];

function ComparisonSection() {
  return (
    <section id="comparison" className="relative py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
            The difference, side by side
          </span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            What changes when your ad spend has a pipeline behind it
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-ink-panel/60 backdrop-blur-sm">
              <div className="p-5 font-mono text-[11px] uppercase tracking-wider text-paper/40">
                &nbsp;
              </div>
              <div className="border-l border-line p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">
                  Typical agency
                </span>
              </div>
              <div
                className="relative border-l border-line p-5"
                style={{ background: "linear-gradient(180deg, rgba(27,84,199,0.10), rgba(122,193,66,0.06))" }}
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-teal">
                  GK Digital Solutions
                </span>
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.1fr_1fr_1fr] ${i % 2 === 0 ? "bg-ink" : "bg-ink-panel/20"}`}
              >
                <div className="flex items-center p-5 text-sm font-medium text-paper/80">
                  {row.label}
                </div>
                <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper/50">
                  <X className="h-3.5 w-3.5 shrink-0 text-paper/30" strokeWidth={2} />
                  {row.typical}
                </div>
                <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper">
                  <Check className="h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- NEW: Trust / guarantee strip ----------
const trustPoints = [
  { icon: Lock, title: "You own the data", desc: "Ad accounts, CRM and creative assets stay in your name, always." },
  { icon: FileText, title: "No lock-in contracts", desc: "Month-to-month by default — we keep the work because it performs." },
  { icon: Users, title: "One dedicated strategist", desc: "The person who audits your account is the one who runs it." },
  { icon: ShieldCheck, title: "Weekly, plain-language reports", desc: "Cost-per-lead and cost-per-close, no jargon to translate." },
];

function TrustStrip() {
  return (
    <section className="relative border-y border-line bg-ink-panel/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}

// ---------- Results ----------
const resultStats = [
  { end: 42, prefix: "₹", suffix: "L+", label: "pipeline value tracked / month" },
  { end: 3.2, decimals: 1, suffix: "x", label: "average return on ad spend" },
  { end: 68, suffix: "%", label: "leads auto-qualified before handoff" },
  { end: 18, suffix: "", label: "Hyderabad brands live right now" },
];

function Results() {
  return (
    <section id="results" className="relative py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
            Numbers, not testimonials
          </div>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            What&apos;s actually in the pipeline right now
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="group relative h-full bg-ink-panel/30 p-8 backdrop-blur-sm transition-colors hover:bg-ink-panel">
                <TrendingUp
                  className="h-4 w-4 transition-colors"
                  strokeWidth={1.75}
                  style={{ color: i % 2 === 0 ? "var(--signal)" : "var(--teal)", opacity: 0.5 }}
                />
                <div
                  className="mt-4 bg-clip-text font-mono text-4xl text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))",
                  }}
                >
                  <CountUp
                    end={s.end}
                    decimals={s.decimals ?? 0}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-3 text-sm leading-snug text-paper/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-xs text-paper/40">
            Figures reflect active client campaigns and update as new
            brands come on board.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Portfolio teaser ----------
const portfolioTeasers = [
  { tag: "Local SEO & Lead Generation", title: "Real Estate Brand" },
  { tag: "Google Ads & Meta Ads ROI", title: "E-Commerce Store" },
  { tag: "Website Redesign & Local SEO", title: "Healthcare Clinic" },
];

function PortfolioTeaser() {
  return (
    <section className="relative py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              Real work. Real growth.
            </h2>
            <Link
              href="/portfolio"
              className="flex items-center gap-1 font-mono text-[12px] uppercase tracking-wider text-teal hover:underline"
            >
              View full portfolio
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {portfolioTeasers.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link
                href="/portfolio"
                className="group block h-full rounded-2xl border border-dashed border-line bg-ink-panel/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-panel/60"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-paper/40">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-paper">
                  {p.title}
                </h3>
                <ArrowUpRight
                  className="mt-4 h-4 w-4 text-paper/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal"
                  strokeWidth={2}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonial teaser ----------
function TestimonialTeaser() {
  return (
    <section className="relative bg-ink-panel/40 py-20">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4"
                strokeWidth={0}
                style={{ fill: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }}
              />
            ))}
          </div>
          <p className="mt-5 font-display text-xl leading-relaxed text-paper md:text-2xl">
            &ldquo;They didn&apos;t just run ads — they understood our
            business and built a strategy around it. The results speak for
            themselves.&rdquo;
          </p>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-wider text-paper/40">
            — Client, Hyderabad
          </p>
          <Link
            href="/testimonials"
            className="mt-6 inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-wider text-signal hover:underline"
          >
            Read more stories
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- NEW: FAQ ----------
const faqs = [
  {
    q: "What's the minimum ad spend to work with you?",
    a: "Most Hyderabad clients start between ₹30,000–₹60,000/month in ad spend across Meta and Google. We'll tell you upfront in the audit if your budget is too thin to get a reliable read.",
  },
  {
    q: "How long is the contract?",
    a: "Month-to-month. We don't hold clients in with a 12-month term — if the pipeline numbers aren't moving, you can walk away with 30 days' notice.",
  },
  {
    q: "Do you only work with interior design and real estate brands?",
    a: "Those are where we have the deepest playbooks, but we also run campaigns for hospitality and e-commerce brands. The audit will tell you if your category is a fit.",
  },
  {
    q: "How does the CRM integration actually work?",
    a: "Every lead — from a Meta form, a Google call extension, or a WhatsApp message — gets written into your CRM pipeline automatically, tagged with source and campaign, within minutes of coming in.",
  },
  {
    q: "What do I need to have ready before the audit?",
    a: "Just read-access to your last 90 days of ad accounts and whatever lead records you currently keep, even if that's a spreadsheet. We'll handle the rest.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-medium text-paper md:text-lg">
          {q}
        </span>
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line transition-colors"
          style={isOpen ? { borderColor: "var(--teal)" } : undefined}
        >
          {isOpen ? (
            <Minus className="h-3.5 w-3.5 text-teal" strokeWidth={2} />
          ) : (
            <Plus className="h-3.5 w-3.5 text-paper/50" strokeWidth={2} />
          )}
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm leading-relaxed text-paper/60 md:max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal">
            Questions
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            Before you book the audit
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            {faqs.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- CTA ----------
const miniStats = [
  { value: "24h", label: "Avg. response time" },
  { value: "40+", label: "Audits sent so far" },
  { value: "18+", label: "Brands trust us" },
];

const avatarInitials = ["RK", "MS", "AP", "JD"];

function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <style>{`
        @keyframes border-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
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
          .cta-border-glow, .shimmer-btn::after { animation: none !important; }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div
            className="cta-border-glow relative overflow-hidden rounded-2xl border p-10 backdrop-blur-sm md:p-14"
            style={{
              borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1",
              background: "var(--ink-panel)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
              style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-10 blur-3xl"
              style={{ background: "var(--teal)" }}
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-lg">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <Sparkles className="h-3 w-3" strokeWidth={2} />
                  Free 15-min audit
                </span>

                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
                  Let&apos;s see where your budget is actually going.
                </h2>

                <p className="mt-4 text-paper/60">
                  Send us your last month of ad spend and lead numbers.
                  We&apos;ll map it against your close rate and tell you,
                  free, whether the problem is targeting, follow-up, or
                  something else entirely.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {avatarInitials.map((initials, i) => (
                      <div
                        key={initials}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink-panel text-[10px] font-semibold text-white"
                        style={{
                          background:
                            i % 2 === 0
                              ? "linear-gradient(135deg, var(--signal), var(--teal))"
                              : "linear-gradient(135deg, var(--teal), var(--signal))",
                        }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-paper/50">
                    Joined by 18+ Hyderabad brands this year
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-paper/50">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
                    Reply within 24 hours
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-teal" strokeWidth={2} />
                    No spam, no obligation
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                  {miniStats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-xl font-semibold text-paper">{s.value}</div>
                      <div className="mt-0.5 text-[11px] leading-snug text-paper/45">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[280px]">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn group relative flex items-center justify-between gap-4 overflow-hidden rounded-full px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <span className="relative flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    WhatsApp us
                  </span>
                  <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>

                <a
                  href="mailto:hello@gkdigitalsolutions.in"
                  className="group flex items-center justify-between gap-4 rounded-full border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-paper/80 transition-colors hover:border-teal/50 hover:text-teal"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" strokeWidth={2} />
                    Email us
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>

                <p className="pt-1 text-center font-mono text-[10px] uppercase tracking-wider text-paper/30 md:text-left">
                  Takes 2 minutes &middot; Sent 40+ audits so far
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Home Page ----------
export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <GrainOverlay />
      <Hero />
      <IndustryStrip />
      <Services />
      <Process />
      <WhyChooseTeaser />
      <ComparisonSection />
      <TrustStrip />
      <Results />
      <PortfolioTeaser />
      <TestimonialTeaser />
      <FAQSection />
      <CTA />
    </main>
  );
}