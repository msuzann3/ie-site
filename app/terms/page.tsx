import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — Innovate + Elevate',
  description: 'Terms of use for Innovate + Elevate Strategies, LLC.',
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[760px] mx-auto px-5 pt-32 pb-24 md:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-3">
          Legal
        </p>
        <h1
          className="font-display font-normal text-midnight mb-2 leading-snug"
          style={{ fontSize: 'clamp(32px, 4vw, 46px)', letterSpacing: '-0.05rem' }}
        >
          Terms of Use
        </h1>
        <p className="text-[13px] text-text-mid font-light mb-12">
          Effective date: February 29, 2025
        </p>

        <div
          className="font-light text-[16px] leading-[1.8] flex flex-col gap-8"
          style={{ color: '#1a2a45' }}
        >
          <p>
            By accessing or using the Innovate + Elevate Strategies, LLC website
            (&ldquo;Site&rdquo;), you agree to the following terms. If you do not agree, please
            do not use the Site.
          </p>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Use of the site
            </h2>
            <p>
              This Site is provided for informational purposes about our consulting and coaching
              services. You agree to use it lawfully and not to misrepresent your identity,
              transmit harmful content, or interfere with the Site&apos;s operation.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Intellectual property
            </h2>
            <p>
              All content on this Site — including text, graphics, frameworks, and methodology
              descriptions — is the property of Innovate + Elevate Strategies, LLC or its
              licensors and is protected by applicable copyright and intellectual property laws.
              You may not reproduce or distribute content without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              No professional advice
            </h2>
            <p>
              Content on this Site is for general informational purposes only. It does not
              constitute legal, financial, HR, or professional advice. Formal advisory
              relationships are established only through signed agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Disclaimer of warranties
            </h2>
            <p>
              The Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or
              implied. We do not guarantee the accuracy, completeness, or suitability of any
              information on the Site for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, Innovate + Elevate Strategies, LLC shall
              not be liable for any indirect, incidental, or consequential damages arising from
              your use of, or inability to use, this Site.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Third-party links
            </h2>
            <p>
              The Site may link to third-party websites. We are not responsible for the content
              or practices of those sites and encourage you to review their terms and privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of the State of Washington, without regard to
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Changes to these terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of the Site
              after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Contact
            </h2>
            <p>
              Questions?{' '}
              <a href="mailto:info@innovate-elevate.ai" className="text-emerald hover:text-emerald-mid transition-colors">
                info@innovate-elevate.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
