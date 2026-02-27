import '../styles/globals.css'
import '../styles/awesome.css'
import { ReactNode } from 'react'
import Nav from '../components/Nav'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '600', '700']
})

export const metadata = {
  title: 'Lanchester R&D',
  description: 'Product strategy lab — placeholder scaffold'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans app-theme`}>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
