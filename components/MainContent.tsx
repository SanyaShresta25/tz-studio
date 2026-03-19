'use client'

import { useState } from 'react'

export default function MainContent() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return null
  // removed from here (in notes landing 2nd part)
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


