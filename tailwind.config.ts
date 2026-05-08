import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0D1B35',
          2: '#152849',
        },
        emerald: {
          DEFAULT: '#0B8F68',
          mid: '#0D7A59',
          light: '#E0F5EE',
          'on-dark': '#4DD4A8',
        },
        silver: '#F8FAFC',
        'text-mid': '#4B5A6E',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-outfit)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.125rem',
        section: '-0.0625rem',
        card: '-0.0125rem',
        label: '0.09375rem',
        tag: '0.075rem',
      },
      lineHeight: {
        display: '1.06',
        tight: '1.08',
        snug: '1.1',
        prose: '1.8',
        relaxed: '1.75',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
