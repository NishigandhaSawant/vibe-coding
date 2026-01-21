'use client'

import { motion } from 'framer-motion'

export default function MenuTicker() {
  const menuItems = [
    'HIGH SOCIETY (TRUFFLE) - ₹345',
    'RED FLAG (PORK) - ₹460', 
    'OG CURL - ₹285',
    'BLUE MOOD - ₹320',
    'PEACH DREAM - ₹295',
    'CLASSIC STRAWBERRY - ₹315'
  ]

  return (
    <div className="w-full overflow-hidden bg-brand-cream border-y-2 border-brand-charcoal">
      <motion.div
        className="flex whitespace-nowrap py-6"
        animate={{
          x: [0, -100],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          },
        }}
      >
        {[...Array(4)].map((_, repeatIndex) => (
          menuItems.map((item, index) => (
            <span
              key={`${repeatIndex}-${index}`}
              className="text-brand-charcoal text-xl md:text-2xl font-bold mx-8 px-6 py-2 border-2 border-brand-charcoal inline-block"
            >
              {item}
            </span>
          ))
        ))}
      </motion.div>
    </div>
  )
}
