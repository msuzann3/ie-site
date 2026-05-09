const CONTACT_INFO = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
    label: 'Email',
    value: 'info@innovate-elevate.ai',
    href: 'mailto:info@innovate-elevate.ai',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Schedule with Michelle',
    value: 'go.innovate-elevate.ai/meetwithmichelle',
    href: 'https://go.innovate-elevate.ai/meetwithmichelle',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Schedule with Brandon',
    value: 'go.innovate-elevate.ai/meetwithbrandon',
    href: 'https://go.innovate-elevate.ai/meetwithbrandon',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
      </svg>
    ),
    label: 'Speaking enquiries',
    value: 'speaking@innovate-elevate.ai',
    href: 'mailto:speaking@innovate-elevate.ai',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-silver px-5 py-16 md:px-20 md:py-24 flex flex-col items-center text-center"
    >
      <p className="eyebrow">Get in touch</p>
      <h2
        className="font-display font-normal text-midnight leading-snug tracking-section mb-4"
        style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}
      >
        Tell us what your
        <br />
        organization is wrestling with.
      </h2>
      <p className="text-base text-text-mid leading-relaxed font-light mb-10 max-w-[520px]">
        No discovery decks, no qualifying calls. Send a note — we&apos;ll write back
        within two business days with whether and how we can help.
      </p>

      <div className="flex flex-col gap-4 items-center w-full max-w-[400px]">
        {CONTACT_INFO.map((row) => (
          <a
            key={row.label}
            href={row.href}
            className="flex items-center gap-3 group w-full"
          >
            <div className="w-8 h-8 rounded-[9px] bg-emerald-light flex-shrink-0 flex items-center justify-center text-emerald">
              {row.icon}
            </div>
            <div className="text-left">
              <p className="text-[10px] tracking-[0.0625rem] uppercase font-semibold text-text-mid">
                {row.label}
              </p>
              <p className="text-[13px] text-midnight group-hover:text-emerald transition-colors duration-150 font-light">
                {row.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
