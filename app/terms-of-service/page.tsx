import Link from "next/link";
import { FileText, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Terms of Service | GK Digital Solutions",
  description:
    "The terms that govern your use of GK Digital Solutions' website and digital marketing services.",
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
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Services Provided" },
  { id: "client-responsibilities", title: "3. Client Responsibilities" },
  { id: "payments", title: "4. Payments & Billing" },
  { id: "refunds", title: "5. Cancellations & Refunds" },
  { id: "intellectual-property", title: "6. Intellectual Property" },
  { id: "confidentiality", title: "7. Confidentiality" },
  { id: "liability", title: "8. Limitation of Liability" },
  { id: "termination", title: "9. Termination" },
  { id: "governing-law", title: "10. Governing Law" },
  { id: "changes", title: "11. Changes to These Terms" },
  { id: "contact", title: "12. Contact Us" },
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

export default function TermsOfServicePage() {
  return (
    <main className="overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-14 sm:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <FileText className="h-3 w-3" strokeWidth={2} />
              Terms of Service
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              The ground rules for working with GK Digital Solutions.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 text-paper/60 sm:mt-5 ${fluid.lead}`}>
              By using our website or engaging our services, you agree to
              the terms below. We&apos;ve tried to keep them as plain and
              fair as the rest of how we work.
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
                  className="block text-[13px] text-paper/60 transition-colors hover:text-teal"
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
              className="shrink-0 snap-start rounded-full border border-line px-3 py-1.5 text-[11px] text-paper/60 hover:border-teal/40"
            >
              {s.title}
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <Section id="acceptance" title="1. Acceptance of Terms">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the GK
              Digital Solutions website and services. By submitting a form, booking an audit, or
              signing on as a client, you agree to be bound by these Terms. If you don&apos;t
              agree, please don&apos;t use our services.
            </p>
          </Section>

          <Section id="services" title="2. Services Provided">
            <p>
              GK Digital Solutions provides digital marketing services including but not limited
              to SEO, Google Ads and Meta Ads management, website design and development,
              branding, content marketing, WhatsApp and email marketing, lead generation, and
              CRM integration. The specific scope, deliverables and timelines for your engagement
              are set out in your service agreement or proposal, which takes precedence over this
              general description where the two differ.
            </p>
          </Section>

          <Section id="client-responsibilities" title="3. Client Responsibilities">
            <p>As a client, you agree to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide accurate business information, brand assets and access credentials needed to deliver the service.</li>
              <li>Respond to requests for approvals, content or feedback in a reasonably timely manner, since delays on your end can affect campaign timelines.</li>
              <li>Ensure any content, claims or offers you ask us to advertise comply with applicable advertising laws and platform policies.</li>
              <li>Maintain sufficient ad spend budget in your own ad accounts — ad spend is billed separately from our management fees.</li>
            </ul>
          </Section>

          <Section id="payments" title="4. Payments & Billing">
            <p>
              Service fees are billed according to the plan or proposal you&apos;ve agreed to
              (monthly or annual, per our{" "}
              <Link href="/pricing" className="text-teal hover:underline">
                pricing page
              </Link>
              ). Ad spend (what you pay Google, Meta, etc. directly for media) is always separate
              from our management fee and is not included in the prices shown on our site.
            </p>
            <p>
              We are in the process of enabling online subscription billing through Razorpay for
              greater convenience. Until that&apos;s live, invoices are shared and payments
              arranged manually after your onboarding call. Once online billing is available,
              subscribing to a plan will constitute your authorization for recurring charges
              until you cancel.
            </p>
          </Section>

          <Section id="refunds" title="5. Cancellations & Refunds">
            <p>
              Our plans are month-to-month by default, so you can cancel future billing at any
              time with 30 days&apos; notice, effective from your next billing cycle. Fees already
              paid for work completed or in progress are non-refundable, since our time and ad
              platform work has already been delivered. Annual plans, where chosen, may include
              separate cancellation terms outlined in your specific agreement.
            </p>
          </Section>

          <Section id="intellectual-property" title="6. Intellectual Property">
            <p>
              Any creative assets, ad copy, website code or content we build specifically for you
              as part of a paid engagement become your property upon full payment, unless
              otherwise agreed in writing. GK Digital Solutions retains the right to showcase
              completed work in our portfolio, case studies and marketing materials, unless you
              request otherwise in writing.
            </p>
            <p>
              Our own pre-existing tools, templates, frameworks and internal processes remain our
              intellectual property and are not transferred as part of any engagement.
            </p>
          </Section>

          <Section id="confidentiality" title="7. Confidentiality">
            <p>
              We treat your business data, ad account access, and campaign performance figures as
              confidential, and we won&apos;t share them with third parties outside of what&apos;s
              needed to deliver the service (see our{" "}
              <Link href="/privacy-policy" className="text-teal hover:underline">
                Privacy Policy
              </Link>
              ). We expect the same discretion from clients regarding any of our proprietary
              processes or pricing shared during the engagement.
            </p>
          </Section>

          <Section id="liability" title="8. Limitation of Liability">
            <p>
              While we work hard to deliver measurable results, digital marketing outcomes depend
              on many factors outside our direct control — platform algorithm changes, market
              conditions, your website or product performance, and third-party ad policies among
              them. We do not guarantee specific rankings, lead volumes, or revenue outcomes
              unless explicitly stated in a signed agreement.
            </p>
            <p>
              To the maximum extent permitted by law, GK Digital Solutions&apos; total liability
              for any claim arising from our services is limited to the fees paid by you for the
              specific service in the month the issue occurred.
            </p>
          </Section>

          <Section id="termination" title="9. Termination">
            <p>
              Either party may terminate an ongoing engagement with 30 days&apos; written notice.
              We reserve the right to suspend or terminate services immediately in cases of
              non-payment, misuse of our services, or requests to run campaigns that violate
              platform policies or applicable law.
            </p>
          </Section>

          <Section id="governing-law" title="10. Governing Law">
            <p>
              These Terms are governed by the laws of India. Any disputes arising from these
              Terms or our services will be subject to the exclusive jurisdiction of the courts
              in Hyderabad, Telangana.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to These Terms">
            <p>
              We may update these Terms from time to time to reflect changes in our services or
              legal requirements. Continued use of our website or services after an update
              constitutes acceptance of the revised Terms. The &quot;Last updated&quot; date above
              always reflects the current version.
            </p>
          </Section>

          <Section id="contact" title="12. Contact Us">
            <p>Questions about these Terms? Reach out anytime:</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:hello@gkdigitalsolutions.in"
                className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-paper/80 transition-colors hover:border-teal/40 hover:text-teal"
              >
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                hello@gkdigitalsolutions.in
              </a>
              <a
                href="tel:+917569622606"
                className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-paper/80 transition-colors hover:border-teal/40 hover:text-teal"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                +91 75696 22606
              </a>
            </div>
          </Section>

          <p className="pt-6 text-xs text-paper/35">
            These Terms are provided for general clarity and don&apos;t constitute legal advice.
            For a binding, engagement-specific contract, please refer to your signed service
            agreement, or consult a qualified professional.
          </p>
        </div>
      </div>
    </main>
  );
}