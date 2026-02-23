'use client'
import { useState } from 'react'

export default function Header() {
  const navLinks = ['HOME', 'MY TRIPS', 'GUIDE', 'BLOG', 'CONTACT']
  const [active, setActive] = useState('HOME')

  return (
    <header className="relative z-50 w-full px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between rounded-2xl border border-[#d8b89455] bg-[linear-gradient(180deg,#f5ebd7_0%,#ead9bf_100%)] px-4 shadow-[0_8px_24px_rgba(0,0,0,0.24)] sm:px-6">
        <div className="mr-4 flex min-w-[140px] flex-col leading-none">
          <span className="font-['Fredoka_One'] text-[2rem] text-[#241912]">TripZine</span>
          <span className="ml-8 -mt-1 text-[0.72rem] font-extrabold tracking-[0.18em] text-[#4a3427]">WHAT IF</span>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
          <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto rounded-xl bg-[linear-gradient(180deg,#4a372d_0%,#2d211b_100%)] p-1 [scrollbar-width:none]">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActive(link)
                }}
                className="relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold tracking-[0.04em] text-[#d9c5ad] transition hover:text-[#f7e8d3]"
                style={{ color: active === link ? '#f5e8d3' : undefined }}
              >
                {link}
                {active === link && (
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[#f3e2cc]" />
                )}
              </a>
            ))}
          </nav>

          <button className="h-9 min-w-[104px] flex-shrink-0 rounded-full border-2 border-[#4e3b2f] bg-[linear-gradient(180deg,#f4e7d2_0%,#e7d5bc_100%)] px-4 text-sm font-extrabold tracking-[0.05em] text-[#2f221b] transition hover:bg-[linear-gradient(180deg,#efe0c8_0%,#e1ccb0_100%)]">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  )
}
