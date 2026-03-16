'use client'

export default function CreateTripPage() {
  return (

<div>

{/* background layers */}
<div className="stars stars-a"></div>
<div className="stars stars-b"></div>
<div className="nebula"></div>
<div className="vignette"></div>

<div className="dust-layer" id="dust-layer"></div>
<div className="petals-layer" id="petals-layer"></div>

{/* ticker */}

<div className="ticker">
<span className="ticker-inner">
“Your Journey, Your Story.” ✦ “Your Journey, Your Story.” ✦ “Your Journey, Your Story.”
</span>
</div>

{/* header */}

<header className="header">

<div className="header-logo-zone">

<span className="logo-sparkle">✦</span>

<div className="logo-block">
<span className="logo-title">TripZine</span>
<span className="logo-sub">WHAT IF</span>
</div>

</div>

<nav className="nav">
<a href="#">Home</a>
<a href="#">My Trips</a>
<a href="#">Guide</a>
<a href="#">Contact</a>
</nav>

<div className="auth-buttons">
<a className="login-btn">Login</a>
<a className="register-btn">Register</a>
</div>

</header>

{/* hero section */}

<section className="hero">

<div className="container">

<header className="header">
<p className="subtitle">Create Your Magazine</p>
</header>

<div className="form-wrapper">

{/* left form */}

<div className="form-section">

<label>Trip Name</label>
<input type="text" placeholder="Summer in Goa" />

<label>Location</label>
<input type="text" placeholder="Goa, India" />

<label>Start Date</label>
<input type="date" />

<label>End Date</label>
<input type="date" />

<label>Cover Photo</label>
<input type="file" />

<label>Photos Zip file</label>
<input type="file" />

<button className="create-btn">
Create Trip Magazine
</button>

</div>

{/* preview */}

<div className="preview-section">

<div className="magazine-preview">

<div className="cover">
<h3>Summer in Goa</h3>
<p>WHAT IF?</p>
</div>

</div>

</div>

</div>

</div>

</section>

</div>

  )
}