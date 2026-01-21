'use client'

import { motion } from 'framer-motion'

export default function InfiniteMarquee() {
  const marqueeText = 'NOT JUST DESSERT • SAVORY SANDOS • TRUFFLE OIL • PORK PEPPERONI • SINGLE ORIGIN COFFEE • '

  return (
    <div className="w-full overflow-hidden bg-brand-terracotta border-y-4 border-brand-charcoal">
      <motion.div
        className="flex whitespace-nowrap py-6"
        animate={{
          x: [0, -100],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 12,
            ease: 'linear',
          },
        }}
      >
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="text-brand-cream text-2xl md:text-3xl font-black mx-8"
          >
            {marqueeText}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
