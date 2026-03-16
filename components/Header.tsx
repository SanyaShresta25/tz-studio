'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function Header() {

  const router = useRouter()

  return (

<header className="header">

  <div className="header-logo-zone">


    <div className="logo-block">

      <Image
        src="/tz-logo.png"
        alt="TripZine Logo"
        width={200}
        height={200}
        className="logo-img"
        priority
      />

    </div>

  </div>

  <nav className="nav">
    <Link href="/" className="active">Home</Link>
    <Link href="#">My Trips</Link>
    <Link href="#">Guide</Link>
    <Link href="#">Contact</Link>
  </nav>

  <div className="auth-buttons">

    <button
      className="login-btn"
      onClick={() => router.push("/login")}
    >
      Login
    </button>

  </div>

</header>

  )
}