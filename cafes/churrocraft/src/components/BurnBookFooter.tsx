'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function BurnBookFooter() {
  return (
    <footer className="bg-brand-charcoal border-t-4 border-brand-charcoal py-24 px-4 relative overflow-hidden">
      <div className="noise-texture opacity-20 absolute inset-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-cream leading-none mb-6">
            JOIN THE CLUB
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-brand-cream/80 font-bold"
          >
            So spicy it belongs in the Burn Book.
          </motion.p>
        </motion.div>

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.a
            href="https://instagram.com/thechurrocraft"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-brand-terracotta text-brand-cream px-8 py-4 border-4 border-brand-charcoal font-black text-lg"
          >
            <Instagram className="w-6 h-6" />
            @thechurrocraft
          </motion.a>
        </motion.div>

        {/* Bottom Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center border-t border-brand-cream/20 pt-8"
        >
          <p className="text-brand-cream/60 text-sm">
            © 2026 Tanish Jitendra Vijan. Single Firm Proprietorship.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
