'use client'

import { useState } from 'react'

export default function MainContent() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main
      style={{
        background: 'linear-gradient(160deg, #f5ede0 0%, #ede0cb 50%, #e8d5b8 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: '3rem 2rem 4rem',
      }}
    >


      {/* Subtle paper grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(240,168,184,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212,168,67,0.08) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page title */}
        <div className="mb-8" style={{ animation: 'fade-up 0.7s ease forwards' }}>
          <h2
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#2c1a0e',
              lineHeight: 1.05,
              marginBottom: '10px',
              textShadow: '2px 2px 0 rgba(92,61,30,0.15)',
            }}
          >
            Create Interactive Travel Stories!
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#a0673a',
            }}
          >
            Record Real Moments &amp; Explore &#34;What IF&#34; Scenarios
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* LEFT: Reality + What If panels + bottom controls */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            
            {/* Panels row */}
            <div className="grid grid-cols-2 gap-5">
              {/* REALITY panel */}
              <PanelCard
                type="reality"
                title="REALITY"
                icon="🌧️"
                tagColor="#b8d4e8"
                tagBorder="#7ba7c4"
                caption="We got caught in the rain, so we found a cozy café..."
                placeholderGradient="linear-gradient(160deg, #c8dde8 0%, #a8c4d8 40%, #88aac4 100%)"
                placeholderIcon="🌧️"
                placeholderLabel="Your real photo here"
              />

              {/* WHAT IF panel */}
              <PanelCard
                type="whatif"
                title="WHAT IF ♡"
                icon="🌸"
                tagColor="#f5c6d0"
                tagBorder="#e8a0b0"
                caption={<><strong>What if it was sunny?</strong> We could&apos;ve enjoyed a cherry blossom festival...</>}
                placeholderGradient="linear-gradient(160deg, #f8e8ee 0%, #f0d0da 40%, #e8b8c8 100%)"
                placeholderIcon="🌸"
                placeholderLabel="AI-generated scene"
                hasArrow
              />
            </div>

            {/* Bottom action bar */}
            <div
              style={{
                background: 'rgba(44,26,14,0.06)',
                border: '2px solid rgba(44,26,14,0.12)',
                borderRadius: '12px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <div className="flex items-center gap-4">
                <button className="btn-primary">
                  <span>⬇</span> DOWNLOAD AS PDF
                </button>
                <div style={{ width: '1px', height: '28px', background: 'rgba(44,26,14,0.2)' }} />
                <button className="btn-secondary">
                  <span>📱</span> SHARE WITH QR CODE
                </button>
              </div>
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  color: '#a0673a',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                ✦ Save your story
              </span>
            </div>

            {/* START YOUR TRIPZINE stamp — overlapping bottom-left */}
            <div className="relative mt-2">
              <StampBadge />
            </div>
          </div>

          {/* RIGHT: Share sidebar */}
          <div className="flex flex-col gap-4" style={{ animation: 'fade-up 0.8s 0.2s ease forwards', opacity: 0 }}>
            {/* Share card */}
            <div
              style={{
                background: '#faf4ec',
                border: '2px solid rgba(44,26,14,0.15)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 4px 24px rgba(44,26,14,0.1)',
                position: 'relative',
              }}
            >
              {/* Tape decoration */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  width: '56px',
                  height: '20px',
                  background: 'rgba(212,168,67,0.4)',
                  borderRadius: '3px',
                  transform: 'rotate(-3deg)',
                  border: '1px solid rgba(212,168,67,0.6)',
                }}
              />

              <h3
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: '1.2rem',
                  color: '#2c1a0e',
                  marginBottom: '8px',
                }}
              >
                Share Your Adventure!
              </h3>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.85rem',
                  color: '#5c3d1e',
                  lineHeight: 1.5,
                  marginBottom: '16px',
                }}
              >
                Create and share your TripZine as a manga-style travel magazine with alternate realities!
              </p>

              <div className="flex flex-col gap-3">
                <button className="btn-primary" style={{ justifyContent: 'center' }}>
                  <span>⬇</span> GENERATE PDF
                </button>
                <button
                  className="btn-secondary"
                  style={{ justifyContent: 'center' }}
                  onClick={handleCopy}
                >
                  <span>➤</span> {copied ? 'COPIED!' : 'COPY LINK'}
                </button>
              </div>
            </div>

            {/* Polaroid preview */}
            <div
              style={{
                position: 'relative',
                alignSelf: 'center',
              }}
            >
              <div
                style={{
                  background: '#fdf8f2',
                  border: '2px solid rgba(44,26,14,0.1)',
                  borderRadius: '6px',
                  padding: '10px 10px 28px',
                  boxShadow: '4px 4px 16px rgba(44,26,14,0.15), -2px -1px 8px rgba(255,255,255,0.8)',
                  transform: 'rotate(3deg)',
                  width: '160px',
                }}
              >
                <div
                  style={{
                    width: '140px',
                    height: '110px',
                    borderRadius: '3px',
                    background: 'linear-gradient(135deg, #f0d8e0 0%, #e8c8d4 50%, #d8b8c8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >
                  📷
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '8px',
                    fontFamily: "'Caveat', cursive",
                    fontSize: '0.7rem',
                    color: '#a0673a',
                    fontWeight: 600,
                  }}
                >
                  Your memory ♡
                </div>
              </div>
              {/* Tape on polaroid */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(-2deg)',
                  width: '44px',
                  height: '18px',
                  background: 'rgba(212,168,67,0.45)',
                  borderRadius: '2px',
                  border: '1px solid rgba(212,168,67,0.6)',
                }}
              />
            </div>

            {/* Second generate row */}
            <div className="flex flex-col gap-3">
              <button className="btn-primary" style={{ justifyContent: 'center' }}>
                <span>⬇</span> GENERATE PDF
              </button>
              <button className="btn-secondary" style={{ justifyContent: 'center' }}>
                <span>▣</span> SHARE WITH QR CODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/* ── Panel Card ── */
function PanelCard({
  type, title, icon, tagColor, tagBorder,
  caption, placeholderGradient, placeholderIcon, placeholderLabel, hasArrow,
}: {
  type: string
  title: string
  icon: string
  tagColor: string
  tagBorder: string
  caption: React.ReactNode
  placeholderGradient: string
  placeholderIcon: string
  placeholderLabel: string
  hasArrow?: boolean
}) {
  return (
    <div
      className="panel-card"
      style={{
        background: '#faf4ec',
        border: '2px solid rgba(44,26,14,0.12)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(44,26,14,0.1)',
        position: 'relative',
        animation: 'fade-up 0.7s ease forwards',
        opacity: 0,
        animationDelay: type === 'whatif' ? '0.15s' : '0s',
      }}
    >
      {/* Tag header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          background: tagColor,
          borderBottom: `2px solid ${tagBorder}`,
        }}
      >
        <span style={{ fontSize: '1rem' }}>{icon}</span>
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            color: '#2c1a0e',
          }}
        >
          {title}
        </span>
      </div>

      {/* Placeholder image area */}
      <div
        style={{
          height: '260px',
          background: placeholderGradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          position: 'relative',
        }}
      >
        <span style={{ fontSize: '3.5rem', opacity: 0.5 }}>{placeholderIcon}</span>
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '0.9rem',
            color: 'rgba(44,26,14,0.4)',
            fontWeight: 600,
          }}
        >
          {placeholderLabel}
        </span>

        {/* Arrow button for What If */}
        {hasArrow && (
          <button
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              width: '36px',
              height: '36px',
              background: '#2c1a0e',
              color: '#f5ede0',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
            }}
          >
            →
          </button>
        )}
      </div>

      {/* Caption bubble */}
      <div
        style={{
          padding: '14px 16px',
          borderTop: '1px dashed rgba(44,26,14,0.15)',
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '0.88rem',
            color: '#5c3d1e',
            lineHeight: 1.55,
          }}
        >
          {caption}
        </p>
      </div>
    </div>
  )
}

/* ── Circular Stamp Badge ── */
function StampBadge() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 0' }}>
      <div
        style={{
          width: '110px',
          height: '110px',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Outer dashed ring */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            animation: 'spin-slow 12s linear infinite',
          }}
          viewBox="0 0 110 110"
          width="110"
          height="110"
        >
          <circle
            cx="55"
            cy="55"
            r="50"
            fill="none"
            stroke="#2c1a0e"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <text
            style={{ fontSize: '8px', fontFamily: 'Nunito, sans-serif', fontWeight: 800, letterSpacing: '3.2px' }}
          >
            <textPath href="#circle-path" startOffset="0%">
              ✦ CREATE ✦ COMPARE ✦ SHARE ✦ IMAGINE ✦
            </textPath>
          </text>
          <defs>
            <path id="circle-path" d="M 55,55 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
          </defs>
        </svg>

        {/* Inner filled circle */}
        <div
          style={{
            position: 'absolute',
            inset: '10px',
            background: '#2c1a0e',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1px',
          }}
        >
          <span style={{ fontSize: '0.55rem', color: 'rgba(245,237,224,0.6)', letterSpacing: '0.15em', fontFamily: 'Nunito', fontWeight: 700 }}>START YOUR</span>
          <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: '0.85rem', color: '#f5ede0', lineHeight: 1, textAlign: 'center' }}>TripZine</span>
          <span style={{ fontSize: '0.9rem', marginTop: '2px' }}>→</span>
        </div>
      </div>

      <p
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1.1rem',
          color: '#a0673a',
          fontWeight: 600,
          lineHeight: 1.4,
          maxWidth: '220px',
        }}
      >
        Your journey starts with a single &#34;what if...&#34; ✦
      </p>
    </div>
  )
}


