'use client'

import { motion } from 'framer-motion'
import { Syne } from 'next/font/google'

const syne = Syne({ weight: '800', subsets: ['latin'] })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brand-charcoal overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className={`${syne.className} text-4xl md:text-6xl lg:text-7xl font-bold text-brand-cream leading-tight max-w-4xl mx-auto`}>
            THE SPANISH ART OF SWEET
          </h1>
        </motion.div>
      </div>

      {/* Rotating Badge - Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 z-30">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="relative"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 200 200"
            className="w-24 h-24 md:w-32 md:h-32"
          >
            <defs>
              <path
                id="circle"
                d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
            </defs>
            <text className="fill-brand-cream text-xs opacity-80">
              <textPath href="#circle" startOffset="0%">
                THE SPANISH TURN • EST 2025 •
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-texture opacity-30" />
    </section>
  )
}
