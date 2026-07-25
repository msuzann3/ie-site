import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found — Innovate + Elevate',
}

export default function NotFound() {
  return (
    <div className="bg-midnight min-h-screen flex flex-col items-center justify-center px-5 text-white relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(11,143,104,0.18) 0%, transparent 65%)' }}
      />
      <div
        className="absolute -bottom-[80px] -left-[80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 65%)' }}
      />

      <div className="relative text-center max-w-[560px]">
        {/* Logo */}
        <div className="font-display text-[22px] font-normal mb-16 flex items-center justify-center gap-1.5">
          <span>Innovate</span>
          <span className="text-emerald mx-1">+</span>
          <span>Elevate</span>
        </div>

        {/* 404 */}
        <p
          className="font-display font-normal text-emerald mb-4"
          style={{ fontSize: 'clamp(80px, 14vw, 140px)', letterSpacing: '-4px', lineHeight: 1 }}
        >
          404
        </p>

        <h1
          className="font-display font-normal text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(24px, 4vw, 38px)', letterSpacing: '-0.05rem' }}
        >
          This page doesn&apos;t exist.
        </h1>
        <p className="text-[16px] text-white/50 font-light leading-relaxed mb-10">
          You may have followed a broken link, or the page may have moved.
          Either way, we can get you somewhere useful.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center text-[14px] font-medium text-midnight bg-emerald hover:bg-emerald-mid transition-colors px-6 py-3 rounded-3xl"
          >
            Back to home
          </Link>
          <Link
            href="/speaking"
            className="inline-flex items-center justify-center text-[14px] text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-colors px-6 py-3 rounded-3xl"
          >
            Speaking
          </Link>
        </div>
      </div>
    </div>
  )
}
