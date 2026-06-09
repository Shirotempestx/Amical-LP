/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#fed7aa',
          300: '#fb923c',
          500: '#f97316',
          700: '#c2410c',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
}
