'use client'

// Panel config: rotateZ fans them, translateY lifts outer ones up so bottoms align,
// the panels overlap naturally left-to-right via z-index.
// This matches image 2: tall portrait cards, fanning out from center,
// outer cards angled and partially behind neighbors, bottoms arc upward.
const PANELS = [
  { label: 'Rainy Café',      emoji: '☕', bg: 'linear-gradient(170deg,#0d1f3c,#1a3055)',  rotZ: -22, ty: -90, width: 148, height: 260, zIdx: 1 },
  { label: 'Cherry Blossom',  emoji: '🌸', bg: 'linear-gradient(170deg,#2e0f22,#501a3a)',  rotZ: -12, ty: -45, width: 158, height: 275, zIdx: 2 },
  { label: 'City Lights',     emoji: '🌆', bg: 'linear-gradient(170deg,#251500,#3d2800)',  rotZ: -5,  ty: -14, width: 165, height: 285, zIdx: 3 },
  { label: 'Polaroid Moment', emoji: '📸', bg: 'linear-gradient(170deg,#130a28,#221040)',  rotZ:  0,  ty:   0, width: 170, height: 295, zIdx: 4 },
  { label: 'Sunset Beach',    emoji: '🌅', bg: 'linear-gradient(170deg,#2e1000,#4a2000)',  rotZ:  5,  ty: -14, width: 165, height: 285, zIdx: 3 },
  { label: 'Ocean Walk',      emoji: '🌊', bg: 'linear-gradient(170deg,#002030,#003850)',  rotZ:  12, ty: -45, width: 158, height: 275, zIdx: 2 },
  { label: 'Ferris Wheel',    emoji: '🎡', bg: 'linear-gradient(170deg,#100d30,#1c1850)',  rotZ:  22, ty: -90, width: 148, height: 260, zIdx: 1 },
]

const STARS = Array.from({ length: 100 }, (_, i) => ({
  x: (i * 137.508) % 100,
  y: (i * 97.3) % 100,
  size: (i % 3) * 0.7 + 0.5,
  opacity: (i % 6) * 0.08 + 0.1,
  twinkle: i % 5 === 0,
}))

export default function HeroSection() {
  return (
    <section style={{
      background: 'radial-gradient(ellipse at 50% 0%, #2a1205 0%, #160904 40%, #0a0503 100%)',
      minHeight: '92vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '3rem',
    }}>

      {/* Stars */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {STARS.map((s, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${s.x}%`, top: `${s.y}%`,
            width: `${s.size}px`, height: `${s.size}px`,
            borderRadius: '50%', background: '#f5ede0', opacity: s.opacity,
            animation: s.twinkle ? `twinkle ${2 + (i % 3)}s ease-in-out ${(i % 7) * 0.3}s infinite` : undefined,
          }} />
        ))}
      </div>

      {/* Warm atmospheric glow behind panels */}
      <div style={{
        position: 'absolute', bottom: '25%', left: '50%',
        transform: 'translateX(-50%)',
        width: '900px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(160,70,15,0.22) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Logo */}
      <div style={{
        position: 'relative', zIndex: 20,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        marginBottom: '2.8rem',
        animation: 'fade-up 0.7s ease forwards',
      }}>
        <h1 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
          color: '#f5ede0', lineHeight: 1,
          textShadow: '2px 3px 0 #3d1a05, 0 0 50px rgba(212,140,40,0.45)',
        }}>
          ✦ TripZine
        </h1>
        <span style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1rem', color: '#d4a843',
          letterSpacing: '0.38em', fontWeight: 700,
          marginTop: '4px',
          textShadow: '0 0 20px rgba(212,168,67,0.5)',
        }}>
          WHAT IF
        </span>
      </div>

      {/* ── Fan Gallery ──
          All 7 panels share the same bottom anchor point.
          rotateZ fans them; translateY lifts outer cards so bottoms arc.
          Overlap is achieved by z-index + negative margins on the row.
      */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        width: '100%',
        height: '360px',
        marginBottom: '1rem',
      }}>
        {/* Inner container — panels sit here with negative margins to overlap */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          position: 'relative',
        }}>
          {PANELS.map((p, i) => {
            const distFromCenter = Math.abs(i - 3)
            // Outer panels overlap inward more
            const marginLeft = i === 0 ? 0 : -40 - distFromCenter * 6

            return (
              <div
                key={i}
                style={{
                  width: `${p.width}px`,
                  height: `${p.height}px`,
                  flexShrink: 0,
                  marginLeft: `${marginLeft}px`,
                  zIndex: p.zIdx,
                  transformOrigin: '50% 100%',
                  transform: `rotateZ(${p.rotZ}deg) translateY(${p.ty}px)`,
                  transition: 'filter 0.2s, transform 0.2s',
                  cursor: 'pointer',
                  animation: `fade-up 0.5s ${i * 0.07}s ease forwards`,
                  opacity: 0,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(212,168,67,0.4))'
                  el.style.zIndex = '20'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.filter = ''
                  el.style.zIndex = String(p.zIdx)
                }}
              >
                <div style={{
                  width: '100%', height: '100%',
                  borderRadius: '16px',
                  background: p.bg,
                  border: '1.5px solid rgba(255,255,255,0.06)',
                  boxShadow: `
                    0 0 0 1px rgba(212,168,67,0.1),
                    0 16px 48px rgba(0,0,0,0.75),
                    inset 0 1px 0 rgba(255,255,255,0.07)
                  `,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '10px',
                }}>
                  {/* Vignette overlay */}
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '16px',
                    background: 'radial-gradient(ellipse at 50% 30%, transparent 35%, rgba(0,0,0,0.5) 100%)',
                    pointerEvents: 'none',
                  }} />
                  {/* Top sheen */}
                  <div style={{
                    position: 'absolute', top: 0, left: '5%', right: '5%', height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                  }} />
                  {/* Placeholder image box */}
                  <div style={{
                    width: '78%', height: '52%', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px dashed rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: `${2.2 - distFromCenter * 0.1}rem`,
                    position: 'relative', zIndex: 1,
                  }}>
                    {p.emoji}
                  </div>
                  {/* Label */}
                  <span style={{
                    fontFamily: "'Caveat', cursive",
                    color: 'rgba(245,237,224,0.72)',
                    fontSize: '0.88rem', fontWeight: 700,
                    position: 'relative', zIndex: 1,
                    textAlign: 'center', padding: '0 8px',
                  }}>
                    {p.label}
                  </span>
                  {/* Bottom warm glow */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px',
                    background: 'linear-gradient(0deg, rgba(160,80,15,0.25), transparent)',
                  }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: 'relative', zIndex: 20,
        textAlign: 'center', padding: '1.5rem 1rem 3rem',
        animation: 'fade-up 0.7s 0.4s ease forwards', opacity: 0,
      }}>
        <h2 style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.3rem, 2.6vw, 1.85rem)',
          color: '#f5ede0', marginBottom: '10px',
          textShadow: '0 2px 10px rgba(0,0,0,0.6)',
        }}>
          Explore Your Journey &amp; Imagine &#39;What If?&#39;
        </h2>
        <p style={{
          fontFamily: "'Nunito', sans-serif",
          color: 'rgba(245,237,224,0.55)',
          fontSize: '0.95rem', maxWidth: '500px',
          margin: '0 auto 26px', lineHeight: 1.65,
        }}>
          Create immersive travel stories by combining real moments with imaginative
          &#34;What If&#34; scenarios, all in beautifully crafted anime panels.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 800,
              fontSize: '0.95rem', letterSpacing: '0.03em',
              color: '#f5ede0', background: 'rgba(160,80,15,0.18)',
              border: '2px solid rgba(212,168,67,0.6)',
              padding: '12px 32px', borderRadius: '30px',
              cursor: 'pointer', transition: 'all 0.2s',
              boxShadow: '0 0 20px rgba(212,168,67,0.1)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(212,168,67,0.18)'
              el.style.borderColor = '#d4a843'
              el.style.boxShadow = '0 0 32px rgba(212,168,67,0.28)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(160,80,15,0.18)'
              el.style.borderColor = 'rgba(212,168,67,0.6)'
              el.style.boxShadow = '0 0 20px rgba(212,168,67,0.1)'
            }}
          >
            ✦ Start Your TripZine ✦
          </button>
          <button
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 700,
              fontSize: '0.95rem',
              color: 'rgba(245,237,224,0.6)', background: 'transparent',
              border: '2px solid rgba(245,237,224,0.16)',
              padding: '12px 32px', borderRadius: '30px',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(245,237,224,0.4)'
              el.style.color = '#f5ede0'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(245,237,224,0.16)'
              el.style.color = 'rgba(245,237,224,0.6)'
            }}
          >
            View Examples
          </button>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
