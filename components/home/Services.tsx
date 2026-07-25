import { SERVICES } from '@/lib/data'
import Icon from '@/components/ui/Icon'

export default function Services() {
  return (
    <section id="what-we-do" className="section-alt px-5 py-16 md:px-20 md:py-24">
      <p className="eyebrow">What we do</p>
      <h2 className="section-title">
        Two practices,
        <br />
        one engagement model
      </h2>
      <p className="section-desc">
        Some clients come for AI strategy. Others come for learning and
        leadership transformation. Many need both — because organizational
        change rarely respects the line between systems and people.
      </p>

      {/* Service grid with hairline dividers via gap + bg trick */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-[20px] overflow-hidden border border-midnight/[0.09]"
        style={{ gap: '1px', background: 'rgba(13,27,53,0.09)' }}
      >
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="bg-white hover:bg-silver transition-colors duration-150 p-8"
            style={{ padding: '36px 32px' }}
          >
            <p
              className="font-display text-[11px] font-semibold tracking-[0.075rem] uppercase mb-3.5"
              style={{ color: s.side === 'innovate' ? '#0B8F68' : '#2563EB' }}
            >
              {s.sideLabel}
            </p>
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-[18px]"
              style={{
                background: s.side === 'innovate' ? '#E0F5EE' : '#DBEAFE',
              }}
            >
              <Icon
                name={s.icon}
                size={20}
                style={{ color: s.side === 'innovate' ? '#0B8F68' : '#2563EB' }}
              />
            </div>
            <h3
              className="font-display text-[17px] font-medium text-midnight mb-2.5"
              style={{ letterSpacing: '-0.2px' }}
            >
              {s.title}
            </h3>
            <p className="text-[14px] text-text-mid leading-[1.7] font-light">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
