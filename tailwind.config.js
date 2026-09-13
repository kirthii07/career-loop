/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FDFCFB',
          100: '#FAF9F6',
          200: '#F4F2EC',
          300: '#E8E5DC',
          400: '#D5D1C3',
        },
        charcoal: {
          950: '#0A0A09',
          900: '#0F0F0E',
          800: '#1A1A18',
          700: '#2A2A26',
          600: '#45453F',
          500: '#68675E',
          400: '#929186',
          300: '#BEBDB3',
          200: '#E2E1D9',
          100: '#F0EFEA',
          50: '#F8F7F4',
        },
        loop: {
          indigo: '#6366F1',
          violet: '#8B5CF6',
          pink: '#EC4899',
          coral: '#F97316',
          lavender: '#EDE9FE',
          peach: '#FFEDD5',
          softblue: '#E0F2FE',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Geist', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 15, 14, 0.03), 0 1px 2px -1px rgba(15, 15, 14, 0.02)',
        'card': '0 4px 24px -2px rgba(15, 15, 14, 0.06), 0 1px 4px 0 rgba(15, 15, 14, 0.03)',
        'card-hover': '0 20px 40px -4px rgba(15, 15, 14, 0.1), 0 6px 16px -2px rgba(15, 15, 14, 0.04)',
        'float': '0 24px 48px -12px rgba(15, 15, 14, 0.14), 0 0 1px 1px rgba(15, 15, 14, 0.04)',
        'glow-accent': '0 0 60px -15px rgba(99, 102, 241, 0.25)',
        'glow-coral': '0 0 60px -15px rgba(249, 115, 22, 0.2)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'pulse-subtle': 'pulseSubtle 5s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'float-delayed': 'floatGentle 7s ease-in-out 2s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.88, transform: 'scale(0.99)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
