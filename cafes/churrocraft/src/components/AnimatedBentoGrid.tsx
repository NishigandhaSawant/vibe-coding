'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ExternalLink, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function AnimatedBentoGrid() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    })
  }

  return (
    <section className="py-16 px-4 bg-brand-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          
          {/* Box 1 - About (Large, spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-1 bg-brand-charcoal border-4 border-brand-charcoal p-8 relative overflow-hidden group"
          >
            <div className="noise-texture opacity-20 absolute inset-0" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-brand-cream mb-4">
                The Story
              </h3>
              <p className="text-brand-cream/90 text-lg leading-relaxed">
                We reject the ordinary. From Truffle Oil Churros to Pork Pepperoni Sandos, we engineer flavors for the bold.
              </p>
            </div>
          </motion.div>

          {/* Box 2 - Location (Tall) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:row-span-2 bg-brand-cream border-4 border-brand-charcoal p-6 flex flex-col justify-between relative"
            onMouseEnter={() => setShowMap(true)}
            onMouseLeave={() => setShowMap(false)}
          >
            <div>
              <h3 className="text-xl font-black text-brand-charcoal mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Find Us
              </h3>
              <p className="text-brand-charcoal/80 mb-4">
                Shop No. 3, Flora Building,<br />
                Forest Avenue
              </p>
            </div>
            
            {/* Mini Map Animation */}
            <AnimatePresence>
              {showMap && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-brand-charcoal/90 flex items-center justify-center z-20"
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-brand-terracotta mx-auto mb-2 animate-pulse" />
                    <p className="text-brand-cream font-bold">Hiranandani Estate</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-charcoal text-brand-cream px-4 py-2 font-black border-2 border-brand-charcoal hover:bg-brand-terracotta transition-colors"
            >
              Get Directions
              <ExternalLink className="w-4 h-4 inline ml-2" />
            </motion.button>
          </motion.div>

          {/* Box 3 - Hours (Small) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-brand-terracotta border-4 border-brand-charcoal p-6 text-center"
          >
            <h3 className="text-xl font-black text-brand-cream mb-2 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              Open Daily
            </h3>
            <p className="text-brand-cream text-lg font-black mb-2">
              11:00 AM — 11:00 PM
            </p>
            <div className="text-brand-cream/80 font-mono text-sm">
              {formatTime(currentTime)}
            </div>
          </motion.div>

          {/* Box 4 - Menu Teaser */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-brand-cream border-4 border-brand-charcoal p-6"
          >
            <h3 className="text-xl font-black text-brand-charcoal mb-4">Menu Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-brand-charcoal text-brand-cream p-4 border-2 border-brand-charcoal"
              >
                <p className="font-black">High Society</p>
                <p className="text-sm opacity-80">(Truffle)</p>
                <p className="text-xl font-black">₹345</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-brand-terracotta text-brand-cream p-4 border-2 border-brand-charcoal"
              >
                <p className="font-black">Red Flag</p>
                <p className="text-sm opacity-80">(Pork)</p>
                <p className="text-xl font-black">₹460</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
