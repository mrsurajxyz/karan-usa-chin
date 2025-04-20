/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5E7A0',
          DEFAULT: '#D4AF37',
          dark: '#996515'
        },
        silver: {
          light: '#E8E8E8',
          DEFAULT: '#C0C0C0',
          dark: '#A9A9A9'
        },
        cream: {
          DEFAULT: '#FFFDD0',
        },
        purple: {
          light: '#8A2BE2',
          DEFAULT: '#4A0D67',
          dark: '#2E0854'
        },
        jewelry: {
          primary: '#1A1A1A',
          secondary: '#F8F8F8',
          accent: '#D4AF37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};