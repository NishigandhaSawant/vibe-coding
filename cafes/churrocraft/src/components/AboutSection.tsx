'use client'

import { motion } from 'framer-motion'
import { Syne } from 'next/font/google'
import Image from 'next/image'

const syne = Syne({ weight: '800', subsets: ['latin'] })

export default function AboutSection() {
  return (
    <section className="bg-brand-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`${syne.className} text-3xl md:text-4xl font-bold text-brand-charcoal mb-6`}>
              Not Just A Dessert Parlor.
            </h2>
            <p className="text-brand-charcoal/80 leading-relaxed text-lg">
              ChurroCraft is a gourmet snacking destination in the heart of Hiranandani. We reject the ordinary. From our truffle-infused High Society churros to our signature Pork Pepperoni Sandos, we bring the Spanish art of sweet (and savory) to Mumbai.
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-64 md:h-96 lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder-about.jpg"
                alt="ChurroCraft Interior"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
