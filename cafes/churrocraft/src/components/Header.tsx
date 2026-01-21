'use client'

import { motion } from 'framer-motion'
import { Syne } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'

const syne = Syne({ weight: '800', subsets: ['latin'] })

export default function Header() {
  const [imageError, setImageError] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-charcoal/80 backdrop-blur-md border-b border-brand-charcoal/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {!imageError ? (
            <Image
              src="/logo.png"
              alt="ChurroCraft"
              width={120}
              height={40}
              className="h-10 w-auto"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="bg-brand-terracotta rounded-full px-4 py-2">
              <span className={`${syne.className} text-brand-cream font-bold text-lg`}>
                CHURROCRAFT
              </span>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-brand-cream/80 hover:text-brand-cream transition-colors font-medium"
          >
            Home
          </motion.a>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            className="text-brand-cream/80 hover:text-brand-cream transition-colors font-medium"
          >
            Menu
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="text-brand-cream/80 hover:text-brand-cream transition-colors font-medium"
          >
            Contact
          </motion.a>
        </nav>
      </div>
    </header>
  )
}
