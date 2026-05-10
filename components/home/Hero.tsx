import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative bg-midnight min-h-[640px] md:min-h-screen flex flex-col justify-end overflow-hidden text-white px-5 pb-16 md:px-20 md:pb-24"
    >
      {/* Emerald radial glow — top right */}
      <div
        className="absolute top-0 right-0 w-[720px] h-[720px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(11,143,104,0.16) 0%, transparent 65%)',
        }}
      />
      {/* Azure radial glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 80%, rgba(96,165,250,0.10) 0%, transparent 65%)',
        }}
      />
      {/* Giant watermark — hidden on mobile */}
      <div
        className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 font-display font-normal select-none pointer-events-none leading-none"
        style={{
          fontSize: '360px',
          letterSpacing: '-8px',
          color: 'rgba(255,255,255,0.06)',
        }}
      >
        I<span style={{ color: 'rgba(11,143,104,0.14)' }}>+</span>E
      </div>

      {/* Content — staggered fade-up */}
      <div className="hero-content relative flex flex-col">
        <p className="animate-fade-up opacity-0 text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-3">
          AI strategy &amp; executive coaching
        </p>

        <h1
          className="animate-fade-up opacity-0 font-display font-normal leading-[1.06] tracking-display text-white mb-7 max-w-[820px]"
          style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}
        >
          Innovate the <em className="text-emerald">systems</em>.
          <br />
          Elevate the <em className="text-emerald">people</em>.
        </h1>

        <p
          className="animate-fade-up opacity-0 text-[18px] text-white/[0.62] max-w-[560px] leading-[1.7] font-light mb-10"
        >
          We help HR and L&D leaders adopt AI without losing the humans inside
          the org chart. Two practices — AI strategy and executive coaching —
          under one roof, because the work is rarely just one or the other.
        </p>

        <div className="animate-fade-up opacity-0 flex gap-3.5 flex-wrap">
          <Link href="#contact" className="btn-primary">
            Schedule a conversation
          </Link>
          <Link href="#what-we-do" className="btn-ghost-dark">
            See how we work
          </Link>
        </div>
      </div>
    </section>
  )
}
