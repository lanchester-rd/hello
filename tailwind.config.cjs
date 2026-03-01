/** @type {import('tailwind-config').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0F14',
          layer1: '#11161C',
          layer2: '#151B22',
        },
        accent: {
          DEFAULT: '#A3E635', // Acid Green
          muted: '#76AA24',
        },
        foreground: '#FFFFFF',
        muted: '#9CA3AF', // text-gray-400
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tightest: '-.06em',
        widest: '.2em',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, #ffffff 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
