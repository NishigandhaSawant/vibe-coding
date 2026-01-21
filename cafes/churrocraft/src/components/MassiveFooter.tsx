'use client'

import { motion } from 'framer-motion'

export default function MassiveFooter() {
  return (
    <footer className="bg-brand-charcoal border-t-2 border-brand-charcoal py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Massive Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-cream leading-none">
            CHURROCRAFT
          </h1>
        </motion.div>

        {/* Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-brand-cream text-xl font-bold mb-4">Instagram</h3>
            <a 
              href="#" 
              className="text-brand-cream/80 hover:text-brand-cream transition-colors underline"
            >
              @churrocraft
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-brand-cream text-xl font-bold mb-4">Zomato</h3>
            <a 
              href="#" 
              className="text-brand-cream/80 hover:text-brand-cream transition-colors underline"
            >
              Order Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-brand-cream text-xl font-bold mb-4">Swiggy</h3>
            <a 
              href="#" 
              className="text-brand-cream/80 hover:text-brand-cream transition-colors underline"
            >
              Order Now
            </a>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
