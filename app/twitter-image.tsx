import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const alt = 'Lanchester R&D — Product Strategy, Systems Design and AI Workflow Consulting'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #06090f 0%, #111827 55%, #1f2937 100%)',
          color: '#f8fafc',
          padding: '72px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#a3e635',
            }}
          />
          <div
            style={{
              letterSpacing: '0.18em',
              fontSize: 24,
              textTransform: 'uppercase',
              color: '#a3e635',
              opacity: 0.95,
            }}
          >
            Lanchester R&D
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 980 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
            }}
          >
            <span>Product Strategy,</span>
            <span>Systems Design,</span>
            <span>AI Workflow Consulting</span>
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.3, color: '#cbd5e1' }}>
            Solve complex operational bottlenecks with clear strategy and measured execution.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 18,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#94a3b8',
          }}
        >
          <span>Systems. Strategy. Execution.</span>
          <span>lanchesterresearchanddesign.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
