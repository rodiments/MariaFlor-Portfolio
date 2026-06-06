/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#020617', // Deepest Navy
          900: '#0f172a', // Deep Slate
          800: '#1e293b', // Slate
          700: '#334155',
        },
        aurora: {
          400: '#7dd3fc', // Light Sky
          500: '#38bdf8', // Sky Blue
          600: '#0284c7', // Sapphire
        },
        mint: {
          400: '#34d399', // Light Mint (Added)
          500: '#10b981', // Emerald/Mint
          600: '#059669',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
