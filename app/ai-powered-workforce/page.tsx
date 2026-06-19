import type { Metadata } from 'next'

const pdfPath = '/downloads/ai-powered-workforce.pdf'

export const metadata: Metadata = {
  title: "The AI-Powered Workforce — Brandon Carson's eBook",
  description:
    'View or download The AI-Powered Workforce, Brandon Carson and Dr. Markus Bernhardt\'s eBook on AI and workforce strategy.',
  robots: {
    index: false,
    follow: false,
  },
}

const DownloadIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const ViewIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export default function AiPoweredWorkforcePage() {
  return (
    <section className="min-h-screen bg-silver pt-28 pb-16">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow">Free eBook</p>
            <h1 className="font-display text-[40px] font-normal leading-tight text-midnight md:text-[58px]">
              The AI-Powered Workforce
            </h1>
            <p className="mt-4 max-w-[560px] text-[18px] font-light leading-relaxed text-text-mid">
              A CEO&apos;s Roadmap to Competitive Advantage by Brandon Carson
              and Dr. Markus Bernhardt.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[32px] bg-midnight px-6 text-[14px] font-medium text-white transition-colors duration-150 hover:bg-midnight-2"
            >
              <ViewIcon />
              View PDF
            </a>
            <a
              href={pdfPath}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[32px] border border-midnight/15 bg-white px-6 text-[14px] font-medium text-midnight transition-colors duration-150 hover:border-emerald hover:text-emerald"
            >
              <DownloadIcon />
              Download PDF
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-midnight/10 bg-white shadow-[0_20px_70px_rgba(13,27,53,0.12)]">
          <object
            data={`${pdfPath}#view=FitH`}
            type="application/pdf"
            className="h-[72vh] min-h-[620px] w-full"
            aria-label="The AI-Powered Workforce PDF viewer"
          >
            <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <p className="max-w-[520px] text-base font-light leading-relaxed text-text-mid">
                This browser cannot display the PDF inline. Use the buttons
                above to view it in a new tab or download a copy.
              </p>
              <a href={pdfPath} download className="btn-primary">
                Download PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  )
}
