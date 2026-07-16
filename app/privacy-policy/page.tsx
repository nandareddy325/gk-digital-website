import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | GK Digital Solutions",
  description:
    "Read the Privacy Policy of GK Digital Solutions (a unit of GKA1 Enterprises Private Limited) to understand how we collect, use, and protect your data.",
};

const LAST_UPDATED = "16 July 2026";

export default function PrivacyPolicyPage() {
  return (
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            Last updated: {LAST_UPDATED}
          </p>
        </Reveal>

        <Reveal>
          <div className="prose prose-invert max-w-none space-y-10">
            <p>
              GK Digital Solutions (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is a unit of{" "}
              <strong>GKA1 Enterprises Private Limited</strong>, a company
              registered in Hyderabad, Telangana, India (CIN:
              U74102TS2026PTC217790). This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our digital marketing services.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact information</strong> you provide through our
                  forms — name, email address, phone number, company name,
                  and project details.
                </li>
                <li>
                  <strong>Usage data</strong> such as pages visited, time
                  spent on the site, browser type, device information, and
                  referring URLs, collected automatically through cookies and
                  analytics tools (e.g. Google Analytics, Meta Pixel).
                </li>
                <li>
                  <strong>Communication data</strong> from emails, calls, or
                  WhatsApp messages exchanged with our team.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your enquiries and provide quotations.</li>
                <li>
                  To deliver, manage, and improve our digital marketing
                  services (SEO, ads, social media, branding, etc.).
                </li>
                <li>
                  To send updates, offers, or marketing communications, where
                  you have consented to receive them.
                </li>
                <li>
                  To analyze website performance and improve user experience.
                </li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                3. Cookies &amp; Tracking Technologies
              </h2>
              <p>
                Our website uses cookies and similar tracking technologies to
                improve functionality and analyze traffic. This may include
                third-party tools such as Google Ads, Meta (Facebook)
                Pixel, and Google Analytics. You can control or disable
                cookies through your browser settings; disabling cookies may
                affect certain site features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell your personal information. We may share data
                with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Trusted third-party service providers (hosting, analytics,
                  advertising platforms, CRM/automation tools) strictly to
                  deliver our services.
                </li>
                <li>
                  Legal authorities, where required by applicable law or to
                  protect our rights.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain personal information only as long as necessary to
                fulfil the purposes outlined in this policy, or as required
                by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal data by contacting us using the details below. We
                will respond within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                7. Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational measures
                to protect your data against unauthorized access, alteration,
                or disclosure. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of
                those sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Changes will
                be posted on this page with a revised &quot;Last
                updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
              <p>
                For questions about this Privacy Policy or your data, contact
                us at:
              </p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li>
                  <strong>GKA1 Enterprises Private Limited</strong> (GK
                  Digital Solutions)
                </li>
                <li>Hyderabad, Telangana, India</li>
                <li>Email: [your-email@gkdigitalsolutions.in]</li>
                <li>Phone: [your business phone number]</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
  );
}