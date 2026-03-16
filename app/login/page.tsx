'use client'

import Header from "@/components/Header"
import Link from "next/link"
import "./login.css"

export default function LoginPage() {

return (

<div>

{/* Background effects */}

<div className="stars stars-a"></div>
<div className="stars stars-b"></div>
<div className="nebula"></div>
<div className="vignette"></div>

<div className="dust-layer" id="dust-layer"></div>
<div className="petals-layer" id="petals-layer"></div>


{/* Ticker */}

<div className="ticker">
<span className="ticker-inner">
“Your Journey, Your Story.” ✦ “Your Journey, Your Story.” ✦ “Your Journey, Your Story.”
</span>
</div>


{/* Header */}

<Header />


{/* Hero */}

<section className="hero">

<div className="login-section">

<h1>Welcome Back</h1>

<p>Continue your TripZine adventure</p>

<input type="email" placeholder="Email" />

<input type="password" placeholder="Password" />

<button className="gold-btn">
Login
</button>

<div className="divider"></div>

<span className="signup">
Don't have an account? <Link href="/register">Register</Link>
</span>

<div>
<span className="signup">
<Link href="/forgot-password">Forgot password?</Link>
</span>
</div>

</div>

</section>

</div>

)

}