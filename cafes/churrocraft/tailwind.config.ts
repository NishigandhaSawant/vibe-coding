import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-terracotta': '#BA4A34',
        'brand-sand': '#E8E0D5',
        'brand-cream': '#FDFBF7',
        'brand-charcoal': '#2D2A26',
      },
    },
  },
  plugins: [],
}
export default config
