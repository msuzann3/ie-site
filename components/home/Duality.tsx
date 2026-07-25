export default function Duality() {
  return (
    <section className="bg-white border-t border-b border-midnight/[0.09] grid grid-cols-1 md:grid-cols-2">
      {/* Innovate — left half */}
      <div className="px-5 py-12 md:px-16 md:py-20 border-b md:border-b-0 md:border-r border-midnight/[0.09]">
        <div className="inline-flex items-center gap-2.5 font-display text-[12px] font-medium tracking-[0.09375rem] uppercase text-emerald mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald" />
          Innovate · the AI side
        </div>
        <h3
          className="font-display font-normal text-midnight tracking-[-0.05rem] leading-[1.15] mb-4 max-w-[440px]"
          style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
        >
          The strategy, governance, and workforce readiness to{' '}
          <em className="text-emerald">confidently</em> adopt AI.
        </h3>
        <p className="text-[15px] text-text-mid leading-[1.75] font-light max-w-[440px] mb-7">
          Michelle leads our AI practice — helping HR and L&D organizations move
          from curiosity to capability. Strategy roadmaps, governance frameworks,
          and learning programs that move people forward without leaving anyone
          behind.
        </p>
        <div className="flex items-center gap-3 text-[13px] text-midnight">
          <strong className="font-medium">Michelle Lentz</strong>
          <span className="text-text-mid">·</span>
          <span className="text-emerald font-medium">AI strategy &amp; enablement</span>
        </div>
      </div>

      {/* Elevate — right half */}
      <div className="px-5 py-12 md:px-16 md:py-20 bg-silver">
        <div
          className="inline-flex items-center gap-2.5 font-display text-[12px] font-medium tracking-[0.09375rem] uppercase mb-6"
          style={{ color: '#2563EB' }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: '#2563EB' }} />
          Elevate · the human side
        </div>
        <h3
          className="font-display font-normal text-midnight tracking-[-0.05rem] leading-[1.15] mb-4 max-w-[440px]"
          style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
        >
          The learning and leadership systems that turn strategy into{' '}
          <em style={{ color: '#2563EB' }}>capability</em>.
        </h3>
        <p className="text-[15px] text-text-mid leading-[1.75] font-light max-w-[440px] mb-7">
          Brandon leads our learning and leadership practice — shaping the
          strategies, programs, and ecosystems that develop workforce capability
          at scale.
        </p>
        <div className="flex items-center gap-3 text-[13px] text-midnight">
          <strong className="font-medium">Brandon Carson</strong>
          <span className="text-text-mid">·</span>
          <span className="font-medium" style={{ color: '#2563EB' }}>
            Learning strategy &amp; leadership development
          </span>
        </div>
      </div>
    </section>
  )
}
