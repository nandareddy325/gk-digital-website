import Link from "next/link";
import { ShieldCheck, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Privacy Policy | GK Digital Solutions",
  description:
    "How GK Digital Solutions collects, uses and protects your information across our website, ad campaigns and CRM.",
};

const LAST_UPDATED = "17 July 2026";

const fluid = {
  hero: "text-[clamp(1.75rem,5.2vw,3rem)] leading-[1.2]",
  h2: "text-[clamp(1.25rem,3.2vw,1.75rem)] leading-[1.25]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

const sections = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use-it", title: "2. How We Use Your Information" },
  { id: "third-party-services", title: "3. Third-Party Services & Ad Platforms" },
  { id: "cookies", title: "4. Cookies & Tracking Technologies" },
  { id: "data-sharing", title: "5. Data Sharing & Disclosure" },
  { id: "data-security", title: "6. Data Security" },
  { id: "your-rights", title: "7. Your Rights" },
  { id: "childrens-privacy", title: "8. Children's Privacy" },
  { id: "changes", title: "9. Changes to This Policy" },
  { id: "contact", title: "10. Contact Us" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-line py-8 sm:py-10">
      <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>{title}</h2>
      <div className={`mt-3 space-y-3 text-paper/70 sm:mt-4 ${fluid.body}`}>{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-14 sm:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/10 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <ShieldCheck className="h-3 w-3" strokeWidth={2} />
              Privacy Policy
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Your privacy, handled the same way we handle client budgets — transparently.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 text-paper/60 sm:mt-5 ${fluid.lead}`}>
              This policy explains what information GK Digital Solutions
              collects when you visit our website, contact us, or work
              with us — and how we use, store and protect it.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 text-xs text-paper/40">Last updated: {LAST_UPDATED}</p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 px-5 py-10 sm:px-6 sm:py-14 md:grid-cols-[220px_1fr] md:gap-12">
        {/* Table of contents */}
        <aside className="hidden md:block">
          <div className="sticky top-28">
            <span className="font-mono text-[10px] uppercase tracking-wider text-paper/40">On this page</span>
            <nav className="mt-4 space-y-2.5 border-l border-line pl-4">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-[13px] text-paper/60 transition-colors hover:text-signal"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile TOC — horizontal scroll */}
        <div className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 md:hidden">
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 snap-start rounded-full border border-line px-3 py-1.5 text-[11px] text-paper/60 hover:border-signal/40"
            >
              {s.title}
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <Section id="information-we-collect" title="1. Information We Collect">
            <p>We collect information in a few ways:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-paper">Information you give us directly</strong> — name, phone
                number, email, business details and any message content when you fill out our contact
                form, request an audit, message us on WhatsApp, or subscribe to our newsletter.
              </li>
              <li>
                <strong className="text-paper">Information collected automatically</strong> — IP address,
                browser type, device information, pages visited and referral source, collected via
                cookies and analytics tools when you browse our website.
              </li>
              <li>
                <strong className="text-paper">Information from ad platforms</strong> — if you interact
                with our Meta or Google ads and submit a lead form, the platform shares the details
                you provided with us so we can follow up.
              </li>
            </ul>
          </Section>

          <Section id="how-we-use-it" title="2. How We Use Your Information">
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to enquiries and provide the free audit or consultation you requested.</li>
              <li>To deliver the services outlined in your service agreement (SEO, ads management, CRM setup, etc.).</li>
              <li>To send you the monthly newsletter, if you&apos;ve opted in — you can unsubscribe anytime.</li>
              <li>To improve our website and campaigns using aggregated, non-identifying analytics.</li>
              <li>To meet legal, accounting or regulatory requirements.</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </Section>

          <Section id="third-party-services" title="3. Third-Party Services & Ad Platforms">
            <p>
              As a digital marketing agency, we use and manage several third-party platforms on
              behalf of our clients and for our own website. These include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-paper">Google Ads &amp; Google Analytics</strong> — for advertising performance and website traffic analysis.</li>
              <li><strong className="text-paper">Meta (Facebook &amp; Instagram) Ads</strong> — for social advertising and lead forms.</li>
              <li><strong className="text-paper">WhatsApp Business</strong> — for direct client communication and automated lead follow-up.</li>
              <li><strong className="text-paper">Our CRM</strong> — for tracking leads, pipeline stages and campaign performance.</li>
              <li><strong className="text-paper">Razorpay</strong> — for processing payments, when online billing is enabled on our services.</li>
            </ul>
            <p>
              Each of these providers has its own privacy policy governing how they handle data;
              we encourage you to review theirs alongside ours.
            </p>
          </Section>

          <Section id="cookies" title="4. Cookies & Tracking Technologies">
            <p>
              Our website uses cookies and similar technologies to remember your preferences,
              understand how visitors use our site, and measure the performance of our ad
              campaigns. You can disable cookies through your browser settings, though some
              parts of the site may not function as intended without them.
            </p>
          </Section>

          <Section id="data-sharing" title="5. Data Sharing & Disclosure">
            <p>We share information only in these situations:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>With service providers who help us operate (hosting, email, CRM, payment processing) under confidentiality obligations.</li>
              <li>When required by law, court order, or governmental request.</li>
              <li>With your consent, or at your direction (e.g. connecting your ad accounts to our management).</li>
            </ul>
          </Section>

          <Section id="data-security" title="6. Data Security">
            <p>
              We use reasonable administrative and technical safeguards to protect your
              information — including restricted access to client data, secure hosting, and
              encrypted connections (HTTPS) across our website. No method of transmission over
              the internet is 100% secure, so we can&apos;t guarantee absolute security, but we
              treat your data with the same care we&apos;d want for our own.
            </p>
          </Section>

          <Section id="your-rights" title="7. Your Rights">
            <p>You can, at any time, ask us to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access the personal information we hold about you.</li>
              <li>Correct inaccurate or outdated information.</li>
              <li>Delete your information, where we&apos;re not legally required to retain it.</li>
              <li>Unsubscribe from marketing emails or WhatsApp updates.</li>
            </ul>
            <p>To exercise any of these, email us at the address below.</p>
          </Section>

          <Section id="childrens-privacy" title="8. Children's Privacy">
            <p>
              Our services are intended for businesses and individuals aged 18 and above. We do
              not knowingly collect personal information from children.
            </p>
          </Section>

          <Section id="changes" title="9. Changes to This Policy">
            <p>
              We may update this policy occasionally to reflect changes in our practices or for
              legal reasons. The &quot;Last updated&quot; date at the top of this page will always
              reflect the most recent revision.
            </p>
          </Section>

          <Section id="contact" title="10. Contact Us">
            <p>If you have questions about this policy or how we handle your data, reach out:</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:hello@gkdigitalsolutions.in"
                className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-paper/80 transition-colors hover:border-signal/40 hover:text-signal"
              >
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                hello@gkdigitalsolutions.in
              </a>
              <a
                href="tel:+917569622606"
                className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-paper/80 transition-colors hover:border-signal/40 hover:text-signal"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                +91 75696 22606
              </a>
            </div>
          </Section>

          <p className="pt-6 text-xs text-paper/35">
            This policy is provided for general transparency and does not constitute legal
            advice. For specific compliance requirements (e.g. GDPR, India&apos;s DPDP Act), please
            consult a qualified professional.
          </p>
        </div>
      </div>
    </main>
  );
}