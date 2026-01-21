'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function InfoSection() {
  const [currentTime, setCurrentTime] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-brand-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'circOut' }}
            viewport={{ once: true }}
            className="bg-brand-terracotta p-8 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cream/10 rounded-full -mr-16 -mt-16" />
            <MapPin className="w-8 h-8 text-brand-cream mb-4" />
            <h3 className="text-2xl font-bold text-brand-cream mb-3">Location</h3>
            <p className="text-brand-cream/90 mb-6 leading-relaxed">
              Shop No. 3, Flora Building,<br />
              Forest Avenue, Hiranandani Estate
            </p>
            <motion.a
              href="https://goo.gl/maps/YOUR_MAP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-cream text-brand-terracotta px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg"
            >
              Get Directions
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Story Card - Magazine Look */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'circOut' }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl shadow-xl overflow-hidden"
          >
            <Image
              src="/menu-platter.png"
              alt="Menu Platter"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-3">The Story</h3>
              <p className="text-white/90 leading-relaxed">
                We reject the ordinary. From Truffle Oil Churros to Pork Pepperoni Sandos, we engineer flavors for the bold palate. Welcome to the Spanish art of sweet and savory.
              </p>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'circOut' }}
            viewport={{ once: true }}
            className="bg-brand-charcoal p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16" />
            <Clock className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold text-brand-cream mb-3">Hours</h3>
            <p className="text-brand-cream/90 mb-4 text-lg font-semibold">
              Open Daily
            </p>
            <p className="text-yellow-400 text-xl font-black mb-4">
              11:00 AM — 11:00 PM
            </p>
            <div className="text-brand-cream/60 font-mono text-sm">
              {mounted && currentTime ? (
                <>Current: {currentTime}</>
              ) : (
                <div className="animate-pulse bg-brand-cream/20 rounded h-4 w-24"></div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
