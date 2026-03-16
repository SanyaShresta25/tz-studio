'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import "./register.css"

export default function RegisterPage() {

const router = useRouter()

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const handleRegister = () => {

  if(password !== confirmPassword){
    alert("Passwords do not match")
    return
  }

  // Later this will call backend API
  console.log("User Registered:", { name, email, password })

  router.push("/login")
}

return (

<div>

<Header />

<section className="hero">

<div className="login-section">

<h1>Create Account</h1>

<p>Start your TripZine adventure</p>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>

<button
className="gold-btn"
onClick={handleRegister}
>
Register
</button>

<div className="divider"></div>

<span className="signup">
Already have an account?
<a href="/login"> Login</a>
</span>

</div>

</section>

</div>

)

}