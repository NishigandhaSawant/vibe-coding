'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Syne } from 'next/font/google'
import Image from 'next/image'

const syne = Syne({ weight: '800', subsets: ['latin'] })

const menuData = [
  // Churro Pops (The Crunch)
  {
    id: 'og-curl',
    category: 'Pops',
    name: 'Og Curl',
    price: '₹285',
    description: 'Castor Sugar | Cinnamon',
    image: '/menu-pops-ogcurl.jpg',
    height: 'h-80'
  },
  {
    id: 'caffeine-rush',
    category: 'Pops',
    name: 'Caffeine Rush',
    price: '₹345',
    description: 'Castor sugar | Coffee | Milk',
    image: '/menu-pops-caffeinerush.jpg',
    height: 'h-96'
  },
  {
    id: 'citrus-theory',
    category: 'Pops',
    name: 'Citrus Theory',
    price: '₹290',
    description: 'Lemon zest | Mandarin zest',
    image: '/menu-pops-citrus.jpg',
    height: 'h-80'
  },
  {
    id: 'indian-affair',
    category: 'Pops',
    name: 'The Indian Affair',
    price: '₹290',
    description: 'Cardamom | Rose petals',
    image: '/menu-pops-indian.jpg',
    height: 'h-96'
  },
  {
    id: 'bread-winner',
    category: 'Pops',
    name: 'Bread Winner',
    price: '₹290',
    description: 'Oregano | Garlic | Spices',
    image: '/menu-pops-bread.jpg',
    height: 'h-80'
  },
  {
    id: 'flame-game',
    category: 'Pops',
    name: 'Flame Game',
    price: '₹290',
    description: "Bird's eye chilli | Pepper | Spices",
    image: '/menu-pops-flame.jpg',
    height: 'h-80'
  },
  {
    id: 'golden-vice',
    category: 'Pops',
    name: 'Golden Vice',
    price: '₹345',
    description: 'Sea salt | Caramel dust',
    image: '/menu-pops-golden.jpg',
    height: 'h-96'
  },
  {
    id: 'high-society',
    category: 'Pops',
    name: 'High Society',
    price: '₹345',
    description: 'Truffle oil | Sea salt | Vegan Parmesan',
    image: '/menu-pops-high.jpg',
    height: 'h-96'
  },
  {
    id: 'spice-route',
    category: 'Pops',
    name: 'Spice Route',
    price: '₹290',
    description: 'Cayenne Chilli | Cumin | Allspice',
    image: '/menu-pops-spice.jpg',
    height: 'h-80'
  },
  {
    id: 'burn-book',
    category: 'Pops',
    name: 'Burn Book',
    price: '₹290',
    description: 'Red Chillies | Lime',
    image: '/menu-pops-burn.jpg',
    height: 'h-80'
  },

  // Churro Sandos (Gourmet Fillings)
  {
    id: 'sweet-trouble',
    category: 'Sandos',
    name: 'Sweet Trouble',
    price: '₹315',
    description: 'Peanut butter | Blueberry compote',
    image: '/menu-sandos-sweet.jpg',
    height: 'h-96'
  },
  {
    id: 'blue-hour',
    category: 'Sandos',
    name: 'Blue Hour',
    price: '₹315',
    description: 'Blueberry compote | Cream cheese',
    image: '/menu-sandos-blue.jpg',
    height: 'h-80'
  },
  {
    id: 'classic-affair',
    category: 'Sandos',
    name: 'Classic Affair',
    price: '₹315',
    description: 'Strawberry compote | Cream cheese',
    image: '/menu-sandos-classic.jpg',
    height: 'h-80'
  },
  {
    id: 'hotline-crunch',
    category: 'Sandos',
    name: 'Hotline Crunch',
    price: '₹315',
    description: 'Green chillies | Cheese',
    image: '/menu-sandos-hotline.jpg',
    height: 'h-96'
  },
  {
    id: 'mocha-muse',
    category: 'Sandos',
    name: 'Mocha Muse',
    price: '₹315',
    description: 'Coffee ganache | Cream cheese',
    image: '/menu-sandos-mocha.jpg',
    height: 'h-80'
  },
  {
    id: 'mex-mess',
    category: 'Sandos',
    name: 'Mex Mess',
    price: '₹315',
    description: 'Jalapeno cheese | Paprika',
    image: '/menu-sandos-mex.jpg',
    height: 'h-80'
  },
  {
    id: 'red-flag',
    category: 'Sandos',
    name: 'Red Flag',
    price: '₹460',
    description: 'Pork pepperoni | Cheese',
    image: '/menu-sandos-redflag.jpg',
    height: 'h-96',
    badge: 'Non-Veg Bestseller'
  },
  {
    id: 'winner-winner',
    category: 'Sandos',
    name: 'Winner Winner',
    price: '₹460',
    description: 'Chicken Ham | Cheese | Mustard',
    image: '/menu-sandos-winner.jpg',
    height: 'h-96'
  },

  // Classic Churros
  {
    id: 'classic-set',
    category: 'Classics',
    name: 'Classic Set of 4',
    price: '₹385',
    description: 'Includes a free Dip',
    image: '/menu-classics-set.jpg',
    height: 'h-80'
  },

  // Dips (Add-ons)
  {
    id: 'toffee-caramel',
    category: 'Dips',
    name: 'Toffee Caramel',
    price: '₹116',
    description: 'Sweet caramel dip',
    image: '/menu-dips-toffee.jpg',
    height: 'h-64'
  },
  {
    id: 'ferrero-rocher',
    category: 'Dips',
    name: 'Ferrero Rocher',
    price: '₹75',
    description: 'Nutty chocolate dip',
    image: '/menu-dips-ferrero.jpg',
    height: 'h-64'
  },
  {
    id: 'blueberry-compote',
    category: 'Dips',
    name: 'Blueberry Compote',
    price: '₹75',
    description: 'Fresh blueberry compote',
    image: '/menu-dips-blueberry.jpg',
    height: 'h-64'
  },
  {
    id: 'strawberry-compote',
    category: 'Dips',
    name: 'Strawberry Compote',
    price: '₹75',
    description: 'Sweet strawberry compote',
    image: '/menu-dips-strawberry.jpg',
    height: 'h-64'
  },
  {
    id: 'white-chocolate',
    category: 'Dips',
    name: 'White Chocolate Ganache',
    price: '₹95',
    description: 'Creamy white chocolate',
    image: '/menu-dips-white.jpg',
    height: 'h-64'
  },
  {
    id: 'dark-chocolate',
    category: 'Dips',
    name: 'Dark Chocolate Ganache',
    price: '₹90',
    description: 'Rich dark chocolate',
    image: '/menu-dips-dark.jpg',
    height: 'h-64'
  },
  {
    id: 'cheese-jalapeno',
    category: 'Dips',
    name: 'Cheese & Jalapeno',
    price: '₹90',
    description: 'Spicy cheese dip',
    image: '/menu-dips-cheese.jpg',
    height: 'h-64'
  },
  {
    id: 'mocha-ganache',
    category: 'Dips',
    name: 'Mocha Ganache',
    price: '₹75',
    description: 'Coffee chocolate blend',
    image: '/menu-dips-mocha.jpg',
    height: 'h-64'
  },

  // Liquid Therapy (Beverages)
  {
    id: 'chocolate-pb-shake',
    category: 'Beverages',
    name: 'Chocolate Peanut Butter Milkshake',
    price: '₹450',
    description: 'Rich chocolate with peanut butter',
    image: '/menu-beverages-chocolatepb.jpg',
    height: 'h-80'
  },
  {
    id: 'blueberry-shake',
    category: 'Beverages',
    name: 'Blueberry Milkshake',
    price: '₹450',
    description: 'Fresh blueberry shake',
    image: '/menu-beverages-blueberry.jpg',
    height: 'h-80'
  },
  {
    id: 'caramel-shake',
    category: 'Beverages',
    name: 'Caramel Milkshake',
    price: '₹450',
    description: 'Sweet caramel shake',
    image: '/menu-beverages-caramel.jpg',
    height: 'h-80'
  },
  {
    id: 'chocolate-shake',
    category: 'Beverages',
    name: 'Chocolate Milkshake',
    price: '₹450',
    description: 'Classic chocolate shake',
    image: '/menu-beverages-chocolate.jpg',
    height: 'h-80'
  },
  {
    id: 'strawberry-shake',
    category: 'Beverages',
    name: 'Strawberry Milkshake',
    price: '₹450',
    description: 'Fresh strawberry shake',
    image: '/menu-beverages-strawberry.jpg',
    height: 'h-80'
  },
  {
    id: 'vanilla-shake',
    category: 'Beverages',
    name: 'Vanilla Milkshake',
    price: '₹450',
    description: 'Classic vanilla shake',
    image: '/menu-beverages-vanilla.jpg',
    height: 'h-80'
  },
  {
    id: 'espresso',
    category: 'Beverages',
    name: 'Espresso',
    price: '₹235',
    description: 'Single origin coffee',
    image: '/menu-beverages-espresso.jpg',
    height: 'h-64'
  },
  {
    id: 'cappuccino',
    category: 'Beverages',
    name: 'Cappuccino',
    price: '₹345',
    description: 'Classic Italian coffee',
    image: '/menu-beverages-cappuccino.jpg',
    height: 'h-64'
  },
  {
    id: 'latte',
    category: 'Beverages',
    name: 'Latte',
    price: '₹380',
    description: 'Smooth milky coffee',
    image: '/menu-beverages-latte.jpg',
    height: 'h-64'
  },
  {
    id: 'cold-coffee',
    category: 'Beverages',
    name: 'Cold Coffee',
    price: '₹380',
    description: 'Refreshing cold brew',
    image: '/menu-beverages-cold.jpg',
    height: 'h-64'
  },
  {
    id: 'hot-chocolate',
    category: 'Beverages',
    name: 'Hot Chocolate',
    price: '₹380',
    description: 'Rich hot chocolate',
    image: '/menu-beverages-hot.jpg',
    height: 'h-64'
  },
  {
    id: 'peach-iced-tea',
    category: 'Beverages',
    name: 'Peach Iced Tea',
    price: '₹235',
    description: 'Sunshine in a glass',
    image: '/menu-beverages-peach.jpg',
    height: 'h-64'
  },

  // Ice Creams
  {
    id: 'ratnagiri-hapus',
    category: 'Ice Creams',
    name: 'Ratnagiri Hapus',
    price: '₹125',
    description: 'Premium Alphonso mango',
    image: '/menu-icecream-ratnagiri.jpg',
    height: 'h-64'
  },
  {
    id: 'salted-caramel',
    category: 'Ice Creams',
    name: 'Salted Caramel',
    price: '₹125',
    description: 'Sweet and salty caramel',
    image: '/menu-icecream-salted.jpg',
    height: 'h-64'
  },
  {
    id: 'strawberry-ice',
    category: 'Ice Creams',
    name: 'Strawberry',
    price: '₹95',
    description: 'Fresh strawberry ice cream',
    image: '/menu-icecream-strawberry.jpg',
    height: 'h-64'
  },
  {
    id: 'chocolate-ice',
    category: 'Ice Creams',
    name: 'Chocolate',
    price: '₹95',
    description: 'Classic chocolate ice cream',
    image: '/menu-icecream-chocolate.jpg',
    height: 'h-64'
  },
  {
    id: 'vanilla-ice',
    category: 'Ice Creams',
    name: 'Vanilla',
    price: '₹95',
    description: 'Classic vanilla ice cream',
    image: '/menu-icecream-vanilla.jpg',
    height: 'h-64'
  }
]

function MenuItem({ item, index }: { item: any; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.03 }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${item.height} flex flex-col mb-6 transition-transform duration-300 hover:scale-105`}
    >
      {/* Badge */}
      {item.badge && (
        <div className="absolute top-4 right-4 z-10 bg-brand-terracotta text-brand-cream px-3 py-1 rounded-full text-xs font-bold">
          {item.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-sand to-brand-cream flex items-center justify-center">
            <span className="text-brand-charcoal/40 text-4xl">🍽️</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`${syne.className} text-xl font-bold text-brand-charcoal mb-2`}>
          {item.name}
        </h3>
        
        <p className="text-brand-charcoal/60 italic text-sm mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-black text-brand-terracotta">
            {item.price}
          </span>
          
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-terracotta text-brand-cream px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'Pops', name: 'Churro Pops' },
    { id: 'Sandos', name: 'Churro Sandos' },
    { id: 'Dips', name: 'Dips' },
    { id: 'Classics', name: 'Classic Churros' },
    { id: 'Beverages', name: 'Beverages' },
    { id: 'Ice Creams', name: 'Ice Creams' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-brand-cream">
      
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-brand-charcoal text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${syne.className} text-5xl md:text-7xl font-black text-brand-cream mb-4`}
        >
          COMPLETE MENU
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-cream/80 font-semibold"
        >
          The Spanish Art of Sweet & Savory
        </motion.p>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-16 z-30 bg-brand-cream border-b border-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-6 md:space-x-8 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap pb-2 px-1 font-bold transition-all duration-300 border-b-2 ${
                  activeCategory === category.id
                    ? 'text-brand-terracotta border-brand-terracotta'
                    : 'text-brand-charcoal/60 border-transparent hover:text-brand-charcoal'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="break-inside-avoid mb-6">
                <MenuItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
