import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TripZine – What If',
  description: 'Create immersive travel stories by combining real moments with imaginative What If scenarios.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
