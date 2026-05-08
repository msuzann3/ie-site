import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Innovate + Elevate',
  description: 'Privacy policy for Innovate + Elevate Strategies, LLC.',
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-[13px] text-text-mid font-light mb-12">
          Effective date: February 29, 2025
        </p>

        <div
          className="font-light text-[16px] text-midnight leading-[1.8] flex flex-col gap-8"
          style={{ color: '#1a2a45' }}
        >
          <p>
            Innovate + Elevate Strategies, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
            protecting your privacy. This policy explains how we collect, use, and safeguard
            information from visitors to our website and clients of our services.
          </p>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Information we collect
            </h2>
            <p>
              We collect personal information you voluntarily provide — through contact forms,
              emails, or LinkedIn — including your name, email address, and phone number. We also
              collect usage data such as IP addresses and general browsing behavior to understand
              how visitors interact with our website and to improve its performance.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              How we use your information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-5 mt-3 flex flex-col gap-2 text-[15px]">
              <li>Respond to inquiries and deliver our services</li>
              <li>Send educational content and updates (you may opt out at any time)</li>
              <li>Analyze site performance and improve the user experience</li>
              <li>Maintain the security and integrity of our website</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Information sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share data with
              third-party service providers who assist in operating our website and delivering
              our services, under confidentiality agreements that restrict their use of your
              information.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Cookies and tracking
            </h2>
            <p>
              Our website uses cookies and similar technologies to improve your experience. You
              can manage cookie preferences through your browser settings. Disabling cookies may
              affect some site functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any
              time. To unsubscribe from communications or submit a data request, email us at{' '}
              <a href="mailto:info@innovate-elevate.ai" className="text-emerald hover:text-emerald-mid transition-colors">
                info@innovate-elevate.ai
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Security
            </h2>
            <p>
              We implement reasonable security measures to protect your information. However, no
              method of transmission over the internet is completely secure, and we cannot
              guarantee absolute protection.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Policy updates
            </h2>
            <p>
              We may update this policy periodically. The current version will always be
              available on this page, with the effective date noted at the top.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-midnight text-[20px] mb-3" style={{ letterSpacing: '-0.2px' }}>
              Contact
            </h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:info@innovate-elevate.ai" className="text-emerald hover:text-emerald-mid transition-colors">
                info@innovate-elevate.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
