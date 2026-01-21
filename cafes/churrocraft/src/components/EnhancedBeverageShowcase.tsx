'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Syne } from 'next/font/google'
import Image from 'next/image'
import clsx from 'clsx'

const syne = Syne({ weight: '800', subsets: ['latin'] })

const drinks = [
  {
    name: 'Strawberry Shake',
    description: 'The Classic. Real Fruit.',
    image: '/shake-strawberry.png',
    floatDelay: 0,
    parallaxSpeed: 0.3
  },
  {
    name: 'Blueberry Shake', 
    description: 'The Mood Fix. Violet Crush.',
    image: '/shake-blueberry.png',
    floatDelay: 0.5,
    parallaxSpeed: 0.6
  },
  {
    name: 'Peach Iced Tea',
    description: 'Sunshine in a Glass.',
    image: '/iced-tea.png', 
    floatDelay: 1,
    parallaxSpeed: 0.3
  }
]

function DrinkCard({ drink, index }: { drink: typeof drinks[0]; index: number }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, drink.parallaxSpeed * 300])
  const rotation = useTransform(scrollY, [0, 1000], [0, 15])

  return (
    <motion.div
      style={{ y, rotate: rotation }}
      className="relative flex flex-col items-center justify-center"
      animate={{ 
        y: [0, -8, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "mirror",
        ease: [0.4, 0, 0.6, 1],
        delay: drink.floatDelay
      }}
    >
      {/* Drink Image */}
      <div className="relative z-20 mb-8">
        <div className="relative h-[400px] w-full flex items-center justify-center bg-white/10">
          <Image
            src={drink.image}
            alt={drink.name}
            width={220}
            height={350}
            className={clsx(
              'object-contain drop-shadow-2xl transition-transform duration-300 z-10',
              'hover:scale-110'
            )}
          />
        </div>
      </div>

      {/* Glass Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="backdrop-blur-md bg-white/30 rounded-full px-6 py-3 border-2 border-brand-charcoal shadow-lg">
          <h3 className={`${syne.className} text-lg md:text-xl font-bold text-brand-charcoal text-center`}>
            {drink.name}
          </h3>
          <p className="text-sm md:text-base text-brand-charcoal/80 text-center mt-1">
            {drink.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function EnhancedBeverageShowcase() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 100])

  return (
    <section className="relative min-h-screen bg-brand-sand overflow-hidden">
      {/* Glow Effect Behind Drinks */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-brand-terracotta/20 rounded-full blur-3xl" />
      </div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-texture" />
      
      {/* Background Text - Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 
          className={`${syne.className} text-brand-terracotta opacity-10 select-none`}
          style={{ fontSize: '10rem', lineHeight: 0.8 }}
        >
          LIQUID<br/>THERAPY
        </h2>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Drinks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
            {drinks.map((drink, index) => (
              <DrinkCard key={drink.name} drink={drink} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
