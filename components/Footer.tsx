"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowUp,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Award,
  Lock,
} from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.07c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.55.01c.18 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

function PlatformBadge({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] text-paper/70 transition-colors hover:border-signal/40">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal blink-dot" />
      {label}
    </span>
  );
}

const linkGroups = [
  {
    title: "Services",
    links: [
      { label: "SEO", href: "/services/seo" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Website Design", href: "/services/website-design" },
      { label: "Lead Generation", href: "/services/lead-generation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Process", href: "/process" },
      { label: "Industries", href: "/industries" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
];

/* Added "Secure payments via Razorpay" alongside the existing trust badges —
   forward-looking copy for when online checkout goes live on /pricing. See
   components/PricingPlans.tsx for the integration hook points. */
const trustBadges = [
  { icon: ShieldCheck, label: "Transparent reporting" },
  { icon: Zap, label: "24-hr response time" },
  { icon: Award, label: "Results-first strategy" },
  { icon: Lock, label: "Secure payments via Razorpay" },
];

const platforms = ["Google Ads", "Meta Ads", "WhatsApp Business", "Google Business Profile"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your email list / API when ready
    setSubscribed(true);
    setEmail("");
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <style>{`
        @keyframes footer-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .footer-line-glow { animation: footer-glow 4s ease-in-out infinite; }
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.1); }
        }
        .footer-blob { animation: mesh-drift 16s ease-in-out infinite; }
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
          animation: shimmer-sweep 3.4s ease-in-out infinite;
        }
        @keyframes underline-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .footer-underline { position: relative; display: inline-flex; }
        .footer-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -3px;
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, var(--signal), var(--teal));
          transform: scaleX(0);
          transform-origin: left;
          animation: underline-draw 0.8s ease-out 0.2s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-line-glow, .footer-blob, .shimmer-btn::after, .footer-underline::after {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="footer-line-glow absolute top-0 left-10 right-10 h-[1px] sm:left-40 sm:right-40"
        style={{
          background: "linear-gradient(90deg, var(--signal), var(--teal))",
        }}
      />
      <div
        className="footer-blob pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--signal), var(--teal))",
        }}
        aria-hidden="true"
      />

      {/* Newsletter + trust badges */}
      <div className="relative border-b border-line py-6 sm:py-8">
        <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="max-w-md min-w-0">
              <h3 className="font-display text-base font-semibold text-paper sm:text-lg">
                Get digital marketing tips straight to your inbox.
              </h3>
              <p className="mt-1 text-[11px] text-paper/70 sm:text-xs">
                One useful email a month — no spam, unsubscribe anytime.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-2.5 text-[13px] text-teal sm:text-sm">
                <ShieldCheck className="h-4 w-4 shrink-0" strokeWidth={2} />
                Thanks — you&apos;re on the list!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-sm min-w-0 flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="w-full min-w-0 rounded-full border border-line bg-ink-panel/40 px-4 py-2.5 text-[13px] text-paper outline-none transition-colors focus:border-signal/60 sm:py-2 sm:text-sm"
                />
                <button
                  type="submit"
                  className="shimmer-btn relative flex min-h-[42px] shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white transition-transform hover:scale-[1.03]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--signal), var(--teal))",
                  }}
                >
                  <span className="relative">Subscribe</span>
                  <ArrowUpRight className="relative h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </form>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-y-3 border-t border-line pt-3">
            <div className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-1.5 text-[11px] text-paper/70 sm:text-xs"
                >
                  <b.icon className="h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2} />
                  {b.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <PlatformBadge key={p} label={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative py-8 sm:py-10">
        <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[1.1fr_0.8fr_0.9fr_1fr]">
            <div className="min-w-0 max-w-xs">
              <div className="relative h-14 w-36 sm:h-16 sm:w-40">
                <Image
                  src="/GK_Digital_Logo.jpg"
                  alt="GK Digital Solutions"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-2.5 text-[11px] leading-relaxed text-paper/70 sm:text-xs">
                Performance marketing and CRM systems for interior design,
                real estate, hospitality, skin &amp; hair and service
                businesses that want to know exactly where every rupee of
                ad spend goes.
              </p>
            </div>

            {linkGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <h4 className="footer-underline font-mono text-[10px] uppercase tracking-wider text-paper/60">
                  {group.title}
                </h4>
                <ul className="mt-3.5 space-y-2 sm:mt-3">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[12px] text-paper/80 transition-colors hover:text-signal sm:text-xs"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="min-w-0">
              <h4 className="footer-underline font-mono text-[10px] uppercase tracking-wider text-paper/60">
                Contact
              </h4>
              <ul className="mt-3.5 space-y-2 sm:mt-3">
                <li>
                  <a
                    href="mailto:hello@gkdigitalsolutions.in"
                    className="flex items-center gap-2 text-[12px] text-paper/80 transition-colors hover:text-signal sm:text-xs"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    <span className="break-all">hello@gkdigitalsolutions.in</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917569622606"
                    className="flex items-center gap-2 text-[12px] text-paper/80 transition-colors hover:text-signal sm:text-xs"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    +91 75696 22606
                  </a>
                </li>
                <li className="flex items-start gap-2 text-[12px] text-paper/80 sm:text-xs">
                  <MapPin
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    strokeWidth={1.75}
                  />
                  Hyderabad, Telangana
                </li>
                <li className="flex items-start gap-2 text-[12px] text-paper/80 sm:text-xs">
                  <Clock
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    strokeWidth={1.75}
                  />
                  Mon–Sat, 9:30 AM – 6:30 PM
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:scale-110 hover:border-signal/60 hover:text-signal"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:scale-110 hover:border-signal/60 hover:text-signal"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://wa.me/917569622606?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20GK%20Digital%20Solutions%27%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:scale-110 hover:border-signal/60 hover:text-signal"
                >
                  <WhatsappIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-line pt-4 text-center text-[10.5px] text-paper/60 sm:text-[11px] md:flex-row md:text-left">
            <span>
              © {new Date().getFullYear()} GK Digital Solutions. All rights
              reserved.
            </span>
            <div className="flex items-center gap-4 sm:gap-5">
              <span>A GKA1 Enterprises company</span>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:-translate-y-0.5 hover:border-signal/60 hover:text-signal"
              >
                <ArrowUp className="h-3 w-3" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}