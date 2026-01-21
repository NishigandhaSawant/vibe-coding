'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { MapPin, Globe, ChefHat, Coffee } from 'lucide-react'
import { Syne } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'

const syne = Syne({ weight: '800', subsets: ['latin'] })

export default function AboutPage() {
  const { scrollY } = useScroll()
  
  // Parallax effects
  const originY = useTransform(scrollY, [0, 1000], [0, -100])
  const philosophyY = useTransform(scrollY, [0, 1000], [0, -80])
  const ingredientsY = useTransform(scrollY, [0, 1000], [0, -60])

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-cream">
      
      {/* Hero Section with Parallax Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: originY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal">
            <Image
              src="/menu-platter.png"
              alt="ChurroCraft Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <h1 className={`${syne.className} text-5xl md:text-7xl lg:text-8xl font-black text-brand-cream leading-tight mb-6`}>
            THE STORY
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream/80 font-light">
            Where Spanish Art Meets Indian Innovation
          </p>
        </motion.div>
      </section>

      {/* The Origin */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-brand-terracotta/20 px-6 py-3 rounded-full mb-8">
              <MapPin className="w-5 h-5 text-brand-terracotta" />
              <span className="text-brand-terracotta font-bold">THE ORIGIN</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-brand-cream mb-6`}>
                Born in Hiranandani
              </h2>
              <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
                ChurroCraft emerged from the vibrant streets of Hiranandani Estate, not as a franchise chain, but as a <span className="text-brand-terracotta font-bold">Single Firm Proprietorship</span> driven by pure passion.
              </p>
              <p className="text-lg text-brand-cream/80 leading-relaxed">
                Every creation, every recipe, every innovation stems from one vision: to bring authentic Spanish churro artistry to Indian palates, reimagined through local sensibilities and global influences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/menu-platter.png"
                alt="ChurroCraft Origin"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="relative py-24 px-6 bg-brand-charcoal/50">
        <motion.div 
          style={{ y: philosophyY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/50 to-brand-charcoal">
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-gradient-to-br from-brand-terracotta/20 to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-brand-terracotta/20 px-6 py-3 rounded-full mb-8">
              <ChefHat className="w-5 h-5 text-brand-terracotta" />
              <span className="text-brand-terracotta font-bold">THE PHILOSOPHY</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-brand-cream mb-6`}>
                The Cardinal vs. Flora
              </h2>
              <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
                Our brand philosophy bridges the gap between <span className="text-brand-terracotta font-bold">high-end residential luxury</span> (The Cardinal) and <span className="text-brand-terracotta font-bold">street-level buzz</span> (Flora Building).
              </p>
              <p className="text-lg text-brand-cream/80 leading-relaxed">
                We bring gourmet sophistication to accessible street food, creating a space where premium ingredients and innovative techniques meet the everyday craving. This is where luxury meets reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-brand-sand/10 p-8 rounded-2xl border border-brand-sand/20"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-terracotta rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-cream mb-2">The Cardinal</h3>
                    <p className="text-brand-cream/70">Premium ingredients, sophisticated techniques, elevated experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-brand-sand rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-cream mb-2">The Flora</h3>
                    <p className="text-brand-cream/70">Street-level energy, accessible pricing, community focus</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Ingredient Map */}
      <section className="relative py-24 px-6">
        <motion.div 
          style={{ y: ingredientsY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-brand-charcoal via-brand-charcoal/30 to-brand-charcoal">
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-gradient-to-tr from-brand-terracotta/10 to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-brand-terracotta/20 px-6 py-3 rounded-full mb-8">
              <Globe className="w-5 h-5 text-brand-terracotta" />
              <span className="text-brand-terracotta font-bold">THE INGREDIENT MAP</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full relative">
            {[
              { name: 'Truffle Oil', source: 'Imported', description: 'Luxury European truffles', image: '/truffle-oil.jpg' },
              { name: 'Pork Pepperoni', source: 'Authentic', description: 'Traditional Italian curing', image: '/pepperoni.jpg' },
              { name: 'Mandarin Zest', source: 'Fresh', description: 'Hand-zested daily', image: '/chilli.jpg' },
              { name: 'Bird\'s Eye Chilli', source: 'Local Farms', description: 'Sourced from Maharashtra', image: '/chilli.jpg' },
              { name: 'Cardamom', source: 'Kerala Estates', description: 'Premium grade pods', image: '/coffee-beans.jpg' },
              { name: 'Single Origin Coffee', source: 'Coastal Plantations', description: 'Small batch roasted', image: '/coffee-beans.jpg' }
            ].map((ingredient, index) => (
              <div
                key={ingredient.name}
                className="bg-brand-sand/10 p-8 rounded-2xl border border-brand-sand/20 hover:bg-brand-sand/20 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Circular Image - Fixed Dimensions */}
                <div className="w-32 h-32 md:w-24 md:h-32 rounded-full border-4 border-brand-terracotta overflow-hidden mb-6 flex-shrink-0 relative">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <h3 className={`${syne.className} text-xl font-bold text-brand-cream mb-2`}>
                  {ingredient.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-brand-terracotta font-bold text-sm">{ingredient.source}</span>
                  <div className="w-2 h-2 bg-brand-terracotta rounded-full" />
                </div>
                <p className="text-brand-cream/70 text-sm">
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-24 px-6 bg-brand-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-brand-terracotta/20 px-6 py-3 rounded-full mb-8">
              <MapPin className="w-5 h-5 text-brand-terracotta" />
              <span className="text-brand-terracotta font-bold">FIND US</span>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 border-2 border-brand-terracotta/30"
            >
              <Image
                src="/map-placeholder.png"
                alt="ChurroCraft Location Map"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/40 to-brand-charcoal/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand-terracotta mx-auto mb-4" />
                  <h3 className={`${syne.className} text-2xl font-bold text-brand-cream mb-2`}>
                    Shop No. 3, Flora Building
                  </h3>
                  <p className="text-brand-cream/80">
                    Forest Avenue, Hiranandani Estate
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-brand-cream/80 max-w-2xl mx-auto"
            >
              Visit us and experience where Spanish tradition meets Indian innovation in every bite.
            </motion.p>
          </div>
        </div>
      </section>

    </div>
  )
}
