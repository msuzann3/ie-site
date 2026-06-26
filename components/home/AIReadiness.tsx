export default function AIReadiness() {
  return (
    <section className="bg-white px-5 py-16 md:px-20 md:py-24">
      <div className="max-w-[1180px] mx-auto rounded-[24px] overflow-hidden bg-midnight text-white grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-center gap-8 px-7 py-10 md:px-12 md:py-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald-on-dark mb-3">
            Free interactive assessment
          </p>
          <h2
            className="font-display font-normal text-white leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-1px' }}
          >
            How ready is your organization for AI?
          </h2>
          <p className="text-[15px] md:text-[16px] text-white/65 font-light leading-[1.75] max-w-[680px]">
            Get a practical readiness score across strategy, execution, innovation,
            data, adoption, and governance—plus a downloadable results report.
          </p>
        </div>
        <a
          href="/ai-readiness/"
          className="inline-flex items-center justify-center gap-2 bg-emerald hover:bg-emerald-mid text-white hover:text-white no-underline text-sm font-medium py-3.5 px-7 rounded-[32px] transition-colors duration-150 whitespace-nowrap"
        >
          Take the assessment
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
