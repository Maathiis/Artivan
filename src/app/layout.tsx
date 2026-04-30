import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "L'Atelier Mobile — Mobilier artisanal, livraison éco-responsable",
  description: "Plateforme de livraison éco-responsable qui connecte artisans locaux et amateurs de beau.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
