/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAFAFB',
          subtle: '#F4F4F6',
          warm: '#FDFDFC',
          card: '#FFFFFF',
        },
        charcoal: {
          DEFAULT: '#0F1117',
          900: '#0F1117',
          800: '#181A22',
          700: '#232734',
          600: '#323746',
          500: '#4A5164',
          400: '#6E768E',
          300: '#9EA6BA',
          200: '#D5DAE5',
          100: '#ECEEF3',
          50: '#F7F8FA',
        },
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5', // deep indigo accent
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          electric: '#2563EB',
          violet: '#7C3AED',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Geist', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(15, 17, 23, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 17, 23, 0.05), 0 2px 6px -1px rgba(15, 17, 23, 0.03)',
        'card-hover': '0 12px 32px -4px rgba(15, 17, 23, 0.08), 0 4px 12px -2px rgba(15, 17, 23, 0.04)',
        'float': '0 20px 40px -15px rgba(15, 17, 23, 0.12), 0 0 1px 1px rgba(15, 17, 23, 0.05)',
        'glow': '0 0 40px -10px rgba(99, 102, 241, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
}
