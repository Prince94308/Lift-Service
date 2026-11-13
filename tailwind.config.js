import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#101820',
          50: '#F4F6F8',
          100: '#E2E7EC',
          800: '#15202B',
          900: '#101820',
          950: '#0B1015',
        },
        secondary: {
          DEFAULT: '#1C2935',
          light: '#2B3E50',
          dark: '#141E27',
        },
        accent: {
          DEFAULT: '#D4AF37',
          hover: '#C29C27',
          light: '#FAF4DC',
          dark: '#9C7E1E',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        lightBg: '#F5F7FA',
        darkText: '#17212B',
        mutedText: '#64748B',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(16, 24, 32, 0.08), 0 0 1px 1px rgba(16, 24, 32, 0.05)',
        'premium-hover': '0 30px 60px -12px rgba(16, 24, 32, 0.16), 0 0 1px 1px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
      },
    },
  },
  plugins: [],
};
