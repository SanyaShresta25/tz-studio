'use client'
import { useState } from 'react'

export default function Header() {
  const navLinks = ['HOME', 'MY TRIPS', 'GUIDE', 'BLOG', 'CONTACT']
  const [active, setActive] = useState('HOME')

  return (
    // Full-width brown bar — the entire header background
    <header style={{
      background: '#2c1a0e',
      position: 'relative',
      zIndex: 50,
      display: 'flex',
      alignItems: 'stretch',
      height: '64px',
    }}>

      {/* ── Logo area — sits in the brown section, left side ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 20px 0 18px',
        flexShrink: 0,
        position: 'relative',
        zIndex: 3,
        // The bottom-right corner curves down to meet the parchment pill
        borderBottomRightRadius: '28px',
        background: '#2c1a0e',
        minWidth: '140px',
      }}>
        <span style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: '1.75rem',
          color: '#f5ede0',
          lineHeight: 1,
          textShadow: '1px 2px 0 #5c3d1e',
          whiteSpace: 'nowrap',
        }}>
          ✦ TripZine
        </span>
        <span style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '0.72rem',
          color: '#d4a843',
          letterSpacing: '0.28em',
          paddingLeft: '1.9rem',
          fontWeight: 700,
          marginTop: '1px',
        }}>
          WHAT IF
        </span>
      </div>

      {/* ── Parchment pill: nav + login ──
          Uses a pseudo-shape: the left edge has a concave bite taken out
          matching the logo block's bottom-right curve, achieved with
          a box + negative corner radius trick via border-radius on a wrapper.
      ── */}
      <div style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* The concave connector piece — brown bg, sits on top-left of pill */}
        {/* This square covers the gap, then a white circle cuts the curve */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          background: '#2c1a0e',
          zIndex: 2,
          // Bottom-right circle cutout via radial-gradient trick
          borderBottomRightRadius: '50%',
          // The parchment peeks from behind it
        }} />

        {/* Main parchment pill body */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #f2e4ca 0%, #e8d4b0 100%)',
          borderRadius: '0 0 28px 28px',
          boxShadow: 'inset 0 -2px 4px rgba(44,26,14,0.07), inset 0 1px 0 rgba(255,255,255,0.5)',
          zIndex: 1,
        }} />

        {/* Nav + Login — sit on top of the pill */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0 20px 0 28px',
        }}>
          {/* Dot separator */}
          <span style={{ color: '#a0673a', fontSize: '0.5rem', marginRight: '8px', opacity: 0.5 }}>●</span>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '0px', flex: 1 }}>
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={e => { e.preventDefault(); setActive(link) }}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: link === active ? 900 : 700,
                  fontSize: '0.87rem',
                  letterSpacing: '0.04em',
                  color: link === active ? '#1a0e05' : '#7a5535',
                  padding: '5px 14px',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                  whiteSpace: 'nowrap',
                  borderBottom: link === active ? '2px solid #8b4513' : '2px solid transparent',
                }}
                onMouseEnter={e => {
                  if (link !== active) (e.currentTarget as HTMLAnchorElement).style.color = '#2c1a0e'
                }}
                onMouseLeave={e => {
                  if (link !== active) (e.currentTarget as HTMLAnchorElement).style.color = '#7a5535'
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          <button
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              color: '#2c1a0e',
              border: '2px solid #5c3d1e',
              background: 'transparent',
              padding: '5px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.15s',
              flexShrink: 0,
              marginRight: '8px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#2c1a0e'
              e.currentTarget.style.color = '#f5ede0'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#2c1a0e'
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </header>
  )
}

