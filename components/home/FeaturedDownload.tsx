export default function FeaturedDownload() {
  return (
    <div className="bg-[#0D1B35] border-b border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-[0.08rem] px-2.5 py-1 rounded-[20px]"
            style={{ color: '#4DD4A8', background: 'rgba(77,212,168,0.12)' }}
          >
            Free eBook
          </span>
          <p className="text-[13px] md:text-[14px] text-white/75 font-light leading-snug">
            <span className="text-white font-normal">The AI-Powered Workforce</span>
            <span className="hidden sm:inline text-white/40 mx-2">·</span>
            <span className="hidden sm:inline">Brandon Carson &amp; Dr. Markus Bernhardt</span>
          </p>
        </div>
        <a
          href="/downloads/ai-powered-workforce.pdf"
          download
          className="flex-shrink-0 inline-flex items-center gap-2 text-[13px] font-medium whitespace-nowrap"
          style={{ color: '#4DD4A8' }}
        >
          Download PDF
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
