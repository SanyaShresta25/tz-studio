import type { Metadata } from 'next'
import './globals.css'
import "./tripzine.css"
import "./dark-main.css"

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}