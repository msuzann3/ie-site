import { HOME_SPEAKING } from '@/lib/data'

export default function Speaking() {
  return (
    <section id="speaking" className="bg-silver px-5 py-16 md:px-20 md:py-24">
      <p className="eyebrow">Upcoming</p>
      <h2 className="section-title">Where you&apos;ll find us next</h2>
      <p className="section-desc">
        Keynotes, workshops, and conference sessions on AI strategy, governance,
        executive coaching, and the future of HR &amp; L&D.
      </p>

      <div className="speak-list">
        {HOME_SPEAKING.map((s) => (
          <div
            key={`${s.date}-${s.event}`}
            className="speak-row-home bg-white hover:bg-silver transition-colors duration-150 px-4 py-4 md:px-7"
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
            <div
              className="speak-who text-[11px] tracking-[0.0625rem] uppercase font-semibold text-right hidden md:block"
              style={{ color: s.who === 'michelle' ? '#0B8F68' : '#2563EB' }}
            >
              {s.whoLabel}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[14px] text-text-mid font-light">
        Booking enquiries:{' '}
        <a
          href="mailto:speaking@innovate-elevate.ai"
          className="text-emerald hover:text-emerald-mid transition-colors duration-150"
        >
          speaking@innovate-elevate.ai
        </a>
      </p>
    </section>
  )
}
