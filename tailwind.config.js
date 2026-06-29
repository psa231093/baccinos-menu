/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Modern Appetite system
        paper: '#FCFBF9', // page background
        surface: '#FFFFFF', // cards
        ink: '#1A1A1A', // primary text
        muted: '#6B6660', // secondary text
        line: '#ECE8E2', // hairline borders
        accent: {
          DEFAULT: '#B5232B', // deep red
          dark: '#8E1A21',
          soft: '#FBEDED', // tinted background
        },
        // brand colors retained only for the logo/tricolore nod
        flag: { green: '#1a7a3c', red: '#d12027' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26,26,26,0.04), 0 10px 30px -16px rgba(26,26,26,0.18)',
        'card-hover': '0 2px 4px rgba(26,26,26,0.05), 0 18px 40px -14px rgba(26,26,26,0.22)',
        pill: '0 4px 14px -4px rgba(181,35,43,0.4)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.4s ease-out both',
        'fade-in': 'fade-in 0.3s ease-out both',
      },
    },
  },
  plugins: [],
}
