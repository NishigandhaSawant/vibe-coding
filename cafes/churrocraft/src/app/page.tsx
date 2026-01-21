'use client'

import { motion } from 'framer-motion'
import { Inter, Syne } from 'next/font/google'
import CustomCursor from '@/components/CustomCursor'
import InfiniteMarquee from '@/components/InfiniteMarquee'
import EnhancedBeverageShowcase from '@/components/EnhancedBeverageShowcase'
import InfoSection from '@/components/InfoSection'
import BurnBookFooter from '@/components/BurnBookFooter'
import HomeAbout from '@/components/HomeAbout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '800', '900'] })
const syne = Syne({ weight: '800', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`min-h-screen bg-brand-charcoal ${inter.className} noise-texture pt-24`}>
      {/* Global Effects */}
      <CustomCursor />
      
      {/* Smooth Scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* 1. Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Video/Texture Placeholder */}
        <div className="absolute inset-0 bg-brand-charcoal">
          <motion.div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(/placeholder-hero-bg.jpg)' }}
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Hero Content with Spinning Badge */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            
            {/* Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-center lg:text-left flex-1"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-brand-cream leading-tight mb-6">
                TAKE THE SPANISH TURN
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-cream/90 font-semibold mb-4">
                Thane's First Gourmet Snacking Destination.
              </p>
              
              <p className="text-lg md:text-xl text-brand-cream/80 mb-8">
                Truffle Oil Churros. Pork Pepperoni Sandos. Single Origin Coffee.
              </p>
              
              <Link href="/menu">
                <motion.button
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-terracotta text-brand-cream px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  VIEW FULL MENU
                </motion.button>
              </Link>
            </motion.div>

            {/* Spinning Badge - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="w-32 h-32 bg-brand-terracotta rounded-full flex items-center justify-center shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className={`${syne.className} text-brand-cream font-black text-xl`}
                >
                  EST 2025
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. HomeAbout Section */}
      <HomeAbout />

      {/* 3. Infinite Marquee Strip */}
      <InfiniteMarquee />

      {/* 4. Enhanced Beverage Showcase */}
      <EnhancedBeverageShowcase />

      {/* 5. Info Section */}
      <section id="about">
        <InfoSection />
      </section>

      {/* 6. Burn Book Footer */}
      <footer id="footer">
        <BurnBookFooter />
      </footer>
    </main>
  )
}
