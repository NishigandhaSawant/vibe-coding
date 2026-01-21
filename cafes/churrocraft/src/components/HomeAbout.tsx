'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Syne } from 'next/font/google'

const syne = Syne({ weight: '800', subsets: ['latin'] })

export default function HomeAbout() {
  return (
    <section className="relative py-20 px-4 bg-brand-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/menu-platter.png"
              alt="Menu Platter"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className={`${syne.className} text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight`}>
              WE REJECT<br/>THE ORDINARY.
            </h2>
            
            <p className="text-lg md:text-xl text-brand-charcoal/80 leading-relaxed">
              ChurroCraft is not a dessert parlor. We are a gastronomic laboratory. From heat of Bird's Eye Chilli to luxury of Gold Dust, we bring Spanish art of sweet (and savory) to Hiranandani.
            </p>

            <div className="pt-4">
              <motion.a
                href="/menu"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-brand-terracotta text-brand-cream px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                EXPLORE OUR MENU
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
