// import type { Metadata } from 'next'
// import './globals.css'
// import "./tripzine.css"
// import "./dark-main.css"
// import "./animations.css"
// import Script from "next/script"

// import Footer from "@/components/Footer"

// export const metadata: Metadata = {
//   title: 'TripZine – What If',
//   description: 'Create immersive travel stories by combining real moments with imaginative What If scenarios.',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/favicon.png" />
//       </head>
//       <body>  
//         <main>{children}</main>
//         <Footer />

//       <body>

//         {/* Petal animation container */}
//         <div id="petals-layer"></div>

//         {children}

//         {/* Load animation script */}
//         <Script src="/animations.js" strategy="afterInteractive" />

//       </body>
//     </html>
//   )
// }

import type { Metadata } from 'next'
import './globals.css'
import "./tripzine.css"
import "./dark-main.css"
import "./animations.css"
import Script from "next/script"

import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'TripZine – What If',
  description: 'Create immersive travel stories by combining real moments with imaginative What If scenarios.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body>
        {/* Petal animation container */}
        <div id="petals-layer"></div>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Load animation script */}
        <Script src="/animations.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}