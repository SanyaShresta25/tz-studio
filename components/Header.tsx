'use client'
import { useState } from 'react'

export default function Header() {
  const navLinks = ['HOME', 'MY TRIPS', 'GUIDE', 'BLOG', 'CONTACT']
  const [active, setActive] = useState('HOME')

  return (
    <header
      style={{
        position: 'relative',
        zIndex: 50,
        padding: '10px 18px 0',
        background: '#000000',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#000000',
          borderRadius: '0',
          border: 'none',
          height: '58px',
          padding: '0 16px 0 20px',
          gap: '18px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, minWidth: '158px' }}>
          <span
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: '2.2rem',
              color: '#ffffff',
              letterSpacing: '0.01em',
              transform: 'skewX(-8deg)',
            }}
          >
            TripZine
          </span>
          <span
            style={{
              fontSize: '0.95rem',
              letterSpacing: '0.1em',
              fontWeight: 800,
              color: '#d4d4d8',
              marginLeft: '40px',
              marginTop: '-2px',
            }}
          >
            WHAT IF
          </span>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            minWidth: 0,
          }}
        >
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              background: '#000000',
              borderRadius: '10px',
              padding: '4px 8px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActive(link)
                }}
                className="relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold tracking-[0.04em] transition"
                style={{
                  textDecoration: 'none',
                  color: active === link ? '#ffffff' : '#a1a1aa',
                }}
              >
                {link}
                {link === active && (
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      right: '14px',
                      bottom: '3px',
                      height: '2px',
                      borderRadius: '999px',
                      background: '#ffffff',
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          <button
            style={{
              marginLeft: '14px',
              height: '34px',
              minWidth: '108px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.35)',
              background: '#000000',
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: '0.06em',
              fontSize: '0.9rem',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </header>
  )
}
