'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 text-[14px] text-midnight font-light placeholder-text-mid/60 bg-silver border border-midnight/[0.12] focus:outline-none focus:border-emerald focus:ring-1 focus:ring-emerald/30 transition'

  return (
    <div
      className="bg-white rounded-[20px] p-7 md:p-10"
      style={{ border: '0.5px solid rgba(13,27,53,0.09)' }}
    >
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: '#E0F5EE' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B8F68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="font-display text-[18px] font-normal text-midnight" style={{ letterSpacing: '-0.2px' }}>
            Message received.
          </p>
          <p className="text-[14px] text-text-mid font-light leading-relaxed">
            We&apos;ll write back within two business days.
          </p>
        </div>
      ) : (
        /* data-netlify and honeypot registered at build time by Netlify's HTML parser */
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Netlify required hidden inputs */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot — hidden from humans, filled by bots */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] tracking-[0.0625rem] uppercase font-semibold text-text-mid" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] tracking-[0.0625rem] uppercase font-semibold text-text-mid" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] tracking-[0.0625rem] uppercase font-semibold text-text-mid" htmlFor="message">
              What are you working on?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="A paragraph or two about what you're navigating is plenty to start."
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === 'error' && (
            <p className="text-[13px] text-red-500 font-light">
              Something went wrong — please email us directly at{' '}
              <a href="mailto:info@innovate-elevate.ai" className="underline">
                info@innovate-elevate.ai
              </a>
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  )
}
