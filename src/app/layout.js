import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { AnimatePresence } from "framer-motion"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Akash Sharma - Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a0b0f] text-zinc-200 antialiased selection:bg-cyan-500/30">
        <Navbar />
        <main className="pt-20 md:pt-24 max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  )
}