'use client'

import Header from "@/components/Header"
import Link from "next/link"
import "./home.css"

export default function HomePage() {

  return (

    <div>

      {/* Background effects */}

      <div className="stars"></div>
      <div className="particles" id="particles"></div>
      <div className="vignette"></div>
      <div className="petals-layer" id="petals-layer"></div>


      {/* Ticker */}

      <div className="ticker">
        <span className="ticker-inner">
          “Your Journey, Your Story.” ✦ “Your Journey, Your Story.” ✦ “Your Journey, Your Story.”
        </span>
      </div>


      {/* Header */}

      <Header />


      {/* Main Content */}

      <section className="main-content">

        <div className="left-col">

          {/* Hero */}

          <div className="hero-text">
            <h1 className="hero-title">Create Interactive Travel Stories!</h1>
            <p className="hero-sub">
              Record Real Moments & Explore "What IF" Scenarios
            </p>
          </div>


          {/* Panels */}

          <div className="panels-row">

            {/* REALITY */}

            <div className="story-panel panel-reality">

              <div className="panel-badge badge-reality">
                <span className="badge-icon">🌧</span>
                <span>REALITY</span>
              </div>

              <div className="scene scene-rain">
                <div className="rain-sky"></div>
                <div className="rain-streaks"></div>
                <div className="rain-building"></div>
                <div className="rain-lamp"></div>
                <div className="snow-sparkles" id="rain-sparks"></div>
              </div>

              <div className="panel-caption caption-wi">
                <strong>We got caught in the rain,</strong><br />
                so we found a cozy café…
              </div>

            </div>


            {/* WHAT IF */}

            <div className="story-panel panel-whatif">

              <div className="panel-badge badge-whatif">
                <span className="badge-icon">🌸</span>
                <span>WHAT IF</span>
              </div>

              <div className="scene scene-blossom">
                <div className="blossom-sky"></div>
                <div className="btree btree-l"></div>
                <div className="btree btree-r"></div>
                <div className="bpetals" id="bpetals"></div>
              </div>

              <div className="panel-caption caption-wi">
                <strong>What if it was sunny?</strong><br />
                We could've enjoyed a cherry blossom festival…
              </div>

              <button className="arrow-btn">→</button>

            </div>

          </div>


          {/* CTA (optional redirect inside home) */}

        </div>


        {/* Sidebar */}

        <aside className="sidebar">

          <div className="sidebar-card">

            <h3 className="sidebar-title">Share Your Adventure!</h3>

            <p className="sidebar-body">
              Create and share your TripZine as a manga-style travel magazine with alternate realities!
            </p>

            <button className="s-btn">COPY LINK</button>
            <button className="s-btn">GENERATE PDF</button>
            <button className="s-btn">SHARE QR</button>

          </div>

        </aside>

      </section>


      {/* Footer */}

    </div>
  )
}