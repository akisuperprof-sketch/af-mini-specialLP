/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif JP', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          black: '#000000', // Apple-like absolute black
          dark: '#1d1d1f', // Apple-like dark gray
          gray: '#f5f5f7', // Apple-like light gray background
          text: '#1d1d1f',
          gold: '#C09C3F', // New Luxury Gold
          'gold-light': '#E6C669', // Lighter gold
          'luxury-black': '#0a0a0a', // Deep black for backgrounds
          accent: '#0066cc', // Subtle blue for links, rarely used
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(to right, #DFBD69, #9E7F2B, #DFBD69)',
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'heading': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'lead': ['1.5rem', { lineHeight: '1.5' }],
      },
      height: {
        'screen-nav': 'calc(100vh - 4rem)',
      }
    },
  },
  plugins: [],
}
