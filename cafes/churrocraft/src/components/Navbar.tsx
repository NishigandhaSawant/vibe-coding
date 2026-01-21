'use client'

import { motion } from 'framer-motion'
import { Syne } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const syne = Syne({ weight: '800', subsets: ['latin'] })

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname === path
  }

  const handleContactScroll = () => {
    // Close mobile menu first
    setMobileMenuOpen(false)
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const footer = document.getElementById('footer')
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-40 bg-brand-charcoal/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with Text */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="rounded-full overflow-hidden border-2 border-brand-terracotta">
                <Image
                  src="/logo.png"
                  alt="ChurroCraft"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  priority
                />
              </div>
              <span className={`${syne.className} text-brand-charcoal font-bold uppercase text-lg`}>
                CHURROCRAFT
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-brand-terracotta' : 'text-brand-charcoal/80 hover:text-brand-charcoal'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className={`transition-colors font-medium ${
                isActive('/menu') ? 'text-brand-terracotta' : 'text-brand-charcoal/80 hover:text-brand-charcoal'
              }`}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors font-medium ${
                isActive('/about') ? 'text-brand-terracotta' : 'text-brand-charcoal/80 hover:text-brand-charcoal'
              }`}
            >
              About
            </Link>
            <button 
              onClick={handleContactScroll}
              className="text-brand-charcoal/80 hover:text-brand-charcoal transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Order Now Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link 
              href="https://www.swiggy.com/city/mumbai/churrocraft-thane-hiranandani-estate-rest1226091"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-terracotta text-brand-cream px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Order Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-charcoal p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-4 right-4 z-30 bg-brand-charcoal/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl md:hidden"
        >
          <div className="p-6 space-y-4">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-medium transition-colors ${
                isActive('/') ? 'text-brand-terracotta' : 'text-brand-charcoal/80 hover:text-brand-charcoal'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-medium transition-colors ${
                isActive('/menu') ? 'text-brand-terracotta' : 'text-brand-charcoal/80 hover:text-brand-charcoal'
              }`}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-medium transition-colors ${
                isActive('/about') ? 'text-brand-terracotta' : 'text-brand-charcoal/80 hover:text-brand-charcoal'
              }`}
            >
              About
            </Link>
            <button 
              onClick={handleContactScroll}
              className="block py-2 text-brand-charcoal/80 hover:text-brand-charcoal transition-colors font-medium text-left"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-white/10">
              <Link 
                href="https://www.swiggy.com/city/mumbai/churrocraft-thane-hiranandani-estate-rest1226091"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-brand-terracotta text-brand-cream px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Order Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
