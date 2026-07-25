import { PILLARS } from '@/lib/data'

export default function Philosophy() {
  return (
    <section id="ways-of-work" className="bg-midnight text-white px-5 py-16 md:px-20 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] mb-3" style={{ color: 'rgba(11,143,104,0.85)' }}>
        Ways of work
      </p>
      <h2
        className="font-display font-normal text-white leading-snug tracking-section mb-4 max-w-[580px]"
        style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}
      >
        Technology adopts.
        <br />
        People transform.
      </h2>
      <p className="text-base text-white/55 max-w-[540px] leading-relaxed font-light mb-[52px]">
        The technology mostly works. The hard part — always — is the humans, and
        the systems they work inside. Strategy without enablement stalls.
        Capability without strategy drifts. We connect both because
        organizations need both.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {PILLARS.map((p) => (
          <div
            key={p.n}
            className="rounded-2xl p-8"
            style={{ border: '0.5px solid rgba(255,255,255,0.10)' }}
          >
            <div
              className="font-display font-normal leading-none mb-4"
              style={{
                fontSize: '48px',
                letterSpacing: '-2px',
                color: 'rgba(11,143,104,0.4)',
              }}
            >
              {p.n}
            </div>
            <div
              className="font-display text-[18px] font-medium text-white mb-2.5"
            >
              {p.title}
            </div>
            <div className="text-[14px] text-white/60 leading-[1.75] font-light">
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
