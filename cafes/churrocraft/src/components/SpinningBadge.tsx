'use client'

import { motion } from 'framer-motion'

export default function SpinningBadge() {
  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="relative"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          className="w-20 h-20 md:w-24 md:h-24"
        >
          <defs>
            <path
              id="circle"
              d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text className="fill-brand-cream text-xs font-bold opacity-90">
            <textPath href="#circle" startOffset="0%">
              CHURROCRAFT • EST. 2025 • AUTHENTIC •
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  )
}
