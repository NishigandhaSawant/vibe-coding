'use client'

import { motion } from 'framer-motion'

export default function VelocityScroll() {
  const scrollText = 'THE SPANISH ART OF SWEET • HIRANANDANI ESTATE • GOURMET SNACKING • '

  return (
    <div className="w-full overflow-hidden bg-brand-terracotta border-b-2 border-brand-charcoal">
      <motion.div
        className="flex whitespace-nowrap py-4"
        animate={{
          x: [0, -50],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-brand-sand text-lg md:text-xl font-bold mx-8"
          >
            {scrollText}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
