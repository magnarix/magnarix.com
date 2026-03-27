import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0E1A',
        navy: '#0D1B2E',
        'slate-deep': '#1A2744',
        steel: '#2A3F6F',
        frost: '#8BA4C8',
        'off-white': '#E8EDF5',
        accent: '#4A7CF7',
        'accent-light': '#6B96FF',
        gold: '#C9A84C',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
export default config
