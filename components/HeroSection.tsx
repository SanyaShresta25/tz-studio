'use client'

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function HeroSection() {

const panelsRef = useRef<HTMLDivElement>(null)
const router = useRouter()

useEffect(() => {


  const handleMouseMove = (e: MouseEvent) => {

    if (!panelsRef.current) return

    const x = (e.clientX / window.innerWidth - 0.5) * 10
    const y = (e.clientY / window.innerHeight - 0.5) * 4

    panelsRef.current.style.transform =
      `rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg)`

  }

  document.addEventListener("mousemove", handleMouseMove)

  return () => {
    document.removeEventListener("mousemove", handleMouseMove)
  }

}, [])

return (

<>
  


<section className="hero">

  <div className="stars"></div>
  <div className="particles"></div>

  <div className="logo-wrap">

    <span className="logo-star">✦</span>

    <span className="logo">TripZine</span>

    <div className="tagline-wrap">
      <span className="line"></span>
      <span className="tagline">What If</span>
      <span className="line"></span>
    </div>

  </div>


  {/* PANELS */}

 <div ref={panelsRef} className="panels">
  {[1,2,3,4,5,6,7].map((num) => (
    <div key={num} className={`panel panel-${num}`}>
      <img src={`/panels/${num}.png`} alt={`panel ${num}`} />
    </div>
  ))}
</div>


  <div className="copy">

    <h1>Explore Your Journey & Imagine "What If?"</h1>

    <p>
      Create immersive travel stories by combining real moments with imaginative
      "What If" scenarios, all in beautifully crafted anime panels.
    </p>

    <div className="btns">

      <button
        className="btn-primary"
        onClick={() => router.push("/create")}
      >
        ✦ Start Your TripZine ✦
      </button>

      <button className="btn-secondary">
        See it Live
      </button>

    </div>

  </div>

</section>

</>

)

}