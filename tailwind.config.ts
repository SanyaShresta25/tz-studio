import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka One', 'cursive'],
        body: ['Nunito', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      colors: {
        cream: '#f5ede0',
        parchment: '#ede0cb',
        'brown-dark': '#2c1a0e',
        'brown-mid': '#5c3d1e',
        'brown-light': '#a0673a',
        'warm-accent': '#e8956d',
        'pink-petal': '#f0a8b8',
        gold: '#d4a843',
        'reality-blue': '#b8d4e8',
        'whatif-pink': '#f5c6d0',
      },
      keyframes: {
        'petal-fall': {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'petal-fall': 'petal-fall linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        'spin-slow': 'spin-slow 12s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
