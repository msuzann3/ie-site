import { ImageResponse } from 'next/og'

export const alt = 'Speaking — Michelle Lentz & Brandon Carson · Innovate + Elevate'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

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
        {/* Emerald glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(11,143,104,0.22) 0%, transparent 65%)',
            display: 'flex',
          }}
        />
        {/* Blue glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-40px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.14) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '26px', fontWeight: 400, letterSpacing: '-0.5px' }}>
            <span>I</span>
            <span style={{ color: '#0B8F68' }}>+</span>
            <span>E</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '18px', margin: '0 4px' }}>·</span>
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '22px', fontWeight: 400, letterSpacing: '-0.3px' }}>
            <span>Innovate</span>
            <span style={{ color: '#0B8F68', margin: '0 6px' }}>+</span>
            <span>Elevate</span>
          </div>
        </div>

        {/* Pill tag */}
        <div style={{ display: 'flex', marginTop: '36px' }}>
          <div
            style={{
              display: 'flex',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              padding: '6px 18px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.08em',
            }}
          >
            KEYNOTES · WORKSHOPS · CONFERENCE SESSIONS
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '56px',
              fontWeight: 400,
              letterSpacing: '-2px',
              lineHeight: 1.06,
              color: 'white',
            }}
          >
            Talks on AI, learning,
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '56px',
              fontWeight: 400,
              letterSpacing: '-2px',
              lineHeight: 1.06,
              color: 'white',
            }}
          >
            and the future of work.
          </div>

          {/* Two name pills */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <div
              style={{
                display: 'flex',
                background: 'rgba(11,143,104,0.18)',
                border: '1px solid rgba(11,143,104,0.35)',
                borderRadius: '100px',
                padding: '8px 22px',
                fontSize: '16px',
                color: '#4DD4A8',
              }}
            >
              Michelle Lentz · Innovate
            </div>
            <div
              style={{
                display: 'flex',
                background: 'rgba(96,165,250,0.14)',
                border: '1px solid rgba(96,165,250,0.30)',
                borderRadius: '100px',
                padding: '8px 22px',
                fontSize: '16px',
                color: '#93C5FD',
              }}
            >
              Brandon Carson · Elevate
            </div>
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            display: 'flex',
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
