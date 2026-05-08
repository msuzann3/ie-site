import { ImageResponse } from 'next/og'

export const alt = 'Brandon Carson — Executive Coaching & Learning Strategy · Innovate + Elevate'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadSyne(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;600&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    ).then((r) => r.text())
    const url = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1]
    if (!url) return null
    return fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  const fontData = await loadSyne()
  const fonts = fontData
    ? [{ name: 'Syne', data: fontData, weight: 400 as const, style: 'normal' as const }]
    : []

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1B35',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 72px',
          fontFamily: fontData ? 'Syne, sans-serif' : 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Azure glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 65%)',
          }}
        />
        {/* Azure glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-40px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(147,197,253,0.10) 0%, transparent 65%)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: 'white', fontSize: '26px', fontWeight: 400, letterSpacing: '-0.5px' }}>
            I<span style={{ color: '#0B8F68' }}>+</span>E
          </span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '18px', margin: '0 4px' }}>·</span>
          <span style={{ color: 'white', fontSize: '22px', fontWeight: 400, letterSpacing: '-0.3px' }}>
            Innovate{' '}
            <span style={{ color: '#0B8F68' }}>+</span>
            {' '}Elevate
          </span>
        </div>

        {/* Pill tag */}
        <div
          style={{
            display: 'flex',
            marginTop: '36px',
          }}
        >
          <div
            style={{
              background: 'rgba(96,165,250,0.15)',
              border: '1px solid rgba(96,165,250,0.30)',
              borderRadius: '100px',
              padding: '6px 18px',
              fontSize: '13px',
              color: '#93C5FD',
              letterSpacing: '0.04em',
            }}
          >
            Elevate · Executive Coaching &amp; Learning Strategy
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', gap: '16px' }}>
          <div
            style={{
              fontSize: '58px',
              fontWeight: 400,
              color: 'white',
              letterSpacing: '-2px',
              lineHeight: 1.06,
            }}
          >
            Brandon <span style={{ color: '#93C5FD' }}>Carson</span>
          </div>
          <div
            style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: '620px',
            }}
          >
            Executive coach and learning strategist helping leaders grow with clarity and purpose.
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '52px',
            right: '72px',
            fontSize: '15px',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.5px',
          }}
        >
          innovate-elevate.ai
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}
