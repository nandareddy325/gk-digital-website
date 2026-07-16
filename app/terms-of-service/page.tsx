import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service | GK Digital Solutions",
  description:
    "Terms and conditions governing the use of GK Digital Solutions' website and digital marketing services.",
};

const LAST_UPDATED = "16 July 2026";

export default function TermsOfServicePage() {
  return (
    
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mb-12">
            Last updated: {LAST_UPDATED}
          </p>
        </Reveal>

        <Reveal>
          <div className="prose prose-invert max-w-none space-y-10">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access
              to and use of the website and services provided by GK Digital
              Solutions, a unit of <strong>GKA1 Enterprises Private
              Limited</strong> (CIN: U74102TS2026PTC217790), Hyderabad,
              Telangana, India. By accessing our website or engaging our
              services, you agree to these Terms.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                1. Services Offered
              </h2>
              <p>
                GK Digital Solutions provides digital marketing services
                including but not limited to SEO, Google Ads, Meta Ads,
                social media marketing, content marketing, email marketing,
                branding, website design, and lead generation. Specific
                deliverables, timelines, and pricing for each engagement are
                defined in a separate proposal or agreement signed with the
                client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                2. Use of the Website
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You agree to use this website only for lawful purposes and
                  in a manner that does not infringe the rights of, or
                  restrict, the use of the site by any third party.
                </li>
                <li>
                  You must not attempt to gain unauthorized access to any
                  part of the website, servers, or databases connected to it.
                </li>
                <li>
                  All content on this website — including text, graphics,
                  logos, and design — is the property of GK Digital Solutions
                  / GKA1 Enterprises Private Limited unless otherwise stated,
                  and may not be reproduced without permission.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                3. Client Responsibilities
              </h2>
              <p>
                When engaging our services, clients agree to provide accurate
                information, timely feedback, and necessary access
                (accounts, assets, credentials) required to deliver the
                agreed services. Delays caused by incomplete or delayed
                client inputs may affect project timelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                4. Payments &amp; Refunds
              </h2>
              <p>
                Payment terms, including advance payments, milestones, and
                recurring fees, will be specified in the individual service
                agreement or invoice. Unless otherwise agreed in writing,
                fees already paid for services rendered are non-refundable.
                Ad spend paid directly to platforms (Google, Meta, etc.) is
                separate from our service fees and is non-refundable by us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                5. Results &amp; Performance Disclaimer
              </h2>
              <p>
                While we apply industry best practices to achieve strong
                marketing results, we do not guarantee specific outcomes
                (such as rankings, lead volume, or revenue) as these depend
                on factors outside our control, including market conditions,
                platform algorithm changes, and client-side execution.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                6. Intellectual Property
              </h2>
              <p>
                Deliverables created as part of a paid engagement (creatives,
                copy, website code, etc.) are transferred to the client upon
                full payment, unless otherwise specified. Tools, frameworks,
                and proprietary processes used to deliver services remain the
                property of GK Digital Solutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                GK Digital Solutions / GKA1 Enterprises Private Limited shall
                not be liable for any indirect, incidental, or consequential
                damages arising from the use of our website or services,
                including loss of profits, data, or business opportunities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                8. Termination
              </h2>
              <p>
                Either party may terminate an ongoing service agreement as
                per the notice period specified in the individual contract.
                Fees for work completed up to the termination date remain
                payable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                9. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of India, and any
                disputes shall be subject to the exclusive jurisdiction of
                the courts in Hyderabad, Telangana.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                10. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms from time to time. Continued use of
                our website or services after changes are posted constitutes
                acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
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