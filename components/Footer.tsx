import Link from 'next/link'

const LEGAL_LINKS: Record<string, string> = { Privacy: '/privacy', Terms: '/terms' }

export default function Footer() {
  return (
    <footer className="bg-midnight px-5 md:px-20 pt-12 md:pt-16 pb-8 md:pb-10 text-white">
      <div className="grid-footer grid mb-10 md:mb-12 pb-10 md:pb-12 border-b border-white/10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-xl font-normal mb-3">
            Innovate <span className="text-emerald">+</span> Elevate
          </div>
          <p className="text-[13px] text-white/40 font-light leading-relaxed mb-5 max-w-[240px]">
            AI strategy and executive coaching for HR and L&D leaders.
          </p>
          <a
            href="mailto:info@innovate-elevate.ai"
            className="text-[13px] text-emerald hover:text-emerald-on-dark transition-colors duration-150"
          >
            info@innovate-elevate.ai
          </a>
        </div>

        {/* Innovate */}
        <div>
          <div className="text-[11px] tracking-[0.075rem] uppercase text-white/30 font-semibold mb-4">
            Innovate · AI
          </div>
          <ul className="space-y-2.5 list-none">
            <li>
              <Link href="/michelle" className="text-[13px] text-white/65 hover:text-white/90 transition-colors duration-150">
                About Michelle
              </Link>
            </li>
            {['AI strategy', 'Governance & ethics', 'Workforce enablement'].map((label) => (
              <li key={label}>
                <span className="text-[13px] text-white/35">{label}</span>
              </li>
            ))}
            <li>
              <a href="https://www.linkedin.com/in/michelleslentz/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/45 hover:text-white/85 transition-colors duration-150">
                Michelle on LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Elevate */}
        <div>
          <div className="text-[11px] tracking-[0.075rem] uppercase text-white/30 font-semibold mb-4">
            Elevate · Coaching
          </div>
          <ul className="space-y-2.5 list-none">
            <li>
              <Link href="/brandon" className="text-[13px] text-white/65 hover:text-white/90 transition-colors duration-150">
                About Brandon
              </Link>
            </li>
            {['Executive coaching', 'Career coaching', 'Learning strategy'].map((label) => (
              <li key={label}>
                <span className="text-[13px] text-white/35">{label}</span>
              </li>
            ))}
            <li>
              <a href="https://www.linkedin.com/in/brandoncarson/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/45 hover:text-white/85 transition-colors duration-150">
                Brandon on LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[11px] tracking-[0.075rem] uppercase text-white/30 font-semibold mb-4">
            Get in touch
          </div>
          <ul className="space-y-2.5 list-none">
            {[
              { label: 'info@innovate-elevate.ai', href: 'mailto:info@innovate-elevate.ai' },
              { label: 'Schedule with Michelle', href: 'https://go.innovate-elevate.ai/meetwithmichelle' },
              { label: 'Schedule with Brandon', href: 'https://go.innovate-elevate.ai/meetwithbrandon' },
              { label: 'Speaking inquiries', href: 'mailto:speaking@innovate-elevate.ai' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[13px] text-white/45 hover:text-white/85 transition-colors duration-150"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[12px] text-white/25">
          © 2025–2026 Innovate <span className="text-emerald">+</span> Elevate Strategies, LLC · Seattle, WA
        </p>
        <div className="flex gap-6">
          {['Privacy', 'Terms'].map((label) => (
            <Link
              key={label}
              href={LEGAL_LINKS[label]}
              className="text-[12px] text-white/25 hover:text-white/60 transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
