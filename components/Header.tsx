// 'use client'

// import Image from "next/image"
// import Link from "next/link"
// import { useRouter } from "next/navigation"

// export default function Header() {

//   const router = useRouter()

//   return (

// <header className="header">

//   <div className="header-logo-zone">


//     <div className="logo-block">

//   <Image
//   src="/tz-logo.png"
//   alt="TripZine Logo"
//   width={200}
//   height={60}
//   style={{ marginTop: '20px' }} // Increase/decrease pixels as needed
//   priority
// />

//     </div>

//   </div>

//   <nav className="nav">
//     <Link href="/" className="active">landing</Link>
//     <Link href="/home" className="active">Home</Link>
//     <Link href="#">My Trips</Link>
//     <Link href="#">Guide</Link>
//     <Link href="#">Contact</Link>
//   </nav>

//   <div className="auth-buttons">

//     <button
//       className="login-btn"
//       onClick={() => router.push("/login")}
//     >
//       Login
//     </button>

//   </div>

// </header>

//   )
// }

'use client'

import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {

  const router = useRouter()
  const pathname = usePathname()

  return (

<header className="header">

  <div className="header-logo-zone">

    <div className="logo-block">
      <Image
        src="/tz-logo.png"
        alt="TripZine Logo"
        width={200}
        height={60}
        style={{ marginTop: '20px' }}
        priority
      />
    </div>

  </div>

  <nav className="nav">

    <Link
      href="/"
      className={pathname === "/" ? "active" : ""}
    >
      Landing
    </Link>

    <Link
      href="/home"
      className={pathname === "/home" ? "active" : ""}
    >
      Home
    </Link>

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