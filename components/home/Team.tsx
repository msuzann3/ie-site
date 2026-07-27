const TEAM = [
  {
    variant: 'innovate' as const,
    side: 'Innovate',
    initials: 'ML',
    name: 'Michelle Lentz',
    role: 'AI strategy & enablement lead',
    bio: '20+ years in enterprise L&D and change management. Published author, international speaker, and AI enablement leader. MSc in AI in Business, Arizona State University.',
    website: 'https://www.michelleslentz.com',
    linkedin: 'https://www.linkedin.com/in/michelleslentz/',
    accentColor: '#4DD4A8',
    borderColor: 'rgba(11,143,104,0.4)',
    bgColor: 'rgba(11,143,104,0.25)',
    glowColor: 'rgba(11,143,104,0.22)',
    hoverBorder: '#0B8F68',
    hoverBg: 'rgba(11,143,104,0.15)',
  },
  {
    variant: 'elevate' as const,
    side: 'Elevate',
    initials: 'BC',
    name: 'Brandon Carson',
    role: 'Learning strategy & leadership development lead',
    bio: 'More than 25 years in enterprise HR and L&D leadership. Published author and international speaker who helps organizations strengthen leadership, skills strategy, and learning ecosystems at scale.',
    website: undefined,
    linkedin: 'https://www.linkedin.com/in/brandoncarson/',
    accentColor: '#93C5FD',
    borderColor: 'rgba(96,165,250,0.4)',
    bgColor: 'rgba(96,165,250,0.20)',
    glowColor: 'rgba(96,165,250,0.18)',
    hoverBorder: '#60A5FA',
    hoverBg: 'rgba(96,165,250,0.12)',
  },
]

export default function Team() {
  return (
    <section id="team" className="section-alt px-5 py-16 md:px-20 md:py-24">
      <p className="eyebrow">Who we are</p>
      <h2 className="section-title">
        Two senior practitioners,
        <br />
        two complementary lenses
      </h2>
      <p className="section-desc">
        Decades of enterprise HR and L&D experience between us. One of us
        obsesses over the systems. The other obsesses over the leaders inside
        them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {TEAM.map((p) => (
          <div
            key={p.name}
            className="bg-midnight rounded-[20px] flex flex-col text-white relative overflow-hidden"
            style={{ padding: '44px', minHeight: '380px' }}
          >
            {/* Corner glow */}
            <div
              className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
              }}
            />

            <p
              className="font-display text-[11px] font-semibold tracking-[0.09375rem] uppercase mb-[18px] relative"
              style={{ color: p.accentColor }}
            >
              {p.side}
            </p>

            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-display text-[16px] font-medium mb-5 relative"
              style={{
                background: p.bgColor,
                border: `1px solid ${p.borderColor}`,
                color: p.accentColor,
              }}
            >
              {p.initials}
            </div>

            <p
              className="font-display text-[24px] font-normal text-white mb-1.5 relative"
              style={{ letterSpacing: '-0.3px' }}
            >
              {p.name}
            </p>
            <p
              className="text-[11px] font-semibold tracking-[0.6px] uppercase mb-[18px] relative"
              style={{ color: p.accentColor }}
            >
              {p.role}
            </p>
            <p className="text-[14px] text-white/[0.78] leading-[1.75] mb-6 relative flex-1">
              {p.bio}
            </p>

            <div className="flex flex-wrap gap-3 relative">
              {p.website && (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-white/90 py-2.5 px-[22px] rounded-3xl"
                  style={{ border: '1px solid rgba(255,255,255,0.18)' }}
                >
                  Learn more about Michelle
                  <span style={{ color: p.accentColor }}>↗</span>
                </a>
              )}
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-midnight py-2.5 px-[22px] rounded-3xl"
                style={{ background: p.accentColor }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
