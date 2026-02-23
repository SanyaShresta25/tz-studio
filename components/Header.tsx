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
        background:
          'radial-gradient(circle at 20% -50%, rgba(255,255,255,0.35), transparent 45%), #5b4335',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, #f5ebd7 0%, #eee0c8 100%)',
          borderRadius: '18px 18px 0 0',
          border: '1px solid rgba(92,61,30,0.4)',
          boxShadow:
            '0 3px 8px rgba(44,26,14,0.28), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(91,67,53,0.15)',
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
              color: '#1f1510',
              letterSpacing: '0.01em',
              transform: 'skewX(-8deg)',
              textShadow: '0 1px 0 rgba(255,255,255,0.3)',
            }}
          >
            TripZine
          </span>
          <span
            style={{
              fontSize: '0.95rem',
              letterSpacing: '0.1em',
              fontWeight: 800,
              color: '#3f3128',
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
              background: 'linear-gradient(180deg, #49362d 0%, #2b1f19 100%)',
              borderRadius: '14px',
              padding: '4px 8px',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
              overflowX: 'auto',
              scrollbarWidth: 'none',
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
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  color: link === active ? '#f5ebd7' : '#d6c5ad',
                  fontSize: '0.96rem',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  whiteSpace: 'nowrap',
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
                      background: '#f5ebd7',
                      opacity: 0.95,
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
              border: '2px solid #544237',
              background: 'linear-gradient(180deg, #f3e8d3 0%, #e9dbc2 100%)',
              color: '#34251d',
              fontWeight: 800,
              letterSpacing: '0.06em',
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.65)',
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
