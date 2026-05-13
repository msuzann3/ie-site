import Image from 'next/image'
import type { Variant, PersonSpeakEvent, Publication, PubListItem } from '@/lib/data'
import Icon from '@/components/ui/Icon'

interface StatItem {
  num: string
  label: string
}

interface Offering {
  icon: string
  title: string
  desc: string
}

interface ContactRowData {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}

export interface PersonData {
  variant: Variant
  photo?: string
  nameLine1: string
  nameLine2: string
  initials: string
  side: string
  role: string
  tags: string[]
  stats: StatItem[]
  bioTitle: string
  bio: React.ReactNode
  offeringsEyebrow: string
  offeringsHeadline: React.ReactNode
  offeringsDesc: string
  offerings: Offering[]
  pubsEyebrow: string
  pubsDesc: string
  pubs: Publication[]
  pubsList?: PubListItem[]
  pubsContributing?: PubListItem[]
  speakDesc: React.ReactNode
  speaking: PersonSpeakEvent[]
  linkedin?: string
  contactHeadline: React.ReactNode
  contactDesc: string
  contactRows: ContactRowData[]
}

export default function PersonPage({ data }: { data: PersonData }) {
  const isInnovate = data.variant === 'innovate'

  const accent = isInnovate ? '#0B8F68' : '#2563EB'
  const accentOnDark = isInnovate ? '#4DD4A8' : '#93C5FD'
  const accentLight = isInnovate ? '#E0F5EE' : '#DBEAFE'
  const dotColor = isInnovate ? '#0B8F68' : '#60A5FA'
  const heroGlow = isInnovate
    ? 'radial-gradient(circle, rgba(11,143,104,0.18) 0%, transparent 65%)'
    : 'radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 65%)'
  const initBg = isInnovate ? 'rgba(11,143,104,0.25)' : 'rgba(96,165,250,0.20)'
  const initBorder = isInnovate ? 'rgba(11,143,104,0.4)' : 'rgba(96,165,250,0.4)'
  const contactIconBg = isInnovate ? 'rgba(11,143,104,0.15)' : 'rgba(96,165,250,0.15)'
  const btnStyle = { background: accent }
  const variant = data.variant

  const offeringsGrid =
    data.offerings.length === 4
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3'

  const hasPubsList = data.pubsList && data.pubsList.length > 0
  const hasPubsContributing = data.pubsContributing && data.pubsContributing.length > 0

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="bg-midnight text-white relative overflow-hidden px-5 pt-24 pb-12 md:px-20 md:pt-36 md:pb-20"
      >
        <div
          className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: heroGlow }}
        />
        <div className="grid grid-person-hero items-center relative max-w-[1280px]">
          <div>
            <div
              className="inline-flex items-center gap-2.5 font-display text-[12px] font-medium tracking-[0.09375rem] uppercase mb-6"
              style={{ color: accentOnDark }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: dotColor }} />
              {data.side}
            </div>

            <h1
              className="font-display font-normal text-white leading-[1.02] tracking-display mb-4"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
            >
              {data.nameLine1}
              <br />
              {data.nameLine2}
            </h1>

            <p className="text-[15px] md:text-[16px] text-white/70 font-light leading-[1.7] max-w-[480px] mb-8">
              {data.role}
            </p>

            <div className="flex flex-wrap gap-2 mb-9">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] text-white/75 px-3.5 py-1.5 rounded-[20px]"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '0.5px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="#contact" className="btn-primary" style={btnStyle}>
                Schedule a call
              </a>
              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              )}
              <a href="#offerings" className="btn-ghost-dark">
                {isInnovate ? 'See what I do' : 'See how I work'}
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="portrait-wrap relative rounded-3xl overflow-hidden">
            {data.photo ? (
              <Image
                src={data.photo}
                alt={`${data.nameLine1} ${data.nameLine2}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 480px"
                priority
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center font-display font-normal"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  fontSize: '96px',
                  letterSpacing: '-3px',
                  color: isInnovate ? 'rgba(77,212,168,0.5)' : 'rgba(147,197,253,0.5)',
                }}
              >
                {data.initials}
              </div>
            )}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${isInnovate ? 'rgba(11,143,104,0.15)' : 'rgba(37,99,235,0.15)'} 0%, transparent 50%)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 bg-silver"
        style={{
          gap: '1px',
          background: 'rgba(13,27,53,0.09)',
          borderTop: '0.5px solid rgba(13,27,53,0.09)',
          borderBottom: '0.5px solid rgba(13,27,53,0.09)',
        }}
      >
        {data.stats.map((s, i) => (
          <div key={i} className="bg-silver py-6 px-5 md:py-7 md:px-9">
            <div
              className="font-display text-[28px] md:text-[36px] font-normal text-midnight leading-none mb-1.5"
              style={{ letterSpacing: '-1px' }}
            >
              {s.num.includes('+') ? (
                <>
                  {s.num.replace('+', '')}
                  <span style={{ color: accent }}>+</span>
                </>
              ) : (
                s.num
              )}
            </div>
            <div className="text-[11px] md:text-[12px] text-text-mid leading-[1.5] font-light whitespace-pre-line">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── BIO ── */}
      <section className="bg-white px-5 py-16 md:px-20 md:py-24">
        <div className="grid grid-bio max-w-[1180px]">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.125rem] mb-3"
              style={{ color: accent }}
            >
              About
            </p>
            <h2
              className="font-display font-normal text-midnight leading-[1.2]"
              style={{ fontSize: '28px', letterSpacing: '-0.5px' }}
            >
              {data.bioTitle}
            </h2>
          </div>
          <div
            className="max-w-[640px] font-light"
            style={{ fontSize: '17px', color: '#0D1B35', lineHeight: '1.8' }}
          >
            {data.bio}
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section id="offerings" className="bg-silver px-5 py-16 md:px-20 md:py-24">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.125rem] mb-3"
          style={{ color: accent }}
        >
          {data.offeringsEyebrow}
        </p>
        <h2 className="section-title">{data.offeringsHeadline}</h2>
        <p className="section-desc">{data.offeringsDesc}</p>

        <div
          className={`grid ${offeringsGrid} rounded-[20px] overflow-hidden`}
          style={{
            gap: '1px',
            background: 'rgba(13,27,53,0.09)',
            border: '0.5px solid rgba(13,27,53,0.09)',
          }}
        >
          {data.offerings.map((o) => (
            <div key={o.title} className="bg-white" style={{ padding: '36px 32px' }}>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-[18px]"
                style={{ background: accentLight }}
              >
                <Icon name={o.icon} size={20} style={{ color: accent }} />
              </div>
              <h3
                className="font-display text-[17px] font-medium text-midnight mb-2.5"
                style={{ letterSpacing: '-0.2px' }}
              >
                {o.title}
              </h3>
              <p className="text-[14px] text-text-mid leading-[1.7] font-light">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section className="bg-white px-5 py-16 md:px-20 md:py-24">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.125rem] mb-3"
          style={{ color: accent }}
        >
          {data.pubsEyebrow}
        </p>
        <h2 className="section-title">Publications</h2>
        <p className="section-desc">{data.pubsDesc}</p>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.pubs.map((p) => {
            const cardContent = (
              <div
                key={p.title}
                className={`bg-white rounded-2xl flex flex-col pub-card pub-card-${variant}`}
                style={{
                  border: '0.5px solid rgba(13,27,53,0.09)',
                  padding: '28px 26px',
                  minHeight: '200px',
                }}
              >
                <span
                  className="inline-block self-start text-[10px] tracking-[0.0625rem] uppercase font-semibold px-2.5 py-1 rounded-[20px] mb-4"
                  style={{ color: accent, background: accentLight }}
                >
                  {p.tag}
                </span>
                <h3
                  className="font-display text-[16px] font-normal text-midnight mb-3"
                  style={{ letterSpacing: '-0.2px', lineHeight: '1.4' }}
                >
                  {p.title}
                </h3>
                {p.desc && (
                  <p className="text-[13px] text-text-mid leading-[1.7] font-light mb-3 flex-1">
                    {p.desc}
                  </p>
                )}
                <p className={`text-[12px] text-text-mid ${p.href ? 'flex items-center gap-1' : ''} mt-auto`}>
                  {p.meta}
                  {p.href && !p.download && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent, flexShrink: 0 }}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                  {p.href && p.download && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent, flexShrink: 0 }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  )}
                </p>
              </div>
            )

            return p.href ? (
              <a
                key={p.title}
                href={p.href}
                {...(p.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                className="block no-underline hover:opacity-90 transition-opacity"
              >
                {cardContent}
              </a>
            ) : (
              <div key={p.title}>{cardContent}</div>
            )
          })}
        </div>

        {/* List items */}
        {hasPubsList && (
          <div className="mt-10 max-w-[760px]">
            <ul className="flex flex-col divide-y divide-[rgba(13,27,53,0.07)]">
              {data.pubsList!.map((item) => (
                <li key={item.title} className="py-3.5 flex items-baseline justify-between gap-6">
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-midnight font-light hover:underline"
                        style={{ textDecorationColor: accent }}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-[14px] text-midnight font-light">{item.title}</span>
                    )}
                  </div>
                  <span className="text-[12px] text-text-mid whitespace-nowrap flex-shrink-0">{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contributing writer */}
        {hasPubsContributing && (
          <div className="mt-10 max-w-[760px]">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.125rem] mb-4"
              style={{ color: accent }}
            >
              Contributing writer
            </p>
            <ul className="flex flex-col divide-y divide-[rgba(13,27,53,0.07)]">
              {data.pubsContributing!.map((item) => (
                <li key={item.title} className="py-3.5 flex items-baseline justify-between gap-6">
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-midnight font-light hover:underline"
                        style={{ textDecorationColor: accent }}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-[14px] text-midnight font-light">{item.title}</span>
                    )}
                  </div>
                  <span className="text-[12px] text-text-mid whitespace-nowrap flex-shrink-0">{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ── SPEAKING (hidden when empty) ── */}
      {data.speaking.length > 0 && (
        <section className="bg-silver px-5 py-16 md:px-20 md:py-24">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.125rem] mb-3"
            style={{ color: accent }}
          >
            Speaking
          </p>
          <h2 className="section-title">Speaking engagements</h2>
          <p className="section-desc">{data.speakDesc}</p>

          <div className="speak-list">
            {data.speaking.map((s) => (
              <div
                key={`${s.date}-${s.event}`}
                className="speak-row-person bg-white hover:bg-silver transition-colors duration-150 px-4 py-4 md:px-7"
              >
                <div
                  className="font-display text-[13px] md:text-[14px] font-medium text-midnight"
                  style={{ letterSpacing: '-0.2px' }}
                >
                  {s.date}
                  <span className="text-text-mid font-normal ml-1">{s.yr}</span>
                </div>
                <div>
                  <div
                    className="font-display text-[15px] md:text-[16px] font-medium text-midnight mb-0.5 md:mb-1"
                    style={{ letterSpacing: '-0.2px' }}
                  >
                    {s.event}
                  </div>
                  <div className="text-[12px] md:text-[13px] text-text-mid font-light">{s.topic}</div>
                </div>
                <div className="speak-loc text-[13px] text-text-mid hidden md:block">{s.loc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="bg-midnight text-white px-5 py-16 md:px-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
      >
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.125rem] mb-3"
            style={{ color: accentOnDark }}
          >
            Get in touch
          </p>
          <h2
            className="font-display font-normal text-white leading-snug tracking-section mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}
          >
            {data.contactHeadline}
          </h2>
          <p className="text-base text-white/65 leading-relaxed font-light max-w-[460px]">
            {data.contactDesc}
          </p>
        </div>

        <div
          className="rounded-[20px] p-7 md:p-10"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '0.5px solid rgba(255,255,255,0.10)',
          }}
        >
          {data.contactRows.map((row, i) => (
            <div
              key={row.label}
              className="flex items-start gap-4 py-[18px]"
              style={{
                borderBottom:
                  i < data.contactRows.length - 1
                    ? '0.5px solid rgba(255,255,255,0.08)'
                    : 'none',
              }}
            >
              <div
                className="w-9 h-9 rounded-[10px] flex-shrink-0 flex items-center justify-center"
                style={{ background: contactIconBg, color: accentOnDark }}
              >
                {row.icon}
              </div>
              <div>
                <p className="text-[11px] tracking-[0.0625rem] uppercase font-semibold text-white/45 mb-1">
                  {row.label}
                </p>
                <p className="font-display text-[15px] md:text-[16px] font-medium text-white">
                  <a
                    href={row.href}
                    className={`text-white contact-link-${variant}`}
                  >
                    {row.value}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
