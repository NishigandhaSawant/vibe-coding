'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function BentoGrid() {
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
            className="md:col-span-2 row-span-1 bg-brand-charcoal border-2 border-brand-charcoal p-8 relative overflow-hidden"
          >
            <div className="noise-texture opacity-20 absolute inset-0" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-cream mb-4">
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
            className="md:row-span-2 bg-brand-cream border-2 border-brand-charcoal p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Find Us
              </h3>
              <p className="text-brand-charcoal/80 mb-4">
                Shop No. 3, Flora Building,<br />
                Forest Avenue
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-charcoal text-brand-cream px-4 py-2 font-bold border-2 border-brand-charcoal hover:bg-brand-terracotta transition-colors"
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
            className="bg-brand-terracotta border-2 border-brand-charcoal p-6 text-center"
          >
            <h3 className="text-xl font-bold text-brand-cream mb-2">
              Open Daily
            </h3>
            <p className="text-brand-cream text-lg font-semibold">
              11:00 AM — 11:00 PM
            </p>
          </motion.div>

          {/* Box 4 - The Vibe (Wide) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-brand-cream border-2 border-brand-charcoal relative overflow-hidden"
          >
            <div className="relative h-48 md:h-64">
              <Image
                src="/placeholder-vibe.jpg"
                alt="Live at Flora"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-terracotta text-brand-cream px-4 py-2 border-2 border-brand-charcoal">
                <span className="font-bold">LIVE AT FLORA</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
