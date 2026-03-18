'use client'

import { useMemo, useState } from 'react'

const SLIDES = [
  { title: 'Rainy Café', palette: 'from-slate-800 via-sky-700 to-slate-900' },
  { title: 'Cherry Blossom', palette: 'from-rose-900 via-pink-600 to-fuchsia-900' },
  { title: 'City Lights', palette: 'from-stone-900 via-amber-700 to-zinc-900' },
  { title: 'Polaroid Moment', palette: 'from-violet-900 via-indigo-700 to-slate-900' },
  { title: 'Sunset Beach', palette: 'from-orange-900 via-amber-600 to-rose-950' },
  { title: 'Ocean Walk', palette: 'from-cyan-950 via-sky-600 to-slate-900' },
  { title: 'Ferris Wheel', palette: 'from-purple-950 via-fuchsia-700 to-indigo-950' },
]

const mod = (n: number, m: number) => ((n % m) + m) % m

export default function HeroSection() {
  const [active, setActive] = useState(3)

  const orderedSlides = useMemo(
    () => SLIDES.map((slide, index) => ({ ...slide, offset: index - active })),
    [active],
  )

  const next = () => setActive((v) => mod(v + 1, SLIDES.length))
  const prev = () => setActive((v) => mod(v - 1, SLIDES.length))

  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_-25%,rgba(168,58,44,0.42)_0%,rgba(40,15,22,0.5)_33%,rgba(11,6,11,0.98)_75%,#080408_100%)] px-3 pb-8 pt-1 sm:px-4">
      <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_20%_25%,rgba(255,229,196,0.12)_1px,transparent_1px),radial-gradient(circle_at_75%_65%,rgba(255,229,196,0.09)_1px,transparent_1px)] [background-size:130px_130px,170px_170px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1480px] rounded-b-3xl border border-[#d9baa140] border-t-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(37,19,20,0.52)_0%,rgba(16,9,13,0.9)_60%,rgba(9,5,9,0.98)_100%)] px-4 pb-10 pt-6 shadow-[inset_0_0_0_1px_rgba(255,222,191,0.08)] sm:px-6 lg:px-10">
        <div className="relative z-10 mb-5 text-center">
          <h1 className="font-['Fredoka_One'] text-4xl text-[#f1dfc9] drop-shadow-[0_3px_16px_rgba(0,0,0,0.6)] sm:text-5xl">
            ✦ TripZine
          </h1>
          <p className="mt-0.5 text-xs font-extrabold tracking-[0.24em] text-[#d8b08b] sm:text-sm">WHAT IF</p>
        </div>

        <div className="relative z-10 mx-auto mb-6 h-[315px] w-full max-w-[1320px] [perspective:1400px] sm:h-[350px] lg:h-[390px]">
          <div className="relative h-full w-full [transform-style:preserve-3d]">
            {orderedSlides.map((slide, idx) => {
              const clamped = Math.max(-3, Math.min(3, slide.offset))
              const absOffset = Math.abs(clamped)
              const scale = clamped === 0 ? 1 : 0.8
              const opacity = clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.82 : 0.52
              const z = clamped === 0 ? 140 : 70 - absOffset * 22
              const xPercent = clamped * 15.5
              const yPx = absOffset * 10
              const rotateY = clamped * -17
              const rotateZ = clamped * 1.8
              const visible = absOffset <= 3

              if (!visible) return null

              return (
                <button
                  key={slide.title}
                  onClick={() => setActive(idx)}
                  className="absolute left-1/2 top-1/2 h-[240px] w-[138px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-2xl border border-[#f0d8bd99] text-left transition-all duration-700 ease-out sm:h-[265px] sm:w-[152px] lg:h-[290px] lg:w-[166px]"
                  style={{
                    transform: `translate3d(calc(-50% + ${xPercent}%), calc(-50% + ${yPx}px), ${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                    opacity,
                    zIndex: 20 - absOffset,
                    boxShadow:
                      clamped === 0
                        ? '0 18px 38px rgba(0,0,0,0.52), 0 0 26px rgba(245,188,120,0.35)'
                        : '0 10px 24px rgba(0,0,0,0.44)',
                  }}
                >
                  <div className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${slide.palette}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(255,255,255,0.22),transparent_38%),radial-gradient(circle_at_20%_90%,rgba(0,0,0,0.42),transparent_52%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[rgba(18,10,10,0.9)] to-transparent" />
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-['Caveat'] text-xl text-[#ffe9d1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-2xl">
                      {slide.title}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7c8ab33] bg-[rgba(27,15,19,0.75)] text-xl text-[#efd8c1] backdrop-blur-sm transition hover:border-[#f0d2b566] hover:text-white"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7c8ab33] bg-[rgba(27,15,19,0.75)] text-xl text-[#efd8c1] backdrop-blur-sm transition hover:border-[#f0d2b566] hover:text-white"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold text-[#edd5bc] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-4xl">
            Explore Your Journey &amp; Imagine ‘What If?’
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[rgba(240,220,199,0.84)] sm:text-lg">
            Create immersive travel stories by combining real moments with imaginative “What If” scenarios, all in
            beautifully crafted anime panels.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full border-2 border-[rgba(236,174,108,0.72)] bg-[radial-gradient(circle_at_50%_0%,rgba(253,208,130,0.25),rgba(87,42,20,0.28))] px-8 py-3 text-base font-bold text-[#f4e0cb] transition hover:shadow-[0_0_24px_rgba(246,186,112,0.35)] sm:min-w-[290px] sm:text-xl">
              ✦ Start Your TripZine ✦
            </button>
            <button className="rounded-full border-2 border-[rgba(239,205,173,0.35)] bg-transparent px-8 py-3 text-base font-bold text-[rgba(239,216,191,0.84)] transition hover:border-[rgba(239,205,173,0.65)] hover:text-[#f8e5ce] sm:min-w-[250px] sm:text-xl">
              See It Live
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
